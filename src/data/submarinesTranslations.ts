export type Language = 'en' | 'pt'

export interface SubmarineTranslations {
  // Navigation & Badges
  deptTitle: string
  sonarNetwork: string
  onlineStatus: string
  accessLevel: string
  topSecret: string
  backToOps: string
  backToList: string
  switchCountry: string
  
  // Hero Section
  heroBadge: string
  heroTitle: string
  heroSubtitle: string
  nationsCount: string
  globalFleet: string

  // Filters & Search
  searchPlaceholder: string
  allPowers: string
  nuclearTriad: string
  stealthAip: string
  noResults: string
  clearFilters: string
  filterByType: string
  allClasses: string
  ssbnFilter: string
  ssnFilter: string
  conventionalFilter: string

  // Card & Dossier UI
  accessDossier: string
  dossierTag: string
  activeSubmarines: string
  classesCount: string
  basesCount: string
  stealthLevel: string
  primaryCommand: string
  codeLabel: string
  nuclearPower: string

  // Tabs
  tabOverview: string
  tabClasses: string
  tabMissions: string
  tabBases: string

  // Tab 1: Overview
  doctrineTitle: string
  doctrinalFocusLabel: string
  fleetSummaryTitle: string
  totalSubmarines: string
  tacticalCommand: string
  nuclearCapability: string
  yesNuclear: string
  noNuclear: string
  stealthRating: string
  operationalBases: string
  units: string
  installations: string

  // Tab 2: Classes
  displacement: string
  dimensions: string
  submergedSpeed: string
  maxDepth: string
  propulsion: string
  crew: string
  endurance: string
  armament: string
  notableUnits: string
  statusLabel: string

  // Tab 3: Missions
  period: string
  theater: string
  keyObjective: string

  // Tab 4: Bases
  nativeName: string
  location: string
  commandFleet: string
  homeportedClasses: string
}

export const TRANSLATIONS: Record<Language, SubmarineTranslations> = {
  en: {
    deptTitle: 'DEPT 01 // SILENT SERVICE',
    sonarNetwork: 'SONAR GRID:',
    onlineStatus: 'ONLINE',
    accessLevel: 'ACCESS LEVEL:',
    topSecret: 'TOP SECRET // NOFORN',
    backToOps: 'THEATER OF OPERATIONS',
    backToList: 'BACK TO NATIONS LIST',
    switchCountry: 'Switch nation:',

    heroBadge: 'GLOBAL SUBMARINE INTELLIGENCE DOSSIER',
    heroTitle: 'SUBMARINE OPERATIONS',
    heroSubtitle: 'Tactical analysis of the premier global submarine forces. Select a naval power to inspect complete specifications, vessel classes, strategic missions, and naval bases.',
    nationsCount: 'NATIONS',
    globalFleet: 'GLOBAL FLEET',

    searchPlaceholder: 'Search country, class (e.g. Ohio, Borei, Los Angeles, Taigei), weapon or base...',
    allPowers: 'All Naval Powers',
    nuclearTriad: '☢️ Nuclear Triad',
    stealthAip: '⚡ Stealth / AIP',
    noResults: 'No intelligence dossier found for the search criteria.',
    clearFilters: 'Clear search filters',
    filterByType: 'Filter by type:',
    allClasses: 'All Classes',
    ssbnFilter: 'SSBN (Ballistic)',
    ssnFilter: 'SSN / SSGN (Nuclear Attack)',
    conventionalFilter: 'AIP / SSK (Conventional)',

    accessDossier: 'ACCESS DOSSIER',
    dossierTag: 'DOSSIER',
    activeSubmarines: 'Submarines',
    classesCount: 'Classes',
    basesCount: 'Bases',
    stealthLevel: 'Stealth Level',
    primaryCommand: 'Primary Command',
    codeLabel: 'COD:',
    nuclearPower: '☢️ STRATEGIC NUCLEAR POWER',

    tabOverview: '1. Overview & Doctrine',
    tabClasses: '2. Submarine Classes',
    tabMissions: '3. Missions & Operations',
    tabBases: '4. Naval Bases',

    doctrineTitle: 'Strategic Vision & Naval Doctrine',
    doctrinalFocusLabel: 'DOCTRINAL FOCUS:',
    fleetSummaryTitle: 'Fleet Technical Summary',
    totalSubmarines: 'Total Submarines:',
    tacticalCommand: 'Tactical Command:',
    nuclearCapability: 'Nuclear Capability:',
    yesNuclear: 'Yes (Propulsion + Armament)',
    noNuclear: 'No (Conventional AIP)',
    stealthRating: 'Stealth Rating:',
    operationalBases: 'Operational Bases:',
    units: 'units',
    installations: 'Installations',

    displacement: 'DISPLACEMENT',
    dimensions: 'LENGTH / BEAM',
    submergedSpeed: 'SUBMERGED SPEED',
    maxDepth: 'MAX DEPTH',
    propulsion: 'PROPULSION',
    crew: 'CREW',
    endurance: 'ENDURANCE',
    armament: 'Deployed Armament',
    notableUnits: 'Notable Vessels',
    statusLabel: 'STATUS:',

    period: 'PERIOD:',
    theater: 'THEATER:',
    keyObjective: 'KEY OBJECTIVE:',

    nativeName: 'Native Name:',
    location: 'Location:',
    commandFleet: 'Command / Fleet:',
    homeportedClasses: 'Homeported Classes:'
  },
  pt: {
    deptTitle: 'DEPT 01 // SERVIÇO SILENCIOSO',
    sonarNetwork: 'REDE SONAR:',
    onlineStatus: 'ONLINE',
    accessLevel: 'NÍVEL DE ACESSO:',
    topSecret: 'TOP SECRET // NOFORN',
    backToOps: 'TEATRO DE OPERAÇÕES',
    backToList: 'VOLTAR À LISTA DE PAÍSES',
    switchCountry: 'Trocar país:',

    heroBadge: 'DOSSIÊ DE INTELIGÊNCIA SUBMARINA GLOBAL',
    heroTitle: 'OPERAÇÕES SUBMARINAS',
    heroSubtitle: 'Análise tática das principais forças submarinas do planeta. Selecione uma potência naval para acessar a ficha técnica completa, classes de vasos, missões estratégicas e bases operacionais.',
    nationsCount: 'NAÇÕES',
    globalFleet: 'FROTA GLOBAL',

    searchPlaceholder: 'Buscar país, classe (ex: Ohio, Borei, Los Angeles, Taigei), arma ou base naval...',
    allPowers: 'Todas as Potências',
    nuclearTriad: '☢️ Tríade Nuclear',
    stealthAip: '⚡ Stealth / AIP',
    noResults: 'Nenhum dossiê encontrado para os termos da busca.',
    clearFilters: 'Limpar filtros de busca',
    filterByType: 'Filtrar por tipo:',
    allClasses: 'Todas as Classes',
    ssbnFilter: 'SSBN (Balísticos)',
    ssnFilter: 'SSN / SSGN (Ataque Nuclear)',
    conventionalFilter: 'AIP / SSK (Convencional)',

    accessDossier: 'ACESSAR DOSSIÊ',
    dossierTag: 'DOSSIÊ',
    activeSubmarines: 'Submarinos',
    classesCount: 'Classes',
    basesCount: 'Bases',
    stealthLevel: 'Nível Stealth',
    primaryCommand: 'Comando Principal',
    codeLabel: 'CÓD:',
    nuclearPower: '☢️ PODER NUCLEAR ESTRATÉGICO',

    tabOverview: '1. Visão Geral & Doutrina',
    tabClasses: '2. Classes de Submarinos',
    tabMissions: '3. Missões & Operações',
    tabBases: '4. Bases Navais',

    doctrineTitle: 'Doutrina e Visão Estratégica',
    doctrinalFocusLabel: 'Foco Doutrinário:',
    fleetSummaryTitle: 'Ficha Geral da Frota',
    totalSubmarines: 'Total de Submarinos:',
    tacticalCommand: 'Comando Tático:',
    nuclearCapability: 'Capacidade Nuclear:',
    yesNuclear: 'Sim (Propulsão + Armas)',
    noNuclear: 'Não (Convencional AIP)',
    stealthRating: 'Classificação Stealth:',
    operationalBases: 'Bases Operacionais:',
    units: 'unidades',
    installations: 'Instalações',

    displacement: 'DESLOCAMENTO',
    dimensions: 'COMPRIMENTO / BOCA',
    submergedSpeed: 'VELOCIDADE SUBMERSA',
    maxDepth: 'PROFUNDIDADE MÁX.',
    propulsion: 'PROPULSÃO',
    crew: 'TRIPULAÇÃO',
    endurance: 'AUTONOMIA',
    armament: 'Armamento Lançado',
    notableUnits: 'Unidades Em Destaque',
    statusLabel: 'STATUS:',

    period: 'PERÍODO:',
    theater: 'TEATRO:',
    keyObjective: 'OBJETIVO CHAVE:',

    nativeName: 'Nome Nativo:',
    location: 'Localização:',
    commandFleet: 'Comando / Frota:',
    homeportedClasses: 'Classes Sediadas:'
  }
}
