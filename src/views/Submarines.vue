<template>
  <div class="min-h-screen bg-[#050a12] text-gray-200 relative selection:bg-accent-cyan/30 selection:text-white pb-20">
    <!-- Background Tactical Grid Effect -->
    <div class="fixed inset-0 bg-[radial-gradient(#162a42_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none"></div>
    <div class="fixed top-0 left-0 right-0 h-96 bg-gradient-to-b from-navy-900/60 via-navy-950/40 to-transparent pointer-events-none"></div>

    <!-- Header Navigation -->
    <header class="relative z-10 border-b border-white/10 bg-[#050a12]/80 backdrop-blur-md sticky top-0">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-2">
        <div class="flex items-center gap-4">
          <button 
            @click="router.push('/classified')" 
            class="flex items-center gap-2 text-xs font-mono tracking-wider text-gray-400 hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded border border-white/10"
          >
            <ArrowLeft class="w-4 h-4 text-accent-cyan" />
            <span class="hidden sm:inline">{{ t.backToOps }}</span>
          </button>
          
          <div class="h-4 w-px bg-white/10 hidden sm:block"></div>
          
          <div class="flex items-center gap-2">
            <span class="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span class="font-mono text-[11px] tracking-[0.2em] text-accent-cyan uppercase font-semibold">
              {{ t.deptTitle }}
            </span>
          </div>
        </div>

        <div class="flex items-center gap-3 font-mono text-xs">
          <!-- LANGUAGE SWITCHER (EN / PT) -->
          <div class="flex items-center bg-black/50 p-1 rounded-lg border border-accent-cyan/30 text-xs">
            <Globe class="w-3.5 h-3.5 text-accent-cyan ml-1.5 mr-1" />
            <button
              @click="currentLang = 'en'"
              :class="[
                'px-2 py-0.5 rounded text-[11px] font-bold transition-all',
                currentLang === 'en' 
                  ? 'bg-accent-cyan text-black shadow-sm' 
                  : 'text-gray-400 hover:text-white'
              ]"
            >
              EN
            </button>
            <button
              @click="currentLang = 'pt'"
              :class="[
                'px-2 py-0.5 rounded text-[11px] font-bold transition-all',
                currentLang === 'pt' 
                  ? 'bg-accent-cyan text-black shadow-sm' 
                  : 'text-gray-400 hover:text-white'
              ]"
            >
              PT
            </button>
          </div>

          <div class="hidden md:flex items-center gap-2 bg-navy-900/80 px-3 py-1.5 rounded border border-accent-cyan/20">
            <Radio class="w-3.5 h-3.5 text-accent-cyan animate-pulse" />
            <span class="text-white/60">{{ t.sonarNetwork }}</span>
            <span class="text-emerald-400 font-bold">{{ t.onlineStatus }}</span>
          </div>
          <div class="text-white/40 text-[10px] uppercase tracking-widest hidden lg:block">
            {{ t.accessLevel }} <span class="text-amber-400 font-bold">{{ t.topSecret }}</span>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content Container -->
    <main class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
      
      <!-- HERO / BANNER -->
      <div class="mb-10 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
        <div>
          <div class="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan font-mono text-[10px] tracking-widest uppercase mb-3">
            <Shield class="w-3.5 h-3.5" />
            {{ t.heroBadge }}
          </div>
          <h1 class="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white uppercase tracking-wider">
            {{ t.heroTitle }}
          </h1>
          <p class="mt-2 text-gray-400 text-sm max-w-2xl font-mono">
            {{ t.heroSubtitle }}
          </p>
        </div>

        <!-- STATS BADGE OVERVIEW -->
        <div class="flex items-center justify-center md:justify-end gap-3 font-mono">
          <div class="bg-navy-900/90 border border-white/10 rounded-lg p-3 text-center min-w-[110px]">
            <div class="text-[10px] text-gray-400 uppercase tracking-widest">{{ t.nationsCount }}</div>
            <div class="text-2xl font-bold text-white mt-0.5">{{ SUBMARINE_DOSSIERS.length }}</div>
          </div>
          <div class="bg-navy-900/90 border border-accent-cyan/30 rounded-lg p-3 text-center min-w-[120px] bg-accent-cyan/5">
            <div class="text-[10px] text-accent-cyan uppercase tracking-widest">{{ t.globalFleet }}</div>
            <div class="text-2xl font-bold text-emerald-400 mt-0.5">~{{ totalSubmarinesCount }}+</div>
          </div>
        </div>
      </div>

      <!-- VIEW MODE 1: NATION SELECTION GRID (Default view when no country selected) -->
      <div v-if="!selectedCountry" class="space-y-8">
        
        <!-- SEARCH AND FILTERS -->
        <div class="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 bg-navy-900/60 p-4 rounded-xl border border-white/10 backdrop-blur-sm">
          <div class="relative flex-1">
            <Search class="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input 
              v-model="searchQuery" 
              type="text" 
              :placeholder="t.searchPlaceholder"
              class="w-full bg-black/40 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-xs font-mono text-white placeholder-gray-500 focus:outline-none focus:border-accent-cyan/60 transition-colors"
            />
            <button 
              v-if="searchQuery" 
              @click="searchQuery = ''" 
              class="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-white"
            >
              ✕
            </button>
          </div>

          <div class="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 font-mono text-xs">
            <button 
              @click="filterTag = 'all'"
              :class="[
                'px-3 py-1.5 rounded-lg border text-xs whitespace-nowrap transition-colors',
                filterTag === 'all' 
                  ? 'bg-accent-cyan/20 border-accent-cyan text-accent-cyan font-bold' 
                  : 'bg-black/30 border-white/10 text-gray-400 hover:text-white'
              ]"
            >
              {{ t.allPowers }}
            </button>
            <button 
              @click="filterTag = 'nuclear'"
              :class="[
                'px-3 py-1.5 rounded-lg border text-xs whitespace-nowrap transition-colors',
                filterTag === 'nuclear' 
                  ? 'bg-amber-500/20 border-amber-500 text-amber-400 font-bold' 
                  : 'bg-black/30 border-white/10 text-gray-400 hover:text-white'
              ]"
            >
              {{ t.nuclearTriad }}
            </button>
            <button 
              @click="filterTag = 'aip'"
              :class="[
                'px-3 py-1.5 rounded-lg border text-xs whitespace-nowrap transition-colors',
                filterTag === 'aip' 
                  ? 'bg-emerald-500/20 border-emerald-500 text-emerald-400 font-bold' 
                  : 'bg-black/30 border-white/10 text-gray-400 hover:text-white'
              ]"
            >
              {{ t.stealthAip }}
            </button>
          </div>
        </div>

        <!-- COUNTRIES CARDS GRID -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div 
            v-for="country in filteredCountries" 
            :key="country.id"
            @click="openDossier(country)"
            class="group relative bg-gradient-to-b from-navy-900/90 to-[#0a1120] border border-white/10 hover:border-accent-cyan/60 rounded-xl p-6 transition-all duration-300 hover:shadow-[0_0_25px_rgba(94,175,197,0.15)] cursor-pointer flex flex-col justify-between overflow-hidden"
          >
            <!-- Top Corner Tactical Accent -->
            <div class="absolute top-0 right-0 w-16 h-16 pointer-events-none overflow-hidden">
              <div class="absolute transform rotate-45 bg-accent-cyan/10 text-[8px] font-mono text-accent-cyan text-center py-1 right-[-35px] top-[18px] w-[120px] border-b border-accent-cyan/30">
                {{ t.dossierTag }}
              </div>
            </div>

            <div>
              <!-- Header with Flag code & Country Name -->
              <div class="flex items-start justify-between gap-3 mb-4">
                <div>
                  <div class="flex items-center gap-2 mb-1">
                    <span class="px-2 py-0.5 bg-white/10 rounded font-mono text-[10px] text-gray-300 font-bold">
                      {{ country.flagCode }}
                    </span>
                    <span v-if="country.nuclearCapability" class="px-1.5 py-0.5 bg-amber-500/20 text-amber-400 border border-amber-500/40 rounded font-mono text-[9px]">
                      NUCLEAR
                    </span>
                    <span class="px-1.5 py-0.5 bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 rounded font-mono text-[9px]">
                      {{ getText(country.stealthLevel, currentLang) }}
                    </span>
                  </div>
                  <h2 class="text-2xl font-display font-bold text-white group-hover:text-accent-cyan transition-colors">
                    {{ getText(country.name, currentLang) }}
                  </h2>
                  <p class="text-xs font-mono text-gray-400 mt-0.5">
                    {{ getText(country.navalBranch, currentLang) }}
                  </p>
                </div>
              </div>

              <!-- Motto -->
              <div class="mb-5 p-2.5 rounded bg-black/40 border border-white/5 font-mono text-xs text-amber-300/80 italic">
                "{{ getText(country.motto, currentLang) }}"
              </div>

              <!-- Key Metrics -->
              <div class="grid grid-cols-3 gap-2 py-3 border-y border-white/10 font-mono text-center text-xs mb-4">
                <div>
                  <div class="text-[10px] text-gray-500 uppercase">{{ t.activeSubmarines }}</div>
                  <div class="text-base font-bold text-white mt-0.5">~{{ country.activeSubmarineEstimate }}</div>
                </div>
                <div>
                  <div class="text-[10px] text-gray-500 uppercase">{{ t.classesCount }}</div>
                  <div class="text-base font-bold text-accent-cyan mt-0.5">{{ country.classes.length }}</div>
                </div>
                <div>
                  <div class="text-[10px] text-gray-500 uppercase">{{ t.basesCount }}</div>
                  <div class="text-base font-bold text-emerald-400 mt-0.5">{{ country.bases.length }}</div>
                </div>
              </div>

              <!-- Overview Snippet -->
              <p class="text-xs text-gray-400 line-clamp-3 leading-relaxed mb-6 font-sans">
                {{ getText(country.overview, currentLang) }}
              </p>
            </div>

            <!-- Action Button -->
            <div class="pt-2 flex items-center justify-between border-t border-white/5">
              <span class="text-[11px] font-mono text-gray-400 group-hover:text-white transition-colors">
                {{ t.accessDossier }}
              </span>
              <div class="w-8 h-8 rounded-lg bg-white/5 group-hover:bg-accent-cyan group-hover:text-black transition-all duration-300 flex items-center justify-center text-accent-cyan">
                <ChevronRight class="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>

        <div v-if="filteredCountries.length === 0" class="text-center py-16 bg-navy-900/30 rounded-xl border border-white/10">
          <AlertTriangle class="w-8 h-8 text-amber-400 mx-auto mb-3" />
          <p class="font-mono text-sm text-gray-400">{{ t.noResults }}</p>
          <button @click="searchQuery = ''; filterTag = 'all'" class="mt-4 text-xs font-mono text-accent-cyan underline">
            {{ t.clearFilters }}
          </button>
        </div>
      </div>

      <!-- VIEW MODE 2: OPEN DOSSIER VIEW (When a country is selected) -->
      <div v-else class="space-y-8 animate-fadeIn">
        
        <!-- TOP NAVIGATION BAR INSIDE DOSSIER -->
        <div class="flex flex-wrap items-center justify-between gap-4 bg-navy-900/90 p-4 rounded-xl border border-accent-cyan/30 backdrop-blur-md">
          <button 
            @click="closeDossier" 
            class="flex items-center gap-2 text-xs font-mono text-accent-cyan hover:text-white transition-colors bg-accent-cyan/10 hover:bg-accent-cyan/20 border border-accent-cyan/40 px-4 py-2 rounded-lg"
          >
            <ArrowLeft class="w-4 h-4" />
            <span>{{ t.backToList }}</span>
          </button>

          <!-- Quick Switcher to Other Countries -->
          <div class="flex items-center gap-1.5 overflow-x-auto py-1">
            <span class="text-[10px] font-mono text-gray-500 uppercase mr-1 hidden md:inline">{{ t.switchCountry }}</span>
            <button 
              v-for="c in SUBMARINE_DOSSIERS" 
              :key="c.id"
              @click="openDossier(c)"
              :class="[
                'px-2.5 py-1 rounded text-xs font-mono transition-colors whitespace-nowrap',
                selectedCountry.id === c.id 
                  ? 'bg-accent-cyan text-black font-bold' 
                  : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
              ]"
            >
              {{ c.flagCode }}
            </button>
          </div>
        </div>

        <!-- DOSSIER BANNER / HEADER -->
        <div class="relative bg-gradient-to-r from-navy-900 via-[#0a1424] to-navy-900 border border-white/10 rounded-2xl p-6 sm:p-8 overflow-hidden">
          <div class="absolute -right-10 -bottom-10 opacity-5 pointer-events-none font-mono font-black text-9xl text-white">
            {{ selectedCountry.flagCode }}
          </div>

          <div class="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <div class="flex flex-wrap items-center gap-2 mb-3 font-mono text-xs">
                <span class="px-2.5 py-1 bg-amber-500/20 text-amber-400 border border-amber-500/40 rounded text-[10px] font-bold">
                  CLASSIFIED: TOP SECRET
                </span>
                <span class="px-2.5 py-1 bg-white/10 text-gray-300 rounded text-[10px]">
                  {{ t.codeLabel }} {{ selectedCountry.flagCode }}-SUB-FORCE
                </span>
                <span v-if="selectedCountry.nuclearCapability" class="px-2.5 py-1 bg-red-500/20 text-red-400 border border-red-500/30 rounded text-[10px]">
                  {{ t.nuclearPower }}
                </span>
              </div>

              <h1 class="text-3xl sm:text-5xl font-display font-extrabold text-white">
                {{ getText(selectedCountry.name, currentLang) }}
              </h1>
              <p class="text-sm font-mono text-accent-cyan mt-1">
                {{ getText(selectedCountry.navalBranch, currentLang) }}
              </p>
              <p class="text-xs font-mono text-amber-300/90 italic mt-2">
                "{{ getText(selectedCountry.motto, currentLang) }}"
              </p>
            </div>

            <!-- Quick Specs Box -->
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 font-mono bg-black/50 p-4 rounded-xl border border-white/10 text-xs min-w-[300px]">
              <div>
                <span class="text-[10px] text-gray-500 block uppercase">{{ t.activeSubmarines }}</span>
                <span class="text-xl font-bold text-white">~{{ selectedCountry.activeSubmarineEstimate }}</span>
              </div>
              <div>
                <span class="text-[10px] text-gray-500 block uppercase">{{ t.stealthLevel }}</span>
                <span class="text-sm font-bold text-emerald-400 mt-1 block">{{ getText(selectedCountry.stealthLevel, currentLang) }}</span>
              </div>
              <div class="col-span-2 sm:col-span-3">
                <span class="text-[10px] text-gray-500 block uppercase">{{ t.primaryCommand }}</span>
                <span class="text-xs font-semibold text-gray-300 mt-1 block leading-snug">
                  {{ getText(selectedCountry.primaryFleetCommand, currentLang) }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- DOSSIER TABS -->
        <div class="border-b border-white/10 flex items-center gap-2 sm:gap-6 overflow-x-auto font-mono text-xs sm:text-sm">
          <button 
            @click="activeTab = 'overview'"
            :class="[
              'py-3 px-3 sm:px-4 border-b-2 font-semibold transition-colors whitespace-nowrap flex items-center gap-2',
              activeTab === 'overview' 
                ? 'border-accent-cyan text-accent-cyan' 
                : 'border-transparent text-gray-400 hover:text-gray-200'
            ]"
          >
            <Info class="w-4 h-4" />
            <span>{{ t.tabOverview }}</span>
          </button>

          <button 
            @click="activeTab = 'classes'"
            :class="[
              'py-3 px-3 sm:px-4 border-b-2 font-semibold transition-colors whitespace-nowrap flex items-center gap-2',
              activeTab === 'classes' 
                ? 'border-accent-cyan text-accent-cyan' 
                : 'border-transparent text-gray-400 hover:text-gray-200'
            ]"
          >
            <Anchor class="w-4 h-4" />
            <span>{{ t.tabClasses }} ({{ selectedCountry.classes.length }})</span>
          </button>

          <button 
            @click="activeTab = 'missions'"
            :class="[
              'py-3 px-3 sm:px-4 border-b-2 font-semibold transition-colors whitespace-nowrap flex items-center gap-2',
              activeTab === 'missions' 
                ? 'border-accent-cyan text-accent-cyan' 
                : 'border-transparent text-gray-400 hover:text-gray-200'
            ]"
          >
            <Crosshair class="w-4 h-4" />
            <span>{{ t.tabMissions }} ({{ selectedCountry.missions.length }})</span>
          </button>

          <button 
            @click="activeTab = 'bases'"
            :class="[
              'py-3 px-3 sm:px-4 border-b-2 font-semibold transition-colors whitespace-nowrap flex items-center gap-2',
              activeTab === 'bases' 
                ? 'border-accent-cyan text-accent-cyan' 
                : 'border-transparent text-gray-400 hover:text-gray-200'
            ]"
          >
            <MapPin class="w-4 h-4" />
            <span>{{ t.tabBases }} ({{ selectedCountry.bases.length }})</span>
          </button>
        </div>

        <!-- TAB CONTENT 1: VISÃO GERAL -->
        <div v-if="activeTab === 'overview'" class="space-y-6">
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div class="lg:col-span-2 bg-navy-900/70 border border-white/10 rounded-xl p-6 space-y-4">
              <h3 class="text-lg font-display font-bold text-white flex items-center gap-2 border-b border-white/10 pb-3">
                <Shield class="w-5 h-5 text-accent-cyan" />
                {{ t.doctrineTitle }}
              </h3>
              <p class="text-gray-300 text-sm leading-relaxed font-sans">
                {{ getText(selectedCountry.overview, currentLang) }}
              </p>
              
              <div class="mt-6 pt-4 border-t border-white/10">
                <span class="text-xs font-mono text-accent-cyan uppercase tracking-widest font-bold block mb-1">
                  {{ t.doctrinalFocusLabel }}
                </span>
                <p class="text-sm font-mono text-white bg-black/40 p-3 rounded border border-white/5">
                  {{ getText(selectedCountry.doctrinalFocus, currentLang) }}
                </p>
              </div>
            </div>

            <!-- Side Stats Summary -->
            <div class="bg-navy-900/70 border border-white/10 rounded-xl p-6 space-y-4 font-mono text-xs">
              <h3 class="text-base font-display font-bold text-white border-b border-white/10 pb-3">
                {{ t.fleetSummaryTitle }}
              </h3>
              
              <div class="space-y-3">
                <div class="flex justify-between py-1.5 border-b border-white/5">
                  <span class="text-gray-400">{{ t.totalSubmarines }}</span>
                  <span class="text-white font-bold">~{{ selectedCountry.activeSubmarineEstimate }} {{ t.units }}</span>
                </div>
                <div class="py-1.5 border-b border-white/5 space-y-1">
                  <div class="text-gray-400">{{ t.tacticalCommand }}</div>
                  <div class="text-accent-cyan font-bold leading-normal break-words">
                    {{ getText(selectedCountry.primaryFleetCommand, currentLang) }}
                  </div>
                </div>
                <div class="flex justify-between py-1.5 border-b border-white/5">
                  <span class="text-gray-400">{{ t.nuclearCapability }}</span>
                  <span :class="selectedCountry.nuclearCapability ? 'text-amber-400 font-bold' : 'text-gray-400'">
                    {{ selectedCountry.nuclearCapability ? t.yesNuclear : t.noNuclear }}
                  </span>
                </div>
                <div class="flex justify-between py-1.5 border-b border-white/5">
                  <span class="text-gray-400">{{ t.stealthRating }}</span>
                  <span class="text-emerald-400 font-bold">{{ getText(selectedCountry.stealthLevel, currentLang) }}</span>
                </div>
                <div class="flex justify-between py-1.5">
                  <span class="text-gray-400">{{ t.operationalBases }}</span>
                  <span class="text-white font-bold">{{ selectedCountry.bases.length }} {{ t.installations }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- TAB CONTENT 2: CLASSES DE SUBMARINOS -->
        <div v-if="activeTab === 'classes'" class="space-y-6">
          
          <!-- Submarine Type Filter -->
          <div class="flex items-center gap-2 overflow-x-auto pb-2 font-mono text-xs">
            <span class="text-gray-500 uppercase mr-2">{{ t.filterByType }}</span>
            <button 
              @click="classTypeFilter = 'ALL'"
              :class="['px-3 py-1 rounded-lg border transition-colors', classTypeFilter === 'ALL' ? 'bg-accent-cyan text-black font-bold border-accent-cyan' : 'bg-black/40 text-gray-400 border-white/10 hover:text-white']"
            >
              {{ t.allClasses }} ({{ selectedCountry.classes.length }})
            </button>
            <button 
              @click="classTypeFilter = 'SSBN'"
              :class="['px-3 py-1 rounded-lg border transition-colors', classTypeFilter === 'SSBN' ? 'bg-amber-500 text-black font-bold border-amber-500' : 'bg-black/40 text-gray-400 border-white/10 hover:text-white']"
            >
              {{ t.ssbnFilter }}
            </button>
            <button 
              @click="classTypeFilter = 'SSN'"
              :class="['px-3 py-1 rounded-lg border transition-colors', classTypeFilter === 'SSN' ? 'bg-cyan-500 text-black font-bold border-cyan-500' : 'bg-black/40 text-gray-400 border-white/10 hover:text-white']"
            >
              {{ t.ssnFilter }}
            </button>
            <button 
              @click="classTypeFilter = 'CONVENTIONAL'"
              :class="['px-3 py-1 rounded-lg border transition-colors', classTypeFilter === 'CONVENTIONAL' ? 'bg-emerald-500 text-black font-bold border-emerald-500' : 'bg-black/40 text-gray-400 border-white/10 hover:text-white']"
            >
              {{ t.conventionalFilter }}
            </button>
          </div>

          <!-- Classes Cards List -->
          <div class="space-y-8">
            <div 
              v-for="subClass in filteredClasses" 
              :key="subClass.id"
              class="bg-navy-900/80 border border-white/10 hover:border-white/20 rounded-xl p-6 sm:p-8 space-y-6 relative overflow-hidden"
            >
              <!-- Class Header Badge & Name -->
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
                <div>
                  <div class="flex flex-wrap items-center gap-2 mb-1 font-mono text-xs">
                    <span class="px-2.5 py-0.5 rounded bg-accent-cyan/20 text-accent-cyan font-bold border border-accent-cyan/30">
                      {{ subClass.code }}
                    </span>
                    <span 
                      :class="[
                        'px-2 py-0.5 rounded text-[10px] font-bold border',
                        subClass.type === 'SSBN' ? 'bg-amber-500/20 text-amber-400 border-amber-500/30' :
                        subClass.type === 'SSN' || subClass.type === 'SSGN' ? 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30' :
                        'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
                      ]"
                    >
                      {{ getText(subClass.typeLabel, currentLang) }}
                    </span>
                    <span class="px-2 py-0.5 bg-white/10 text-gray-300 rounded text-[10px] font-mono">
                      {{ t.statusLabel }} {{ getText(subClass.status, currentLang) }}
                    </span>
                  </div>
                  <h3 class="text-2xl font-display font-bold text-white">
                    {{ getText(subClass.name, currentLang) }}
                  </h3>
                  <p class="text-xs font-mono text-amber-300/80 mt-1">
                    {{ getText(subClass.tacticalRole, currentLang) }}
                  </p>
                </div>
              </div>

              <!-- Technical Specifications Grid -->
              <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-black/40 p-4 rounded-lg border border-white/5 font-mono text-xs">
                <div>
                  <span class="text-[10px] text-gray-500 uppercase block">{{ t.displacement }}</span>
                  <span class="text-white font-semibold block mt-0.5">{{ getText(subClass.displacement, currentLang) }}</span>
                </div>
                <div>
                  <span class="text-[10px] text-gray-500 uppercase block">{{ t.dimensions }}</span>
                  <span class="text-white font-semibold block mt-0.5">{{ getText(subClass.length, currentLang) }} x {{ getText(subClass.beam, currentLang) }}</span>
                </div>
                <div>
                  <span class="text-[10px] text-gray-500 uppercase block">{{ t.submergedSpeed }}</span>
                  <span class="text-emerald-400 font-semibold block mt-0.5">{{ getText(subClass.speed, currentLang) }}</span>
                </div>
                <div>
                  <span class="text-[10px] text-gray-500 uppercase block">{{ t.maxDepth }}</span>
                  <span class="text-accent-cyan font-semibold block mt-0.5">{{ getText(subClass.maxDepth, currentLang) }}</span>
                </div>
                <div>
                  <span class="text-[10px] text-gray-500 uppercase block">{{ t.propulsion }}</span>
                  <span class="text-gray-300 font-semibold block mt-0.5 truncate" :title="getText(subClass.propulsion, currentLang)">
                    {{ getText(subClass.propulsion, currentLang) }}
                  </span>
                </div>
                <div>
                  <span class="text-[10px] text-gray-500 uppercase block">{{ t.crew }}</span>
                  <span class="text-gray-300 font-semibold block mt-0.5">{{ getText(subClass.crew, currentLang) }}</span>
                </div>
                <div class="col-span-2">
                  <span class="text-[10px] text-gray-500 uppercase block">{{ t.endurance }}</span>
                  <span class="text-gray-300 font-semibold block mt-0.5">{{ getText(subClass.endurance, currentLang) }}</span>
                </div>
              </div>

              <!-- Description -->
              <p class="text-sm text-gray-300 leading-relaxed font-sans">
                {{ getText(subClass.description, currentLang) }}
              </p>

              <!-- Armament & Notable Ships -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/10 font-mono text-xs">
                <!-- Armament List -->
                <div>
                  <span class="text-xs font-bold text-accent-cyan uppercase tracking-wider block mb-2 flex items-center gap-1.5">
                    <Crosshair class="w-4 h-4" />
                    {{ t.armament }}
                  </span>
                  <ul class="space-y-1.5 text-gray-300">
                    <li v-for="(arm, i) in getList(subClass.armament, currentLang)" :key="i" class="flex items-start gap-2">
                      <span class="text-accent-cyan">▸</span>
                      <span>{{ arm }}</span>
                    </li>
                  </ul>
                </div>

                <!-- Notable Vessels -->
                <div>
                  <span class="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-2 flex items-center gap-1.5">
                    <Anchor class="w-4 h-4" />
                    {{ t.notableUnits }}
                  </span>
                  <div class="flex flex-wrap gap-1.5">
                    <span 
                      v-for="(ship, i) in subClass.notableUnits" 
                      :key="i"
                      class="px-2.5 py-1 bg-white/5 border border-white/10 rounded text-gray-200 text-xs"
                    >
                      {{ ship }}
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <!-- TAB CONTENT 3: MISSÕES & OPERAÇÕES -->
        <div v-if="activeTab === 'missions'" class="space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div 
              v-for="mission in selectedCountry.missions" 
              :key="mission.id"
              class="bg-navy-900/80 border border-white/10 rounded-xl p-6 space-y-4 flex flex-col justify-between"
            >
              <div>
                <div class="flex items-center justify-between gap-2 font-mono text-xs mb-2">
                  <span class="px-2 py-0.5 bg-amber-500/20 text-amber-400 border border-amber-500/30 rounded font-bold">
                    {{ mission.codeName }}
                  </span>
                  <span class="text-gray-400">{{ t.period }} {{ mission.period }}</span>
                </div>

                <h3 class="text-xl font-display font-bold text-white mt-1">
                  {{ getText(mission.name, currentLang) }}
                </h3>
                <div class="text-xs font-mono text-accent-cyan mt-0.5">
                  {{ t.theater }} {{ getText(mission.theater, currentLang) }}
                </div>

                <p class="text-sm text-gray-300 mt-4 leading-relaxed font-sans">
                  {{ getText(mission.description, currentLang) }}
                </p>
              </div>

              <div class="pt-4 border-t border-white/10 font-mono text-xs bg-black/30 p-3 rounded">
                <span class="text-emerald-400 font-bold block mb-1">{{ t.keyObjective }}</span>
                <span class="text-gray-300 leading-normal">{{ getText(mission.keyObjective, currentLang) }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- TAB CONTENT 4: BASES NAVAIS -->
        <div v-if="activeTab === 'bases'" class="space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div 
              v-for="base in selectedCountry.bases" 
              :key="base.id"
              class="bg-navy-900/80 border border-white/10 hover:border-accent-cyan/40 rounded-xl p-6 space-y-4"
            >
              <div class="flex items-start justify-between gap-3 border-b border-white/10 pb-3">
                <div>
                  <span class="text-[10px] font-mono text-emerald-400 uppercase tracking-widest block mb-0.5">
                    {{ t.statusLabel }} {{ getText(base.status, currentLang) }}
                  </span>
                  <h3 class="text-xl font-display font-bold text-white">
                    {{ getText(base.name, currentLang) }}
                  </h3>
                  <div v-if="base.nativeName" class="text-xs font-mono text-amber-300/80">
                    {{ base.nativeName }}
                  </div>
                </div>
                <div class="px-2 py-1 bg-white/5 border border-white/10 rounded font-mono text-[10px] text-gray-400 text-right">
                  {{ base.coordinates }}
                </div>
              </div>

              <div class="font-mono text-xs space-y-1.5 text-gray-300">
                <div><span class="text-gray-500">{{ t.location }}</span> {{ getText(base.location, currentLang) }}</div>
                <div><span class="text-gray-500">{{ t.commandFleet }}</span> <span class="text-accent-cyan">{{ getText(base.fleet, currentLang) }}</span></div>
              </div>

              <p class="text-sm text-gray-300 font-sans leading-relaxed">
                {{ getText(base.description, currentLang) }}
              </p>

              <div class="pt-3 border-t border-white/10 font-mono text-xs">
                <span class="text-gray-500 block mb-1">{{ t.homeportedClasses }}</span>
                <div class="flex flex-wrap gap-1.5">
                  <span 
                    v-for="(cls, i) in getList(base.homeportedClasses, currentLang)" 
                    :key="i"
                    class="px-2 py-0.5 bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan rounded text-[11px]"
                  >
                    {{ cls }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { 
  Shield, 
  Anchor, 
  Radio, 
  Search, 
  Crosshair, 
  ChevronRight, 
  ArrowLeft, 
  MapPin, 
  Info, 
  AlertTriangle,
  Globe
} from 'lucide-vue-next'

import { SUBMARINE_DOSSIERS, getText, getList, type CountryDossier } from '../data/submarinesData'
import { TRANSLATIONS, type Language } from '../data/submarinesTranslations'

const router = useRouter()

// Reactive States
const currentLang = ref<Language>('en') // Default language is English as requested
const searchQuery = ref('')
const filterTag = ref<'all' | 'nuclear' | 'aip'>('all')
const selectedCountry = ref<CountryDossier | null>(null)
const activeTab = ref<'overview' | 'classes' | 'missions' | 'bases'>('overview')
const classTypeFilter = ref<'ALL' | 'SSBN' | 'SSN' | 'CONVENTIONAL'>('ALL')

// Translation helper
const t = computed(() => TRANSLATIONS[currentLang.value])

// Total submarines count across defined dossiers
const totalSubmarinesCount = computed(() => {
  return SUBMARINE_DOSSIERS.reduce((acc, c) => acc + c.activeSubmarineEstimate, 0)
})

// Filtered countries based on search and tags
const filteredCountries = computed(() => {
  return SUBMARINE_DOSSIERS.filter(country => {
    // Tag filter
    if (filterTag.value === 'nuclear' && !country.nuclearCapability) return false
    if (filterTag.value === 'aip' && country.nuclearCapability) return false

    // Search query
    if (!searchQuery.value.trim()) return true

    const query = searchQuery.value.toLowerCase()
    const countryName = getText(country.name, currentLang.value).toLowerCase()
    const countryNavalBranch = getText(country.navalBranch, currentLang.value).toLowerCase()
    
    const matchesCountry = countryName.includes(query) || 
                           country.englishName.toLowerCase().includes(query) ||
                           countryNavalBranch.includes(query) ||
                           country.flagCode.toLowerCase().includes(query)
    
    const matchesClass = country.classes.some(c => {
      const className = getText(c.name, currentLang.value).toLowerCase()
      const classCode = c.code.toLowerCase()
      const arms = getList(c.armament, currentLang.value)
      return className.includes(query) || classCode.includes(query) || arms.some(a => a.toLowerCase().includes(query))
    })

    const matchesBase = country.bases.some(b => {
      const baseName = getText(b.name, currentLang.value).toLowerCase()
      const baseLoc = getText(b.location, currentLang.value).toLowerCase()
      return baseName.includes(query) || baseLoc.includes(query)
    })

    return matchesCountry || matchesClass || matchesBase
  })
})

// Filtered classes inside active dossier
const filteredClasses = computed(() => {
  if (!selectedCountry.value) return []
  if (classTypeFilter.value === 'ALL') return selectedCountry.value.classes
  
  if (classTypeFilter.value === 'SSBN') {
    return selectedCountry.value.classes.filter(c => c.type === 'SSBN')
  }
  if (classTypeFilter.value === 'SSN') {
    return selectedCountry.value.classes.filter(c => c.type === 'SSN' || c.type === 'SSGN')
  }
  if (classTypeFilter.value === 'CONVENTIONAL') {
    return selectedCountry.value.classes.filter(c => c.type === 'SSK' || c.type === 'AIP')
  }
  
  return selectedCountry.value.classes
})

// Actions
const openDossier = (country: CountryDossier) => {
  selectedCountry.value = country
  activeTab.value = 'overview'
  classTypeFilter.value = 'ALL'
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const closeDossier = () => {
  selectedCountry.value = null
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<style scoped>
.animate-fadeIn {
  animation: fadeIn 0.35s ease-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
