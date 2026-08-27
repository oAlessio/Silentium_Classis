<template>
  <div class="min-h-screen bg-navy-950 text-gray-200 relative overflow-x-hidden select-none pb-20">
    <!-- Background grid -->
    <div class="fixed inset-0 bg-[radial-gradient(#162a42_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none"></div>

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
          <Sliders class="w-4 h-4 text-accent-gold animate-pulse" />
          <span class="font-mono text-xs tracking-[0.2em] text-accent-gold font-bold uppercase">
            {{ t.title }}
          </span>
        </div>
      </div>

      <div class="flex items-center gap-4">
        <!-- Mode Switcher: Head-to-Head vs Weapons -->
        <div class="flex items-center gap-2 bg-black/60 p-1 rounded-lg border border-white/10 font-mono text-xs">
          <button 
            @click="activeModule = 'comparator'; playBeep()"
            :class="[
              'px-3 py-1 rounded transition-all tracking-wider',
              activeModule === 'comparator' ? 'bg-accent-cyan/20 text-accent-cyan border border-accent-cyan/50 font-bold' : 'text-gray-400 hover:text-white'
            ]"
          >
            {{ t.headToHead }}
          </button>
          <button 
            @click="activeModule = 'weapons'; playBeep()"
            :class="[
              'px-3 py-1 rounded transition-all tracking-wider',
              activeModule === 'weapons' ? 'bg-accent-gold/20 text-accent-gold border border-accent-gold/50 font-bold' : 'text-gray-400 hover:text-white'
            ]"
          >
            {{ t.weaponsEstimator }}
          </button>
        </div>

        <!-- Language Switcher (EN / PT) -->
        <div class="flex items-center gap-1 bg-black/70 p-1 rounded-lg border border-white/10 font-mono text-xs">
          <button
            @click="lang = 'EN'; playBeep()"
            :class="[
              'px-2.5 py-1 rounded font-bold transition-all text-xs',
              lang === 'EN' ? 'bg-accent-gold/20 text-accent-gold border border-accent-gold/50' : 'text-gray-400 hover:text-white'
            ]"
          >
            EN
          </button>
          <button
            @click="lang = 'PT'; playBeep()"
            :class="[
              'px-2.5 py-1 rounded font-bold transition-all text-xs',
              lang === 'PT' ? 'bg-accent-gold/20 text-accent-gold border border-accent-gold/50' : 'text-gray-400 hover:text-white'
            ]"
          >
            PT
          </button>
        </div>
      </div>
    </header>

    <main class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
      
      <!-- ====================================================
           MODULE 1: HEAD-TO-HEAD COMPARATOR (SPIDER CHART)
           ==================================================== -->
      <section v-if="activeModule === 'comparator'" class="space-y-8">
        
        <!-- Unit Type Filter -->
        <div class="flex items-center justify-between bg-navy-900/80 p-4 rounded-xl border border-white/10 backdrop-blur">
          <div class="flex items-center gap-3">
            <span class="font-mono text-xs text-gray-400 uppercase tracking-wider">{{ t.categoryType }}</span>
            <div class="flex items-center bg-black/50 p-1 rounded-lg border border-white/10 font-mono text-xs">
              <button 
                @click="setCategory('submarine')"
                :class="[
                  'px-3 py-1 rounded font-bold transition-all',
                  unitCategory === 'submarine' ? 'bg-accent-cyan text-black' : 'text-gray-400 hover:text-white'
                ]"
              >
                {{ t.submarines }}
              </button>
              <button 
                @click="setCategory('aircraft')"
                :class="[
                  'px-3 py-1 rounded font-bold transition-all',
                  unitCategory === 'aircraft' ? 'bg-accent-gold text-black' : 'text-gray-400 hover:text-white'
                ]"
              >
                {{ t.aircraft }}
              </button>
            </div>
          </div>

          <div class="font-mono text-[10px] text-accent-cyan uppercase tracking-widest hidden md:block">
            {{ t.subTitleMetrics }}
          </div>
        </div>

        <!-- Selection Dropdowns & Spider Chart Row -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
          
          <!-- Unit A Card & Select -->
          <div class="bg-navy-900/80 border border-accent-cyan/40 p-6 rounded-xl backdrop-blur relative overflow-hidden">
            <div class="absolute top-0 left-0 w-full h-1 bg-accent-cyan"></div>
            <span class="font-mono text-[10px] text-accent-cyan font-bold tracking-widest uppercase">{{ t.unitAlpha }}</span>
            
            <select 
              v-model="unitAId" 
              @change="playBeep()"
              class="w-full mt-2 mb-4 bg-black/60 border border-accent-cyan/30 text-white font-mono text-sm rounded px-3 py-2 focus:outline-none focus:border-accent-cyan"
            >
              <option v-for="unit in filteredUnits" :key="unit.id" :value="unit.id">
                {{ unit.name }} ({{ unit.country }})
              </option>
            </select>

            <div v-if="unitA" class="space-y-3">
              <img :src="unitA.image" class="w-full h-40 object-cover rounded-lg border border-white/10" />
              <h3 class="text-xl font-display text-white uppercase">{{ unitA.name }}</h3>
              <div class="font-mono text-xs text-accent-cyan">{{ unitA.classType }}</div>
              
              <div class="space-y-1 pt-2 border-t border-white/10 font-mono text-xs">
                <div class="flex justify-between text-gray-400"><span>{{ t.speed }}</span><span class="text-white">{{ unitA.realSpecs.speed }}</span></div>
                <div class="flex justify-between text-gray-400"><span>{{ t.stealth }}</span><span class="text-white">{{ unitA.realSpecs.stealthRcs }}</span></div>
                <div class="flex justify-between text-gray-400"><span>{{ t.ceilingDepth }}</span><span class="text-white">{{ unitA.realSpecs.depthCeiling }}</span></div>
              </div>
            </div>
          </div>

          <!-- SPIDER / RADAR CHART SVG -->
          <div class="bg-black/80 border border-white/10 p-6 rounded-xl flex flex-col items-center justify-center relative min-h-[380px]">
            <span class="font-mono text-[10px] text-gray-400 uppercase tracking-widest mb-2">{{ t.radarChartTitle }}</span>
            
            <svg class="w-72 h-72 overflow-visible" viewBox="-120 -120 240 240">
              <!-- Web Concentric Polygons -->
              <polygon 
                v-for="r in [20, 40, 60, 80, 100]" 
                :key="r" 
                :points="getPolygonPoints(r)" 
                fill="none" 
                stroke="rgba(255,255,255,0.1)" 
                stroke-width="1" 
              />
              
              <!-- Axes Lines -->
              <line 
                v-for="(_, idx) in AXIS_KEYS" 
                :key="idx" 
                x1="0" y1="0" 
                :x2="getAxisEnd(idx).x" 
                :y2="getAxisEnd(idx).y" 
                stroke="rgba(255,255,255,0.15)" 
                stroke-width="1"
              />

              <!-- Axis Labels -->
              <text 
                v-for="(axis, idx) in t.axisLabels" 
                :key="idx" 
                :x="getLabelPos(idx).x" 
                :y="getLabelPos(idx).y" 
                fill="#9ca3af" 
                font-size="9" 
                font-family="monospace" 
                text-anchor="middle"
                alignment-baseline="middle"
              >
                {{ axis }}
              </text>

              <!-- Polygon Unit A (Cyan) -->
              <polygon 
                v-if="unitA"
                :points="getUnitPolygonPoints(unitA)" 
                fill="rgba(94, 175, 197, 0.3)" 
                stroke="#5eafc5" 
                stroke-width="2" 
              />

              <!-- Polygon Unit B (Gold) -->
              <polygon 
                v-if="unitB"
                :points="getUnitPolygonPoints(unitB)" 
                fill="rgba(212, 175, 55, 0.3)" 
                stroke="#d4af37" 
                stroke-width="2" 
              />
            </svg>

            <!-- Legend -->
            <div class="flex items-center gap-6 font-mono text-xs mt-4">
              <div class="flex items-center gap-2">
                <span class="w-3 h-3 bg-accent-cyan rounded-sm"></span>
                <span class="text-white">{{ unitA?.name }}</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="w-3 h-3 bg-accent-gold rounded-sm"></span>
                <span class="text-white">{{ unitB?.name }}</span>
              </div>
            </div>
          </div>

          <!-- Unit B Card & Select -->
          <div class="bg-navy-900/80 border border-accent-gold/40 p-6 rounded-xl backdrop-blur relative overflow-hidden">
            <div class="absolute top-0 left-0 w-full h-1 bg-accent-gold"></div>
            <span class="font-mono text-[10px] text-accent-gold font-bold tracking-widest uppercase">{{ t.unitBravo }}</span>
            
            <select 
              v-model="unitBId" 
              @change="playBeep()"
              class="w-full mt-2 mb-4 bg-black/60 border border-accent-gold/30 text-white font-mono text-sm rounded px-3 py-2 focus:outline-none focus:border-accent-gold"
            >
              <option v-for="unit in filteredUnits" :key="unit.id" :value="unit.id">
                {{ unit.name }} ({{ unit.country }})
              </option>
            </select>

            <div v-if="unitB" class="space-y-3">
              <img :src="unitB.image" class="w-full h-40 object-cover rounded-lg border border-white/10" />
              <h3 class="text-xl font-display text-white uppercase">{{ unitB.name }}</h3>
              <div class="font-mono text-xs text-accent-gold">{{ unitB.classType }}</div>

              <div class="space-y-1 pt-2 border-t border-white/10 font-mono text-xs">
                <div class="flex justify-between text-gray-400"><span>{{ t.speed }}</span><span class="text-white">{{ unitB.realSpecs.speed }}</span></div>
                <div class="flex justify-between text-gray-400"><span>{{ t.stealth }}</span><span class="text-white">{{ unitB.realSpecs.stealthRcs }}</span></div>
                <div class="flex justify-between text-gray-400"><span>{{ t.ceilingDepth }}</span><span class="text-white">{{ unitB.realSpecs.depthCeiling }}</span></div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <!-- ====================================================
           MODULE 2: WEAPONS & MISSILE RANGE ESTIMATOR
           ==================================================== -->
      <section v-if="activeModule === 'weapons'" class="space-y-8">
        
        <div class="bg-navy-900/80 border border-white/10 p-6 rounded-xl backdrop-blur">
          <h2 class="text-2xl font-display text-white uppercase tracking-wider mb-2">
            {{ t.estimatorTitle }}
          </h2>
          <p class="text-xs font-mono text-gray-400 max-w-3xl mb-6">
            {{ t.estimatorDesc }}
          </p>

          <!-- Weapon System Cards Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            <button
              v-for="weapon in currentWeapons"
              :key="weapon.id"
              @click="selectedWeaponId = weapon.id; playBeep()"
              :class="[
                'p-4 rounded-xl text-left font-mono border transition-all flex flex-col justify-between',
                selectedWeapon?.id === weapon.id
                  ? 'bg-accent-gold/20 border-accent-gold text-white shadow-[0_0_15px_rgba(212,175,55,0.2)]'
                  : 'bg-black/50 border-white/10 text-gray-400 hover:bg-white/5 hover:text-white'
              ]"
            >
              <div>
                <span class="text-[9px] text-accent-gold uppercase font-bold tracking-widest">{{ weapon.category }}</span>
                <div class="text-sm font-bold text-white mt-1">{{ weapon.name }}</div>
              </div>

              <div class="mt-4 flex items-center justify-between text-xs pt-2 border-t border-white/10">
                <span>{{ t.maxRange }}</span>
                <span class="text-accent-gold font-bold">{{ weapon.rangeKm }} km</span>
              </div>
            </button>
          </div>

          <!-- Selected Weapon Detailed Telemetry & Range Visualizer -->
          <div v-if="selectedWeapon" class="grid grid-cols-1 lg:grid-cols-2 gap-6 bg-black/60 p-6 rounded-xl border border-white/10">
            <!-- Details -->
            <div class="space-y-4 font-mono text-xs">
              <div class="flex items-center justify-between border-b border-white/10 pb-2">
                <span class="text-accent-gold font-bold text-sm uppercase">{{ selectedWeapon.name }}</span>
                <span class="bg-accent-gold/20 text-accent-gold px-2 py-0.5 rounded text-[10px] uppercase font-bold border border-accent-gold/40">
                  {{ selectedWeapon.category }}
                </span>
              </div>

              <p class="text-gray-300 leading-relaxed">{{ selectedWeapon.description }}</p>

              <div class="space-y-2 bg-navy-950 p-4 rounded-lg border border-white/5">
                <div class="flex justify-between"><span class="text-gray-500">{{ t.effectiveRangeLabel }}</span><span class="text-accent-gold font-bold">{{ selectedWeapon.rangeKm }} km</span></div>
                <div class="flex justify-between"><span class="text-gray-500">{{ t.cruiseSpeedLabel }}</span><span class="text-white font-bold">{{ selectedWeapon.speedMach }}</span></div>
                <div class="flex justify-between"><span class="text-gray-500">{{ t.warheadLabel }}</span><span class="text-white font-bold">{{ selectedWeapon.warhead }}</span></div>
                <div class="flex justify-between"><span class="text-gray-500">{{ t.guidanceLabel }}</span><span class="text-white font-bold">{{ selectedWeapon.guidance }}</span></div>
                <div class="flex justify-between"><span class="text-gray-500">{{ t.platformLabel }}</span><span class="text-accent-cyan font-bold">{{ selectedWeapon.platform }}</span></div>
              </div>

              <!-- Distance Interactive Simulator -->
              <div class="pt-2">
                <div class="flex items-center justify-between text-xs mb-2">
                  <span class="text-gray-400">{{ t.simulatedDistance }}</span>
                  <span class="text-accent-gold font-bold">{{ simulatedDistance }} km</span>
                </div>
                <input 
                  type="range" 
                  min="10" 
                  :max="selectedWeapon.rangeKm" 
                  v-model.number="simulatedDistance"
                  class="w-full accent-accent-gold cursor-pointer"
                />
                <div class="flex justify-between text-[10px] text-gray-500 mt-1">
                  <span>0 km</span>
                  <span>{{ t.maxRangeMarker }} ({{ selectedWeapon.rangeKm }} km)</span>
                </div>
              </div>
            </div>

            <!-- Graphic Range Radius Envelope Visualizer -->
            <div class="flex flex-col items-center justify-center bg-navy-950 p-6 rounded-xl border border-white/10 relative overflow-hidden">
              <span class="font-mono text-[10px] text-gray-400 uppercase tracking-widest mb-4">{{ t.envelopeTitle }}</span>

              <div class="relative w-64 h-64 rounded-full border border-dashed border-accent-gold/40 flex items-center justify-center animate-pulse">
                <!-- Center Launcher -->
                <div class="w-3 h-3 bg-accent-cyan rounded-full shadow-[0_0_10px_#5eafc5]"></div>
                
                <!-- Target Marker -->
                <div 
                  class="absolute w-4 h-4 border-2 border-red-500 rounded-full flex items-center justify-center transition-all duration-300"
                  :style="{
                    transform: `translate(${(simulatedDistance / selectedWeapon.rangeKm) * 90}px, 0px)`
                  }"
                >
                  <div class="w-1 h-1 bg-red-500 rounded-full"></div>
                </div>

                <!-- Launch Trajectory Vector Line -->
                <svg class="absolute inset-0 w-full h-full pointer-events-none">
                  <line 
                    x1="128" y1="128" 
                    :x2="128 + (simulatedDistance / selectedWeapon.rangeKm) * 90" y2="128" 
                    stroke="#ef4444" stroke-dasharray="4" stroke-width="1.5"
                  />
                </svg>
              </div>

              <div class="mt-6 text-center font-mono text-xs">
                <span class="text-gray-400">{{ t.targetStatusLabel }} </span>
                <span class="text-emerald-400 font-bold uppercase">{{ t.insideRange }}</span>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { ArrowLeft, Sliders } from 'lucide-vue-next'
import type { UnitSpec } from '../data/tacticalData'
import { TRANSLATED_COMPARISON_UNITS, TRANSLATED_WEAPON_SYSTEMS, type Language } from '../data/tacticalTranslations'
import { playBeep } from '../ambientAudio'

const router = useRouter()
const lang = ref<Language>('EN')
const activeModule = ref<'comparator' | 'weapons'>('comparator')
const unitCategory = ref<'submarine' | 'aircraft'>('submarine')

// Dynamic datasets per selected language
const currentUnits = computed(() => TRANSLATED_COMPARISON_UNITS[lang.value])
const currentWeapons = computed(() => TRANSLATED_WEAPON_SYSTEMS[lang.value])

// Filtered units by category
const filteredUnits = computed(() => {
  return currentUnits.value.filter(u => u.type === unitCategory.value)
})

const unitAId = ref<string>('virginia-class')
const unitBId = ref<string>('seawolf-class')

const unitA = computed(() => currentUnits.value.find(u => u.id === unitAId.value) || currentUnits.value[0])
const unitB = computed(() => currentUnits.value.find(u => u.id === unitBId.value) || currentUnits.value[1])

// Weapons Simulator
const selectedWeaponId = ref<string>('tomahawk-v')
const selectedWeapon = computed(() => currentWeapons.value.find(w => w.id === selectedWeaponId.value) || currentWeapons.value[0])

const simulatedDistance = ref<number>(800)

function setCategory(cat: 'submarine' | 'aircraft') {
  unitCategory.value = cat
  const units = currentUnits.value.filter(u => u.type === cat)
  if (units.length >= 2) {
    unitAId.value = units[0].id
    unitBId.value = units[1].id
  }
  playBeep()
}

// SPIDER / RADAR CHART MATH
const AXIS_KEYS: (keyof UnitSpec['metrics'])[] = ['speed', 'stealth', 'depthCeiling', 'payload', 'range']

function getAxisAngle(index: number): number {
  return (index * 2 * Math.PI) / AXIS_KEYS.length - Math.PI / 2
}

function getAxisEnd(index: number, radius = 90) {
  const angle = getAxisAngle(index)
  return {
    x: Math.cos(angle) * radius,
    y: Math.sin(angle) * radius
  }
}

function getLabelPos(index: number) {
  return getAxisEnd(index, 110)
}

function getPolygonPoints(radius: number): string {
  return AXIS_KEYS.map((_, idx) => {
    const pt = getAxisEnd(idx, radius)
    return `${pt.x},${pt.y}`
  }).join(' ')
}

function getUnitPolygonPoints(unit: UnitSpec): string {
  return AXIS_KEYS.map((key, idx) => {
    const val = unit.metrics[key] // 0 - 100
    const pt = getAxisEnd(idx, (val / 100) * 90)
    return `${pt.x},${pt.y}`
  }).join(' ')
}

const translations = {
  EN: {
    back: 'CLASSIFIED PANEL',
    title: 'TACTICAL COMPARATOR & MISSILES',
    headToHead: 'HEAD-TO-HEAD COMPARATOR',
    weaponsEstimator: 'MISSILE ESTIMATOR',
    categoryType: 'CATEGORY TYPE:',
    submarines: 'SUBMARINES',
    aircraft: 'AIRCRAFT',
    subTitleMetrics: 'NORMALIZED METRICS ON 5 TACTICAL AXES',
    unitAlpha: 'ALPHA UNIT',
    unitBravo: 'BRAVO UNIT',
    speed: 'Speed:',
    stealth: 'Stealth / RCS:',
    ceilingDepth: 'Ceiling / Depth:',
    radarChartTitle: 'COMPARATIVE RADAR CHART',
    axisLabels: ['Speed', 'Stealth', 'Ceiling / Depth', 'Payload', 'Range'],
    estimatorTitle: 'MISSILE RANGE & BALLISTICS ESTIMATOR',
    estimatorDesc: 'Select a weapon system to simulate its engagement envelope, cruise speed, warhead type, and effective blast radius.',
    maxRange: 'Max Range:',
    effectiveRangeLabel: 'EFFECTIVE RANGE:',
    cruiseSpeedLabel: 'CRUISE SPEED:',
    warheadLabel: 'WARHEAD / EXP:',
    guidanceLabel: 'GUIDANCE SYSTEM:',
    platformLabel: 'LAUNCH PLATFORM:',
    simulatedDistance: 'SIMULATED TARGET DISTANCE:',
    maxRangeMarker: 'MAXIMUM RANGE',
    envelopeTitle: 'BALLISTIC LAUNCH ENVELOPE',
    targetStatusLabel: 'TARGET STATUS:',
    insideRange: 'WITHIN ENGAGEMENT RADIUS'
  },
  PT: {
    back: 'PAINEL CLASSIFICADO',
    title: 'COMPARADOR TÁTICO & MÍSSEIS',
    headToHead: 'COMPARADOR HEAD-TO-HEAD',
    weaponsEstimator: 'ESTIMADOR DE MÍSSEIS',
    categoryType: 'TIPO DE CATEGORIA:',
    submarines: 'SUBMARINOS',
    aircraft: 'AERONAVES',
    subTitleMetrics: 'MÉTRICAS NORMALIZADAS EM 5 EIXOS TÁTICOS',
    unitAlpha: 'UNIDADE ALPHA',
    unitBravo: 'UNIDADE BRAVO',
    speed: 'Velocidade:',
    stealth: 'Stealth / RCS:',
    ceilingDepth: 'Teto / Profundidade:',
    radarChartTitle: 'GRÁFICO RADAR COMPARATIVO',
    axisLabels: ['Velocidade', 'Stealth', 'Teto / Prof.', 'Carga Útil', 'Alcance'],
    estimatorTitle: 'ESTIMADOR DE ALCANCE E BALÍSTICA DE MÍSSEIS',
    estimatorDesc: 'Selecione o sistema de armamento para simular seu envelope de engajamento, velocidade de cruzeiro, tipo de ogiva e raio efetivo de destruição.',
    maxRange: 'Alcance Máx:',
    effectiveRangeLabel: 'ALCANCE EFETIVO:',
    cruiseSpeedLabel: 'VELOCIDADE DE CRUZEIRO:',
    warheadLabel: 'OGIVA / EXP:',
    guidanceLabel: 'SISTEMA DE GUIAGEM:',
    platformLabel: 'PLATAFORMA LANÇADORA:',
    simulatedDistance: 'DISTÂNCIA DO ALVO SIMULADO:',
    maxRangeMarker: 'ALCANCE MÁXIMO',
    envelopeTitle: 'ENVELOPE DE DISPARO BALÍSTICO',
    targetStatusLabel: 'STATUS DO ALVO:',
    insideRange: 'DENTRO DO RAIO DE ENGAJAMENTO'
  }
}

const t = computed(() => translations[lang.value])
</script>
