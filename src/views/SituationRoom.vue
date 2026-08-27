<template>
  <div 
    class="min-h-screen text-gray-200 relative overflow-x-hidden select-none pb-20 transition-colors duration-700"
    :class="defconBgClass"
  >
    <!-- RED ALERT FLASHING STROBE FOR DEFCON 1 -->
    <div v-if="defconLevel === 1" class="fixed inset-0 pointer-events-none z-50 bg-red-600/10 animate-strobe"></div>
    <div v-if="defconLevel === 1" class="fixed top-0 left-0 w-full h-1 bg-red-500 z-50 animate-pulse shadow-[0_0_30px_rgba(239,68,68,0.6)]"></div>

    <!-- Background grid -->
    <div class="fixed inset-0 bg-[radial-gradient(#162a42_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none"></div>

    <!-- DEFCON TOP BANNER -->
    <div 
      class="py-2 px-6 font-mono text-center text-xs tracking-[0.3em] font-bold uppercase transition-colors duration-500 flex items-center justify-center gap-3"
      :class="defconBannerClass"
    >
      <span class="w-2 h-2 rounded-full animate-ping bg-current"></span>
      <span>{{ t.alertState }}: DEFCON {{ defconLevel }} // {{ defconDescription }}</span>
      <span class="w-2 h-2 rounded-full animate-ping bg-current"></span>
    </div>

    <!-- Header Navigation -->
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
          <ShieldAlert class="w-4 h-4 animate-bounce" :class="defconTextColor" />
          <span class="font-mono text-xs tracking-[0.2em] font-bold uppercase" :class="defconTextColor">
            {{ t.pageTitle }}
          </span>
        </div>
      </div>

      <div class="flex items-center gap-4">
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

        <!-- DEFCON CONTROLLER SELECTOR -->
        <div class="flex items-center gap-1.5 bg-black/70 p-1.5 rounded-lg border border-white/10 font-mono text-xs">
          <span class="text-[10px] text-gray-400 uppercase tracking-widest px-2 hidden sm:inline">DEFCON:</span>
          <button
            v-for="level in ([5, 4, 3, 2, 1] as const)"
            :key="level"
            @click="setDefcon(level)"
            :class="[
              'px-2.5 py-1 rounded font-bold transition-all text-xs min-w-[46px]',
              defconLevel === level ? getDefconBtnActiveClass(level) : 'text-gray-400 hover:text-white bg-white/5'
            ]"
          >
            {{ level }}
          </button>
        </div>
      </div>
    </header>

    <main class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
      
      <!-- Left Column: Operations Selector & Weather -->
      <div class="flex flex-col gap-6">
        
        <!-- Operations List -->
        <div class="bg-navy-900/80 border border-white/10 p-6 rounded-xl backdrop-blur">
          <h2 class="font-mono text-xs tracking-[0.2em] text-accent-cyan uppercase font-bold mb-4 flex items-center gap-2">
            <Radio class="w-4 h-4 text-accent-cyan" />
            {{ t.operationsTitle }}
          </h2>

          <div class="space-y-3">
            <button
              v-for="op in currentOperations"
              :key="op.id"
              @click="selectedOpId = op.id; playBeep()"
              :class="[
                'w-full p-4 rounded-xl text-left font-mono border transition-all flex flex-col gap-1',
                selectedOpId === op.id
                  ? 'bg-accent-cyan/20 border-accent-cyan text-white shadow-[0_0_15px_rgba(94,175,197,0.2)]'
                  : 'bg-black/40 border-white/10 text-gray-400 hover:bg-white/5 hover:text-white'
              ]"
            >
              <div class="flex items-center justify-between text-xs">
                <span class="text-accent-cyan font-bold">{{ op.codeName }}</span>
                <span class="text-gray-400 text-[10px]">{{ op.year }}</span>
              </div>
              <div class="text-xs text-gray-300 font-sans font-medium line-clamp-1">{{ op.title }}</div>
              <div class="text-[10px] text-gray-500 mt-1 uppercase">{{ op.location }}</div>
            </button>
          </div>
        </div>

        <!-- Weather Telemetry Card -->
        <div v-if="selectedOp" class="bg-navy-900/80 border border-white/10 p-6 rounded-xl backdrop-blur font-mono text-xs space-y-3">
          <div class="text-accent-gold font-bold text-xs uppercase border-b border-white/10 pb-2 flex items-center justify-between">
            <span>{{ t.weather }}</span>
            <span>INTEL WX</span>
          </div>

          <div class="space-y-2">
            <div class="flex justify-between text-gray-400"><span>{{ t.wxCondition }}:</span><span class="text-white font-bold">{{ selectedOp.weatherTelemetry.condition }}</span></div>
            <div class="flex justify-between text-gray-400"><span>{{ t.wxVisibility }}:</span><span class="text-white font-bold">{{ selectedOp.weatherTelemetry.visibility }}</span></div>
            <div class="flex justify-between text-gray-400"><span>{{ t.wxWind }}:</span><span class="text-white font-bold">{{ selectedOp.weatherTelemetry.windSpeed }}</span></div>
            <div class="flex justify-between text-gray-400"><span>{{ t.wxMoon }}:</span><span class="text-accent-cyan font-bold">{{ selectedOp.weatherTelemetry.moonPhase }}</span></div>
            <div class="flex justify-between text-gray-400"><span>{{ t.wxTemp }}:</span><span class="text-white font-bold">{{ selectedOp.weatherTelemetry.temperature }}</span></div>
          </div>
        </div>

      </div>

      <!-- Right Column: Full Briefing Dossier & OPORD -->
      <div v-if="selectedOp" class="lg:col-span-2 space-y-6">
        
        <div class="bg-navy-900/90 border border-white/10 p-8 rounded-xl backdrop-blur relative overflow-hidden space-y-6">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/10 pb-4 gap-2">
            <div>
              <span class="font-mono text-[10px] tracking-[0.3em] text-accent-cyan uppercase font-bold">
                {{ t.dossierTitle }}
              </span>
              <h1 class="text-3xl font-display text-white uppercase tracking-wider mt-1">
                {{ selectedOp.codeName }}
              </h1>
            </div>

            <div class="font-mono text-xs bg-black/60 px-3 py-1.5 rounded border border-white/10 text-right">
              <div class="text-[9px] text-gray-500 uppercase">{{ t.theaterLabel }}</div>
              <div class="text-accent-gold font-bold">{{ selectedOp.theater }}</div>
            </div>
          </div>

          <!-- Overview & Target -->
          <div class="space-y-3 font-mono text-xs">
            <p class="text-gray-300 leading-relaxed text-sm font-sans">
              {{ selectedOp.overview }}
            </p>

            <div class="bg-black/50 p-4 rounded-lg border border-white/10 space-y-1">
              <div class="text-[9px] text-gray-500 uppercase">{{ t.primaryTarget }}</div>
              <div class="text-white font-bold text-sm">{{ selectedOp.target }}</div>
            </div>
          </div>

          <!-- Tabs: INTEL Report vs OPORD Execution -->
          <div class="border-b border-white/10 flex items-center gap-4 font-mono text-xs">
            <button
              @click="activeTab = 'intel'"
              :class="[
                'pb-3 font-bold uppercase transition-all border-b-2',
                activeTab === 'intel' ? 'border-accent-cyan text-accent-cyan' : 'border-transparent text-gray-400 hover:text-white'
              ]"
            >
              {{ t.intelTab }}
            </button>
            <button
              @click="activeTab = 'opord'"
              :class="[
                'pb-3 font-bold uppercase transition-all border-b-2',
                activeTab === 'opord' ? 'border-accent-gold text-accent-gold' : 'border-transparent text-gray-400 hover:text-white'
              ]"
            >
              {{ t.opordTab }}
            </button>
          </div>

          <!-- TAB 1: INTEL REPORT -->
          <div v-if="activeTab === 'intel'" class="space-y-4 font-mono text-xs">
            <div class="flex items-center justify-between bg-red-950/40 text-red-400 px-3 py-2 rounded border border-red-500/30 text-[10px] tracking-widest font-bold">
              <span>{{ t.classification }}:</span>
              <span>{{ selectedOp.intelReport.classification }}</span>
            </div>

            <p class="text-gray-300 leading-relaxed">{{ selectedOp.intelReport.summary }}</p>

            <div class="space-y-2">
              <div class="text-[10px] text-accent-cyan uppercase font-bold">{{ t.keyFindings }}:</div>
              <ul class="space-y-2">
                <li 
                  v-for="(finding, idx) in selectedOp.intelReport.keyFindings" 
                  :key="idx"
                  class="flex items-start gap-2 bg-white/5 p-3 rounded text-gray-300"
                >
                  <span class="text-accent-cyan font-bold shrink-0">0{{ idx + 1 }}.</span>
                  <span>{{ finding }}</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- TAB 2: OPORD EXECUTION PLAN -->
          <div v-if="activeTab === 'opord'" class="space-y-4 font-mono text-xs">
            <div class="space-y-3">
              <div class="bg-black/40 p-4 rounded-lg border border-white/10 space-y-1">
                <div class="text-accent-gold font-bold uppercase text-[10px]">{{ t.phase1 }}</div>
                <div class="text-gray-300">{{ selectedOp.opord.phase1 }}</div>
              </div>

              <div class="bg-black/40 p-4 rounded-lg border border-white/10 space-y-1">
                <div class="text-accent-gold font-bold uppercase text-[10px]">{{ t.phase2 }}</div>
                <div class="text-gray-300">{{ selectedOp.opord.phase2 }}</div>
              </div>

              <div class="bg-black/40 p-4 rounded-lg border border-white/10 space-y-1">
                <div class="text-accent-gold font-bold uppercase text-[10px]">{{ t.phase3 }}</div>
                <div class="text-gray-300">{{ selectedOp.opord.phase3 }}</div>
              </div>

              <div class="bg-emerald-950/40 border border-emerald-500/40 p-4 rounded-lg space-y-1">
                <div class="text-emerald-400 font-bold uppercase text-[10px]">{{ t.outcome }}</div>
                <div class="text-white font-bold">{{ selectedOp.opord.outcome }}</div>
              </div>
            </div>
          </div>

          <!-- Units Involved -->
          <div class="pt-4 border-t border-white/10 space-y-2">
            <div class="font-mono text-[10px] text-gray-400 uppercase tracking-wider">{{ t.unitsInvolved }}:</div>
            <div class="flex flex-wrap gap-2">
              <span 
                v-for="(unit, idx) in selectedOp.unitsInvolved" 
                :key="idx"
                class="bg-white/5 border border-white/10 px-2.5 py-1 rounded font-mono text-[11px] text-gray-300"
              >
                {{ unit }}
              </span>
            </div>
          </div>

        </div>

      </div>

    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import { ArrowLeft, ShieldAlert, Radio } from 'lucide-vue-next'
import { TRANSLATED_MILITARY_OPERATIONS, type Language } from '../data/tacticalTranslations'
import { playBeep } from '../ambientAudio'

const router = useRouter()
const lang = ref<Language>('EN')

const currentOperations = computed(() => TRANSLATED_MILITARY_OPERATIONS[lang.value])
const selectedOpId = ref<string>('neptune-spear')

const selectedOp = computed(() => {
  return currentOperations.value.find(op => op.id === selectedOpId.value) || currentOperations.value[0]
})

const activeTab = ref<'intel' | 'opord'>('intel')
const defconLevel = ref<1 | 2 | 3 | 4 | 5>(4)

// Siren Audio context refs for DEFCON 1 real air raid alarm (4 cycles then auto-stop)
let sirenCtx: AudioContext | null = null
let sirenOsc1: OscillatorNode | null = null
let sirenOsc2: OscillatorNode | null = null
let sirenTimeout: ReturnType<typeof setTimeout> | null = null

function startSiren() {
  stopSiren()
  try {
    const ctx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)()
    sirenCtx = ctx

    const masterGain = ctx.createGain()
    masterGain.gain.setValueAtTime(0, ctx.currentTime)
    // Fade in master volume
    masterGain.gain.linearRampToValueAtTime(0.25, ctx.currentTime + 0.4)
    masterGain.connect(ctx.destination)

    // Outdoor mechanical horn filter (gives real siren resonance)
    const filter = ctx.createBiquadFilter()
    filter.type = 'lowpass'
    filter.frequency.setValueAtTime(1700, ctx.currentTime)
    filter.Q.setValueAtTime(1.5, ctx.currentTime)
    filter.connect(masterGain)

    // Primary Rotor (10-port equivalent)
    const osc1 = ctx.createOscillator()
    osc1.type = 'sawtooth'
    
    // Secondary Rotor (12-port equivalent - minor 3rd minor interval for real siren harmony)
    const osc2 = ctx.createOscillator()
    osc2.type = 'sawtooth'

    const now = ctx.currentTime
    const cycleLen = 4.0 // 4 seconds per full wail cycle
    const cyclesCount = 4 // EXACTLY 4 TIMES

    // Schedule 4 cycles of spin-up and spin-down pitch sweeps
    for (let i = 0; i < cyclesCount; i++) {
      const t = now + i * cycleLen

      // Start of cycle: low pitch
      osc1.frequency.setValueAtTime(330, t)
      osc2.frequency.setValueAtTime(396, t)

      // Spin up to piercing peak wail
      osc1.frequency.exponentialRampToValueAtTime(760, t + 1.8)
      osc2.frequency.exponentialRampToValueAtTime(912, t + 1.8)

      // Hold peak pitch
      osc1.frequency.setValueAtTime(760, t + 2.2)
      osc2.frequency.setValueAtTime(912, t + 2.2)

      // Spin down to low pitch
      osc1.frequency.exponentialRampToValueAtTime(330, t + cycleLen)
      osc2.frequency.exponentialRampToValueAtTime(396, t + cycleLen)
    }

    const totalDuration = cyclesCount * cycleLen // 16.0 seconds

    // Fade out at the end of the 4th cycle
    masterGain.gain.setValueAtTime(0.25, now + totalDuration - 0.8)
    masterGain.gain.linearRampToValueAtTime(0, now + totalDuration + 0.5)

    osc1.connect(filter)
    osc2.connect(filter)

    osc1.start(now)
    osc2.start(now)

    osc1.stop(now + totalDuration + 0.6)
    osc2.stop(now + totalDuration + 0.6)

    sirenOsc1 = osc1
    sirenOsc2 = osc2

    // Auto-stop & cleanup after 4 full cycles (16.6s)
    sirenTimeout = setTimeout(() => {
      stopSiren()
    }, (totalDuration + 0.8) * 1000)

  } catch {
    // Audio context unavailable
  }
}

function stopSiren() {
  if (sirenTimeout) {
    clearTimeout(sirenTimeout)
    sirenTimeout = null
  }
  try {
    sirenOsc1?.stop()
    sirenOsc2?.stop()
  } catch { /* already stopped */ }
  try {
    sirenCtx?.close()
  } catch { /* already closed */ }
  sirenCtx = null
  sirenOsc1 = null
  sirenOsc2 = null
}

function setDefcon(level: 1 | 2 | 3 | 4 | 5) {
  defconLevel.value = level
  playBeep()
  if (level === 1) {
    startSiren()
  } else {
    stopSiren()
  }
}

onBeforeUnmount(() => {
  stopSiren()
})

// Translations
const translations = {
  EN: {
    back: 'CLASSIFIED PANEL',
    pageTitle: 'COMMAND ROOM & MISSION BRIEFINGS',
    alertState: 'CURRENT ALERT STATE',
    operationsTitle: 'REAL MILITARY OPERATIONS',
    weather: 'WEATHER TELEMETRY',
    wxCondition: 'Weather Condition',
    wxVisibility: 'Visibility',
    wxWind: 'Wind',
    wxMoon: 'Moon Phase (NVG)',
    wxTemp: 'Temperature',
    dossierTitle: 'TACTICAL BRIEFING DOSSIER',
    theaterLabel: 'THEATER OF OPERATIONS',
    primaryTarget: 'PRIMARY TARGET NEUTRALIZED',
    intelTab: 'INTEL REPORT',
    opordTab: 'OPERATION ORDER (OPORD)',
    classification: 'SECURITY CLASSIFICATION',
    keyFindings: 'KEY INTELLIGENCE FINDINGS',
    phase1: 'PHASE 01 - INFILTRATION & APPROACH',
    phase2: 'PHASE 02 - DIRECT ACTION & ENGAGEMENT',
    phase3: 'PHASE 03 - EXTRACTION & WITHDRAWAL',
    outcome: 'OPERATIONAL RESULT & IMPACT',
    unitsInvolved: 'UNITS & FORCES INVOLVED'
  },
  PT: {
    back: 'PAINEL CLASSIFICADO',
    pageTitle: 'SALA DE COMANDO & BRIEFING DE MISSÕES',
    alertState: 'ESTADO DE ALERTA ATUAL',
    operationsTitle: 'OPERAÇÕES MILITARES REAIS',
    weather: 'TELEMETRIA METEOROLÓGICA',
    wxCondition: 'Condição do Tempo',
    wxVisibility: 'Visibilidade',
    wxWind: 'Vento',
    wxMoon: 'Fase Lunar (NVG)',
    wxTemp: 'Temperatura',
    dossierTitle: 'DOSSIÊ DE BRIEFING TÁTICO',
    theaterLabel: 'TEATRO DE OPERAÇÕES',
    primaryTarget: 'ALVO PRIMÁRIO NEUTRALIZADO',
    intelTab: 'RELATÓRIO DE INTEL',
    opordTab: 'ORDEM DE OPERAÇÃO (OPORD)',
    classification: 'CLASSIFICAÇÃO DE SEGURANÇA',
    keyFindings: 'DESCOBERTAS CHAVE DA INTELIGÊNCIA',
    phase1: 'FASE 01 - INFILTRAÇÃO & APROXIMAÇÃO',
    phase2: 'FASE 02 - AÇÃO DIRETA & ENGAJAMENTO',
    phase3: 'FASE 03 - EXTRAÇÃO & RETROCEDIMENTO',
    outcome: 'RESULTADO E IMPACTO OPERACIONAL',
    unitsInvolved: 'UNIDADES E FORÇAS ENVOLVIDAS'
  }
}

const t = computed(() => translations[lang.value])

// Dynamic styling based on DEFCON level
const defconDescription = computed(() => {
  const descs = {
    EN: {
      5: 'NORMAL READINESS // PEACETIME',
      4: 'INTELLIGENCE MONITORING & INSPECTION',
      3: 'AIR & NAVAL FORCE MOBILIZATION',
      2: 'MAXIMUM COMBAT READINESS // DEPLOYMENT',
      1: 'IMMINENT NUCLEAR ATTACK // FULL COMBAT'
    },
    PT: {
      5: 'PRONTIDÃO NORMAL // TEMPO DE PAZ',
      4: 'INSPEÇÃO E MONITORAMENTO DE INTELIGÊNCIA',
      3: 'MOBILIZAÇÃO DE FORÇAS AÉREAS E NAVAIS',
      2: 'PRONTIDÃO MÁXIMA DE COMBATE // DEPLOYMENT',
      1: 'IMINÊNCIA DE ATAQUE NUCLEAR // FORÇAS EM COMBATE TOTAL'
    }
  }
  return descs[lang.value][defconLevel.value]
})

const defconBgClass = computed(() => {
  switch (defconLevel.value) {
    case 5: return 'bg-navy-950'
    case 4: return 'bg-[#04141d]'
    case 3: return 'bg-[#181404]'
    case 2: return 'bg-[#210e04]'
    case 1: return 'bg-[#290404]'
  }
})

const defconBannerClass = computed(() => {
  switch (defconLevel.value) {
    case 5: return 'bg-blue-900/60 text-blue-300 border-b border-blue-500/30'
    case 4: return 'bg-emerald-900/60 text-emerald-300 border-b border-emerald-500/30'
    case 3: return 'bg-yellow-900/60 text-yellow-300 border-b border-yellow-500/30'
    case 2: return 'bg-orange-900/60 text-orange-300 border-b border-orange-500/30'
    case 1: return 'bg-red-900/90 text-red-200 border-b border-red-500/60 animate-pulse'
  }
})

const defconTextColor = computed(() => {
  switch (defconLevel.value) {
    case 5: return 'text-accent-cyan'
    case 4: return 'text-emerald-400'
    case 3: return 'text-yellow-400'
    case 2: return 'text-orange-400'
    case 1: return 'text-red-500'
  }
})

function getDefconBtnActiveClass(level: 1 | 2 | 3 | 4 | 5) {
  switch (level) {
    case 5: return 'bg-blue-500 text-black shadow-sm font-bold'
    case 4: return 'bg-emerald-500 text-black shadow-sm font-bold'
    case 3: return 'bg-yellow-500 text-black shadow-sm font-bold'
    case 2: return 'bg-orange-500 text-black shadow-sm font-bold'
    case 1: return 'bg-red-600 text-white shadow-sm font-bold animate-pulse'
  }
}
</script>

<style scoped>
@keyframes strobe {
  0%, 100% { opacity: 0; }
  50% { opacity: 0.15; }
}
.animate-strobe {
  animation: strobe 0.5s ease-in-out infinite;
}
</style>
