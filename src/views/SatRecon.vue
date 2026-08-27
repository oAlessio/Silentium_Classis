<template>
  <div class="min-h-screen bg-navy-950 text-gray-200 relative overflow-x-hidden select-none pb-12">
    <!-- Background Grid -->
    <div class="fixed inset-0 bg-[radial-gradient(#162a42_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none"></div>

    <!-- Header Nav -->
    <header class="relative z-30 border-b border-white/10 bg-navy-950/90 backdrop-blur-md sticky top-0 px-6 py-4 flex items-center justify-between">
      <div class="flex items-center gap-4">
        <button 
          @click="router.push('/classified')" 
          class="flex items-center gap-2 text-xs font-mono tracking-wider text-gray-400 hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded border border-white/10"
        >
          <ArrowLeft class="w-4 h-4 text-accent-cyan" />
          <span>{{ t.back }}</span>
        </button>

        <div class="h-4 w-px bg-white/10 hidden sm:block"></div>

        <div class="flex items-center gap-2">
          <Globe class="w-4 h-4 text-accent-cyan animate-pulse" />
          <span class="font-mono text-xs tracking-[0.2em] text-accent-cyan font-bold uppercase">
            {{ t.title }}
          </span>
        </div>
      </div>

      <div class="flex items-center gap-4">
        <!-- Optics Mode Switcher -->
        <div class="flex items-center gap-2 bg-black/60 p-1 rounded-lg border border-white/10 font-mono text-xs">
          <button 
            @click="setOptics('HUD')"
            :class="[
              'px-3 py-1 rounded transition-all tracking-wider',
              opticsMode === 'HUD' ? 'bg-accent-cyan/20 text-accent-cyan border border-accent-cyan/50 font-bold' : 'text-gray-400 hover:text-white'
            ]"
          >
            {{ t.hudBlue }}
          </button>
          <button 
            @click="setOptics('NVG')"
            :class="[
              'px-3 py-1 rounded transition-all tracking-wider',
              opticsMode === 'NVG' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/50 font-bold' : 'text-gray-400 hover:text-white'
            ]"
          >
            {{ t.nvgGreen }}
          </button>
          <button 
            @click="setOptics('FLIR')"
            :class="[
              'px-3 py-1 rounded transition-all tracking-wider',
              opticsMode === 'FLIR' ? 'bg-orange-500/20 text-orange-400 border border-orange-500/50 font-bold' : 'text-gray-400 hover:text-white'
            ]"
          >
            {{ t.flirThermal }}
          </button>
        </div>

        <!-- Language Switcher (EN / PT) -->
        <div class="flex items-center gap-1 bg-black/70 p-1 rounded-lg border border-white/10 font-mono text-xs">
          <button
            @click="lang = 'EN'; playBeep()"
            :class="[
              'px-2.5 py-1 rounded font-bold transition-all text-xs',
              lang === 'EN' ? 'bg-accent-cyan/20 text-accent-cyan border border-accent-cyan/50' : 'text-gray-400 hover:text-white'
            ]"
          >
            EN
          </button>
          <button
            @click="lang = 'PT'; playBeep()"
            :class="[
              'px-2.5 py-1 rounded font-bold transition-all text-xs',
              lang === 'PT' ? 'bg-accent-cyan/20 text-accent-cyan border border-accent-cyan/50' : 'text-gray-400 hover:text-white'
            ]"
          >
            PT
          </button>
        </div>
      </div>
    </header>

    <!-- Content Layout -->
    <main class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
      
      <!-- 3D Globe Viewport (Col 2) -->
      <div class="lg:col-span-2 flex flex-col gap-4">
        <!-- 3D Globe Viewport Container -->
        <div class="relative h-[650px] w-full rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-black/50">
          <ThreeGlobe 
            ref="threeGlobeRef"
            :opticsMode="opticsMode"
            :selectedAssetId="selectedAsset?.id"
            @select-asset="handleAssetSelect"
          />

          <!-- Controls Help overlay -->
          <div class="absolute bottom-4 left-4 pointer-events-none bg-black/70 backdrop-blur border border-white/10 px-3 py-1.5 rounded font-mono text-[10px] text-gray-400">
            {{ t.controlsHelp }}
          </div>

          <div class="absolute top-4 right-4 pointer-events-none bg-black/70 backdrop-blur border border-white/10 px-3 py-1.5 rounded font-mono text-[10px] text-accent-cyan uppercase">
            {{ t.orbitStatus }}
          </div>
        </div>

        <!-- Pin Color Legend Outside Map -->
        <div class="bg-navy-900/80 border border-white/10 p-3 rounded-xl backdrop-blur flex items-center justify-between flex-wrap gap-3 font-mono text-xs shadow-lg">
          <div class="flex items-center gap-2">
            <span class="text-accent-cyan font-bold uppercase tracking-wider text-[11px]">{{ t.legendTitle }}:</span>
          </div>

          <div class="flex items-center gap-4 flex-wrap text-[11px]">
            <div class="flex items-center gap-1.5 text-gray-300">
              <span class="w-2.5 h-2.5 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.7)] inline-block"></span>
              <span>{{ t.legendBase }}</span>
            </div>

            <div class="flex items-center gap-1.5 text-gray-300">
              <span class="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.7)] inline-block"></span>
              <span>{{ t.legendCarrier }}</span>
            </div>

            <div class="flex items-center gap-1.5 text-gray-300">
              <span class="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.7)] inline-block"></span>
              <span>{{ t.legendSubmarine }}</span>
            </div>

            <div class="flex items-center gap-1.5 text-gray-300">
              <span class="w-2.5 h-2.5 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(192,132,252,0.7)] inline-block"></span>
              <span>{{ t.legendSatellite }}</span>
            </div>

            <div class="flex items-center gap-1.5 text-gray-300">
              <span class="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.9)] inline-block"></span>
              <span>{{ t.legendAlert }}</span>
            </div>
          </div>
        </div>

        <!-- Category Filter & Target Selector Strip -->
        <div class="bg-navy-900/80 border border-white/10 p-3.5 rounded-xl flex flex-col gap-3 backdrop-blur">
          <div class="flex items-center justify-between border-b border-white/10 pb-2.5 flex-wrap gap-2">
            <div class="flex items-center gap-3">
              <span class="font-mono text-[11px] text-accent-cyan font-bold uppercase tracking-wider">
                {{ t.trackedTargets }} ({{ filteredAssets.length }})
              </span>

              <!-- Live Search Filter -->
              <div class="relative">
                <input 
                  v-model="searchQuery" 
                  type="text" 
                  :placeholder="t.searchPlaceholder"
                  class="bg-black/50 border border-white/10 rounded px-2.5 py-1 text-[10px] font-mono text-white placeholder-gray-500 focus:outline-none focus:border-accent-cyan/60 w-32 sm:w-44 transition-colors"
                />
                <button 
                  v-if="searchQuery" 
                  @click="searchQuery = ''" 
                  class="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] text-gray-400 hover:text-white"
                >
                  ✕
                </button>
              </div>
            </div>
            
            <!-- Category Filter Pills -->
            <div class="flex items-center gap-1 font-mono text-[10px] flex-wrap">
              <button 
                v-for="cat in filterOptions"
                :key="cat.id"
                @click="selectedCategory = cat.id; playBeep()"
                :class="[
                  'px-2.5 py-1 rounded transition-all font-bold border uppercase flex items-center gap-1',
                  selectedCategory === cat.id
                    ? 'bg-accent-cyan/20 text-accent-cyan border-accent-cyan/50 shadow-[0_0_8px_rgba(94,175,197,0.3)]'
                    : 'bg-white/5 text-gray-400 border-white/5 hover:text-white hover:bg-white/10'
                ]"
              >
                <span>{{ cat.label[lang] }}</span>
                <span class="opacity-60 text-[9px]">({{ getCategoryCount(cat.id) }})</span>
              </button>
            </div>
          </div>

          <!-- Target Horizontal Carousel Strip -->
          <div class="flex items-center gap-2 overflow-x-auto pb-1.5 scrollbar-thin scrollbar-thumb-accent-cyan/30">
            <button
              v-for="asset in filteredAssets"
              :key="asset.id"
              @click="handleAssetSelect(asset)"
              :class="[
                'px-3 py-1.5 rounded font-mono text-xs shrink-0 transition-all border flex items-center gap-2',
                selectedAsset?.id === asset.id
                  ? 'bg-accent-cyan/20 border-accent-cyan text-white shadow-[0_0_10px_rgba(94,175,197,0.3)] font-bold'
                  : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:text-white'
              ]"
            >
              <span 
                class="w-2 h-2 rounded-full inline-block shrink-0"
                :class="{
                  'bg-amber-400 shadow-[0_0_6px_rgba(251,191,36,0.8)]': asset.type === 'base',
                  'bg-cyan-400 shadow-[0_0_6px_rgba(34,211,238,0.8)]': asset.category === 'Carrier Strike Group',
                  'bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)]': asset.category === 'Submarine Patrol',
                  'bg-purple-400 shadow-[0_0_6px_rgba(192,132,252,0.8)]': asset.type === 'satellite',
                }"
              ></span>
              <span class="truncate max-w-[200px]">{{ asset.name }}</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Telemetry & Asset Details Panel (Col 1) -->
      <div class="flex flex-col gap-4">
        <!-- Selected Asset Card -->
        <div class="bg-navy-900/80 border border-white/10 p-6 rounded-xl backdrop-blur flex flex-col justify-between h-full shadow-2xl">
          <div>
            <div class="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
              <div class="flex items-center gap-2">
                <span 
                  class="w-2.5 h-2.5 rounded-full inline-block shrink-0"
                  :class="{
                    'bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)]': selectedAsset?.type === 'base',
                    'bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]': selectedAsset?.category === 'Carrier Strike Group',
                    'bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]': selectedAsset?.category === 'Submarine Patrol',
                    'bg-purple-400 shadow-[0_0_8px_rgba(192,132,252,0.8)]': selectedAsset?.type === 'satellite',
                  }"
                ></span>
                <span class="font-mono text-[10px] tracking-[0.2em] text-accent-cyan uppercase font-bold">
                  {{ selectedAsset ? selectedAsset.category : t.selectTarget }}
                </span>
              </div>
              <span 
                v-if="selectedAsset"
                :class="[
                  'px-2 py-0.5 rounded text-[9px] font-mono font-bold tracking-widest',
                  selectedAsset.status === 'ALERTA MÁXIMO' ? 'bg-red-500/20 text-red-400 border border-red-500/40 animate-pulse' : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                ]"
              >
                {{ selectedAsset.status }}
              </span>
            </div>

            <h2 class="text-2xl font-display text-white tracking-wide uppercase mb-3 leading-snug">
              {{ selectedAsset ? selectedAsset.name : t.noTarget }}
            </h2>

            <p class="text-xs font-mono text-gray-300 leading-relaxed mb-6 bg-black/30 p-3 rounded border border-white/5">
              {{ selectedAsset ? selectedAsset.details : t.defaultPrompt }}
            </p>

            <!-- Coordinates telemetry -->
            <div v-if="selectedAsset" class="grid grid-cols-2 gap-3 mb-6 font-mono text-xs bg-black/50 p-3.5 rounded-lg border border-white/10 shadow-inner">
              <div>
                <div class="text-[9px] text-gray-500 uppercase">{{ t.lat }}</div>
                <div class="text-accent-cyan font-bold text-sm">{{ selectedAsset.lat > 0 ? `${selectedAsset.lat}° N` : `${Math.abs(selectedAsset.lat)}° S` }}</div>
              </div>
              <div>
                <div class="text-[9px] text-gray-500 uppercase">{{ t.lng }}</div>
                <div class="text-accent-cyan font-bold text-sm">{{ selectedAsset.lng > 0 ? `${selectedAsset.lng}° E` : `${Math.abs(selectedAsset.lng)}° W` }}</div>
              </div>
              <div>
                <div class="text-[9px] text-gray-500 uppercase">{{ t.country }}</div>
                <div class="text-white font-bold">{{ selectedAsset.country }}</div>
              </div>
              <div>
                <div class="text-[9px] text-gray-500 uppercase">{{ t.assetType }}</div>
                <div class="text-white uppercase font-bold">{{ selectedAsset.type }}</div>
              </div>
            </div>

            <!-- Specifications Table -->
            <div v-if="selectedAsset" class="space-y-2 mb-6">
              <div class="font-mono text-[10px] text-gray-400 uppercase tracking-widest mb-2 border-b border-white/5 pb-1 flex items-center justify-between">
                <span>{{ t.telemetryTitle }}</span>
                <span class="text-accent-cyan text-[9px] tracking-wider">ENCRYPTED FEED</span>
              </div>
              <div 
                v-for="(spec, idx) in selectedAsset.specs" 
                :key="idx"
                class="flex items-center justify-between text-xs font-mono bg-white/5 px-3 py-2 rounded border border-white/5 hover:border-accent-cyan/30 transition-colors"
              >
                <span class="text-gray-400">{{ spec.label }}</span>
                <span class="text-white font-bold text-right ml-2">{{ spec.value }}</span>
              </div>
            </div>

            <!-- Action buttons -->
            <div v-if="selectedAsset" class="flex flex-col gap-2">
              <button
                @click="focusCameraOnCurrentAsset()"
                class="w-full py-2.5 px-3 rounded bg-accent-cyan/20 hover:bg-accent-cyan/30 border border-accent-cyan/50 text-accent-cyan font-mono text-xs font-bold transition-all flex items-center justify-center gap-2 uppercase shadow-[0_0_12px_rgba(94,175,197,0.2)]"
              >
                <Globe class="w-4 h-4" />
                <span>{{ t.btnFocusCamera }}</span>
              </button>
            </div>
          </div>

          <!-- Bottom Footer Info -->
          <div class="mt-6 pt-4 border-t border-white/10 font-mono text-[9px] text-gray-500 flex items-center justify-between">
            <span>{{ t.systemLabel }}</span>
            <span class="text-accent-cyan">{{ t.encrypted }}</span>
          </div>
        </div>
      </div>

    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { ArrowLeft, Globe } from 'lucide-vue-next'
import ThreeGlobe from '../components/ThreeGlobe.vue'
import type { NavalAsset } from '../data/tacticalData'
import { TRANSLATED_TACTICAL_ASSETS, type Language } from '../data/tacticalTranslations'
import { playBeep } from '../ambientAudio'

const router = useRouter()
const lang = ref<Language>('EN')
const opticsMode = ref<'HUD' | 'NVG' | 'FLIR'>('HUD')
const selectedCategory = ref<'ALL' | 'BASE' | 'CARRIER' | 'SUBMARINE' | 'SATELLITE'>('ALL')
const searchQuery = ref('')
const threeGlobeRef = ref<InstanceType<typeof ThreeGlobe> | null>(null)

type FilterCategory = 'ALL' | 'BASE' | 'CARRIER' | 'SUBMARINE' | 'SATELLITE'

const filterOptions: { id: FilterCategory; label: Record<Language, string> }[] = [
  { id: 'ALL', label: { EN: 'ALL', PT: 'TODOS' } },
  { id: 'BASE', label: { EN: 'BASES', PT: 'BASES' } },
  { id: 'CARRIER', label: { EN: 'CARRIERS', PT: 'PORTA-AVIÕES' } },
  { id: 'SUBMARINE', label: { EN: 'SUBMARINES', PT: 'SUBMARINOS' } },
  { id: 'SATELLITE', label: { EN: 'SATS', PT: 'SATÉLITES' } }
]

const currentAssets = computed(() => TRANSLATED_TACTICAL_ASSETS[lang.value])
const selectedAssetId = ref<string>('norfolk')

function getCategoryCount(catId: FilterCategory): number {
  if (catId === 'ALL') return currentAssets.value.length
  if (catId === 'BASE') return currentAssets.value.filter(a => a.type === 'base').length
  if (catId === 'CARRIER') return currentAssets.value.filter(a => a.category === 'Carrier Strike Group').length
  if (catId === 'SUBMARINE') return currentAssets.value.filter(a => a.category === 'Submarine Patrol').length
  if (catId === 'SATELLITE') return currentAssets.value.filter(a => a.type === 'satellite').length
  return currentAssets.value.length
}

const filteredAssets = computed(() => {
  let list = currentAssets.value

  if (selectedCategory.value === 'BASE') {
    list = list.filter(a => a.type === 'base')
  } else if (selectedCategory.value === 'CARRIER') {
    list = list.filter(a => a.category === 'Carrier Strike Group')
  } else if (selectedCategory.value === 'SUBMARINE') {
    list = list.filter(a => a.category === 'Submarine Patrol')
  } else if (selectedCategory.value === 'SATELLITE') {
    list = list.filter(a => a.type === 'satellite')
  }

  if (searchQuery.value.trim()) {
    const q = searchQuery.value.toLowerCase().trim()
    list = list.filter(a => 
      a.name.toLowerCase().includes(q) ||
      a.country.toLowerCase().includes(q) ||
      a.details.toLowerCase().includes(q)
    )
  }

  return list
})

const selectedAsset = computed(() => {
  return currentAssets.value.find(a => a.id === selectedAssetId.value) || filteredAssets.value[0] || currentAssets.value[0]
})

function setOptics(mode: 'HUD' | 'NVG' | 'FLIR') {
  opticsMode.value = mode
  playBeep()
}

function handleAssetSelect(asset: NavalAsset) {
  selectedAssetId.value = asset.id
  playBeep()
}

function focusCameraOnCurrentAsset() {
  if (selectedAsset.value && threeGlobeRef.value) {
    threeGlobeRef.value.focusOnAsset(selectedAsset.value.id, true)
    playBeep()
  }
}

const translations = {
  EN: {
    back: 'CLASSIFIED PANEL',
    title: '3D SAT-RECON // GLOBAL TACTICAL TRACKING',
    hudBlue: 'HUD BLUE',
    nvgGreen: 'NVG GREEN',
    flirThermal: 'FLIR THERMAL',
    controlsHelp: '[ Scroll wheel / Zoom buttons | Click & drag to rotate | Click marker to inspect ]',
    orbitStatus: 'ORBIT STATUS: REAL TIME',
    trackedTargets: 'TRACKED TARGETS',
    searchPlaceholder: 'Search unit, country...',
    selectTarget: 'SELECT A TARGET',
    noTarget: 'No Target Inspected',
    defaultPrompt: 'Click on any geographic node, carrier group, submarine or satellite on the 3D globe to obtain advanced intelligence reports.',
    lat: 'LATITUDE',
    lng: 'LONGITUDE',
    country: 'COUNTRY / JURISDICTION',
    assetType: 'ASSET TYPE',
    telemetryTitle: 'TELEMETRY & SPECIFICATIONS',
    systemLabel: 'SYSTEM: NRO SAT-LINK v4.2',
    encrypted: 'ENCRYPTED',
    legendTitle: 'PIN COLOR LEGEND',
    legendBase: 'Naval Base',
    legendCarrier: 'Carrier Strike Group',
    legendSubmarine: 'Submarine Patrol',
    legendSatellite: 'Recon Satellite',
    legendAlert: 'High Alert (DEFCON 1)',
    btnFocusCamera: 'FOCUS & ZOOM ON TARGET'
  },
  PT: {
    back: 'PAINEL CLASSIFICADO',
    title: 'SAT-RECON 3D // RASTREAMENTO GLOBAL TÁTICO',
    hudBlue: 'HUD AZUL',
    nvgGreen: 'NVG VERDE',
    flirThermal: 'FLIR TÉRMICO',
    controlsHelp: '[ Scroll do mouse / Botões zoom | Clique e arraste para girar | Clique no marcador ]',
    orbitStatus: 'STATUS DA ÓRBITA: TEMPO REAL',
    trackedTargets: 'ALVOS RASTREADOS',
    searchPlaceholder: 'Buscar unidade, país...',
    selectTarget: 'SELECIONE UM ALVO',
    noTarget: 'Nenhum Alvo Inspecionado',
    defaultPrompt: 'Clique em qualquer nó geográfico, grupo de porta-aviões, submarino ou satélite no globo 3D para obter relatórios de inteligência.',
    lat: 'LATITUDE',
    lng: 'LONGITUDE',
    country: 'PAÍS / JURISDIÇÃO',
    assetType: 'TIPO DE ATIVO',
    telemetryTitle: 'TELEMETRIA & ESPECIFICAÇÕES',
    systemLabel: 'SISTEMA: NRO SAT-LINK v4.2',
    encrypted: 'CRIPTOGRAFADO',
    legendTitle: 'LEGENDA DE CORES DOS PINS',
    legendBase: 'Base Naval',
    legendCarrier: 'Grupo de Porta-Aviões',
    legendSubmarine: 'Patrulha de Submarino',
    legendSatellite: 'Satélite de Reconhecimento',
    legendAlert: 'Alerta Máximo (DEFCON 1)',
    btnFocusCamera: 'APROXIMAR CÂMERA NO ALVO'
  }
}

const t = computed(() => translations[lang.value])
</script>

