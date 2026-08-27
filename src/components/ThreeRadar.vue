<template>
  <div class="relative w-full h-full max-w-[500px] aspect-square mx-auto rounded-full overflow-hidden bg-navy-950/50 border border-accent-cyan/20" ref="containerRef">
    <!-- Overlay HUD Grid & Masks -->
    <div class="absolute inset-[15%] rounded-full border border-accent-cyan/15 pointer-events-none z-10"></div>
    <div class="absolute inset-[30%] rounded-full border border-accent-cyan/10 pointer-events-none z-10"></div>
    <div class="absolute inset-[45%] rounded-full border shadow-inner shadow-accent-cyan/5 border-accent-cyan/5 pointer-events-none z-10"></div>
    
    <div class="absolute top-1/2 left-0 w-full h-[1px] bg-accent-cyan/15 -translate-y-1/2 pointer-events-none z-10"></div>
    <div class="absolute left-1/2 top-0 h-full w-[1px] bg-accent-cyan/15 -translate-x-1/2 pointer-events-none z-10"></div>
    
    <!-- ThreeJS Canvas -->
    <div ref="canvasRef" class="absolute inset-0 z-0"></div>

    <!-- UI Overlay for Target Info -->
    <div class="absolute inset-0 pointer-events-none z-20 radar-targets-ui">
      <!-- Target 1: Ghost I (Lead) -->
      <div class="absolute w-2 h-2 -translate-x-1/2 -translate-y-1/2" :style="{ top: ghost1Pos.y + '%', left: ghost1Pos.x + '%' }">
        <div class="absolute inset-0 bg-accent-cyan rounded-full shadow-[0_0_8px_currentColor] target-pulse"></div>
        <div class="absolute top-3 left-3 text-accent-cyan font-mono text-[7px] tracking-wider px-1.5 py-0.5 whitespace-nowrap opacity-70">
          GHOST I
        </div>
      </div>

      <!-- Target 3: Ghost II (Wingman) -->
      <div class="absolute w-2 h-2 -translate-x-1/2 -translate-y-1/2" :style="{ top: ghost2Pos.y + '%', left: ghost2Pos.x + '%' }">
        <div class="absolute inset-0 bg-accent-cyan rounded-full shadow-[0_0_8px_currentColor] target-pulse" style="animation-delay: 0.5s"></div>
        <div class="absolute top-3 left-3 text-accent-cyan font-mono text-[7px] tracking-wider px-1.5 py-0.5 whitespace-nowrap opacity-50">
          GHOST II
        </div>
      </div>

      <!-- Target 2: Tango (Red/Orange) -->
      <div class="absolute w-2 h-2 -translate-x-1/2 -translate-y-1/2" :style="{ top: tangoPos.y + '%', left: tangoPos.x + '%' }">
        <div class="absolute inset-0 bg-accent-orange rounded-full shadow-[0_0_12px_rgba(212,132,90,0.8)] target-pulse-fast"></div>
        <div class="absolute -inset-2 border border-accent-orange/40 rounded-sm radar-lock-ui"></div>
        <div class="absolute top-3 right-3 flex flex-col gap-0.5">
          <div class="bg-black/60 border border-accent-orange/30 text-accent-orange font-mono text-[7px] tracking-wider px-1.5 py-0.5 whitespace-nowrap opacity-70">
            TANGO // 419
          </div>
          <div class="bg-accent-orange/20 text-accent-orange font-mono text-[6px] px-1 animate-pulse border border-accent-orange/40 text-center">
            LOCKED
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import * as THREE from 'three'
import gsap from 'gsap'

const containerRef = ref<HTMLElement | null>(null)
const canvasRef = ref<HTMLElement | null>(null)

// Posições reativas para as miras (iniciam fora da tela)
// O Tango inicia bem mais na frente
const tangoPos = ref({ x: 80, y: 10 })

// Os Ghosts iniciam bem mais atrás (isso fará com que voem mais rápido para alcançar o Tango)
const ghost1Pos = ref({ x: 130, y: -20 })
const ghost2Pos = ref({ x: 135, y: -15 }) 

let scene: THREE.Scene
let camera: THREE.PerspectiveCamera
let renderer: THREE.WebGLRenderer
let reqId: number

let sweepMesh: THREE.Mesh

onMounted(() => {
  if (!canvasRef.value || !containerRef.value) return

  scene = new THREE.Scene()
  
  // Isotropic camera setup
  camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100)
  camera.position.set(0, 12, 0) // Visão top-down (direto de cima)
  camera.lookAt(0, 0, 0)

  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
  renderer.setSize(containerRef.value.clientWidth, containerRef.value.clientHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  canvasRef.value.appendChild(renderer.domElement)

  // Radar Grid Base
  const gridHelper = new THREE.PolarGridHelper(5, 4, 8, 64, 0x5eafc5, 0x5eafc5)
  ;(gridHelper.material as THREE.Material).opacity = 0.2
  ;(gridHelper.material as THREE.Material).transparent = true
  scene.add(gridHelper)

  // Radar Sweep (Flat Slice)
  const sweepGeo = new THREE.CircleGeometry(5, 32, 0, Math.PI / 4)
  const sweepMat = new THREE.MeshBasicMaterial({
    color: 0x5eafc5,
    transparent: true,
    opacity: 0.1,
    side: THREE.DoubleSide,
    depthWrite: false,
    blending: THREE.AdditiveBlending
  })
  sweepMesh = new THREE.Mesh(sweepGeo, sweepMat)
  sweepMesh.rotation.x = -Math.PI / 2
  scene.add(sweepMesh)

  // 3D Target Blips (Points)
  const particlesGeo = new THREE.BufferGeometry()
  const particlesCount = 50
  const posArray = new Float32Array(particlesCount * 3)

  for(let i=0; i < particlesCount * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 10
  }
  particlesGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3))
  const particleMat = new THREE.PointsMaterial({
    size: 0.05,
    color: 0x5eafc5,
    transparent: true,
    opacity: 0.5,
    blending: THREE.AdditiveBlending
  })
  const particles = new THREE.Points(particlesGeo, particleMat)
  scene.add(particles)

  // Animação Tática de Interceptação Fluida
  const flightDuration = 12; // Mais rápido (12 segundos)

  // Função para criar uma trajetória curva perfeita (sem paradas)
  const createFlightPath = (target: any, startX: number, startY: number, endX: number, endY: number) => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 2 }); // Apenas 2s de pausa antes de voltar
    
    // Retorna para o ponto inicial fora do radar
    tl.set(target, { x: startX, y: startY })
    
    // Anima o eixo X constantemente (velocidade de cruzeiro frontal)
    tl.to(target, {
      x: endX,
      duration: flightDuration,
      ease: "none"
    }, 0)
    
    // Anima o eixo Y com uma curva de aceleração (simulando a curva de manobra/evasão)
    tl.to(target, {
      y: endY,
      duration: flightDuration,
      ease: "power2.inOut" 
    }, 0)
  }

  // Aplica o trajeto para cada contato no radar
  // O Tango (vermelho) começa muito mais na frente (x: 80), mas vai para o mesmo destino.
  // Isso significa que ele viaja mais devagar.
  createFlightPath(tangoPos.value, 80, 10, -40, 110)
  
  // Os Ghosts começam lá atrás (x: 130). Para chegarem ao final no mesmo tempo (12s),
  // eles têm que voar bem mais rápido! Isso cria a ilusão perfeita de que estão 
  // alcançando e fechando a distância contra o Tango.
  createFlightPath(ghost1Pos.value, 130, -20, -35, 115) 
  createFlightPath(ghost2Pos.value, 135, -15, -30, 120) 

  // Animation Loop
  const animate = () => {
    reqId = requestAnimationFrame(animate)

    // Rotate sweep (o feixe do radar gira no eixo Z do CircleGeometry)
    sweepMesh.rotation.z -= 0.02
    
    // Animação dos pontos (opcional, subindo um pouco)
    particles.rotation.y += 0.005

    renderer.render(scene, camera)
  }

  animate()

  // Handle Resize
  const handleResize = () => {
    if (!containerRef.value || !camera || !renderer) return
    const size = containerRef.value.clientWidth
    camera.aspect = 1
    camera.updateProjectionMatrix()
    renderer.setSize(size, size)
  }

  window.addEventListener('resize', handleResize)

  // Cleanup
  onBeforeUnmount(() => {
    cancelAnimationFrame(reqId)
    window.removeEventListener('resize', handleResize)
    renderer.dispose()
    gridHelper.dispose()
    sweepGeo.dispose()
    sweepMat.dispose()
    particlesGeo.dispose()
    particleMat.dispose()
  })
})
</script>

<style scoped>
.target-pulse {
  animation: pulse-cyan 2s infinite;
}
.target-pulse-fast {
  animation: pulse-orange 1s infinite;
}

@keyframes pulse-cyan {
  0% { transform: scale(0.95); opacity: 1; }
  50% { transform: scale(1.5); opacity: 0.4; }
  100% { transform: scale(0.95); opacity: 1; }
}

@keyframes pulse-orange {
  0% { transform: scale(0.95); opacity: 1; }
  50% { transform: scale(1.8); opacity: 0.2; }
  100% { transform: scale(0.95); opacity: 1; }
}
</style>
