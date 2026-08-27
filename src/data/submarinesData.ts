export type LocalizedString = {
  en: string
  pt: string
}

export type LocalizedList = {
  en: string[]
  pt: string[]
}

export interface SubmarineClass {
  id: string
  name: string | LocalizedString
  code: string
  type: 'SSBN' | 'SSN' | 'SSGN' | 'SSK' | 'AIP'
  typeLabel: string | LocalizedString
  status: string | LocalizedString
  displacement: string | LocalizedString
  length: string | LocalizedString
  beam: string | LocalizedString
  speed: string | LocalizedString
  maxDepth: string | LocalizedString
  propulsion: string | LocalizedString
  crew: string | LocalizedString
  endurance: string | LocalizedString
  armament: string[] | LocalizedList
  notableUnits: string[]
  description: string | LocalizedString
  tacticalRole: string | LocalizedString
}

export interface SubmarineMission {
  id: string
  name: string | LocalizedString
  codeName: string
  period: string
  theater: string | LocalizedString
  type: string | LocalizedString
  status: string | LocalizedString
  description: string | LocalizedString
  keyObjective: string | LocalizedString
}

export interface SubmarineBase {
  id: string
  name: string | LocalizedString
  nativeName?: string
  location: string | LocalizedString
  coordinates: string
  fleet: string | LocalizedString
  status: string | LocalizedString
  homeportedClasses: string[] | LocalizedList
  description: string | LocalizedString
}

export interface CountryDossier {
  id: string
  name: string | LocalizedString
  englishName: string
  flagCode: string
  navalBranch: string | LocalizedString
  motto: string | LocalizedString
  activeSubmarineEstimate: number
  primaryFleetCommand: string | LocalizedString
  stealthLevel: string | LocalizedString
  nuclearCapability: boolean
  overview: string | LocalizedString
  doctrinalFocus: string | LocalizedString
  classes: SubmarineClass[]
  missions: SubmarineMission[]
  bases: SubmarineBase[]
}

export function getText(field: string | LocalizedString | undefined, lang: 'en' | 'pt'): string {
  if (!field) return ''
  if (typeof field === 'string') return field
  return field[lang] || field.en || ''
}

export function getList(field: string[] | LocalizedList | undefined, lang: 'en' | 'pt'): string[] {
  if (!field) return []
  if (Array.isArray(field)) return field
  return field[lang] || field.en || []
}

export const SUBMARINE_DOSSIERS: CountryDossier[] = [
  {
    id: 'usa',
    name: { en: 'United States', pt: 'Estados Unidos' },
    englishName: 'United States',
    flagCode: 'US',
    navalBranch: { en: 'United States Navy (USN) // Submarine Force', pt: 'United States Navy (USN) // Força de Submarinos' },
    motto: { en: 'Run Silent, Run Deep', pt: 'Navegue em Silêncio, Navegue nas Profundezas' },
    activeSubmarineEstimate: 67,
    primaryFleetCommand: { en: 'COMSUBFOR (Commander, Submarine Forces)', pt: 'COMSUBFOR (Comando de Forças Submarinas)' },
    stealthLevel: { en: 'S-Tier (Maximum)', pt: 'S-Tier (Máximo)' },
    nuclearCapability: true,
    overview: {
      en: 'The United States Navy operates the most technologically advanced 100% nuclear-powered submarine fleet on Earth. Divided between Atlantic and Pacific commands, US doctrine combines global power projection, strategic nuclear triad deterrence, and premier Anti-Submarine Warfare (ASW) surveillance.',
      pt: 'A Marinha dos Estados Unidos opera a frota de submarinos 100% movida a energia nuclear mais capaz e tecnologicamente avançada do planeta. Dividida em frota do Atlântico e do Pacífico, sua doutrina combina projeção de poder global, dissuasão nuclear estratégica triádica e prolífica vigilância de guerra antisubmarino (ASW).'
    },
    doctrinalFocus: {
      en: 'Global Oceanic Dominance, Primary Nuclear Deterrence, and Special Operations Insertion.',
      pt: 'Dominância Global Oceânica, Dissuasão Nuclear Primária e Inserção de Operações Especiais.'
    },
    classes: [
      {
        id: 'ohio-class',
        name: { en: 'Ohio Class', pt: 'Classe Ohio' },
        code: 'SSBN / SSGN',
        type: 'SSBN',
        typeLabel: { en: 'Nuclear Ballistic / Cruise Missile Submarine', pt: 'Submarino Balístico Nuclear / Mísseis de Cruzeiro' },
        status: { en: 'Active', pt: 'Ativo' },
        displacement: { en: '18,750 tons (submerged)', pt: '18.750 toneladas (submerso)' },
        length: '170.7 m',
        beam: '12.8 m',
        speed: { en: '25+ knots (submerged)', pt: '25+ nós (submerso)' },
        maxDepth: '> 240 m',
        propulsion: { en: 'General Electric S8G Nuclear Reactor', pt: 'Reator Nuclear General Electric S8G' },
        crew: { en: '155 (15 officers, 140 enlisted)', pt: '155 (15 oficiais, 140 praças)' },
        endurance: { en: 'Unlimited (limited only by human provisions)', pt: 'Ilimitada (limitada apenas por provisões humanas)' },
        armament: {
          en: [
            '24x Trident II D5 Submarine-Launched Ballistic Missiles (SSBN vessels)',
            'Up to 154x BGM-109 Tomahawk Cruise Missiles (SSGN converted vessels)',
            '4x 533mm Torpedo Tubes for Mk-48 ADCAP Torpedoes'
          ],
          pt: [
            '24x Mísseis Balísticos Intercontinentais Trident II D5 (Vessels SSBN)',
            'até 154x Mísseis de Cruzeiro BGM-109 Tomahawk (Vessels SSGN)',
            '4x Tubos de Torpedo de 533mm Mk-48 ADCAP'
          ]
        },
        notableUnits: ['USS Ohio (SSGN-726)', 'USS Michigan (SSGN-727)', 'USS Maryland (SSBN-738)', 'USS Wyoming (SSBN-742)'],
        description: {
          en: 'Backbone of American nuclear strategic deterrence since the 1980s. Four vessels were converted to SSGN configuration to carry up to 154 Tomahawks and host Navy SEAL special forces operations.',
          pt: 'Espinha dorsal da dissuasão nuclear americana desde os anos 80. Quatro unidades foram convertidas em SSGN carregando 154 Tomahawks e suporte a operadores Navy SEALs.'
        },
        tacticalRole: { en: 'Strategic Nuclear Deterrence & Massive Precision Strike', pt: 'Dissuasão Estratégica Nuclear & Ataque de Precisão Maciço' }
      },
      {
        id: 'virginia-class',
        name: { en: 'Virginia Class', pt: 'Classe Virginia' },
        code: 'SSN-774',
        type: 'SSN',
        typeLabel: { en: 'Next-Generation Nuclear Attack Submarine', pt: 'Submarino de Ataque Nuclear de Nova Geração' },
        status: { en: 'Active', pt: 'Ativo' },
        displacement: { en: '7,900 tons (submerged - Block I-IV) / 10,200t (Block V VPM)', pt: '7.900 toneladas (submerso - Block I-IV) / 10.200t (Block V VPM)' },
        length: '115 m (Block I-IV) / 140 m (Block V)',
        beam: '10.4 m',
        speed: { en: '25+ knots (submerged)', pt: '25+ nós (submerso)' },
        maxDepth: '> 250 m',
        propulsion: { en: 'S9G Nuclear Reactor (33-year core life)', pt: 'Reator Nuclear S9G (Vida útil do núcleo de 33 anos)' },
        crew: { en: '135 personnel', pt: '135 tripulantes' },
        endurance: { en: 'Unlimited', pt: 'Ilimitada' },
        armament: {
          en: [
            '12x Tomahawk Cruise Missiles in VLS cells (Block I-IV)',
            'Up to 40x Tomahawk / Hypersonic Weapons with VPM module (Block V)',
            '4x 533mm Torpedo Tubes for Mk-48 CBASS'
          ],
          pt: [
            '12x Mísseis de Cruzeiro Tomahawk em células VLS (Block I-IV)',
            'até 40x Tomahawk / Hypersonic Weapons com VPM (Block V)',
            '4x Tubos de Torpedo 533mm Mk-48 CBASS'
          ]
        },
        notableUnits: ['USS Virginia (SSN-774)', 'USS Hawaii (SSN-776)', 'USS Washington (SSN-787)', 'USS Vermont (SSN-792)'],
        description: {
          en: 'Multi-mission nuclear attack submarine designed for both blue-water oceans and shallow littoral environments. Equipped with digital photonic masts and cutting-edge acoustic silencing.',
          pt: 'Submarino de ataque multi-missão projetado para operar em águas profundas e litorâneas rasas. Equipado com mastros fotônicos digitais e silenciamento acústico de ponta.'
        },
        tacticalRole: { en: 'Anti-Submarine Warfare (ASW), Land Attack & ISR Surveillance', pt: 'Guerra Antisubmarino (ASW), Ataque Terrestre e Vigilância ISR' }
      },
      {
        id: 'seawolf-class',
        name: { en: 'Seawolf Class', pt: 'Classe Seawolf' },
        code: 'SSN-21',
        type: 'SSN',
        typeLabel: { en: 'High-Performance Nuclear Attack Submarine', pt: 'Submarino de Ataque Nuclear de Alta Performance' },
        status: { en: 'Active', pt: 'Ativo' },
        displacement: { en: '9,138 tons (submerged)', pt: '9.138 toneladas (submerso)' },
        length: '107.6 m (USS Jimmy Carter: 138 m)',
        beam: '12.2 m',
        speed: { en: '35 knots (submerged)', pt: '35 nós (submerso)' },
        maxDepth: '> 500 m',
        propulsion: { en: 'Westinghouse S6W Nuclear Reactor', pt: 'Reator Nuclear Westinghouse S6W' },
        crew: { en: '140 personnel', pt: '140 tripulantes' },
        endurance: { en: 'Unlimited', pt: 'Ilimitada' },
        armament: {
          en: [
            '8x 660mm Torpedo Tubes (Capacity for 50 weapons)',
            'Tomahawk and Harpoon missiles launched via torpedo tubes'
          ],
          pt: [
            '8x Tubos de Torpedo de 660mm (Capacidade para 50 armas)',
            'Mísseis Tomahawk e Harpoon lançados por tubo de torpedo'
          ]
        },
        notableUnits: ['USS Seawolf (SSN-21)', 'USS Connecticut (SSN-22)', 'USS Jimmy Carter (SSN-23)'],
        description: {
          en: 'Developed at the peak of the Cold War to hunt the most advanced Soviet submarines. Exceptionally fast, deep-diving, and quiet. USS Jimmy Carter features an extended hull section for special underwater espionage missions.',
          pt: 'Desenvolvido durante o auge da Guerra Fria para caçar os submarinos soviéticos mais avançados. Extremamente veloz, profundo e silencioso. O USS Jimmy Carter possui extensão especial para missões clandestinas de inteligência e espionagem submarina.'
        },
        tacticalRole: { en: 'Elite Sub-Hunter & Undersea Clandestine Espionage (USS Jimmy Carter)', pt: 'Caça-Submarino de Elite & Operações Especiais de Inteligência (USS Jimmy Carter)' }
      },
      {
        id: 'los-angeles-class',
        name: { en: 'Los Angeles Class', pt: 'Classe Los Angeles' },
        code: 'SSN-688 / SSN-688i',
        type: 'SSN',
        typeLabel: { en: 'Workhorse Fast Attack Nuclear Submarine', pt: 'Submarino de Ataque Nuclear de Segunda Geração' },
        status: { en: 'Active', pt: 'Ativo' },
        displacement: { en: '6,927 tons (submerged)', pt: '6.927 toneladas (submerso)' },
        length: '110.3 m',
        beam: '10 m',
        speed: { en: '32+ knots (submerged)', pt: '32+ nós (submerso)' },
        maxDepth: '450 m',
        propulsion: { en: 'General Electric S6G Nuclear Reactor', pt: 'Reator Nuclear General Electric S6G' },
        crew: { en: '129 (12 officers, 117 enlisted)', pt: '129 (12 oficiais, 117 praças)' },
        endurance: { en: 'Unlimited', pt: 'Ilimitada' },
        armament: {
          en: [
            '4x 533mm Torpedo Tubes (Mk-48 ADCAP Torpedoes)',
            '12x Vertical Launch System (VLS) tubes for BGM-109 Tomahawk (Flight II/III)',
            'UGM-84 Harpoon Anti-Ship Missiles',
            'Mk-67 Mobile Mines'
          ],
          pt: [
            '4x Tubos de Torpedo 533mm (Torpedos Mk-48 ADCAP)',
            '12x Células VLS de Lançamento Vertical para Tomahawk BGM-109 (Flight II/III)',
            'Mísseis Anti-Navio UGM-84 Harpoon',
            'Minas Submarinas Mk-67'
          ]
        },
        notableUnits: ['USS Chicago (SSN-721)', 'USS Key West (SSN-722)', 'USS Helena (SSN-725)', 'USS Annapolis (SSN-760)', 'USS Springfield (SSN-761)'],
        description: {
          en: 'The most numerous class of nuclear submarines ever built by any nation (62 total vessels built). The backbone of the US Navy Fast Attack fleet for decades, heavily modernized with 688i acoustic quieting, bow planes relocation, and VLS Tomahawk launch tubes.',
          pt: 'A classe de submarinos nucleares mais numerosa já construída por uma nação no pós-Guerra Fria (62 unidades). Formou a espinha dorsal da frota de ataque rápido dos EUA por décadas, modernizada com a variante 688i de alto silenciamento acústico e células VLS.'
        },
        tacticalRole: { en: 'Anti-Submarine Warfare (ASW), Carrier Strike Group Escort & Tomahawk Strike', pt: 'Guerra Antisubmarino (ASW), Escolta de Grupos de Combate & Ataque Tomahawk' }
      },
      {
        id: 'columbia-class',
        name: { en: 'Columbia Class', pt: 'Classe Columbia' },
        code: 'SSBN-826',
        type: 'SSBN',
        typeLabel: { en: 'Next-Generation Nuclear Ballistic Submarine', pt: 'Submarino Balístico Nuclear de Próxima Geração' },
        status: { en: 'Under Construction', pt: 'Em Construção' },
        displacement: { en: '20,810 tons (submerged)', pt: '20.810 toneladas (submerso)' },
        length: '171 m',
        beam: '13 m',
        speed: { en: '20+ knots (submerged)', pt: '20+ nós (submerso)' },
        maxDepth: '> 250 m',
        propulsion: { en: 'Electric Drive with S1B Nuclear Reactor', pt: 'Propulsão Elétrica Direta com Reator Nuclear S1B' },
        crew: { en: '155 personnel', pt: '155 tripulantes' },
        endurance: { en: '42-year service life without reactor refueling', pt: '42 anos de vida útil sem reabastecimento do reator' },
        armament: {
          en: [
            '16x Trident II D5 LE Submarine-Launched Ballistic Missiles',
            'Automated Torpedo Defense Systems'
          ],
          pt: [
            '16x Mísseis Balísticos Trident II D5 LE',
            'Sistemas de defesa torpedo automatizados'
          ]
        },
        notableUnits: ['USS District of Columbia (SSBN-826)', 'USS Wisconsin (SSBN-827)'],
        description: {
          en: 'Future SSBN class that will gradually replace the Ohio class starting in 2031. Features ultra-quiet electric drive propulsion and a reactor designed for life of the ship.',
          pt: 'Futura classe que substituirá gradualmente a classe Ohio a partir de 2031. Incorpora propulsão elétrica ultra-silenciosa e reator nuclear sem necessidade de reabastecimento durante toda sua vida operacional.'
        },
        tacticalRole: { en: '21st Century Strategic Nuclear Deterrence', pt: 'Dissuasão Nuclear do Século XXI' }
      }
    ],
    missions: [
      {
        id: 'deterrence-patrol',
        name: { en: 'Strategic Nuclear Deterrence Patrols', pt: 'Patrulhas de Dissuasão Nuclear Estratégica' },
        codeName: 'OPERATION SILENT GUARDIAN',
        period: '1960 - Present',
        theater: { en: 'Global (Atlantic, Pacific & Arctic Oceans)', pt: 'Global (Oceanos Atlântico, Pacífico e Ártico)' },
        type: { en: 'Nuclear Deterrence / Second Strike', pt: 'Dissuasão Nuclear / Segunda Resposta' },
        status: { en: 'Active', pt: 'Ativa' },
        description: {
          en: 'Continuous patrols by Ohio SSBN submarines keeping 4 to 6 vessels on high launch alert at all times.',
          pt: 'Patrulhas contínuas de submarinos SSBN Ohio mantendo pelo menos 4 a 6 embarcações em estado de alerta máximo de lançamento nuclear a qualquer momento.'
        },
        keyObjective: {
          en: 'Guarantee uninhibited US nuclear retaliatory capability against any adversary attack.',
          pt: 'Garantir a capacidade irrestrita de retaliação nuclear dos EUA contra qualquer ataque inimigo.'
        }
      },
      {
        id: 'undersea-cable-tap',
        name: { en: 'Undersea Cable Reconnaissance & Espionage', pt: 'Reconhecimento de Cabos Submarinos e Clandestinidade' },
        codeName: 'OPERATION SHADOW GRID',
        period: '1970s - Present',
        theater: { en: 'International Seas & Arctic Region', pt: 'Mares Internacionais e Zona Ártica' },
        type: { en: 'Signals Intelligence (SIGINT) & Special Collection', pt: 'Inteligência de Sinais (SIGINT) & Coleta Especial' },
        status: { en: 'Classified', pt: 'Confidencial' },
        description: {
          en: 'Top-secret missions conducted by specialized units (such as USS Jimmy Carter) tapping undersea fiber-optic cables and monitoring adversary naval assets.',
          pt: 'Missões altamente secretas conduzidas por unidades modificadas (como USS Jimmy Carter) para acoplamento em cabos de fibra ótica submarinos e escuta de comunicações estratégicas adversárias.'
        },
        keyObjective: {
          en: 'Interception of foreign military communications and underwater cable monitoring.',
          pt: 'Interceptação de comunicações militares e monitoramento de ativos submarinos estrangeiros.'
        }
      }
    ],
    bases: [
      {
        id: 'kings-bay',
        name: { en: 'Naval Submarine Base Kings Bay', pt: 'Naval Submarine Base Kings Bay' },
        location: { en: 'Georgia, United States', pt: 'Geórgia, Estados Unidos' },
        coordinates: '30°47′59″N 81°31′42″W',
        fleet: { en: 'Atlantic Fleet (SUBGROUP 10)', pt: 'Frota do Atlântico (SUBGROUP 10)' },
        status: { en: 'Operational (Active)', pt: 'Operacional (Ativa)' },
        homeportedClasses: ['Ohio Class (SSBN / SSGN)'],
        description: {
          en: 'Primary East Coast ballistic submarine base, equipped with advanced nuclear maintenance facilities and Trident II missile storage.',
          pt: 'Principal base de submarinos balísticos da Costa Leste dos EUA, equipada com instalações avançadas de manutenção nuclear e armazenamento de mísseis Trident II.'
        }
      },
      {
        id: 'kitsap-bangor',
        name: { en: 'Naval Base Kitsap - Bangor', pt: 'Naval Base Kitsap - Bangor' },
        location: { en: 'Washington, United States', pt: 'Washington, Estados Unidos' },
        coordinates: '47°43′14″N 122°43′03″W',
        fleet: { en: 'Pacific Fleet (SUBGROUP 9)', pt: 'Frota do Pacífico (SUBGROUP 9)' },
        status: { en: 'Operational (Active)', pt: 'Operacional (Ativa)' },
        homeportedClasses: ['Ohio Class (SSBN / SSGN)', 'Seawolf Class (SSN-21, SSN-23)'],
        description: {
          en: 'Largest deployed nuclear weapon stockpile base in the US. Homeport for Pacific SSBNs and USS Jimmy Carter.',
          pt: 'O maior arsenal de mísseis nucleares implantados dos EUA. Sede dos submarinos balísticos do Pacífico e do navio especial USS Jimmy Carter.'
        }
      },
      {
        id: 'new-london',
        name: { en: 'Naval Submarine Base New London', pt: 'Naval Submarine Base New London' },
        location: { en: 'Groton, Connecticut, USA', pt: 'Groton, Connecticut, EUA' },
        coordinates: '41°23′53″N 72°05′13″W',
        fleet: { en: 'Atlantic Fleet (SUBSQUADRON 2, 4, 12)', pt: 'Frota do Atlântico (SUBSQUADRON 2, 4, 12)' },
        status: { en: 'Operational (Active)', pt: 'Operacional (Ativa)' },
        homeportedClasses: ['Virginia Class (SSN)', 'Los Angeles Class (SSN)'],
        description: {
          en: 'Known as "The Home of the Submarine Force". First US Navy submarine base and primary tactical training center.',
          pt: 'Conhecida como "The Home of the Submarine Force". Primeira base de submarinos da Marinha dos EUA e centro de treinamento tático do Silent Service.'
        }
      },
      {
        id: 'pearl-harbor',
        name: { en: 'Joint Base Pearl Harbor-Hickam (Sub Base)', pt: 'Joint Base Pearl Harbor-Hickam (Sub Base)' },
        location: { en: 'Hawaii, United States', pt: 'Havaí, Estados Unidos' },
        coordinates: '21°21′12″N 157°57′18″W',
        fleet: { en: 'Pacific Fleet (SUBPAC / SUBSQUADRON 1, 7)', pt: 'Frota do Pacífico (SUBPAC / SUBSQUADRON 1, 7)' },
        status: { en: 'Operational (Active)', pt: 'Operacional (Ativa)' },
        homeportedClasses: ['Virginia Class (SSN)', 'Los Angeles Class (SSN)'],
        description: {
          en: 'Strategic Indo-Pacific attack submarine hub for rapid crisis response.',
          pt: 'Hub estratégico de projeção de submarinos de ataque no Indo-Pacífico para resposta rápida em situações de crise.'
        }
      },
      {
        id: 'norfolk',
        name: { en: 'Naval Station Norfolk (Submarine Piers)', pt: 'Estação Naval de Norfolk (Cais de Submarinos)' },
        location: { en: 'Norfolk, Virginia, USA', pt: 'Norfolk, Virgínia, EUA' },
        coordinates: '36°56′58″N 76°19′40″W',
        fleet: { en: 'Atlantic Fleet (SUBRON 6 & 8)', pt: 'Frota do Atlântico (SUBRON 6 & 8)' },
        status: { en: 'Operational (Active)', pt: 'Operacional (Ativa)' },
        homeportedClasses: ['Virginia Class (SSN)', 'Los Angeles Class (SSN)'],
        description: {
          en: 'The world\'s largest naval station, serving as the primary hub for US Navy Atlantic attack submarines.',
          pt: 'A maior estação naval do mundo, atuando como o principal hub para submarinos de ataque do Atlântico da US Navy.'
        }
      },
      {
        id: 'point-loma',
        name: { en: 'Naval Base Point Loma', pt: 'Base Naval de Point Loma' },
        location: { en: 'San Diego, California, USA', pt: 'San Diego, Califórnia, EUA' },
        coordinates: '32°42′10″N 117°14′15″W',
        fleet: { en: 'Pacific Fleet (SUBRON 11)', pt: 'Frota do Pacífico (SUBRON 11)' },
        status: { en: 'Operational (Active)', pt: 'Operacional (Ativa)' },
        homeportedClasses: ['Los Angeles Class (SSN)', 'Virginia Class (SSN)', 'Undersea Rescue Command'],
        description: {
          en: 'Southern California fast attack submarine hub, home to Submarine Squadron 11 and the US Navy Undersea Rescue Command.',
          pt: 'Hub de submarinos de ataque do Sul da Califórnia, sede do Esquadrão Submarino 11 e do Comando de Resgate Submarino da Marinha dos EUA.'
        }
      }
    ]
  },
  {
    id: 'russia',
    name: { en: 'Russia', pt: 'Rússia' },
    englishName: 'Russia',
    flagCode: 'RU',
    navalBranch: { en: 'Russian Navy (VMF) // Submarine Fleet', pt: 'Marinha Russa (VMF) // Frota de Submarinos' },
    motto: { en: 'Служу России! (Serving Russia!)', pt: 'Служу России! (Servindo a Rússia!)' },
    activeSubmarineEstimate: 58,
    primaryFleetCommand: { en: 'Northern Fleet & Pacific Fleet Submarine Command', pt: 'Frota do Norte e Frota do Pacífico (Comando Submarino)' },
    stealthLevel: { en: 'S-Tier (Maximum)', pt: 'S-Tier (Máximo)' },
    nuclearCapability: true,
    overview: {
      en: 'Russia operates one of the most diverse and powerful submarine forces in the world, famed for double-hull titanium/high-tensile steel engineering, asymmetric capabilities like the Poseidon autonomous nuclear drone, and Zircon hypersonic missiles.',
      pt: 'A Rússia possui uma das forças de submarinos mais diversificadas e formidáveis do mundo, famosa por suas engenhosas estruturas de casco duplo em liga de titânio ou aço de alta resistência, armas assimétricas como o torpedo autônomo Poseidon e mísseis hipersônicos Zircon.'
    },
    doctrinalFocus: {
      en: 'Arctic Bastion Strategy, Anti-Access/Area Denial (A2/AD) and Destructive Nuclear Deterrence.',
      pt: 'Bastião Ártico, Negação de Acesso (A2/AD) e Dissuasão Nuclear Destrutiva.'
    },
    classes: [
      {
        id: 'borei-class',
        name: { en: 'Borei Class (Project 955 / 955A)', pt: 'Classe Borei (Projeto 955 / 955A)' },
        code: 'Project 955 / 955A',
        type: 'SSBN',
        typeLabel: { en: '4th Generation Nuclear Ballistic Submarine', pt: 'Submarino Balístico Nuclear de 4ª Geração' },
        status: { en: 'Active', pt: 'Ativo' },
        displacement: { en: '24,000 tons (submerged)', pt: '24.000 toneladas (submerso)' },
        length: '170 m',
        beam: '13.5 m',
        speed: { en: '29 knots (submerged)', pt: '29 nós (submerso)' },
        maxDepth: '450 m',
        propulsion: { en: 'OK-650V Nuclear Reactor with Pump-jet propulsion', pt: 'Reator Nuclear OK-650V com propulsor Pump-jet' },
        crew: { en: '107 personnel', pt: '107 tripulantes' },
        endurance: { en: '90 days submerged patrol', pt: '90 dias de patrulha submersa contínua' },
        armament: {
          en: [
            '16x RSM-56 Bulava SLBMs (6-10 MIRV warheads)',
            '6x 533mm Torpedo Tubes (RPK-2 Viyuga / Physalis Torpedoes)'
          ],
          pt: [
            '16x Mísseis Balísticos RSM-56 Bulava (MIRV 6-10 ogivas)',
            '6x Tubos de Torpedo 533mm (RPK-2 Viyuga / Torpedos Physalis)'
          ]
        },
        notableUnits: ['Yury Dolgorukiy', 'Knyaz Vladimir (955A)', 'Knyaz Oleg', 'Generalissimus Suvorov'],
        description: {
          en: 'New generation of Russian SSBNs replacing Soviet Delta III/IV and Typhoon classes. First Russian submarines to adopt pump-jet propulsion to dramatically drop acoustic signatures.',
          pt: 'Nova geração de submarinos balísticos russos. Substituiu as antigas classes Delta III/IV e Typhoon. Primeiros submarinos russos a adotar propulsão pump-jet, reduzindo significativamente o nível de ruído acústico.'
        },
        tacticalRole: { en: 'First & Second Strike Strategic Deterrence', pt: 'Dissuasão Nuclear de Primeira e Segunda Resposta' }
      },
      {
        id: 'yasen-class',
        name: { en: 'Yasen / Yasen-M Class (Project 885 / 885M)', pt: 'Classe Yasen / Yasen-M (Projeto 885 / 885M)' },
        code: 'Project 885M',
        type: 'SSGN',
        typeLabel: { en: 'Nuclear Guided Missile Attack Submarine', pt: 'Submarino de Ataque Nuclear de Mísseis Guiados' },
        status: { en: 'Active', pt: 'Ativo' },
        displacement: { en: '13,800 tons (submerged)', pt: '13.800 toneladas (submerso)' },
        length: '130 m',
        beam: '13 m',
        speed: { en: '35 knots (submerged)', pt: '35 nós (submerso)' },
        maxDepth: '600 m',
        propulsion: { en: '4th Gen KTP-6 Nuclear Reactor', pt: 'Reator Nuclear de 4ª Geração KTP-6' },
        crew: { en: '64 personnel (High automation)', pt: '64 tripulantes (Alta automação)' },
        endurance: { en: '100 days', pt: '100 dias' },
        armament: {
          en: [
            '8x Quad VLS Silos (32x Kalibr, Oniks or 3M22 Zircon Hypersonic Missiles)',
            '10x 533mm Torpedo Tubes amidships'
          ],
          pt: [
            '8x Silos VLS quadruplos (32x Mísseis Kalibr, Oniks ou Hipersônico 3M22 Zircon)',
            '10x Tubos de Torpedo de 533mm no centro do navio'
          ]
        },
        notableUnits: ['Severodvinsk (Project 885)', 'Kazan (885M)', 'Novosibirsk (885M)', 'Krasnoyarsk (885M)'],
        description: {
          en: 'Among the quietest and most lethal attack submarines built by Russia. Features a massive spherical bow sonar array with angled amidship torpedo tubes.',
          pt: 'Considerado um dos submarinos mais letais e silenciosos já construídos pela Rússia. O sonar esférico ocupa todo a proa, deslocando os tubos de torpedo para as laterais.'
        },
        tacticalRole: { en: 'Hypersonic Precision Strike & Anti-Surface / ASW Warfare', pt: 'Ataque de Precisão Hipersônico e Guerra Anti-Superfície / ASW' }
      },
      {
        id: 'belgorod-class',
        name: { en: 'Belgorod Class (Project 09852)', pt: 'Classe Belgorod (Projeto 09852)' },
        code: 'BS-329 / Project 09852',
        type: 'SSGN',
        typeLabel: { en: 'Special Purpose Nuclear Submarine & Poseidon Carrier', pt: 'Submarino Nuclear de Missões Especiais e Portador de Poseidon' },
        status: { en: 'Active', pt: 'Ativo' },
        displacement: { en: '30,000 tons (submerged - longest submarine in service)', pt: '30.000 toneladas (submerso - maior submarino em operação)' },
        length: '184 m (longest submarine in history)',
        beam: '18.2 m',
        speed: { en: '32 knots (submerged)', pt: '32 nós (submerso)' },
        maxDepth: '510 m',
        propulsion: { en: '2x OK-650V Nuclear Reactors (190 MW each)', pt: '2x Reatores Nucleares OK-650V (190 MW cada)' },
        crew: { en: '110 personnel', pt: '110 tripulantes' },
        endurance: { en: '120 days', pt: '120 dias' },
        armament: {
          en: [
            '6x Poseidon (Status-6 / KANYON) Autonomous Intercontinental Nuclear Torpedo Drones',
            '533mm Torpedo Tubes',
            'Underbody docking station for Losharik / Klavesin deep-diving midget subs'
          ],
          pt: [
            '6x Torpedos Autônomos Nucleares Intercontinentais Poseidon (Status-6 / KANYON)',
            'Tubos de Torpedo 533mm',
            'Módulo para Mini-submarino de Profundidade Klavesin-1R / Losharik (Projeto 10831)'
          ]
        },
        notableUnits: ['BS-329 Belgorod'],
        description: {
          en: 'Modified from an Oscar II SSGN hull, Belgorod is the longest submarine in naval history (184m). Serves as a mother-ship for clandestine deep-sea seabed engineering & host for Poseidon nuclear tsunami-generating autonomous drones.',
          pt: 'Modificado a partir do casco de um SSGN da classe Oscar II, o Belgorod é o submarino mais longo da história naval (184m). Servindo como plataforma-mãe de operações especiais no leito marinho e portador exclusivo dos robôs nucleares Poseidon.'
        },
        tacticalRole: { en: 'Asymmetric Nuclear Deterrence (Poseidon) & Clandestine Deep Seabed Warfare', pt: 'Dissuasão Nuclear Assimétrica (Poseidon) & Operações Secretas no Leito Marinho' }
      },
      {
        id: 'akula-class',
        name: { en: 'Akula Class (Project 971 Shchuka-B)', pt: 'Classe Akula (Projeto 971 Shchuka-B)' },
        code: 'Project 971',
        type: 'SSN',
        typeLabel: { en: 'Double-Hull Nuclear Attack Submarine', pt: 'Submarino de Ataque Nuclear de Casco Duplo' },
        status: { en: 'Active', pt: 'Ativo' },
        displacement: { en: '12,770 tons (submerged)', pt: '12.770 toneladas (submerso)' },
        length: '111.7 m',
        beam: '13.6 m',
        speed: { en: '33 knots (submerged)', pt: '33 nós (submerso)' },
        maxDepth: '520 m',
        propulsion: { en: 'OK-650M Nuclear Reactor (190 MW)', pt: 'Reator Nuclear OK-650M (190 MW)' },
        crew: { en: '73 personnel', pt: '73 tripulantes' },
        endurance: { en: '100 days', pt: '100 dias' },
        armament: {
          en: [
            '4x 533mm + 4x 650mm Torpedo Tubes',
            'Granat / Kalibr-PL Cruise Missiles & Vektor Torpedoes'
          ],
          pt: [
            '4x Tubos de Torpedo 533mm + 4x Tubos de Torpedo 650mm',
            'Mísseis de Cruzeiro Granat / Kalibr-PL e Torpedos Vektor'
          ]
        },
        notableUnits: ['Vepr (K-157)', 'Gepard (K-335)', 'Pantera (K-317)', 'Magadan'],
        description: {
          en: 'Historical leap in Soviet noise reduction during the late Cold War. Gepard (Akula III) variant incorporates advanced acoustic stealth coatings.',
          pt: 'Marca o salto histórico da Marinha Soviética/Russa em redução de ruído durante a fase final da Guerra Fria. O Gepard (Akula III) incorpora tecnologia stealth acústica avançada.'
        },
        tacticalRole: { en: 'Hunter-Killer & Ocean Patrol', pt: 'Caçador de Submarinos Inimigos & Patrulha Oceânica' }
      },
      {
        id: 'kilo-class',
        name: { en: 'Improved Kilo Class (Project 636.3)', pt: 'Classe Varshavyanka / Kilo Avançado (Projeto 636.3)' },
        code: 'Project 636.3',
        type: 'SSK',
        typeLabel: { en: 'Stealth Diesel-Electric Attack Submarine', pt: 'Submarino Diesel-Elétrico de Ataque Clandestino' },
        status: { en: 'Active', pt: 'Ativo' },
        displacement: { en: '3,950 tons (submerged)', pt: '3.950 toneladas (submerso)' },
        length: '73.8 m',
        beam: '9.9 m',
        speed: { en: '20 knots (submerged)', pt: '20 nós (submerso)' },
        maxDepth: '300 m',
        propulsion: { en: 'Diesel-Electric with anechoic coating', pt: 'Motor Diesel-Elétrico com revestimento anecóico' },
        crew: { en: '52 personnel', pt: '52 tripulantes' },
        endurance: { en: '45 days', pt: '45 dias' },
        armament: {
          en: [
            '6x 533mm Torpedo Tubes',
            'Kalibr-PL Submarine-Launched Cruise Missiles'
          ],
          pt: [
            '6x Tubos de Torpedo 533mm',
            'Capacidade para disparar Mísseis Kalibr-PL submersos'
          ]
        },
        notableUnits: ['Rostov-on-Don (B-237)', 'Petropavlovsk-Kamchatsky', 'Krasnodar', 'Magadan'],
        description: {
          en: 'Nicknamed "Black Hole in the Ocean" by NATO due to ultra-quiet battery electric propulsion in shallow coastal waters.',
          pt: 'Conhecido pela OTAN como "Buraco Negro no Oceano" devido ao seu silêncio absoluto quando operando com motores elétricos em baterias em águas rasas e costeiras.'
        },
        tacticalRole: { en: 'Coastal Denial & Clandestine Strike', pt: 'Negação Costeira, Ataque Clandestino e Patrulha Regional' }
      }
    ],
    missions: [
      {
        id: 'arctic-shield',
        name: { en: 'Arctic Bastion Operations', pt: 'Operação Bastião Ártico (Arctic Fortress)' },
        codeName: 'OPERATION SEVERNY SHIELD',
        period: '1975 - Present',
        theater: { en: 'Arctic Ocean Under Ice Cap', pt: 'Oceano Glacial Ártico e Sob a Calota Polar' },
        type: { en: 'Under-Ice Nuclear Patrol', pt: 'Patrulha Nuclear de Calota Polar' },
        status: { en: 'Active', pt: 'Ativa' },
        description: {
          en: 'Patrols under Arctic ice sheets where adversary sonar cannot easily penetrate.',
          pt: 'Patrulhas de submarinos balísticos sob as camadas de gelo do Ártico onde sonares inimigos não conseguem penetrar.'
        },
        keyObjective: {
          en: 'Secure launching sanctuaries invulnerable to surface ASW assets.',
          pt: 'Garantir santuários de lançamento nuclear inacessíveis a forças navais adversárias.'
        }
      }
    ],
    bases: [
      {
        id: 'polyarny',
        name: { en: 'Polyarny Naval Base (Kola Peninsula)', pt: 'Base Naval de Polyarny (Península de Kola)' },
        nativeName: 'Полярный (Кольский полуостров)',
        location: { en: 'Polyarny, Murmansk Oblast, Kola Peninsula, Russia', pt: 'Polyarny, Oblast de Murmansk, Península de Kola, Rússia' },
        coordinates: '69°11′54″N 33°27′18″E',
        fleet: { en: 'Northern Fleet (161st Submarine Brigade)', pt: 'Frota do Norte (161ª Brigada de Submarinos)' },
        status: { en: 'Operational (Active)', pt: 'Operacional (Ativa)' },
        homeportedClasses: ['Improved Kilo Class (Project 636.3)', 'Akula Class (Project 971)', 'Special Operations Submarines'],
        description: {
          en: 'Historic Kola Peninsula naval base founded in 1899. Home to the Northern Fleet 161st Submarine Brigade, famed for ice-free winter access directly to the Barents Sea.',
          pt: 'Uma das bases navais históricas mais estratégicas da Rússia na Península de Kola. Fundada em 1899, abriga a 161ª Brigada de Submarinos da Frota do Norte com acesso livre de gelo no inverno.'
        }
      },
      {
        id: 'gadzhiyevo',
        name: { en: 'Gadzhiyevo Submarine Base (Kola Peninsula)', pt: 'Base Submarina de Gadzhiyevo (Península de Kola)' },
        nativeName: 'Гаджиево (Кольский полуостров)',
        location: { en: 'Yagelnaya Bay, Kola Peninsula, Murmansk, Russia', pt: 'Península de Kola, Murmansk, Rússia' },
        coordinates: '69°15′20″N 33°20′50″E',
        fleet: { en: 'Northern Fleet (31st Submarine Division)', pt: 'Frota do Norte (31ª Divisão de Submarinos)' },
        status: { en: 'Operational (Active)', pt: 'Operacional (Ativa)' },
        homeportedClasses: ['Borei Class (Project 955)', 'Yasen-M Class (Project 885M)'],
        description: {
          en: 'Primary Northern Fleet SSBN nuclear stronghold on the Kola Peninsula, nestled in deep protected Barents Sea fjords.',
          pt: 'A principal fortaleza de submarinos nucleares balísticos da Frota do Norte Russa na Península de Kola, aninhada nos fiordes protegidos do Mar de Barents.'
        }
      },
      {
        id: 'zapadnaya-litsa',
        name: { en: 'Zapadnaya Litsa Base (Kola Peninsula)', pt: 'Base Naval de Zapadnaya Litsa (Península de Kola)' },
        nativeName: 'Западная Лица (Заозерск)',
        location: { en: 'Zaozyorsk, Kola Peninsula, Murmansk Oblast, Russia', pt: 'Zaozyorsk, Península de Kola, Murmansk, Rússia' },
        coordinates: '69°24′00″N 32°26′00″E',
        fleet: { en: 'Northern Fleet (11th Submarine Division)', pt: 'Frota do Norte (11ª Divisão de Submarinos)' },
        status: { en: 'Operational (Active)', pt: 'Operacional (Ativa)' },
        homeportedClasses: ['Yasen-M Class (Project 885M)', 'Oscar II SSGN Class'],
        description: {
          en: 'The westernmost nuclear submarine stronghold of the Russian Northern Fleet on the Kola Peninsula, located 45 km from the Norwegian border.',
          pt: 'A fortaleza de submarinos nucleares mais ocidental da Frota do Norte na Península de Kola, situada a apenas 45 km da fronteira com a Noruega.'
        }
      },
      {
        id: 'vilyuchinsk',
        name: { en: 'Vilyuchinsk Submarine Base (Kamchatka)', pt: 'Base Submarina de Vilyuchinsk (Kamchatka)' },
        nativeName: 'Вилючинск (Камчатка)',
        location: { en: 'Kamchatka Peninsula, Pacific Ocean, Russia', pt: 'Península de Kamchatka, Oceano Pacífico, Rússia' },
        coordinates: '52°55′00″N 158°30′00″E',
        fleet: { en: 'Pacific Fleet (25th & 10th Submarine Divisions)', pt: 'Frota do Pacífico (25ª e 10ª Divisão de Submarinos)' },
        status: { en: 'Operational (Active)', pt: 'Operacional (Ativa)' },
        homeportedClasses: ['Borei-A Class (Project 955A)', 'Yasen-M Class (Project 885M)', 'Oscar II Class'],
        description: {
          en: 'Russian Navy Pacific Submarine stronghold in Avacha Bay, providing direct deployment access to deep Pacific waters.',
          pt: 'Bastião estratégico da Marinha Russa voltado para o Oceano Pacífico. Localizada na baía de Avacha, permite acesso direto às águas profundas do Pacífico Norte.'
        }
      },
      {
        id: 'severodvinsk',
        name: { en: 'Severodvinsk Shipyard & Base (Sevmash)', pt: 'Estaleiro e Base Naval de Severodvinsk (Sevmash)' },
        nativeName: 'Севмаш (Северодвинск)',
        location: { en: 'White Sea, Arkhangelsk, Russia', pt: 'Mar Branco, Arkhangelsk, Rússia' },
        coordinates: '64°34′00″N 39°49′00″E',
        fleet: { en: 'Northern Fleet & Naval Test Command', pt: 'Frota do Norte & Centro de Testes Navais' },
        status: { en: 'Operational (Active)', pt: 'Operacional (Ativa)' },
        homeportedClasses: ['BS-329 Belgorod', 'Yasen-M Class', 'Borei-A Class'],
        description: {
          en: 'The world\'s largest nuclear submarine construction complex (Sevmash Shipyard), builder of Belgorod, Borei, and Yasen classes.',
          pt: 'O maior complexo de construção naval de submarinos nucleares do mundo (Estaleiro Sevmash), onde são fabricados os submarinos Borei, Yasen e o Belgorod.'
        }
      }
    ]
  },
  {
    id: 'south-korea',
    name: { en: 'South Korea', pt: 'Coreia do Sul' },
    englishName: 'South Korea',
    flagCode: 'KR',
    navalBranch: { en: 'Republic of Korea Navy (ROKN) // Submarine Force Command', pt: 'Marinha da República da Coreia (ROKN) // Comando de Submarinos' },
    motto: { en: 'Protecting the Sea, Securing the Nation', pt: 'Protegendo o Mar, Assegurando a Nação' },
    activeSubmarineEstimate: 22,
    primaryFleetCommand: { en: 'ROKN Submarine Force Command (Jinhae)', pt: 'Comando de Força Submarina da ROKN (Jinhae)' },
    stealthLevel: { en: 'S-Tier (Maximum)', pt: 'S-Tier (Máximo)' },
    nuclearCapability: false,
    overview: {
      en: 'South Korea operates one of the world\'s most technologically sophisticated conventional submarine fleets. It is the only non-nuclear power operating indigenous Air-Independent Propulsion (AIP) submarines armed with Submarine-Launched Ballistic Missiles (SLBMs).',
      pt: 'A Coreia do Sul opera uma das frotas de submarinos convencionais mais avançadas do mundo. É a única nação não-nuclear a operar submarinos autóctones AIP equipados com mísseis balísticos lançados de submarino (SLBMs).'
    },
    doctrinalFocus: {
      en: 'Peninsular Deterrence, Pre-emptive Precision Strike (Kill Chain System) & Regional Maritime Denial.',
      pt: 'Dissuasão na Península Coreana, Ataque de Precisão Pré-empensivo (Sistema Kill Chain) e Negação Marítima Regional.'
    },
    classes: [
      {
        id: 'dosan-ahn-changho-class',
        name: { en: 'Dosan Ahn Changho Class (KSS-III)', pt: 'Classe Dosan Ahn Changho (KSS-III)' },
        code: 'KSS-III Batch I / II',
        type: 'AIP',
        typeLabel: { en: 'SLBM-Capable AIP Diesel-Electric Attack Submarine', pt: 'Submarino de Ataque AIP com Capacidade SLBM' },
        status: { en: 'Active', pt: 'Ativo' },
        displacement: { en: '3,300 tons (surface) / 3,750 tons (submerged)', pt: '3.300 toneladas (superfície) / 3.750t (submerso)' },
        length: '83.5 m (Batch I) / 89 m (Batch II)',
        beam: '9.6 m',
        speed: { en: '20 knots (submerged)', pt: '20 nós (submerso)' },
        maxDepth: '> 300 m',
        propulsion: { en: 'BUMHAN Fuel Cell AIP System + Lithium-Ion Batteries (Batch II)', pt: 'Sistema AIP de Células de Combustível + Baterias Íon-Lítio (Batch II)' },
        crew: { en: '50 personnel', pt: '50 tripulantes' },
        endurance: { en: '20 days continuous underwater patrol without snorkel', pt: '20 dias de patrulha submersa contínua sem snorkel' },
        armament: {
          en: [
            '6x Vertical Launch System (VLS) cells for Hyunmoo-IV-4 SLBMs / Chonryong Cruise Missiles',
            '6x 533mm Torpedo Tubes (Tiger Shark Heavyweight Torpedoes)'
          ],
          pt: [
            '6x Células VLS de Lançamento Vertical para Mísseis Balísticos Hyunmoo-IV-4 / Mísseis Chonryong',
            '6x Tubos de Torpedo 533mm (Torpedos Pesados Tiger Shark)'
          ]
        },
        notableUnits: ['ROKS Dosan Ahn Changho (SS-083)', 'ROKS Ahn Mu (SS-085)', 'ROKS Shin Chae-ho (SS-086)'],
        description: {
          en: 'Historical milestone: the first non-nuclear submarine class armed with vertical launch cells firing conventional submarine-launched ballistic missiles (SLBMs). Batch II incorporates Li-Ion batteries.',
          pt: 'Marco histórico: primeira classe de submarinos não-nucleares do mundo equipada com silos VLS para mísseis balísticos (SLBM). A variante Batch II incorpora baterias de íon-lítio.'
        },
        tacticalRole: { en: 'Strategic Ballistic Strike & Undersea Stealth Escort', pt: 'Ataque Balístico Estratégico & Escolta Silenciosa' }
      },
      {
        id: 'son-won-il-class',
        name: { en: 'Son Won-il Class (KSS-II / Type 214)', pt: 'Classe Son Won-il (KSS-II / Type 214)' },
        code: 'KSS-II / Type 214',
        type: 'AIP',
        typeLabel: { en: 'AIP Conventional Attack Submarine', pt: 'Submarino de Ataque Convencional AIP' },
        status: { en: 'Active', pt: 'Ativo' },
        displacement: { en: '1,860 tons (submerged)', pt: '1.860 toneladas (submerso)' },
        length: '65 m',
        beam: '6.3 m',
        speed: { en: '20 knots (submerged)', pt: '20 nós (submerso)' },
        maxDepth: '400 m',
        propulsion: { en: 'HDW Polymer Electrolyte Membrane (PEM) Fuel Cell AIP', pt: 'Células de Combustível PEM HDW (AIP)' },
        crew: { en: '27 personnel', pt: '27 tripulantes' },
        endurance: { en: '14 days submerged continuous AIP navigation', pt: '14 dias de navegação submersa contínua AIP' },
        armament: {
          en: [
            '8x 533mm Torpedo Tubes',
            'Haeseong III Submarine-Launched Land Attack Cruise Missiles',
            'K731 White Shark Torpedoes'
          ],
          pt: [
            '8x Tubos de Torpedo 533mm',
            'Mísseis de Cruzeiro de Ataque Terrestre Haeseong III',
            'Torpedos K731 White Shark'
          ]
        },
        notableUnits: ['ROKS Son Won-il (SS-072)', 'ROKS An Jung-geun (SS-075)', 'ROKS Yu Gwan-sun (SS-078)'],
        description: {
          en: 'Built in South Korea with German technology transfer (HDW Type 214). Provides quiet, long-range stealth capability across the Sea of Japan and Yellow Sea.',
          pt: 'Construídos na Coreia do Sul com transferência tecnológica alemã (HDW Type 214). Proporciona stealth silencioso de longo alcance no Mar do Japão e Mar Amarelo.'
        },
        tacticalRole: { en: 'Chokepoint Interdiction & Precision Land Attack', pt: 'Interdição de Estreitos e Ataque Terrestre de Precisão' }
      }
    ],
    missions: [
      {
        id: 'silent-shield-peninsula',
        name: { en: 'Peninsular Undersea Deterrence', pt: 'Patrulhas de Dissuasão da Península Coreana' },
        codeName: 'OPERATION SILENT SHIELD',
        period: '1995 - Present',
        theater: { en: 'Korean Peninsula, Yellow Sea & Sea of Japan', pt: 'Península Coreana, Mar Amarelo e Mar do Japão' },
        type: { en: 'Strategic Undersea Counter-Measure', pt: 'Contra-Medida Submarina Estratégica' },
        status: { en: 'Active', pt: 'Ativa' },
        description: {
          en: '24/7 submerged patrols tracking adversary submarine launches and providing pre-emptive strike readiness via SLBM assets.',
          pt: 'Patrulhas submersas 24/7 rastreando movimentações navais e mantendo prontidão de ataque preventivo através de mísseis SLBM.'
        },
        keyObjective: {
          en: 'Neutralize underwater ballistic threats and defend territorial SLOCs.',
          pt: 'Neutralizar ameaças balísticas subaquáticas e defender linhas marítimas territoriais.'
        }
      }
    ],
    bases: [
      {
        id: 'jinhae-sub-base',
        name: { en: 'Jinhae Naval Base (Submarine Command HQ)', pt: 'Base Naval de Jinhae (Sede do Comando Submarino)' },
        location: { en: 'Jinhae, South Gyeongsang, South Korea', pt: 'Jinhae, Gyeongsang do Sul, Coreia do Sul' },
        coordinates: '35°08′45″N 128°39′10″E',
        fleet: { en: 'ROKN Submarine Force Command (Commandant Headquarters)', pt: 'Comando da Força de Submarinos da ROKN' },
        status: { en: 'Operational (Active)', pt: 'Operacional (Ativa)' },
        homeportedClasses: ['Dosan Ahn Changho Class (KSS-III)', 'Son Won-il Class (KSS-II)'],
        description: {
          en: 'Historical headquarters of the ROK Navy Submarine Force Command, equipped with advanced simulator centers, dry docks, and torpedo testing facilities.',
          pt: 'Sede histórica do Comando de Submarinos da Marinha da Coreia do Sul, equipada com centros avançados de simulação, docas secas e instalações de teste.'
        }
      },
      {
        id: 'jeju-sub-base',
        name: { en: 'Jeju Civilian-Military Complex Port', pt: 'Base Naval de Jeju' },
        location: { en: 'Jeju Island, South Korea', pt: 'Ilha de Jeju, Coreia do Sul' },
        coordinates: '33°14′20″N 126°29′35″E',
        fleet: { en: 'ROKN Strategic Task Flotilla', pt: 'Flotilha Tarefa Estratégica ROKN' },
        status: { en: 'Operational (Active)', pt: 'Operacional (Ativa)' },
        homeportedClasses: ['Dosan Ahn Changho Class (KSS-III)'],
        description: {
          en: 'Strategic deep-water naval base guarding the southern sea lanes and East China Sea approaches.',
          pt: 'Base naval estratégica de águas profundas guardando as rotas marítimas do sul e acessos ao Mar da China Oriental.'
        }
      },
      {
        id: 'busan-sub-base',
        name: { en: 'Busan Naval Base (ROKN Fleet HQ)', pt: 'Base Naval de Busan (Sede da Frota)' },
        location: { en: 'Busan, South Korea', pt: 'Busan, Coreia do Sul' },
        coordinates: '35°06′15″N 129°06′30″E',
        fleet: { en: 'Republic of Korea Fleet Command', pt: 'Comando da Frota da República da Coreia' },
        status: { en: 'Operational (Active)', pt: 'Operacional (Ativa)' },
        homeportedClasses: ['Dosan Ahn Changho Class (KSS-III)', 'Son Won-il Class (KSS-II)'],
        description: {
          en: 'Primary operational fleet headquarters of the ROK Navy and main deployment port for international allied exercise task groups.',
          pt: 'Principal sede operacional de frota da Marinha Sul-Coreana e porto primário para grupos de tarefas de exercícios aliados internacionais.'
        }
      }
    ]
  },
  {
    id: 'germany',
    name: { en: 'Germany', pt: 'Alemanha' },
    englishName: 'Germany',
    flagCode: 'DE',
    navalBranch: { en: 'German Navy (Deutsche Marine) // 1st Submarine Squadron', pt: 'Marinha Alemã (Deutsche Marine) // 1. Ubootgeschwader' },
    motto: { en: 'Sicherer Kurs Unter Wasser (Safe Course Underwater)', pt: 'Sicherer Kurs Unter Wasser (Navegação Segura Sob as Águas)' },
    activeSubmarineEstimate: 8,
    primaryFleetCommand: { en: '1st Submarine Squadron (1. Ubootgeschwader - Eckernförde)', pt: '1º Esquadrão de Submarinos (Eckernförde)' },
    stealthLevel: { en: 'S-Tier (Maximum)', pt: 'S-Tier (Máximo)' },
    nuclearCapability: false,
    overview: {
      en: 'Germany is the global pioneer in non-magnetic steel submarine construction and Proton Exchange Membrane (PEM) Hydrogen Fuel Cell AIP technology. German-built submarines are renowned as the quietest conventional vessels ever engineered.',
      pt: 'A Alemanha é a pioneira mundial na construção de submarinos em aço não magnético e tecnologia AIP de células de combustível de hidrogênio (PEM). Os submarinos de projeto alemão são reconhecidos como as embarcações convencionais mais silenciosas já projetadas.'
    },
    doctrinalFocus: {
      en: 'Baltic & North Atlantic Chokepoint Defense, NATO ASW Operations and Shallow Water Stealth Reconnaissance.',
      pt: 'Defesa de Estreitos do Mar Báltico e Atlântico Norte, Operações ASW da OTAN e Reconhecimento Stealth em Águas Rasas.'
    },
    classes: [
      {
        id: 'type-212a-class',
        name: { en: 'Type 212A Class', pt: 'Classe Type 212A' },
        code: 'Type 212A',
        type: 'AIP',
        typeLabel: { en: 'Non-Magnetic Hydrogen Fuel Cell AIP Submarine', pt: 'Submarino AIP de Aço Não-Magnético com Células de Hidrogênio' },
        status: { en: 'Active', pt: 'Ativo' },
        displacement: { en: '1,450 tons (surface) / 1,830 tons (submerged)', pt: '1.450 toneladas (superfície) / 1.830t (submerso)' },
        length: '56 m (Batch 1) / 57.2 m (Batch 2)',
        beam: '7 m',
        speed: { en: '20 knots (submerged)', pt: '20 nós (submerso)' },
        maxDepth: '700+ m (non-magnetic hull structural limit)',
        propulsion: { en: 'HDW Siemens PEM Hydrogen Fuel Cell AIP + Low-noise Diesel Generator', pt: 'Células de Combustível de Hidrogênio HDW Siemens PEM + Gerador Diesel' },
        crew: { en: '27 personnel', pt: '27 tripulantes' },
        endurance: { en: '3 weeks submerged continuous AIP operation without surfacing', pt: '3 semanas submerso em navegação contínua AIP sem emergir' },
        armament: {
          en: [
            '6x 533mm Torpedo Tubes (DM2A4 Seehecht / SeaHake Mod 4 wire-guided torpedoes)',
            'Capacity for IDAS anti-air missiles (launched from torpedo tube)'
          ],
          pt: [
            '6x Tubos de Torpedo 533mm (Torpedos guiados por fibra ótica DM2A4 Seehecht Mod 4)',
            'Capacidade para mísseis anti-aéreos IDAS (lançados por tubo de torpedo)'
          ]
        },
        notableUnits: ['U31 (S181)', 'U32 (S182)', 'U33 (S183)', 'U34 (S184)', 'U35 (S185)', 'U36 (S186)'],
        description: {
          en: 'Constructed completely from non-magnetic austenitic steel, rendering the submarine invisible to magnetic anomaly detectors (MAD). Its fuel-cell AIP emits no exhaust heat or detectable acoustic signatures.',
          pt: 'Construído inteiramente em aço austenítico não magnético, tornando o submarino invisível a detectores de anomalias magnéticas (MAD). Sua célula AIP não emite calor de exaustão nem ruído acústico.'
        },
        tacticalRole: { en: 'Shallow Baltic Reconnaissance & Ghost ASW Interdiction', pt: 'Reconhecimento Clandestino no Mar Báltico & Interdição ASW Fantasma' }
      },
      {
        id: 'type-212cd-class',
        name: { en: 'Type 212CD Class (Common Design)', pt: 'Classe Type 212CD (Common Design)' },
        code: 'Type 212CD',
        type: 'AIP',
        typeLabel: { en: 'Diamond-Stealth Next Generation AIP Submarine', pt: 'Submarino AIP Stealth Diamante de Próxima Geração' },
        status: { en: 'Under Construction', pt: 'Em Construção' },
        displacement: { en: '2,500 tons (submerged)', pt: '2.500 toneladas (submerso)' },
        length: '73 m',
        beam: '10 m',
        speed: { en: '20+ knots (submerged)', pt: '20+ nós (submerso)' },
        maxDepth: '> 400 m',
        propulsion: { en: 'Next-Gen Hydrogen Fuel Cell AIP System', pt: 'Sistema AIP de Célula de Combustível de Hidrogênio de Nova Geração' },
        crew: { en: '30 personnel', pt: '30 tripulantes' },
        endurance: { en: '30+ days continuous submerged operation', pt: '30+ dias de operação submersa contínua' },
        armament: {
          en: [
            '4x 533mm Torpedo Tubes (DM2A4 Mod 4 / SeaHake)',
            'IDAS Anti-Air Defense Missile System',
            'NSM (Naval Strike Missile) Sub-launched capability'
          ],
          pt: [
            '4x Tubos de Torpedo 533mm (DM2A4 Mod 4)',
            'Sistema de Mísseis Anti-Aéreos IDAS',
            'Mísseis Anti-Navio NSM Lançados por Tubo'
          ]
        },
        notableUnits: ['U37 (German Navy)', 'U38 (German Navy)', 'Royal Norwegian Navy Sister Units'],
        description: {
          en: 'Joint German-Norwegian stealth project featuring a revolutionary diamond-shaped hull structure designed to bounce active enemy sonar waves away from the receiver.',
          pt: 'Projeto stealth conjunto germânico-norueguês apresentando estrutura de casco em formato de diamante projetada para refletir ondas de sonar ativo para longe dos receptores.'
        },
        tacticalRole: { en: '21st Century Active-Sonar Stealth & NATO Flank Defense', pt: 'Stealth Sonar Ativo do Século XXI & Defesa de Flanco da OTAN' }
      }
    ],
    missions: [
      {
        id: 'baltic-gatekeeper',
        name: { en: 'Baltic & North Atlantic Vigilance', pt: 'Patrulhas do Mar Báltico e Atlântico Norte' },
        codeName: 'OPERATION BALTIC GATEKEEPER',
        period: '1957 - Present',
        theater: { en: 'Baltic Sea, Norwegian Sea & North Atlantic', pt: 'Mar Báltico, Mar da Noruega e Atlântico Norte' },
        type: { en: 'Chokepoint Surveillance & ASW Patrol', pt: 'Vigilância de Estreitos e Patrulha ASW' },
        status: { en: 'Active', pt: 'Ativa' },
        description: {
          en: 'Continuous NATO flank monitoring of foreign naval transits through the Baltic passages and GIUK Gap.',
          pt: 'Monitoramento contínuo da OTAN nas passagens do Mar Báltico e lacuna GIUK.'
        },
        keyObjective: {
          en: 'Protect northern maritime approaches and NATO joint maritime security.',
          pt: 'Proteger as abordagens marítimas do norte e a segurança conjunta da OTAN.'
        }
      }
    ],
    bases: [
      {
        id: 'eckernforde-base',
        name: { en: 'Eckernförde Naval Base (1. Ubootgeschwader)', pt: 'Base Naval de Eckernförde (1º Esquadrão)' },
        location: { en: 'Eckernförde, Schleswig-Holstein, Germany', pt: 'Eckernförde, Schleswig-Holstein, Alemanha' },
        coordinates: '54°28′00″N 9°50′00″E',
        fleet: { en: 'Einsatzflottille 1 (German Submarine Command HQ)', pt: 'Einsatzflottille 1 (Comando Submarino Alemão)' },
        status: { en: 'Operational (Active)', pt: 'Operacional (Ativa)' },
        homeportedClasses: ['Type 212A Class', 'Type 212CD Class'],
        description: {
          en: 'Homebase for the German Navy 1st Submarine Squadron, naval damage control center, and elite Kampfschwimmer frogmen unit.',
          pt: 'Sede do 1º Esquadrão de Submarinos da Marinha Alemã, centro de treinamento e unidade de mergulhadores de combate Kampfschwimmer.'
        }
      },
      {
        id: 'kiel-tkms',
        name: { en: 'Kiel Shipyard & Naval Complex (TKMS)', pt: 'Estaleiro e Complexo Naval de Kiel (TKMS)' },
        location: { en: 'Kiel, Baltic Sea, Germany', pt: 'Kiel, Mar Báltico, Alemanha' },
        coordinates: '54°19′00″N 10°09′00″E',
        fleet: { en: 'ThyssenKrupp Marine Systems Test Command', pt: 'Comando de Testes ThyssenKrupp Marine Systems' },
        status: { en: 'Operational (Active)', pt: 'Operacional (Ativa)' },
        homeportedClasses: ['Type 212A', 'Type 212CD', 'Export HDW Class Submarines'],
        description: {
          en: 'Global center of non-nuclear submarine innovation and construction (TKMS shipyard).',
          pt: 'Centro mundial de inovação e construção de submarinos não-nucleares (Estaleiro TKMS).'
        }
      },
      {
        id: 'wilhelmshaven-base',
        name: { en: 'Wilhelmshaven Naval Base', pt: 'Base Naval de Wilhelmshaven' },
        location: { en: 'Wilhelmshaven, Lower Saxony, Germany', pt: 'Wilhelmshaven, Baixa Saxônia, Alemanha' },
        coordinates: '53°31′00″N 8°08′00″E',
        fleet: { en: 'Einsatzflottille 2 / Fleet Support Command', pt: 'Einsatzflottille 2 / Comando de Apoio à Frota' },
        status: { en: 'Operational (Active)', pt: 'Operacional (Ativa)' },
        homeportedClasses: ['Type 212A Class', 'Fleet Logistics & Support'],
        description: {
          en: 'Germany\'s largest naval base, located on the Jade Bight of the North Sea, providing heavy maintenance and logistics to the fleet.',
          pt: 'A maior base naval da Marinha Alemã, localizada na costa do Mar do Norte, fornecendo manutenção pesada e logística para a frota.'
        }
      }
    ]
  },
  {
    id: 'uk',
    name: { en: 'United Kingdom', pt: 'Reino Unido' },
    englishName: 'United Kingdom',
    flagCode: 'GB',
    navalBranch: { en: 'Royal Navy // Submarine Service', pt: 'Royal Navy // Serviço de Submarinos' },
    motto: { en: 'We Come Unseen', pt: 'Chegamos Sem Ser Vistos' },
    activeSubmarineEstimate: 10,
    primaryFleetCommand: { en: 'Commander Operations (Royal Navy Submarine Command)', pt: 'Commander Operations (Comando de Submarinos da Royal Navy)' },
    stealthLevel: { en: 'S-Tier (Maximum)', pt: 'S-Tier (Máximo)' },
    nuclearCapability: true,
    overview: {
      en: 'The Royal Navy Submarine Service has sustained Continuous At-Sea Deterrence (CASD) since 1969. Operating a 100% nuclear fleet, British submariners are world-renowned for the legendary "Perisher" submarine command course.',
      pt: 'O Serviço de Submarinos da Royal Navy mantém o programa de dissuasão nuclear contínua no mar (CASD) do Reino Unido desde 1969. Todos os seus submarinos operacionais são de propulsão nuclear, renomados por rigorosos padrões de treinamento como o famoso curso de comando "Perisher".'
    },
    doctrinalFocus: {
      en: 'Continuous At-Sea Deterrence (CASD), Carrier Strike Group Protection & Atlantic ASW Warfare.',
      pt: 'Dissuasão Nuclear Única (CASD), Proteção de Grupos de Combate de Aeronavios e Guerra ASW no Atlântico.'
    },
    classes: [
      {
        id: 'vanguard-class',
        name: { en: 'Vanguard Class', pt: 'Classe Vanguard' },
        code: 'SSBN',
        type: 'SSBN',
        typeLabel: { en: 'Nuclear Ballistic Deterrent Submarine', pt: 'Submarino Balístico Nuclear de Dissuasão' },
        status: { en: 'Active', pt: 'Ativo' },
        displacement: { en: '15,900 tons (submerged)', pt: '15.900 toneladas (submerso)' },
        length: '149.9 m',
        beam: '12.8 m',
        speed: { en: '25 knots (submerged)', pt: '25 nós (submerso)' },
        maxDepth: '> 250 m',
        propulsion: { en: 'Rolls-Royce PWR2 Nuclear Reactor', pt: 'Reator Nuclear Rolls-Royce PWR2' },
        crew: { en: '132 personnel', pt: '132 tripulantes' },
        endurance: { en: 'Limited only by stores and crew endurance', pt: 'Limitada apenas por suprimentos e resistência da tripulação' },
        armament: {
          en: [
            '16x Trident II D5 Ballistic Missiles',
            '4x 533mm Torpedo Tubes for Spearfish Torpedoes'
          ],
          pt: [
            '16x Mísseis Balísticos Trident II D5',
            '4x Tubos de Torpedo de 533mm para Torpedos Spearfish'
          ]
        },
        notableUnits: ['HMS Vanguard (S28)', 'HMS Victorious (S29)', 'HMS Vigilant (S30)', 'HMS Vengeance (S31)'],
        description: {
          en: 'The four Vanguard SSBNs ensure that at least one nuclear-armed ballistic submarine patrols undisclosed waters 24/7/365.',
          pt: 'Os quatro submarinos da classe Vanguard garantem que pelo menos uma embarcação armada com mísseis nucleares Trident esteja patrulhando os oceanos em segredo absoluto 24 horas por dia.'
        },
        tacticalRole: { en: 'Continuous At-Sea Deterrent (CASD)', pt: 'Dissuasão Nuclear Contínua no Mar (CASD)' }
      },
      {
        id: 'astute-class',
        name: { en: 'Astute Class', pt: 'Classe Astute' },
        code: 'SSN',
        type: 'SSN',
        typeLabel: { en: 'Advanced Nuclear Attack Submarine', pt: 'Submarino de Ataque Nuclear Avançado' },
        status: { en: 'Active', pt: 'Ativo' },
        displacement: { en: '7,400 tons (submerged)', pt: '7.400 toneladas (submerso)' },
        length: '97 m',
        beam: '11.3 m',
        speed: { en: '30 knots (submerged)', pt: '30 nós (submerso)' },
        maxDepth: '> 300 m',
        propulsion: { en: 'Rolls-Royce PWR2 Nuclear Reactor (Life-of-ship core)', pt: 'Reator Nuclear Rolls-Royce PWR2 (Vida útil sem reabastecimento)' },
        crew: { en: '98 personnel', pt: '98 tripulantes' },
        endurance: { en: 'Unlimited (Makes own water and oxygen)', pt: 'Ilimitada (Produz próprio oxigênio e água potável)' },
        armament: {
          en: [
            '6x 533mm Torpedo Tubes (38 weapons capacity)',
            'Tomahawk Cruise Missiles Block IV/V',
            'Spearfish Mod 1 Heavyweight Torpedoes'
          ],
          pt: [
            '6x Tubos de Torpedo de 533mm com capacidade para 38 armas',
            'Mísseis de Cruzeiro Tomahawk Block IV/V',
            'Torpedos Pesados Spearfish Mod 1'
          ]
        },
        notableUnits: ['HMS Astute (S119)', 'HMS Ambush (S120)', 'HMS Artful (S121)', 'HMS Audacious (S122)', 'HMS Anson (S123)'],
        description: {
          en: 'Most advanced attack submarine operated by the Royal Navy. Features Sonar 2076 processing arrays, widely regarded among the most powerful sonar systems worldwide.',
          pt: 'Submarino de ataque mais avançado e silencioso já operado pela Royal Navy. Seus sensores de sonar 2076 são considerados entre os mais poderosos do mundo.'
        },
        tacticalRole: { en: 'Carrier Escort (HMS Queen Elizabeth), Hunter-Killer & Land Attack', pt: 'Escolta de Porta-Aviões, Caça-Submarinos & Ataque Terrestre' }
      },
      {
        id: 'dreadnought-class',
        name: { en: 'Dreadnought Class', pt: 'Classe Dreadnought' },
        code: 'SSBN',
        type: 'SSBN',
        typeLabel: { en: 'Next-Generation Nuclear Ballistic Submarine', pt: 'Submarino Balístico Nuclear de Próxima Geração' },
        status: { en: 'Under Construction', pt: 'Em Construção' },
        displacement: { en: '17,200 tons (submerged)', pt: '17.200 toneladas (submerso)' },
        length: '153.6 m',
        beam: '13 m',
        speed: { en: '25+ knots (submerged)', pt: '25+ nós (submerso)' },
        maxDepth: '> 300 m',
        propulsion: { en: 'Rolls-Royce PWR3 Nuclear Reactor', pt: 'Reator Nuclear Rolls-Royce PWR3' },
        crew: { en: '130 personnel', pt: '130 tripulantes' },
        endurance: { en: '30+ year operation life', pt: '30+ anos de operação' },
        armament: {
          en: [
            '12x Trident II D5 Ballistic Missiles',
            '4x 533mm Spearfish Torpedo Tubes'
          ],
          pt: [
            '12x Mísseis Balísticos Trident II D5',
            '4x Tubos de Torpedo 533mm Spearfish'
          ]
        },
        notableUnits: ['HMS Dreadnought', 'HMS Valiant', 'HMS Warspite', 'HMS George VI'],
        description: {
          en: 'Next generation of British SSBNs replacing the Vanguard class starting in the 2030s, featuring the new PWR3 reactor and joint AUKUS technology integration.',
          pt: 'Nova geração de submarinos SSBN britânicos que substituirão a classe Vanguard a partir dos anos 2030, desenvolvidos com o novo reator PWR3 e tecnologia de integração AUKUS.'
        },
        tacticalRole: { en: 'Future of UK Strategic Nuclear Deterrent', pt: 'Futuro da Dissuasão Nuclear do Reino Unido' }
      }
    ],
    missions: [
      {
        id: 'operation-relentless',
        name: { en: 'Operation Relentless (Continuous At-Sea Deterrent)', pt: 'Operação Relentless (Continuous At-Sea Deterrent)' },
        codeName: 'OPERATION RELENTLESS',
        period: '1969 - Present',
        theater: { en: 'North Atlantic & Undisclosed Locations', pt: 'Oceano Atlântico Norte e Zonas Não Reveladas' },
        type: { en: 'Unbroken Nuclear Deterrence Patrol', pt: 'Dissuasão Nuclear Ininterrupta' },
        status: { en: 'Active', pt: 'Ativa' },
        description: {
          en: 'Over 55 uninterrupted years with at least one SSBN on stealth patrol at all times.',
          pt: 'Mais de 55 anos ininterruptos com pelo menos um submarino balístico estratégico patrulhando nas profundezas.'
        },
        keyObjective: {
          en: 'Ensure Prime Minister\'s "Letters of Last Resort" execution capability.',
          pt: 'Manter a garantia da "Carta de Última Recorribilidade" (Letters of Last Resort) assinada pelo Primeiro-Ministro.'
        }
      }
    ],
    bases: [
      {
        id: 'faslane',
        name: { en: 'HMNB Clyde (Faslane)', pt: 'HMNB Clyde (Faslane)' },
        nativeName: 'His Majesty’s Naval Base Clyde',
        location: { en: 'Gare Loch, Scotland, United Kingdom', pt: 'Gare Loch, Escócia, Reino Unido' },
        coordinates: '56°03′59″N 4°49′00″W',
        fleet: { en: 'Royal Navy Submarine Service HQ', pt: 'Sede do Serviço de Submarinos da Royal Navy' },
        status: { en: 'Operational (Active)', pt: 'Operacional (Ativa)' },
        homeportedClasses: ['Vanguard Class (SSBN)', 'Astute Class (SSN)'],
        description: {
          en: 'Operational headquarters of British submarines, located in a heavily fortified Scottish sea loch.',
          pt: 'A sede espiritual e operacional dos submarinos britânicos. Localizada em um fiorde escocês altamente defendido.'
        }
      },
      {
        id: 'devonport',
        name: { en: 'HMNB Devonport', pt: 'HMNB Devonport' },
        nativeName: 'His Majesty’s Naval Base Devonport',
        location: { en: 'Plymouth, England, United Kingdom', pt: 'Plymouth, Inglaterra, Reino Unido' },
        coordinates: '50°22′34″N 4°10′59″W',
        fleet: { en: 'Naval Refitting & Decommissioning Command', pt: 'Comando de Manutenção e Refit Nuclear' },
        status: { en: 'Operational (Active)', pt: 'Operacional (Ativa)' },
        homeportedClasses: ['Astute Class (SSN)', 'Vanguard Class Deep Refit'],
        description: {
          en: 'The largest naval base in Western Europe, specialized in nuclear refueling, deep maintenance dry docks, and refitting of Royal Navy submarines.',
          pt: 'A maior base naval da Europa Ocidental, especializada em docas secas para manutenção pesada e refit nuclear de submarinos da Royal Navy.'
        }
      }
    ]
  },
  {
    id: 'france',
    name: { en: 'France', pt: 'França' },
    englishName: 'France',
    flagCode: 'FR',
    navalBranch: { en: 'French Navy (Marine Nationale) // FOST (Force Océanique Stratégique)', pt: 'Marine Nationale // FOST (Force Océanique Stratégique)' },
    motto: { en: 'Honneur, Patrie, Valeur, Discipline', pt: 'Honneur, Patrie, Valeur, Discipline' },
    activeSubmarineEstimate: 10,
    primaryFleetCommand: { en: 'ALFOST (Strategic Oceanic Force Commander)', pt: 'ALFOST (Amiral commandant la Force Océanique Stratégique)' },
    stealthLevel: { en: 'S-Tier (Maximum)', pt: 'S-Tier (Máximo)' },
    nuclearCapability: true,
    overview: {
      en: 'The French Strategic Oceanic Force (FOST) operates under total strategic autonomy. All French submarines utilize indigenous technological designs including K15 nuclear reactors and M51 ICBM-range SLBMs.',
      pt: 'A Força Oceânica Estratégica da Marinha Francesa (FOST) é pautada pelo princípio de autonomia total e independência estratégica. Seus submarinos utilizam tecnologia totalmente doméstica, incluindo reatores nucleares K15 e mísseis M51.'
    },
    doctrinalFocus: {
      en: 'Strategic Autonomy, Independent Nuclear Deterrence & Escort of Charles de Gaulle Carrier Group.',
      pt: 'Independência Estratégica, Dissuasão Nuclear Autônoma e Proteção do Grupo Aeronaval Charles de Gaulle.'
    },
    classes: [
      {
        id: 'triomphant-class',
        name: { en: 'Le Triomphant Class', pt: 'Classe Le Triomphant' },
        code: 'SNLE 2G',
        type: 'SSBN',
        typeLabel: { en: 'Nuclear Ballistic Missile Submarine', pt: 'Submarino Nuclear Lançador de Mísseis' },
        status: { en: 'Active', pt: 'Ativo' },
        displacement: { en: '14,335 tons (submerged)', pt: '14.335 toneladas (submerso)' },
        length: '138 m',
        beam: '12.5 m',
        speed: { en: '25 knots (submerged)', pt: '25 nós (submerso)' },
        maxDepth: '> 300 m',
        propulsion: { en: 'TechnicAtome K15 Nuclear Reactor (150 MW)', pt: 'Reator Nuclear TechnicAtome K15 (150 MW)' },
        crew: { en: '111 personnel (2 crews: Blue & Red)', pt: '111 tripulantes (2 tripulações: Bleue e Rouge)' },
        endurance: { en: '60 to 90 days', pt: '60 a 90 dias' },
        armament: {
          en: [
            '16x M51.2 / M51.3 Ballistic Missiles (TNO nuclear warheads)',
            '4x 533mm Torpedo Tubes for F21 Artemi torpedoes & Exocet SM39'
          ],
          pt: [
            '16x Mísseis Balísticos M51.2 / M51.3 (Cabeças TN75 / TNO)',
            '4x Tubos de Torpedo 533mm para Torpedos F21 Artemi e Mísseis Exocet SM39'
          ]
        },
        notableUnits: ['Le Triomphant (S616)', 'Le Téméraire (S617)', 'Le Vigilant (S618)', 'Le Terrible (S619)'],
        description: {
          en: 'The four French SNLEs maintain France\'s 100% autonomous nuclear deterrence. Le Terrible was the first delivered natively equipped with extended-range M51 missiles.',
          pt: 'Os quatro SNLE franceses são responsáveis por manter a dissuasão nuclear nacional 100% autônoma. O Le Terrible foi o primeiro a ser entregue equipado diretamente com os mísseis de alcance estendido M51.'
        },
        tacticalRole: { en: 'Autonomous French Strategic Nuclear Deterrence', pt: 'Dissuasão Nuclear Estratégica Autônoma da França' }
      },
      {
        id: 'suffren-class',
        name: { en: 'Suffren Class (Barracuda Program)', pt: 'Classe Suffren (Programa Barracuda)' },
        code: 'SNA',
        type: 'SSN',
        typeLabel: { en: 'Next-Generation Nuclear Attack Submarine', pt: 'Submarino Nuclear de Ataque de Nova Geração' },
        status: { en: 'Active', pt: 'Ativo' },
        displacement: { en: '5,300 tons (submerged)', pt: '5.300 toneladas (submerso)' },
        length: '99.5 m',
        beam: '8.8 m',
        speed: { en: '25+ knots (submerged)', pt: '25+ nós (submerso)' },
        maxDepth: '> 350 m',
        propulsion: { en: 'Miniaturized K15 Nuclear Reactor (50 MW)', pt: 'Reator Nuclear K15 miniaturizado (50 MW)' },
        crew: { en: '65 crew + 15 Commandos Marine operators', pt: '65 tripulantes + 15 Comandos Navais Commandos Marine' },
        endurance: { en: '70 days', pt: '70 dias' },
        armament: {
          en: [
            '4x 533mm Torpedo Tubes (24 weapons capacity)',
            'MdCN (Missile de Croisière Naval) Naval Cruise Missiles',
            'Exocet SM39 Block 2 Mod Anti-Ship Missiles',
            'F21 Heavyweight Torpedoes'
          ],
          pt: [
            '4x Tubos de Torpedo 533mm (Capacidade para 24 armas)',
            'Mísseis de Cruzeiro MdCN (Missile de Croisière Naval)',
            'Mísseis Anti-Navio Exocet SM39 Block 2 Mod',
            'Torpedos Pesados F21'
          ]
        },
        notableUnits: ['Suffren (S601)', 'Duguay-Trouin (S602)', 'Tourville (S603)', 'De Grasse'],
        description: {
          en: 'Replacement for the Rubis class. Equipped with pump-jet propulsion and a Dry Deck Shelter (DDS) module for naval special forces insertion.',
          pt: 'Substitutos da antiga classe Rubis. Equipados com propulsão por jacto de bomba (pump-jet), hélice enclausurada e módulo para transporte de mini-submarino de forças especiais.'
        },
        tacticalRole: { en: 'Carrier Escort, Special Forces Insertion & Naval Strike', pt: 'Escolta do Aeronavio Charles de Gaulle, Inserção de Comandos e Ataque Naval' }
      }
    ],
    missions: [
      {
        id: 'fost-patrol',
        name: { en: 'FOST Permanent Deterrence Patrol', pt: 'Dissuasão Permanente da FOST' },
        codeName: 'MISSION PERMANENTE FOST',
        period: '1972 - Present',
        theater: { en: 'Atlantic Ocean & Western Seas', pt: 'Oceano Atlântico e Mares Ocidentais' },
        type: { en: 'Independent Nuclear Deterrence', pt: 'Dissuasão Nuclear Independente' },
        status: { en: 'Active', pt: 'Ativa' },
        description: {
          en: 'Guaranteeing at least one French SNLE in continuous patrol without coalition command dependencies.',
          pt: 'Garantia de pelo menos um submarino SNLE em patrulha ininterrupta de dissuasão nuclear autônoma sem dependência de comando de coalizões.'
        },
        keyObjective: {
          en: 'Protect vital interests of the French Republic.',
          pt: 'Proteger os interesses vitais da República Francesa.'
        }
      }
    ],
    bases: [
      {
        id: 'ile-longue',
        name: { en: 'Île Longue Naval Base', pt: 'Base Naval de l\'Île Longue' },
        nativeName: 'Base d\'Île Longue (Brest)',
        location: { en: 'Crozon Peninsula, Brest, France', pt: 'Península de Crozon, Brest, França' },
        coordinates: '48°18′20″N 4°30′25″W',
        fleet: { en: 'Force Océanique Stratégique (FOST HQ)', pt: 'Force Océanique Stratégique (FOST HQ)' },
        status: { en: 'Operational (Active)', pt: 'Operacional (Ativa)' },
        homeportedClasses: ['Le Triomphant Class (SNLE 2G)'],
        description: {
          en: 'Ultra-defended sanctuary in northwestern France dedicated exclusively to French nuclear SSBN maintenance and missile loading.',
          pt: 'Santuário ultra-defendido no noroeste da França, dedicado exclusivamente ao abrigo, manutenção e carregamento dos mísseis balísticos nucleares M51.'
        }
      },
      {
        id: 'toulon',
        name: { en: 'Toulon Naval Base (Arsenal de Toulon)', pt: 'Base Naval de Toulon (Arsenal de Toulon)' },
        nativeName: 'Arsenal de Toulon',
        location: { en: 'Toulon, Mediterranean Sea, France', pt: 'Toulon, Mar Mediterrâneo, França' },
        coordinates: '43°07′00″N 5°55′00″E',
        fleet: { en: 'Escadrille des Sous-marins d\'Attaque (ENA)', pt: 'Escadrille des Sous-marins d\'Attaque (ENA)' },
        status: { en: 'Operational (Active)', pt: 'Operacional (Ativa)' },
        homeportedClasses: ['Suffren Class (SNA)', 'Rubis Class (SNA)'],
        description: {
          en: 'Primary French Mediterranean naval base, homeport for French nuclear attack submarines (SNA) and aircraft carrier Charles de Gaulle.',
          pt: 'A principal base naval militar da França no Mediterrâneo, onde se localizam a frota de submarinos nucleares de ataque (SNA) e o porta-aviões Charles de Gaulle.'
        }
      }
    ]
  },
  {
    id: 'china',
    name: { en: 'China', pt: 'China' },
    englishName: 'China',
    flagCode: 'CN',
    navalBranch: { en: 'People\'s Liberation Army Navy (PLAN) // Submarine Force', pt: 'Marinha do Exército de Libertação Popular (PLAN) // Força Submarina' },
    motto: { en: '听党指挥，能打胜仗 (Obey the Party, Win Battles)', pt: '听党指挥，能打胜仗 (Ouvir o Partido, Vencer Batalhas)' },
    activeSubmarineEstimate: 60,
    primaryFleetCommand: { en: 'PLAN Southern & Northern Theater Commands', pt: 'Comandos do Teatro do Sul e do Norte da PLAN' },
    stealthLevel: { en: 'A-Tier (High)', pt: 'A-Tier (Elevado)' },
    nuclearCapability: true,
    overview: {
      en: 'The PLA Navy has expanded its submarine force at unprecedented velocity, combining nuclear SSBN and SSN attack vessels with a massive fleet of modern ultra-quiet Stirling AIP conventional submarines.',
      pt: 'A Marinha da China (PLAN) expandiu sua força submarina em velocidade sem precedentes. Operando uma combinação moderna de submarinos nucleares balísticos (SSBN), de ataque (SSN) e uma maciça frota de submarinos convencionais com propulsão AIP ultra-silenciosa.'
    },
    doctrinalFocus: {
      en: 'First Island Chain A2/AD & Second Strike Nuclear Deterrence.',
      pt: 'Negação de Área/Anti-Acesso (A2/AD) na Primeira Cadeia de Ilhas e Segunda Resposta Nuclear.'
    },
    classes: [
      {
        id: 'type-094-jin',
        name: { en: 'Type 094 Class (Jin Class)', pt: 'Classe Type 094 (Jin Class)' },
        code: 'Type 094 / 094A',
        type: 'SSBN',
        typeLabel: { en: 'Nuclear Ballistic Missile Submarine', pt: 'Submarino Balístico Nuclear' },
        status: { en: 'Active', pt: 'Ativo' },
        displacement: { en: '11,000 tons (submerged)', pt: '11.000 toneladas (submerso)' },
        length: '135 m',
        beam: '12.5 m',
        speed: { en: '20+ knots (submerged)', pt: '20+ nós (submerso)' },
        maxDepth: '> 300 m',
        propulsion: { en: 'Pressurized Water Nuclear Reactor', pt: 'Reator Nuclear de Água Pressurizada' },
        crew: { en: '120 personnel', pt: '120 tripulantes' },
        endurance: { en: '90 days', pt: '90 dias' },
        armament: {
          en: [
            '12x JL-2 / JL-3 SLBMs (Ju Lang-3 with 10,000+ km range)',
            '6x 533mm Torpedo Tubes'
          ],
          pt: [
            '12x Mísseis Balísticos JL-2 / JL-3 (Ju Lang-3 com alcance de 10.000+ km)',
            '6x Tubos de Torpedo 533mm'
          ]
        },
        notableUnits: ['Hull 409', 'Hull 410', 'Changzheng 18'],
        description: {
          en: 'Allows China to maintain continuous nuclear deterrence patrols from protected South China Sea bastions capable of targeting the continental US.',
          pt: 'Permite à China realizar patrulhas de dissuasão nuclear a partir de bastiões seguros no Mar da China Meridional cobrindo alvos no continente americano.'
        },
        tacticalRole: { en: 'PLA Maritime Strategic Nuclear Deterrence', pt: 'Dissuasão Nuclear Marítima do ELP' }
      },
      {
        id: 'type-039a-yuan',
        name: { en: 'Type 039A/B/C Class (Yuan Class)', pt: 'Classe Type 039A/B/C (Yuan Class)' },
        code: 'Type 039A / 039C',
        type: 'AIP',
        typeLabel: { en: 'Stirling AIP Conventional Attack Submarine', pt: 'Submarino de Ataque Convencional AIP (Stirling)' },
        status: { en: 'Active', pt: 'Ativo' },
        displacement: { en: '3,600 tons (submerged)', pt: '3.600 toneladas (submerso)' },
        length: '77.6 m',
        beam: '8.4 m',
        speed: { en: '20 knots (submerged)', pt: '20 nós (submerso)' },
        maxDepth: '300 m',
        propulsion: { en: 'Diesel-Electric + Stirling AIP System', pt: 'Motor Diesel-Elétrico + Sistema AIP Stirling' },
        crew: { en: '38 personnel', pt: '38 tripulantes' },
        endurance: { en: '3-week continuous submerged patrol without snorkel', pt: 'Patrulha submersa de até 3 semanas sem snorkel' },
        armament: {
          en: [
            '6x 533mm Torpedo Tubes (Yu-6 Torpedoes)',
            'YJ-82 / YJ-18A Sub-launched Anti-Ship Missiles'
          ],
          pt: [
            '6x Tubos de Torpedo 533mm (Torpedos Yu-6)',
            'Mísseis Anti-Navio sub-lançados YJ-82 / YJ-18A'
          ]
        },
        notableUnits: ['Type 039C (Angled Stealth Sail variant)'],
        description: {
          en: 'One of the world\'s largest AIP submarine fleets. The latest Type 039C features an angled stealth sail design to disperse active sonar waves.',
          pt: 'Uma das maiores frotas de submarinos AIP do mundo. A versão mais recente Type 039C possui uma vela angular no estilo stealth para dispersão de ondas de sonar.'
        },
        tacticalRole: { en: 'Littoral Warfare & Strait Submarine Ambush', pt: 'Guerra Marítima Costeira & Emboscada Submarina em Estreitos' }
      }
    ],
    missions: [
      {
        id: 'south-china-sea-patrol',
        name: { en: 'South China Sea Bastion Patrols', pt: 'Patrulhas de Bastião no Mar da China Meridional' },
        codeName: 'DEEP BLUE DUAL GUARDIAN',
        period: '2012 - Present',
        theater: { en: 'South China Sea & Hainan Basin', pt: 'Mar da China Meridional e Bacia de Hainan' },
        type: { en: 'Strategic Bastion Patrol', pt: 'Patrulha Estratégica de Bastião' },
        status: { en: 'Active', pt: 'Ativa' },
        description: {
          en: 'Patrols by Type 094 SSBNs shielded by fortresses and PLAN aviation.',
          pt: 'Patrulhas contínuas de submarinos balísticos Type 094 protegidos por recifes fortificados e aviação da PLAN.'
        },
        keyObjective: {
          en: 'Secure launching sanctuaries for JL-3 ICBM SLBMs.',
          pt: 'Assegurar santuário para lançamento de mísseis balísticos intercontinentais JL-3.'
        }
      }
    ],
    bases: [
      {
        id: 'yulin-hainan',
        name: { en: 'Yulin Submarine Base (Longpo Naval Base)', pt: 'Base Submarina de Yulin (Longpo Naval Base)' },
        nativeName: '榆林海军基地 (海南岛)',
        location: { en: 'Sanya, Hainan Island, China', pt: 'Sanya, Ilha de Hainan, China' },
        coordinates: '18°12′10″N 109°41′35″E',
        fleet: { en: 'PLAN Southern Theater Command Fleet', pt: 'Frota do Teatro do Sul da PLAN' },
        status: { en: 'Operational (Active)', pt: 'Operacional (Ativa)' },
        homeportedClasses: ['Type 094 Jin Class (SSBN)', 'Type 093 Shang Class (SSN)'],
        description: {
          en: 'Strategic installation featuring underground mountain tunnels for satellite-free submarine ingress and egress.',
          pt: 'Instalação estratégica com túneis subaquáticos esculpidos dentro das montanhas de Hainan, permitindo entrada e saída sem detecção por satélite.'
        }
      },
      {
        id: 'qingdao-sub-base',
        name: { en: 'Guzhenkou Submarine Base (Qingdao)', pt: 'Base Submarina de Guzhenkou (Qingdao)' },
        nativeName: '古镇口海军基地 (青岛)',
        location: { en: 'Qingdao, Shandong, China', pt: 'Qingdao, Shandong, China' },
        coordinates: '35°43′40″N 119°59′45″E',
        fleet: { en: 'PLAN Northern Theater Command Fleet', pt: 'Frota do Teatro do Norte da PLAN' },
        status: { en: 'Operational (Active)', pt: 'Operacional (Ativa)' },
        homeportedClasses: ['Type 093 Shang Class (SSN)', 'Type 039A Yuan Class (AIP)'],
        description: {
          en: 'Northern Fleet military base guarding sea approaches to Beijing and monitoring the Korean Peninsula and Sea of Japan.',
          pt: 'Base militar da Frota do Norte encarregada de guardar as abordagens marítimas de Pequim e monitorar a península coreana e o Mar do Japão.'
        }
      },
      {
        id: 'zhoushan-base',
        name: { en: 'Zhoushan Naval Base (Ningbo)', pt: 'Base Naval de Zhoushan (Ningbo)' },
        nativeName: '舟山海军基地 (浙江省)',
        location: { en: 'Zhoushan, Zhejiang, China', pt: 'Zhoushan, Zhejiang, China' },
        coordinates: '29°59′00″N 122°12′00″E',
        fleet: { en: 'PLAN Eastern Theater Command Fleet', pt: 'Frota do Teatro Oriental da PLAN' },
        status: { en: 'Operational (Active)', pt: 'Operacional (Ativa)' },
        homeportedClasses: ['Type 039A Yuan Class (AIP)', 'Kilo Class (Project 636)'],
        description: {
          en: 'Primary Eastern Theater submarine base facing the East China Sea and Taiwan Strait, specializing in conventional AIP ambush operations.',
          pt: 'Principal base de submarinos do Teatro Oriental voltada para o Mar da China Oriental e Estreito de Taiwan.'
        }
      }
    ]
  },
  {
    id: 'japan',
    name: { en: 'Japan', pt: 'Japão' },
    englishName: 'Japan',
    flagCode: 'JP',
    navalBranch: { en: 'Japan Maritime Self-Defense Force (JMSDF) // Fleet Submarine Force', pt: 'Força Marítima de Autodefesa do Japão (JMSDF) // Fleet Submarine Force' },
    motto: { en: 'Silent Vigilance of the Seas', pt: 'Vigilância Silenciosa dos Mares' },
    activeSubmarineEstimate: 24,
    primaryFleetCommand: { en: 'Fleet Submarine Force (Yokosuka / Kure)', pt: 'Fleet Submarine Force (Yokosuka / Kure)' },
    stealthLevel: { en: 'S-Tier (Maximum)', pt: 'S-Tier (Máximo)' },
    nuclearCapability: false,
    overview: {
      en: 'The JMSDF operates what is widely acclaimed as the most advanced and silent conventional diesel-electric submarine fleet in existence, utilizing high-density Lithium-Ion battery arrays and hydrodynamically optimized hulls.',
      pt: 'A Força Marítima de Autodefesa do Japão (JMSDF) opera o que é amplamente considerado a frota de submarinos convencionais mais avançada e silenciosa do mundo. Seus submarinos utilizam baterias de Íon-Lítio de alta capacidade e cascos ultra-hidrodinâmicos.'
    },
    doctrinalFocus: {
      en: 'Chokepoint Surveillance, Enemy Submarine Interdiction & Island Chain Defense.',
      pt: 'Vigilância de Estreitos Estratégicos (Chokepoints), Negação de Submarinos Inimigos e Defesa da Cadeia de Ilhas.'
    },
    classes: [
      {
        id: 'taigei-class',
        name: { en: 'Taigei Class (Big Whale)', pt: 'Classe Taigei (Big Whale)' },
        code: '29SS / 30SS',
        type: 'AIP',
        typeLabel: { en: 'Lithium-Ion (Li-Ion) Battery Diesel-Electric Submarine', pt: 'Submarino Diesel-Elétrico com Baterias de Íon-Lítio (Li-Ion)' },
        status: { en: 'Active', pt: 'Ativo' },
        displacement: { en: '3,000 tons (surface) / ~4,300 t (submerged)', pt: '3.000 t (superfície) / ~4.300 t (submerso)' },
        length: '84 m',
        beam: '9.1 m',
        speed: { en: '20+ knots (submerged)', pt: '20+ nós (submerso)' },
        maxDepth: '> 300 m',
        propulsion: { en: 'High-Density Li-Ion Battery Banks + Direct-Drive Silent Electric Motor', pt: 'Baterias de Íon-Lítio + Motor Elétrico Silencioso Direct Drive' },
        crew: { en: '70 personnel', pt: '70 tripulantes' },
        endurance: { en: 'Long-duration high-speed submerged patrols with zero reactor or snorkel noise', pt: 'Patrulhas submersas de longa duração em alta velocidade sem ruído de reator ou snorkel' },
        armament: {
          en: [
            '6x 533mm HU-606 Torpedo Tubes',
            'Type 18 Fiber-Optic Guided Heavyweight Torpedoes',
            'UGM-84 Harpoon Anti-Ship Missiles'
          ],
          pt: [
            '6x Tubos de Torpedo HU-606 533mm',
            'Torpedos Pesados Type 18 (com guiamento por fibra ótica)',
            'Mísseis Anti-Navio UGM-84 Harpoon'
          ]
        },
        notableUnits: ['JS Taigei (SS-513)', 'JS Hakugei (SS-514)', 'JS Jingei (SS-515)', 'JS Raigei (SS-516)'],
        description: {
          en: 'Pioneered full replacement of traditional lead-acid & Stirling AIP engines with high-energy Lithium-Ion battery banks, allowing high-speed sprint bursts underwater in acoustic silence.',
          pt: 'Pioneiro mundial na substituição completa de sistemas AIP por bancos de baterias de íon-lítio de alta densidade energética, permitindo arrancadas em alta velocidade submerso em total silêncio acústico.'
        },
        tacticalRole: { en: 'Silent Chokepoint Ambush & Precision ASW Warfare', pt: 'Emboscada Silenciosa de Estreitos & Guerra Antisubmarino de Precisão' }
      },
      {
        id: 'soryu-class',
        name: { en: 'Soryu Class (Blue Dragon)', pt: 'Classe Soryu (Blue Dragon)' },
        code: '16SS',
        type: 'AIP',
        typeLabel: { en: 'AIP Conventional Attack Submarine', pt: 'Submarino de Ataque Convencional AIP' },
        status: { en: 'Active', pt: 'Ativo' },
        displacement: { en: '2,950 tons (surface) / 4,200 t (submerged)', pt: '2.950 t (superfície) / 4.200 t (submerso)' },
        length: '84 m',
        beam: '9.1 m',
        speed: { en: '20 knots (submerged)', pt: '20 nós (submerso)' },
        maxDepth: '> 300 m',
        propulsion: { en: 'Kawasaki Diesel + Kockums Stirling AIP (SS-501..510) / Li-Ion (SS-511..512)', pt: 'Motores Diesel Kawasaki + Motores AIP Stirling Kockums / Baterias Li-Ion' },
        crew: { en: '65 personnel', pt: '65 tripulantes' },
        endurance: { en: '3 weeks continuous submerged AIP navigation', pt: '3 semanas submerso em navegação contínua AIP' },
        armament: {
          en: [
            '6x 533mm Torpedo Tubes (Type 89 & Type 18 torpedoes)',
            'UGM-84 Harpoon Missiles'
          ],
          pt: [
            '6x Tubos de Torpedo 533mm (Torpedos Type 89 e Type 18)',
            'Mísseis UGM-84 Harpoon'
          ]
        },
        notableUnits: ['JS Soryu (SS-501)', 'JS Unryu (SS-502)', 'JS Oryu (SS-511)', 'JS Toryu (SS-512)'],
        description: {
          en: 'Renowned for X-rudders designed for agile seabed maneuvers and state-of-the-art acoustic tile cladding.',
          pt: 'Reconhecidos por seus lemes em formato de "X" projetados para manobras ágeis no fundo do mar e telhas anecóicas de absorção acústica.'
        },
        tacticalRole: { en: 'Deep Ocean Patrol in Sea of Japan & Pacific', pt: 'Patrulha de Profundidade no Mar do Japão e Oceano Pacífico' }
      }
    ],
    missions: [
      {
        id: 'strait-surveillance',
        name: { en: 'Permanent Japanese Straits Surveillance', pt: 'Vigilância Permanente dos Estreitos Japoneses' },
        codeName: 'OPERATION GUARDIAN GATE',
        period: '1954 - Present',
        theater: { en: 'Miyako, Tsugaru & Soya Straits', pt: 'Estreitos de Miyako, Tsugaru e Soya' },
        type: { en: 'Chokepoint Surveillance & ASW', pt: 'Vigilância de Chokepoint & ASW' },
        status: { en: 'Active', pt: 'Ativa' },
        description: {
          en: 'Continuous monitoring of all Japanese maritime passages to track every foreign military submarine in transit.',
          pt: 'Monitoramento contínuo de todos os pontos de passagem marítima entre o Mar da China e o Pacífico.'
        },
        keyObjective: {
          en: 'Contain adversary fleets within the First Island Chain.',
          pt: 'Garantir a contenção de frotas inimigas dentro da Primeira Cadeia de Ilhas.'
        }
      }
    ],
    bases: [
      {
        id: 'kure-base',
        name: { en: 'Kure Naval Base (Submarine District)', pt: 'Base Naval de Kure (Submarine District)' },
        nativeName: '呉基地 (広島県)',
        location: { en: 'Kure, Hiroshima, Japan', pt: 'Kure, Hiroshima, Japão' },
        coordinates: '34°14′00″N 132°33′00″E',
        fleet: { en: 'Submarine Flotilla 1', pt: 'Submarine Flotilla 1' },
        status: { en: 'Operational (Active)', pt: 'Operacional (Ativa)' },
        homeportedClasses: ['Taigei Class (SS)', 'Soryu Class (SS)'],
        description: {
          en: 'Historic Japanese naval base in the Seto Inland Sea, home to JMSDF submarine training centers.',
          pt: 'Histórica base naval militar japonesa no Mar Interior de Seto, berço da flotilha de submarinos da JMSDF.'
        }
      },
      {
        id: 'yokosuka-base',
        name: { en: 'Yokosuka Naval Base', pt: 'Base Naval de Yokosuka' },
        nativeName: '横須賀基地 (神奈川県)',
        location: { en: 'Yokosuka, Kanagawa, Japan', pt: 'Yokosuka, Kanagawa, Japão' },
        coordinates: '35°17′00″N 139°39′00″E',
        fleet: { en: 'Submarine Flotilla 2 & Fleet Submarine HQ', pt: 'Submarine Flotilla 2 & HQ da Força de Submarinos' },
        status: { en: 'Operational (Active)', pt: 'Operacional (Ativa)' },
        homeportedClasses: ['Taigei Class (SS)', 'Soryu Class (SS)', 'Oyashio Class (SS)'],
        description: {
          en: 'Headquarters of the JMSDF Fleet Submarine Force and key co-shared naval facility guarding Tokyo Bay.',
          pt: 'Sede do Comando da Força de Submarinos da JMSDF, guardando a entrada estratégica da Baía de Tóquio.'
        }
      }
    ]
  },
  {
    id: 'india',
    name: { en: 'India', pt: 'Índia' },
    englishName: 'India',
    flagCode: 'IN',
    navalBranch: { en: 'Indian Navy // Submarine Arm', pt: 'Marinha Indiana (Indian Navy) // Submarine Arm' },
    motto: { en: 'शं नो वरुणः (May the Lord of Oceans Be Auspicious Unto Us)', pt: 'शं नो वरुणः (Que o Senhor das Águas seja abençoado para nós)' },
    activeSubmarineEstimate: 18,
    primaryFleetCommand: { en: 'Eastern & Western Naval Commands', pt: 'Eastern & Western Naval Commands (Submarine Force)' },
    stealthLevel: { en: 'A-Tier (High)', pt: 'A-Tier (Elevado)' },
    nuclearCapability: true,
    overview: {
      en: 'The Indian Navy is one of the elite few operating a complete Nuclear Triad with indigenous nuclear-powered ballistic submarines (Arihant Class) coupled with advanced stealth conventional submarines.',
      pt: 'A Marinha Indiana é um dos raros países a operar uma Tríade Nuclear completa com submarinos balísticos de propulsão nuclear (Classe Arihant) em conjunto com submarinos diesel-elétricos avançados.'
    },
    doctrinalFocus: {
      en: 'Indian Ocean Dominance, South Asian Strategic Deterrence & SLOC Protection.',
      pt: 'Domínio do Oceano Índico, Dissuasão Nuclear do Sul da Ásia e Segurança Marítima de SLOCs.'
    },
    classes: [
      {
        id: 'arihant-class',
        name: { en: 'Arihant Class', pt: 'Classe Arihant' },
        code: 'SSBN ATV',
        type: 'SSBN',
        typeLabel: { en: 'Indigenous Nuclear Ballistic Submarine', pt: 'Submarino Balístico Nuclear Autóctone' },
        status: { en: 'Active', pt: 'Ativo' },
        displacement: { en: '6,000 tons (submerged)', pt: '6.000 toneladas (submerso)' },
        length: '112 m',
        beam: '11 m',
        speed: { en: '24 knots (submerged)', pt: '24 nós (submerso)' },
        maxDepth: '300 m',
        propulsion: { en: '83 MW Compact Light Water Nuclear Reactor', pt: 'Reator Nuclear de Água Leve (CLWR) de 83 MW' },
        crew: { en: '95 personnel', pt: '95 tripulantes' },
        endurance: { en: 'Limited by victuals', pt: 'Limitada por víveres' },
        armament: {
          en: [
            '12x K-15 Sagarika SLBMs (750km range) or 4x K-4 SLBMs (3,500km range)',
            '6x 533mm Torpedo Tubes'
          ],
          pt: [
            '12x Mísseis Balísticos sub-lançados K-15 Sagarika (750km) ou 4x K-4 (3.500km)',
            '6x Tubos de Torpedo 533mm'
          ]
        },
        notableUnits: ['INS Arihant (S2)', 'INS Arighat (S3)', 'INS Aridhaman (S4)'],
        description: {
          en: 'First nuclear submarine built entirely in India under the ATV project, securing India\'s "No First Use" retaliatory second-strike capability from the sea.',
          pt: 'Primeiro submarino nuclear construído inteiramente na Índia sob o projeto secreto ATV. Garante a capacidade indiana de "No First Use" com retaliação nuclear a partir do mar.'
        },
        tacticalRole: { en: 'Strategic Nuclear Deterrence in the Indian Ocean', pt: 'Dissuasão Nuclear Estratégica no Oceano Índico' }
      },
      {
        id: 'kalvari-class',
        name: { en: 'Kalvari Class (Project 75 Scorpène)', pt: 'Classe Kalvari (Projeto 75 Scorpène)' },
        code: 'P-75',
        type: 'SSK',
        typeLabel: { en: 'Stealth Conventional Attack Submarine', pt: 'Submarino de Ataque Convencional Clandestino' },
        status: { en: 'Active', pt: 'Ativo' },
        displacement: { en: '2,000 tons (submerged)', pt: '2.000 toneladas (submerso)' },
        length: '67.5 m',
        beam: '6.2 m',
        speed: { en: '20 knots (submerged)', pt: '20 nós (submerso)' },
        maxDepth: '350 m',
        propulsion: { en: 'Diesel-Electric (DRDO AIP retrofit planned)', pt: 'Motores Diesel-Elétricos (retrofit AIP planejado)' },
        crew: { en: '43 personnel', pt: '43 tripulantes' },
        endurance: { en: '50 days', pt: '50 dias' },
        armament: {
          en: [
            '6x 533mm Torpedo Tubes (SUT / SeaHake Torpedoes)',
            'Sub-launched Exocet SM39 Anti-Ship Missiles'
          ],
          pt: [
            '6x Tubos de Torpedo 533mm (Torpedos SUT / SeaHake)',
            'Mísseis Anti-Navio Exocet SM39 Sub-lançados'
          ]
        },
        notableUnits: ['INS Kalvari (S21)', 'INS Khanderi (S22)', 'INS Karanj (S23)', 'INS Vagir (S25)'],
        description: {
          en: 'Built in Mumbai (Mazagon Dock). Ultra-quiet acoustic damping with advanced tactical combat suites.',
          pt: 'Construídos no estaleiro Mazagon Dock em Mumbai. Extremamente silenciosos com tecnologia de absorção acústica.'
        },
        tacticalRole: { en: 'Chokepoint Patrol & Anti-Surface Warfare', pt: 'Patrulha de Chokepoint & Guerra Anti-Superfície no Oceano Índico' }
      }
    ],
    missions: [
      {
        id: 'indian-ocean-vigil',
        name: { en: 'Indian Ocean Strategic Surveillance', pt: 'Vigilância Estratégica do Oceano Índico' },
        codeName: 'OPERATION SAMUDRA RAKSHA',
        period: '1998 - Present',
        theater: { en: 'Indian Ocean, Arabian Sea & Bay of Bengal', pt: 'Oceano Índico, Mar da Arábia e Golfo de Bengala' },
        type: { en: 'Sovereignty Patrol & Regional Deterrence', pt: 'Patrulha de Soberania & Dissuasão Regional' },
        status: { en: 'Active', pt: 'Ativa' },
        description: {
          en: 'Continuous patrolling of Bab-el-Mandeb, Strait of Hormuz, and Malacca choke points.',
          pt: 'Patrulha contínua dos pontos de estrangulamento de Bab-el-Mandeb, Estreito de Ormuz e Malaca.'
        },
        keyObjective: {
          en: 'Maintain Indian Navy as primary security provider in the Indian Ocean.',
          pt: 'Manter a Marinha Indiana como o provedor primário de segurança no Oceano Índico.'
        }
      }
    ],
    bases: [
      {
        id: 'rambilli-base',
        name: { en: 'INS Varsha / Rambilli Naval Base', pt: 'INS Varsha / Naval Base Rambilli' },
        location: { en: 'Rambilli, Andhra Pradesh, India', pt: 'Rambilli, Andhra Pradesh, Índia' },
        coordinates: '17°26′00″N 82°55′00″E',
        fleet: { en: 'Eastern Naval Command (Nuclear Sub HQ)', pt: 'Eastern Naval Command (Nuclear Sub HQ)' },
        status: { en: 'Operational (Active)', pt: 'Operacional (Ativa)' },
        homeportedClasses: ['Arihant Class (SSBN)'],
        description: {
          en: 'Ultra-secret nuclear submarine base built into coastal mountains with underground tunnels.',
          pt: 'Base de submarinos nucleares ultra-secreta na costa leste da Índia, esculpida em uma cadeia de montanhas costeiras.'
        }
      },
      {
        id: 'visakhapatnam',
        name: { en: 'Visakhapatnam Naval Base (INS Virbahu)', pt: 'Base Naval de Visakhapatnam (INS Virbahu)' },
        location: { en: 'Visakhapatnam, Bay of Bengal, India', pt: 'Visakhapatnam, Golfo de Bengala, Índia' },
        coordinates: '17°41′00″N 83°17′00″E',
        fleet: { en: 'Eastern Naval Command Submarine Base', pt: 'Comando Naval Oriental (Base de Submarinos)' },
        status: { en: 'Operational (Active)', pt: 'Operacional (Ativa)' },
        homeportedClasses: ['Kalvari Class (P-75)', 'Arihant Class (SSBN)'],
        description: {
          en: 'The "Submarine HQ" of the Eastern Naval Command, housing INS Satavahana submarine training school.',
          pt: 'A "Sede dos Submarinos" do Comando Naval Oriental, equipada com a escola de treinamento de submarinistas INS Satavahana.'
        }
      },
      {
        id: 'mumbai-dockyard',
        name: { en: 'Mumbai Naval Dockyard (INS Vajrabahu)', pt: 'Arsenal Naval de Mumbai (INS Vajrabahu)' },
        location: { en: 'Mumbai, Arabian Sea, India', pt: 'Mumbai, Mar da Arábia, Índia' },
        coordinates: '18°55′00″N 72°50′00″E',
        fleet: { en: 'Western Naval Command Submarine Base', pt: 'Comando Naval Ocidental' },
        status: { en: 'Operational (Active)', pt: 'Operacional (Ativa)' },
        homeportedClasses: ['Kalvari Class (P-75)', 'Sindhughosh Class'],
        description: {
          en: 'Primary Western Fleet submarine base and shipbuilding complex (Mazagon Dock Limited).',
          pt: 'Principal base de submarinos da Frota Ocidental e complexo de construção naval Mazagon Dock.'
        }
      }
    ]
  }
]
