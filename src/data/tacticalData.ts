export interface NavalAsset {
  id: string
  name: string
  type: 'base' | 'patrol' | 'satellite'
  category: 'Naval Station' | 'Carrier Strike Group' | 'Submarine Patrol' | 'Recon Satellite'
  lat: number
  lng: number
  country: string
  details: string
  status: 'ACTIVE' | 'PATROL' | 'ORBITAL' | 'ALERTA MÁXIMO'
  specs: {
    label: string
    value: string
  }[]
}

export interface MilitaryOperation {
  id: string
  codeName: string
  title: string
  year: string
  location: string
  theater: string
  defconRecommended: 1 | 2 | 3 | 4 | 5
  overview: string
  target: string
  intelReport: {
    classification: string
    summary: string
    keyFindings: string[]
  }
  weatherTelemetry: {
    condition: string
    visibility: string
    windSpeed: string
    moonPhase: string
    temperature: string
  }
  opord: {
    phase1: string
    phase2: string
    phase3: string
    outcome: string
  }
  unitsInvolved: string[]
  images?: string[]
}

export interface UnitSpec {
  id: string
  name: string
  type: 'submarine' | 'aircraft'
  classType: string
  country: string
  image: string
  metrics: {
    speed: number // 0 - 100
    stealth: number // 0 - 100
    depthCeiling: number // 0 - 100
    payload: number // 0 - 100
    range: number // 0 - 100
  }
  realSpecs: {
    speed: string
    stealthRcs: string
    depthCeiling: string
    payloadCapacity: string
    rangeKm: string
    armament: string
  }
}

export interface WeaponSystem {
  id: string
  name: string
  category: 'Cruise Missile' | 'SLBM' | 'Anti-Ship Missile' | 'Heavyweight Torpedo' | 'Air-to-Air Missile' | 'Surface-to-Air Missile'
  rangeKm: number
  speedMach: string
  warhead: string
  guidance: string
  platform: string
  description: string
}

// ==========================================
// REAL NAVAL BASES, PATROLS & SATELLITES
// ==========================================
export const REAL_TACTICAL_ASSETS: NavalAsset[] = [
  {
    id: 'norfolk',
    name: 'Naval Station Norfolk',
    type: 'base',
    category: 'Naval Station',
    lat: 36.9467,
    lng: -76.3033,
    country: 'USA',
    details: 'Maior base naval do mundo. Sede da Frota do Atlântico e do Comando de Forças da Marinha dos EUA.',
    status: 'ACTIVE',
    specs: [
      { label: 'Píeres de Porta-Aviões', value: '14' },
      { label: 'Aeronaves Baseadas', value: '75+' },
      { label: 'Pessoal Operacional', value: '54.000+' }
    ]
  },
  {
    id: 'yokosuka',
    name: 'Commander Fleet Activities Yokosuka',
    type: 'base',
    category: 'Naval Station',
    lat: 35.2908,
    lng: 139.6739,
    country: 'USA / JP',
    details: 'Principal base avançada da 7ª Frota dos EUA no Pacífico Ocidental. Base do porta-aviões USS Ronald Reagan.',
    status: 'ACTIVE',
    specs: [
      { label: 'Frota Alocada', value: '7ª Frota' },
      { label: 'Área Operacional', value: 'Indo-Pacífico' },
      { label: 'Capacidade de Doca Seca', value: 'Suporte CVN' }
    ]
  },
  {
    id: 'pearl-harbor',
    name: 'Joint Base Pearl Harbor-Hickam',
    type: 'base',
    category: 'Naval Station',
    lat: 21.3493,
    lng: -157.9439,
    country: 'USA',
    details: 'Quartel-general da Frota do Pacífico dos EUA e centro estratégico de submarinos de ataque da Classe Virginia.',
    status: 'ACTIVE',
    specs: [
      { label: 'Esquadrão Submarino', value: 'SUBRON 1 & 7' },
      { label: 'Submarinos Ativos', value: '18 SSN' },
      { label: 'Área de Cobertura', value: 'Pacífico Central' }
    ]
  },
  {
    id: 'diego-garcia',
    name: 'NSF Diego Garcia',
    type: 'base',
    category: 'Naval Station',
    lat: -7.3195,
    lng: 72.4228,
    country: 'UK / USA',
    details: 'Atol estratégico no Oceano Índico. Base avançada para submarinos SSGN com mísseis Tomahawk e bombardeiros B-2 Spirit.',
    status: 'ACTIVE',
    specs: [
      { label: 'Pista Principal', value: '3.650m' },
      { label: 'Suporte SSGN', value: 'Tender Submarino' },
      { label: 'Área Operacional', value: 'Oceano Índico / Oriente Médio' }
    ]
  },
  {
    id: 'rota',
    name: 'Naval Station Rota',
    type: 'base',
    category: 'Naval Station',
    lat: 36.6439,
    lng: -6.3486,
    country: 'ESP / USA',
    details: 'Base naval do Mar da Andaluzia. Hub estratégico para os destruidores AEGIS do sistema de defesa antimíssil da OTAN.',
    status: 'ACTIVE',
    specs: [
      { label: 'Destruidores AEGIS', value: '4 Arleigh Burke' },
      { label: 'Teatro de Ação', value: 'Mediterrâneo / Atlântico' },
      { label: 'Integração', value: 'Comando OTAN' }
    ]
  },
  {
    id: 'faslane',
    name: 'HMNB Clyde (Faslane)',
    type: 'base',
    category: 'Naval Station',
    lat: 56.0667,
    lng: -4.8167,
    country: 'UK',
    details: 'Quartel-general da dissuasão nuclear do Reino Unido. Base dos submarinos SSBN da Classe Vanguard armados com Trident II.',
    status: 'ACTIVE',
    specs: [
      { label: 'Frota SSBN', value: '4 Vanguard Class' },
      { label: 'Dispositivo Nuclear', value: 'Trident D5' },
      { label: 'Operação', value: 'CASD (Continuous At-Sea Deterrent)' }
    ]
  },
  // ---- USA Submarine Bases ----
  {
    id: 'kings-bay',
    name: 'Naval Submarine Base Kings Bay',
    type: 'base',
    category: 'Naval Station',
    lat: 30.7997,
    lng: -81.5283,
    country: 'USA',
    details: 'Principal base de submarinos balísticos da Costa Leste dos EUA, equipada com instalações de manutenção nuclear e armazenamento de mísseis Trident II.',
    status: 'ACTIVE',
    specs: [
      { label: 'Grupo Submarino', value: 'SUBGROUP 10' },
      { label: 'Frota', value: 'Atlântico' },
      { label: 'Classes Baseadas', value: 'Ohio SSBN / SSGN' }
    ]
  },
  {
    id: 'kitsap-bangor',
    name: 'Naval Base Kitsap - Bangor',
    type: 'base',
    category: 'Naval Station',
    lat: 47.7206,
    lng: -122.7175,
    country: 'USA',
    details: 'Maior arsenal de armas nucleares implantadas dos EUA. Sede dos SSBNs do Pacífico e do USS Jimmy Carter (SSN-23).',
    status: 'ACTIVE',
    specs: [
      { label: 'Grupo Submarino', value: 'SUBGROUP 9' },
      { label: 'Frota', value: 'Pacífico' },
      { label: 'Classes Baseadas', value: 'Ohio SSBN + Seawolf SSN' }
    ]
  },
  {
    id: 'new-london',
    name: 'Naval Submarine Base New London',
    type: 'base',
    category: 'Naval Station',
    lat: 41.3981,
    lng: -72.0869,
    country: 'USA',
    details: 'Conhecida como "The Home of the Submarine Force". Primeira base de submarinos da Marinha dos EUA e centro de treinamento tático.',
    status: 'ACTIVE',
    specs: [
      { label: 'Esquadrão', value: 'SUBSQUADRON 2, 4, 12' },
      { label: 'Frota', value: 'Atlântico' },
      { label: 'Classes Baseadas', value: 'Virginia + Los Angeles SSN' }
    ]
  },
  {
    id: 'point-loma',
    name: 'Naval Base Point Loma',
    type: 'base',
    category: 'Naval Station',
    lat: 32.7028,
    lng: -117.2375,
    country: 'USA',
    details: 'Hub de submarinos de ataque do Sul da Califórnia, sede do Esquadrão Submarino 11 e do Comando de Resgate Submarino da Marinha dos EUA.',
    status: 'ACTIVE',
    specs: [
      { label: 'Esquadrão', value: 'SUBRON 11' },
      { label: 'Frota', value: 'Pacífico' },
      { label: 'Classes Baseadas', value: 'Los Angeles + Virginia SSN' }
    ]
  },
  // ---- Russia Submarine Bases ----
  {
    id: 'polyarny',
    name: 'Base Naval de Polyarny (Kola)',
    type: 'base',
    category: 'Naval Station',
    lat: 69.1983,
    lng: 33.4550,
    country: 'RUS',
    details: 'Base naval histórica na Península de Kola, sede da 161ª Brigada de Submarinos da Frota do Norte com acesso livre de gelo ao Mar de Barents.',
    status: 'ACTIVE',
    specs: [
      { label: 'Frota', value: 'Frota do Norte' },
      { label: 'Brigada', value: '161ª Brigada de Submarinos' },
      { label: 'Classes Baseadas', value: 'Kilo + Akula Class' }
    ]
  },
  {
    id: 'gadzhiyevo',
    name: 'Base Submarina de Gadzhiyevo (Kola)',
    type: 'base',
    category: 'Naval Station',
    lat: 69.2556,
    lng: 33.3472,
    country: 'RUS',
    details: 'Fortaleza de submarinos nucleares balísticos da Frota do Norte Russa na Península de Kola, nos fiordes protegidos do Mar de Barents.',
    status: 'ACTIVE',
    specs: [
      { label: 'Frota', value: 'Frota do Norte' },
      { label: 'Divisão', value: '31ª Divisão de Submarinos' },
      { label: 'Classes Baseadas', value: 'Borei SSBN + Yasen-M SSN' }
    ]
  },
  {
    id: 'zapadnaya-litsa',
    name: 'Base Naval Zapadnaya Litsa (Kola)',
    type: 'base',
    category: 'Naval Station',
    lat: 69.4000,
    lng: 32.4333,
    country: 'RUS',
    details: 'Fortaleza de submarinos nucleares mais ocidental da Frota do Norte, a apenas 45 km da fronteira com a Noruega.',
    status: 'ACTIVE',
    specs: [
      { label: 'Frota', value: 'Frota do Norte' },
      { label: 'Divisão', value: '11ª Divisão de Submarinos' },
      { label: 'Classes Baseadas', value: 'Yasen-M + Oscar II SSGN' }
    ]
  },
  {
    id: 'vilyuchinsk',
    name: 'Base Submarina de Vilyuchinsk (Kamchatka)',
    type: 'base',
    category: 'Naval Station',
    lat: 52.9167,
    lng: 158.5000,
    country: 'RUS',
    details: 'Bastião estratégico da Marinha Russa na baía de Avacha, com acesso direto às águas profundas do Pacífico Norte.',
    status: 'ACTIVE',
    specs: [
      { label: 'Frota', value: 'Frota do Pacífico' },
      { label: 'Divisão', value: '25ª e 10ª Divisão de Submarinos' },
      { label: 'Classes Baseadas', value: 'Borei-A + Yasen-M + Oscar II' }
    ]
  },
  {
    id: 'severodvinsk',
    name: 'Estaleiro e Base Naval de Severodvinsk (Sevmash)',
    type: 'base',
    category: 'Naval Station',
    lat: 64.5667,
    lng: 39.8167,
    country: 'RUS',
    details: 'Maior complexo de construção de submarinos nucleares do mundo (Estaleiro Sevmash), onde são fabricados os Borei, Yasen e Belgorod.',
    status: 'ACTIVE',
    specs: [
      { label: 'Frota', value: 'Frota do Norte' },
      { label: 'Função', value: 'Construção + Testes Navais' },
      { label: 'Classes Produzidas', value: 'Belgorod + Borei-A + Yasen-M' }
    ]
  },
  // ---- South Korea Submarine Bases ----
  {
    id: 'jinhae-sub-base',
    name: 'Base Naval de Jinhae (Comando Submarino)',
    type: 'base',
    category: 'Naval Station',
    lat: 35.1458,
    lng: 128.6528,
    country: 'KOR',
    details: 'Sede histórica do Comando de Submarinos da Marinha da Coreia do Sul, com centros de simulação, docas secas e teste de torpedos.',
    status: 'ACTIVE',
    specs: [
      { label: 'Frota', value: 'ROKN Submarine Force Command' },
      { label: 'Classes Baseadas', value: 'KSS-III + KSS-II' },
      { label: 'País', value: 'Coreia do Sul' }
    ]
  },
  {
    id: 'jeju-sub-base',
    name: 'Base Naval de Jeju',
    type: 'base',
    category: 'Naval Station',
    lat: 33.2389,
    lng: 126.4931,
    country: 'KOR',
    details: 'Base naval estratégica de águas profundas guardando as rotas marítimas do sul e acessos ao Mar da China Oriental.',
    status: 'ACTIVE',
    specs: [
      { label: 'Frota', value: 'ROKN Strategic Task Flotilla' },
      { label: 'Classes Baseadas', value: 'KSS-III Dosan Ahn Changho' },
      { label: 'País', value: 'Coreia do Sul' }
    ]
  },
  {
    id: 'busan-sub-base',
    name: 'Base Naval de Busan (Sede da Frota)',
    type: 'base',
    category: 'Naval Station',
    lat: 35.1042,
    lng: 129.1083,
    country: 'KOR',
    details: 'Principal sede operacional de frota da Marinha Sul-Coreana e porto primário para exercícios aliados internacionais.',
    status: 'ACTIVE',
    specs: [
      { label: 'Frota', value: 'Republic of Korea Fleet Command' },
      { label: 'Classes Baseadas', value: 'KSS-III + KSS-II' },
      { label: 'País', value: 'Coreia do Sul' }
    ]
  },
  // ---- Germany Submarine Bases ----
  {
    id: 'eckernforde-base',
    name: 'Base Naval de Eckernförde (1. Ubootgeschwader)',
    type: 'base',
    category: 'Naval Station',
    lat: 54.4667,
    lng: 9.8333,
    country: 'DEU',
    details: 'Sede do 1º Esquadrão de Submarinos da Marinha Alemã, centro de treinamento e unidade de mergulhadores de combate Kampfschwimmer.',
    status: 'ACTIVE',
    specs: [
      { label: 'Comando', value: 'Einsatzflottille 1' },
      { label: 'Classes Baseadas', value: 'Type 212A + Type 212CD' },
      { label: 'País', value: 'Alemanha' }
    ]
  },
  {
    id: 'kiel-tkms',
    name: 'Estaleiro Naval de Kiel (TKMS)',
    type: 'base',
    category: 'Naval Station',
    lat: 54.3167,
    lng: 10.1500,
    country: 'DEU',
    details: 'Centro mundial de inovação e construção de submarinos não-nucleares (Estaleiro ThyssenKrupp Marine Systems).',
    status: 'ACTIVE',
    specs: [
      { label: 'Função', value: 'Construção + Testes' },
      { label: 'Classes Produzidas', value: 'Type 212A + 212CD' },
      { label: 'País', value: 'Alemanha' }
    ]
  },
  {
    id: 'wilhelmshaven-base',
    name: 'Base Naval de Wilhelmshaven',
    type: 'base',
    category: 'Naval Station',
    lat: 53.5167,
    lng: 8.1333,
    country: 'DEU',
    details: 'Maior base naval da Marinha Alemã, na costa do Mar do Norte, fornecendo manutenção pesada e logística para a frota.',
    status: 'ACTIVE',
    specs: [
      { label: 'Comando', value: 'Einsatzflottille 2' },
      { label: 'Função', value: 'Manutenção + Logística' },
      { label: 'País', value: 'Alemanha' }
    ]
  },
  // ---- UK Submarine Bases ----
  {
    id: 'devonport',
    name: 'HMNB Devonport',
    type: 'base',
    category: 'Naval Station',
    lat: 50.3761,
    lng: -4.1831,
    country: 'UK',
    details: 'Maior base naval da Europa Ocidental. Docas secas para manutenção pesada e refit nuclear de submarinos da Royal Navy.',
    status: 'ACTIVE',
    specs: [
      { label: 'Função', value: 'Refit Nuclear + Manutenção' },
      { label: 'Classes Baseadas', value: 'Astute SSN + Vanguard Refit' },
      { label: 'País', value: 'Reino Unido' }
    ]
  },
  // ---- France Submarine Bases ----
  {
    id: 'ile-longue',
    name: 'Base Naval de Île Longue (Brest)',
    type: 'base',
    category: 'Naval Station',
    lat: 48.3056,
    lng: -4.5069,
    country: 'FRA',
    details: 'Santuário ultra-defendido no noroeste da França, dedicado ao abrigo, manutenção e carregamento de mísseis balísticos nucleares M51.',
    status: 'ACTIVE',
    specs: [
      { label: 'Comando', value: 'FOST (Force Océanique Stratégique)' },
      { label: 'Classes Baseadas', value: 'Le Triomphant SNLE 2G' },
      { label: 'País', value: 'França' }
    ]
  },
  {
    id: 'toulon',
    name: 'Base Naval de Toulon (Arsenal de Toulon)',
    type: 'base',
    category: 'Naval Station',
    lat: 43.1167,
    lng: 5.9167,
    country: 'FRA',
    details: 'Principal base naval militar da França no Mediterrâneo, sede dos submarinos nucleares de ataque (SNA) e do porta-aviões Charles de Gaulle.',
    status: 'ACTIVE',
    specs: [
      { label: 'Comando', value: 'Escadrille des SNA (ENA)' },
      { label: 'Classes Baseadas', value: 'Suffren + Rubis SNA' },
      { label: 'País', value: 'França' }
    ]
  },
  // ---- China Submarine Bases ----
  {
    id: 'yulin-hainan',
    name: 'Base Submarina de Yulin (Longpo / Hainan)',
    type: 'base',
    category: 'Naval Station',
    lat: 18.2028,
    lng: 109.6931,
    country: 'CHN',
    details: 'Instalação estratégica com túneis subaquáticos nas montanhas de Hainan, permitindo entrada e saída sem detecção por satélite.',
    status: 'ACTIVE',
    specs: [
      { label: 'Comando', value: 'PLAN Teatro do Sul' },
      { label: 'Classes Baseadas', value: 'Type 094 Jin SSBN + Type 093 SSN' },
      { label: 'País', value: 'China' }
    ]
  },
  {
    id: 'qingdao-sub-base',
    name: 'Base Submarina de Guzhenkou (Qingdao)',
    type: 'base',
    category: 'Naval Station',
    lat: 35.7278,
    lng: 119.9958,
    country: 'CHN',
    details: 'Base militar da Frota do Norte encarregada de guardar as abordagens marítimas de Pequim e monitorar a península coreana.',
    status: 'ACTIVE',
    specs: [
      { label: 'Comando', value: 'PLAN Teatro do Norte' },
      { label: 'Classes Baseadas', value: 'Type 093 SSN + Type 039A AIP' },
      { label: 'País', value: 'China' }
    ]
  },
  {
    id: 'zhoushan-base',
    name: 'Base Naval de Zhoushan (Ningbo)',
    type: 'base',
    category: 'Naval Station',
    lat: 29.9833,
    lng: 122.2000,
    country: 'CHN',
    details: 'Principal base de submarinos do Teatro Oriental voltada para o Mar da China Oriental e Estreito de Taiwan.',
    status: 'ACTIVE',
    specs: [
      { label: 'Comando', value: 'PLAN Teatro Oriental' },
      { label: 'Classes Baseadas', value: 'Type 039A Yuan AIP + Kilo' },
      { label: 'País', value: 'China' }
    ]
  },
  // ---- Japan Submarine Bases ----
  {
    id: 'kure-base',
    name: 'Base Naval de Kure (Submarine District)',
    type: 'base',
    category: 'Naval Station',
    lat: 34.2333,
    lng: 132.5500,
    country: 'JPN',
    details: 'Histórica base naval no Mar Interior de Seto, berço da flotilha de submarinos da JMSDF (Submarine Flotilla 1).',
    status: 'ACTIVE',
    specs: [
      { label: 'Flotilha', value: 'Submarine Flotilla 1' },
      { label: 'Classes Baseadas', value: 'Taigei + Soryu Class' },
      { label: 'País', value: 'Japão' }
    ]
  },
  {
    id: 'yokosuka-jmsdf',
    name: 'Base Naval de Yokosuka (JMSDF)',
    type: 'base',
    category: 'Naval Station',
    lat: 35.2833,
    lng: 139.6500,
    country: 'JPN',
    details: 'Sede do Comando da Força de Submarinos da JMSDF, guardando a entrada estratégica da Baía de Tóquio.',
    status: 'ACTIVE',
    specs: [
      { label: 'Flotilha', value: 'Submarine Flotilla 2' },
      { label: 'Classes Baseadas', value: 'Taigei + Soryu + Oyashio' },
      { label: 'País', value: 'Japão' }
    ]
  },
  // ---- India Submarine Bases ----
  {
    id: 'rambilli-base',
    name: 'INS Varsha / Base Naval de Rambilli',
    type: 'base',
    category: 'Naval Station',
    lat: 17.4333,
    lng: 82.9167,
    country: 'IND',
    details: 'Base de submarinos nucleares ultra-secreta na costa leste da Índia, esculpida em montanhas costeiras com túneis subterrâneos.',
    status: 'ACTIVE',
    specs: [
      { label: 'Comando', value: 'Eastern Naval Command' },
      { label: 'Classes Baseadas', value: 'Arihant SSBN' },
      { label: 'País', value: 'Índia' }
    ]
  },
  {
    id: 'visakhapatnam',
    name: 'Base Naval de Visakhapatnam (INS Virbahu)',
    type: 'base',
    category: 'Naval Station',
    lat: 17.6833,
    lng: 83.2833,
    country: 'IND',
    details: 'Sede dos Submarinos do Comando Naval Oriental, equipada com a escola de treinamento de submarinistas INS Satavahana.',
    status: 'ACTIVE',
    specs: [
      { label: 'Comando', value: 'Eastern Naval Command' },
      { label: 'Classes Baseadas', value: 'Kalvari P-75 + Arihant SSBN' },
      { label: 'País', value: 'Índia' }
    ]
  },
  {
    id: 'mumbai-dockyard',
    name: 'Arsenal Naval de Mumbai (INS Vajrabahu)',
    type: 'base',
    category: 'Naval Station',
    lat: 18.9167,
    lng: 72.8333,
    country: 'IND',
    details: 'Principal base de submarinos da Frota Ocidental e complexo de construção naval Mazagon Dock Limited.',
    status: 'ACTIVE',
    specs: [
      { label: 'Comando', value: 'Western Naval Command' },
      { label: 'Classes Baseadas', value: 'Kalvari P-75 + Sindhughosh' },
      { label: 'País', value: 'Índia' }
    ]
  },
  // ==========================================
  // OPERATIONAL CARRIER STRIKE GROUPS (PORTA-AVIÕES EM OPERAÇÃO)
  // ==========================================
  {
    id: 'csg-ford',
    name: 'Carrier Strike Group 12 (USS Gerald R. Ford - CVN-78)',
    type: 'patrol',
    category: 'Carrier Strike Group',
    lat: 25.5000,
    lng: 56.2500,
    country: 'USA',
    details: 'Maior e mais avançado superporta-aviões nuclear do mundo. Equipado com catapultas eletromagnéticas EMALS e radar AESA DBR.',
    status: 'ALERTA MÁXIMO',
    specs: [
      { label: 'Capitania', value: 'USS Gerald R. Ford (CVN-78)' },
      { label: 'Escolta', value: '3 Destroyers AEGIS + 1 Submarino SSN' },
      { label: 'Asa Aérea', value: '75+ Caças F-35C & F/A-18E/F' },
      { label: 'Propulsão', value: '2x Reatores Nucleares A1B' },
      { label: 'Deslocamento', value: '100.000 toneladas' }
    ]
  },
  {
    id: 'csg-eisenhower',
    name: 'Carrier Strike Group 2 (USS Dwight D. Eisenhower - CVN-69)',
    type: 'patrol',
    category: 'Carrier Strike Group',
    lat: 15.2000,
    lng: 41.8000,
    country: 'USA',
    details: 'Grupo de Combate nuclear desdobrado no Mar Vermelho e Golfo de Áden em operações de defesa contra enxames de drones e mísseis antinavio.',
    status: 'ALERTA MÁXIMO',
    specs: [
      { label: 'Capitania', value: 'USS Dwight D. Eisenhower (CVN-69)' },
      { label: 'Escolta', value: 'USS Philippine Sea (CG-58) + 2 DDGs' },
      { label: 'Asa Aérea', value: 'Carrier Air Wing 3 (CVW-3)' },
      { label: 'Armamento', value: 'Mísseis ESSM + RAM + Phalanx CIWS' }
    ]
  },
  {
    id: 'csg-reagan',
    name: 'Carrier Strike Group 5 (USS Ronald Reagan - CVN-76)',
    type: 'patrol',
    category: 'Carrier Strike Group',
    lat: 22.4000,
    lng: 135.2000,
    country: 'USA / JP',
    details: 'Ponta de lança de projeção aeronaval da 7ª Frota dos EUA patrulhando as águas estratégicas do Mar das Filipinas e Pacífico Ocidental.',
    status: 'PATROL',
    specs: [
      { label: 'Capitania', value: 'USS Ronald Reagan (CVN-76)' },
      { label: 'Área Operacional', value: '7ª Frota / Mar de Filipinas' },
      { label: 'Escolta', value: 'Cruzeiros Ticonderoga + Destroyers Arleigh Burke' },
      { label: 'Asa Aérea', value: 'CVW-5 (F/A-18 Super Hornet + E-2D Hawkeye)' }
    ]
  },
  {
    id: 'csg-vinson',
    name: 'Carrier Strike Group 1 (USS Carl Vinson - CVN-70)',
    type: 'patrol',
    category: 'Carrier Strike Group',
    lat: 24.5000,
    lng: 165.0000,
    country: 'USA',
    details: 'Superporta-aviões de propulsão nuclear da classe Nimitz operando no Pacífico Central integrado à 3ª Frota.',
    status: 'PATROL',
    specs: [
      { label: 'Capitania', value: 'USS Carl Vinson (CVN-70)' },
      { label: 'Capacidade Stealth', value: 'Esquadrão F-35C Lightning II' },
      { label: 'Submarino de Escolta', value: 'Virginia-Class SSN' },
      { label: 'Asa Aérea', value: 'Carrier Air Wing 2 (CVW-2)' }
    ]
  },
  {
    id: 'csg-nimitz',
    name: 'Carrier Strike Group 11 (USS Nimitz - CVN-68)',
    type: 'patrol',
    category: 'Carrier Strike Group',
    lat: 32.1000,
    lng: -128.5000,
    country: 'USA',
    details: 'Porta-aviões líder da classe Nimitz em exercícios operacionais de prontidão tática no Oceano Pacífico Oriental.',
    status: 'ACTIVE',
    specs: [
      { label: 'Capitania', value: 'USS Nimitz (CVN-68)' },
      { label: 'Comando', value: 'US 3rd Fleet / Pacific Fleet' },
      { label: 'Asa Aérea', value: 'CVW-17 (65+ Aeronaves)' },
      { label: 'Velocidade Máxima', value: '31.5 nós' }
    ]
  },
  {
    id: 'csg-lincoln',
    name: 'Carrier Strike Group 3 (USS Abraham Lincoln - CVN-72)',
    type: 'patrol',
    category: 'Carrier Strike Group',
    lat: 19.4000,
    lng: 63.8000,
    country: 'USA',
    details: 'Superporta-aviões nuclear operando no Mar da Arábia sob o Comando Central dos EUA (CENTCOM) com esquadrões F-35C.',
    status: 'ALERTA MÁXIMO',
    specs: [
      { label: 'Capitania', value: 'USS Abraham Lincoln (CVN-72)' },
      { label: 'Área de Ação', value: 'CENTCOM / Mar da Arábia' },
      { label: 'Asa Aérea', value: 'VMFA-314 (F-35C) & VFA-41 (F/A-18F)' },
      { label: 'Escolta', value: 'Destroyer Squadron 21 (DESRON 21)' }
    ]
  },
  {
    id: 'csg-washington',
    name: 'Carrier Strike Group 5 (USS George Washington - CVN-73)',
    type: 'patrol',
    category: 'Carrier Strike Group',
    lat: 34.1000,
    lng: 140.2000,
    country: 'USA / JP',
    details: 'Porta-aviões nuclear de desdobramento avançado sediado em Yokosuka para vigilância do Estreito do Japão e Indo-Pacífico.',
    status: 'ACTIVE',
    specs: [
      { label: 'Capitania', value: 'USS George Washington (CVN-73)' },
      { label: 'Base Avançada', value: 'Yokosuka, Japão' },
      { label: 'Asa Aérea', value: 'Carrier Air Wing 5 (CVW-5)' },
      { label: 'Catapultas', value: '4x Catapultas a Vapor C-13-1' }
    ]
  },
  {
    id: 'csg-truman',
    name: 'Carrier Strike Group 8 (USS Harry S. Truman - CVN-75)',
    type: 'patrol',
    category: 'Carrier Strike Group',
    lat: 36.8000,
    lng: 15.5000,
    country: 'USA / NATO',
    details: 'Grupo de combate de porta-aviões nuclear desdobrado no Mar Mediterrâneo em apoio a missões de segurança da OTAN.',
    status: 'PATROL',
    specs: [
      { label: 'Capitania', value: 'USS Harry S. Truman (CVN-75)' },
      { label: 'Teatro', value: 'Mediterrâneo / 6ª Frota' },
      { label: 'Asa Aérea', value: 'Carrier Air Wing 1 (CVW-1)' },
      { label: 'Escolta', value: 'USS Gettysburg (CG-64) + 3 DDGs' }
    ]
  },
  {
    id: 'csg-bush',
    name: 'Carrier Strike Group 10 (USS George H.W. Bush - CVN-77)',
    type: 'patrol',
    category: 'Carrier Strike Group',
    lat: 35.5000,
    lng: -60.2000,
    country: 'USA',
    details: 'O mais novo superporta-aviões da classe Nimitz, com ilha redesenhada e antenas furtivas, operando no Atlântico Norte.',
    status: 'PATROL',
    specs: [
      { label: 'Capitania', value: 'USS George H.W. Bush (CVN-77)' },
      { label: 'Comando', value: 'US 2nd Fleet / Atlantic' },
      { label: 'Asa Aérea', value: 'CVW-7' },
      { label: 'Tripulação', value: '5.680 tripulantes' }
    ]
  },
  {
    id: 'csg-america',
    name: 'Amphibious Ready Group (USS America - LHA-6)',
    type: 'patrol',
    category: 'Carrier Strike Group',
    lat: 28.3000,
    lng: 129.5000,
    country: 'USA',
    details: 'Navio de assalto anfíbio de convés contínuo otimizado para operações aéreas como porta-aviões leve de caças F-35B stealth.',
    status: 'PATROL',
    specs: [
      { label: 'Capitania', value: 'USS America (LHA-6)' },
      { label: 'Doutrina', value: 'Lightning Carrier (Caças F-35B)' },
      { label: 'Asa Aérea', value: '20x F-35B + MV-22B Osprey' },
      { label: 'Força Embarcada', value: '31st Marine Expeditionary Unit' }
    ]
  },
  {
    id: 'csg-queen-elizabeth',
    name: 'UK Carrier Strike Group (HMS Queen Elizabeth - R08)',
    type: 'patrol',
    category: 'Carrier Strike Group',
    lat: 64.2000,
    lng: 5.5000,
    country: 'UK / NATO',
    details: 'Porta-aviões capitânia da Royal Navy com arquitetura de duas ilhas operando no Mar da Noruega com caças F-35B stealth.',
    status: 'PATROL',
    specs: [
      { label: 'Capitania', value: 'HMS Queen Elizabeth (R08)' },
      { label: 'Asa Aérea', value: '24x Caças F-35B Lightning II' },
      { label: 'Escolta', value: 'HMS Diamond (Type 45) + Submarino Astute' },
      { label: 'Deslocamento', value: '65.000 toneladas' }
    ]
  },
  {
    id: 'csg-prince-of-wales',
    name: 'UK Carrier Strike Group (HMS Prince of Wales - R09)',
    type: 'patrol',
    category: 'Carrier Strike Group',
    lat: 59.8000,
    lng: 0.5000,
    country: 'UK / NATO',
    details: 'Segundo superporta-aviões da classe Queen Elizabeth, servindo como nau-capitânia da Força de Resposta da OTAN no Atlântico Norte.',
    status: 'ACTIVE',
    specs: [
      { label: 'Capitania', value: 'HMS Prince of Wales (R09)' },
      { label: 'Comando', value: 'NATO High Readiness Force' },
      { label: 'Asa Aérea', value: 'F-35B + Helicópteros Merlin HM2' },
      { label: 'Convés de Voo', value: '280m de comprimento' }
    ]
  },
  {
    id: 'csg-charles-de-gaulle',
    name: 'Task Force 473 (Porta-Aviões Charles de Gaulle - R91)',
    type: 'patrol',
    category: 'Carrier Strike Group',
    lat: 34.5000,
    lng: 28.2000,
    country: 'FRA / NATO',
    details: 'Único porta-aviões de propulsão nuclear da Europa, capitaneando a Task Force 473 no Mediterrâneo Oriental com caças Rafale Marine.',
    status: 'PATROL',
    specs: [
      { label: 'Capitania', value: 'Charles de Gaulle (R91)' },
      { label: 'Asa Aérea', value: '30x Rafale Marine F3-R + E-2C Hawkeye' },
      { label: 'Escolta', value: 'Fragatas Forbin (Horizon) + SNA Suffren' },
      { label: 'Propulsão', value: '2x Reatores Nucleares K15' }
    ]
  },
  {
    id: 'csg-shandong',
    name: 'PLAN Carrier Strike Group (Shandong - Type 002)',
    type: 'patrol',
    category: 'Carrier Strike Group',
    lat: 19.8000,
    lng: 118.4000,
    country: 'CHN',
    details: 'Primeiro porta-aviões construído domesticamente na China, realizando exercícios de combate e projeção aeronaval no Mar do Sul da China.',
    status: 'ALERTA MÁXIMO',
    specs: [
      { label: 'Capitania', value: 'Shandong (17 - Type 002)' },
      { label: 'Asa Aérea', value: '36x Caças J-15 Flying Shark' },
      { label: 'Escolta', value: 'Destroyers Type 055 (Renhai) + Type 052D' },
      { label: 'Sistema de Lançamento', value: 'Ski-Jump STOBAR' }
    ]
  },
  {
    id: 'csg-liaoning',
    name: 'PLAN Carrier Task Force 16 (Liaoning - Type 001)',
    type: 'patrol',
    category: 'Carrier Strike Group',
    lat: 27.5000,
    lng: 126.8000,
    country: 'CHN',
    details: 'Porta-aviões da Marinha Chinesa atuando no Mar da China Oriental e passagem pelas Ilhas Miyako para patrulha do Pacífico.',
    status: 'PATROL',
    specs: [
      { label: 'Capitania', value: 'Liaoning (16 - Type 001)' },
      { label: 'Asa Aérea', value: '24x J-15 + Helicópteros Z-18/Z-9' },
      { label: 'Comando', value: 'PLAN Frota do Teatro Norte / Leste' },
      { label: 'Deslocamento', value: '60.000 toneladas' }
    ]
  },
  {
    id: 'csg-fujian',
    name: 'PLAN Supercarrier Group (Fujian - Type 003)',
    type: 'patrol',
    category: 'Carrier Strike Group',
    lat: 31.8000,
    lng: 123.5000,
    country: 'CHN',
    details: 'O mais avançado superporta-aviões da Ásia, equipado com 3 catapultas eletromagnéticas (EMALS) para caças stealth J-35 e aeronaves KJ-600.',
    status: 'ACTIVE',
    specs: [
      { label: 'Capitania', value: 'Fujian (18 - Type 003)' },
      { label: 'Lançamento', value: '3x Catapultas Eletromagnéticas EMALS' },
      { label: 'Asa Aérea', value: 'Caças Stealth J-35 + J-15B + AEW&C KJ-600' },
      { label: 'Deslocamento', value: '80.000+ toneladas' }
    ]
  },
  {
    id: 'csg-vikrant',
    name: 'Indian Carrier Task Group (INS Vikrant - R11)',
    type: 'patrol',
    category: 'Carrier Strike Group',
    lat: 14.8000,
    lng: 71.5000,
    country: 'IND',
    details: 'Primeiro porta-aviões de fabricação própria indiana (IAC-1), operando no Mar da Arábia para domínio das rotas do Oceano Índico.',
    status: 'PATROL',
    specs: [
      { label: 'Capitania', value: 'INS Vikrant (R11)' },
      { label: 'Asa Aérea', value: '26x MiG-29K + Helicópteros MH-60R Seahawk' },
      { label: 'Escolta', value: 'INS Visakhapatnam (P15B) + Fragatas Talwar' },
      { label: 'Alcance', value: '7.500 milhas náuticas' }
    ]
  },
  {
    id: 'csg-vikramaditya',
    name: 'Indian Carrier Battle Group (INS Vikramaditya - R33)',
    type: 'patrol',
    category: 'Carrier Strike Group',
    lat: 12.2000,
    lng: 86.5000,
    country: 'IND',
    details: 'Porta-aviões STOBAR de grande porte da Marinha Indiana patrulhando o Golfo de Bengala e as passagens do Estreito de Malaca.',
    status: 'PATROL',
    specs: [
      { label: 'Capitania', value: 'INS Vikramaditya (R33)' },
      { label: 'Asa Aérea', value: '30x Caças MiG-29K & Kamov Ka-31' },
      { label: 'Base de Origem', value: 'INS Kadamba (Karwar)' },
      { label: 'Deslocamento', value: '45.400 toneladas' }
    ]
  },
  {
    id: 'csg-kaga',
    name: 'JMSDF Escort Flotilla 4 (JS Kaga - DDH-184)',
    type: 'patrol',
    category: 'Carrier Strike Group',
    lat: 22.4000,
    lng: 130.8000,
    country: 'JPN',
    details: 'Navio porta-aviões modificado da Força de Autodefesa Marítima do Japão com convés retangular para operações com caças F-35B stealth.',
    status: 'PATROL',
    specs: [
      { label: 'Capitania', value: 'JS Kaga (DDH-184)' },
      { label: 'Asa Aérea', value: 'Caças Stealth F-35B Lightning II' },
      { label: 'Escolta', value: 'Destroyers Maya (AEGIS) + Asahi Class' },
      { label: 'Radar', value: 'OPS-50 AESA 3D' }
    ]
  },
  {
    id: 'csg-izumo',
    name: 'JMSDF Escort Flotilla 1 (JS Izumo - DDH-183)',
    type: 'patrol',
    category: 'Carrier Strike Group',
    lat: 33.5000,
    lng: 138.2000,
    country: 'JPN',
    details: 'Primeiro porta-aviões japonês desde a 2ª Guerra Mundial adaptado para decolagem curta e pouso vertical (STOVL) de caças F-35B.',
    status: 'ACTIVE',
    specs: [
      { label: 'Capitania', value: 'JS Izumo (DDH-183)' },
      { label: 'Capacidade', value: 'F-35B + Helicópteros SH-60K / MCH-101' },
      { label: 'Comando', value: 'JMSDF Fleet Escort Force' },
      { label: 'Comprimento', value: '248 metros' }
    ]
  },
  {
    id: 'csg-cavour',
    name: 'Gruppo Portaerei Cavour (Cavour - C 550)',
    type: 'patrol',
    category: 'Carrier Strike Group',
    lat: 38.2000,
    lng: 18.4000,
    country: 'ITA / NATO',
    details: 'Nau-capitânia da Marinha Militar Italiana operando no Mediterrâneo Central e Mar Jônico com caças F-35B e AV-8B Harrier II.',
    status: 'PATROL',
    specs: [
      { label: 'Capitania', value: 'Cavour (C 550)' },
      { label: 'Asa Aérea', value: '16x Caças F-35B + AV-8B Harrier II' },
      { label: 'Escolta', value: 'Destroyers Andrea Doria (Horizon Class)' },
      { label: 'Defesa', value: '32x Mísseis Aster 15 + Otobreda 76mm' }
    ]
  },
  {
    id: 'csg-trieste',
    name: 'Gruppo Anfibio Multiruolo (Trieste - L 9890)',
    type: 'patrol',
    category: 'Carrier Strike Group',
    lat: 40.5000,
    lng: 14.2000,
    country: 'ITA / NATO',
    details: 'O maior navio de guerra italiano construído no pós-guerra, operando como porta-helicópteros e porta-aviões leve de F-35B.',
    status: 'ACTIVE',
    specs: [
      { label: 'Capitania', value: 'Trieste (L 9890)' },
      { label: 'Asa Aérea', value: 'F-35B + Helicópteros EH-101 e NH-90' },
      { label: 'Deslocamento', value: '38.000 toneladas' },
      { label: 'Propulsão', value: 'CODLOG (Turbinas a Gás + Elétrico)' }
    ]
  },
  {
    id: 'csg-juan-carlos',
    name: 'Grupo de Proyección Naval (Juan Carlos I - L-61)',
    type: 'patrol',
    category: 'Carrier Strike Group',
    lat: 36.1000,
    lng: -4.2000,
    country: 'ESP / NATO',
    details: 'Maior navio da Armada Espanhola, combinando funções de porta-aviões V/STOL com rampa Ski-Jump de 12° e navio de projeção estratégica.',
    status: 'PATROL',
    specs: [
      { label: 'Capitania', value: 'Juan Carlos I (L-61)' },
      { label: 'Asa Aérea', value: '12x AV-8B Harrier II Plus + NH90' },
      { label: 'Escolta', value: 'Fragatas F-100 Álvaro de Bazán (AEGIS)' },
      { label: 'Deslocamento', value: '27.000 toneladas' }
    ]
  },

  // ==========================================
  // OPERATIONAL SUBMARINES (SUBMARINOS EM OPERAÇÃO)
  // ==========================================
  {
    id: 'ssn-jimmy-carter',
    name: 'Patrulha de Missões Especiais (USS Jimmy Carter - SSN-23)',
    type: 'patrol',
    category: 'Submarine Patrol',
    lat: 14.5000,
    lng: 115.0000,
    country: 'USA',
    details: 'Submarino Seawolf modificado com seção MMP de 30m para operações clandestinas, interceptação de cabos submarinos e espionagem acústica profunda.',
    status: 'PATROL',
    specs: [
      { label: 'Embarcação', value: 'USS Jimmy Carter (SSN-23)' },
      { label: 'Profundidade', value: '-500m (Casco de Aço HY-100)' },
      { label: 'Missão', value: 'Operações Clandestinas / SIGINT / UUVs' },
      { label: 'Velocidade Submerso', value: '35+ nós silencioso' },
      { label: 'Armamento', value: '50x Torpedos Mk 48 ADCAP / Harpoon' }
    ]
  },
  {
    id: 'ssgn-ohio',
    name: 'Patrulha Estratégica GIUK Gap (USS Ohio - SSGN-726)',
    type: 'patrol',
    category: 'Submarine Patrol',
    lat: 62.0000,
    lng: -18.0000,
    country: 'USA / UK',
    details: 'Maior concentração de poder de fogo convencional submerso do planeta. Carrega 154 mísseis Tomahawk em patrulha silenciosa no Atlântico Norte.',
    status: 'PATROL',
    specs: [
      { label: 'Embarcação', value: 'USS Ohio (SSGN-726)' },
      { label: 'Carga Útil', value: '154x Mísseis Tomahawk Block V' },
      { label: 'Operações Especiais', value: '66x SEALs + 2x Módulos DDS' },
      { label: 'Propulsão', value: 'Reator Nuclear S8G' },
      { label: 'Assinatura', value: '< Ruído de Fundo Oceânico' }
    ]
  },
  {
    id: 'ssgn-florida',
    name: 'Patrulha Estratégica SSGN (USS Florida - SSGN-728)',
    type: 'patrol',
    category: 'Submarine Patrol',
    lat: 34.2000,
    lng: 23.5000,
    country: 'USA / NATO',
    details: 'Submarino de mísseis guiados operando no Mar Mediterrâneo Oriental e Golfo de Suez em postura de dissuasão de resposta rápida.',
    status: 'ALERTA MÁXIMO',
    specs: [
      { label: 'Embarcação', value: 'USS Florida (SSGN-728)' },
      { label: 'Capacidade de Mísseis', value: '154x Tomahawk Cruise Missiles' },
      { label: 'Deslocamento', value: '18.750 toneladas submerso' },
      { label: 'Comando', value: 'US 6th Fleet / NATO' }
    ]
  },
  {
    id: 'ssgn-georgia',
    name: 'Patrulha Estratégica SSGN (USS Georgia - SSGN-729)',
    type: 'patrol',
    category: 'Submarine Patrol',
    lat: 24.1000,
    lng: 58.6000,
    country: 'USA',
    details: 'Submarino nuclear com 154 mísseis Tomahawk em patrulha no Golfo de Omã e Mar da Arábia sob comando da Quinta Frota dos EUA.',
    status: 'ALERTA MÁXIMO',
    specs: [
      { label: 'Embarcação', value: 'USS Georgia (SSGN-729)' },
      { label: 'Comando', value: 'US 5th Fleet / NAVCENT' },
      { label: 'Armamento', value: '154x Tomahawk + Torpedos Mk 48' },
      { label: 'Autonomia', value: 'Ilimitada (limitada apenas por mantimentos)' }
    ]
  },
  {
    id: 'ssn-virginia',
    name: 'Patrulha de Ataque Rápido (USS Virginia - SSN-774)',
    type: 'patrol',
    category: 'Submarine Patrol',
    lat: 32.5000,
    lng: -68.0000,
    country: 'USA',
    details: 'Submarino nuclear de ataque líder de classe equipado com mastros fotônicos digitais, sonar esférico de grande abertura e tubos VLS.',
    status: 'PATROL',
    specs: [
      { label: 'Embarcação', value: 'USS Virginia (SSN-774)' },
      { label: 'Sensores', value: 'Mastros Fotônicos + Sonar BQQ-10' },
      { label: 'Armamento', value: '12x Tomahawk VLS + 28x Mk 48 ADCAP' },
      { label: 'Propulsão', value: 'Reator S9G (Vida útil de 33 anos sem reabastecimento)' }
    ]
  },
  {
    id: 'ssn-texas',
    name: 'Patrulha Silenciosa SSN (USS Texas - SSN-775)',
    type: 'patrol',
    category: 'Submarine Patrol',
    lat: 53.2000,
    lng: -30.5000,
    country: 'USA',
    details: 'Submarino de ataque nuclear da classe Virginia operando em águas profundas do Atlântico Norte para vigilância de passagens submarinas.',
    status: 'PATROL',
    specs: [
      { label: 'Embarcação', value: 'USS Texas (SSN-775)' },
      { label: 'Teatro', value: 'Atlântico Norte / 2ª Frota' },
      { label: 'Profundidade Operacional', value: '-250m+' },
      { label: 'Autonomia', value: '90 dias em imersão contínua' }
    ]
  },
  {
    id: 'ssn-seawolf',
    name: 'Patrulha Hunter-Killer Ártico (USS Seawolf - SSN-21)',
    type: 'patrol',
    category: 'Submarine Patrol',
    lat: 78.5000,
    lng: 5.0000,
    country: 'USA',
    details: 'O submarino de caça e ataque mais avançado e fortemente armado já construído, patrulhando sob a calota de gelo do Ártico.',
    status: 'PATROL',
    specs: [
      { label: 'Embarcação', value: 'USS Seawolf (SSN-21)' },
      { label: 'Tubos de Torpedo', value: '8x Tubos de 660mm' },
      { label: 'Capacidade de Armas', value: '50x Torpedos Mk 48 / Tomahawk / Harpoon' },
      { label: 'Velocidade Tática Silenciosa', value: '25 nós (invisível ao sonar passivo)' }
    ]
  },
  {
    id: 'ssn-connecticut',
    name: 'Patrulha de Águas Profundas (USS Connecticut - SSN-22)',
    type: 'patrol',
    category: 'Submarine Patrol',
    lat: 20.0000,
    lng: 145.0000,
    country: 'USA',
    details: 'Submarino hunter-killer da classe Seawolf operando nas profundezas da Fossa das Marianas e bacia do Pacífico Ocidental.',
    status: 'PATROL',
    specs: [
      { label: 'Embarcação', value: 'USS Connecticut (SSN-22)' },
      { label: 'Casco', value: 'Aço HY-100 Ultra-Resistente' },
      { label: 'Sonar', value: 'BQQ-5D / BSY-2 Integrado' },
      { label: 'Profundidade Máxima', value: '-600m' }
    ]
  },
  {
    id: 'ssbn-vanguard-patrol',
    name: 'Patrulha CASD Nuclear (HMS Vanguard - S28)',
    type: 'patrol',
    category: 'Submarine Patrol',
    lat: 58.5000,
    lng: -25.0000,
    country: 'UK',
    details: 'Patrulha de dissuasão nuclear ininterrupta britânica nas profundezas do Atlântico Norte armada com mísseis balísticos Trident II D5.',
    status: 'PATROL',
    specs: [
      { label: 'Embarcação', value: 'HMS Vanguard (S28)' },
      { label: 'Armamento', value: '16x Mísseis Balísticos Trident II D5' },
      { label: 'Ogivas', value: 'Holbrook MIRV Termonucleares' },
      { label: 'Operação', value: 'CASD (Continuous At-Sea Deterrent desde 1969)' }
    ]
  },
  {
    id: 'ssn-astute-patrol',
    name: 'Patrulha de Ataque Astute (HMS Astute - S119)',
    type: 'patrol',
    category: 'Submarine Patrol',
    lat: 67.4000,
    lng: 3.2000,
    country: 'UK / NATO',
    details: 'Submarino de ataque nuclear britânico de 4ª geração com o avançado sonar Thales 2076 patrulhando as bordas do Mar de Barents.',
    status: 'PATROL',
    specs: [
      { label: 'Embarcação', value: 'HMS Astute (S119)' },
      { label: 'Sonar', value: 'Thales Sonar 2076 (Processador Acústico Mundial)' },
      { label: 'Armamento', value: '38x Armas (Torpedos Spearfish + Tomahawk Block IV)' },
      { label: 'Revestimento', value: '39.000 placas anecoicas acústicas' }
    ]
  },
  {
    id: 'ssn-ambush-patrol',
    name: 'Patrulha Hunter-Killer Astute (HMS Ambush - S120)',
    type: 'patrol',
    category: 'Submarine Patrol',
    lat: 36.2000,
    lng: 1.5000,
    country: 'UK / NATO',
    details: 'Submarino nuclear britânico patrulhando os estreitos do Mediterrâneo Ocidental integrado ao dispositivo antissubmarino da OTAN.',
    status: 'PATROL',
    specs: [
      { label: 'Embarcação', value: 'HMS Ambush (S120)' },
      { label: 'Propulsão', value: 'Reator Rolls-Royce PWR2 Core H' },
      { label: 'Autonomia de Ar', value: 'Eletrólise de Oxigênio (90 dias imerso)' },
      { label: 'Armamento', value: 'Torpedos Pesados Spearfish Mod 1' }
    ]
  },
  {
    id: 'ssn-severodvinsk-patrol',
    name: 'Patrulha Ártica Yasen-M (K-560 Severodvinsk)',
    type: 'patrol',
    category: 'Submarine Patrol',
    lat: 74.2000,
    lng: 38.0000,
    country: 'RUS',
    details: 'O submarino de ataque nuclear mais avançado da Marinha Russa, armado com mísseis de cruzeiro hipersônicos 3M22 Zircon e Kalibr.',
    status: 'PATROL',
    specs: [
      { label: 'Embarcação', value: 'K-560 Severodvinsk (Project 885 Yasen)' },
      { label: 'Armamento', value: '32x Mísseis Hipersônicos Zircon / Kalibr / Oniks' },
      { label: 'Sonar', value: 'Irtysh-Amfora Esférico de Proa' },
      { label: 'Profundidade Máxima', value: '-600m' }
    ]
  },
  {
    id: 'ssn-kazan-patrol',
    name: 'Patrulha Estratégica Yasen-M (K-561 Kazan)',
    type: 'patrol',
    category: 'Submarine Patrol',
    lat: 56.0000,
    lng: -42.0000,
    country: 'RUS',
    details: 'Submarino modernizado Project 885M com sistema de propulsão mono-casco silencioso operando em trânsito no Atlântico Norte.',
    status: 'PATROL',
    specs: [
      { label: 'Embarcação', value: 'K-561 Kazan (Project 885M Yasen-M)' },
      { label: 'Propulsão', value: 'Reator OK-650V com circuito primário integrado' },
      { label: 'Silos VLS', value: '10x Silos Verticais Multimissão' },
      { label: 'Velocidade', value: '31 nós submerso' }
    ]
  },
  {
    id: 'ssbn-vladimir-patrol',
    name: 'Patrulha Estratégica Borei (K-551 Vladimir Monomakh)',
    type: 'patrol',
    category: 'Submarine Patrol',
    lat: 54.0000,
    lng: 150.5000,
    country: 'RUS',
    details: 'Submarino balístico nuclear da classe Borei em patrulha de dissuasão estratégica nas profundezas geladas do Mar de Okhotsk.',
    status: 'PATROL',
    specs: [
      { label: 'Embarcação', value: 'K-551 Vladimir Monomakh (Project 955)' },
      { label: 'Armamento', value: '16x Mísseis Balísticos Intercontinentais RSM-56 Bulava' },
      { label: 'Ogivas Nucleares', value: '96x Ogivas MIRV Termonucleares Guiadas' },
      { label: 'Propulsão', value: 'Pump-Jet Hidrodinâmico Ultra-Silencioso' }
    ]
  },
  {
    id: 'ssbn-knyaz-vladimir',
    name: 'Patrulha de Dissuasão Borei-A (K-549 Knyaz Vladimir)',
    type: 'patrol',
    category: 'Submarine Patrol',
    lat: 71.8000,
    lng: 48.2000,
    country: 'RUS',
    details: 'Submarino balístico Borei-A modernizado com hidrodinâmica aprimorada e novos sensores acústicos no Mar de Barents / Mar Branco.',
    status: 'PATROL',
    specs: [
      { label: 'Embarcação', value: 'K-549 Knyaz Vladimir (Project 955A)' },
      { label: 'Mísseis ICBM', value: '16x Bulava (Alcance de 10.000 km)' },
      { label: 'Casco', value: 'Aço Austenítico com placas anecoicas' },
      { label: 'Comando', value: 'Frota do Norte Russa (Gadzhiyevo)' }
    ]
  },
  {
    id: 'ssn-belgorod-patrol',
    name: 'Missões Especiais Árticas (K-329 Belgorod)',
    type: 'patrol',
    category: 'Submarine Patrol',
    lat: 76.5000,
    lng: 60.0000,
    country: 'RUS',
    details: 'O submarino mais longo do mundo (178m), projetado como plataforma-mãe dos mega-torpedos autônomos nucleares Poseidon e minissubmarinos.',
    status: 'PATROL',
    specs: [
      { label: 'Embarcação', value: 'K-329 Belgorod (Project 09852)' },
      { label: 'Armamento Especial', value: '6x Drones Nucleares Autônomos Poseidon 2M39' },
      { label: 'Submarino Acoplado', value: 'Losharik / AS-31 para águas ultra-profundas' },
      { label: 'Comprimento', value: '178 metros / 24.000t submerso' }
    ]
  },
  {
    id: 'ssk-krasnodar-patrol',
    name: 'Patrulha Silenciosa Kilo (B-265 Krasnodar)',
    type: 'patrol',
    category: 'Submarine Patrol',
    lat: 43.8000,
    lng: 34.5000,
    country: 'RUS',
    details: 'Submarino diesel-elétrico Project 636.3 conhecido pela OTAN como "Buraco Negro" pelo seu silêncio absoluto, patrulhando o Mar Negro.',
    status: 'PATROL',
    specs: [
      { label: 'Embarcação', value: 'B-265 Krasnodar (Improved Kilo)' },
      { label: 'Armamento', value: 'Mísseis de Cruzeiro Kalibr-PL + Torpedos 53-65K' },
      { label: 'Propulsão', value: 'Diesel-Elétrico Silenciado com Baterias de Alta Densidade' },
      { label: 'Alcance Submerso', value: '400 milhas no modo elétrico lento' }
    ]
  },
  {
    id: 'ssbn-le-terrible-patrol',
    name: 'Patrulha Estratégica FOST (Le Terrible - S619)',
    type: 'patrol',
    category: 'Submarine Patrol',
    lat: 42.0000,
    lng: -35.0000,
    country: 'FRA',
    details: 'Submarino nuclear lançador de mísseis (SNLE) da França em patrulha secreta no Oceano Atlântico com mísseis balísticos M51.',
    status: 'PATROL',
    specs: [
      { label: 'Embarcação', value: 'Le Terrible (S619 - Triomphant Class)' },
      { label: 'Armamento', value: '16x Mísseis Balísticos M51 com Ogivas TNO' },
      { label: 'Comando', value: 'FOST (Force Océanique Stratégique)' },
      { label: 'Propulsão', value: 'Reator K15 Turbo-Redutor Silencioso' }
    ]
  },
  {
    id: 'ssbn-triomphant-patrol',
    name: 'Patrulha de Dissuasão FOST (Le Triomphant - S616)',
    type: 'patrol',
    category: 'Submarine Patrol',
    lat: 46.5000,
    lng: -12.0000,
    country: 'FRA',
    details: 'Submarino de dissuasão nuclear francês operando no Golfo da Biscaia e Atlântico Norte com alcance intercontinental.',
    status: 'PATROL',
    specs: [
      { label: 'Embarcação', value: 'Le Triomphant (S616)' },
      { label: 'Capacidade Nuclear', value: '16x SLBM M51 (6 ogivas termonucleares cada)' },
      { label: 'Deslocamento', value: '14.335 toneladas submerso' },
      { label: 'Imersão Típica', value: '-300m a -400m' }
    ]
  },
  {
    id: 'ssn-suffren-patrol',
    name: 'Patrulha de Ataque Barracuda (Suffren - Q284)',
    type: 'patrol',
    category: 'Submarine Patrol',
    lat: 39.5000,
    lng: 4.8000,
    country: 'FRA',
    details: 'Nova geração de submarinos nucleares de ataque da Marinha Francesa com lemes em X, pump-jet e mísseis de cruzeiro naval MdCN.',
    status: 'PATROL',
    specs: [
      { label: 'Embarcação', value: 'Suffren (Q284 - Classe Barracuda)' },
      { label: 'Armamento', value: 'Mísseis MdCN (1.000km) + Torpedos F21 + SM39 Exocet' },
      { label: 'Lemes', value: 'Configuração em X com piloto automático digital' },
      { label: 'Hangar de Mergulhadores', value: 'Módulo Dry Deck Shelter integrado' }
    ]
  },
  {
    id: 'ssn-duguay-trouin',
    name: 'Patrulha Silenciosa Suffren (Duguay-Trouin - S636)',
    type: 'patrol',
    category: 'Submarine Patrol',
    lat: 49.2000,
    lng: -7.5000,
    country: 'FRA',
    details: 'Segundo submarino da classe Suffren em missão de escolta nuclear e proteção das abordagens da base de Île Longue.',
    status: 'ACTIVE',
    specs: [
      { label: 'Embarcação', value: 'Duguay-Trouin (S636)' },
      { label: 'Propulsão', value: 'Reator K15 (Autonomia de 10 anos)' },
      { label: 'Tripulação', value: '65 submarinistas (tripulação mista)' },
      { label: 'Velocidade', value: '25 nós submerso' }
    ]
  },
  {
    id: 'ssbn-type094-patrol',
    name: 'Patrulha Bastião PLAN (Type 094A Jin-Class SSBN)',
    type: 'patrol',
    category: 'Submarine Patrol',
    lat: 16.5000,
    lng: 112.5000,
    country: 'CHN',
    details: 'Submarino balístico estratégico chinês com corcova hidrodinâmica aprimorada em patrulha no bastião de águas profundas do Mar do Sul da China.',
    status: 'PATROL',
    specs: [
      { label: 'Embarcação', value: 'Changzheng 18 (Type 094A Jin-Class)' },
      { label: 'Armamento', value: '12x Mísseis Balísticos Intercontinentais JL-3 ICBM' },
      { label: 'Alcance do Míssil', value: '10.000+ km' },
      { label: 'Base de Origem', value: 'Yulin (Hainan)' }
    ]
  },
  {
    id: 'ssn-type093b-patrol',
    name: 'Patrulha de Ataque PLAN (Type 093B Shang-Class)',
    type: 'patrol',
    category: 'Submarine Patrol',
    lat: 21.0000,
    lng: 125.0000,
    country: 'CHN',
    details: 'Submarino de ataque nuclear chinês equipado com módulo vertical VLS para mísseis antinavio supersônicos YJ-18.',
    status: 'PATROL',
    specs: [
      { label: 'Embarcação', value: 'Type 093B Shang-Class SSN' },
      { label: 'Mísseis Verticais', value: 'VLS com Mísseis YJ-18 & CJ-10 Cruise' },
      { label: 'Sonar', value: 'Sonar Flanco HPS Flank Array' },
      { label: 'Velocidade', value: '30 nós' }
    ]
  },
  {
    id: 'ssk-type039c-patrol',
    name: 'Patrulha Stealth AIP (Type 039C Yuan-Class)',
    type: 'patrol',
    category: 'Submarine Patrol',
    lat: 24.8000,
    lng: 120.2000,
    country: 'CHN',
    details: 'Submarino AIP de última geração da China com torre angular em formato stealth para dispersão de ondas de radar e sonar ativo.',
    status: 'PATROL',
    specs: [
      { label: 'Embarcação', value: 'Type 039C Yuan Class AIP' },
      { label: 'Tecnologia', value: 'Torre Stealth Arestada + Motor Stirling AIP' },
      { label: 'Armamento', value: 'Torpedos Yu-6 + Mísseis Antinavio YJ-82' },
      { label: 'Autonomia Submersa', value: '21 dias sem emergir' }
    ]
  },
  {
    id: 'ssbn-arihant-patrol',
    name: 'Patrulha de Dissuasão SSBN (INS Arihant - S2)',
    type: 'patrol',
    category: 'Submarine Patrol',
    lat: 13.5000,
    lng: 85.2000,
    country: 'IND',
    details: 'Primeiro submarino balístico nuclear indiano, completando a Tríade Nuclear da Índia em patrulha nas águas profundas da Baía de Bengala.',
    status: 'PATROL',
    specs: [
      { label: 'Embarcação', value: 'INS Arihant (S2)' },
      { label: 'Armamento', value: '12x Mísseis Balísticos K-15 Sagarika ou 4x K-4 SLBM' },
      { label: 'Propulsão', value: 'Reator Nuclear de Água Pressurizada (83 MW)' },
      { label: 'Teatro', value: 'Oceano Índico / Comando Estratégico' }
    ]
  },
  {
    id: 'ssbn-arighat-patrol',
    name: 'Patrulha Estratégica SSBN (INS Arighat - S3)',
    type: 'patrol',
    category: 'Submarine Patrol',
    lat: 9.8000,
    lng: 88.5000,
    country: 'IND',
    details: 'Segundo submarino nuclear balístico da Índia, equipado com maior capacidade de carga de mísseis K-4 de 3.500km de alcance.',
    status: 'ACTIVE',
    specs: [
      { label: 'Embarcação', value: 'INS Arighat (S3)' },
      { label: 'Armamento', value: 'Mísseis K-4 SLBM (3.500 km alcance)' },
      { label: 'Sensores', value: 'Sonar Integrado USHUS (DRDO)' },
      { label: 'Deslocamento', value: '6.000 toneladas' }
    ]
  },
  {
    id: 'ssk-kalvari-patrol',
    name: 'Patrulha Silenciosa Scorpène (INS Kalvari - S21)',
    type: 'patrol',
    category: 'Submarine Patrol',
    lat: 16.2000,
    lng: 70.8000,
    country: 'IND',
    details: 'Submarino diesel-elétrico de ataque classe Scorpène construído na Índia pela Mazagon Dock em patrulha no Mar da Arábia.',
    status: 'PATROL',
    specs: [
      { label: 'Embarcação', value: 'INS Kalvari (S21 - Classe Kalvari)' },
      { label: 'Armamento', value: 'Mísseis SM39 Exocet + Torpedos SUT / Varunastra' },
      { label: 'Comando', value: 'Western Naval Command (Mumbai)' },
      { label: 'Profundidade de Teste', value: '-350m' }
    ]
  },
  {
    id: 'sskn-dosan-patrol',
    name: 'Patrulha Tática KSS-III (Dosan Ahn Changho - SS-083)',
    type: 'patrol',
    category: 'Submarine Patrol',
    lat: 37.5000,
    lng: 131.2000,
    country: 'KOR',
    details: 'O primeiro submarino diesel-elétrico do mundo equipado com VLS e mísseis balísticos convencionais Hyunmoo-4-4, patrulhando o Mar do Leste.',
    status: 'PATROL',
    specs: [
      { label: 'Embarcação', value: 'Dosan Ahn Changho (SS-083)' },
      { label: 'Armamento', value: '6x Silos Verticais VLS com Mísseis Balísticos Hyunmoo' },
      { label: 'Propulsão', value: 'Baterias de Íon-Lítio Samsung + Células de Combustível AIP' },
      { label: 'Deslocamento', value: '3.750 toneladas submerso' }
    ]
  },
  {
    id: 'sskn-ahn-mu',
    name: 'Patrulha Estratégica KSS-III (Ahn Mu - SS-085)',
    type: 'patrol',
    category: 'Submarine Patrol',
    lat: 34.8000,
    lng: 128.9000,
    country: 'KOR',
    details: 'Segundo submarino da classe Dosan Ahn Changho armado com SLBMs em missão de patrulha e prontidão tática no Estreito da Coreia.',
    status: 'PATROL',
    specs: [
      { label: 'Embarcação', value: 'Ahn Mu (SS-085)' },
      { label: 'Capacidade', value: '6x Mísseis Balísticos Hyunmoo-4-4 SLBM' },
      { label: 'Sistema de Combate', value: 'Hanwha Systems Naval Combat Suite' },
      { label: 'Autonomia AIP', value: 'Mais de 20 dias em imersão' }
    ]
  },
  {
    id: 'ssk-taigei-patrol',
    name: 'Patrulha Silenciosa JMSDF (JS Taigei - SS-513)',
    type: 'patrol',
    category: 'Submarine Patrol',
    lat: 26.8000,
    lng: 125.4000,
    country: 'JPN',
    details: 'Submarino de última geração da JMSDF equipado 100% com baterias de íon-lítio para máxima aceleração e silêncio na Primeira Cadeia de Ilhas.',
    status: 'PATROL',
    specs: [
      { label: 'Embarcação', value: 'JS Taigei (SS-513)' },
      { label: 'Tecnologia', value: 'Propulsão 100% Bateria Íon-Lítio (sem baterias de chumbo-ácido)' },
      { label: 'Armamento', value: 'Torpedos Type 18 Heavyweight + Mísseis Harpoon UGM-84' },
      { label: 'Sonar', value: 'Sonar de Fibra Óptica OYX-1 de Alta Resolução' }
    ]
  },
  {
    id: 'ssk-hakugei-patrol',
    name: 'Patrulha Íon-Lítio JMSDF (JS Hakugei - SS-514)',
    type: 'patrol',
    category: 'Submarine Patrol',
    lat: 30.2000,
    lng: 129.8000,
    country: 'JPN',
    details: 'Segundo submarino da classe Taigei em patrulha de vigilância acústica nas passagens oceânicas das Ilhas Ryukyu.',
    status: 'ACTIVE',
    specs: [
      { label: 'Embarcação', value: 'JS Hakugei (SS-514)' },
      { label: 'Base de Origem', value: 'Kure Submarine Base' },
      { label: 'Silêncio Acústico', value: 'Revestimento e isolamento de choque Flot-R' },
      { label: 'Deslocamento', value: '3.000 toneladas (superfície)' }
    ]
  },
  {
    id: 'ssk-u36-patrol',
    name: 'Patrulha Báltica AIP (U-36 - Type 212A)',
    type: 'patrol',
    category: 'Submarine Patrol',
    lat: 56.5000,
    lng: 11.8000,
    country: 'DEU',
    details: 'Submarino stealth construído em aço não-magnético com propulsão por célula de combustível de hidrogênio (AIP) operando no Mar Báltico.',
    status: 'PATROL',
    specs: [
      { label: 'Embarcação', value: 'U-36 (S186 - Type 212A Batch II)' },
      { label: 'Casco', value: 'Aço Não-Magnético Imune a Minas Magnéticas e MAD' },
      { label: 'Propulsão', value: 'Siemens PEM Fuel Cell AIP (Célula de Hidrogênio)' },
      { label: 'Armamento', value: 'Torpedos DM2A4 Seehecht guiados por fibra óptica' }
    ]
  },
  {
    id: 'ssk-u31-patrol',
    name: 'Patrulha Silenciosa AIP (U-31 - Type 212A)',
    type: 'patrol',
    category: 'Submarine Patrol',
    lat: 55.1000,
    lng: 6.5000,
    country: 'DEU',
    details: 'Pioneiro da propulsão por célula de combustível de hidrogênio na Marinha Alemã, operando nas rotas estratégicas do Mar do Norte.',
    status: 'ACTIVE',
    specs: [
      { label: 'Embarcação', value: 'U-31 (S181)' },
      { label: 'Autonomia AIP', value: '3 semanas submerso sem snorkel' },
      { label: 'Comando', value: '1. Ubootgeschwader (Eckernförde)' },
      { label: 'Emissão Térmica', value: 'Praticamente zero (sem escapamento quente)' }
    ]
  },
  {
    id: 'ssk-riachuelo-patrol',
    name: 'Patrulha Pré-Sal PROSUB (S-40 Riachuelo)',
    type: 'patrol',
    category: 'Submarine Patrol',
    lat: -24.2000,
    lng: -43.5000,
    country: 'BRA',
    details: 'Primeiro submarino convencional da classe Riachuelo (Scorpène Modificado) do Programa PROSUB da Marinha do Brasil, guardando os campos petrolíferos do Pré-Sal.',
    status: 'PATROL',
    specs: [
      { label: 'Embarcação', value: 'S-40 Riachuelo (Classe Riachuelo / PROSUB)' },
      { label: 'Armamento', value: 'Mísseis SM39 Exocet + Torpedos F21 Heavyweight' },
      { label: 'Comprimento', value: '71,6 metros (seção ampliada para maior autonomia)' },
      { label: 'Área de Atuação', value: 'Amazônia Azul / Bacia de Santos' }
    ]
  },
  {
    id: 'ssk-humaita-patrol',
    name: 'Patrulha da Amazônia Azul (S-41 Humaitá)',
    type: 'patrol',
    category: 'Submarine Patrol',
    lat: -23.1000,
    lng: -41.8000,
    country: 'BRA',
    details: 'Segundo submarino do Programa PROSUB construído no Complexo Naval de Itaguaí, operando em missões de soberania e vigilância da costa brasileira.',
    status: 'ACTIVE',
    specs: [
      { label: 'Embarcação', value: 'S-41 Humaitá (PROSUB)' },
      { label: 'Base de Origem', value: 'Base Submarina da Ilha da Madeira (BSIM)' },
      { label: 'Autonomia', value: '70 dias de operação no mar' },
      { label: 'Profundidade Máxima', value: '-300 metros' }
    ]
  },
  {
    id: 'ssn-alvaro-alberto',
    name: 'Programa Nuclear PROSUB (SN-BR Álvaro Alberto)',
    type: 'patrol',
    category: 'Submarine Patrol',
    lat: -22.9500,
    lng: -43.8500,
    country: 'BRA',
    details: 'Primeiro submarino de propulsão nuclear da América Latina (SN-BR), projeto estratégico brasileiro com reator de água pressurizada desenvolvido pelo CTMSP.',
    status: 'ACTIVE',
    specs: [
      { label: 'Embarcação', value: 'SN-BR Álvaro Alberto (SN-10)' },
      { label: 'Propulsão', value: 'Reator Nuclear Brasileiro PWR (48 MW)' },
      { label: 'Velocidade Submerso', value: '25 nós contínuos' },
      { label: 'Deslocamento', value: '6.000 toneladas submerso' }
    ]
  },
  {
    id: 'ssk-drakon-patrol',
    name: 'Patrulha Estratégica AIP VLS (INS Drakon - Dolphin II)',
    type: 'patrol',
    category: 'Submarine Patrol',
    lat: 32.8000,
    lng: 34.2000,
    country: 'ISR',
    details: 'O mais avançado submarino israelense com vela alongada abrigando silos verticais (VLS) para mísseis balísticos e de cruzeiro de longo alcance com capacidade nuclear.',
    status: 'ALERTA MÁXIMO',
    specs: [
      { label: 'Embarcação', value: 'INS Drakon (Dolphin II Class VLS)' },
      { label: 'Armamento Especial', value: 'VLS na Vela para Mísseis de Longo Alcance Popeye Turbo' },
      { label: 'Propulsão', value: 'HDW Fuel Cell AIP Silencioso' },
      { label: 'Teatro', value: 'Mediterrâneo Oriental / Mar Vermelho' }
    ]
  },
  {
    id: 'ssk-collins-patrol',
    name: 'Patrulha Oceânica Collins (HMAS Collins - SSG-73)',
    type: 'patrol',
    category: 'Submarine Patrol',
    lat: -32.5000,
    lng: 114.2000,
    country: 'AUS',
    details: 'Submarino de longo alcance da Marinha Real Australiana com sonar acústico Scylla em patrulhas de interdição e inteligência no Oceano Índico.',
    status: 'PATROL',
    specs: [
      { label: 'Embarcação', value: 'HMAS Collins (SSG-73)' },
      { label: 'Armamento', value: 'Torpedos Mk 48 Mod 7 CBASS + Harpoon' },
      { label: 'Base de Origem', value: 'HMAS Stirling (Garden Island)' },
      { label: 'Deslocamento', value: '3.400 toneladas' }
    ]
  },
  {
    id: 'ssk-gotland-patrol',
    name: 'Patrulha Stealth Stirling (HMS Gotland)',
    type: 'patrol',
    category: 'Submarine Patrol',
    lat: 57.5000,
    lng: 18.5000,
    country: 'SWE',
    details: 'Famoso submarino sueco com motores Stirling AIP de combustão fechada que venceu porta-aviões em jogos de guerra com sua invisibilidade acústica total no Mar Báltico.',
    status: 'PATROL',
    specs: [
      { label: 'Embarcação', value: 'HMS Gotland (A19 Class)' },
      { label: 'Propulsão', value: 'Motores Kockums Stirling v4-275 AIP' },
      { label: 'Assinatura Magnética', value: 'Casco desmagnetizado com bobinas ativas' },
      { label: 'Armamento', value: 'Torpedos Pesados Torped 62 + Torped 47' }
    ]
  },

  // ==========================================
  // RECONNAISSANCE SATELLITES (SATÉLITES DE RECONHECIMENTO)
  // ==========================================
  {
    id: 'sat-kh11',
    name: 'USA-245 (KH-11 Keyhole Satellite)',
    type: 'satellite',
    category: 'Recon Satellite',
    lat: 45.0000,
    lng: 12.0000,
    country: 'USA (NRO)',
    details: 'Satélite óptico e infravermelho de altíssima resolução orbitando a 300km em órbita heliossíncrona.',
    status: 'ORBITAL',
    specs: [
      { label: 'Resolução Óptica', value: '< 10cm' },
      { label: 'Espectro', value: 'Visível + Infravermelho (FLIR)' },
      { label: 'Órbita', value: 'LEO 320km x 410km' }
    ]
  },
  {
    id: 'sat-lacrosse',
    name: 'Lacrosse-5 Radar Satellite',
    type: 'satellite',
    category: 'Recon Satellite',
    lat: -15.0000,
    lng: -45.0000,
    country: 'USA (NRO)',
    details: 'Satélite de radar de abertura sintética (SAR) capaz de mapear o terreno e frota através de nuvens e escuridão total.',
    status: 'ORBITAL',
    specs: [
      { label: 'Sensor Principal', value: 'SAR Radar 3D' },
      { label: 'Penetração', value: 'Nuvens / Camuflagem' },
      { label: 'Frequência de Varredura', value: '90 Minutos' }
    ]
  }
]

// ==========================================
// REAL HISTORICAL & ACTIVE OPERATIONS
// ==========================================
export const REAL_MILITARY_OPERATIONS: MilitaryOperation[] = [
  {
    id: 'absolute-resolve',
    codeName: 'OPERATION ABSOLUTE RESOLVE',
    title: 'Captura e Ação Direta do JSOC contra Nicolás Maduro em Caracas',
    year: '2026',
    location: 'Caracas, Venezuela (Fuerte Tiuna / Complexo Presidencial)',
    theater: 'US Southern Command (SOUTHCOM) / JSOC',
    defconRecommended: 1,
    overview: 'Incursão helitransportada noturna de altíssimo risco executada pelo 1st SFOD-D (Delta Force), CIA Special Activities Center e 160th SOAR (Night Stalkers) sob a Operação Southern Spear para capturar o ex-presidente indiciado Nicolás Maduro e lideranças chave.',
    target: 'Nicolás Maduro & Cilia Flores — Complexo Fortificado em Fuerte Tiuna, Caracas',
    intelReport: {
      classification: 'TOP SECRET // SPECIAL ACCESS REQUIRED // NOFORN',
      summary: 'Reconhecimento por satélite (KH-11), interceptação SIGINT e inteligência humana secreta (HUMINT) mapearam os padrões exatos de movimento, bunkers e brechas na defesa aérea do vale de Caracas.',
      keyFindings: [
        'Bunker presidencial fortificado com empacotamento eletrônico e destacamentos de segurança militar cubana.',
        'Ativos de guerra eletrônica desativaram sistemas de radar de defesa aérea (S-300VM / Buk-M2E) minutos antes do assalto.',
        'Corredores de infiltração stealth mapeados sobre o Mar do Caribe entrando no espaço aéreo venezuelano abaixo do horizonte de radar.'
      ]
    },
    weatherTelemetry: {
      condition: 'Madrugada Nublada com Nuvens Baixas',
      visibility: '6.000m (Amplificado por NVG)',
      windSpeed: '06 nós Nordeste',
      moonPhase: 'Crescente Minguante (12% Iluminação)',
      temperature: '21°C'
    },
    opord: {
      phase1: 'Aproximação stealth a baixa altitude pelo Mar do Caribe com helicópteros MH-60M e MH-47G do 160th SOAR, escoltados por jatos F-35C Lightning II e aeronaves de guerra eletrônica EA-18G Growler.',
      phase2: 'Inserção via fast-rope de operadores da Delta Force diretamente no complexo alvo, arrombamento explosivo de portas blindadas e rápida neutralização CQB de guardas hostis.',
      phase3: 'Custódia dos alvos (Maduro e cônjuge), extração tática rápida via helicóptero MH-47G para o navio de assalto anfíbio USS Wasp (LHD-1) e transporte para custódia federal dos EUA.',
      outcome: 'Captura bem-sucedida dos alvos primários sem baixas aliadas, apreensão de inteligência de alto valor e transferência para a Corte Federal dos EUA.'
    },
    unitsInvolved: [
      '1st SFOD-D (Delta Force)',
      '160th Special Operations Aviation Regiment (Night Stalkers)',
      'CIA Special Activities Center (SAC)',
      'US Navy Carrier Strike Group 12 (USS Gerald R. Ford & Ala Aérea)',
      'USMC 24th Marine Expeditionary Unit (MEU)'
    ],
    images: ['/maduro01.avif', '/maduro02.jpg']
  },
  {
    id: 'kayla-mueller',
    codeName: 'OPERATION KAYLA MUELLER',
    title: 'Ação Direta do JSOC & Neutralização de Abu Bakr al-Baghdadi',
    year: '2019',
    location: 'Barisha, Idlib, Síria',
    theater: 'US Central Command (CENTCOM) / JSOC',
    defconRecommended: 2,
    overview: 'Ataque noturno helitransportado de alta precisão conduzido pelo 1st SFOD-D (Delta Force) e 160th SOAR no noroeste da Síria para capturar ou neutralizar Abu Bakr al-Baghdadi, fundador e líder supremo do Estado Islâmico (ISIS).',
    target: 'Abu Bakr al-Baghdadi — Complexo Fortificado em Barisha, Província de Idlib',
    intelReport: {
      classification: 'TOP SECRET // SI // NOFORN',
      summary: 'Rastreamento HUMINT das forças curdas da SDF combinado com vigilância aérea contínua por drones MQ-9 Reaper localizou o esconderijo isolado a apenas 5km da fronteira turca.',
      keyFindings: [
        'Complexo isolado protegido com túneis subterrâneos e minas terrestres.',
        'Confirmação visual e de sinais eletrônicos da presença de Baghdadi e família no local.',
        'Uso do cão de guerra militar (MWD Conan) para encurralar o alvo nos túneis sem saída.'
      ]
    },
    weatherTelemetry: {
      condition: 'Céu Limpo Sem Lua',
      visibility: '10.000m (Filtro NVG)',
      windSpeed: '05 nós Oito',
      moonPhase: 'Lua Nova (1% Iluminação)',
      temperature: '16°C'
    },
    opord: {
      phase1: 'Voo noturno a baixíssima altitude de 8x helicópteros (MH-47G Chinook e MH-60M Black Hawk) através de espaço aéreo controlado por forças russas e sírias.',
      phase2: 'Derrubada explosiva dos muros do complexo para evitar entradas armadilhadas, seguida de engajamento imediato e evacuação de não-combatentes.',
      phase3: 'Encurralamento de Baghdadi em um túnel sem saída, teste de DNA em campo confirmando identidade e destruição total do complexo por munição guiada de precisão.',
      outcome: 'Neutralização conclusiva do líder supremo do ISIS, apreensão de documentos estratégicos e evacuação completa sem fatalidades aliadas.'
    },
    unitsInvolved: [
      '1st SFOD-D (Delta Force)',
      '160th Special Operations Aviation Regiment (Night Stalkers)',
      '75th Ranger Regiment (Assault Blockers)',
      'Syrian Democratic Forces (SDF Intelligence)',
      'CIA Special Activities Center'
    ]
  },
  {
    id: 'red-dawn',
    codeName: 'OPERATION RED DAWN',
    title: 'Captura do Ex-Ditador Saddam Hussein em Ad-Dawr',
    year: '2003',
    location: 'Ad-Dawr, perto de Tikrit, Iraque',
    theater: 'US Central Command (CENTCOM) / Task Force 121',
    defconRecommended: 2,
    overview: 'Operação conjunta de grande escala executada pela Task Force 121 (Delta Force e ISA) e a 1ª Brigada da 4ª Divisão de Infantaria para capturar o ex-presidente iraquiano Saddam Hussein em um esconderijo subterrâneo.',
    target: 'Saddam Hussein — Esconderijo Subterrâneo ("Spider Hole") em Ad-Dawr',
    intelReport: {
      classification: 'SECRET // NOFORN',
      summary: 'Interrogatórios táticos de familiares e guarda-costas da tribo al-Muslit revelaram a localização exata de uma fazenda remota usada por Saddam ao longo do Rio Tigre.',
      keyFindings: [
        'Identificação das zonas alvos Wolverine 1 e Wolverine 2 próximas à vila de Ad-Dawr.',
        'Detecção de um alçapão camuflado sob tijolos e sujeira conectado a um buraco subterrâneo de 2 metros.',
        'Apreensão de $750.000 em notas de $100 dólares e duas pistolas AK-47 sem disparar um único tiro.'
      ]
    },
    weatherTelemetry: {
      condition: 'Noite Fria e Escura',
      visibility: '8.000m',
      windSpeed: '08 nós Noroeste',
      moonPhase: 'Lua Cheia',
      temperature: '08°C'
    },
    opord: {
      phase1: 'Cercamento perimetral sigiloso das áreas Wolverine 1 e 2 por 600 soldados da 4ª Divisão de Infantaria e operadores da Delta Force.',
      phase2: 'Varredura de estruturas da fazenda, descoberta do alçapão falso e remoção do isolamento de poliestireno escondendo o buraco.',
      phase3: 'Extração sem resistência de Saddam Hussein às 20:30, transporte imediato via helicóptero para a Base Aérea de Bagdá e custódia segura.',
      outcome: 'Captura bem-sucedida do Alvo de Alto Valor nº 1 da High Value Target List sem baixas aliadas ou civis.'
    },
    unitsInvolved: [
      'Task Force 121 (JSOC / Delta Force / ISA)',
      '1st Brigade Combat Team (4th Infantry Division)',
      '160th Special Operations Aviation Regiment (Night Stalkers)',
      'US Army Intelligence and Security Command'
    ]
  },
  {
    id: 'celestial-balance',
    codeName: 'OPERATION CELESTIAL BALANCE',
    title: 'Ataque Helitransportado do SEAL Team 6 contra Saleh Ali al-Nabhan',
    year: '2009',
    location: 'Barawe, Somália',
    theater: 'US Africa Command (AFRICOM) / JSOC',
    defconRecommended: 2,
    overview: 'Incursão diurna audaciosa de helicópteros pelo DEVGRU (SEAL Team Six) no sul da Somália para interceptar e neutralizar Saleh Ali Saleh Nabhan, um dos líderes mais procurados da Al-Qaeda na África Oriental.',
    target: 'Saleh Ali Saleh Nabhan — Convoy de Veículos da Al-Qaeda / Al-Shabaab perto de Barawe',
    intelReport: {
      classification: 'TOP SECRET // NOFORN',
      summary: 'Rastreamento por satélite e vigilância eletrônica continuados pela CIA identificaram o deslocamento de Nabhan em um veículo quatro por quatro entre Mogadíscio e Barawe.',
      keyFindings: [
        'Alvo diretamente envolvido no atentado ao Paradise Hotel em Mombaça (2002) e ataques à embaixada americana.',
        'Necessidade de incursão com pouso e apreensão de corpos para verificação inequívoca de DNA.',
        'Lançamento a partir de navios da Marinha dos EUA ao largo da costa somali.'
      ]
    },
    weatherTelemetry: {
      condition: 'Ensolarado com Vento de Mar',
      visibility: '12.000m',
      windSpeed: '14 nós Leste',
      moonPhase: 'Dia (Sol Pleno)',
      temperature: '31°C'
    },
    opord: {
      phase1: 'Lançamento de 4x helicópteros (AH-6 Little Birds e MH-60 Black Hawks) a partir de um navio da Marinha dos EUA interceptando o veículo na estrada costeira.',
      phase2: 'Metralhamento de precisão pelos AH-6 Little Birds para imobilizar o veículo de Nabhan seguido de pouso tático imediato dos SEALs.',
      phase3: 'Varredura do local em menos de 10 minutos, recuperação do corpo do alvo e material de inteligência, e rápido regresso aos navios de assalto.',
      outcome: 'Neutralização confirmada do líder sênior da Al-Qaeda, apreensão de celulares e cartões de memória estratégicos sem baixas americanas.'
    },
    unitsInvolved: [
      'DEVGRU Red Squadron (SEAL Team Six)',
      '160th Special Operations Aviation Regiment (Night Stalkers)',
      'CIA Special Activities Division (SAD)',
      'US Navy Amphibious Task Force (AFRICOM)'
    ]
  },
  {
    id: 'neptune-spear',
    codeName: 'OPERATION NEPTUNE SPEAR',
    title: 'Ação Direta de Alta Precisão em Abbottabad',
    year: '2011',
    location: 'Abbottabad, Paquistão',
    theater: 'Joint Special Operations Command (JSOC)',
    defconRecommended: 2,
    overview: 'Incursão helitransportada covert executada pelo DEVGRU (SEAL Team Six) utilizando helicópteros stealth modified MH-60 Black Hawk para neutralização de alvo estratégico primário.',
    target: 'Complexo Residencial Fortificado em Abbottabad',
    intelReport: {
      classification: 'TOP SECRET // NOFORN // ORCON',
      summary: 'Vigilância via satélite KH-11 e drones stealth RQ-170 Sentinel confirmou padrão de vida de indivíduo conhecido como "The Pacer" sem uso de comunicações eletrônicas.',
      keyFindings: [
        'Muros de perímetro de 5.5m com arame farpado e ausência de conexão à internet ou telefonia.',
        'Presença de patrulhamento interno e queima diária de resíduos para evitar análise de DNA.',
        'Modelagem 3D exata do complexo reproduzida em Camp Activity, Carolina do Norte, para treinamento das equipes.'
      ]
    },
    weatherTelemetry: {
      condition: 'Céu Limpo com Névoa Baixa',
      visibility: '8.000m (Iluminação por Estrelas)',
      windSpeed: '04 nós Noroeste',
      moonPhase: 'Lua Nova (0% Iluminação - Ideal para NVG)',
      temperature: '22°C'
    },
    opord: {
      phase1: 'Decolagem sigilosa da Base Aérea de Jalalabad via 2x MH-60 Black Hawk Stealth com rota de baixa altitude cortando o relevo montanhoso.',
      phase2: 'Infiltração sobre o complexo com inserção via fast-rope e arrombamento tático das portas de acesso seguro.',
      phase3: 'Varredura andar por andar, captura de discos rígidos/documentos e extração via helicóptero reserva MH-47 Chinook.',
      outcome: 'Missão concluída em 38 minutos com apreensão de mais de 100 terabytes de inteligência e sem baixas aliadas.'
    },
    unitsInvolved: [
      'DEVGRU Red Squadron (SEAL Team 6)',
      '160th Special Operations Aviation Regiment (Night Stalkers)',
      'CIA Special Activities Division (SAD)',
      'USAF Combat Controllers (CCT)'
    ]
  },
  {
    id: 'praying-mantis',
    codeName: 'OPERATION PRAYING MANTIS',
    title: 'Batalha Naval no Golfo Pérsico',
    year: '1988',
    location: 'Golfo Pérsico (Plataformas Sassan & Sirri)',
    theater: 'US Navy Middle East Force (CENTCOM)',
    defconRecommended: 1,
    overview: 'A maior batalha de superfície da Marinha dos EUA desde a Segunda Guerra Mundial. Resposta imediata ao minamento do destróier USS Samuel B. Roberts (FFG-58).',
    target: 'Plataformas de Armas Iranianas Sassan & Fragata Sahand',
    intelReport: {
      classification: 'CONFIDENTIAL // SECRET NAVAL DISPATCH',
      summary: 'Campos de minas M-08 identificados com assinaturas de fabricação confirmando intervenção nas rotas de petroleiros neutros.',
      keyFindings: [
        'Plataformas petrolíferas convertidas em postos avançados de radar e posições de mísseis antinavio.',
        'Atividade de lanchas rápidas Boghammar armadas com foguetes e metralhadoras pesadas.',
        'Presença de fragatas da Classe Vosper armadas com mísseis antinavio Seakiller.'
      ]
    },
    weatherTelemetry: {
      condition: 'Ensolarado com Calmaria no Mar',
      visibility: '15 km',
      windSpeed: '08 nós Sudeste',
      moonPhase: 'Crescente',
      temperature: '34°C'
    },
    opord: {
      phase1: 'Aviso prévio para evacuação da plataforma Sassan seguido de bombardear de saturação por destruidores da Marinha dos EUA.',
      phase2: 'Desembarque de fuzileiros navais via helicóptero AH-1 Cobra para destruição do equipamento de inteligência e radar.',
      phase3: 'Engajamento ar-superfície de jatos A-6E Intruder do porta-aviões USS Enterprise afundando a fragata Sahand e neutralizando lanchas inimigas.',
      outcome: 'Destruição completa de duas plataformas militares, 1 fragata afundada e 1 neutralizada, restabelecendo a livre navegação no Golfo.'
    },
    unitsInvolved: [
      'USS Enterprise (CVN-65) & Carrier Air Wing 11',
      'USS Wainwright (CG-28) & USS Simpson (FFG-56)',
      'US Marine Corps MAGTF Assault Force',
      'Attack Squadron VA-95 (Green Lizards)'
    ]
  },
  {
    id: 'desert-storm-air',
    codeName: 'OPERATION DESERT STORM',
    title: 'Campanha Aérea Noturna & Mísseis Tomahawk',
    year: '1991',
    location: 'Iraque / Kuweit (Bactá e Basra)',
    theater: 'US Central Command (CENTAF / NAVCENT)',
    defconRecommended: 2,
    overview: 'A mais massiva e precisa campanha de ataque aéreo stealth da história moderna, iniciando a libertação do Kuweit através da neutralização da rede de defesa aérea Kari.',
    target: 'Nós de Comando IAD, Centros de Comunicação e Silos de Scud',
    intelReport: {
      classification: 'TOP SECRET // JOINT CHIEFS OF STAFF',
      summary: 'Sistema IADS "Kari" interconectava mais de 400 radares e 1.000 lançadores de mísseis superfície-ar (SAM). A destruição dos nós de comunicação primários era essencial.',
      keyFindings: [
        'Caças F-117A Nighthawk tinham capacidade de penetração invisível no setor central de Bagdá.',
        'Mísseis de cruzeiro BGM-109 Tomahawk disparados do mar podiam voar acompanhando o relevo a 30m do solo.',
        'Helicópteros AH-64 Apache (Task Force Normandy) abriram o primeiro corredor cego destruindo radares de alerta antecipado na fronteira.'
      ]
    },
    weatherTelemetry: {
      condition: 'Céu Noturno Sem Nuvens',
      visibility: 'Excelente',
      windSpeed: '12 nós Norte',
      moonPhase: 'Lua Minguante',
      temperature: '14°C'
    },
    opord: {
      phase1: '02:38 AM: Ataque de precisão de helicópteros AH-64 Apache contra 2 estações de radar de alerta precoce.',
      phase2: '03:00 AM: Lançamento coordenado de 52 mísseis Tomahawk disparados por cruzadores e submarinos no Mar Vermelho e Golfo Pérsico.',
      phase3: 'Ataque stealth de caças F-117A lançando bombas guiadas a laser GBU-27 nos bunker do quartel-general de forças de defesa.',
      outcome: 'Cegueira estratégica da defesa aérea inimiga nas primeiras 4 horas de operação com supremacia aérea total mantida até o fim do conflito.'
    },
    unitsInvolved: [
      '37th Tactical Fighter Wing (F-117A Nighthawk)',
      'US Navy Cruiser-Destroyer Force (Tomahawk Launchers)',
      'Task Force Normandy (101st Airborne AH-64 Apache)',
      'EF-111A Raven & F-4G Wild Weasel Jamming Escalade'
    ]
  },
  {
    id: 'el-dorado-canyon',
    codeName: 'OPERATION EL DORADO CANYON',
    title: 'Ataque Noturno de Longo Alcance a Trípoli',
    year: '1986',
    location: 'Trípoli & Benghazi, Líbia',
    theater: 'US European Command (USEUCOM)',
    defconRecommended: 3,
    overview: 'Ataque cirúrgico de longo alcance executado por bombardeiros F-111F baseados no Reino Unido e caças-bombardeiros A-6E da Marinha dos EUA desdobrados no Mar Mediterrâneo.',
    target: 'Quartel de Bab al-Azizia e Bases de Treinamento Terrorista',
    intelReport: {
      classification: 'SECRET // EYES ONLY US / UK',
      summary: 'A recusa de países europeus em ceder espaço aéreo forçou um voo de contorno de mais de 10.000 km pela costa atlântica com múltiplos reabastecimentos em voo.',
      keyFindings: [
        'Necessidade de voo de altíssima velocidade e baixa altitude utilizando radar de acompanhamento de terreno (TFR).',
        'Suporte de destruição SEAD promovido por caças F/A-18A e EA-6B Prowler lançando mísseis HARM contra radares líbios.'
      ]
    },
    weatherTelemetry: {
      condition: 'Bruma Marítima Noturna',
      visibility: '6 km',
      windSpeed: '10 nós Oeste',
      moonPhase: 'Quarto Minguante',
      temperature: '18°C'
    },
    opord: {
      phase1: 'Voo de 14 horas de 18x F-111F escoltados por KC-10 Extender contornando a Península Ibérica.',
      phase2: 'Lançamento simultâneo de mísseis AGM-88 HARM por caças da Marinha do USS America e USS Coral Sea.',
      phase3: 'Bombardeio cirúrgico a baixa altitude com bombas Paveway II seguido de saída imediata sobre o Mediterrâneo.',
      outcome: 'Neutralização de infraestrutura militar estratégica e demonstração da capacidade de projeção global sem dependência de bases locais.'
    },
    unitsInvolved: [
      '48th Tactical Fighter Wing (F-111F Aardvark)',
      'Carrier Air Wing 1 (USS America & USS Coral Sea)',
      'Strategic Air Command Tanker Force (KC-135 & KC-10)',
      'EA-6B Prowler Tactical Jamming Squadron'
    ]
  }
]

// ==========================================
// UNIT COMPARISON DATA (SUBMARINES & AIRCRAFT)
// ==========================================
export const COMPARISON_UNITS: UnitSpec[] = [
  // SUBMARINES
  {
    id: 'virginia-class',
    name: 'Virginia-Class Block V',
    type: 'submarine',
    classType: 'SSN / SSGN',
    country: 'USA',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800&auto=format&fit=crop',
    metrics: {
      speed: 85,        // 35+ knots
      stealth: 98,      // Acoustic quietening state-of-the-art
      depthCeiling: 82, // 250m+
      payload: 95,      // VPM (Virginia Payload Module) = 40 Tomahawks
      range: 100        // Unlimited (Nuclear reactor 33 yrs)
    },
    realSpecs: {
      speed: '35+ nós (65 km/h submerso)',
      stealthRcs: 'Revestimento anecóico modular de 5ª Geração',
      depthCeiling: '250m+ (Test Depth Oficial Confidencial)',
      payloadCapacity: '40 Mísseis Tomahawk + 26 Torpedos MK 48',
      rangeKm: 'Ilimitado (Reator Nuclear S9G)',
      armament: 'Módulos VPM, Torpedos MK 48 MOD 7, Minas MK 67'
    }
  },
  {
    id: 'ohio-class',
    name: 'Ohio-Class SSBN',
    type: 'submarine',
    classType: 'SSBN Nuclear Deterrent',
    country: 'USA',
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=800&auto=format&fit=crop',
    metrics: {
      speed: 68,        // 25 knots
      stealth: 92,      // Ultra quiet patrol design
      depthCeiling: 80, // 240m+
      payload: 100,     // 24 Trident II D5 ICBMs
      range: 100        // Unlimited Nuclear
    },
    realSpecs: {
      speed: '25 nós (46 km/h submerso)',
      stealthRcs: 'Amortecimento acústico por turbina flutuante',
      depthCeiling: '240m+',
      payloadCapacity: '24 Mísseis Balísticos Trident II D5',
      rangeKm: 'Ilimitado (Reator S8G)',
      armament: '24x Trident II D5 (até 8 ogivas MIRV por míssil)'
    }
  },
  {
    id: 'seawolf-class',
    name: 'Seawolf-Class SSN',
    type: 'submarine',
    classType: 'SSN Hunter-Killer',
    country: 'USA',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop',
    metrics: {
      speed: 96,        // 35+ knots tactical silent speed
      stealth: 99,      // Quietest submarine ever built by US Navy
      depthCeiling: 98, // 500m+ HY-100 steel hull
      payload: 90,      // 50 weapons (8 torpedo tubes)
      range: 100        // Unlimited Nuclear
    },
    realSpecs: {
      speed: '35 nós silêncio tático / 40 nós máx',
      stealthRcs: 'Sistema de propulsão por jato de bomba (Pump-Jet)',
      depthCeiling: '500m+ (Casco de Aço HY-100 de alta resistência)',
      payloadCapacity: '50 Armas (8 Tubos de Torpedo de 660mm)',
      rangeKm: 'Ilimitado (Reator S6W)',
      armament: 'Torpedos MK 48, Tomahawk Block V, Mísseis Harpoon'
    }
  },
  {
    id: 'astute-class',
    name: 'Astute-Class SSN',
    type: 'submarine',
    classType: 'SSN Fleet Submarine',
    country: 'UK',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800&auto=format&fit=crop',
    metrics: {
      speed: 80,
      stealth: 94,
      depthCeiling: 85,
      payload: 82,
      range: 100
    },
    realSpecs: {
      speed: '30 nós submerso',
      stealthRcs: '39.000 placas anecóicas de isolamento sonoro',
      depthCeiling: '300m+',
      payloadCapacity: '38 Armas (Tomahawk IV & Spearfish)',
      rangeKm: 'Ilimitado (Reator Rolls-Royce PWR2)',
      armament: 'Torpedos Spearfish, Mísseis Tomahawk Block IV'
    }
  },
  {
    id: 'borei-class',
    name: 'Borei-Class (Project 955A)',
    type: 'submarine',
    classType: 'SSBN Nuclear Deterrent',
    country: 'RUS',
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=800&auto=format&fit=crop',
    metrics: {
      speed: 75,
      stealth: 88,
      depthCeiling: 90,
      payload: 96,
      range: 100
    },
    realSpecs: {
      speed: '29 nós submerso',
      stealthRcs: 'Propulsão Pump-jet com hidro-acústica reduzida',
      depthCeiling: '400m',
      payloadCapacity: '16 Mísseis RSM-56 Bulava',
      rangeKm: 'Ilimitado (Reator OK-650V)',
      armament: '16x Mísseis Bulava SLBM + Torpedos RPK-2 Viyuga'
    }
  },

  // AIRCRAFT
  {
    id: 'f35c-lightning',
    name: 'F-35C Lightning II',
    type: 'aircraft',
    classType: '5th Gen Carrier Stealth Fighter',
    country: 'USA',
    image: 'https://images.unsplash.com/photo-1519074069444-1ba4edd16be1?q=80&w=800&auto=format&fit=crop',
    metrics: {
      speed: 72,        // Mach 1.6
      stealth: 96,      // Ultra low RCS (0.001 m2)
      depthCeiling: 78, // 50.000 ft
      payload: 85,      // 18.000 lbs external + internal
      range: 80         // 2.200 km
    },
    realSpecs: {
      speed: 'Mach 1.6 (1.960 km/h)',
      stealthRcs: 'RCS < 0,001 m² (Equivalente a uma esfera de golfe)',
      depthCeiling: '50.000 pés (15.240m)',
      payloadCapacity: '8.160 kg (Interno + Pontos Externos Beast Mode)',
      rangeKm: '2.200 km (Alcance de combate com combustível interno)',
      armament: 'AIM-120D AMRAAM, GBU-31 JDAM, AGM-154 JSOW'
    }
  },
  {
    id: 'fa18e-superhornet',
    name: 'F/A-18E/F Super Hornet Block III',
    type: 'aircraft',
    classType: '4.5th Gen Strike Fighter',
    country: 'USA',
    image: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=800&auto=format&fit=crop',
    metrics: {
      speed: 78,        // Mach 1.8
      stealth: 45,      // Reduced RCS but non-stealth
      depthCeiling: 80, // 50.000 ft
      payload: 92,      // 17.750 lbs 11 hardpoints
      range: 75         // 2.000 km
    },
    realSpecs: {
      speed: 'Mach 1.6 - 1.8 (1.915 km/h)',
      stealthRcs: 'RCS Reduzido (~1.0 m²) com tanques conformais',
      depthCeiling: '50.000 pés (15.240m)',
      payloadCapacity: '8.050 kg em 11 cabides de armas',
      rangeKm: '2.346 km com tanques externos',
      armament: 'AIM-120D, AIM-9X, AGM-84 Harpoon, JDAM, JSOW'
    }
  },
  {
    id: 'b2-spirit',
    name: 'B-2 Spirit Stealth Bomber',
    type: 'aircraft',
    classType: 'Strategic Stealth Bomber',
    country: 'USA',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop',
    metrics: {
      speed: 60,        // High Subsonic Mach 0.95
      stealth: 99,      // Flying Wing RCS < 0.0001 m2
      depthCeiling: 82, // 50.000 ft
      payload: 100,     // 40.000 lbs precision weapons
      range: 98         // 11.000 km unrefueled
    },
    realSpecs: {
      speed: 'Mach 0.95 (1.010 km/h)',
      stealthRcs: 'RCS Quase Nula (< 0,0001 m² Flying Wing)',
      depthCeiling: '50.000 pés (15.240m)',
      payloadCapacity: '18.144 kg em 2 baias internas de bombas',
      rangeKm: '11.100 km sem reabastecimento / Ilimitado com REVO',
      armament: '16x B83 Nuclear, 80x GBU-38 JDAM, 16x AGM-158 JASSM'
    }
  },
  {
    id: 'p8a-poseidon',
    name: 'P-8A Poseidon',
    type: 'aircraft',
    classType: 'Maritime Patrol & ASW',
    country: 'USA',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&auto=format&fit=crop',
    metrics: {
      speed: 65,        // 907 km/h
      stealth: 25,      // Commercial airliner derivative
      depthCeiling: 72, // 41.000 ft
      payload: 80,      // Torpedoes + Sonobuoys + Harpoon
      range: 90         // 7.500 km
    },
    realSpecs: {
      speed: '907 km/h (Mach 0.79)',
      stealthRcs: 'Não-stealth (Perfil comercial Boeing 737-800ER)',
      depthCeiling: '41.000 pés (12.496m)',
      payloadCapacity: '129 Sonobóias + 5.900 kg de armamento interno/externo',
      rangeKm: '7.500 km sem reabastecimento',
      armament: 'Torpedos MK 54, Mísseis AGM-84 Harpoon, Cargas de Profundidade'
    }
  }
]

// ==========================================
// WEAPONS RANGE ESTIMATOR DATA
// ==========================================
export const WEAPON_SYSTEMS: WeaponSystem[] = [
  {
    id: 'tomahawk-v',
    name: 'BGM-109 Tomahawk Block V',
    category: 'Cruise Missile',
    rangeKm: 1600,
    speedMach: 'Mach 0.74 (890 km/h)',
    warhead: '454 kg WDU-36/B de Fragmentação / Penetração',
    guidance: 'GPS / INS / TERCOM / DSMAC + Seeker Óptico/RF em Tempo Real',
    platform: 'Submarinos SSN/SSGN (VLS & Tubos) e Destruidores Arleigh Burke',
    description: 'Míssil de cruzeiro de ataque terrestre e anti-navio (MST variant) capaz de redefinir alvo em pleno voo via enlace de dados por satélite.'
  },
  {
    id: 'trident-d5',
    name: 'Trident II D5 (UGM-133A)',
    category: 'SLBM',
    rangeKm: 12000,
    speedMach: 'Mach 24 (29.000 km/h na reentrada)',
    warhead: 'Até 8 Ogivas MIRV W88 (475 kt cada) ou W76-1',
    guidance: 'Navegação Inercial Astro-Guiada (Precisão CEP < 90m)',
    platform: 'Submarinos SSBN Classe Ohio (US) & Vanguard (UK)',
    description: 'O pilar da triade de dissuasão nuclear estratégica lançada por submarinos sob o oceano com alcance intercontinental.'
  },
  {
    id: 'harpoon-block2',
    name: 'AGM-84 / RGM-84 Harpoon Block II',
    category: 'Anti-Ship Missile',
    rangeKm: 240,
    speedMach: 'Mach 0.85 (1.040 km/h)',
    warhead: '221 kg de Alto Explosivo de Penetração',
    guidance: 'GPS / INS + Radar Ativo Terminal Sea-Skimming (Voo Rente ao Mar)',
    platform: 'Caças F/A-18, P-8A Poseidon, Navios de Superfície e Submarinos',
    description: 'Míssil antinavio padrão da OTAN para neutralização de embarcações inimigas com perfil de voo a poucos metros da crista das ondas.'
  },
  {
    id: 'mk48-mod7',
    name: 'Torpedo Heavyweight MK 48 MOD 7 ADCAP',
    category: 'Heavyweight Torpedo',
    rangeKm: 50,
    speedMach: '55+ nós (102 km/h sob a água)',
    warhead: '292 kg PBXN-103 (Destruição por Onda de Choque de Quebra de Quilha)',
    guidance: 'Guiado por Fio de Fibra Óptica + Sonar Ativo/Passivo Acústico Autônomo',
    platform: 'Submarinos de Ataque Rápido da Marinha dos EUA (Virginia, Seawolf, Los Angeles)',
    description: 'Torpedo pesado de alta velocidade projetado para explodir diretamente abaixo da quilha de navios ou perseguir submarinos em profundidades extremas.'
  },
  {
    id: 'aim120d-amraam',
    name: 'AIM-120D AMRAAM',
    category: 'Air-to-Air Missile',
    rangeKm: 160,
    speedMach: 'Mach 4.0 (4.900 km/h)',
    warhead: '20 kg de Fragmentação de Explosão de Alta Velocidade',
    guidance: 'GPS / INS + Radar Ativo Milimétrico Terminal com Enlace de Dados',
    platform: 'Caças F-35C, F/A-18E/F, F-22 Raptor',
    description: 'Míssil ar-ar além do alcance visual (BVR - Beyond Visual Range) com elevada manobrabilidade e imunidade a contramedidas eletrônicas.'
  },
  {
    id: 'sm6-standard',
    name: 'RIM-174 Standard ERAM (SM-6)',
    category: 'Surface-to-Air Missile',
    rangeKm: 370,
    speedMach: 'Mach 3.5 (4.300 km/h)',
    warhead: '64 kg de Fragmentação de Detonação de Proximidade',
    guidance: 'Radar Guiado AEGIS + Seeker Ativo AMRAAM Terminal',
    platform: 'Cruzadores Ticonderoga e Destruidores Arleigh Burke com Sistema AEGIS',
    description: 'Míssil multi-missão capaz de interceptar mísseis balísticos na fase terminal, caças inimigos e alvos de superfície além do horizonte.'
  }
]
