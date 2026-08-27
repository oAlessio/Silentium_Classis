<template>
  <div class="min-h-screen bg-navy-950 text-gray-300 overflow-x-hidden relative">
    <!-- Global 3D Background -->
    <ThreeBackground />
    
    <!-- Film Grain -->
    <div class="film-grain"></div>

    <!-- ============================================
         NAVIGATION
         ============================================ -->
    <nav class="fixed top-0 left-0 w-full z-50 transition-all duration-700 nav-bar">
      <div class="max-w-7xl mx-auto px-6 md:px-12 py-5 flex justify-between items-center">
        <!-- Logo -->
        <div class="flex items-center gap-3">
          <img src="/logo.png" alt="Silentium Classis" class="w-8 h-8 object-contain invert brightness-200 opacity-90" />
          <span class="font-mono text-[11px] tracking-[0.3em] text-white/80 uppercase hidden sm:block">Silentium Classis</span>
        </div>

        <!-- Nav Links -->
        <div class="hidden md:flex items-center gap-10">
          <a href="#about" class="text-[11px] tracking-[0.15em] uppercase text-white/50 hover:text-white transition-colors duration-300">{{ t.nav.about }}</a>
          <a href="#fleet" class="text-[11px] tracking-[0.15em] uppercase text-white/50 hover:text-white transition-colors duration-300">{{ t.nav.fleet }}</a>
          <a href="#operations" class="text-[11px] tracking-[0.15em] uppercase text-white/50 hover:text-white transition-colors duration-300">{{ t.nav.ops }}</a>
          <div class="w-px h-4 bg-white/15"></div>
          <span class="font-mono text-[9px] tracking-[0.2em] text-white/30">CVN-78</span>
        </div>

        <!-- Mobile Menu -->
        <button class="md:hidden text-white/60">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="7" y2="7"/><line x1="4" x2="20" y1="17" y2="17"/></svg>
        </button>
      </div>
    </nav>

    <!-- ============================================
         FIXED SOUND CONTROL & TRANSLATION HUD
         ============================================ -->
    <div 
      class="fixed top-0 right-0 z-[60] flex items-center bg-transparent transition-all duration-300"
    >
      <!-- Translation Toggle -->
      <button
        @click="lang = lang === 'EN' ? 'PT' : 'EN'"
        class="relative h-14 px-4 flex items-center justify-center hover:bg-white/10 transition-colors font-mono text-[10px] tracking-wider text-white/50 hover:text-white"
        title="Change Language"
      >
        <span class="opacity-40 pr-1">{{ lang === 'EN' ? 'EN' : 'PT' }}</span>
        <span class="opacity-100">/ {{ lang === 'EN' ? 'PT' : 'EN' }}</span>
      </button>

      <div class="w-px h-5 bg-white/20"></div>

      <!-- Volume Controls Zone -->
      <div 
        class="flex items-center"
        @mouseenter="showVolumeSlider = true" 
        @mouseleave="handleMouseLeave"
      >
        <!-- Volume Slider (slides out to the left) -->
        <div
          class="flex items-center overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"
          :class="showVolumeSlider ? 'w-48 px-5 opacity-100' : 'w-0 opacity-0'"
        >
          <input
            type="range"
            min="0"
            max="100"
            :value="volume"
            @input="onVolumeChange"
            class="volume-slider w-full h-2 appearance-none cursor-pointer bg-white/20 rounded-full accent-white"
          />
        </div>

        <!-- Volume Button -->
        <button
          @click="toggleAudio"
          class="relative w-14 h-14 flex items-center justify-center hover:bg-white/10 transition-colors group/vol"
          :title="audioActive ? 'Mute ambient sound' : 'Play ambient sound'"
        >
          <!-- Volume On Icon -->
          <svg v-if="audioActive && volume > 50" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-white/80 group-hover/vol:text-white transition-colors"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
          <!-- Volume Low Icon -->
          <svg v-else-if="audioActive && volume > 0" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-white/80 group-hover/vol:text-white transition-colors"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
          <!-- Volume Muted Icon -->
          <svg v-else xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-white/40 group-hover/vol:text-white/70 transition-colors"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>
        </button>
      </div>
    </div>

    <!-- ============================================
         HERO SECTION
         ============================================ -->
    <section class="relative w-full h-screen overflow-hidden">
      <!-- Background Image -->
      <div class="absolute inset-0 z-0">
        <img
          src="/hero-sunset.png"
          alt="Fighter jet launching from aircraft carrier at sunset"
          class="w-full h-full object-cover img-cinematic hero-bg"
        />
        <!-- Gradient overlays for depth -->
        <div class="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent"></div>
        <div class="absolute inset-0 bg-gradient-to-r from-navy-950/60 via-transparent to-navy-950/30"></div>
      </div>

      <!-- Hero Content -->
      <div class="relative z-10 h-full flex flex-col justify-end pb-24 md:pb-32 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
        <!-- Classification Badge -->
        <div class="hero-badge mb-8">
          <span class="font-mono text-[9px] tracking-[0.4em] uppercase text-accent-gold/80 border border-accent-gold/30 px-4 py-1.5 bg-navy-950/60 backdrop-blur-sm">
            {{ t.hero.classified }}
          </span>
        </div>

        <!-- Main Title -->
        <h1 class="hero-title font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] text-white uppercase mb-6 max-w-4xl">
          Silentium<br/>Classis
        </h1>

        <!-- Latin Phrases -->
        <div class="flex flex-col gap-3 mb-12">
          <p class="hero-latin1 text-sm md:text-base font-light tracking-[0.4em] text-white/70 italic">
            Supra Mare Dominamur
          </p>
          <p class="hero-latin2 text-xs md:text-sm font-light tracking-[0.5em] text-white/40 italic">
            In Umbra Operamur
          </p>
        </div>

        <!-- CTA Buttons -->
        <div class="hero-cta flex flex-col sm:flex-row gap-4">
          <button class="group relative px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-500 text-white">
            <span class="text-[11px] tracking-[0.2em] uppercase font-medium">{{ t.hero.btnEnter }}</span>
          </button>
          <a href="#fleet" class="group relative px-8 py-4 border border-white/10 hover:border-white/25 transition-all duration-500 text-white/60 hover:text-white text-center">
            <span class="text-[11px] tracking-[0.2em] uppercase">{{ t.hero.btnExplore }}</span>
          </a>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center scroll-indicator">
        <div class="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent relative overflow-hidden">
          <div class="absolute top-0 w-full h-4 bg-white/80 scroll-pulse"></div>
        </div>
      </div>
    </section>

    <!-- ============================================
         ABOUT SECTION
         ============================================ -->
    <section id="about" class="relative py-0">
      <!-- Full-width carrier image band -->
      <div class="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <img
          src="/bg.png"
          alt="Aircraft carrier at sea"
          class="w-full h-full object-cover img-dark-cinematic opacity-70 about-bg"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/70 to-navy-950/30"></div>
        <div class="absolute inset-0 bg-gradient-to-b from-navy-950 via-transparent to-transparent opacity-60"></div>

        <!-- Text overlaid on image -->
        <div class="absolute inset-0 flex items-center justify-center px-6">
          <div class="max-w-3xl text-center about-content">
            <div class="font-mono text-[9px] tracking-[0.5em] uppercase text-accent-cyan/70 mb-8">
              {{ t.about.auth }}
            </div>
            <p class="text-xl md:text-2xl lg:text-3xl font-light text-white leading-relaxed tracking-wide">
              {{ t.about.desc1 }}
              <span class="text-white font-medium">{{ t.about.desc2 }}</span>
              {{ t.about.desc3 }}
            </p>
            <div class="mt-10 w-16 h-px bg-white/20 mx-auto"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================
         FEATURED AIRCRAFT
         ============================================ -->
    <section id="fleet" class="relative py-24 md:py-32 bg-navy-950">
      <div class="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <!-- Section Header -->
        <div class="fleet-header mb-16 md:mb-24">
          <div class="flex items-end justify-between border-b border-white/10 pb-6">
            <div>
              <div class="font-mono text-[9px] tracking-[0.4em] uppercase text-accent-cyan/60 mb-3">
                {{ t.fleet.sec }}
              </div>
              <h2 class="text-3xl md:text-4xl font-display text-white uppercase tracking-wide">
                {{ t.fleet.title }}
              </h2>
            </div>
            <div class="hidden md:block font-mono text-[9px] tracking-[0.2em] text-white/25 text-right whitespace-pre-line">
              {{ t.fleet.active }}
            </div>
          </div>
        </div>

        <!-- Aircraft Cards -->
        <div class="space-y-20 md:space-y-0 md:grid md:grid-cols-1 md:gap-0">

          <!-- F-14 Tomcat -->
          <div class="fleet-card group md:grid md:grid-cols-2 items-center gap-0 border-b border-white/5 pb-16 md:pb-0 md:min-h-[500px]">
            <!-- Image -->
            <div class="relative overflow-hidden h-[300px] md:h-[500px]">
              <img
                src="/f14-flight.png"
                alt="F-14 Tomcat in flight over the ocean"
                class="w-full h-full object-cover img-cinematic group-hover:scale-105 transition-transform duration-[2s] ease-out"
              />
              <div class="absolute inset-0 bg-gradient-to-r from-transparent to-navy-950 hidden md:block"></div>
              <div class="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent md:hidden"></div>
              <!-- Designation Tag -->
              <div class="absolute top-4 left-4 font-mono text-[9px] tracking-[0.3em] text-white/70 bg-black/50 backdrop-blur-sm px-3 py-1.5 border border-white/10">
                {{ t.fleet.f14.tag }}
              </div>
            </div>
            <!-- Info -->
            <div class="md:pl-16 pt-8 md:pt-0 flex flex-col justify-center">
              <div class="font-mono text-[9px] tracking-[0.3em] text-accent-orange/70 mb-4">GRUMMAN // VF SERIES</div>
              <h3 class="text-3xl md:text-4xl font-display text-white uppercase tracking-wide mb-4">
                F-14 Tomcat
              </h3>
              <p class="text-sm text-white/50 leading-relaxed mb-8 max-w-md">
                {{ t.fleet.f14.desc }}
              </p>
              <div class="flex items-center gap-6 mb-8 font-mono text-[10px] text-white/30 tracking-wider">
                <span>MACH 2.34</span>
                <span class="w-px h-3 bg-white/15"></span>
                <span>RANGE 1,600 NM</span>
                <span class="w-px h-3 bg-white/15"></span>
                <span>1970–2006</span>
              </div>
              <button @click="openVideo('/f14 vid.mp4')" class="self-start group/btn flex items-center gap-3 px-6 py-3 border border-white/15 hover:border-white/40 hover:bg-white/5 transition-all duration-500 text-white/70 hover:text-white">
                <span class="text-[10px] tracking-[0.2em] uppercase">{{ t.fleet.f14.btn }}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="transform group-hover/btn:translate-x-1 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </button>
            </div>
            <!-- 3D Viewer -->
            <div class="md:col-span-2 mt-8 md:mt-12 h-[300px] md:h-[400px]">
              <ThreeAircraftViewer title="F-14 Tomcat" modelType="f14" />
            </div>
          </div>

          <!-- F/A-18 Super Hornet -->
          <div class="fleet-card group md:grid md:grid-cols-2 items-center gap-0 border-b border-white/5 pb-16 md:pb-0 md:min-h-[500px]">
            <!-- Info (reversed order on desktop) -->
            <div class="md:pr-16 pt-8 md:pt-0 flex flex-col justify-center order-2 md:order-1">
              <div class="font-mono text-[9px] tracking-[0.3em] text-accent-cyan/70 mb-4">BOEING // VFA SERIES</div>
              <h3 class="text-3xl md:text-4xl font-display text-white uppercase tracking-wide mb-4">
                F/A-18 Super Hornet
              </h3>
              <p class="text-sm text-white/50 leading-relaxed mb-8 max-w-md">
                {{ t.fleet.fa18.desc }}
              </p>
              <div class="flex items-center gap-6 mb-8 font-mono text-[10px] text-white/30 tracking-wider">
                <span>MACH 1.8</span>
                <span class="w-px h-3 bg-white/15"></span>
                <span>RANGE 1,275 NM</span>
                <span class="w-px h-3 bg-white/15"></span>
                <span>1999–PRESENT</span>
              </div>
              <button @click="openVideo('/f18 vid.mp4')" class="self-start group/btn flex items-center gap-3 px-6 py-3 border border-white/15 hover:border-white/40 hover:bg-white/5 transition-all duration-500 text-white/70 hover:text-white">
                <span class="text-[10px] tracking-[0.2em] uppercase">{{ t.fleet.fa18.btn }}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="transform group-hover/btn:translate-x-1 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </button>
            </div>
            <!-- Image -->
            <div class="relative overflow-hidden h-[300px] md:h-[500px] order-1 md:order-2">
              <img
                src="/fa18.png"
                alt="F/A-18 Super Hornet on carrier deck"
                class="w-full h-full object-cover img-cinematic group-hover:scale-105 transition-transform duration-[2s] ease-out"
              />
              <div class="absolute inset-0 bg-gradient-to-l from-transparent to-navy-950 hidden md:block"></div>
              <div class="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent md:hidden"></div>
              <div class="absolute top-4 left-4 md:top-4 md:right-4 md:left-auto font-mono text-[9px] tracking-[0.3em] text-white/70 bg-black/50 backdrop-blur-sm px-3 py-1.5 border border-white/10">
                {{ t.fleet.fa18.tag }}
              </div>
            </div>
            <!-- 3D Viewer -->
            <div class="md:col-span-2 mt-8 md:mt-12 h-[300px] md:h-[400px] order-3">
              <ThreeAircraftViewer title="F/A-18 Super Hornet" modelType="fa18" />
            </div>
          </div>

          <!-- F-35 Lightning II -->
          <div class="fleet-card group md:grid md:grid-cols-2 items-center gap-0 md:min-h-[500px]">
            <!-- Image -->
            <div class="relative overflow-hidden h-[300px] md:h-[500px]">
              <img
                src="/f35.png"
                alt="F-35 Lightning II stealth fighter in flight"
                class="w-full h-full object-cover object-top img-cinematic group-hover:scale-105 transition-transform duration-[2s] ease-out"
              />
              <div class="absolute inset-0 bg-gradient-to-r from-transparent to-navy-950 hidden md:block"></div>
              <div class="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent md:hidden"></div>
              <div class="absolute top-4 left-4 font-mono text-[9px] tracking-[0.3em] text-white/70 bg-black/50 backdrop-blur-sm px-3 py-1.5 border border-white/10">
                {{ t.fleet.f35.tag }}
              </div>
            </div>
            <!-- Info -->
            <div class="md:pl-16 pt-8 md:pt-0 flex flex-col justify-center">
              <div class="font-mono text-[9px] tracking-[0.3em] text-accent-gold/70 mb-4">LOCKHEED MARTIN // VFA SERIES</div>
              <h3 class="text-3xl md:text-4xl font-display text-white uppercase tracking-wide mb-4">
                F-35C Lightning II
              </h3>
              <p class="text-sm text-white/50 leading-relaxed mb-8 max-w-md">
                {{ t.fleet.f35.desc }}
              </p>
              <div class="flex items-center gap-6 mb-8 font-mono text-[10px] text-white/30 tracking-wider">
                <span>MACH 1.6</span>
                <span class="w-px h-3 bg-white/15"></span>
                <span>RANGE 1,200 NM</span>
                <span class="w-px h-3 bg-white/15"></span>
                <span>2019–PRESENT</span>
              </div>
              <button @click="openVideo('/f35 vid.mp4')" class="self-start group/btn flex items-center gap-3 px-6 py-3 border border-white/15 hover:border-white/40 hover:bg-white/5 transition-all duration-500 text-white/70 hover:text-white">
                <span class="text-[10px] tracking-[0.2em] uppercase">{{ t.fleet.f35.btn }}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="transform group-hover/btn:translate-x-1 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </button>
            </div>
            <!-- 3D Viewer -->
            <div class="md:col-span-2 mt-8 md:mt-12 h-[300px] md:h-[400px]">
              <ThreeAircraftViewer title="F-35C Lightning II" modelType="f35" />
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ============================================
         OPERATIONS SECTION
         ============================================ -->
    <section id="operations" class="relative py-0">
      <!-- Full-width operations image -->
      <div class="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <img
          src="/f14.png"
          alt="Carrier flight operations"
          class="w-full h-full object-cover img-dark-cinematic opacity-60 ops-bg"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/50 to-navy-950/40"></div>
        <div class="absolute inset-0 bg-navy-950/30"></div>

        <!-- Content overlaid -->
        <div class="absolute inset-0 flex items-center px-6 md:px-16 lg:px-24">
          <div class="max-w-7xl mx-auto w-full md:grid md:grid-cols-2 items-center gap-16">
            <div class="ops-content">
              <div class="font-mono text-[9px] tracking-[0.4em] uppercase text-accent-orange/70 mb-6 flex items-center gap-3">
                <span class="w-2 h-2 bg-accent-orange/60 rounded-full"></span>
                {{ t.ops.tag }}
              </div>
              <h2 class="text-3xl md:text-4xl lg:text-5xl font-display text-white uppercase tracking-wide mb-8 leading-tight" v-html="t.ops.title">
              </h2>
              <p class="text-base md:text-lg text-white/60 leading-relaxed max-w-lg">
                {{ t.ops.desc1 }}
                <span class="text-white font-medium">{{ t.ops.desc2 }}</span>
                {{ t.ops.desc3 }}
                <span class="text-white font-medium">{{ t.ops.desc4 }}</span>{{ t.ops.desc5 }}
              </p>
            </div>

            <!-- Stats Panel -->
            <div class="hidden md:flex flex-col gap-8 ops-stats pl-8 border-l border-white/10">
              <div>
                <div class="font-mono text-[9px] tracking-[0.3em] text-white/30 uppercase mb-2">{{ t.ops.stat1 }}</div>
                <div class="text-4xl font-display text-white">7</div>
              </div>
              <div class="w-full h-px bg-white/5"></div>
              <div>
                <div class="font-mono text-[9px] tracking-[0.3em] text-white/30 uppercase mb-2">{{ t.ops.stat2 }}</div>
                <div class="text-4xl font-display text-white">11</div>
              </div>
              <div class="w-full h-px bg-white/5"></div>
              <div>
                <div class="font-mono text-[9px] tracking-[0.3em] text-white/30 uppercase mb-2">{{ t.ops.stat3 }}</div>
                <div class="text-4xl font-display text-accent-cyan">99.7<span class="text-lg">%</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================
         CARRIER TIMELINE SECTION
         ============================================ -->
    <section id="timeline" class="relative py-24 md:py-32 bg-navy-950 overflow-hidden border-t border-white/5">
      <!-- Background Image with parallax -->
      <div class="absolute inset-0 z-0 opacity-10 grayscale scale-110 pointer-events-none">
        <img src="/carriers-bg.png" alt="Carrier History" class="w-full h-full object-cover timeline-bg" />
      </div>
      
      <div class="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        <!-- Section Header -->
        <div class="timeline-header mb-16 md:mb-24 text-center md:text-left">
          <div class="font-mono text-[9px] tracking-[0.4em] uppercase text-accent-cyan/60 mb-3">
            {{ t.timeline.sec }}
          </div>
          <h2 class="text-3xl md:text-4xl font-display text-white uppercase tracking-wide mb-6">
            {{ t.timeline.title }}
          </h2>
          <p class="text-sm text-white/40 max-w-lg mx-auto md:mx-0">
            {{ t.timeline.desc }}
          </p>
        </div>

        <!-- Horizontal Cinematic Carousel -->
        <div class="relative mt-12 group/carousel">
          
          <!-- Main Slider -->
          <div 
            class="relative h-[500px] md:h-[650px] lg:h-[750px] overflow-hidden rounded-sm border border-white/5 bg-navy-900 shadow-2xl"
            @mouseenter="stopCarousel"
            @mouseleave="startCarousel"
          >
            <div 
              v-for="(carrier, index) in carriers" 
              :key="carrier.id" 
              class="absolute inset-0 transition-all duration-1000 ease-in-out carrier-slide"
              :class="currentCarrierIndex === index ? 'opacity-100 z-20' : 'opacity-0 z-10'"
            >
              <!-- Background Image -->
              <div class="absolute inset-0 overflow-hidden">
                <img 
                  :src="carrier.image" 
                  :alt="carrier.name" 
                  class="w-full h-full object-cover opacity-60 transition-all duration-[2000ms] ease-out"
                  :class="currentCarrierIndex === index ? 'scale-100' : 'scale-110'"
                  @error="(e) => (e.target as HTMLImageElement).src = '/carriers-bg.png'"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent"></div>
              </div>

              <!-- Slide Content -->
              <div class="absolute inset-0 flex items-center px-8 md:px-16 lg:px-24">

                  <div :id="'slide-content-' + index" class="max-w-3xl slide-content-wrapper relative z-10">
                    <div class="font-mono text-[10px] tracking-[0.5em] text-accent-cyan/60 mb-4 uppercase reveal-text opacity-0">
                      {{ carrier.year }} // REG_ID: {{ carrier.id }}
                    </div>
                    <h3 class="text-4xl md:text-6xl lg:text-7xl font-display text-white uppercase tracking-wider mb-6 reveal-text leading-none opacity-0 flex flex-wrap items-baseline gap-x-6">
                      {{ carrier.name }}
                      <span class="text-3xl md:text-5xl lg:text-6xl hull-badge-glow inline-block font-archivo whitespace-nowrap" :id="'hull-num-' + index">
                        <span class="hull-tag-prefix">CVN - </span>
                        <span class="hull-tag-number">{{ carrier.id.split('-')[1] }}</span>
                      </span>
                    </h3>
                    <p class="text-[15px] md:text-base lg:text-lg text-white/85 leading-snug md:leading-relaxed max-w-2xl lg:max-w-3xl mb-8 md:mb-10 italic reveal-text opacity-0">
                      "{{ lang === 'EN' ? carrier.desc : carrier.descPt }}"
                    </p>
                    
                    <div class="flex flex-wrap gap-y-4 gap-x-10 p-5 bg-black/30 backdrop-blur-md border-l-2 border-accent-cyan/50 reveal-text opacity-0">
                      <div class="flex flex-col gap-1">
                        <span class="font-mono text-[10px] tracking-[0.2em] text-accent-gold/80 uppercase">Class</span>
                        <span class="font-mono text-[12px] tracking-widest text-white/90">{{ carrier.class }}</span>
                      </div>
                      <div class="flex flex-col gap-1">
                        <span class="font-mono text-[10px] tracking-[0.2em] text-accent-cyan/80 uppercase">Commissioned</span>
                        <span class="font-mono text-[12px] tracking-widest text-white/90">{{ carrier.year }}</span>
                      </div>
                      <div class="flex flex-col gap-1">
                        <span class="font-mono text-[10px] tracking-[0.2em] text-accent-gold/80 uppercase">Homeport</span>
                        <span class="font-mono text-[12px] tracking-widest text-white/90">{{ carrier.base }}</span>
                      </div>
                      <div class="flex flex-col gap-1">
                        <span class="font-mono text-[10px] tracking-[0.2em] text-white/40 uppercase">Status</span>
                        <span 
                          class="font-mono text-[12px] tracking-widest"
                          :class="carrier.status === 'ACTIVE' ? 'text-accent-cyan animate-pulse' : 'text-white/30'"
                        >
                          {{ carrier.status }}
                        </span>
                      </div>
                    </div>
                  </div>
              </div>
            </div>

            <!-- Side Controls -->
            <button 
              @click="handleManualNav(prevCarrier)"
              class="absolute left-0 top-0 bottom-0 w-24 flex items-center justify-center group/btn z-30 transition-all hover:bg-gradient-to-r hover:from-accent-cyan/10 hover:to-transparent"
              title="Previous Carrier"
            >
              <div class="w-12 h-12 flex items-center justify-center text-white/30 group-hover/btn:text-accent-cyan group-hover/btn:scale-110 transition-all duration-500 relative">
                <!-- HUD Corner Accents -->
                <div class="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-accent-cyan/0 group-hover/btn:border-accent-cyan transition-colors"></div>
                <div class="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-accent-cyan/0 group-hover/btn:border-accent-cyan transition-colors"></div>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="m15 18-6-6 6-6"/></svg>
              </div>
            </button>

            <button 
              @click="handleManualNav(nextCarrier)"
              class="absolute right-0 top-0 bottom-0 w-24 flex items-center justify-center group/btn z-30 transition-all hover:bg-gradient-to-l hover:from-accent-cyan/10 hover:to-transparent"
              title="Next Carrier"
            >
              <div class="w-12 h-12 flex items-center justify-center text-white/30 group-hover/btn:text-accent-cyan group-hover/btn:scale-110 transition-all duration-500 relative">
                <!-- HUD Corner Accents -->
                <div class="absolute -top-1 -right-1 w-2 h-2 border-t border-r border-accent-cyan/0 group-hover/btn:border-accent-cyan transition-colors"></div>
                <div class="absolute -bottom-1 -left-1 w-2 h-2 border-b border-l border-accent-cyan/0 group-hover/btn:border-accent-cyan transition-colors"></div>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="m9 18 6-6-6-6"/></svg>
              </div>
            </button>
          </div>

          <!-- Bottom Timeline Navigation -->
          <div class="mt-12 relative px-4 py-8">
            <div class="absolute top-1/2 left-0 w-full h-px bg-white/5 -translate-y-1/2"></div>
            <div class="relative flex justify-between items-center max-w-5xl mx-auto overflow-x-auto no-scrollbar gap-8 md:gap-0 pb-4 md:pb-0">
              <button 
                v-for="(carrier, index) in carriers" 
                :key="'nav-'+carrier.id"
                @click="currentCarrierIndex = index"
                class="relative z-10 flex flex-col items-center group/nav flex-shrink-0"
              >
                <div class="font-mono text-[11px] md:text-[13px] mb-4 transition-all duration-300" :class="currentCarrierIndex === index ? 'text-accent-cyan font-bold scale-110' : 'text-white/20 group-hover/nav:text-white/40'">
                  {{ carrier.year }}
                </div>
                <div 
                  class="w-2.5 h-2.5 rounded-full transition-all duration-500 border-2"
                  :class="currentCarrierIndex === index ? 'bg-accent-cyan border-accent-cyan scale-125 shadow-[0_0_15px_rgba(94,175,197,0.8)] animate-pulse' : 'bg-navy-950 border-white/20 group-hover/nav:border-white/40'"
                ></div>
                <div class="absolute top-14 opacity-0 group-hover/nav:opacity-100 transition-opacity font-mono text-[8px] text-white/40 whitespace-nowrap hidden md:block">
                  {{ carrier.name }}
                </div>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ============================================
         RADAR ANIMATION SECTION
         ============================================ -->
    <section id="radar" class="relative py-24 md:py-32 bg-navy-950 overflow-hidden border-t border-b border-white/5">
      <!-- Glow behind radar -->
      <div class="absolute top-1/2 right-[10%] w-[600px] h-[600px] -translate-y-1/2 bg-accent-cyan/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10 w-full md:grid md:grid-cols-2 lg:grid-cols-[1fr_500px] items-center gap-16">
        
        <!-- Radar Text Info -->
        <div class="mb-16 md:mb-0 radar-content">
          <div class="font-mono text-[9px] tracking-[0.4em] uppercase text-accent-cyan mb-6 flex items-center gap-3">
            <span class="w-1.5 h-1.5 bg-accent-cyan rounded-full animate-ping"></span>
            {{ t.radar.spec }}
          </div>
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-display text-white uppercase tracking-wide mb-8 leading-tight" v-html="t.radar.title">
          </h2>
          <p class="text-base md:text-lg text-white/50 leading-relaxed max-w-sm">
            {{ t.radar.desc }}
          </p>
          
          <div class="mt-12 flex gap-8 font-mono text-[9px] tracking-[0.2em] text-white/30">
            <div>
              <span class="block text-accent-cyan text-sm mb-1">299,792 km/s</span>
              SIGNAL SPEED
            </div>
            <div>
              <span class="block text-white mb-1">UHF/S-BAND</span>
              FREQUENCY
            </div>
          </div>
        </div>

        <!-- Radar Animation Container -->
        <div class="relative w-full max-w-[400px] md:max-w-[500px] aspect-square mx-auto radar-container">
          <ThreeRadar />
        </div>

      </div>
    </section>

    <!-- ============================================
         FINAL CTA SECTION
         ============================================ -->
    <section class="relative h-screen bg-black flex items-center justify-center overflow-hidden cta-section">
      <!-- Dark carrier background -->
      <div class="absolute inset-0">
        <img
          src="/bg.png"
          alt="Aircraft carrier at night"
          class="w-full h-full object-cover opacity-20 brightness-50 grayscale-[30%]"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/60"></div>
      </div>

      <!-- Content -->
      <div class="relative z-10 text-center flex flex-col items-center cta-content px-6">
        <!-- Decorative line -->
        <div class="w-px h-20 bg-gradient-to-b from-transparent to-white/30 mb-12"></div>

        <div class="font-mono text-[9px] tracking-[0.5em] uppercase text-accent-gold/50 mb-8">
          {{ t.cta.tag }}
        </div>
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-display text-white uppercase tracking-[0.1em] mb-6" v-html="t.cta.title">
        </h2>
        <p class="text-sm text-white/30 tracking-[0.2em] mb-14 max-w-md">
          {{ t.cta.desc }}
        </p>

        <button @click="showAuthModal = true" class="group relative px-12 py-5 bg-white/5 border border-white/20 hover:bg-white/10 hover:border-white/40 backdrop-blur-sm transition-all duration-700 text-white">
          <span class="text-[11px] tracking-[0.3em] uppercase font-medium">{{ t.cta.btn }}</span>
        </button>

        <!-- Decorative line -->
        <div class="w-px h-20 bg-gradient-to-t from-transparent to-white/15 mt-12"></div>
      </div>
    </section>

    <!-- ============================================
         FOOTER
         ============================================ -->
    <footer class="py-12 bg-black border-t border-white/5 relative">
      <div class="max-w-7xl mx-auto px-6 md:px-12">
        <div class="flex flex-col md:flex-row justify-between items-center gap-8">
          <!-- Left -->
          <div class="flex items-center gap-4">
            <img src="/logo.png" alt="Silentium Classis" class="w-6 h-6 object-contain invert brightness-200 opacity-40" />
            <span class="font-mono text-[9px] tracking-[0.3em] text-white/30 uppercase">Silentium Classis</span>
          </div>

          <!-- Center -->
          <div class="font-mono text-[8px] text-white/15 tracking-[0.3em] text-center space-y-1">
            <div>CSG-9 // CVN-78 GERALD R. FORD</div>
            <div>LAT 36°57'08"N // LON 076°19'45"W</div>
            <div>OPORD 2026-SC-4781 // {{ t.footer.unclassified }}</div>
          </div>

          <!-- Right -->
          <div class="font-mono text-[8px] text-white/15 tracking-[0.2em] text-right">
            © 2026 SC PROJECT<br/>
            {{ t.footer.rights }}
          </div>
        </div>
      </div>
    </footer>
    <!-- ============================================
         VIDEO MODAL
         ============================================ -->
    <div
      v-if="activeVideo"
      class="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md"
    >
      <button
        @click="closeVideo"
        class="absolute top-6 right-6 text-white/70 hover:text-white z-10 transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M18 6L6 18"/><path d="M6 6l12 12"/></svg>
      </button>

      <div class="relative w-full max-w-5xl aspect-video px-4">
        <video
          :src="activeVideo"
          autoplay
          controls
          class="w-full h-full shadow-2xl rounded-sm object-contain"
        ></video>
      </div>
    </div>

    <!-- ============================================
         AUTH MODAL
         ============================================ -->
    <div
      v-if="showAuthModal"
      class="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 backdrop-blur-lg"
    >
      <button
        @click="showAuthModal = false"
        class="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M18 6L6 18"/><path d="M6 6l12 12"/></svg>
      </button>

      <div class="relative w-full max-w-md p-8 border" :class="authError ? 'border-red-500/50 bg-red-950/20' : 'border-white/10 bg-white/5'">
        <div class="font-mono text-[10px] tracking-[0.3em] mb-6" :class="authError ? 'text-red-500' : 'text-accent-cyan'">
          RESTRICTED ACCESS TERMINAL
        </div>
        
        <h3 class="text-2xl font-display uppercase tracking-widest text-white mb-8" :class="authError ? 'animate-pulse text-red-500' : ''">
          {{ authError ? 'ACCESS DENIED' : 'ENTER AUTHORIZATION' }}
        </h3>

        <form @submit.prevent="checkAuth" class="relative">
          <input
            v-model="authKeyword"
            type="password"
            placeholder="PASSWORD"
            class="w-full bg-black/50 border-b-2 px-4 py-3 font-mono text-white placeholder-white/20 focus:outline-none transition-colors"
            :class="authError ? 'border-red-500 text-red-500' : 'border-white/20 focus:border-accent-cyan'"
            autocomplete="off"
            autofocus
          />
          <div v-if="authError" class="absolute -bottom-6 left-0 font-mono text-[9px] text-red-500 tracking-widest uppercase">
            Invalid Clearance Code
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, computed, watch } from 'vue'
import { useRouter } from 'vue-router'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { startAmbient, stopAmbient, setVolume } from '../ambientAudio'

import ThreeBackground from '../components/ThreeBackground.vue'
import ThreeRadar from '../components/ThreeRadar.vue'
import ThreeAircraftViewer from '../components/ThreeAircraftViewer.vue'

gsap.registerPlugin(ScrollTrigger)

// === TRANSLATION STATE ===
const lang = ref('EN')

// === AUTH STATE ===
const router = useRouter()
const showAuthModal = ref(false)
const authKeyword = ref('')
const authError = ref(false)

const checkAuth = () => {
  if (authKeyword.value.toLowerCase() === 'in umbra operamur') {
    showAuthModal.value = false
    authKeyword.value = ''
    router.push('/classified')
  } else {
    authError.value = true
    setTimeout(() => {
      authError.value = false
    }, 1500)
  }
}

// === VIDEO MODAL STATE ===
const activeVideo = ref<string | null>(null)

const openVideo = (videoPath: string) => {
  activeVideo.value = videoPath
}

const closeVideo = () => {
  activeVideo.value = null
}

const t = computed(() => {
  if (lang.value === 'PT') {
    return {
      nav: { about: 'SOBRE', fleet: 'FROTA', ops: 'OPERAÇÕES' },
      hero: { classified: 'Classificado // Divisão de Aviação Naval', btnEnter: 'Entrar no Comando Naval', btnExplore: 'Explorar Aeronaves da Frota' },
      about: { auth: 'Visão Geral do Projeto // Credencial Necessária', desc1: 'Silentium Classis é um projeto de aviação naval classificado com foco em ', desc2: 'superioridade aérea baseada em porta-aviões', desc3: ' e operações marítimas.' },
      fleet: {
        sec: 'Seção 002 // Registro da Frota', title: 'Aeronaves de Combate', active: '3 UNIDADES ATIVAS\nSTATUS: OPERACIONAL',
        f14: {
          tag: 'SUPERIORIDADE AÉREA', desc: 'Interceptor com asas de geometria variável projetado para defesa de frota de longo alcance. O lendário guardião dos grupos de ataque de porta-aviões, capaz de engajar alvos múltiplos a distâncias extremas.', btn: 'Ver Detalhes'
        },
        fa18: {
          tag: 'ATAQUE MULTIFUNÇÃO', desc: 'A espinha dorsal das modernas alas aéreas embarcadas. Um caça de ataque multifunção versátil que se destaca tanto em combate ar-ar quanto em ataque de precisão ao solo a partir do convés de voo.', btn: 'Ver Detalhes'
        },
        f35: {
          tag: 'STEALTH 5ª GERAÇÃO', desc: 'O futuro da aviação naval. Caça de quinta geração stealth multifunção combinando fusão de sensores incomparável, capacidades de guerra eletrônica e tecnologia de baixa visibilidade (stealth).', btn: 'Ver Detalhes'
        }
      },
      ops: {
        tag: 'Zona de Implantação Ativa', title: 'Operações<br/>Marítimas', desc1: 'As operações baseadas em porta-aviões garantem prontidão constante em todas as zonas marítimas globais. Cada missão é executada com ', desc2: 'precisão', desc3: ' e ', desc4: 'controle', desc5: '.',
        stat1: 'Zonas de Patrulha Global', stat2: 'Grupos de Porta-Aviões Ativos', stat3: 'Prontidão da Missão'
      },
      timeline: {
        sec: 'Seção 003 // Registro Histórico', title: 'Linhagem de Porta-Aviões',
        desc: 'A evolução do poder naval dos EUA, desde a conversão pioneira até o domínio nuclear.'
      },
      radar: { 
        spec: 'Vigilância Tática // Ativa', title: 'Varredura<br/>Por Radar', desc: 'Sistema de monitoramento de longo alcance do perímetro. Rastreadores em tempo real operando 24x7 no cinturão da frota.' 
      },
      cta: {
        tag: 'Autorização Necessária // Nível 5', title: 'Acesso Naval<br/>Restrito', desc: 'Prossiga apenas com credenciais válidas e autorização operacional.', btn: 'Entrar no Sistema'
      },
      footer: {
        unclassified: 'NÃO CLASSIFICADO QUANDO SEPARADO', rights: 'TODOS OS DIREITOS RESERVADOS'
      }
    }
  }
  // Default EN
  return {
      nav: { about: 'About', fleet: 'Fleet', ops: 'Operations' },
      hero: { classified: 'Classified // Naval Aviation Division', btnEnter: 'Enter Naval Air Command', btnExplore: 'Explore Fleet Aircraft' },
      about: { auth: 'Project Overview // Clearance Required', desc1: 'Silentium Classis is a classified naval aviation project focused on ', desc2: 'carrier-based air superiority', desc3: ' and maritime operations.' },
      fleet: {
        sec: 'Section 002 // Fleet Registry', title: 'Combat Aircraft', active: '3 UNITS ACTIVE\nSTATUS: OPERATIONAL',
        f14: {
          tag: 'AIR SUPERIORITY', desc: 'Variable-sweep wing interceptor designed for long-range fleet defense. The legendary guardian of carrier strike groups, capable of engaging multiple targets at extreme distances.', btn: 'View Details'
        },
        fa18: {
          tag: 'MULTIROLE STRIKE', desc: 'The backbone of modern carrier air wings. A versatile multirole strike fighter excelling in both air-to-air combat and precision ground attack from the flight deck.', btn: 'View Details'
        },
        f35: {
          tag: '5TH GEN STEALTH', desc: 'The future of carrier aviation. Fifth-generation stealth multirole fighter combining unmatched sensor fusion, electronic warfare capabilities, and low-observable technology.', btn: 'View Details'
        }
      },
      ops: {
        tag: 'Active Deployment Zone', title: 'Maritime<br/>Operations', desc1: 'Carrier-based operations ensure constant readiness across global maritime zones. Every mission is executed with ', desc2: 'precision', desc3: ' and ', desc4: 'control', desc5: '.',
        stat1: 'Global Patrol Zones', stat2: 'Active Carrier Groups', stat3: 'Mission Readiness'
      },
      timeline: {
        sec: 'Section 003 // Historical Registry', title: 'Carrier Lineage',
        desc: 'The evolution of US naval power, from pioneering conversion to nuclear dominance.'
      },
      radar: { 
        spec: 'Tactical Surveillance // Active', title: 'Radar<br/>Scanning', desc: 'Long-range perimeter monitoring system. Real-time trackers operating 24x7 across the fleet exclusion belt.' 
      },
      cta: {
        tag: 'Authorization Required // Level 5', title: 'Restricted<br/>Naval Access', desc: 'Proceed only with valid credentials and operational clearance.', btn: 'Enter System'
      },
      footer: {
        unclassified: 'UNCLASSIFIED WHEN SEPARATED', rights: 'ALL RIGHTS RESERVED'
      }
  }
})

const getAssetUrl = (path: string) => {
  if (!path) return ''
  if (path.startsWith('http://') || path.startsWith('https://')) return path
  const b = import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL : import.meta.env.BASE_URL + '/'
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  return b + cleanPath
}

// === CARRIER TIMELINE DATA ===
const carriers = [
  { id: 'CV-1', name: 'USS Langley', year: 1922, class: 'Langley-class', base: 'Norfolk, VA', image: getAssetUrl('/cv1.png'), status: 'DECOMMISSIONED',
    desc: 'The pioneer of US naval aviation. The "Old Wagon" proved that fixed-wing aircraft could operate from a moving deck, forever changing maritime warfare. During WWII, she served as a vital seaplane tender before being lost in 1942.', 
    descPt: 'O pioneiro da aviação naval dos EUA. O "Old Wagon" provou que aeronaves podiam operar de um convés móvel, mudando para sempre a guerra. Na 2ª Guerra, serviu como tender de hidroaviões até ser perdido em 1942.' },
  
  { id: 'CV-2', name: 'USS Lexington', year: 1927, class: 'Lexington-class', base: 'Long Beach, CA', image: 'https://upload.wikimedia.org/wikipedia/commons/9/94/USS_Lexington_%28CV-2%29_leaving_San_Diego_on_14_October_1941_%2880-G-416362%29.jpg', status: 'DECOMMISSIONED',
    desc: 'Originally designed as a battlecruiser, the "Lady Lex" entered service in 1927. She played a critical role in the Battle of the Coral Sea (1942), the first carrier-vs-carrier battle in history, where she was lost after heroic combat.', 
    descPt: 'Originalmente um cruzador de batalha, o "Lady Lex" entrou em serviço em 1927. Teve papel crítico na Batalha do Mar de Coral (1942), a primeira batalha entre porta-aviões da história, onde foi perdida após combate heróico.' },
  
  { id: 'CV-6', name: 'USS Enterprise', year: 1938, class: 'Yorktown-class', base: 'Pearl Harbor, HI', image: getAssetUrl('/cv6.png'), status: 'DECOMMISSIONED',
    desc: 'The legendary "Big E" became the most decorated ship of WWII. She survived nearly every major engagement in the Pacific, including Midway, Guadalcanal, and Leyte Gulf, becoming a legend of naval history.', 
    descPt: 'A lendária "Big E" tornou-se o navio mais condecorado da 2ª Guerra. Sobreviveu a quase todos os combates no Pacífico, incluindo Midway e Guadalcanal, tornando-se uma lenda da história naval.' },
  
  { id: 'CV-9', name: 'USS Essex', year: 1942, class: 'Essex-class', base: 'Norfolk, VA', image: 'https://upload.wikimedia.org/wikipedia/commons/5/53/USS_Essex_CVS-9_June_1967.jpg', status: 'DECOMMISSIONED',
    desc: 'The backbone of WWII victory. The Essex-class redefined mass-produced naval power, supporting the island-hopping campaigns and serving extensively in the Battle of Leyte Gulf and the Korean War.', 
    descPt: 'A espinha dorsal da vitória na 2ª Guerra. A classe Essex redefiniu o poder naval em massa, apoiando as campanhas no Pacífico e servindo intensamente no Golfo de Leyte e na Guerra da Coreia.' },
  
  { id: 'CV-41', name: 'USS Midway', year: 1945, class: 'Midway-class', base: 'San Diego, CA', image: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/USS_Midway_%28CVB-41%29_steaming_off_the_Firth_of_Clyde_in_September_1952.jpg', status: 'DECOMMISSIONED',
    desc: 'A massive technological leap, serving for 47 years from the dawn of the jet age to Operation Desert Storm (1991). She was the first carrier to feature a fully armored flight deck.', 
    descPt: 'Um salto tecnológico massivo, servindo por 47 anos, desde o início da era a jato até a Tempestade no Deserto (1991). Foi o primeiro porta-aviões com convés de voo totalmente blindado.' },
  
  { id: 'CV-59', name: 'USS Forrestal', year: 1955, class: 'Forrestal-class', base: 'Norfolk, VA', image: 'https://upload.wikimedia.org/wikipedia/commons/6/6c/USS_Forrestal_%28CVA-59%29_underway_at_sea_on_31_May_1962_%28KN-4507%29.jpg', status: 'DECOMMISSIONED',
    desc: 'The world\'s first "Supercarrier", designed for heavy jet operations with an angled flight deck. She saw heavy action during the Vietnam War before being decommissioned in 1993.', 
    descPt: 'O primeiro "Super-porta-aviões" do mundo, projetado para jatos com convés angulado. Teve intensa participação na Guerra do Vietnã antes de ser desativado em 1993.' },
  
  { id: 'CVN-65', name: 'USS Enterprise', year: 1961, class: 'Enterprise-class', base: 'Norfolk, VA', image: getAssetUrl('/cvn65.png'), status: 'DECOMMISSIONED',
    desc: 'The dawn of nuclear power, able to steam at high speeds indefinitely. CVN-65 served in the Cuban Missile Crisis, the Vietnam War, and Operation Enduring Freedom during her 51-year career.', 
    descPt: 'O despertar do poder nuclear, capaz de navegar em alta velocidade indefinidamente. O CVN-65 serviu na Crise dos Mísseis de Cuba, Vietnã e na Operação Liberdade Duradoura.' },
  
  { id: 'CVN-68', name: 'USS Nimitz', year: 1975, class: 'Nimitz-class', base: 'Bremerton, WA', image: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/USS_Nimitz_%28CVN-68%29.jpg', status: 'ACTIVE',
    desc: 'The gold standard of the modern era, largest warships ever built. CVN-68 led Operation Eagle Claw (1980) and has been a central figure in Gulf security operations for decades.', 
    descPt: 'O padrão ouro da era moderna, os maiores navios de guerra já construídos. O CVN-68 liderou a Operação Eagle Claw (1980) e tem sido figura central em operações no Golfo por décadas.' },

  { id: 'CVN-69', name: 'USS Dwight D. Eisenhower', year: 1977, class: 'Nimitz-class', base: 'Norfolk, VA', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/USS_Dwight_D._Eisenhower_(CVN-69)_underway_in_the_Atlantic_Ocean_on_22_March_2016.JPG', status: 'ACTIVE',
    desc: 'The second Nimitz-class carrier, a cornerstone of US power projection. "Ike" served in Desert Storm and Enduring Freedom, and recently led operations in the Red Sea (2023-24).', 
    descPt: 'O segundo porta-aviões da classe Nimitz, base da projeção de poder dos EUA. O "Ike" serviu na Tempestade no Deserto e recentemente liderou operações no Mar Vermelho (2023-24).' },

  { id: 'CVN-71', name: 'USS Theodore Roosevelt', year: 1986, class: 'Nimitz-class', base: 'San Diego, CA', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/USS_Theodore_Roosevelt_(CVN-71).jpg', status: 'ACTIVE',
    desc: 'Known as "The Big Stick", she was the first to feature modular construction. She played vital roles in Desert Storm (1991) and Operation Allied Force in Kosovo (1999).', 
    descPt: 'Conhecido como "The Big Stick", foi o primeiro com construção modular. Teve papel vital na Tempestade no Deserto (1991) e na Operação Força Aliada no Kosovo (1999).' },

  { id: 'CVN-72', name: 'USS Abraham Lincoln', year: 1989, class: 'Nimitz-class', base: 'San Diego, CA', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/USS_Abraham_Lincoln_(CVN-72)_underway_in_the_Atlantic_Ocean_on_30_January_2019_(190130-N-PW716-1312).JPG', status: 'ACTIVE',
    desc: 'A veteran of the Pacific fleet, CVN-72 has led missions in Iraqi Freedom and Enduring Freedom, embodying the global reach of the United States Navy. Exact Location: North Arabian Sea. Operating directly within the US 5th Fleet and CENTCOM area of responsibility, the ship is strategically positioned outside the Persian Gulf to maintain airspace control, air superiority, and support the execution of the naval blockade of Iranian ports.', 
    descPt: 'Um veterano da frota do Pacífico, o CVN-72 liderou missões no Iraqi Freedom e Liberdade Duradoura, incorporando o alcance global da Marinha dos Estados Unidos. Localização Exata: Norte do Mar da Arábia. Atua diretamente dentro da área de responsabilidade da 5ª Frota e do Comando Central dos EUA (CENTCOM). O navio está posicionado estrategicamente fora do Golfo Pérsico para manter o controle de espaço aéreo, superioridade aérea e suporte na execução do bloqueio naval de portos iranianos.' },

  { id: 'CVN-73', name: 'USS George Washington', year: 1992, class: 'Nimitz-class', base: 'Norfolk, VA', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/USS_George_Washington_(CVN-73)_underway_in_August_2015_with_CVW-5_on_deck.JPG', status: 'ACTIVE',
    desc: 'The first nuclear carrier forward-deployed to Japan, participating in Operation Southern Watch and Enduring Freedom, serving as a symbol of the US-Japan alliance.', 
    descPt: 'O primeiro porta-aviões nuclear implantado no Japão, participou das operações Southern Watch e Liberdade Duradoura, símbolo da aliança EUA-Japão.' },

  { id: 'CVN-76', name: 'USS Ronald Reagan', year: 2003, class: 'Nimitz-class', base: 'San Diego, CA', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/USS_Ronald_Reagan_(CVN-76).jpg', status: 'ACTIVE',
    desc: 'A symbol of "Peace through Strength", she served in Iraqi Freedom and led Operation Tomodachi (2011) humanitarian efforts in Japan after the earthquake.', 
    descPt: 'Um símbolo de "Paz através da Força", serviu no Iraqi Freedom e liderou a Operação Tomodachi (2011) de ajuda humanitária no Japão após o terremoto.' },

  { id: 'CVN-77', name: 'USS George H.W. Bush', year: 2009, class: 'Nimitz-class', base: 'Norfolk, VA', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/USS_George_H._W._Bush_(CVN_77)_underway.jpg', status: 'ACTIVE',
    desc: 'The tenth and final Nimitz-class carrier, featuring advanced radar and environmental systems. She played a key role in Operation Inherent Resolve (2014) against ISIS. Exact Location: Arabian Sea (in dual operations with the Lincoln). The ship crossed the Strait of Gibraltar in April and moved rapidly towards the Middle East, joining the 5th Fleet to share duties of advanced air patrol and long-range strike readiness against targets in Iran.', 
    descPt: 'O décimo e último porta-aviões da classe Nimitz, com radar avançado e sistemas ambientais. Teve papel fundamental na Operação Inherent Resolve (2014) contra o ISIS. Localização Exata: Mar da Arábia (em dupla operação com o Lincoln). O navio cruzou o Estreito de Gibraltar em abril e moveu-se rapidamente em direção ao Oriente Médio. Ele se juntou ao acúmulo de forças navais da 5ª Frota americana no Mar da Arábia, dividindo as funções de patrulha aérea avançada e prontidão de ataque de longo alcance contra alvos no Irã.' },

  { id: 'CVN-78', name: 'USS Gerald R. Ford', year: 2017, class: 'Ford-class', base: 'Norfolk, VA', image: 'https://upload.wikimedia.org/wikipedia/commons/5/52/USS_Gerald_R._Ford_%28CVN-78%29_underway_in_the_Atlantic_Ocean_on_9_October_2022_%28221009-N-TL968-1248%29.JPG', status: 'ACTIVE',
    desc: 'The peak of 21st-century technology with electromagnetic catapults. Recently deployed to the Eastern Mediterranean (2023) to provide deterrence and security. Exact Location: Atlantic Ocean (leaving the theater of operations). After extending its mission in the Red Sea to contain naval threats and participate in Operation Epic Fury, the Ford officially began its return, crossing Suez on May 1st and Gibraltar on May 6th, ending a historic 314-day mobilization as it sails back to Norfolk, Virginia.', 
    descPt: 'O pico da tecnologia do século 21 com catapultas eletromagnéticas. Recentemente implantado no Mediterrâneo Oriental (2023) para fornecer dissuasão e segurança. Localização Exata: Oceano Atlântico (saindo do teatro de operações). Após estender sua missão no Oriente Médio atuando no Mar Vermelho para conter ameaças navais e participar da Operação Epic Fury, o Ford iniciou oficialmente seu retorno. O porta-aviões cruzou o Canal de Suez em direção ao norte em 1º de maio, passou pelo Estreito de Gibraltar em 6 de maio e agora navega pelo Atlântico a caminho de sua base em Norfolk, Virgínia, encerrando uma mobilização histórica de mais de 314 dias no mar.' },
]

// === CAROUSEL STATE ===
const currentCarrierIndex = ref(0)
let carouselInterval: any = null

function nextCarrier() {
  currentCarrierIndex.value = (currentCarrierIndex.value + 1) % carriers.length
}

function prevCarrier() {
  currentCarrierIndex.value = (currentCarrierIndex.value - 1 + carriers.length) % carriers.length
}

function startCarousel() {
  carouselInterval = setInterval(nextCarrier, 5000)
}

function stopCarousel() {
  if (carouselInterval) clearInterval(carouselInterval)
}

function handleManualNav(action: Function) {
  stopCarousel()
  action()
}

// Cinematic animation for the active slide
function animateSlide(index: number) {
  const container = document.querySelector(`#slide-content-${index}`)
  if (!container) return

  // Reset other slides
  gsap.set('.reveal-text', { opacity: 0, y: 20 })
  gsap.set('.hull-number-glow', { opacity: 0, scale: 0.95 })

  // Animate active slide
  const elements = container.querySelectorAll('.reveal-text')
  gsap.to(elements, {
    opacity: 1,
    y: 0,
    duration: 1,
    stagger: 0.15,
    ease: 'power3.out',
    overwrite: true
  })

  // Animate the hull number glow with a flicker effect
  gsap.fromTo(`#hull-num-${index}`, 
    { opacity: 0, scale: 0.95 },
    { 
      opacity: 1, 
      scale: 1, 
      duration: 1.2, 
      delay: 0.8,
      ease: "power3.out",
      onComplete: () => {
        // More intense flicker animation for the badge
        gsap.to(`#hull-num-${index}`, {
          opacity: 0.6,
          duration: 0.08,
          repeat: 9,
          yoyo: true,
          ease: "none",
        });
      }
    }
  );
}

watch(currentCarrierIndex, (newVal) => {
  animateSlide(newVal)
})

// === AMBIENT AUDIO STATE ===
const audioActive = ref(false)
const volume = ref(50)
const showVolumeSlider = ref(false)

function toggleAudio() {
  if (audioActive.value) {
    stopAmbient()
    audioActive.value = false
  } else {
    const started = startAmbient()
    if (started) {
      audioActive.value = true
      setVolume(volume.value / 100)
    }
  }
}

function onVolumeChange(e: Event) {
  const val = parseInt((e.target as HTMLInputElement).value)
  volume.value = val
  if (audioActive.value) {
    setVolume(val / 100)
  }
}

function handleMouseLeave() {
  setTimeout(() => {
    showVolumeSlider.value = false
  }, 800)
}

onMounted(() => {
  // Trigger initial slide animation
  animateSlide(0)

  // ======================
  // HERO ENTRANCE SEQUENCE
  // ======================
  const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } })

  // Background slow zoom
  heroTl.fromTo('.hero-bg',
    { scale: 1.15 },
    { scale: 1, duration: 4, ease: 'power2.out' }
  )

  // Badge slides in
  .fromTo('.hero-badge',
    { opacity: 0, x: -30 },
    { opacity: 1, x: 0, duration: 1.2 },
    '-=3'
  )

  // Title reveals
  .fromTo('.hero-title',
    { opacity: 0, y: 40, clipPath: 'inset(100% 0 0 0)' },
    { opacity: 1, y: 0, clipPath: 'inset(0% 0 0 0)', duration: 1.8, ease: 'power4.out' },
    '-=2.5'
  )

  // First Latin phrase fades
  .fromTo('.hero-latin1',
    { opacity: 0, x: -20 },
    { opacity: 1, x: 0, duration: 1.5 },
    '-=1.5'
  )

  // Second Latin phrase types in (delayed)
  .fromTo('.hero-latin2',
    { opacity: 0, y: 8, filter: 'blur(4px)' },
    { opacity: 1, y: 0, filter: 'blur(0px)', duration: 2, ease: 'power2.out' },
    '-=0.5'
  )

  // CTA buttons
  .fromTo('.hero-cta',
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 1.2 },
    '-=1.5'
  )

  // Scroll indicator
  .fromTo('.scroll-indicator',
    { opacity: 0 },
    { opacity: 1, duration: 1 },
    '-=0.8'
  )

  // Continuous scroll-pulse animation
  gsap.to('.scroll-pulse', {
    y: 48,
    opacity: 0,
    duration: 1.8,
    repeat: -1,
    ease: 'power1.in'
  })

  // ======================
  // NAVBAR ON SCROLL
  // ======================
  ScrollTrigger.create({
    trigger: 'body',
    start: 'top -80',
    onEnter: () => {
      gsap.to('.nav-bar', {
        backgroundColor: 'rgba(5, 10, 18, 0.95)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
        duration: 0.4
      })
    },
    onLeaveBack: () => {
      gsap.to('.nav-bar', {
        backgroundColor: 'transparent',
        backdropFilter: 'none',
        borderBottom: 'none',
        duration: 0.4
      })
    }
  })

  // Hero parallax
  gsap.to('.hero-bg', {
    scrollTrigger: {
      trigger: '.hero-bg',
      start: 'top top',
      end: 'bottom top',
      scrub: true,
    },
    y: '15%',
    scale: 1.05,
    ease: 'none'
  })

  // ======================
  // ABOUT SECTION
  // ======================
  gsap.fromTo('.about-content',
    { opacity: 0, y: 40 },
    {
      scrollTrigger: {
        trigger: '#about',
        start: 'top 65%',
      },
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: 'power2.out'
    }
  )

  gsap.fromTo('.about-bg',
    { scale: 1.1 },
    {
      scrollTrigger: {
        trigger: '#about',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
      scale: 1,
      ease: 'none'
    }
  )

  // ======================
  // FLEET SECTION
  // ======================
  gsap.fromTo('.fleet-header',
    { opacity: 0, y: 30 },
    {
      scrollTrigger: {
        trigger: '#fleet',
        start: 'top 70%',
      },
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: 'power2.out'
    }
  )

  // Each fleet card animates as it enters
  gsap.utils.toArray('.fleet-card').forEach((card: any, i: number) => {
    const img = card.querySelector('img')

    gsap.fromTo(card,
      { opacity: 0, y: 60 },
      {
        scrollTrigger: {
          trigger: card,
          start: 'top 75%',
        },
        opacity: 1,
        y: 0,
        duration: 1.2,
        delay: i * 0.1,
        ease: 'power3.out'
      }
    )

    // Subtle parallax on card images
    if (img) {
      gsap.fromTo(img,
        { scale: 1.08 },
        {
          scrollTrigger: {
            trigger: card,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
          scale: 1,
          ease: 'none'
        }
      )
    }
  })

  // ======================
  // OPERATIONS SECTION
  // ======================
  gsap.fromTo('.ops-content',
    { opacity: 0, x: -40 },
    {
      scrollTrigger: {
        trigger: '#operations',
        start: 'top 60%',
      },
      opacity: 1,
      x: 0,
      duration: 1.5,
      ease: 'power2.out'
    }
  )

  gsap.fromTo('.ops-stats > div',
    { opacity: 0, y: 20 },
    {
      scrollTrigger: {
        trigger: '#operations',
        start: 'top 55%',
      },
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power2.out'
    }
  )

  gsap.fromTo('.ops-bg',
    { scale: 1.1 },
    {
      scrollTrigger: {
        trigger: '#operations',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
      scale: 1,
      ease: 'none'
    }
  )

  // ======================
  // TIMELINE SECTION (Cinematic Carousel)
  // ======================
  startCarousel()


  // Initialize first slide animation
  setTimeout(() => animateSlide(0), 100)

  gsap.to('.timeline-bg', {
    scrollTrigger: {
      trigger: '#timeline',
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
    y: '-10%',
    scale: 1,
    ease: 'none'
  })

  // ======================
  // RADAR SECTION
  // ======================
  gsap.fromTo('.radar-content',
    { opacity: 0, x: -40 },
    {
      scrollTrigger: {
        trigger: '#radar',
        start: 'top 70%',
      },
      opacity: 1,
      x: 0,
      duration: 1.5,
      ease: 'power2.out'
    }
  )

  gsap.fromTo('.radar-container',
    { opacity: 0, scale: 0.9 },
    {
      scrollTrigger: {
        trigger: '#radar',
        start: 'top 70%',
      },
      opacity: 1,
      scale: 1,
      duration: 2,
      ease: 'power3.out'
    }
  )

  // ======================
  // FINAL CTA
  // ======================
  gsap.fromTo('.cta-content',
    { opacity: 0, y: 30 },
    {
      scrollTrigger: {
        trigger: '.cta-section',
        start: 'top 60%',
      },
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: 'power2.out'
    }
  )
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Teko:wght@400;500;600;700&display=swap');

/* Volume Slider Styling */
.volume-slider {
  -webkit-appearance: none;
  appearance: none;
  height: 8px; /* Increased track height */
  background: rgba(255, 255, 255, 0.15);
  border-radius: 4px;
  outline: none;
}

.volume-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 16px; /* Increased thumb size */
  height: 16px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  cursor: pointer;
  transition: background 0.2s, transform 0.1s;
}

.volume-slider::-webkit-slider-thumb:hover {
  background: #ffffff;
  transform: scale(1.1);
  box-shadow: 0 0 8px rgba(255, 255, 255, 0.5);
}

.volume-slider::-moz-range-thumb {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: none;
  background: rgba(255, 255, 255, 0.9);
  cursor: pointer;
  transition: background 0.2s, transform 0.1s;
}

.volume-slider::-moz-range-thumb:hover {
  background: #ffffff;
  transform: scale(1.1);
}

.volume-slider::-moz-range-track {
  height: 8px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 4px;
}

/* ==================
   RADAR ANIMATION
   ================== */
@keyframes radar-spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.radar-mask {
  border-radius: 50%;
  /* 
    Mask logic: 
    - 360deg is the bright sweeping line.
    - 355deg to 360deg is transparent, revealing the blips brightly underneath.
    - 270deg to 340deg fades to full navy-950, slowly obscuring the blips (phosphor trail).
    - 0deg to 270deg is completely opaque navy-950, completely hiding the blips until next sweep. 
  */
  background: conic-gradient(
    from 0deg,
    rgba(5, 10, 18, 1) 0deg,
    rgba(5, 10, 18, 1) 270deg,
    rgba(5, 10, 18, 0.5) 340deg,
    rgba(5, 10, 18, 0) 355deg,
    rgba(94, 175, 197, 0.8) 360deg
  );
  animation: radar-spin 4s linear infinite;
  box-shadow: inset 0 0 40px rgba(94, 175, 197, 0.1);
  pointer-events: none;
}

/* Flight Paths: Tactical Interception */
/* Ally Leader */
@keyframes flight-path-1 {
  0% { top: 90%; left: 10%; opacity: 0; }
  10% { opacity: 1; }
  45% { top: 48%; left: 48%; } /* Intercept point */
  55% { top: 52%; left: 52%; } /* Engagement */
  90% { opacity: 1; }
  100% { top: 20%; left: 90%; opacity: 0; }
}
.target-1 {
  position: absolute;
  animation: flight-path-1 90s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  z-index: 20;
}

/* Red Bogey - Trying to bypass */
@keyframes flight-path-2 {
  0% { top: 10%; left: 90%; opacity: 0; }
  10% { opacity: 1; }
  45% { top: 50%; left: 50%; } /* Intercept point */
  50% { top: 53%; left: 47%; } /* Evasive maneuver */
  55% { top: 50%; left: 50%; }
  90% { opacity: 1; }
  100% { top: 80%; left: 10%; opacity: 0; }
}
.target-2 {
  position: absolute;
  animation: flight-path-2 90s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  z-index: 20;
}

/* Ally Wingman - Flying in offset formation */
@keyframes flight-path-3 {
  0% { top: 93%; left: 13%; opacity: 0; }
  10% { opacity: 1; }
  45% { top: 51%; left: 45%; } /* Covering the turn */
  55% { top: 55%; left: 49%; }
  90% { opacity: 1; }
  100% { top: 23%; left: 93%; opacity: 0; }
}
.target-3 {
  position: absolute;
  animation: flight-path-3 90s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  z-index: 20;
}

/* Lock Animation */
@keyframes lock-pulse {
  0% { transform: scale(1); opacity: 0.3; }
  50% { transform: scale(1.5); opacity: 1; }
  100% { transform: scale(1); opacity: 0.3; }
}

.radar-lock-ui {
  animation: lock-pulse 0.5s infinite ease-in-out;
}

/* ==================
   TIMELINE SECTION
   ================== */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.timeline-container {
  mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
}

.timeline-item {
  transition: transform 0.5s cubic-bezier(0.2, 1, 0.3, 1);
}

.font-archivo {
  font-family: 'Teko', sans-serif;
  text-transform: uppercase;
}

.hull-badge-glow {
  line-height: 1;
  letter-spacing: 0.05em;
}

.hull-tag-prefix {
  color: rgb(255, 0, 0); /* Ultra-Vivid Pure Red */
  -webkit-text-stroke: 1.5px rgb(0, 255, 130); /* Neon Green Border Restored */
  text-shadow: 
    0 0 8px rgba(255, 0, 0, 0.9),    /* Core Red Glow */
    0 0 15px rgba(0, 255, 130, 0.8), /* Mid Green Glow */
    0 0 30px rgba(255, 0, 0, 0.5),   /* Outer Red Aura */
    0 0 50px rgba(0, 255, 130, 0.3); /* Distant Green Aura */
}

.hull-tag-number {
  color: #ffffff; /* Tactical White */
  text-shadow: 
    0 0 15px rgba(255, 255, 255, 0.8),
    0 0 30px rgba(255, 255, 255, 0.4);
}

</style>
