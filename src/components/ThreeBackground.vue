<template>
  <div class="fixed inset-0 pointer-events-none z-[-1]" ref="containerRef">
    <div ref="canvasRef" class="w-full h-full"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import * as THREE from 'three'
import gsap from 'gsap'

const containerRef = ref<HTMLElement | null>(null)
const canvasRef = ref<HTMLElement | null>(null)

let scene: THREE.Scene
let camera: THREE.PerspectiveCamera
let renderer: THREE.WebGLRenderer
let reqId: number

let particles: THREE.Points

onMounted(() => {
  if (!canvasRef.value || !containerRef.value) return

  // === SCENE SETUP ===
  scene = new THREE.Scene()
  // Very dark fog matching the app's navy-950 background
  scene.fog = new THREE.FogExp2(0x0a1118, 0.002)

  camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000)
  camera.position.set(0, 5, 20)
  
  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  canvasRef.value.appendChild(renderer.domElement)

  // === PARTICLES (Atmosphere / Ash / Sparks) ===
  const particleCount = 2000
  const geometry = new THREE.BufferGeometry()
  const positions = new Float32Array(particleCount * 3)
  const velocities = []

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 100
    positions[i * 3 + 1] = (Math.random() - 0.5) * 100
    positions[i * 3 + 2] = (Math.random() - 0.5) * 100
    velocities.push({
      x: (Math.random() - 0.5) * 0.02,
      y: Math.random() * 0.02 + 0.01,
      z: (Math.random() - 0.5) * 0.02
    })
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

  const material = new THREE.PointsMaterial({
    color: 0x5eafc5, // accent-cyan
    size: 0.1,
    transparent: true,
    opacity: 0.4,
    blending: THREE.AdditiveBlending
  })

  particles = new THREE.Points(geometry, material)
  scene.add(particles)

  // Mouse Interaction for Particles Parallax
  let mouseX = 0
  let mouseY = 0
  const handleMouseMove = (event: MouseEvent) => {
    mouseX = (event.clientX / window.innerWidth) * 2 - 1
    mouseY = -(event.clientY / window.innerHeight) * 2 + 1
  }
  window.addEventListener('mousemove', handleMouseMove)

  // Scroll Interaction (GSAP)
  const handleScroll = () => {
    const scrollY = window.scrollY
    // Move camera down slightly based on scroll
    gsap.to(camera.position, {
      y: 5 - scrollY * 0.005,
      z: 20 - scrollY * 0.01,
      duration: 1,
      ease: "power2.out"
    })
  }
  window.addEventListener('scroll', handleScroll)

  // Animation Loop
  const animate = () => {
    reqId = requestAnimationFrame(animate)

    // Parallax effect on camera
    camera.position.x += (mouseX * 5 - camera.position.x) * 0.02
    camera.lookAt(0, 0, 0)

    // Animate particles
    const positionsAttr = particles.geometry.attributes.position
    const posArray = positionsAttr.array as Float32Array

    for (let i = 0; i < particleCount; i++) {
      posArray[i * 3 + 1] += velocities[i].y // move up

      // Reset if out of bounds
      if (posArray[i * 3 + 1] > 50) {
        posArray[i * 3 + 1] = -50
      }
    }
    positionsAttr.needsUpdate = true

    renderer.render(scene, camera)
  }

  animate()

  // Handle Resize
  const handleResize = () => {
    if (!camera || !renderer) return
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
  }

  window.addEventListener('resize', handleResize)

  // Cleanup
  onBeforeUnmount(() => {
    cancelAnimationFrame(reqId)
    window.removeEventListener('resize', handleResize)
    window.removeEventListener('mousemove', handleMouseMove)
    window.removeEventListener('scroll', handleScroll)
    renderer.dispose()
    geometry.dispose()
    material.dispose()
  })
})
</script>
