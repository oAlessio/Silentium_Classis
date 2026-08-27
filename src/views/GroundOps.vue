<template>
  <div class="min-h-screen bg-navy-950 text-gray-300 overflow-x-hidden relative">

    <!-- Film Grain -->
    <div class="film-grain"></div>

    <!-- ===================== NAV ===================== -->
    <nav class="fixed top-0 left-0 w-full z-50 bg-navy-950/80 backdrop-blur-md border-b border-white/5 px-6 md:px-12 py-4 flex justify-between items-center">
      <div class="flex items-center gap-3">
        <div class="font-mono text-[9px] tracking-[0.4em] text-accent-gold/60 uppercase">In Umbra Operamur // Ground Ops</div>
      </div>
      <div class="flex items-center gap-4">
        <!-- Language Toggle -->
        <button
          @click="lang = lang === 'EN' ? 'PT' : 'EN'"
          class="h-10 px-4 flex items-center justify-center hover:bg-white/10 transition-colors font-mono text-[10px] tracking-wider text-white/50 hover:text-white border-r border-white/10"
          title="Change Language"
        >
          <span class="opacity-40 pr-1">{{ lang === 'EN' ? 'EN' : 'PT' }}</span>
          <span class="opacity-100">/ {{ lang === 'EN' ? 'PT' : 'EN' }}</span>
        </button>

        <button @click="router.push('/classified')" class="group flex items-center gap-3 text-white/40 hover:text-white transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="group-hover:-translate-x-1 transition-transform"><path d="m15 18-6-6 6-6"/></svg>
          <span class="font-mono text-[10px] tracking-[0.2em] uppercase">{{ t.nav.back }}</span>
        </button>
      </div>
    </nav>

    <!-- ===================== HERO ===================== -->
    <section class="relative h-[50vh] overflow-hidden flex items-end">
      <img src="https://images.unsplash.com/photo-1590242271813-f9b5c2a129f1?q=80&w=1600&auto=format&fit=crop" alt="Special Operations" class="absolute inset-0 w-full h-full object-cover opacity-40 scale-105" />
      <div class="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/50 to-transparent"></div>
      <div class="relative z-10 px-6 md:px-16 pb-16 max-w-7xl mx-auto w-full">
        <div class="font-mono text-[9px] tracking-[0.5em] text-accent-gold/70 mb-4 uppercase flex items-center gap-2">
          <span class="w-1.5 h-1.5 bg-accent-gold rounded-full animate-pulse"></span>
          {{ t.hero.tag }}
        </div>
        <h1 class="text-5xl md:text-7xl font-display text-white uppercase tracking-wide leading-none mb-4">{{ t.hero.title1 }}<br/>{{ t.hero.title2 }}</h1>
        <p class="text-sm text-white/40 max-w-lg font-mono tracking-widest">{{ t.hero.subtitle }}</p>
      </div>
    </section>

    <!-- ===================== UNITS ===================== -->
    <section class="relative py-24 bg-navy-950">
      <div class="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">

        <!-- Section Header -->
        <div class="mb-16 md:mb-24">
          <div class="flex items-end justify-between border-b border-white/10 pb-6">
            <div>
              <div class="font-mono text-[9px] tracking-[0.4em] uppercase text-accent-gold/60 mb-3">{{ t.section.code }}</div>
              <h2 class="text-3xl md:text-4xl font-display text-white uppercase tracking-wide">{{ t.section.title }}</h2>
            </div>
            <div class="hidden md:block font-mono text-[9px] tracking-[0.2em] text-white/25 text-right">{{ t.section.status }}</div>
          </div>
        </div>

        <!-- Units List -->
        <div class="space-y-0">
          <div
            v-for="(unit, index) in computedUnits"
            :key="unit.id"
            class="unit-card group border-b border-white/5 pb-0 md:min-h-[500px]"
            :class="index % 2 === 0 ? 'md:grid md:grid-cols-2 items-center gap-0' : 'md:grid md:grid-cols-2 items-center gap-0'"
          >
            <!-- IMAGE -->
            <div
              class="relative overflow-hidden h-[320px] md:h-[500px]"
              :class="index % 2 !== 0 ? 'order-1 md:order-2' : ''"
            >
              <img
                :src="unit.bg"
                :alt="unit.name"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out filter grayscale group-hover:grayscale-0"
              />
              <div
                class="absolute inset-0 hidden md:block"
                :class="index % 2 === 0 ? 'bg-gradient-to-r from-transparent to-navy-950' : 'bg-gradient-to-l from-transparent to-navy-950'"
              ></div>
              <div class="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent md:hidden"></div>
              <div class="absolute top-4 left-4 font-mono text-[9px] tracking-[0.3em] text-white/70 bg-black/50 backdrop-blur-sm px-3 py-1.5 border border-white/10 uppercase">
                {{ unit.tag }}
              </div>
            </div>

            <!-- INFO -->
            <div
              class="flex flex-col justify-center pt-10 md:pt-0"
              :class="index % 2 === 0 ? 'md:pl-16' : 'md:pr-16 order-2 md:order-1'"
            >
              <div class="flex items-center gap-4 mb-5">
                <div class="w-14 h-14 flex items-center justify-center bg-black/40 border border-white/10 p-2">
                  <img :src="unit.logo" :alt="unit.name + ' crest'" class="w-full h-full object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.25)]" />
                </div>
                <div>
                  <div class="font-mono text-[9px] tracking-[0.3em] text-accent-gold/70 uppercase">{{ unit.branch }}</div>
                  <div class="font-mono text-[9px] tracking-[0.2em] text-white/30 uppercase">{{ unit.alias }}</div>
                </div>
              </div>

              <h3 class="text-3xl md:text-4xl font-display text-white uppercase tracking-wide mb-4">{{ unit.name }}</h3>
              <p class="text-sm text-white/50 leading-relaxed mb-6 max-w-md">{{ unit.shortDesc }}</p>

              <div class="flex items-center gap-6 mb-8 font-mono text-[10px] text-white/30 tracking-wider">
                <span>EST. {{ unit.established }}</span>
                <span class="w-px h-3 bg-white/15"></span>
                <span>{{ unit.personnel }}</span>
                <span class="w-px h-3 bg-white/15"></span>
                <span>{{ unit.command }}</span>
              </div>

              <button
                @click="openModal(unit)"
                class="self-start group/btn flex items-center gap-3 px-6 py-3 border border-white/15 hover:border-accent-gold/50 hover:bg-white/5 transition-all duration-500 text-white/70 hover:text-accent-gold"
              >
                <span class="text-[10px] tracking-[0.2em] uppercase">{{ t.btn.details }}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="transform group-hover/btn:translate-x-1 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===================== DOSSIER MODAL ===================== -->
    <div
      v-if="activeUnit"
      class="fixed inset-0 z-[200] bg-navy-950 overflow-y-auto"
    >
      <div class="relative w-full min-h-screen flex flex-col">
        <div class="flex-grow">
          <!-- Modal Hero with close button INSIDE -->
          <div class="relative w-full h-[50vh] md:h-[60vh] min-h-[400px] flex-shrink-0 bg-black overflow-hidden">
            <!-- Blurred background -->
            <img :src="activeUnit.bg" class="absolute inset-0 w-full h-full object-cover opacity-30 blur-2xl scale-110" />
            <!-- Main image, fully visible without cropping -->
            <img :src="activeUnit.bg" :alt="activeUnit.name" class="relative w-full h-full object-contain opacity-90" />
            <div class="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-transparent pointer-events-none"></div>

            <!-- Close button INSIDE the hero, top-right -->
            <button
              @click="activeUnit = null"
              class="fixed top-6 right-6 z-[210] flex items-center gap-2 font-mono text-[10px] tracking-widest text-white/60 hover:text-white bg-black/50 backdrop-blur-sm border border-white/10 hover:border-white/30 px-4 py-3 transition-all cursor-pointer"
            >
              {{ t.modal.close }}
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M18 6L6 18"/><path d="M6 6l12 12"/></svg>
            </button>

            <div class="absolute bottom-0 left-0 w-full">
              <div class="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pb-8 md:pb-12 flex items-end gap-6 md:gap-8">
                <div class="w-24 h-24 md:w-32 md:h-32 bg-black/60 backdrop-blur-md border border-white/15 p-3 md:p-4 flex-shrink-0">
                  <img :src="activeUnit.logo" :alt="activeUnit.name + ' crest'" class="w-full h-full object-contain" />
                </div>
                <div>
                  <div class="font-mono text-[10px] tracking-[0.4em] text-accent-gold mb-2 uppercase">{{ activeUnit.branch }} // {{ activeUnit.tag }}</div>
                  <h2 class="text-4xl md:text-6xl font-display text-white uppercase tracking-wide">{{ activeUnit.name }}</h2>
                  <div class="font-mono text-[12px] md:text-sm text-white/40 tracking-widest mt-1">{{ activeUnit.alias }}</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Body -->
          <div class="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-16 grid md:grid-cols-3 gap-12 md:gap-16">
            <div class="md:col-span-2 space-y-10 md:space-y-12">
              <div>
                <div class="font-mono text-[9px] tracking-[0.4em] text-accent-gold/60 mb-3 uppercase border-b border-white/5 pb-2">// {{ t.modal.overview }}</div>
                <p class="text-sm text-white/70 leading-relaxed">{{ activeUnit.overview }}</p>
              </div>
              <div>
                <div class="font-mono text-[9px] tracking-[0.4em] text-accent-gold/60 mb-3 uppercase border-b border-white/5 pb-2">// {{ t.modal.operations }}</div>
                <ul class="space-y-3">
                  <li v-for="op in activeUnit.operations" :key="op.name" class="flex gap-4 text-sm">
                    <span class="font-mono text-[10px] text-accent-cyan whitespace-nowrap pt-0.5">{{ op.year }}</span>
                    <div>
                      <span class="text-white font-medium">{{ op.name }}</span>
                      <span class="text-white/50"> — {{ op.desc }}</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <div class="font-mono text-[9px] tracking-[0.4em] text-accent-gold/60 mb-3 uppercase border-b border-white/5 pb-2">// {{ t.modal.strengths }}</div>
                <div class="flex flex-wrap gap-2">
                  <span v-for="s in activeUnit.strengths" :key="s" class="font-mono text-[9px] tracking-[0.15em] px-3 py-1.5 border border-white/10 bg-white/5 text-white/60 uppercase">{{ s }}</span>
                </div>
              </div>

              <!-- Extra Image / Patches -->
              <div v-if="activeUnit.extraImage" class="pt-4">
                <div class="font-mono text-[9px] tracking-[0.4em] text-accent-gold/60 mb-4 uppercase border-b border-white/5 pb-2">// UNIT PATCHES & INSIGNIA</div>
                <div class="bg-black/30 p-4 border border-white/5 flex justify-center">
                  <img :src="activeUnit.extraImage" class="max-w-full h-auto object-contain opacity-90 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]" alt="Unit Insignia" />
                </div>
              </div>
            </div>

            <div class="space-y-4">
              <div class="bg-black/30 border border-white/5 p-5 space-y-4">
                <div v-for="stat in activeUnit.stats" :key="stat.labelEN">
                  <div class="font-mono text-[9px] tracking-[0.2em] text-accent-gold/60 uppercase mb-1">{{ lang === 'PT' ? stat.labelPT : stat.labelEN }}</div>
                  <div class="font-mono text-sm text-white/80 tracking-wider">{{ lang === 'PT' ? (stat.valuePT || stat.value) : stat.value }}</div>
                </div>
              </div>
              <div class="bg-black/30 border border-accent-gold/20 p-5">
                <div class="font-mono text-[9px] tracking-[0.4em] text-accent-gold/60 mb-3 uppercase">// {{ t.modal.recent }}</div>
                <p class="text-xs text-white/50 leading-relaxed">{{ activeUnit.recentActivity }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const lang = ref('EN')
const activeUnit = ref<any>(null)
const openModal = (unit: any) => { activeUnit.value = unit }

// ===== TRANSLATIONS =====
const t = computed(() => {
  if (lang.value === 'PT') return {
    nav: { back: 'Seleção de Teatro' },
    hero: {
      tag: 'DEPT 02 // CLASSIFICADO // JSOC',
      title1: 'Unidades de',
      title2: 'Missão Especial',
      subtitle: 'Ativos Tier 1 e Tier 2 sob o Comando de Operações Especiais Conjuntas. Acesso restrito a pessoal com credencial.'
    },
    section: {
      code: 'SEÇÃO 001 // Registro de Unidades',
      title: 'Divisões Operacionais',
      status: '6 UNIDADES ATIVAS\nSTATUS: OPERACIONAL'
    },
    btn: { details: 'Ver Dossiê' },
    modal: {
      close: 'FECHAR ARQUIVO',
      overview: 'Visão Geral',
      operations: 'Operações Notáveis',
      strengths: 'Pontos Fortes Operacionais',
      recent: 'Atividade Recente'
    }
  }
  return {
    nav: { back: 'Theater Select' },
    hero: {
      tag: 'DEPT 02 // CLASSIFIED // JSOC',
      title1: 'Special',
      title2: 'Mission Units',
      subtitle: 'Tier 1 & Tier 2 assets under Joint Special Operations Command. Access restricted to cleared personnel.'
    },
    section: {
      code: 'SECTION 001 // Unit Registry',
      title: 'Operational Divisions',
      status: '6 UNITS ACTIVE\nSTATUS: OPERATIONAL'
    },
    btn: { details: 'View Dossier' },
    modal: {
      close: 'CLOSE FILE',
      overview: 'Overview',
      operations: 'Notable Operations',
      strengths: 'Operational Strengths',
      recent: 'Recent Activity'
    }
  }
})

// ===== UNITS DATA (bilingual) =====
const units = [
  {
    id: 'delta',
    name: 'Delta Force',
    alias: '1st SFOD-D / CAG',
    tagEN: 'TIER 1 / DIRECT ACTION',
    tagPT: 'TIER 1 / AÇÃO DIRETA',
    branch: 'US Army',
    established: '1977',
    personnel: '~1,000 OPS',
    command: 'JSOC',
    logo: '/ground-ops/delta-logo.svg',
    bg: '/ground-ops/delta-soldiers.webp',
    shortDescEN: "The Army's premier counter-terrorism and hostage rescue unit. Operates with extreme secrecy across every domain and theatre of war.",
    shortDescPT: 'A principal unidade de contraterrorismo e resgate de reféns do Exército americano. Opera com extremo sigilo em todos os domínios e teatros de guerra.',
    overviewEN: "1st Special Forces Operational Detachment–Delta, known as Delta Force or CAG (Combat Applications Group), was founded in 1977 by Colonel Charles Beckwith following his experience with the British SAS. It is the US Army's top-tier counter-terrorism and special operations unit, conducting direct action raids, hostage rescue, and clandestine operations worldwide. Delta's existence was officially classified until 1994.",
    overviewPT: 'O 1st Special Forces Operational Detachment–Delta, conhecido como Delta Force ou CAG, foi fundado em 1977 pelo Coronel Charles Beckwith com base em sua experiência com o SAS britânico. É a unidade de contraterrorismo de ponta do Exército dos EUA, conduzindo ataques de ação direta, resgate de reféns e operações clandestinas globais. A existência do Delta foi classificada oficialmente até 1994.',
    operations: [
      { year: '1980', name: 'Operation Eagle Claw', descEN: 'Iran hostage rescue attempt — aborted due to equipment failure', descPT: 'Tentativa de resgate de reféns no Irã — abortada por falha de equipamento' },
      { year: '1993', name: 'Battle of Mogadishu', descEN: 'Direct action against Somali warlords — Black Hawk Down', descPT: 'Ação direta contra senhores da guerra somalis — Black Hawk Down' },
      { year: '2003', name: 'Operation Red Dawn', descEN: 'Capture of Saddam Hussein in Ad-Dawr, Iraq', descPT: 'Captura de Saddam Hussein em Ad-Dawr, Iraque' },
      { year: '2011', name: "Operation Neptune's Spear", descEN: 'Supported planning and intelligence for UBL raid', descPT: 'Apoio ao planejamento e inteligência para a operação contra Bin Laden' },
      { year: '2019', name: 'Barisha Raid', descEN: 'Killing of ISIS leader Abu Bakr al-Baghdadi in Syria', descPT: 'Eliminação do líder do ISIS Abu Bakr al-Baghdadi na Síria' },
    ],
    strengthsEN: ['Direct Action', 'Counter-Terrorism', 'Hostage Rescue', 'HUMINT', 'Sniper Ops', 'HALO/HAHO', 'UW'],
    strengthsPT: ['Ação Direta', 'Contraterrorismo', 'Resgate de Reféns', 'HUMINT', 'Operações de Atirador', 'HALO/HAHO', 'Guerra Não-Convencional'],
    stats: [
      { labelEN: 'Established', labelPT: 'Fundação', value: 'November 19, 1977', valuePT: '19 de Novembro de 1977' },
      { labelEN: 'Headquarters', labelPT: 'Sede', value: 'Fort Bragg, NC' },
      { labelEN: 'Parent Command', labelPT: 'Comando Superior', value: 'JSOC / USASOC' },
      { labelEN: 'Classification', labelPT: 'Classificação', value: 'TOP SECRET' },
      { labelEN: 'Recruitment', labelPT: 'Recrutamento', value: 'By invitation / SF selection', valuePT: 'Por convite / Seleção SF' },
    ],
    recentEN: 'Delta Force operators are currently embedded across active theaters including Syria, Iraq, and undisclosed African locations, executing counter-ISIS and counter-JNIM operations as part of ongoing JSOC task forces.',
    recentPT: 'Operadores do Delta Force estão atualmente integrados em teatros ativos, incluindo Síria, Iraque e locais não divulgados na África, executando operações contra o ISIS e o JNIM como parte das forças-tarefa do JSOC.',
  },
  {
    id: 'devgru',
    name: 'DEVGRU',
    alias: 'SEAL Team Six',
    tagEN: 'TIER 1 / MARITIME CT',
    tagPT: 'TIER 1 / CT MARÍTIMO',
    branch: 'US Navy',
    established: '1980',
    personnel: '~300 OPS',
    command: 'JSOC',
    logo: '/ground-ops/seals-logo.svg',
    bg: '/ground-ops/seals-soldiers.webp',
    extraImage: '/ground-ops/seals-teams.webp',
    shortDescEN: "The Navy's premier special mission unit. Unmatched in maritime counter-terrorism, hostage rescue, and high-value target operations across all environments.",
    shortDescPT: 'A principal unidade de missão especial da Marinha dos EUA. Inigualável em contraterrorismo marítimo, resgate de reféns e operações contra alvos de alto valor.',
    overviewEN: "Naval Special Warfare Development Group (DEVGRU), originally established as SEAL Team Six in 1980 by Commander Richard Marcinko, is the Navy's Tier 1 special mission unit. Organized into color-designated assault squadrons, DEVGRU specializes in counter-terrorism, personnel recovery, and direct action. Most famous for executing Operation Neptune's Spear in 2011.",
    overviewPT: 'O Naval Special Warfare Development Group (DEVGRU), originalmente estabelecido como SEAL Team Six em 1980 pelo Comandante Richard Marcinko, é a unidade de missão especial Tier 1 da Marinha. Organizado em esquadrões de assalto com cores designadas, o DEVGRU é especializado em contraterrorismo, recuperação de pessoal e ação direta. Mais famoso por executar a Operação Neptune\'s Spear em 2011.',
    operations: [
      { year: '1985', name: 'Achille Lauro Hijacking', descEN: 'Maritime counter-terrorism interception of hijackers', descPT: 'Interceptação marítima antiterrorista de sequestradores' },
      { year: '2009', name: 'Maersk Alabama Rescue', descEN: 'Snipers neutralized 3 Somali pirates, rescued Captain Phillips', descPT: 'Atiradores neutralizaram 3 piratas somalis e resgataram o Capitão Phillips' },
      { year: '2011', name: "Operation Neptune's Spear", descEN: 'DEVGRU Red Squadron kills Osama bin Laden in Abbottabad', descPT: 'Esquadrão Vermelho do DEVGRU mata Osama bin Laden em Abbottabad' },
      { year: '2014', name: 'Operation Celestial Balance', descEN: 'Attempted rescue of American hostages in Syria', descPT: 'Tentativa de resgate de reféns americanos na Síria' },
      { year: '2021', name: 'Khost Province Raid', descEN: 'Elimination of al-Qaeda senior leadership in Afghanistan', descPT: 'Eliminação da liderança sênior da al-Qaeda no Afeganistão' },
    ],
    strengthsEN: ['Maritime CT', 'Direct Action', 'Hostage Rescue', 'VBSS', 'CQB', 'Sniper', 'Parachute Ops'],
    strengthsPT: ['CT Marítimo', 'Ação Direta', 'Resgate de Reféns', 'VBSS', 'Combate em Espaços Confinados', 'Atirador de Elite', 'Operações de Paraquedismo'],
    stats: [
      { labelEN: 'Established', labelPT: 'Fundação', value: 'October 1980', valuePT: 'Outubro de 1980' },
      { labelEN: 'Headquarters', labelPT: 'Sede', value: 'Dam Neck, Virginia Beach, VA' },
      { labelEN: 'Parent Command', labelPT: 'Comando Superior', value: 'JSOC / NAVSOC' },
      { labelEN: 'Classification', labelPT: 'Classificação', value: 'TOP SECRET' },
      { labelEN: 'Squadrons', labelPT: 'Esquadrões', value: 'Red, Blue, Gold, Silver, Black, Gray', valuePT: 'Vermelho, Azul, Ouro, Prata, Preto, Cinza' },
    ],
    recentEN: 'DEVGRU operators are currently forward-deployed in the Middle East and East Africa as part of JSOC counter-terrorism task forces, conducting high-value target operations against ISIS-K and al-Shabaab networks.',
    recentPT: 'Operadores do DEVGRU estão atualmente desdobrados no Oriente Médio e na África Oriental como parte das forças-tarefa de contraterrorismo do JSOC, conduzindo operações contra alvos de alto valor do ISIS-K e redes da al-Shabaab.',
  },
  {
    id: 'rangers',
    name: '75th Ranger Regiment',
    alias: 'Army Rangers',
    tagEN: 'TIER 2 / LIGHT INFANTRY',
    tagPT: 'TIER 2 / INFANTARIA LEVE',
    branch: 'US Army',
    established: '1974',
    personnel: '~3,500',
    command: 'USASOC',
    logo: '/ground-ops/rangers-logo.png',
    bg: '/ground-ops/rangers-soldiers.jpg',
    shortDescEN: "The Army's premier large-scale direct action raid force. Capable of seizing airfields and executing complex joint operations globally within 18 hours notice.",
    shortDescPT: 'A principal força de ataque direto em larga escala do Exército. Capaz de tomar aeroportos e executar operações conjuntas complexas globalmente em 18 horas.',
    overviewEN: "The 75th Ranger Regiment is the US Army's premier light infantry special operations force. Unlike Delta or DEVGRU, Rangers operate at scale — capable of deploying battalion-sized elements (500+ men) into heavily contested areas via airborne insertion. They serve as both a standalone raid force and an enabling force for Tier 1 units.",
    overviewPT: 'O 75º Regimento Ranger é a principal força de operações especiais de infantaria leve do Exército dos EUA. Ao contrário do Delta ou DEVGRU, os Rangers operam em escala — capazes de desdobrar elementos de tamanho batalhão (500+ homens) em áreas contestadas via inserção aerotransportada. Servem como força de ataque autônoma e como força habilitadora para unidades Tier 1.',
    operations: [
      { year: '1989', name: 'Operation Just Cause', descEN: 'Mass airborne assault on Tocumen/Torrijos Airport, Panama', descPT: 'Assalto aerotransportado em massa ao Aeroporto Tocumen, Panamá' },
      { year: '1993', name: 'Battle of Mogadishu', descEN: 'QRF element in Task Force Ranger during Black Hawk Down', descPT: 'Elemento QRF na Task Force Ranger durante o Black Hawk Down' },
      { year: '2001', name: 'Operation Rhino', descEN: 'First major ground operation into Afghanistan — Kandahar airfield', descPT: 'Primeira grande operação terrestre no Afeganistão — campo aéreo de Kandahar' },
      { year: '2003', name: 'Iraq Airfield Seizures', descEN: 'Seizure of multiple airfields during OIF in under 72 hours', descPT: 'Tomada de múltiplos campos aéreos durante a OIF em menos de 72 horas' },
      { year: '2010–20', name: 'Sustained Ops GWOT', descEN: 'Thousands of raid cycles per year in Afghanistan and Iraq', descPT: 'Milhares de ciclos de ataque por ano no Afeganistão e no Iraque' },
    ],
    strengthsEN: ['Airfield Seizure', 'Large-Scale Raids', 'Airborne Assault', 'JTAC Support', 'Personnel Recovery', 'Fire Support'],
    strengthsPT: ['Tomada de Aeródromo', 'Ataques em Larga Escala', 'Assalto Aerotransportado', 'Suporte JTAC', 'Recuperação de Pessoal', 'Apoio de Fogo'],
    stats: [
      { labelEN: 'Established', labelPT: 'Fundação', value: 'January 31, 1974', valuePT: '31 de Janeiro de 1974' },
      { labelEN: 'Headquarters', labelPT: 'Sede', value: 'Fort Benning, GA' },
      { labelEN: 'Battalions', labelPT: 'Batalhões', value: '1st, 2nd, 3rd Bns + SPT Bn', valuePT: '1º, 2º, 3º Bns + Bn de Apoio' },
      { labelEN: 'Parent Command', labelPT: 'Comando Superior', value: 'USASOC / JSOC Taskings' },
      { labelEN: 'Ranger Creed', labelPT: 'Lema Ranger', value: 'Rangers Lead The Way', valuePT: 'Rangers Lideram o Caminho' },
    ],
    recentEN: 'The 75th Ranger Regiment maintains persistent presence in Syria (Operation Inherent Resolve) and rotational deployments across East Africa, providing direct action and advisory capabilities to partner forces.',
    recentPT: 'O 75º Regimento Ranger mantém presença permanente na Síria (Operação Inherent Resolve) e desdobramentos rotativos na África Oriental, fornecendo capacidades de ação direta e assessoria a forças parceiras.',
  },
  {
    id: 'soar',
    name: '160th SOAR',
    alias: 'Night Stalkers',
    tagEN: 'TIER 1 / SPECIAL AVIATION',
    tagPT: 'TIER 1 / AVIAÇÃO ESPECIAL',
    branch: 'US Army',
    established: '1981',
    personnel: '~2,500',
    command: 'USASOC',
    logo: '/ground-ops/stalkers-logo.svg',
    bg: '/ground-ops/stalkers-soldiers.jpg',
    shortDescEN: "The elite special operations aviation regiment. Masters of low-altitude, nighttime, and all-weather flight — the silent backbone of every Tier 1 operation.",
    shortDescPT: 'O regimento de aviação de operações especiais de elite. Mestres do voo em baixa altitude, noturno e com qualquer clima — a espinha dorsal silenciosa de cada operação Tier 1.',
    overviewEN: "The 160th Special Operations Aviation Regiment (Airborne), known as the Night Stalkers, was formed in 1981 following the failure of Operation Eagle Claw. Equipped with the most advanced rotary-wing aircraft in the world, the 160th provides aviation support exclusively to special operations forces. Their motto: \"Night Stalkers Don't Quit.\"",
    overviewPT: 'O 160º Regimento de Aviação de Operações Especiais (Aerotransportado), conhecido como Night Stalkers, foi formado em 1981 após o fracasso da Operação Eagle Claw. Equipado com as aeronaves de asa rotativa mais avançadas do mundo, o 160º fornece apoio de aviação exclusivamente para forças de operações especiais. Seu lema: "Night Stalkers Don\'t Quit."',
    operations: [
      { year: '1983', name: 'Grenada Invasion', descEN: 'First combat deployment — multiple helicopter insertions', descPT: 'Primeiro desdobramento em combate — múltiplas inserções de helicópteros' },
      { year: '1993', name: 'Battle of Mogadishu', descEN: 'MH-60s and AH-6s in the Black Hawk Down engagement', descPT: 'MH-60s e AH-6s no engajamento do Black Hawk Down' },
      { year: '2001', name: 'Afghanistan Insertion', descEN: 'First long-range clandestine infiltrations into Afghanistan', descPT: 'Primeiras infiltrações clandestinas de longo alcance no Afeganistão' },
      { year: '2011', name: "Operation Neptune's Spear", descEN: "Modified stealth Black Hawks carried DEVGRU into Abbottabad", descPT: 'Black Hawks furtivos modificados transportaram o DEVGRU até Abbottabad' },
      { year: '2019', name: 'Barisha Raid', descEN: 'Provided rotary wing transport for al-Baghdadi operation', descPT: 'Forneceu transporte de asa rotativa para a operação contra al-Baghdadi' },
    ],
    strengthsEN: ['Nap-of-Earth Flight', 'NVIS Night Ops', 'Air Assault', 'FARP Operations', 'Aerial Refueling', 'CAS', 'CSAR'],
    strengthsPT: ['Voo Rasante', 'Operações Noturnas NVIS', 'Assalto Aéreo', 'Operações FARP', 'Reabastecimento Aéreo', 'Apoio Aéreo Aproximado', 'CSAR'],
    stats: [
      { labelEN: 'Established', labelPT: 'Fundação', value: 'October 16, 1981', valuePT: '16 de Outubro de 1981' },
      { labelEN: 'Headquarters', labelPT: 'Sede', value: 'Fort Campbell, KY' },
      { labelEN: 'Battalions', labelPT: 'Batalhões', value: '1st, 2nd, 3rd, 4th Bns', valuePT: '1º, 2º, 3º, 4º Bns' },
      { labelEN: 'Primary Aircraft', labelPT: 'Aeronaves Principais', value: 'MH-60M, AH-6M, MH-47G' },
      { labelEN: 'Motto', labelPT: 'Lema', value: "Night Stalkers Don't Quit", valuePT: 'Night Stalkers Não Desistem' },
    ],
    recentEN: "160th SOAR units are forward-deployed in CENTCOM and AFRICOM areas, providing rotary-wing support to JSOC task forces across Syria, Iraq, and Somalia.",
    recentPT: 'Unidades do 160º SOAR estão desdobradas nas áreas do CENTCOM e AFRICOM, fornecendo suporte de asa rotativa para as forças-tarefa do JSOC na Síria, Iraque e Somália.',
  },
  {
    id: 'isa',
    name: 'Intelligence Support Activity',
    alias: 'Task Force Orange / The Activity',
    tagEN: 'TIER 1 / INTELLIGENCE',
    tagPT: 'TIER 1 / INTELIGÊNCIA',
    branch: 'US Army',
    established: '1980',
    personnel: 'CLASSIFIED',
    command: 'JSOC',
    logo: '/ground-ops/intelligence-support-logo.jpg',
    bg: '/ground-ops/intelligence-support-soldiers.webp',
    shortDescEN: "The most clandestine unit in the US military. Collectors of actionable intelligence that enables every Tier 1 raid — operating deep behind the veil before others are deployed.",
    shortDescPT: 'A unidade mais clandestina das forças armadas dos EUA. Coletores de inteligência que habilitam cada operação Tier 1 — operando nas sombras antes de qualquer outro.',
    overviewEN: "The Intelligence Support Activity (ISA), codenamed Task Force Orange, is the most secretive US military unit. Created in 1980 after intelligence failures during Operation Eagle Claw, the ISA conducts clandestine HUMINT, SIGINT, and technical collection operations to prepare the battlefield before Delta, DEVGRU, or Rangers deploy.",
    overviewPT: 'A Intelligence Support Activity (ISA), com o codinome Força-Tarefa Orange, é a unidade militar americana mais secreta. Criada em 1980 após falhas de inteligência durante a Operação Eagle Claw, a ISA conduz operações clandestinas de HUMINT, SIGINT e coleta técnica para preparar o campo de batalha antes que o Delta, DEVGRU ou Rangers sejam desdobrados.',
    operations: [
      { year: '1989', name: 'Operation Just Cause', descEN: "SIGINT collection pinpointing Noriega's location in Panama", descPT: 'Coleta SIGINT localizando Noriega no Panamá' },
      { year: '1993', name: 'Centra Spike in Colombia', descEN: "Pinpointed Pablo Escobar's location via radio triangulation", descPT: 'Localizou Pablo Escobar via triangulação de rádio' },
      { year: '2001–03', name: 'Afghanistan & Iraq', descEN: 'Clandestine HUMINT networks enabling high-value targeting', descPT: 'Redes HUMINT clandestinas viabilizando ataques a alvos de alto valor' },
      { year: '2006', name: 'Zarqawi Tracking', descEN: 'Signals intelligence contributed to targeting of Abu Musab al-Zarqawi', descPT: 'Inteligência de sinais contribuiu para o ataque a Abu Musab al-Zarqawi' },
      { year: '2011', name: 'UBL Support', descEN: 'Years of HUMINT collection that led to Abbottabad compound identification', descPT: 'Anos de coleta HUMINT que levaram à identificação do complexo em Abbottabad' },
    ],
    strengthsEN: ['HUMINT Collection', 'SIGINT / COMINT', 'Technical Surveillance', 'Clandestine Ops', 'Pattern of Life Analysis', 'Foreign Language'],
    strengthsPT: ['Coleta HUMINT', 'SIGINT / COMINT', 'Vigilância Técnica', 'Operações Clandestinas', 'Análise de Padrão de Vida', 'Línguas Estrangeiras'],
    stats: [
      { labelEN: 'Established', labelPT: 'Fundação', value: '1980 (officially)', valuePT: '1980 (oficialmente)' },
      { labelEN: 'Headquarters', labelPT: 'Sede', value: 'Fort Belvoir, VA (unconfirmed)', valuePT: 'Fort Belvoir, VA (não confirmado)' },
      { labelEN: 'Parent Command', labelPT: 'Comando Superior', value: 'JSOC / DIA' },
      { labelEN: 'Classification', labelPT: 'Classificação', value: 'TOP SECRET / SAP' },
      { labelEN: 'Known Aliases', labelPT: 'Codinomes Conhecidos', value: 'FOG, Centra Spike, Task Force Orange' },
    ],
    recentEN: 'ISA assets are believed to be conducting clandestine collection operations across Syria, Yemen, Somalia, and West Africa in support of JSOC targeting operations.',
    recentPT: 'Acredita-se que ativos da ISA estejam conduzindo operações clandestinas de coleta na Síria, Iêmen, Somália e África Ocidental em apoio às operações de identificação de alvos do JSOC.',
  },
  {
    id: 'sts24',
    name: '24th Special Tactics Squadron',
    alias: '24th STS',
    tagEN: 'TIER 1 / AIR FORCE SOF',
    tagPT: 'TIER 1 / SOF FORÇA AÉREA',
    branch: 'US Air Force',
    established: '1987',
    personnel: '~200 OPS',
    command: 'JSOC / AFSOC',
    logo: '/ground-ops/24th-special-logo.png',
    bg: '/ground-ops/24th-special-soldiers.png',
    shortDescEN: "The Air Force's only Tier 1 unit. Combat controllers, pararescuemen, and special reconnaissance operators assigned directly to JSOC.",
    shortDescPT: 'A única unidade Tier 1 da Força Aérea. Controladores de combate, paraquedistas de resgate e operadores de reconhecimento especial designados diretamente ao JSOC.',
    overviewEN: "The 24th Special Tactics Squadron is the United States Air Force's premier special operations unit and its only Tier 1 formation assigned to JSOC. Its operators — Combat Controllers (CCT), Pararescuemen (PJ), and Special Reconnaissance (SR) airmen — are embedded directly with Delta Force and DEVGRU on the most sensitive missions.",
    overviewPT: 'O 24º Esquadrão de Táticas Especiais é a principal unidade de operações especiais da Força Aérea dos EUA e sua única formação Tier 1 atribuída ao JSOC. Seus operadores — Controladores de Combate (CCT), Paraquedistas de Resgate (PJ) e Especialistas em Reconhecimento (SR) — são integrados diretamente ao Delta Force e ao DEVGRU nas missões mais sensíveis.',
    operations: [
      { year: '1991', name: 'Gulf War Scud Hunts', descEN: 'Combat controllers embedded with Delta hunting mobile Scud launchers', descPT: 'Controladores de combate integrados ao Delta caçando lançadores Scud móveis' },
      { year: '1993', name: 'Battle of Mogadishu', descEN: 'Combat controllers directing close air support during Black Hawk Down', descPT: 'Controladores de combate direcionando apoio aéreo durante o Black Hawk Down' },
      { year: '2001', name: 'Afghanistan Day 1', descEN: 'First Air Force boots on the ground calling in B-52 strikes', descPT: 'Primeiros soldados da Força Aérea em solo chamando ataques de B-52' },
      { year: '2011', name: "Operation Neptune's Spear", descEN: '24th STS CCT embedded with assault team at Abbottabad compound', descPT: 'CCT do 24º STS integrado à equipe de assalto no complexo de Abbottabad' },
      { year: '2019', name: 'Barisha Raid', descEN: 'Special tactics operators provided air traffic and CAS management', descPT: 'Operadores táticos forneceram controle de tráfego aéreo e gerenciamento de CAS' },
    ],
    strengthsEN: ['Combat Air Traffic Control', 'Close Air Support', 'Personnel Recovery', 'HALO/HAHO', 'Special Reconnaissance', 'Trauma Medicine'],
    strengthsPT: ['Controle de Tráfego Aéreo de Combate', 'Apoio Aéreo Aproximado', 'Recuperação de Pessoal', 'HALO/HAHO', 'Reconhecimento Especial', 'Medicina de Trauma'],
    stats: [
      { labelEN: 'Established', labelPT: 'Fundação', value: 'June 22, 1990 (lineage 1987)', valuePT: '22 de Junho de 1990 (linhagem 1987)' },
      { labelEN: 'Headquarters', labelPT: 'Sede', value: 'Pope Army Airfield, Fort Bragg, NC' },
      { labelEN: 'Parent Command', labelPT: 'Comando Superior', value: 'JSOC / 24th SOW / AFSOC' },
      { labelEN: 'Specialties', labelPT: 'Especialidades', value: 'CCT, PJ, SR, TACP' },
      { labelEN: 'Selection Pipeline', labelPT: 'Processo Seletivo', value: '~24–36 months', valuePT: '~24–36 meses' },
    ],
    recentEN: '24th STS operators are currently forward-deployed supporting JSOC task forces in Syria and Somalia, providing combat air traffic control and CAS coordination for direct action missions.',
    recentPT: 'Operadores do 24º STS estão atualmente desdobrados em apoio às forças-tarefa do JSOC na Síria e Somália, fornecendo controle de tráfego aéreo de combate e coordenação de CAS para missões de ação direta.',
  }
]

const resolveAsset = (path?: string) => {
  if (!path) return ''
  if (path.startsWith('http://') || path.startsWith('https://')) return path
  const b = import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL : import.meta.env.BASE_URL + '/'
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  return b + cleanPath
}

// Computed units with correct language applied
const computedUnits = computed(() =>
  units.map(u => ({
    ...u,
    logo: resolveAsset(u.logo),
    bg: resolveAsset(u.bg),
    extraImage: u.extraImage ? resolveAsset(u.extraImage) : undefined,
    tag: lang.value === 'PT' ? u.tagPT : u.tagEN,
    shortDesc: lang.value === 'PT' ? u.shortDescPT : u.shortDescEN,
    overview: lang.value === 'PT' ? u.overviewPT : u.overviewEN,
    recentActivity: lang.value === 'PT' ? u.recentPT : u.recentEN,
    strengths: lang.value === 'PT' ? u.strengthsPT : u.strengthsEN,
    operations: u.operations.map(op => ({
      ...op,
      desc: lang.value === 'PT' ? op.descPT : op.descEN
    }))
  }))
)
</script>

<style scoped>
.film-grain::before {
  content: '';
  position: fixed;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
  pointer-events: none;
  z-index: 1;
}
</style>