<template>
  <div class="relative w-full h-full min-h-screen bg-black overflow-hidden select-none font-mono text-red-500 doomsday-crt">
    <!-- Map Container -->
    <div id="doomsday-map" class="absolute inset-0 z-0 grayscale-[0.8] contrast-125 sepia-[0.3] hue-rotate-[-30deg]"></div>

    <!-- CRT Overlay Effects -->
    <div class="pointer-events-none absolute inset-0 z-40 doomsday-scanlines opacity-40 mix-blend-overlay"></div>
    <div class="pointer-events-none absolute inset-0 z-40 shadow-[inset_0_0_150px_rgba(255,0,0,0.4)]"></div>

    <!-- Control Panel -->
    <div class="absolute top-4 left-4 w-96 max-h-[90vh] bg-[#0a0000]/95 border-2 border-red-600 shadow-[0_0_30px_rgba(255,0,0,0.6)] z-50 flex flex-col p-4 rounded-sm backdrop-blur-sm">
      
      <!-- Header -->
      <div class="border-b-2 border-red-800 pb-2 mb-4 flex justify-between items-start">
        <div>
          <h1 class="text-2xl font-bold tracking-widest text-red-600 animate-pulse">DOOMSDAY PROTOCOL</h1>
          <p class="text-xs text-red-800 uppercase tracking-widest mt-1">Strategic Command Interface</p>
        </div>
        <button @click="$router.push('/classified')" class="text-xs border border-red-800 text-red-500 px-2 py-1 hover:bg-red-900/50 hover:text-white transition-colors">
          RETURN
        </button>
      </div>

      <!-- Step 1: Operation Type -->
      <div class="mb-4">
        <label class="block text-xs uppercase text-red-700 mb-1">1. Operation Type</label>
        <select v-model="operationType" class="w-full bg-black border border-red-800 text-red-500 p-2 text-sm focus:outline-none focus:border-red-500 transition-colors">
          <option value="nuclear">Strategic Nuclear Strike</option>
          <option value="air">Carrier Airstrike</option>
          <option value="ground">Special Ops Incursion</option>
          <option value="naval">Naval Cruise Missile Strike</option>
        </select>
      </div>

      <!-- Step 2: Attacker -->
      <div class="mb-4">
        <label class="block text-xs uppercase text-red-700 mb-1">2. Launch Authority</label>
        <select v-model="attacker" class="w-full bg-black border border-red-800 text-red-500 p-2 text-sm focus:outline-none focus:border-red-500 transition-colors">
          <option value="usa">United States (USSTRATCOM)</option>
          <option value="rus">Russian Federation (RVSN)</option>
        </select>
      </div>

      <!-- Step 3: Asset -->
      <div class="mb-6">
        <label class="block text-xs uppercase text-red-700 mb-1">3. Delivery System</label>
        <select v-model="asset" class="w-full bg-black border border-red-800 text-red-500 p-2 text-sm focus:outline-none focus:border-red-500 transition-colors">
          <option v-for="a in availableAssets" :key="a.id" :value="a.id">
            {{ a.name }}
          </option>
        </select>
      </div>

      <!-- Step 4: Map Placement -->
      <div class="mb-6 flex flex-col gap-2">
        <label class="block text-xs uppercase text-red-700 mb-1">4. Strategic Placement</label>
        
        <button 
          v-if="operationType === 'nuclear'"
          @click="mapMode = 'deploy_sub'"
          class="w-full text-left p-2 border transition-colors text-sm flex items-center justify-between"
          :class="mapMode === 'deploy_sub' ? 'bg-red-900/40 border-red-500 text-white' : 'bg-black border-red-900 text-red-700 hover:border-red-700'"
        >
          <span>[A] Deploy Platform</span>
          <span v-if="subCoords" class="text-blue-500 font-bold">SET</span>
        </button>

        <button 
          @click="mapMode = 'acquire_target'"
          class="w-full text-left p-2 border transition-colors text-sm flex items-center justify-between"
          :class="mapMode === 'acquire_target' ? 'bg-red-900/40 border-red-500 text-white' : 'bg-black border-red-900 text-red-700 hover:border-red-700'"
        >
          <div class="flex flex-col">
            <span>[B] Acquire Target</span>
            <span v-if="targetCoords" class="text-[10px] text-red-400 mt-1">LAT: {{ targetCoords.lat.toFixed(4) }} // LNG: {{ targetCoords.lng.toFixed(4) }}</span>
          </div>
          <span v-if="targetCoords" class="text-red-500 font-bold">LOCKED</span>
        </button>
      </div>

      <!-- Launch Button -->
      <button 
        @click="initiateLaunch"
        :disabled="!isReadyToLaunch || missileInFlight"
        class="mt-auto w-full py-4 text-xl font-bold uppercase tracking-[0.3em] border-2 transition-all duration-300"
        :class="{
          'bg-red-900/50 border-red-600 text-red-200 hover:bg-red-600 hover:text-white hover:shadow-[0_0_30px_rgba(255,0,0,0.8)] cursor-pointer': isReadyToLaunch && !missileInFlight,
          'bg-black border-red-950 text-red-950 cursor-not-allowed': !isReadyToLaunch || missileInFlight
        }"
      >
        Authorize
      </button>

      <!-- Launch Status -->
      <div v-if="launchStatus" class="mt-4 text-center text-sm font-bold animate-pulse text-white bg-red-800 p-2">
        {{ launchStatus }}
      </div>

    </div>

    <!-- Time Warp Controls (Appears during flight) -->
    <div v-if="missileInFlight" class="absolute bottom-8 right-8 bg-black/80 border border-red-500 p-2 flex gap-2 z-50 shadow-[0_0_15px_red]">
      <div class="text-xs text-red-500 uppercase flex items-center pr-2 border-r border-red-900">Time Warp</div>
      <button @click="timeWarp = 1" :class="timeWarp === 1 ? 'bg-red-700 text-white' : 'text-red-500 hover:bg-red-900/50'" class="px-2 py-1 text-xs font-bold transition-colors">x1</button>
      <button @click="timeWarp = 4" :class="timeWarp === 4 ? 'bg-red-700 text-white' : 'text-red-500 hover:bg-red-900/50'" class="px-2 py-1 text-xs font-bold transition-colors">x4</button>
      <button @click="timeWarp = 10" :class="timeWarp === 10 ? 'bg-red-700 text-white' : 'text-red-500 hover:bg-red-900/50'" class="px-2 py-1 text-xs font-bold transition-colors">x10</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, computed, watch } from 'vue'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

// State
const operationType = ref('nuclear')
const attacker = ref('usa')
const asset = ref('')
const mapMode = ref<'deploy_sub' | 'acquire_target'>('deploy_sub')
const subCoords = ref<{lat: number, lng: number} | null>(null)
const targetCoords = ref<{lat: number, lng: number} | null>(null)
const carrierCoords = ref<{lat: number, lng: number} | null>(null)
const launchStatus = ref('')
const missileInFlight = ref(false)
const timeWarp = ref(1)

let map: L.Map | null = null
let targetMarker: L.Marker | null = null
let impactCircles: L.LayerGroup | null = null
let subMarker: L.Marker | null = null
let carrierMarker: L.Marker | null = null
let missileMarker: L.Marker | null = null
let trajectoryLine: L.Polyline | null = null
let animationFrameId = 0

// Mock Data for Assets
const assetData = {
  nuclear: {
    usa: [{ id: 'ssbn726', name: 'Ohio-class SSBN' }, { id: 'lgn30', name: 'Minuteman III Silo' }],
    rus: [{ id: 'borei', name: 'Borei-class SSBN' }, { id: 'rs24', name: 'RS-24 Yars Mobile' }]
  },
  air: {
    usa: [{ id: 'cvn78', name: 'USS Gerald R. Ford (CVN-78)' }, { id: 'cvn68', name: 'Nimitz-class Carrier' }],
    rus: [{ id: 'kuznetsov', name: 'Admiral Kuznetsov' }]
  },
  ground: {
    usa: [{ id: 'delta', name: 'Delta Force / JSOC' }, { id: 'seal', name: 'SEAL Team Six' }],
    rus: [{ id: 'spetsnaz', name: 'Spetsnaz GRU' }, { id: 'vympel', name: 'FSB Vympel' }]
  },
  naval: {
    usa: [{ id: 'ddg51', name: 'Arleigh Burke DDG' }, { id: 'ssn774', name: 'Virginia-class SSN' }],
    rus: [{ id: 'kirov', name: 'Kirov-class Battlecruiser' }, { id: 'yasen', name: 'Yasen-class SSGN' }]
  }
}

const availableAssets = computed(() => {
  // @ts-ignore
  const assets = assetData[operationType.value]?.[attacker.value] || []
  if (!assets.find((a: any) => a.id === asset.value) && assets.length > 0) {
    asset.value = assets[0].id
  }
  return assets
})

watch(operationType, (newType) => {
  if (newType !== 'nuclear' && mapMode.value === 'deploy_sub') {
    mapMode.value = 'acquire_target'
  }
})

const isReadyToLaunch = computed(() => {
  if (operationType.value === 'nuclear') {
    return targetCoords.value !== null && subCoords.value !== null && asset.value !== '' && !launchStatus.value
  }
  return targetCoords.value !== null && asset.value !== '' && !launchStatus.value
})

function initMap() {
  // Prevent infinite map scrolling horizontally
  const bounds = L.latLngBounds(L.latLng(-90, -180), L.latLng(90, 180));

  map = L.map('doomsday-map', {
    center: [20, 0],
    zoom: 3,
    minZoom: 2,
    maxBounds: bounds,
    maxBoundsViscosity: 1.0,
    zoomControl: false, // We hide default controls for aesthetics
    attributionControl: false
  })

  // ESRI World Imagery (Free Satellite)
  L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    maxZoom: 17,
    noWrap: true
  }).addTo(map)

  // ESRI Labels & Boundaries (City/Country names)
  L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}', {
    maxZoom: 17,
    noWrap: true
  }).addTo(map)

  // Custom Map Interaction
  map.on('click', async (e: L.LeafletMouseEvent) => {
    if (missileInFlight.value) return;

    if (mapMode.value === 'deploy_sub') {
      // Validate water positioning using Nominatim reverse geocoding
      try {
        const res = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${e.latlng.lat}&lon=${e.latlng.lng}&format=json&zoom=10`)
        const data = await res.json()
        if (!data.error) {
          alert('Submarines can only be deployed in water.')
          return
        }
      } catch (err) {
        console.warn('Geocoding error, allowing placement')
      }

      subCoords.value = { lat: e.latlng.lat, lng: e.latlng.lng }
      if (subMarker) map?.removeLayer(subMarker)
      
      const subIcon = L.divIcon({
        className: 'bg-transparent',
        html: `<div class="relative w-12 h-12 flex items-center justify-center">
                 <div class="absolute w-full h-full border border-blue-500 rounded-full animate-ping opacity-30"></div>
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="drop-shadow-[0_0_5px_blue]">
                   <path d="M19 15h-1a3 3 0 0 1-3-3V7a2 2 0 0 0-4 0v5a3 3 0 0 1-3 3H3a2 2 0 0 0 0 4h18a2 2 0 0 0 0-4z"/>
                   <path d="M15 11v-1"/>
                 </svg>
                 <div class="absolute -bottom-4 text-[9px] text-blue-400 whitespace-nowrap font-bold bg-black/60 px-1 border border-blue-500/30">SSBN</div>
               </div>`,
        iconSize: [48, 48],
        iconAnchor: [24, 24]
      })
      subMarker = L.marker([e.latlng.lat, e.latlng.lng], { icon: subIcon }).addTo(map!)
      
      if (!targetCoords.value) mapMode.value = 'acquire_target'
    } 
    else if (mapMode.value === 'acquire_target') {
      targetCoords.value = { lat: e.latlng.lat, lng: e.latlng.lng }
      
      if (targetMarker) map?.removeLayer(targetMarker)
      if (carrierMarker) map?.removeLayer(carrierMarker)
      if (impactCircles) {
        map?.removeLayer(impactCircles)
        impactCircles = null
      }
      
      if (map!.getZoom() < 11) {
        map!.flyTo([e.latlng.lat, e.latlng.lng], 11, { duration: 1.5 })
      }

      if (operationType.value === 'air') {
        // Just set a fixed offset point for the jet to spawn from (no carrier icon, no geocoding)
        carrierCoords.value = { lat: e.latlng.lat - 4, lng: e.latlng.lng - 6 }
        
        // Fit map to show both target and the off-screen start point
        map!.fitBounds(L.latLngBounds([{lat: e.latlng.lat, lng: e.latlng.lng}, carrierCoords.value]), { padding: [50, 50] })
      }

      const crosshairIcon = L.divIcon({
        className: 'bg-transparent',
        html: `<div class="relative w-16 h-16 flex items-center justify-center">
                 <div class="absolute w-full h-full border-[3px] border-red-500 rounded-full animate-ping opacity-90 shadow-[0_0_15px_red]"></div>
                 <div class="absolute w-8 h-8 bg-red-600/30 backdrop-blur-md border-2 border-red-500 rounded-full shadow-[0_0_10px_red] z-0"></div>
                 <div class="absolute w-full h-[2px] bg-red-500 shadow-[0_0_8px_red] z-10"></div>
                 <div class="absolute h-full w-[2px] bg-red-500 shadow-[0_0_8px_red] z-10"></div>
                 <div class="w-3 h-3 bg-white rounded-full z-20 shadow-[0_0_15px_white]"></div>
               </div>`,
        iconSize: [64, 64],
        iconAnchor: [32, 32]
      })

      targetMarker = L.marker([e.latlng.lat, e.latlng.lng], { icon: crosshairIcon }).addTo(map!)
    }
  })
}

function initiateLaunch() {
  if (!isReadyToLaunch.value || !targetCoords.value || !map) return
  
  launchStatus.value = 'WARNING: PROTOCOL INITIATED'
  missileInFlight.value = true
  
  if (operationType.value === 'nuclear' && subCoords.value) {
    // Animate missile trajectory
    map.fitBounds(L.latLngBounds([subCoords.value, targetCoords.value]), { padding: [50, 50] })
    
    trajectoryLine = L.polyline([subCoords.value, subCoords.value], {
      color: 'red',
      weight: 2,
      dashArray: '5, 10',
      className: 'animate-pulse'
    }).addTo(map)

    const dy = targetCoords.value!.lat - subCoords.value!.lat
    const dx = targetCoords.value!.lng - subCoords.value!.lng
    const angleDeg = 90 - (Math.atan2(dy, dx) * 180 / Math.PI)

    const missileIcon = L.divIcon({
      className: 'bg-transparent',
      html: `
        <div class="flex items-center justify-center text-white drop-shadow-[0_0_12px_rgba(255,255,255,1)]" style="transform: rotate(${angleDeg}deg);">
          <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" class="w-8 h-8">
            <!-- Body -->
            <rect x="10" y="6" width="4" height="12" />
            <!-- Tip -->
            <polygon points="10,6 12,2 14,6" />
            <!-- Middle Fins -->
            <polygon points="10,10 7,12 10,12" />
            <polygon points="14,10 17,12 14,12" />
            <!-- Bottom Fins -->
            <polygon points="10,18 6,22 10,22" />
            <polygon points="14,18 18,22 14,22" />
          </svg>
        </div>
      `,
      iconSize: [32, 32],
      iconAnchor: [16, 16]
    })
    missileMarker = L.marker(subCoords.value, { icon: missileIcon }).addTo(map)

    let progress = 0
    const flightDuration = 10000 // 10s animation
    let lastTime = performance.now()
    
    const animateFlight = (time: number) => {
      const dt = time - lastTime
      lastTime = time
      progress += (dt / flightDuration) * timeWarp.value
      
      if (progress >= 1) {
        progress = 1
        triggerExplosion()
        return
      }

      const currentLat = subCoords.value!.lat + (targetCoords.value!.lat - subCoords.value!.lat) * progress
      const currentLng = subCoords.value!.lng + (targetCoords.value!.lng - subCoords.value!.lng) * progress
      
      trajectoryLine?.setLatLngs([subCoords.value!, {lat: currentLat, lng: currentLng}])
      missileMarker?.setLatLng({lat: currentLat, lng: currentLng})
      
      animationFrameId = requestAnimationFrame(animateFlight)
    }
    
    animationFrameId = requestAnimationFrame(animateFlight)
  } else if (operationType.value === 'ground') {
    animateGroundAssault()
  } else if (operationType.value === 'air' && carrierCoords.value) {
    animateAirstrike()
  } else {
    // Naval or other immediate launch
    setTimeout(() => {
      triggerExplosion()
    }, 2000)
  }
}

function animateAirstrike() {
  if (!targetCoords.value || !carrierCoords.value || !map) return
  
  const target = targetCoords.value
  const start = carrierCoords.value

  const jetSvg = `<svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12,2 14,8 14,18 12,22 10,18 10,8" /><polygon points="14,12 22,14 22,16 14,16" /><polygon points="10,12 2,14 2,16 10,16" /><polygon points="12,18 16,20 16,21 12,20" /><polygon points="12,18 8,20 8,21 12,20" /></svg>`
  
  const dy = target.lat - start.lat
  const dx = target.lng - start.lng
  const angleInbound = 90 - (Math.atan2(dy, dx) * 180 / Math.PI)
  const angleOutbound = angleInbound + 180

  const jetIcon = L.divIcon({
    className: 'bg-transparent',
    html: `<div id="jet-anim" class="text-white drop-shadow-[0_0_12px_rgba(255,255,255,1)] w-8 h-8 transition-transform" style="transform: rotate(${angleInbound}deg);">${jetSvg}</div>`,
    iconSize: [32, 32],
    iconAnchor: [16, 16]
  })

  const jetMarker = L.marker([start.lat, start.lng], { icon: jetIcon }).addTo(map)

  map.fitBounds(L.latLngBounds([start, target]), { padding: [50, 50] })

  let progress = 0
  const flightDuration = 10000 // 10s flight time
  let lastTime = performance.now()
  let phase = 'inbound'

  launchStatus.value = 'SCRAMBLING FIGHTERS.'

  const animate = (time: number) => {
    const dt = time - lastTime
    lastTime = time
    
    if (phase === 'inbound') {
      progress += (dt / flightDuration) * timeWarp.value
      if (progress >= 1) {
        progress = 1
        phase = 'attacking'
      }
      
      const lat = start.lat + (target.lat - start.lat) * progress
      const lng = start.lng + (target.lng - start.lng) * progress
      
      jetMarker.setLatLng([lat, lng])
      
      if (phase === 'attacking') {
        launchStatus.value = 'WEAPONS AWAY. STAND BY FOR BDA.'
        
        // Pick a random attack video
        const videos = ['/Projeto de Vídeo 1.mp4', '/Projeto de Vídeo 2.mp4']
        const videoSrc = videos[Math.floor(Math.random() * videos.length)]
        
        // Create fullscreen video overlay
        const overlay = document.createElement('div')
        overlay.style.cssText = 'position:fixed;inset:0;z-index:99999;background:#000;display:flex;align-items:center;justify-content:center;'
        
        const video = document.createElement('video')
        video.src = videoSrc
        video.style.cssText = 'width:100%;height:100%;object-fit:cover;'
        video.autoplay = true
        video.playsInline = true
        video.muted = false
        
        overlay.appendChild(video)
        document.body.appendChild(overlay)
        
        // When the video ends, close overlay and resume flight
        video.addEventListener('ended', () => {
          // Fade out
          overlay.style.transition = 'opacity 0.8s ease'
          overlay.style.opacity = '0'
          
          setTimeout(() => {
            document.body.removeChild(overlay)
            
            // Draw impact circles after video
            impactCircles = L.layerGroup().addTo(map!)
            const zones = [
              { radius: 1200, color: '#b91c1c', fillOpacity: 0.60 },
              { radius: 600,  color: '#7f1d1d', fillOpacity: 0.80 }
            ]
            zones.forEach(zone => {
              L.circle([target.lat, target.lng], {
                color: zone.color,
                fillColor: zone.color,
                fillOpacity: zone.fillOpacity,
                weight: 1.5,
                interactive: false
              }).addTo(impactCircles!)
            })
            
            // Resume outbound flight
            phase = 'outbound'
            progress = 0
            launchStatus.value = 'RTB. FIGHTERS RETURNING TO BASE.'
            const el = jetMarker.getElement()?.querySelector('#jet-anim') as HTMLElement
            if (el) el.style.transform = `rotate(${angleOutbound}deg)`
            lastTime = performance.now()
            animationFrameId = requestAnimationFrame(animate)
          }, 800)
        })
        
        // Safety fallback: if video fails to play, skip after 3s
        video.addEventListener('error', () => {
          document.body.removeChild(overlay)
          phase = 'outbound'
          progress = 0
          launchStatus.value = 'RTB. FIGHTERS RETURNING TO BASE.'
          const el = jetMarker.getElement()?.querySelector('#jet-anim') as HTMLElement
          if (el) el.style.transform = `rotate(${angleOutbound}deg)`
          lastTime = performance.now()
          animationFrameId = requestAnimationFrame(animate)
        })
        
        return
      }
    } else if (phase === 'outbound') {
      progress += (dt / flightDuration) * timeWarp.value
      
      const lat = target.lat + (start.lat - target.lat) * progress
      const lng = target.lng + (start.lng - target.lng) * progress
      
      jetMarker.setLatLng([lat, lng])

      if (progress >= 1) {
        map?.removeLayer(jetMarker)
        launchStatus.value = 'FIGHTERS LANDED. MISSION ACCOMPLISHED.'
        setTimeout(() => {
          resetLaunchState()
        }, 3000)
        return
      }
    }
    
    animationFrameId = requestAnimationFrame(animate)
  }
  
  setTimeout(() => {
    lastTime = performance.now()
    animationFrameId = requestAnimationFrame(animate)
  }, 1000)
}

function animateGroundAssault() {
  if (!targetCoords.value || !map) return
  
  const target = targetCoords.value
  // Calculate start position (off-screen, e.g. 5 degrees away)
  const startLat = target.lat + 5
  const startLng = target.lng + 5

  // SVGs for the icons
  const apacheSvg = `<svg viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="6" width="20" height="1"/><rect x="11" y="7" width="2" height="2"/><polygon points="9,9 15,9 16,14 8,14"/><rect x="4" y="12" width="16" height="2"/><circle cx="7" cy="16" r="1.5"/><circle cx="17" cy="16" r="1.5"/></svg>`
  const chinookSvg = `<svg viewBox="0 0 24 24" fill="currentColor"><rect x="1" y="5" width="8" height="1"/><rect x="15" y="5" width="8" height="1"/><rect x="4.5" y="6" width="1" height="2"/><rect x="18.5" y="6" width="1" height="2"/><path d="M3 8h16c1 0 2 1 2 2v3c0 1-1 2-2 2H5c-1 0-1.5-1-2-2L2 9c0-1 0-1 1-1z"/><rect x="7" y="10" width="2" height="2" fill="black"/><rect x="11" y="10" width="2" height="2" fill="black"/><rect x="15" y="10" width="2" height="2" fill="black"/><circle cx="6" cy="16" r="1.5"/><circle cx="17" cy="16" r="1.5"/></svg>`
  const soldierSvg = `<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="4" r="2"/><rect x="9" y="7" width="6" height="7" rx="1"/><rect x="7" y="7" width="2" height="6" rx="1"/><rect x="15" y="7" width="2" height="6" rx="1"/><rect x="9.5" y="14" width="2" height="8" rx="0.5"/><rect x="12.5" y="14" width="2" height="8" rx="0.5"/><rect x="6" y="10" width="12" height="1.5" transform="rotate(-30 12 10)" fill="white"/></svg>`

  const apacheIcon = L.divIcon({ className: 'bg-transparent', html: `<div class="text-white drop-shadow-[0_0_8px_white] w-8 h-8 animate-pulse">${apacheSvg}</div>`, iconSize: [32,32], iconAnchor: [16,16] })
  const chinookIcon = L.divIcon({ className: 'bg-transparent', html: `<div id="chinook-anim" class="text-white drop-shadow-[0_0_8px_white] w-12 h-12 transition-all duration-1000 ease-in-out">${chinookSvg}</div>`, iconSize: [48,48], iconAnchor: [24,24] })
  const soldierIcon = L.divIcon({ className: 'bg-transparent', html: `<div id="soldier-anim" class="text-white drop-shadow-[0_0_5px_white] w-6 h-6 transition-all duration-[2000ms] ease-in-out">${soldierSvg}</div>`, iconSize: [24,24], iconAnchor: [12,12] })

  const apache1 = L.marker([startLat, startLng], { icon: apacheIcon }).addTo(map)
  const apache2 = L.marker([startLat, startLng], { icon: apacheIcon }).addTo(map)
  const chinook = L.marker([startLat, startLng], { icon: chinookIcon }).addTo(map)

  map.fitBounds(L.latLngBounds([{lat: startLat, lng: startLng}, target]), { padding: [50, 50] })

  let progress = 0
  const flyDuration = 8000
  let lastTime = performance.now()
  let phase = 'fly-in'

  const animate = (time: number) => {
    const dt = time - lastTime
    lastTime = time
    
    // Circle math for apaches
    const orbitRadius = 0.08
    const orbitAngle = (time / 1000) * 1.5 // 1.5 radians per second

    if (phase === 'fly-in') {
      progress += (dt / flyDuration) * timeWarp.value
      if (progress >= 1) {
        progress = 1
        phase = 'landed'
      }
      
      const lat = startLat + (target.lat - startLat) * progress
      const lng = startLng + (target.lng - startLng) * progress
      
      chinook.setLatLng([lat, lng])
      // Apaches fly slightly offset and circle
      const offset = 0.5 * (1 - progress) + 0.1
      apache1.setLatLng([lat + offset, lng - offset])
      apache2.setLatLng([lat - offset, lng + offset])

      if (phase === 'landed') {
        executeGroundOps()
        return
      }
    } else if (phase === 'landed') {
      // Orbit while landed
      apache1.setLatLng([target.lat + Math.cos(orbitAngle)*orbitRadius, target.lng + Math.sin(orbitAngle)*orbitRadius])
      apache2.setLatLng([target.lat + Math.cos(orbitAngle + Math.PI)*orbitRadius, target.lng + Math.sin(orbitAngle + Math.PI)*orbitRadius])
    } else if (phase === 'fly-out') {
      progress += (dt / flyDuration) * timeWarp.value
      
      // Fly away past the target
      const flyOutLat = target.lat + (target.lat - startLat)
      const flyOutLng = target.lng + (target.lng - startLng)
      
      const lat = target.lat + (flyOutLat - target.lat) * progress
      const lng = target.lng + (flyOutLng - target.lng) * progress
      
      chinook.setLatLng([lat, lng])
      
      // Orbit moving chinook
      apache1.setLatLng([lat + Math.cos(orbitAngle)*orbitRadius, lng + Math.sin(orbitAngle)*orbitRadius])
      apache2.setLatLng([lat + Math.cos(orbitAngle + Math.PI)*orbitRadius, lng + Math.sin(orbitAngle + Math.PI)*orbitRadius])

      if (progress >= 1) {
        map?.removeLayer(chinook)
        map?.removeLayer(apache1)
        map?.removeLayer(apache2)
        resetLaunchState()
        return
      }
    }

    animationFrameId = requestAnimationFrame(animate)
  }

  function executeGroundOps() {
    launchStatus.value = 'CHINOOK LANDED. DEPLOYING SPECIAL FORCES.'
    const soldier = L.marker(target, { icon: soldierIcon }).addTo(map!)
    
    // Ensure marker element is in DOM before querying
    setTimeout(() => {
      const el = soldier.getElement()?.querySelector('#soldier-anim')
      if (!el) {
         // Fallback if not found
         setTimeout(finishOps, 4000)
         return
      }

      // Step 1: Soldier moves to target
      setTimeout(() => {
        el.classList.add('-translate-x-12', 'translate-y-12')
      }, 1000)

      // Step 2: Acquire Target (Blue Aura)
      setTimeout(() => {
        launchStatus.value = 'TARGET SECURED.'
        el.classList.remove('text-white', 'drop-shadow-[0_0_5px_white]')
        el.classList.add('text-blue-300', 'drop-shadow-[0_0_20px_rgba(96,165,250,1)]', 'drop-shadow-[0_0_40px_rgba(59,130,246,0.8)]')
      }, 3500)

      // Step 3: Return to Heli
      setTimeout(() => {
        launchStatus.value = 'EXFILTRATING.'
        el.classList.remove('-translate-x-12', 'translate-y-12')
      }, 5500)

      // Step 4: Lift off
      setTimeout(() => {
        map?.removeLayer(soldier)
        
        // Pass blue aura to Chinook
        const chinookEl = chinook.getElement()?.querySelector('#chinook-anim')
        if (chinookEl) {
          chinookEl.classList.remove('text-white', 'drop-shadow-[0_0_8px_white]')
          chinookEl.classList.add('text-blue-300', 'drop-shadow-[0_0_25px_rgba(96,165,250,1)]', 'drop-shadow-[0_0_50px_rgba(59,130,246,0.9)]')
        }

        launchStatus.value = 'EXTRACTION COMPLETE. RTB.'
        finishOps()
      }, 8000)

    }, 100)
  }

  function finishOps() {
    phase = 'fly-out'
    progress = 0
    lastTime = performance.now()
    animationFrameId = requestAnimationFrame(animate)
  }

  animationFrameId = requestAnimationFrame(animate)
}

function resetLaunchState() {
  launchStatus.value = ''
  targetCoords.value = null
  subCoords.value = null
  carrierCoords.value = null
  mapMode.value = 'deploy_sub'
  missileInFlight.value = false
  timeWarp.value = 1
  if (targetMarker) map?.removeLayer(targetMarker)
  if (carrierMarker) map?.removeLayer(carrierMarker)
  if (impactCircles) map?.removeLayer(impactCircles)
}

function triggerExplosion() {
  const overlay = document.createElement('div')
  overlay.className = 'fixed inset-0 bg-white z-[9999] pointer-events-none transition-opacity duration-1000 opacity-100 mix-blend-screen'
  document.body.appendChild(overlay)

  if (targetMarker) map?.removeLayer(targetMarker)
  if (subMarker) map?.removeLayer(subMarker)
  if (missileMarker) map?.removeLayer(missileMarker)
  if (trajectoryLine) map?.removeLayer(trajectoryLine)

  setTimeout(() => {
    overlay.classList.replace('opacity-100', 'opacity-0')
    setTimeout(() => document.body.removeChild(overlay), 1000)
    launchStatus.value = 'GROUND ZERO EVENT CONFIRMED.'
    
    spawnNuclearExplosion(targetCoords.value!)
  }, 100)
  
  setTimeout(() => {
    resetLaunchState()
  }, 20000)
}

function spawnNuclearExplosion(coords: {lat: number, lng: number}) {
  if (!map) return;
  
  const explosionIcon = L.divIcon({
    className: 'bg-transparent',
    html: `
      <div class="explosion-container relative flex items-center justify-center w-full h-full origin-center transition-transform duration-75">
        <!-- Satellite View Shockwave -->
        <div class="absolute w-2 h-2 rounded-full bg-white/20 border border-white/60 opacity-0 animate-sat-shockwave" style="animation-delay: 0.1s"></div>
        <div class="absolute w-2 h-2 rounded-full bg-white/10 border-2 border-white/40 opacity-0 animate-sat-shockwave" style="animation-delay: 0.9s"></div>
        
        <!-- Satellite View Fireball / Core -->
        <div class="absolute w-2 h-2 rounded-full bg-white opacity-0 animate-sat-fireball"></div>
        <div class="absolute w-2 h-2 rounded-full bg-transparent opacity-0 animate-sat-core mix-blend-multiply"></div>
      </div>
    `,
    iconSize: [800, 800],
    iconAnchor: [400, 400] // Center of the div exactly on the lat/lng
  });

  const explosionMarker = L.marker([coords.lat, coords.lng], { icon: explosionIcon }).addTo(map);
  const initialZoom = map.getZoom();
  
  // Create impact circles during explosion
  impactCircles = L.layerGroup().addTo(map)
  const zones = [
    { radius: 8000, color: '#eab308', fillOpacity: 0.25 },
    { radius: 5000, color: '#f59e0b', fillOpacity: 0.35 },
    { radius: 3000, color: '#ef4444', fillOpacity: 0.45 },
    { radius: 1200, color: '#b91c1c', fillOpacity: 0.60 },
    { radius: 600,  color: '#7f1d1d', fillOpacity: 0.80 }
  ]
  zones.forEach(zone => {
    L.circle([coords.lat, coords.lng], {
      color: zone.color,
      fillColor: zone.color,
      fillOpacity: zone.fillOpacity,
      weight: 1.5,
      interactive: false
    }).addTo(impactCircles!)
  })

  const handleZoom = () => {
    if (!map) return;
    const currentZoom = map.getZoom();
    const scale = Math.pow(2, currentZoom - initialZoom);
    const el = explosionMarker.getElement();
    if (el) {
      const container = el.querySelector('.explosion-container') as HTMLElement;
      if (container) {
        container.style.transform = `scale(${scale})`;
      }
    }
  };

  map.on('zoom', handleZoom);

  // Clean up explosion marker after 22 seconds
  setTimeout(() => {
    if (map) {
      map.off('zoom', handleZoom);
      map.removeLayer(explosionMarker);
    }
  }, 22000);
}

onMounted(() => {
  initMap()
})

  onBeforeUnmount(() => {
  if (animationFrameId) cancelAnimationFrame(animationFrameId)
  if (map) {
    map.remove()
  }
})
</script>

<style>
/* CRT Scanline effect */
.doomsday-scanlines {
  background: linear-gradient(
    rgba(18, 16, 16, 0) 50%, 
    rgba(0, 0, 0, 0.25) 50%
  );
  background-size: 100% 4px;
}

/* Optional: Slight text shadow to simulate glowing phosphor */
.doomsday-crt {
  text-shadow: 0 0 2px rgba(255, 0, 0, 0.8);
}

/* --- Satellite View Nuclear Explosion Animations --- */
@keyframes sat-shockwave {
  0% { transform: scale(1); opacity: 0.9; border-width: 15px; }
  30% { opacity: 0.4; border-width: 5px; }
  100% { transform: scale(400); opacity: 0; border-width: 1px; }
}

@keyframes sat-fireball {
  0% { transform: scale(1); opacity: 1; background: radial-gradient(circle, #ffffff 0%, #ffffaa 100%); filter: brightness(3); box-shadow: 0 0 100px #fff; }
  5% { transform: scale(25); opacity: 1; background: radial-gradient(circle, #ffffff 0%, #ffaa00 100%); filter: brightness(2); box-shadow: 0 0 200px #ffaa00; }
  15% { transform: scale(50); opacity: 1; background: radial-gradient(circle, #ffcc00 0%, #ff3300 100%); filter: brightness(1.5); box-shadow: 0 0 100px #ff0000; }
  40% { transform: scale(65); opacity: 0.95; background: radial-gradient(circle, #aa2200 0%, #330000 80%, #000000 100%); filter: brightness(1); box-shadow: none; }
  70% { transform: scale(80); opacity: 0.85; background: radial-gradient(circle, #331100 0%, #111111 60%, #000000 100%); }
  100% { transform: scale(100); opacity: 0; background: #000000; }
}

@keyframes sat-core {
  0% { transform: scale(1); opacity: 0; background: transparent; }
  15% { transform: scale(30); opacity: 0.2; background: radial-gradient(circle, transparent 30%, rgba(0,0,0,0.8) 100%); }
  40% { transform: scale(65); opacity: 0.7; background: radial-gradient(circle, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.9) 100%); }
  100% { transform: scale(100); opacity: 0; }
}

.animate-sat-shockwave { animation: sat-shockwave 7s cubic-bezier(0.1, 0.8, 0.2, 1) forwards; }
.animate-sat-fireball { animation: sat-fireball 20s cubic-bezier(0.2, 0.8, 0.4, 1) forwards; }
.animate-sat-core { animation: sat-core 20s cubic-bezier(0.2, 0.8, 0.4, 1) forwards; }
</style>
