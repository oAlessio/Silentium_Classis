<template>
  <div class="relative w-full h-full min-h-[300px] md:min-h-[500px] bg-navy-950/20 border border-white/10 rounded-sm overflow-hidden" ref="containerRef">
    <!-- Overlay HUD Grid -->
    <div class="absolute inset-0 pointer-events-none opacity-20">
      <div class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
    </div>
    
    <!-- Canvas container -->
    <div ref="canvasRef" class="w-full h-full cursor-crosshair"></div>
    
    <!-- Scanning Line -->
    <div class="absolute top-0 left-0 w-full h-[2px] bg-accent-cyan/50 shadow-[0_0_10px_rgba(94,175,197,0.8)] opacity-50 scan-line pointer-events-none"></div>

    <!-- Info Overlay -->
    <div class="absolute bottom-4 left-4 font-mono text-[9px] tracking-[0.3em] text-accent-cyan/70 bg-black/50 backdrop-blur-sm px-3 py-1.5 border border-accent-cyan/20 pointer-events-none">
      <span class="animate-pulse mr-2 block sm:inline">3D MESH</span> {{ title }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import gsap from 'gsap'

const props = defineProps<{
  title: string
  modelType: string // 'f14', 'fa18', 'f35'
}>()

const containerRef = ref<HTMLElement | null>(null)
const canvasRef = ref<HTMLElement | null>(null)

let scene: THREE.Scene
let camera: THREE.PerspectiveCamera
let renderer: THREE.WebGLRenderer
let jetGroup: THREE.Group
let reqId: number

onMounted(() => {
  if (!canvasRef.value || !containerRef.value) return

  // === SCENE SETUP ===
  scene = new THREE.Scene()
  scene.fog = new THREE.FogExp2(0x0a1118, 0.05) // navy-950 color match

  camera = new THREE.PerspectiveCamera(45, containerRef.value.clientWidth / containerRef.value.clientHeight, 0.1, 100)
  camera.position.set(0, 5, 15)
  camera.lookAt(0, 0, 0)

  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
  renderer.setSize(containerRef.value.clientWidth, containerRef.value.clientHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  canvasRef.value.appendChild(renderer.domElement)

  // === LIGHTING ===
  const ambientLight = new THREE.AmbientLight(0xffffff, 1.5) // Luz branca e forte para ver as texturas
  scene.add(ambientLight)
  
  const directionalLight = new THREE.DirectionalLight(0xffffff, 2) // Luz principal neutra
  directionalLight.position.set(5, 10, 5)
  scene.add(directionalLight)

  const rimLight = new THREE.DirectionalLight(0x5eafc5, 1) // Leve tom cyan nas bordas
  rimLight.position.set(-5, -5, -5)
  scene.add(rimLight)

  // === CONTROLS ===
  const controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true
  controls.dampingFactor = 0.05
  controls.autoRotate = true
  controls.autoRotateSpeed = 1.0
  controls.minDistance = 3
  controls.maxDistance = 40

  // === MODEL LOADING ===
  jetGroup = new THREE.Group()
  scene.add(jetGroup)

  const buildAbstractJet = () => {
    const material = new THREE.MeshStandardMaterial({ 
      color: 0x1a2634, 
      wireframe: true, 
      transparent: true, 
      opacity: 0.8,
      emissive: 0x5eafc5,
      emissiveIntensity: 0.2
    })

    const solidMaterial = new THREE.MeshStandardMaterial({
      color: 0x1a2634,
      metalness: 0.8,
      roughness: 0.2,
    })

    // Fuselage
    const fuselageGeo = new THREE.CylinderGeometry(0.5, 1.2, 8, 8)
    fuselageGeo.rotateX(Math.PI / 2)
    const fuselage = new THREE.Mesh(fuselageGeo, solidMaterial)
    const fuselageWire = new THREE.Mesh(fuselageGeo, material)
    jetGroup.add(fuselage)
    jetGroup.add(fuselageWire)

    // Nose
    const noseGeo = new THREE.ConeGeometry(0.5, 3, 8)
    noseGeo.rotateX(Math.PI / 2)
    noseGeo.translate(0, 0, 5.5)
    const nose = new THREE.Mesh(noseGeo, solidMaterial)
    const noseWire = new THREE.Mesh(noseGeo, material)
    jetGroup.add(nose)
    jetGroup.add(noseWire)

    // Wings
    const wingGeo = new THREE.BoxGeometry(10, 0.2, 3)
    if (props.modelType === 'f14') {
      wingGeo.translate(0, 0, 1)
    } else if (props.modelType === 'f35') {
      wingGeo.scale(0.8, 1, 1.2)
    }
    const wings = new THREE.Mesh(wingGeo, solidMaterial)
    const wingsWire = new THREE.Mesh(wingGeo, material)
    jetGroup.add(wings)
    jetGroup.add(wingsWire)

    // Tail
    const tailGeo = new THREE.BoxGeometry(0.2, 2, 2)
    tailGeo.translate(0, 1, -3)
    const tail = new THREE.Mesh(tailGeo, solidMaterial)
    const tailWire = new THREE.Mesh(tailGeo, material)
    jetGroup.add(tail)
    jetGroup.add(tailWire)
  }

  const loader = new GLTFLoader()
  
  const getModelUrls = (type: string): string[] => {
    if (type === 'f14') return ['/models/f-14_tomcat_-_fighter_jet_-_free.glb']
    if (type === 'f35') return ['/models/f-35_lightning_ii_-_fighter_jet_-_free.glb']
    if (type === 'fa18') return [
      '/models/boeing_fa-18f_super_hornet_-_free.glb'
    ]
    return []
  }

  const modelUrls = getModelUrls(props.modelType)
  let failed = false

  if (modelUrls.length === 0) {
    buildAbstractJet()
  } else {
    modelUrls.forEach((url, index) => {
      loader.load(
        url,
        (gltf) => {
          // Normalize model size and position
          const box = new THREE.Box3().setFromObject(gltf.scene)
          const center = box.getCenter(new THREE.Vector3())
          const size = box.getSize(new THREE.Vector3())
          
          const maxDim = Math.max(size.x, size.y, size.z)
          const scale = (modelUrls.length > 1 ? 6 : 10) / maxDim // Menor se tiver mais de um
          
          gltf.scene.scale.set(scale, scale, scale)
          
          // Calcula a posição lado a lado (offset no X)
          const offsetX = modelUrls.length > 1 ? (index === 0 ? -4 : 4) : 0
          gltf.scene.position.set((-center.x * scale) + offsetX, -center.y * scale, -center.z * scale)
          
          // Corrige materiais PBR que ficam "pretos/invisíveis" por falta de reflexo de ambiente (envMap)
          gltf.scene.traverse((child) => {
            if (child instanceof THREE.Mesh) {
              if (child.material) {
                // Se o material usar metalness (MeshStandardMaterial/MeshPhysicalMaterial)
                if (child.material.metalness !== undefined) {
                  // Modelos com metalness alto ficam pretos se não houver um cenário para refletir. 
                  // Então limitamos o metalness e aumentamos a rugosidade.
                  child.material.metalness = Math.min(child.material.metalness, 0.3)
                  child.material.roughness = Math.max(child.material.roughness || 0, 0.6)
                }
                child.material.needsUpdate = true
              }
            }
          })
          
          const pivot = new THREE.Group()
          pivot.add(gltf.scene)
          jetGroup.add(pivot)
        },
        undefined,
        (error) => {
          console.warn(`[3D Viewer] Modelo ${url} não encontrado. Usando fallback abstrato.`, error)
          if (!failed) {
            failed = true
            buildAbstractJet()
          }
        }
      )
    })
  }

  // Floating animation
  gsap.to(jetGroup.position, {
    y: 0.5,
    duration: 2,
    yoyo: true,
    repeat: -1,
    ease: "sine.inOut"
  })

  // Scan line animation
  gsap.to(containerRef.value.querySelector('.scan-line'), {
    top: '100%',
    duration: 3,
    repeat: -1,
    ease: "linear"
  })

  // Animation Loop
  const animate = () => {
    reqId = requestAnimationFrame(animate)

    // Update OrbitControls
    controls.update()

    renderer.render(scene, camera)
  }

  animate()

  // Handle Resize
  const handleResize = () => {
    if (!containerRef.value || !camera || !renderer) return
    camera.aspect = containerRef.value.clientWidth / containerRef.value.clientHeight
    camera.updateProjectionMatrix()
    renderer.setSize(containerRef.value.clientWidth, containerRef.value.clientHeight)
  }

  window.addEventListener('resize', handleResize)

  // Cleanup
  onBeforeUnmount(() => {
    cancelAnimationFrame(reqId)
    window.removeEventListener('resize', handleResize)
    controls.dispose()
    renderer.dispose()
    fuselageGeo.dispose()
    noseGeo.dispose()
    wingGeo.dispose()
    tailGeo.dispose()
    material.dispose()
    solidMaterial.dispose()
  })
})
</script>
