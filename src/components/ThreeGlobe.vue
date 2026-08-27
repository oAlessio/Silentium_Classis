<template>
  <div class="relative w-full h-full min-h-[500px] overflow-hidden rounded-xl bg-black/80 border border-white/10 select-none">
    <!-- Canvas Container -->
    <div ref="container" class="w-full h-full cursor-grab active:cursor-grabbing"></div>

    <!-- Optics Overlay Shader Effect -->
    <div 
      class="absolute inset-0 pointer-events-none transition-colors duration-700"
      :class="{
        'bg-emerald-950/30 mix-blend-multiply': opticsMode === 'NVG',
        'bg-orange-950/30 mix-blend-multiply': opticsMode === 'FLIR',
      }"
    ></div>

    <!-- NVG Scan Lines -->
    <div v-if="opticsMode === 'NVG'" class="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px]"></div>

    <!-- FLIR Noise -->
    <div v-if="opticsMode === 'FLIR'" class="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(90deg,rgba(0,0,0,0)_50%,rgba(255,100,0,0.05)_50%)] bg-[length:3px_100%]"></div>

    <!-- Zoom & Camera Control Overlay Panel (Top Left) -->
    <div class="absolute top-4 left-4 z-20 flex flex-col gap-1.5 bg-black/80 backdrop-blur-md p-1.5 rounded-lg border border-white/15 shadow-xl font-mono text-xs">
      <button 
        @click="zoomIn()" 
        title="Aproximar Zoom (+)"
        class="w-8 h-8 flex items-center justify-center rounded bg-white/5 hover:bg-accent-cyan/20 hover:text-accent-cyan text-gray-300 border border-white/10 transition-all font-bold"
      >
        <Plus class="w-4 h-4" />
      </button>

      <button 
        @click="zoomOut()" 
        title="Afastar Zoom (-)"
        class="w-8 h-8 flex items-center justify-center rounded bg-white/5 hover:bg-accent-cyan/20 hover:text-accent-cyan text-gray-300 border border-white/10 transition-all font-bold"
      >
        <Minus class="w-4 h-4" />
      </button>

      <button 
        @click="resetZoom()" 
        title="Resetar Câmera"
        class="w-8 h-8 flex items-center justify-center rounded bg-white/5 hover:bg-amber-500/20 hover:text-amber-400 text-gray-300 border border-white/10 transition-all"
      >
        <RotateCcw class="w-3.5 h-3.5" />
      </button>

      <div class="text-[9px] text-center font-bold text-accent-cyan/80 pt-1 border-t border-white/10 select-none">
        {{ zoomPercentage }}%
      </div>
    </div>

    <!-- Tooltip floating over hovered asset -->
    <div 
      v-if="hoveredAssetName"
      class="absolute pointer-events-none font-mono text-xs px-3 py-1.5 rounded bg-black/90 border border-accent-cyan/60 text-accent-cyan shadow-[0_0_12px_rgba(94,175,197,0.4)] z-20 whitespace-nowrap"
      :style="{ left: tooltipPos.x + 'px', top: tooltipPos.y + 'px', transform: 'translate(-50%, -130%)' }"
    >
      {{ hoveredAssetName }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount, watch } from 'vue'
import * as THREE from 'three'
import { Plus, Minus, RotateCcw } from 'lucide-vue-next'
import { REAL_TACTICAL_ASSETS, type NavalAsset } from '../data/tacticalData'

const props = defineProps<{
  opticsMode: 'HUD' | 'NVG' | 'FLIR'
  selectedAssetId?: string
}>()

const emit = defineEmits<{
  (e: 'select-asset', asset: NavalAsset): void
}>()

const container = ref<HTMLDivElement | null>(null)
const hoveredAssetName = ref('')
const tooltipPos = ref({ x: 0, y: 0 })

let scene: THREE.Scene
let camera: THREE.PerspectiveCamera
let renderer: THREE.WebGLRenderer
let globeGroup: THREE.Group
let animationFrameId: number
let raycaster: THREE.Raycaster
let mouse: THREE.Vector2

// Zoom Configuration
const minCameraZ = 6.0
const maxCameraZ = 24.0
const initialCameraZ = 14.0
let targetCameraZ = initialCameraZ
const currentCameraZ = ref(initialCameraZ)

const zoomPercentage = computed(() => {
  return Math.round((initialCameraZ / currentCameraZ.value) * 100)
})

function zoomIn() {
  targetCameraZ = Math.max(minCameraZ, targetCameraZ - 2.2)
}

function zoomOut() {
  targetCameraZ = Math.min(maxCameraZ, targetCameraZ + 2.2)
}

function resetZoom() {
  targetCameraZ = initialCameraZ
  if (globeGroup) {
    targetRotationX = 0
    targetRotationY = 0
  }
}

// Interactive Dragging & Rotation Smoothing
let isDragging = false
let dragDistance = 0
let previousMousePosition = { x: 0, y: 0 }
let targetRotationX = 0
let targetRotationY = 0

interface AssetMeshEntry {
  hitbox: THREE.Mesh
  visual: THREE.Group
  asset: NavalAsset
}
const assetMeshes: AssetMeshEntry[] = []

// Convert Lat/Lng to 3D Coordinates on Sphere
function latLngToVector3(lat: number, lng: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180)
  const theta = (lng + 180) * (Math.PI / 180)

  const x = -(radius * Math.sin(phi) * Math.cos(theta))
  const z = radius * Math.sin(phi) * Math.sin(theta)
  const y = radius * Math.cos(phi)

  return new THREE.Vector3(x, y, z)
}

function focusOnAsset(assetId?: string, zoomInCloser = false) {
  if (!assetId) return
  const found = assetMeshes.find(a => a.asset.id === assetId)
  if (!found || !globeGroup) return

  const lat = found.asset.lat
  const lng = found.asset.lng

  // Target rotations to align Lat/Lng with front (+Z)
  targetRotationY = -(lng + 90) * (Math.PI / 180)
  targetRotationX = lat * (Math.PI / 180)

  if (zoomInCloser) {
    targetCameraZ = 9.5
  }
}

function initThree() {
  if (!container.value) return

  const width = container.value.clientWidth
  const height = container.value.clientHeight

  scene = new THREE.Scene()
  
  camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000)
  camera.position.z = initialCameraZ

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setSize(width, height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  container.value.appendChild(renderer.domElement)

  raycaster = new THREE.Raycaster()
  mouse = new THREE.Vector2()

  globeGroup = new THREE.Group()
  scene.add(globeGroup)

  buildGlobeGeometry()
  updateLights()

  const dom = container.value
  dom.addEventListener('mousedown', onMouseDown)
  dom.addEventListener('mousemove', onMouseMove)
  dom.addEventListener('mouseup', onMouseUp)
  dom.addEventListener('click', onClick)
  dom.addEventListener('wheel', onWheel, { passive: false })
  window.addEventListener('resize', onWindowResize)

  if (props.selectedAssetId) {
    focusOnAsset(props.selectedAssetId)
  }

  animate()
}

function updateLights() {
  scene.children.filter(c => c instanceof THREE.Light).forEach(l => scene.remove(l))

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
  scene.add(ambientLight)

  const sunLight = new THREE.DirectionalLight(0xffffff, 1.5)
  sunLight.position.set(8, 5, 10)
  scene.add(sunLight)

  const fillLight = new THREE.DirectionalLight(0x4488cc, 0.4)
  fillLight.position.set(-8, -3, -5)
  scene.add(fillLight)
}

function buildGlobeGeometry() {
  while (globeGroup.children.length > 0) {
    globeGroup.remove(globeGroup.children[0])
  }
  assetMeshes.length = 0

  const radius = 4.5

  // Load NASA Blue Marble Earth texture
  const textureLoader = new THREE.TextureLoader()
  const earthTexture = textureLoader.load(
    'https://unpkg.com/three-globe@2.41.12/example/img/earth-blue-marble.jpg'
  )

  // Color adjustments per mode
  let globeColor = 0xbbbbbb
  if (props.opticsMode === 'NVG') globeColor = 0x44dd88
  else if (props.opticsMode === 'FLIR') globeColor = 0xff8844

  const globeGeo = new THREE.SphereGeometry(radius, 64, 64)
  const globeMat = new THREE.MeshPhongMaterial({
    map: earthTexture,
    color: globeColor,
    shininess: 15,
    specular: new THREE.Color(0x222222)
  })

  const globeMesh = new THREE.Mesh(globeGeo, globeMat)
  globeGroup.add(globeMesh)

  // Atmosphere Glow
  let atmosphereColor = 0x5eafc5
  if (props.opticsMode === 'NVG') atmosphereColor = 0x34d399
  if (props.opticsMode === 'FLIR') atmosphereColor = 0xef4444

  const atmosphereGeo = new THREE.SphereGeometry(radius + 0.12, 64, 64)
  const atmosphereMat = new THREE.MeshBasicMaterial({
    color: atmosphereColor,
    transparent: true,
    opacity: 0.12,
    side: THREE.BackSide
  })
  globeGroup.add(new THREE.Mesh(atmosphereGeo, atmosphereMat))

  // Outer glow shell
  const outerGeo = new THREE.SphereGeometry(radius + 0.35, 64, 64)
  const outerMat = new THREE.MeshBasicMaterial({
    color: atmosphereColor,
    transparent: true,
    opacity: 0.04,
    side: THREE.BackSide
  })
  globeGroup.add(new THREE.Mesh(outerGeo, outerMat))

  // Satellite orbital ring
  const orbitGeo = new THREE.RingGeometry(6.4, 6.48, 128)
  const orbitMat = new THREE.MeshBasicMaterial({
    color: atmosphereColor,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.25
  })
  const orbitRing = new THREE.Mesh(orbitGeo, orbitMat)
  orbitRing.rotation.x = Math.PI / 3
  globeGroup.add(orbitRing)

  // Add asset markers — Carrier Strike Groups, Submarine Patrols, Naval Stations & Satellites
  REAL_TACTICAL_ASSETS.forEach(asset => {
    let targetRadius = radius + 0.08
    if (asset.type === 'satellite') targetRadius = 6.4

    const pos = latLngToVector3(asset.lat, asset.lng, targetRadius)

    // Distinct Colors for Asset Categories
    let markerColor = 0xd4af37 // Gold for Bases
    if (asset.category === 'Carrier Strike Group') markerColor = 0x06b6d4 // Cyan-blue for Carriers
    else if (asset.category === 'Submarine Patrol') markerColor = 0x10b981 // Emerald for Submarines
    else if (asset.type === 'satellite') markerColor = 0xa855f7 // Purple for Satellites

    if (asset.status === 'ALERTA MÁXIMO') markerColor = 0xef4444

    if (props.opticsMode === 'NVG') markerColor = 0x34d399
    if (props.opticsMode === 'FLIR') markerColor = 0xf97316

    // Visual group
    const visualGroup = new THREE.Group()
    visualGroup.position.copy(pos)

    // Inner dot
    const dotGeo = new THREE.SphereGeometry(asset.category === 'Carrier Strike Group' ? 0.11 : 0.09, 16, 16)
    const dotMat = new THREE.MeshBasicMaterial({ color: markerColor })
    visualGroup.add(new THREE.Mesh(dotGeo, dotMat))

    // Outer ring (pulsing via animation)
    const ringRadiusOuter = asset.category === 'Carrier Strike Group' ? 0.24 : 0.19
    const ringGeo = new THREE.RingGeometry(0.11, ringRadiusOuter, 32)
    const ringMat = new THREE.MeshBasicMaterial({
      color: markerColor,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.75
    })
    const ringMesh = new THREE.Mesh(ringGeo, ringMat)
    ringMesh.lookAt(new THREE.Vector3(0, 0, 0))
    visualGroup.add(ringMesh)

    // Vertical altitude spike for ground & sea assets
    if (asset.type !== 'satellite') {
      const spikeEnd = latLngToVector3(asset.lat, asset.lng, targetRadius + 0.38)
      const spikePoints = [pos.clone(), spikeEnd]
      const spikeGeo = new THREE.BufferGeometry().setFromPoints(spikePoints)
      const spikeMat = new THREE.LineBasicMaterial({ color: markerColor, transparent: true, opacity: 0.6 })
      const spikeLine = new THREE.Line(spikeGeo, spikeMat)
      globeGroup.add(spikeLine)
    }

    globeGroup.add(visualGroup)

    // Large invisible hitbox sphere for 100% reliable click detection
    const hitboxGeo = new THREE.SphereGeometry(0.55, 12, 12)
    const hitboxMat = new THREE.MeshBasicMaterial({ visible: false })
    const hitboxMesh = new THREE.Mesh(hitboxGeo, hitboxMat)
    hitboxMesh.position.copy(pos)
    globeGroup.add(hitboxMesh)

    assetMeshes.push({ hitbox: hitboxMesh, visual: visualGroup, asset })

    // Arc lines connecting active patrols to primary home ports
    if (asset.type === 'patrol') {
      const basePos = latLngToVector3(36.9467, -76.3033, radius + 0.05) // Norfolk reference
      const midPoint = new THREE.Vector3().addVectors(pos, basePos).multiplyScalar(0.5)
      midPoint.normalize().multiplyScalar(radius + 1.4)

      const curve = new THREE.QuadraticBezierCurve3(basePos, midPoint, pos)
      const points = curve.getPoints(40)
      const lineGeo = new THREE.BufferGeometry().setFromPoints(points)
      const lineMat = new THREE.LineBasicMaterial({
        color: markerColor,
        transparent: true,
        opacity: 0.25
      })
      globeGroup.add(new THREE.Line(lineGeo, lineMat))
    }
  })
}

// Mouse Wheel Zoom
function onWheel(e: WheelEvent) {
  e.preventDefault()
  const zoomFactor = e.deltaY * 0.012
  targetCameraZ = Math.max(minCameraZ, Math.min(maxCameraZ, targetCameraZ + zoomFactor))
}

// Interactivity handlers
function onMouseDown(e: MouseEvent) {
  isDragging = true
  dragDistance = 0
  previousMousePosition = { x: e.clientX, y: e.clientY }
}

function onMouseMove(e: MouseEvent) {
  if (!container.value) return

  // Handle drag
  if (isDragging) {
    const deltaX = e.clientX - previousMousePosition.x
    const deltaY = e.clientY - previousMousePosition.y
    dragDistance += Math.abs(deltaX) + Math.abs(deltaY)

    targetRotationY += deltaX * 0.005
    targetRotationX += deltaY * 0.005
    targetRotationX = Math.max(-Math.PI / 3, Math.min(Math.PI / 3, targetRotationX))

    previousMousePosition = { x: e.clientX, y: e.clientY }
  }

  // Hover detection for tooltip
  const rect = container.value.getBoundingClientRect()
  mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1
  mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1

  raycaster.setFromCamera(mouse, camera)
  const intersects = raycaster.intersectObjects(assetMeshes.map(a => a.hitbox))

  if (intersects.length > 0) {
    const hitObj = intersects[0].object
    const found = assetMeshes.find(a => a.hitbox === hitObj)
    if (found) {
      hoveredAssetName.value = found.asset.name
      tooltipPos.value = { x: e.clientX - rect.left, y: e.clientY - rect.top }
      if (container.value) container.value.style.cursor = 'pointer'
    }
  } else {
    hoveredAssetName.value = ''
    if (container.value) container.value.style.cursor = isDragging ? 'grabbing' : 'grab'
  }
}

function onMouseUp() {
  isDragging = false
}

function onClick(e: MouseEvent) {
  if (dragDistance > 5) return
  if (!container.value) return

  const rect = container.value.getBoundingClientRect()
  mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1
  mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1

  raycaster.setFromCamera(mouse, camera)
  const intersects = raycaster.intersectObjects(assetMeshes.map(a => a.hitbox))

  if (intersects.length > 0) {
    const hitObj = intersects[0].object
    const found = assetMeshes.find(a => a.hitbox === hitObj)
    if (found) {
      emit('select-asset', found.asset)
      focusOnAsset(found.asset.id, true)
    }
  }
}

function onWindowResize() {
  if (!container.value) return
  const width = container.value.clientWidth
  const height = container.value.clientHeight

  camera.aspect = width / height
  camera.updateProjectionMatrix()
  renderer.setSize(width, height)
}

function animate() {
  animationFrameId = requestAnimationFrame(animate)

  // Smooth rotation damping
  if (globeGroup) {
    if (!isDragging) {
      targetRotationY += 0.0008
    }
    globeGroup.rotation.y += (targetRotationY - globeGroup.rotation.y) * 0.08
    globeGroup.rotation.x += (targetRotationX - globeGroup.rotation.x) * 0.08
  }

  // Smooth camera zoom damping
  if (camera) {
    camera.position.z += (targetCameraZ - camera.position.z) * 0.1
    currentCameraZ.value = camera.position.z
  }

  // Pulse visual markers & highlight selected pin
  const time = Date.now() * 0.003
  assetMeshes.forEach(item => {
    const isSelected = props.selectedAssetId === item.asset.id
    const baseScale = isSelected ? 1.6 : 1.0
    const pulseAmt = isSelected ? 0.35 : 0.2
    const scale = baseScale + Math.sin(time + item.asset.lat * 0.1) * pulseAmt
    item.visual.scale.set(scale, scale, scale)
  })

  renderer.render(scene, camera)
}

defineExpose({
  focusOnAsset,
  zoomIn,
  zoomOut,
  resetZoom
})

// Watch selectedAssetId to focus on selected asset
watch(() => props.selectedAssetId, (newId) => {
  if (newId) {
    focusOnAsset(newId)
  }
})

// Watch opticsMode prop
watch(() => props.opticsMode, () => {
  if (globeGroup) {
    buildGlobeGeometry()
    updateLights()
  }
})

onMounted(() => {
  initThree()
})

onBeforeUnmount(() => {
  cancelAnimationFrame(animationFrameId)
  if (container.value) {
    const dom = container.value
    dom.removeEventListener('mousedown', onMouseDown)
    dom.removeEventListener('mousemove', onMouseMove)
    dom.removeEventListener('mouseup', onMouseUp)
    dom.removeEventListener('click', onClick)
    dom.removeEventListener('wheel', onWheel)
  }
  window.removeEventListener('resize', onWindowResize)
  renderer?.dispose()
})
</script>
