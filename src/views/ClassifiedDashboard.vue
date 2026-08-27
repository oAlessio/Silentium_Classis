<template>
  <div class="min-h-screen bg-black text-gray-300 relative overflow-x-hidden flex flex-col items-center justify-center py-12">
    
    <!-- Background elements -->
    <div class="absolute inset-0 z-0">
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-navy-900/40 via-black to-black"></div>
      <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-50"></div>
    </div>

    <!-- Scanner line effect -->
    <div class="absolute inset-0 pointer-events-none z-10 overflow-hidden">
      <div class="w-full h-1 bg-accent-cyan/20 blur-sm shadow-[0_0_20px_rgba(94,175,197,0.5)] animate-scan"></div>
    </div>

    <!-- Content -->
    <div class="relative z-20 text-center px-6 w-full max-w-7xl mx-auto">
      <div class="font-mono text-[10px] tracking-[0.5em] text-accent-cyan mb-8 uppercase animate-pulse">
        CLEARANCE LEVEL: UMBRA // GRANTED
      </div>
      
      <!-- Title (shifts up on submarine hover or comparator hover so layout moves up in sync) -->
      <h1 
        :class="[
          'text-4xl md:text-6xl font-display uppercase tracking-widest text-white mb-32 transition-transform duration-700 ease-[cubic-bezier(0.2,1,0.2,1)]',
          activeHover === 'submarines' || activeHover === 'comparator' ? '-translate-y-16 md:-translate-y-20' : 'translate-y-0'
        ]"
      >
        Select Operational<br/>Theater
      </h1>

      <!-- Top Row: 2 cards (Submarines & Ground Ops - moves UP with bottom row on Comparator hover) -->
      <div 
        :class="[
          'grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto mb-12 transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]',
          activeHover === 'comparator' ? '-translate-y-20 md:-translate-y-24' : 'translate-y-0'
        ]"
      >
        
        <!-- Submarines Card Wrapper -->
        <div 
          class="relative group h-full"
          @mouseenter="activeHover = 'submarines'"
          @mouseleave="activeHover = 'none'"
        >
          <!-- Original Animated Submarine (Emerging from TOP) -->
          <div class="absolute -top-64 left-0 right-0 z-0 h-64 pointer-events-none translate-y-24 opacity-0 group-hover:translate-y-0 group-hover:opacity-80 transition-all duration-1000 ease-[cubic-bezier(0.2,1,0.2,1)] mix-blend-screen flex justify-center overflow-visible">
            <img src="/submarine2.png" class="w-full h-full object-contain object-bottom scale-[1.2]" alt="Submarine surfacing" />
          </div>

          <!-- Submarines Button -->
          <button @click="router.push('/classified/submarines')" class="relative z-10 w-full bg-navy-950/80 border border-white/10 group-hover:border-accent-cyan/50 p-10 transition-all duration-500 overflow-hidden text-left flex flex-col h-full backdrop-blur-md">
            <div class="absolute inset-0 bg-gradient-to-br from-accent-cyan/0 via-transparent to-accent-cyan/5 group-hover:from-accent-cyan/10 transition-colors z-0"></div>
            
            <div class="relative z-10 flex flex-col h-full">
              <div class="font-mono text-[10px] tracking-[0.2em] text-white/40 mb-4">DEPT 01</div>
              <h2 class="text-3xl font-display text-white tracking-wider mb-4 group-hover:text-accent-cyan transition-colors">SILENT SERVICE</h2>
              <p class="text-sm text-white/50 tracking-wider mb-8 leading-relaxed">
                Nuclear submarine fleet. Deep water operations, strategic deterrence, and covert surveillance.
              </p>
              
              <div class="mt-auto flex items-center justify-between font-mono text-[10px] text-accent-cyan uppercase tracking-widest">
                <span>Access Files</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="transform group-hover:translate-x-2 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </div>
            </div>
          </button>
        </div>

        <!-- Ground Ops Card Wrapper -->
        <div 
          class="relative group h-full"
          @mouseenter="activeHover = 'ground-ops'"
          @mouseleave="activeHover = 'none'"
        >
          <!-- Original Animated Rappel (Dropping from BOTTOM) -->
          <div class="absolute -bottom-64 right-4 z-20 h-64 w-64 pointer-events-none -translate-y-24 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] mix-blend-screen flex justify-center overflow-visible">
            <img src="/rappel.png" class="w-full h-full object-contain object-top" alt="Rappelling operator" />
          </div>

          <!-- Ground Ops Button -->
          <button @click="router.push('/classified/ground-ops')" class="relative z-10 w-full bg-navy-950/80 border border-white/10 group-hover:border-accent-gold/50 p-10 transition-all duration-500 overflow-hidden text-left flex flex-col h-full backdrop-blur-md">
            <div class="absolute inset-0 bg-gradient-to-br from-accent-gold/0 via-transparent to-accent-gold/5 group-hover:from-accent-gold/10 transition-colors z-0"></div>
            
            <div class="relative z-10 flex flex-col h-full">
              <div class="font-mono text-[10px] tracking-[0.2em] text-white/40 mb-4">DEPT 02</div>
              <h2 class="text-3xl font-display text-white tracking-wider mb-4 group-hover:text-accent-gold transition-colors">GROUND OPS</h2>
              <p class="text-sm text-white/50 tracking-wider mb-8 leading-relaxed">
                Tier 1 Special Mission Units. Naval Special Warfare Development Group (DEVGRU) and joint aviation operations.
              </p>
              
              <div class="mt-auto flex items-center justify-between font-mono text-[10px] text-accent-gold uppercase tracking-widest">
                <span>Access Files</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="transform group-hover:translate-x-2 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </div>
            </div>
          </button>
        </div>

      </div>

      <!-- Bottom Row: 3 cards (Glides down on Ground Ops, all blocks rise UP on Comparator) -->
      <div 
        :class="[
          'grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]',
          activeHover === 'ground-ops' ? 'translate-y-52 md:translate-y-56' : activeHover === 'comparator' ? '-translate-y-20 md:-translate-y-24' : 'translate-y-0'
        ]"
      >
        
        <!-- Dept 03: Sat-Recon 3D (HIGH-REALISM SATELLITE SLIDING LEFT) -->
        <div 
          class="relative group h-full"
          @mouseenter="activeHover = 'sat-recon'"
          @mouseleave="activeHover = 'none'"
        >
          <!-- High realism Satellite (Sliding to the LEFT out from behind card) -->
          <div class="absolute top-2 left-0 z-0 h-[92%] w-56 pointer-events-none translate-x-0 opacity-0 group-hover:-translate-x-24 lg:group-hover:-translate-x-28 group-hover:opacity-100 group-hover:-rotate-6 transition-all duration-700 ease-[cubic-bezier(0.2,1,0.2,1)] flex items-center justify-center overflow-visible">
            <img 
              src="/satellite.png" 
              class="w-full h-full object-contain scale-125 filter brightness-110 contrast-110 drop-shadow-[0_12px_24px_rgba(0,0,0,0.85)] rounded-lg" 
              alt="Reconnaissance Satellite" 
            />
          </div>

          <button @click="router.push('/classified/sat-recon')" class="relative z-10 w-full bg-navy-950/80 border border-white/10 group-hover:border-accent-cyan/50 p-6 transition-all duration-500 overflow-hidden text-left flex flex-col h-full backdrop-blur-md">
            <div class="absolute inset-0 bg-gradient-to-br from-accent-cyan/0 via-transparent to-accent-cyan/5 group-hover:from-accent-cyan/10 transition-colors z-0"></div>
            
            <div class="relative z-10 flex flex-col h-full">
              <div class="font-mono text-[10px] tracking-[0.2em] text-white/40 mb-3">DEPT 03</div>
              <h2 class="text-xl font-display text-white tracking-wider mb-2 group-hover:text-accent-cyan transition-colors">SAT-RECON 3D</h2>
              <p class="text-xs text-white/50 tracking-wider mb-6 leading-relaxed">
                Interactive 3D tactical globe. Naval base tracking, orbital satellites, and FLIR/NVG optics.
              </p>
              
              <div class="mt-auto flex items-center justify-between font-mono text-[10px] text-accent-cyan uppercase tracking-widest font-bold">
                <span>Access Sat-Link</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="transform group-hover:translate-x-2 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </div>
            </div>
          </button>
        </div>

        <!-- Dept 04: Tactical Comparator (REALISTIC F-35 SLIDING INTO VIEW WHEN ALL BLOCKS RISE UP) -->
        <div 
          class="relative group h-full"
          @mouseenter="activeHover = 'comparator'"
          @mouseleave="activeHover = 'none'"
        >
          <!-- High realism F-35 Stealth Jet + Missile Graphic (Revealed underneath as blocks move UP) -->
          <div class="absolute -bottom-56 left-0 right-0 z-20 h-48 pointer-events-none translate-y-4 opacity-0 group-hover:translate-y-12 group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] flex items-center justify-center gap-3 overflow-visible">
            <!-- F-35 Jet -->
            <img 
              src="/f35.png" 
              class="h-40 w-auto object-contain filter brightness-110 contrast-110 drop-shadow-[0_12px_24px_rgba(0,0,0,0.9)] rounded-lg transform -rotate-6" 
              alt="F-35 Stealth Fighter" 
            />

            <!-- Tomahawk Missile Badge -->
            <div class="flex flex-col items-center justify-center font-mono text-[9px] text-accent-gold bg-black/90 p-2 rounded border border-accent-gold/30 shadow-2xl shrink-0 backdrop-blur">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 text-accent-gold animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5l-5-3-5 3M19 12l-7-2-7 2M17 19l-5-2-5 2"/></svg>
              <span class="font-bold tracking-widest text-[8px] uppercase">TOMAHAWK V</span>
            </div>
          </div>

          <button @click="router.push('/classified/comparator')" class="relative z-10 w-full bg-navy-950/80 border border-white/10 group-hover:border-accent-gold/50 p-6 transition-all duration-500 overflow-hidden text-left flex flex-col h-full backdrop-blur-md">
            <div class="absolute inset-0 bg-gradient-to-br from-accent-gold/0 via-transparent to-accent-gold/5 group-hover:from-accent-gold/10 transition-colors z-0"></div>
            
            <div class="relative z-10 flex flex-col h-full">
              <div class="font-mono text-[10px] tracking-[0.2em] text-white/40 mb-3">DEPT 04</div>
              <h2 class="text-xl font-display text-white tracking-wider mb-2 group-hover:text-accent-gold transition-colors">TACTICAL COMPARATOR</h2>
              <p class="text-xs text-white/50 tracking-wider mb-6 leading-relaxed">
                Head-to-head Spider Chart & missile range estimator (Tomahawk, Trident II, Harpoon, MK 48).
              </p>
              
              <div class="mt-auto flex items-center justify-between font-mono text-[10px] text-accent-gold uppercase tracking-widest font-bold">
                <span>Access Matrix</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="transform group-hover:translate-x-2 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </div>
            </div>
          </button>
        </div>

        <!-- Dept 05: Situation Room (with TOP SECRET Dossier sliding out to the right) -->
        <div 
          class="relative group h-full"
          @mouseenter="activeHover = 'situation-room'"
          @mouseleave="activeHover = 'none'"
        >
          <!-- TOP SECRET DOSSIER FOLDER (Sliding out to the right behind/beside card) -->
          <div class="absolute top-2 right-0 z-0 h-[88%] w-48 pointer-events-none translate-x-0 opacity-0 group-hover:translate-x-20 lg:group-hover:translate-x-24 group-hover:opacity-100 group-hover:rotate-6 transition-all duration-700 ease-[cubic-bezier(0.2,1,0.2,1)] flex flex-col justify-between bg-[#c8a062] text-black p-3 rounded-r-xl border-2 border-[#9c783e] font-mono">
            <!-- Folder Tab Header -->
            <div class="flex items-center justify-between border-b border-[#9c783e] pb-1">
              <span class="text-[8px] font-bold tracking-widest text-[#5c431a]">DOSSIER #8492</span>
              <span class="w-2 h-2 rounded-full bg-red-700"></span>
            </div>

            <!-- Classified Document Content Preview -->
            <div class="my-auto space-y-1.5 text-[8px] leading-tight">
              <div class="inline-block bg-red-700 text-white font-black px-1.5 py-0.5 text-[9px] tracking-widest uppercase transform -rotate-3 border border-red-900">
                TOP SECRET
              </div>
              <div class="text-[#3d2c11] font-bold tracking-tighter uppercase">RESTRICTED // UMBRA</div>
              <div class="w-full h-1 bg-[#9c783e]/40 rounded"></div>
              <div class="w-3/4 h-1 bg-[#9c783e]/30 rounded"></div>
              <div class="w-5/6 h-1 bg-[#9c783e]/30 rounded"></div>
            </div>

            <!-- Folder Footer -->
            <div class="border-t border-[#9c783e] pt-1 text-[7px] text-[#5c431a] flex justify-between uppercase font-bold">
              <span>EYES ONLY</span>
              <span>DEFCON 1</span>
            </div>
          </div>

          <!-- Situation Room Button -->
          <button @click="router.push('/classified/briefing')" class="relative z-10 w-full bg-navy-950/80 border border-white/10 group-hover:border-red-500/50 p-6 transition-all duration-500 overflow-hidden text-left flex flex-col h-full backdrop-blur-md">
            <div class="absolute inset-0 bg-gradient-to-br from-red-500/0 via-transparent to-red-500/5 group-hover:from-red-500/10 transition-colors z-0"></div>
            
            <div class="relative z-10 flex flex-col h-full">
              <div class="font-mono text-[10px] tracking-[0.2em] text-white/40 mb-3">DEPT 05</div>
              <h2 class="text-xl font-display text-white tracking-wider mb-2 group-hover:text-red-400 transition-colors">SITUATION ROOM</h2>
              <p class="text-xs text-white/50 tracking-wider mb-6 leading-relaxed">
                Real operation briefings & DEFCON 5→1 Alert System Controller with tactical sirens.
              </p>
              
              <div class="mt-auto flex items-center justify-between font-mono text-[10px] text-red-400 uppercase tracking-widest font-bold">
                <span>Access Briefings</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="transform group-hover:translate-x-2 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </div>
            </div>
          </button>
        </div>

      </div>

      <!-- Return Button (shifts down on Ground Ops, shifts UP in sync on Comparator hover) -->
      <div 
        :class="[
          'transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]',
          activeHover === 'ground-ops' ? 'translate-y-52 md:translate-y-56' : activeHover === 'comparator' ? '-translate-y-20 md:-translate-y-24' : 'translate-y-0'
        ]"
      >
        <button @click="router.push('/')" class="mt-16 text-[10px] font-mono tracking-[0.3em] text-white/30 hover:text-white transition-colors uppercase">
          [ Return to Main Database ]
        </button>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const activeHover = ref<'none' | 'submarines' | 'ground-ops' | 'sat-recon' | 'comparator' | 'situation-room'>('none')
</script>

<style scoped>
@keyframes scan {
  0% { transform: translateY(-100vh); }
  100% { transform: translateY(100vh); }
}
.animate-scan {
  animation: scan 8s linear infinite;
}
</style>
