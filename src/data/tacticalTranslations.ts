import type { NavalAsset, MilitaryOperation, UnitSpec, WeaponSystem } from './tacticalData'

export type Language = 'EN' | 'PT'

// ==========================================
// TRANSLATION MAPS FOR NAVAL ASSETS
// ==========================================
export const TRANSLATED_TACTICAL_ASSETS: Record<Language, NavalAsset[]> = {
  EN: [
    {
      id: 'norfolk',
      name: 'Naval Station Norfolk',
      type: 'base',
      category: 'Naval Station',
      lat: 36.9467,
      lng: -76.3033,
      country: 'USA',
      details: 'World\'s largest naval station. Headquarters of US Fleet Forces Command and Atlantic Fleet.',
      status: 'ACTIVE',
      specs: [
        { label: 'Carrier Berths', value: '14' },
        { label: 'Based Aircraft', value: '75+' },
        { label: 'Operational Personnel', value: '54,000+' }
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
      details: 'Primary forward base of the US 7th Fleet in the Western Pacific. Homeport of supercarrier USS Ronald Reagan.',
      status: 'ACTIVE',
      specs: [
        { label: 'Allocated Fleet', value: '7th Fleet' },
        { label: 'Operational Area', value: 'Indo-Pacific' },
        { label: 'Drydock Capacity', value: 'CVN Support' }
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
      details: 'Headquarters of US Pacific Fleet and strategic hub for Virginia-class fast attack nuclear submarines.',
      status: 'ACTIVE',
      specs: [
        { label: 'Submarine Squadron', value: 'SUBRON 1 & 7' },
        { label: 'Active Submarines', value: '18 SSN' },
        { label: 'Coverage Area', value: 'Central Pacific' }
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
      details: 'Strategic atoll in the Indian Ocean. Forward base for SSGN submarines with Tomahawk missiles and B-2 Spirit bombers.',
      status: 'ACTIVE',
      specs: [
        { label: 'Main Runway', value: '3,650m' },
        { label: 'SSGN Support', value: 'Submarine Tender' },
        { label: 'Operational Area', value: 'Indian Ocean / Middle East' }
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
      details: 'Naval station in Andalusian Sea. Strategic hub for AEGIS destroyers integrated into NATO missile defense.',
      status: 'ACTIVE',
      specs: [
        { label: 'AEGIS Destroyers', value: '4 Arleigh Burke' },
        { label: 'Theater of Action', value: 'Mediterranean / Atlantic' },
        { label: 'Integration', value: 'NATO Command' }
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
      details: 'Headquarters of UK nuclear deterrent. Homeport of Vanguard-class SSBN submarines armed with Trident II missiles.',
      status: 'ACTIVE',
      specs: [
        { label: 'SSBN Fleet', value: '4 Vanguard Class' },
        { label: 'Nuclear Payload', value: 'Trident D5' },
        { label: 'Operation', value: 'CASD (Continuous At-Sea Deterrent)' }
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
      details: 'Primary East Coast ballistic submarine base, equipped with advanced nuclear maintenance facilities and Trident II missile storage.',
      status: 'ACTIVE',
      specs: [
        { label: 'Submarine Group', value: 'SUBGROUP 10' },
        { label: 'Fleet', value: 'Atlantic' },
        { label: 'Homeported Classes', value: 'Ohio SSBN / SSGN' }
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
      details: 'Largest deployed nuclear weapon stockpile base in the US. Homeport for Pacific SSBNs and USS Jimmy Carter (SSN-23).',
      status: 'ACTIVE',
      specs: [
        { label: 'Submarine Group', value: 'SUBGROUP 9' },
        { label: 'Fleet', value: 'Pacific' },
        { label: 'Homeported Classes', value: 'Ohio SSBN + Seawolf SSN' }
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
      details: 'Known as "The Home of the Submarine Force". First US Navy submarine base and primary tactical training center.',
      status: 'ACTIVE',
      specs: [
        { label: 'Squadron', value: 'SUBSQUADRON 2, 4, 12' },
        { label: 'Fleet', value: 'Atlantic' },
        { label: 'Homeported Classes', value: 'Virginia + Los Angeles SSN' }
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
      details: 'Southern California fast attack submarine hub, home to Submarine Squadron 11 and the US Navy Undersea Rescue Command.',
      status: 'ACTIVE',
      specs: [
        { label: 'Squadron', value: 'SUBRON 11' },
        { label: 'Fleet', value: 'Pacific' },
        { label: 'Homeported Classes', value: 'Los Angeles + Virginia SSN' }
      ]
    },
    // ---- Russia Submarine Bases ----
    {
      id: 'polyarny',
      name: 'Polyarny Naval Base (Kola Peninsula)',
      type: 'base',
      category: 'Naval Station',
      lat: 69.1983,
      lng: 33.4550,
      country: 'RUS',
      details: 'Historic Kola Peninsula naval base founded in 1899. Home to the Northern Fleet 161st Submarine Brigade with ice-free Barents Sea access.',
      status: 'ACTIVE',
      specs: [
        { label: 'Fleet', value: 'Northern Fleet' },
        { label: 'Brigade', value: '161st Submarine Brigade' },
        { label: 'Homeported Classes', value: 'Kilo + Akula Class' }
      ]
    },
    {
      id: 'gadzhiyevo',
      name: 'Gadzhiyevo Submarine Base (Kola Peninsula)',
      type: 'base',
      category: 'Naval Station',
      lat: 69.2556,
      lng: 33.3472,
      country: 'RUS',
      details: 'Primary Northern Fleet SSBN nuclear stronghold on the Kola Peninsula, nestled in deep protected Barents Sea fjords.',
      status: 'ACTIVE',
      specs: [
        { label: 'Fleet', value: 'Northern Fleet' },
        { label: 'Division', value: '31st Submarine Division' },
        { label: 'Homeported Classes', value: 'Borei SSBN + Yasen-M SSN' }
      ]
    },
    {
      id: 'zapadnaya-litsa',
      name: 'Zapadnaya Litsa Base (Kola Peninsula)',
      type: 'base',
      category: 'Naval Station',
      lat: 69.4000,
      lng: 32.4333,
      country: 'RUS',
      details: 'Westernmost nuclear submarine stronghold of the Russian Northern Fleet, located 45 km from the Norwegian border.',
      status: 'ACTIVE',
      specs: [
        { label: 'Fleet', value: 'Northern Fleet' },
        { label: 'Division', value: '11th Submarine Division' },
        { label: 'Homeported Classes', value: 'Yasen-M + Oscar II SSGN' }
      ]
    },
    {
      id: 'vilyuchinsk',
      name: 'Vilyuchinsk Submarine Base (Kamchatka)',
      type: 'base',
      category: 'Naval Station',
      lat: 52.9167,
      lng: 158.5000,
      country: 'RUS',
      details: 'Russian Navy Pacific submarine stronghold in Avacha Bay, providing direct deployment access to deep Pacific waters.',
      status: 'ACTIVE',
      specs: [
        { label: 'Fleet', value: 'Pacific Fleet' },
        { label: 'Division', value: '25th & 10th Submarine Divisions' },
        { label: 'Homeported Classes', value: 'Borei-A + Yasen-M + Oscar II' }
      ]
    },
    {
      id: 'severodvinsk',
      name: 'Severodvinsk Shipyard & Base (Sevmash)',
      type: 'base',
      category: 'Naval Station',
      lat: 64.5667,
      lng: 39.8167,
      country: 'RUS',
      details: 'World\'s largest nuclear submarine construction complex (Sevmash Shipyard), builder of Belgorod, Borei, and Yasen classes.',
      status: 'ACTIVE',
      specs: [
        { label: 'Fleet', value: 'Northern Fleet' },
        { label: 'Role', value: 'Construction + Naval Testing' },
        { label: 'Classes Produced', value: 'Belgorod + Borei-A + Yasen-M' }
      ]
    },
    // ---- South Korea Submarine Bases ----
    {
      id: 'jinhae-sub-base',
      name: 'Jinhae Naval Base (Submarine Command HQ)',
      type: 'base',
      category: 'Naval Station',
      lat: 35.1458,
      lng: 128.6528,
      country: 'KOR',
      details: 'Historical headquarters of the ROK Navy Submarine Force Command, with advanced simulator centers, dry docks, and torpedo testing.',
      status: 'ACTIVE',
      specs: [
        { label: 'Fleet', value: 'ROKN Submarine Force Command' },
        { label: 'Homeported Classes', value: 'KSS-III + KSS-II' },
        { label: 'Country', value: 'South Korea' }
      ]
    },
    {
      id: 'jeju-sub-base',
      name: 'Jeju Civilian-Military Complex Port',
      type: 'base',
      category: 'Naval Station',
      lat: 33.2389,
      lng: 126.4931,
      country: 'KOR',
      details: 'Strategic deep-water naval base guarding the southern sea lanes and East China Sea approaches.',
      status: 'ACTIVE',
      specs: [
        { label: 'Fleet', value: 'ROKN Strategic Task Flotilla' },
        { label: 'Homeported Classes', value: 'KSS-III Dosan Ahn Changho' },
        { label: 'Country', value: 'South Korea' }
      ]
    },
    {
      id: 'busan-sub-base',
      name: 'Busan Naval Base (ROKN Fleet HQ)',
      type: 'base',
      category: 'Naval Station',
      lat: 35.1042,
      lng: 129.1083,
      country: 'KOR',
      details: 'Primary operational fleet headquarters of the ROK Navy and main deployment port for international allied exercises.',
      status: 'ACTIVE',
      specs: [
        { label: 'Fleet', value: 'Republic of Korea Fleet Command' },
        { label: 'Homeported Classes', value: 'KSS-III + KSS-II' },
        { label: 'Country', value: 'South Korea' }
      ]
    },
    // ---- Germany Submarine Bases ----
    {
      id: 'eckernforde-base',
      name: 'Eckernförde Naval Base (1. Ubootgeschwader)',
      type: 'base',
      category: 'Naval Station',
      lat: 54.4667,
      lng: 9.8333,
      country: 'DEU',
      details: 'Homebase for the German Navy 1st Submarine Squadron, naval damage control center, and elite Kampfschwimmer frogmen unit.',
      status: 'ACTIVE',
      specs: [
        { label: 'Command', value: 'Einsatzflottille 1' },
        { label: 'Homeported Classes', value: 'Type 212A + Type 212CD' },
        { label: 'Country', value: 'Germany' }
      ]
    },
    {
      id: 'kiel-tkms',
      name: 'Kiel Shipyard & Naval Complex (TKMS)',
      type: 'base',
      category: 'Naval Station',
      lat: 54.3167,
      lng: 10.1500,
      country: 'DEU',
      details: 'Global center of non-nuclear submarine innovation and construction (TKMS shipyard).',
      status: 'ACTIVE',
      specs: [
        { label: 'Role', value: 'Construction + Testing' },
        { label: 'Classes Produced', value: 'Type 212A + 212CD' },
        { label: 'Country', value: 'Germany' }
      ]
    },
    {
      id: 'wilhelmshaven-base',
      name: 'Wilhelmshaven Naval Base',
      type: 'base',
      category: 'Naval Station',
      lat: 53.5167,
      lng: 8.1333,
      country: 'DEU',
      details: 'Germany\'s largest naval base, located on the Jade Bight of the North Sea, providing heavy maintenance and logistics.',
      status: 'ACTIVE',
      specs: [
        { label: 'Command', value: 'Einsatzflottille 2' },
        { label: 'Role', value: 'Maintenance + Logistics' },
        { label: 'Country', value: 'Germany' }
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
      details: 'Largest naval base in Western Europe, specialized in nuclear refueling, deep maintenance dry docks, and submarine refitting.',
      status: 'ACTIVE',
      specs: [
        { label: 'Role', value: 'Nuclear Refit + Maintenance' },
        { label: 'Homeported Classes', value: 'Astute SSN + Vanguard Refit' },
        { label: 'Country', value: 'United Kingdom' }
      ]
    },
    // ---- France Submarine Bases ----
    {
      id: 'ile-longue',
      name: 'Île Longue Naval Base (Brest)',
      type: 'base',
      category: 'Naval Station',
      lat: 48.3056,
      lng: -4.5069,
      country: 'FRA',
      details: 'Ultra-defended sanctuary in northwestern France dedicated exclusively to French nuclear SSBN maintenance and M51 missile loading.',
      status: 'ACTIVE',
      specs: [
        { label: 'Command', value: 'FOST (Force Océanique Stratégique)' },
        { label: 'Homeported Classes', value: 'Le Triomphant SNLE 2G' },
        { label: 'Country', value: 'France' }
      ]
    },
    {
      id: 'toulon',
      name: 'Toulon Naval Base (Arsenal de Toulon)',
      type: 'base',
      category: 'Naval Station',
      lat: 43.1167,
      lng: 5.9167,
      country: 'FRA',
      details: 'Primary French Mediterranean naval base, homeport for nuclear attack submarines (SNA) and aircraft carrier Charles de Gaulle.',
      status: 'ACTIVE',
      specs: [
        { label: 'Command', value: 'Escadrille des SNA (ENA)' },
        { label: 'Homeported Classes', value: 'Suffren + Rubis SNA' },
        { label: 'Country', value: 'France' }
      ]
    },
    // ---- China Submarine Bases ----
    {
      id: 'yulin-hainan',
      name: 'Yulin Submarine Base (Longpo / Hainan)',
      type: 'base',
      category: 'Naval Station',
      lat: 18.2028,
      lng: 109.6931,
      country: 'CHN',
      details: 'Strategic installation featuring underground mountain tunnels for satellite-free submarine ingress and egress.',
      status: 'ACTIVE',
      specs: [
        { label: 'Command', value: 'PLAN Southern Theater' },
        { label: 'Homeported Classes', value: 'Type 094 Jin SSBN + Type 093 SSN' },
        { label: 'Country', value: 'China' }
      ]
    },
    {
      id: 'qingdao-sub-base',
      name: 'Guzhenkou Submarine Base (Qingdao)',
      type: 'base',
      category: 'Naval Station',
      lat: 35.7278,
      lng: 119.9958,
      country: 'CHN',
      details: 'Northern Fleet military base guarding sea approaches to Beijing and monitoring the Korean Peninsula.',
      status: 'ACTIVE',
      specs: [
        { label: 'Command', value: 'PLAN Northern Theater' },
        { label: 'Homeported Classes', value: 'Type 093 SSN + Type 039A AIP' },
        { label: 'Country', value: 'China' }
      ]
    },
    {
      id: 'zhoushan-base',
      name: 'Zhoushan Naval Base (Ningbo)',
      type: 'base',
      category: 'Naval Station',
      lat: 29.9833,
      lng: 122.2000,
      country: 'CHN',
      details: 'Primary Eastern Theater submarine base facing the East China Sea and Taiwan Strait, specializing in AIP ambush ops.',
      status: 'ACTIVE',
      specs: [
        { label: 'Command', value: 'PLAN Eastern Theater' },
        { label: 'Homeported Classes', value: 'Type 039A Yuan AIP + Kilo' },
        { label: 'Country', value: 'China' }
      ]
    },
    // ---- Japan Submarine Bases ----
    {
      id: 'kure-base',
      name: 'Kure Naval Base (Submarine District)',
      type: 'base',
      category: 'Naval Station',
      lat: 34.2333,
      lng: 132.5500,
      country: 'JPN',
      details: 'Historic Japanese naval base in the Seto Inland Sea, home to JMSDF submarine training centers (Submarine Flotilla 1).',
      status: 'ACTIVE',
      specs: [
        { label: 'Flotilla', value: 'Submarine Flotilla 1' },
        { label: 'Homeported Classes', value: 'Taigei + Soryu Class' },
        { label: 'Country', value: 'Japan' }
      ]
    },
    {
      id: 'yokosuka-jmsdf',
      name: 'Yokosuka Naval Base (JMSDF)',
      type: 'base',
      category: 'Naval Station',
      lat: 35.2833,
      lng: 139.6500,
      country: 'JPN',
      details: 'Headquarters of the JMSDF Fleet Submarine Force and key naval facility guarding Tokyo Bay.',
      status: 'ACTIVE',
      specs: [
        { label: 'Flotilla', value: 'Submarine Flotilla 2' },
        { label: 'Homeported Classes', value: 'Taigei + Soryu + Oyashio' },
        { label: 'Country', value: 'Japan' }
      ]
    },
    // ---- India Submarine Bases ----
    {
      id: 'rambilli-base',
      name: 'INS Varsha / Rambilli Naval Base',
      type: 'base',
      category: 'Naval Station',
      lat: 17.4333,
      lng: 82.9167,
      country: 'IND',
      details: 'Ultra-secret nuclear submarine base built into coastal mountains with underground tunnels on India\'s east coast.',
      status: 'ACTIVE',
      specs: [
        { label: 'Command', value: 'Eastern Naval Command' },
        { label: 'Homeported Classes', value: 'Arihant SSBN' },
        { label: 'Country', value: 'India' }
      ]
    },
    {
      id: 'visakhapatnam',
      name: 'Visakhapatnam Naval Base (INS Virbahu)',
      type: 'base',
      category: 'Naval Station',
      lat: 17.6833,
      lng: 83.2833,
      country: 'IND',
      details: 'The "Submarine HQ" of the Eastern Naval Command, housing INS Satavahana submarine training school.',
      status: 'ACTIVE',
      specs: [
        { label: 'Command', value: 'Eastern Naval Command' },
        { label: 'Homeported Classes', value: 'Kalvari P-75 + Arihant SSBN' },
        { label: 'Country', value: 'India' }
      ]
    },
    {
      id: 'mumbai-dockyard',
      name: 'Mumbai Naval Dockyard (INS Vajrabahu)',
      type: 'base',
      category: 'Naval Station',
      lat: 18.9167,
      lng: 72.8333,
      country: 'IND',
      details: 'Primary Western Fleet submarine base and shipbuilding complex (Mazagon Dock Limited).',
      status: 'ACTIVE',
      specs: [
        { label: 'Command', value: 'Western Naval Command' },
        { label: 'Homeported Classes', value: 'Kalvari P-75 + Sindhughosh' },
        { label: 'Country', value: 'India' }
      ]
    },
    // ==========================================
    // OPERATIONAL CARRIER STRIKE GROUPS (EN)
    // ==========================================
    {
      id: 'csg-ford',
      name: 'Carrier Strike Group 12 (USS Gerald R. Ford - CVN-78)',
      type: 'patrol',
      category: 'Carrier Strike Group',
      lat: 25.5000,
      lng: 56.2500,
      country: 'USA',
      details: 'World\'s largest and most advanced nuclear supercarrier. Equipped with EMALS electromagnetic catapults and AESA DBR radar.',
      status: 'ALERTA MÁXIMO',
      specs: [
        { label: 'Flagship', value: 'USS Gerald R. Ford (CVN-78)' },
        { label: 'Escort', value: '3 AEGIS Destroyers + 1 SSN Submarine' },
        { label: 'Air Wing', value: '75+ F-35C & F/A-18E/F Fighters' },
        { label: 'Propulsion', value: '2x A1B Nuclear Reactors' },
        { label: 'Displacement', value: '100,000 tons' }
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
      details: 'Nuclear battle group deployed to the Red Sea and Gulf of Aden for maritime defense operations against drone and anti-ship missile threats.',
      status: 'ALERTA MÁXIMO',
      specs: [
        { label: 'Flagship', value: 'USS Dwight D. Eisenhower (CVN-69)' },
        { label: 'Escort', value: 'USS Philippine Sea (CG-58) + 2 DDGs' },
        { label: 'Air Wing', value: 'Carrier Air Wing 3 (CVW-3)' },
        { label: 'Armament', value: 'ESSM + RAM + Phalanx CIWS Missiles' }
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
      details: 'Forward-deployed spearhead of the US 7th Fleet patrolling the strategic waters of the Philippine Sea and Western Pacific.',
      status: 'PATROL',
      specs: [
        { label: 'Flagship', value: 'USS Ronald Reagan (CVN-76)' },
        { label: 'Operational Area', value: '7th Fleet / Philippine Sea' },
        { label: 'Escort', value: 'Ticonderoga Cruisers + Arleigh Burke Destroyers' },
        { label: 'Air Wing', value: 'CVW-5 (F/A-18 Super Hornet + E-2D Hawkeye)' }
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
      details: 'Nimitz-class nuclear supercarrier operating across the Central Pacific basin integrated with US 3rd Fleet.',
      status: 'PATROL',
      specs: [
        { label: 'Flagship', value: 'USS Carl Vinson (CVN-70)' },
        { label: 'Stealth Capability', value: 'F-35C Lightning II Squadron' },
        { label: 'Escort Submarine', value: 'Virginia-Class SSN' },
        { label: 'Air Wing', value: 'Carrier Air Wing 2 (CVW-2)' }
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
      details: 'Lead ship of the Nimitz class conducting tactical readiness operations across the Eastern Pacific Ocean.',
      status: 'ACTIVE',
      specs: [
        { label: 'Flagship', value: 'USS Nimitz (CVN-68)' },
        { label: 'Command', value: 'US 3rd Fleet / Pacific Fleet' },
        { label: 'Air Wing', value: 'CVW-17 (65+ Aircraft)' },
        { label: 'Top Speed', value: '31.5 knots' }
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
      details: 'Nuclear supercarrier operating in the Arabian Sea under US Central Command (CENTCOM) with stealth F-35C squadrons.',
      status: 'ALERTA MÁXIMO',
      specs: [
        { label: 'Flagship', value: 'USS Abraham Lincoln (CVN-72)' },
        { label: 'Theater', value: 'CENTCOM / Arabian Sea' },
        { label: 'Air Wing', value: 'VMFA-314 (F-35C) & VFA-41 (F/A-18F)' },
        { label: 'Escort', value: 'Destroyer Squadron 21 (DESRON 21)' }
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
      details: 'Forward-deployed nuclear supercarrier based in Yokosuka for surveillance of the Sea of Japan and Indo-Pacific.',
      status: 'ACTIVE',
      specs: [
        { label: 'Flagship', value: 'USS George Washington (CVN-73)' },
        { label: 'Forward Port', value: 'Yokosuka, Japan' },
        { label: 'Air Wing', value: 'Carrier Air Wing 5 (CVW-5)' },
        { label: 'Catapults', value: '4x C-13-1 Steam Catapults' }
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
      details: 'Nuclear aircraft carrier battle group deployed to the Mediterranean Sea supporting NATO security operations.',
      status: 'PATROL',
      specs: [
        { label: 'Flagship', value: 'USS Harry S. Truman (CVN-75)' },
        { label: 'Theater', value: 'Mediterranean / US 6th Fleet' },
        { label: 'Air Wing', value: 'Carrier Air Wing 1 (CVW-1)' },
        { label: 'Escort', value: 'USS Gettysburg (CG-64) + 3 DDGs' }
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
      details: 'Final Nimitz-class supercarrier built with redesigned stealth island and curved superstructure operating in the North Atlantic.',
      status: 'PATROL',
      specs: [
        { label: 'Flagship', value: 'USS George H.W. Bush (CVN-77)' },
        { label: 'Command', value: 'US 2nd Fleet / Atlantic' },
        { label: 'Air Wing', value: 'CVW-7' },
        { label: 'Complement', value: '5,680 Personnel' }
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
      details: 'Continuous flight-deck amphibious assault ship optimized for air operations as a dedicated stealth F-35B Lightning Carrier.',
      status: 'PATROL',
      specs: [
        { label: 'Flagship', value: 'USS America (LHA-6)' },
        { label: 'Doctrine', value: 'Lightning Carrier (F-35B Stealth)' },
        { label: 'Air Wing', value: '20x F-35B + MV-22B Osprey' },
        { label: 'Embarked Force', value: '31st Marine Expeditionary Unit' }
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
      details: 'Flagship aircraft carrier of the Royal Navy featuring twin-island architecture operating in the Norwegian Sea with F-35B stealth fighters.',
      status: 'PATROL',
      specs: [
        { label: 'Flagship', value: 'HMS Queen Elizabeth (R08)' },
        { label: 'Air Wing', value: '24x F-35B Lightning II Stealth Jets' },
        { label: 'Escort', value: 'HMS Diamond (Type 45) + Astute SSN' },
        { label: 'Displacement', value: '65,000 tons' }
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
      details: 'Second Queen Elizabeth-class supercarrier serving as flagship for the NATO High Readiness Force across the North Atlantic.',
      status: 'ACTIVE',
      specs: [
        { label: 'Flagship', value: 'HMS Prince of Wales (R09)' },
        { label: 'Command', value: 'NATO High Readiness Force' },
        { label: 'Air Wing', value: 'F-35B + Merlin HM2 Helicopters' },
        { label: 'Flight Deck', value: '280m Length / Ski-Jump 13°' }
      ]
    },
    {
      id: 'csg-charles-de-gaulle',
      name: 'Task Force 473 (Charles de Gaulle - R91)',
      type: 'patrol',
      category: 'Carrier Strike Group',
      lat: 34.5000,
      lng: 28.2000,
      country: 'FRA / NATO',
      details: 'Only nuclear-powered aircraft carrier in Europe, heading Task Force 473 in the Eastern Mediterranean with Rafale Marine omnirole fighters.',
      status: 'PATROL',
      specs: [
        { label: 'Flagship', value: 'Charles de Gaulle (R91)' },
        { label: 'Air Wing', value: '30x Rafale Marine F3-R + E-2C Hawkeye' },
        { label: 'Escort', value: 'Forbin Frigates (Horizon) + Suffren SSN' },
        { label: 'Propulsion', value: '2x K15 Nuclear Reactors' }
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
      details: 'First domestically built Chinese aircraft carrier conducting blue-water combat projection drills in the South China Sea and Luzon Strait.',
      status: 'ALERTA MÁXIMO',
      specs: [
        { label: 'Flagship', value: 'Shandong (17 - Type 002)' },
        { label: 'Air Wing', value: '36x J-15 Flying Shark Heavy Fighters' },
        { label: 'Escort', value: 'Type 055 Renhai Cruisers + Type 052D' },
        { label: 'Launch Method', value: 'STOBAR Ski-Jump' }
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
      details: 'Chinese Navy aircraft carrier operating in the East China Sea and transiting the Miyako Strait for Western Pacific patrols.',
      status: 'PATROL',
      specs: [
        { label: 'Flagship', value: 'Liaoning (16 - Type 001)' },
        { label: 'Air Wing', value: '24x J-15 + Z-18/Z-9 Helicopters' },
        { label: 'Command', value: 'PLAN Northern / Eastern Fleet' },
        { label: 'Displacement', value: '60,000 tons' }
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
      details: 'Asia\'s most advanced supercarrier, equipped with 3 electromagnetic catapults (EMALS) for J-35 stealth fighters and KJ-600 AEW&C aircraft.',
      status: 'ACTIVE',
      specs: [
        { label: 'Flagship', value: 'Fujian (18 - Type 003)' },
        { label: 'Launch System', value: '3x EMALS Electromagnetic Catapults' },
        { label: 'Air Wing', value: 'J-35 Stealth + J-15B + KJ-600 AEW&C' },
        { label: 'Displacement', value: '80,000+ tons' }
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
      details: 'India\'s first indigenously designed aircraft carrier (IAC-1), patrolling the Arabian Sea to safeguard critical Indian Ocean sea lanes.',
      status: 'PATROL',
      specs: [
        { label: 'Flagship', value: 'INS Vikrant (R11)' },
        { label: 'Air Wing', value: '26x MiG-29K + MH-60R Seahawk Helicopters' },
        { label: 'Escort', value: 'INS Visakhapatnam (P15B) + Talwar Frigates' },
        { label: 'Range', value: '7,500 nautical miles' }
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
      details: 'Heavy STOBAR aircraft carrier of the Indian Navy patrolling the Bay of Bengal and guarding the approaches to the Malacca Strait.',
      status: 'PATROL',
      specs: [
        { label: 'Flagship', value: 'INS Vikramaditya (R33)' },
        { label: 'Air Wing', value: '30x MiG-29K Fighters & Kamov Ka-31 AEW' },
        { label: 'Homeport', value: 'INS Kadamba (Karwar)' },
        { label: 'Displacement', value: '45,400 tons' }
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
      details: 'Modified aircraft carrier of the Japan Maritime Self-Defense Force with squared bow deck for F-35B stealth STOVL jet operations.',
      status: 'PATROL',
      specs: [
        { label: 'Flagship', value: 'JS Kaga (DDH-184)' },
        { label: 'Air Wing', value: 'F-35B Lightning II Stealth Fighters' },
        { label: 'Escort', value: 'Maya-Class (AEGIS) + Asahi Destroyers' },
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
      details: 'First Japanese aircraft carrier since WWII converted for short takeoff and vertical landing operations with 5th-gen F-35B fighters.',
      status: 'ACTIVE',
      specs: [
        { label: 'Flagship', value: 'JS Izumo (DDH-183)' },
        { label: 'Air Capability', value: 'F-35B + SH-60K / MCH-101 Helicopters' },
        { label: 'Command', value: 'JMSDF Fleet Escort Force' },
        { label: 'Length', value: '248 meters' }
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
      details: 'Flagship carrier of the Italian Navy operating in the Central Mediterranean and Ionian Sea with F-35B and AV-8B Harrier II jets.',
      status: 'PATROL',
      specs: [
        { label: 'Flagship', value: 'Cavour (C 550)' },
        { label: 'Air Wing', value: '16x F-35B Stealth + AV-8B Harrier II' },
        { label: 'Escort', value: 'Andrea Doria Destroyers (Horizon Class)' },
        { label: 'Defenses', value: '32x Aster 15 Missiles + Otobreda 76mm' }
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
      details: 'Largest Italian warship built in the post-war era, serving as an amphibious helicopter carrier and light F-35B carrier.',
      status: 'ACTIVE',
      specs: [
        { label: 'Flagship', value: 'Trieste (L 9890)' },
        { label: 'Air Wing', value: 'F-35B + EH-101 and NH-90 Helicopters' },
        { label: 'Displacement', value: '38,000 tons' },
        { label: 'Propulsion', value: 'CODLOG (Gas Turbines + Electric Motors)' }
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
      details: 'Largest ship in the Spanish Navy, featuring a 12° ski-jump flight deck combining V/STOL carrier and strategic projection roles.',
      status: 'PATROL',
      specs: [
        { label: 'Flagship', value: 'Juan Carlos I (L-61)' },
        { label: 'Air Wing', value: '12x AV-8B Harrier II Plus + NH90' },
        { label: 'Escort', value: 'F-100 Álvaro de Bazán Frigates (AEGIS)' },
        { label: 'Displacement', value: '27,000 tons' }
      ]
    },

    // ==========================================
    // OPERATIONAL SUBMARINES (EN)
    // ==========================================
    {
      id: 'ssn-jimmy-carter',
      name: 'Special Mission Patrol (USS Jimmy Carter - SSN-23)',
      type: 'patrol',
      category: 'Submarine Patrol',
      lat: 14.5000,
      lng: 115.0000,
      country: 'USA',
      details: 'Modified Seawolf-class submarine with a 100ft Multi-Mission Platform (MMP) for clandestine operations, undersea cable tapping, and deep SIGINT.',
      status: 'PATROL',
      specs: [
        { label: 'Vessel', value: 'USS Jimmy Carter (SSN-23)' },
        { label: 'Test Depth', value: '-500m (HY-100 High-Strength Steel Hull)' },
        { label: 'Mission', value: 'Clandestine Ops / SIGINT / UUV Deployment' },
        { label: 'Silent Speed', value: '35+ knots submerged' },
        { label: 'Armament', value: '50x Mk 48 ADCAP Torpedoes / Harpoon' }
      ]
    },
    {
      id: 'ssgn-ohio',
      name: 'GIUK Gap Strategic Patrol (USS Ohio - SSGN-726)',
      type: 'patrol',
      category: 'Submarine Patrol',
      lat: 62.0000,
      lng: -18.0000,
      country: 'USA / UK',
      details: 'Largest concentration of conventional submerged firepower on Earth, armed with 154 Tomahawk cruise missiles in silent North Atlantic patrol.',
      status: 'PATROL',
      specs: [
        { label: 'Vessel', value: 'USS Ohio (SSGN-726)' },
        { label: 'Payload', value: '154x Tomahawk Block V Cruise Missiles' },
        { label: 'Special Operations', value: '66x Navy SEALs + 2x Dry Deck Shelters' },
        { label: 'Propulsion', value: 'S8G Nuclear Reactor' },
        { label: 'Acoustic Signature', value: '< Natural Ocean Ambient Noise' }
      ]
    },
    {
      id: 'ssgn-florida',
      name: 'Strategic SSGN Patrol (USS Florida - SSGN-728)',
      type: 'patrol',
      category: 'Submarine Patrol',
      lat: 34.2000,
      lng: 23.5000,
      country: 'USA / NATO',
      details: 'Guided missile nuclear submarine operating in the Eastern Mediterranean and Red Sea in a high-readiness strategic deterrence posture.',
      status: 'ALERTA MÁXIMO',
      specs: [
        { label: 'Vessel', value: 'USS Florida (SSGN-728)' },
        { label: 'Missile Capacity', value: '154x Tomahawk Cruise Missiles' },
        { label: 'Displacement', value: '18,750 tons submerged' },
        { label: 'Command', value: 'US 6th Fleet / NATO' }
      ]
    },
    {
      id: 'ssgn-georgia',
      name: 'Strategic SSGN Patrol (USS Georgia - SSGN-729)',
      type: 'patrol',
      category: 'Submarine Patrol',
      lat: 24.1000,
      lng: 58.6000,
      country: 'USA',
      details: 'Nuclear cruise missile submarine patrolling the Gulf of Oman and Arabian Sea under US Naval Forces Central Command.',
      status: 'ALERTA MÁXIMO',
      specs: [
        { label: 'Vessel', value: 'USS Georgia (SSGN-729)' },
        { label: 'Command', value: 'US 5th Fleet / NAVCENT' },
        { label: 'Armament', value: '154x Tomahawk + Mk 48 Torpedoes' },
        { label: 'Endurance', value: 'Unlimited (limited only by food supplies)' }
      ]
    },
    {
      id: 'ssn-virginia',
      name: 'Fast Attack Patrol (USS Virginia - SSN-774)',
      type: 'patrol',
      category: 'Submarine Patrol',
      lat: 32.5000,
      lng: -68.0000,
      country: 'USA',
      details: 'Lead fast attack nuclear submarine featuring digital photonics masts, large aperture bow sonar array, and vertical launch tubes.',
      status: 'PATROL',
      specs: [
        { label: 'Vessel', value: 'USS Virginia (SSN-774)' },
        { label: 'Sensors', value: 'Photonics Masts + BQQ-10 Sonar Suite' },
        { label: 'Armament', value: '12x Tomahawk VLS + 28x Mk 48 ADCAP' },
        { label: 'Propulsion', value: 'S9G Reactor (33-year core life without refueling)' }
      ]
    },
    {
      id: 'ssn-texas',
      name: 'Silent SSN Patrol (USS Texas - SSN-775)',
      type: 'patrol',
      category: 'Submarine Patrol',
      lat: 53.2000,
      lng: -30.5000,
      country: 'USA',
      details: 'Virginia-class nuclear attack submarine operating in deep North Atlantic waters monitoring submarine transit lanes.',
      status: 'PATROL',
      specs: [
        { label: 'Vessel', value: 'USS Texas (SSN-775)' },
        { label: 'Theater', value: 'North Atlantic / US 2nd Fleet' },
        { label: 'Operating Depth', value: '-250m+' },
        { label: 'Endurance', value: '90 days continuous submerged' }
      ]
    },
    {
      id: 'ssn-seawolf',
      name: 'Arctic Hunter-Killer (USS Seawolf - SSN-21)',
      type: 'patrol',
      category: 'Submarine Patrol',
      lat: 78.5000,
      lng: 5.0000,
      country: 'USA',
      details: 'The most advanced and heavily armed hunter-killer submarine ever built, patrolling under the Arctic ice cap in complete acoustic silence.',
      status: 'PATROL',
      specs: [
        { label: 'Vessel', value: 'USS Seawolf (SSN-21)' },
        { label: 'Torpedo Tubes', value: '8x 660mm Heavy Torpedo Tubes' },
        { label: 'Weapon Capacity', value: '50x Weapons (Mk 48 / Tomahawk / Harpoon)' },
        { label: 'Tactical Silent Speed', value: '25 knots (undetectable to passive sonar)' }
      ]
    },
    {
      id: 'ssn-connecticut',
      name: 'Deep-Ocean Patrol (USS Connecticut - SSN-22)',
      type: 'patrol',
      category: 'Submarine Patrol',
      lat: 20.0000,
      lng: 145.0000,
      country: 'USA',
      details: 'Seawolf-class nuclear hunter-killer operating across the Mariana Trench and Western Pacific oceanic basin.',
      status: 'PATROL',
      specs: [
        { label: 'Vessel', value: 'USS Connecticut (SSN-22)' },
        { label: 'Hull', value: 'HY-100 High-Yield Alloy Steel' },
        { label: 'Sonar', value: 'BQQ-5D / Integrated BSY-2' },
        { label: 'Maximum Depth', value: '-600m' }
      ]
    },
    {
      id: 'ssbn-vanguard-patrol',
      name: 'Nuclear CASD Deterrent (HMS Vanguard - S28)',
      type: 'patrol',
      category: 'Submarine Patrol',
      lat: 58.5000,
      lng: -25.0000,
      country: 'UK',
      details: 'Continuous At-Sea Deterrent (CASD) nuclear ballistic patrol in deep North Atlantic waters armed with Trident II D5 missiles.',
      status: 'PATROL',
      specs: [
        { label: 'Vessel', value: 'HMS Vanguard (S28)' },
        { label: 'Armament', value: '16x Trident II D5 Ballistic Missiles' },
        { label: 'Warheads', value: 'Holbrook MIRV Thermonuclear Warheads' },
        { label: 'Operation', value: 'CASD (Continuous At-Sea Deterrent since 1969)' }
      ]
    },
    {
      id: 'ssn-astute-patrol',
      name: 'Astute Fast Attack (HMS Astute - S119)',
      type: 'patrol',
      category: 'Submarine Patrol',
      lat: 67.4000,
      lng: 3.2000,
      country: 'UK / NATO',
      details: '4th-generation British nuclear attack submarine featuring the world-leading Thales Sonar 2076 processing suite on the fringes of the Barents Sea.',
      status: 'PATROL',
      specs: [
        { label: 'Vessel', value: 'HMS Astute (S119)' },
        { label: 'Sonar', value: 'Thales Sonar 2076 (World Benchmark Processing)' },
        { label: 'Armament', value: '38x Weapons (Spearfish + Tomahawk Block IV)' },
        { label: 'Acoustic Tiles', value: '39,000 Anechoic Acoustic Tiles' }
      ]
    },
    {
      id: 'ssn-ambush-patrol',
      name: 'Hunter-Killer Patrol (HMS Ambush - S120)',
      type: 'patrol',
      category: 'Submarine Patrol',
      lat: 36.2000,
      lng: 1.5000,
      country: 'UK / NATO',
      details: 'British nuclear attack submarine patrolling the Western Mediterranean straits integrated with NATO ASW task groups.',
      status: 'PATROL',
      specs: [
        { label: 'Vessel', value: 'HMS Ambush (S120)' },
        { label: 'Propulsion', value: 'Rolls-Royce PWR2 Core H Reactor' },
        { label: 'Air Generation', value: 'Oxygen Electrolysis (90 days submerged)' },
        { label: 'Armament', value: 'Spearfish Mod 1 Heavyweight Torpedoes' }
      ]
    },
    {
      id: 'ssn-severodvinsk-patrol',
      name: 'Arctic Yasen-M Patrol (K-560 Severodvinsk)',
      type: 'patrol',
      category: 'Submarine Patrol',
      lat: 74.2000,
      lng: 38.0000,
      country: 'RUS',
      details: 'Russian Navy\'s premier 4th-gen nuclear attack submarine armed with 3M22 Zircon hypersonic and Kalibr cruise missiles under Arctic ice.',
      status: 'PATROL',
      specs: [
        { label: 'Vessel', value: 'K-560 Severodvinsk (Project 885 Yasen)' },
        { label: 'Armament', value: '32x Zircon / Kalibr / Oniks Hypersonic Missiles' },
        { label: 'Sonar', value: 'Irtysh-Amfora Spherical Bow Sonar' },
        { label: 'Maximum Depth', value: '-600m' }
      ]
    },
    {
      id: 'ssn-kazan-patrol',
      name: 'Strategic Yasen-M Patrol (K-561 Kazan)',
      type: 'patrol',
      category: 'Submarine Patrol',
      lat: 56.0000,
      lng: -42.0000,
      country: 'RUS',
      details: 'Modernized Project 885M submarine featuring optimized monohull quiet propulsion transiting the North Atlantic Ocean.',
      status: 'PATROL',
      specs: [
        { label: 'Vessel', value: 'K-561 Kazan (Project 885M Yasen-M)' },
        { label: 'Propulsion', value: 'OK-650V Reactor with Integrated Primary Loop' },
        { label: 'VLS Silos', value: '10x Multi-Mission Vertical Launch Silos' },
        { label: 'Speed', value: '31 knots submerged' }
      ]
    },
    {
      id: 'ssbn-vladimir-patrol',
      name: 'Strategic Borei Patrol (K-551 Vladimir Monomakh)',
      type: 'patrol',
      category: 'Submarine Patrol',
      lat: 54.0000,
      lng: 150.5000,
      country: 'RUS',
      details: 'Borei-class nuclear ballistic submarine in strategic deterrence patrol across the deep frozen bastions of the Sea of Okhotsk.',
      status: 'PATROL',
      specs: [
        { label: 'Vessel', value: 'K-551 Vladimir Monomakh (Project 955)' },
        { label: 'Armament', value: '16x RSM-56 Bulava Intercontinental SLBMs' },
        { label: 'Warheads', value: '96x Guided MIRV Thermonuclear Warheads' },
        { label: 'Propulsion', value: 'Ultra-Quiet Hydrodynamic Pump-Jet' }
      ]
    },
    {
      id: 'ssbn-knyaz-vladimir',
      name: 'Borei-A Deterrence (K-549 Knyaz Vladimir)',
      type: 'patrol',
      category: 'Submarine Patrol',
      lat: 71.8000,
      lng: 48.2000,
      country: 'RUS',
      details: 'Upgraded Borei-A SSBN with enhanced hull lines and acoustic sensor suite on nuclear patrol in the Barents Sea / White Sea.',
      status: 'PATROL',
      specs: [
        { label: 'Vessel', value: 'K-549 Knyaz Vladimir (Project 955A)' },
        { label: 'ICBM Missiles', value: '16x Bulava (10,000 km Range)' },
        { label: 'Hull', value: 'Austenitic Steel with Anechoic Plating' },
        { label: 'Command', value: 'Russian Northern Fleet (Gadzhiyevo)' }
      ]
    },
    {
      id: 'ssn-belgorod-patrol',
      name: 'Special Arctic Operations (K-329 Belgorod)',
      type: 'patrol',
      category: 'Submarine Patrol',
      lat: 76.5000,
      lng: 60.0000,
      country: 'RUS',
      details: 'The world\'s longest submarine (178m), designed as the mother-ship for 2M39 Poseidon nuclear autonomous mega-torpedoes and deep-sea submersibles.',
      status: 'PATROL',
      specs: [
        { label: 'Vessel', value: 'K-329 Belgorod (Project 09852)' },
        { label: 'Special Armament', value: '6x Poseidon 2M39 Nuclear Autonomous Drones' },
        { label: 'Host Submarine', value: 'Losharik / AS-31 for Ultra-Deep Submergence' },
        { label: 'Length', value: '178 meters / 24,000t submerged' }
      ]
    },
    {
      id: 'ssk-krasnodar-patrol',
      name: 'Silent Kilo Patrol (B-265 Krasnodar)',
      type: 'patrol',
      category: 'Submarine Patrol',
      lat: 43.8000,
      lng: 34.5000,
      country: 'RUS',
      details: 'Project 636.3 diesel-electric submarine dubbed the "Black Hole" by NATO for its total acoustic silence, patrolling the Black Sea.',
      status: 'PATROL',
      specs: [
        { label: 'Vessel', value: 'B-265 Krasnodar (Improved Kilo)' },
        { label: 'Armament', value: 'Kalibr-PL Land-Attack Cruise Missiles + 53-65K' },
        { label: 'Propulsion', value: 'Silenced Diesel-Electric with High-Density Batteries' },
        { label: 'Submerged Range', value: '400 miles on creeping electric drive' }
      ]
    },
    {
      id: 'ssbn-le-terrible-patrol',
      name: 'FOST Strategic Patrol (Le Terrible - S619)',
      type: 'patrol',
      category: 'Submarine Patrol',
      lat: 42.0000,
      lng: -35.0000,
      country: 'FRA',
      details: 'French nuclear ballistic missile submarine (SNLE) operating in deep Atlantic secrecy armed with M51 intercontinental ballistic missiles.',
      status: 'PATROL',
      specs: [
        { label: 'Vessel', value: 'Le Terrible (S619 - Triomphant Class)' },
        { label: 'Armament', value: '16x M51 SLBM with TNO Thermonuclear Warheads' },
        { label: 'Command', value: 'FOST (Force Océanique Stratégique)' },
        { label: 'Propulsion', value: 'K15 Reactor with Quiet Turbo-Reduction' }
      ]
    },
    {
      id: 'ssbn-triomphant-patrol',
      name: 'FOST Deterrence Patrol (Le Triomphant - S616)',
      type: 'patrol',
      category: 'Submarine Patrol',
      lat: 46.5000,
      lng: -12.0000,
      country: 'FRA',
      details: 'French strategic nuclear submarine operating across the Bay of Biscay and North Atlantic guaranteeing continuous nuclear deterrence.',
      status: 'PATROL',
      specs: [
        { label: 'Vessel', value: 'Le Triomphant (S616)' },
        { label: 'Nuclear Payload', value: '16x M51 SLBMs (6 thermonuclear warheads each)' },
        { label: 'Displacement', value: '14,335 tons submerged' },
        { label: 'Operating Depth', value: '-300m to -400m' }
      ]
    },
    {
      id: 'ssn-suffren-patrol',
      name: 'Barracuda Attack Patrol (Suffren - Q284)',
      type: 'patrol',
      category: 'Submarine Patrol',
      lat: 39.5000,
      lng: 4.8000,
      country: 'FRA',
      details: 'Next-generation French nuclear attack submarine featuring X-rudders, pump-jet propulsion, and MdCN naval land-attack cruise missiles.',
      status: 'PATROL',
      specs: [
        { label: 'Vessel', value: 'Suffren (Q284 - Barracuda Class)' },
        { label: 'Armament', value: 'MdCN (1,000km) + F21 Torpedoes + SM39 Exocet' },
        { label: 'Rudders', value: 'X-Rudder Configuration with Digital Autopilot' },
        { label: 'Diver Shelter', value: 'Integrated Dry Deck Shelter Hangar' }
      ]
    },
    {
      id: 'ssn-duguay-trouin',
      name: 'Silent Suffren Patrol (Duguay-Trouin - S636)',
      type: 'patrol',
      category: 'Submarine Patrol',
      lat: 49.2000,
      lng: -7.5000,
      country: 'FRA',
      details: 'Second Barracuda-class nuclear submarine on escort and sea-control missions guarding the strategic approaches to Île Longue.',
      status: 'ACTIVE',
      specs: [
        { label: 'Vessel', value: 'Duguay-Trouin (S636)' },
        { label: 'Propulsion', value: 'K15 Reactor (10-year Core Life)' },
        { label: 'Crew', value: '65 Submariners (Mixed Crew)' },
        { label: 'Speed', value: '25 knots submerged' }
      ]
    },
    {
      id: 'ssbn-type094-patrol',
      name: 'PLAN Bastion Patrol (Type 094A Jin-Class SSBN)',
      type: 'patrol',
      category: 'Submarine Patrol',
      lat: 16.5000,
      lng: 112.5000,
      country: 'CHN',
      details: 'Chinese strategic ballistic missile submarine with improved hydrodynamic sail patrolling the deep-water bastion of the South China Sea.',
      status: 'PATROL',
      specs: [
        { label: 'Vessel', value: 'Changzheng 18 (Type 094A Jin-Class)' },
        { label: 'Armament', value: '12x JL-3 Intercontinental SLBMs' },
        { label: 'Missile Range', value: '10,000+ km' },
        { label: 'Home Base', value: 'Yulin Submarine Base (Hainan)' }
      ]
    },
    {
      id: 'ssn-type093b-patrol',
      name: 'PLAN Attack Patrol (Type 093B Shang-Class)',
      type: 'patrol',
      category: 'Submarine Patrol',
      lat: 21.0000,
      lng: 125.0000,
      country: 'CHN',
      details: 'Chinese nuclear attack submarine equipped with a vertical launch module for YJ-18 supersonic anti-ship and cruise missiles.',
      status: 'PATROL',
      specs: [
        { label: 'Vessel', value: 'Type 093B Shang-Class SSN' },
        { label: 'Vertical Missiles', value: 'VLS with YJ-18 & CJ-10 Cruise Missiles' },
        { label: 'Sonar', value: 'HPS Flank Array Acoustic Sonar' },
        { label: 'Speed', value: '30 knots' }
      ]
    },
    {
      id: 'ssk-type039c-patrol',
      name: 'Stealth AIP Patrol (Type 039C Yuan-Class)',
      type: 'patrol',
      category: 'Submarine Patrol',
      lat: 24.8000,
      lng: 120.2000,
      country: 'CHN',
      details: 'China\'s newest AIP submarine featuring an angular stealth sail designed to deflect active sonar pulses and radar waves across the Taiwan Strait.',
      status: 'PATROL',
      specs: [
        { label: 'Vessel', value: 'Type 039C Yuan Class AIP' },
        { label: 'Technology', value: 'Faceted Stealth Sail + Stirling AIP Engine' },
        { label: 'Armament', value: 'Yu-6 Torpedoes + YJ-82 Anti-Ship Missiles' },
        { label: 'Submerged Endurance', value: '21 days without surfacing' }
      ]
    },
    {
      id: 'ssbn-arihant-patrol',
      name: 'SSBN Deterrence Patrol (INS Arihant - S2)',
      type: 'patrol',
      category: 'Submarine Patrol',
      lat: 13.5000,
      lng: 85.2000,
      country: 'IND',
      details: 'India\'s first nuclear ballistic missile submarine, completing India\'s Nuclear Triad on deep-water patrol in the Bay of Bengal.',
      status: 'PATROL',
      specs: [
        { label: 'Vessel', value: 'INS Arihant (S2)' },
        { label: 'Armament', value: '12x K-15 Sagarika or 4x K-4 SLBMs' },
        { label: 'Propulsion', value: 'Pressurized Water Reactor (83 MW)' },
        { label: 'Theater', value: 'Indian Ocean / Strategic Forces Command' }
      ]
    },
    {
      id: 'ssbn-arighat-patrol',
      name: 'Strategic SSBN Patrol (INS Arighat - S3)',
      type: 'patrol',
      category: 'Submarine Patrol',
      lat: 9.8000,
      lng: 88.5000,
      country: 'IND',
      details: 'India\'s second nuclear ballistic submarine, featuring enlarged payload capacity for 3,500km-range K-4 ballistic missiles.',
      status: 'ACTIVE',
      specs: [
        { label: 'Vessel', value: 'INS Arighat (S3)' },
        { label: 'Armament', value: 'K-4 SLBM Missiles (3,500 km range)' },
        { label: 'Sensors', value: 'USHUS Integrated Sonar Suite (DRDO)' },
        { label: 'Displacement', value: '6,000 tons' }
      ]
    },
    {
      id: 'ssk-kalvari-patrol',
      name: 'Silent Scorpène Patrol (INS Kalvari - S21)',
      type: 'patrol',
      category: 'Submarine Patrol',
      lat: 16.2000,
      lng: 70.8000,
      country: 'IND',
      details: 'Diesel-electric attack submarine built in India by Mazagon Dock under the Scorpène class program, patrolling the Arabian Sea.',
      status: 'PATROL',
      specs: [
        { label: 'Vessel', value: 'INS Kalvari (S21 - Kalvari Class)' },
        { label: 'Armament', value: 'SM39 Exocet Missiles + Varunastra Torpedoes' },
        { label: 'Command', value: 'Western Naval Command (Mumbai)' },
        { label: 'Test Depth', value: '-350m' }
      ]
    },
    {
      id: 'sskn-dosan-patrol',
      name: 'Tactical KSS-III Patrol (Dosan Ahn Changho - SS-083)',
      type: 'patrol',
      category: 'Submarine Patrol',
      lat: 37.5000,
      lng: 131.2000,
      country: 'KOR',
      details: 'The world\'s first diesel-electric submarine equipped with VLS and conventional Hyunmoo-4-4 ballistic missiles, patrolling the Sea of Japan.',
      status: 'PATROL',
      specs: [
        { label: 'Vessel', value: 'Dosan Ahn Changho (SS-083)' },
        { label: 'Armament', value: '6x VLS Tubes with Hyunmoo Ballistic Missiles' },
        { label: 'Propulsion', value: 'Samsung Lithium-Ion Batteries + Fuel Cell AIP' },
        { label: 'Displacement', value: '3,750 tons submerged' }
      ]
    },
    {
      id: 'sskn-ahn-mu',
      name: 'Strategic KSS-III Patrol (Ahn Mu - SS-085)',
      type: 'patrol',
      category: 'Submarine Patrol',
      lat: 34.8000,
      lng: 128.9000,
      country: 'KOR',
      details: 'Second Dosan Ahn Changho-class submarine armed with SLBMs on tactical deterrence and patrol duty in the Korea Strait.',
      status: 'PATROL',
      specs: [
        { label: 'Vessel', value: 'Ahn Mu (SS-085)' },
        { label: 'Capacity', value: '6x Hyunmoo-4-4 SLBM Ballistic Missiles' },
        { label: 'Combat System', value: 'Hanwha Systems Naval Combat Suite' },
        { label: 'AIP Endurance', value: 'Over 20 days submerged' }
      ]
    },
    {
      id: 'ssk-taigei-patrol',
      name: 'Silent JMSDF Patrol (JS Taigei - SS-513)',
      type: 'patrol',
      category: 'Submarine Patrol',
      lat: 26.8000,
      lng: 125.4000,
      country: 'JPN',
      details: 'Latest-generation JMSDF submarine powered 100% by lithium-ion batteries for extreme silent acceleration along the First Island Chain.',
      status: 'PATROL',
      specs: [
        { label: 'Vessel', value: 'JS Taigei (SS-513)' },
        { label: 'Technology', value: '100% Lithium-Ion Battery Propulsion' },
        { label: 'Armament', value: 'Type 18 Heavy Torpedoes + Harpoon UGM-84' },
        { label: 'Sonar', value: 'OYX-1 High-Resolution Fiber-Optic Sonar' }
      ]
    },
    {
      id: 'ssk-hakugei-patrol',
      name: 'Lithium-Ion Patrol (JS Hakugei - SS-514)',
      type: 'patrol',
      category: 'Submarine Patrol',
      lat: 30.2000,
      lng: 129.8000,
      country: 'JPN',
      details: 'Second Taigei-class submarine on acoustic surveillance patrol across the deep oceanic gaps of the Ryukyu Islands.',
      status: 'ACTIVE',
      specs: [
        { label: 'Vessel', value: 'JS Hakugei (SS-514)' },
        { label: 'Homeport', value: 'Kure Submarine Base' },
        { label: 'Acoustic Silence', value: 'Flot-R Floating Deck Shock Isolation' },
        { label: 'Displacement', value: '3,000 tons (surfaced)' }
      ]
    },
    {
      id: 'ssk-u36-patrol',
      name: 'Baltic AIP Patrol (U-36 - Type 212A)',
      type: 'patrol',
      category: 'Submarine Patrol',
      lat: 56.5000,
      lng: 11.8000,
      country: 'DEU',
      details: 'Non-magnetic stealth submarine with hydrogen fuel cell AIP propulsion operating in the Danish straits and Baltic Sea.',
      status: 'PATROL',
      specs: [
        { label: 'Vessel', value: 'U-36 (S186 - Type 212A Batch II)' },
        { label: 'Hull', value: 'Non-Magnetic Steel (Immune to Magnetic Mines/MAD)' },
        { label: 'Propulsion', value: 'Siemens PEM Fuel Cell AIP (Hydrogen)' },
        { label: 'Armament', value: 'DM2A4 Seehecht Fiber-Optic Heavy Torpedoes' }
      ]
    },
    {
      id: 'ssk-u31-patrol',
      name: 'Silent AIP Patrol (U-31 - Type 212A)',
      type: 'patrol',
      category: 'Submarine Patrol',
      lat: 55.1000,
      lng: 6.5000,
      country: 'DEU',
      details: 'Pioneer of hydrogen fuel cell Air-Independent Propulsion in the German Navy, operating in North Sea strategic routes.',
      status: 'ACTIVE',
      specs: [
        { label: 'Vessel', value: 'U-31 (S181)' },
        { label: 'AIP Endurance', value: '3 weeks submerged without snorkeling' },
        { label: 'Command', value: '1. Ubootgeschwader (Eckernförde)' },
        { label: 'Thermal Signature', value: 'Near Zero (Cold Exhaust-Free Operation)' }
      ]
    },
    {
      id: 'ssk-riachuelo-patrol',
      name: 'Pre-Salt PROSUB Patrol (S-40 Riachuelo)',
      type: 'patrol',
      category: 'Submarine Patrol',
      lat: -24.2000,
      lng: -43.5000,
      country: 'BRA',
      details: 'First conventional Riachuelo-class submarine (Modified Scorpène) built under the Brazilian Navy\'s PROSUB program, guarding the Pre-Salt offshore oil reserves.',
      status: 'PATROL',
      specs: [
        { label: 'Vessel', value: 'S-40 Riachuelo (Riachuelo Class / PROSUB)' },
        { label: 'Armament', value: 'SM39 Exocet Missiles + F21 Heavyweight Torpedoes' },
        { label: 'Length', value: '71.6m (Lengthened Section for Greater Range)' },
        { label: 'Area of Operation', value: 'Blue Amazon / Santos Basin' }
      ]
    },
    {
      id: 'ssk-humaita-patrol',
      name: 'Blue Amazon Patrol (S-41 Humaitá)',
      type: 'patrol',
      category: 'Submarine Patrol',
      lat: -23.1000,
      lng: -41.8000,
      country: 'BRA',
      details: 'Second PROSUB submarine built at the Itaguaí Naval Complex, operating on sovereignty and maritime patrol missions along the Brazilian coast.',
      status: 'ACTIVE',
      specs: [
        { label: 'Vessel', value: 'S-41 Humaitá (PROSUB)' },
        { label: 'Homeport', value: 'Madeira Island Submarine Base (BSIM)' },
        { label: 'Endurance', value: '70 days sea deployment' },
        { label: 'Max Depth', value: '-300 meters' }
      ]
    },
    {
      id: 'ssn-alvaro-alberto',
      name: 'PROSUB Nuclear Program (SN-BR Álvaro Alberto)',
      type: 'patrol',
      category: 'Submarine Patrol',
      lat: -22.9500,
      lng: -43.8500,
      country: 'BRA',
      details: 'First nuclear-powered attack submarine in Latin America (SN-BR), a strategic Brazilian project powered by an indigenously developed PWR reactor.',
      status: 'ACTIVE',
      specs: [
        { label: 'Vessel', value: 'SN-BR Álvaro Alberto (SN-10)' },
        { label: 'Propulsion', value: 'Brazilian PWR Nuclear Reactor (48 MW)' },
        { label: 'Submerged Speed', value: '25 knots sustained' },
        { label: 'Displacement', value: '6,000 tons submerged' }
      ]
    },
    {
      id: 'ssk-drakon-patrol',
      name: 'Strategic AIP VLS Patrol (INS Drakon - Dolphin II)',
      type: 'patrol',
      category: 'Submarine Patrol',
      lat: 32.8000,
      lng: 34.2000,
      country: 'ISR',
      details: 'Israel\'s most advanced submarine featuring an extended sail housing vertical launch silos (VLS) for long-range nuclear-capable cruise and ballistic missiles.',
      status: 'ALERTA MÁXIMO',
      specs: [
        { label: 'Vessel', value: 'INS Drakon (Dolphin II Class VLS)' },
        { label: 'Special Armament', value: 'Sail VLS for Long-Range Popeye Turbo Missiles' },
        { label: 'Propulsion', value: 'HDW Silent Fuel Cell AIP' },
        { label: 'Theater', value: 'Eastern Mediterranean / Red Sea' }
      ]
    },
    {
      id: 'ssk-collins-patrol',
      name: 'Oceanic Collins Patrol (HMAS Collins - SSG-73)',
      type: 'patrol',
      category: 'Submarine Patrol',
      lat: -32.5000,
      lng: 114.2000,
      country: 'AUS',
      details: 'Long-range conventional submarine of the Royal Australian Navy equipped with Scylla sonar suite on maritime interdiction patrols across the Indian Ocean.',
      status: 'PATROL',
      specs: [
        { label: 'Vessel', value: 'HMAS Collins (SSG-73)' },
        { label: 'Armament', value: 'Mk 48 Mod 7 CBASS Torpedoes + Harpoon' },
        { label: 'Homeport', value: 'HMAS Stirling (Garden Island)' },
        { label: 'Displacement', value: '3,400 tons' }
      ]
    },
    {
      id: 'ssk-gotland-patrol',
      name: 'Stealth Stirling Patrol (HMS Gotland)',
      type: 'patrol',
      category: 'Submarine Patrol',
      lat: 57.5000,
      lng: 18.5000,
      country: 'SWE',
      details: 'Legendary Swedish submarine with closed-cycle Stirling AIP engines celebrated for simulated aircraft carrier kills through total acoustic stealth.',
      status: 'PATROL',
      specs: [
        { label: 'Vessel', value: 'HMS Gotland (A19 Class)' },
        { label: 'Propulsion', value: 'Kockums Stirling v4-275 AIP Engines' },
        { label: 'Magnetic Signature', value: 'Degaussed Demagnetized Hull with Active Coils' },
        { label: 'Armament', value: 'Torped 62 Heavyweight + Torped 47' }
      ]
    },

    // ==========================================
    // RECONNAISSANCE SATELLITES (EN)
    // ==========================================
    {
      id: 'sat-kh11',
      name: 'USA-245 (KH-11 Keyhole Satellite)',
      type: 'satellite',
      category: 'Recon Satellite',
      lat: 45.0000,
      lng: 12.0000,
      country: 'USA (NRO)',
      details: 'Ultra-high resolution optical and thermal infrared reconnaissance satellite orbiting at 300km sun-synchronous LEO.',
      status: 'ORBITAL',
      specs: [
        { label: 'Optical Resolution', value: '< 10cm' },
        { label: 'Spectrum', value: 'Visible + Infrared (FLIR)' },
        { label: 'Orbit', value: 'LEO 320km x 410km' }
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
      details: 'Synthetic Aperture Radar (SAR) satellite capable of 3D mapping terrain and fleets through cloud cover and dark night.',
      status: 'ORBITAL',
      specs: [
        { label: 'Primary Sensor', value: 'SAR Radar 3D' },
        { label: 'Penetration', value: 'Clouds / Camouflage' },
        { label: 'Scan Frequency', value: '90 Minutes' }
      ]
    }
  ],
  PT: [
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
      details: 'Principal base de submarinos balísticos da Costa Leste dos EUA, equipada com instalações avançadas de manutenção nuclear e armazenamento de mísseis Trident II.',
      status: 'ACTIVE',
      specs: [
        { label: 'Grupo de Submarinos', value: 'SUBGROUP 10' },
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
      details: 'O maior arsenal de mísseis nucleares implantados dos EUA. Sede dos submarinos balísticos do Pacífico e do navio especial USS Jimmy Carter.',
      status: 'ACTIVE',
      specs: [
        { label: 'Grupo de Submarinos', value: 'SUBGROUP 9' },
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
      details: 'Conhecida como "The Home of the Submarine Force". Primeira base de submarinos da Marinha dos EUA e centro de treinamento tático do Silent Service.',
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
      name: 'Base Naval de Polyarny (Península de Kola)',
      type: 'base',
      category: 'Naval Station',
      lat: 69.1983,
      lng: 33.4550,
      country: 'RUS',
      details: 'Uma das bases navais históricas mais estratégicas da Rússia na Península de Kola. Fundada em 1899, abriga a 161ª Brigada de Submarinos com acesso livre de gelo.',
      status: 'ACTIVE',
      specs: [
        { label: 'Frota', value: 'Frota do Norte' },
        { label: 'Brigada', value: '161ª Brigada de Submarinos' },
        { label: 'Classes Baseadas', value: 'Kilo + Akula Class' }
      ]
    },
    {
      id: 'gadzhiyevo',
      name: 'Base Submarina de Gadzhiyevo (Península de Kola)',
      type: 'base',
      category: 'Naval Station',
      lat: 69.2556,
      lng: 33.3472,
      country: 'RUS',
      details: 'A principal fortaleza de submarinos nucleares balísticos da Frota do Norte Russa na Península de Kola, aninhada nos fiordes protegidos do Mar de Barents.',
      status: 'ACTIVE',
      specs: [
        { label: 'Frota', value: 'Frota do Norte' },
        { label: 'Divisão', value: '31ª Divisão de Submarinos' },
        { label: 'Classes Baseadas', value: 'Borei SSBN + Yasen-M SSN' }
      ]
    },
    {
      id: 'zapadnaya-litsa',
      name: 'Base Naval Zapadnaya Litsa (Península de Kola)',
      type: 'base',
      category: 'Naval Station',
      lat: 69.4000,
      lng: 32.4333,
      country: 'RUS',
      details: 'A fortaleza de submarinos nucleares mais ocidental da Frota do Norte na Península de Kola, situada a apenas 45 km da fronteira com a Noruega.',
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
      details: 'Bastião estratégico da Marinha Russa voltado para o Oceano Pacífico. Localizada na baía de Avacha, permite acesso direto às águas profundas do Pacífico Norte.',
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
      details: 'O maior complexo de construção naval de submarinos nucleares do mundo (Estaleiro Sevmash), onde são fabricados os submarinos Borei, Yasen e o Belgorod.',
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
      name: 'Base Naval de Jinhae (Sede do Comando Submarino)',
      type: 'base',
      category: 'Naval Station',
      lat: 35.1458,
      lng: 128.6528,
      country: 'KOR',
      details: 'Sede histórica do Comando de Submarinos da Marinha da Coreia do Sul, equipada com centros avançados de simulação, docas secas e instalações de teste.',
      status: 'ACTIVE',
      specs: [
        { label: 'Frota', value: 'Comando de Submarinos ROKN' },
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
        { label: 'Frota', value: 'Flotilha Tarefa Estratégica ROKN' },
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
      details: 'Principal sede operacional de frota da Marinha Sul-Coreana e porto primário para grupos de tarefas de exercícios aliados internacionais.',
      status: 'ACTIVE',
      specs: [
        { label: 'Frota', value: 'Comando da Frota da Coreia' },
        { label: 'Classes Baseadas', value: 'KSS-III + KSS-II' },
        { label: 'País', value: 'Coreia do Sul' }
      ]
    },
    // ---- Germany Submarine Bases ----
    {
      id: 'eckernforde-base',
      name: 'Base Naval de Eckernförde (1º Esquadrão)',
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
      name: 'Estaleiro e Complexo Naval de Kiel (TKMS)',
      type: 'base',
      category: 'Naval Station',
      lat: 54.3167,
      lng: 10.1500,
      country: 'DEU',
      details: 'Centro mundial de inovação e construção de submarinos não-nucleares (Estaleiro TKMS).',
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
      details: 'A maior base naval da Marinha Alemã, localizada na costa do Mar do Norte, fornecendo manutenção pesada e logística para a frota.',
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
      details: 'A maior base naval da Europa Ocidental, especializada em docas secas para manutenção pesada e refit nuclear de submarinos da Royal Navy.',
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
      name: 'Base Naval de l\'Île Longue (Brest)',
      type: 'base',
      category: 'Naval Station',
      lat: 48.3056,
      lng: -4.5069,
      country: 'FRA',
      details: 'Santuário ultra-defendido no noroeste da França, dedicado exclusivamente ao abrigo, manutenção e carregamento dos mísseis balísticos nucleares M51.',
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
      details: 'A principal base naval militar da França no Mediterrâneo, onde se localizam a frota de submarinos nucleares de ataque (SNA) e o porta-aviões Charles de Gaulle.',
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
      details: 'Instalação estratégica com túneis subaquáticos esculpidos dentro das montanhas de Hainan, permitindo entrada e saída sem detecção por satélite.',
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
      details: 'Base militar da Frota do Norte encarregada de guardar as abordagens marítimas de Pequim e monitorar a península coreana e o Mar do Japão.',
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
      name: 'Base Naval de Kure (Distrito de Submarinos)',
      type: 'base',
      category: 'Naval Station',
      lat: 34.2333,
      lng: 132.5500,
      country: 'JPN',
      details: 'Histórica base naval militar japonesa no Mar Interior de Seto, berço da flotilha de submarinos da JMSDF.',
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
      details: 'Base de submarinos nucleares ultra-secreta na costa leste da Índia, esculpida em uma cadeia de montanhas costeiras.',
      status: 'ACTIVE',
      specs: [
        { label: 'Comando', value: 'Comando Naval Oriental' },
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
      details: 'A "Sede dos Submarinos" do Comando Naval Oriental, equipada com a escola de treinamento de submarinistas INS Satavahana.',
      status: 'ACTIVE',
      specs: [
        { label: 'Comando', value: 'Comando Naval Oriental' },
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
      details: 'Principal base de submarinos da Frota Ocidental e complexo de construção naval Mazagon Dock.',
      status: 'ACTIVE',
      specs: [
        { label: 'Comando', value: 'Comando Naval Ocidental' },
        { label: 'Classes Baseadas', value: 'Kalvari P-75 + Sindhughosh' },
        { label: 'País', value: 'Índia' }
      ]
    },
    // ==========================================
    // OPERATIONAL CARRIER STRIKE GROUPS (PT)
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
      country: 'UK / OTAN',
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
      country: 'UK / OTAN',
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
      country: 'FRA / OTAN',
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
      country: 'ITA / OTAN',
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
      country: 'ITA / OTAN',
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
      country: 'ESP / OTAN',
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
    // OPERATIONAL SUBMARINES (PT)
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
      country: 'USA / OTAN',
      details: 'Submarino de mísseis guiados operando no Mar Mediterrâneo Oriental e Golfo de Suez em postura de dissuasão de resposta rápida.',
      status: 'ALERTA MÁXIMO',
      specs: [
        { label: 'Embarcação', value: 'USS Florida (SSGN-728)' },
        { label: 'Capacidade de Mísseis', value: '154x Tomahawk Cruise Missiles' },
        { label: 'Deslocamento', value: '18.750 toneladas submerso' },
        { label: 'Comando', value: 'US 6th Fleet / OTAN' }
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
      country: 'UK / OTAN',
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
      country: 'UK / OTAN',
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
    // RECONNAISSANCE SATELLITES (PT)
    // ==========================================
    {
      id: 'sat-kh11',
      name: 'USA-245 (Satélite KH-11 Keyhole)',
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
      name: 'Satélite de Radar Lacrosse-5',
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
}

// ==========================================
// TRANSLATION MAPS FOR MILITARY OPERATIONS
// ==========================================
export const TRANSLATED_MILITARY_OPERATIONS: Record<Language, MilitaryOperation[]> = {
  EN: [
    {
      id: 'neptune-spear',
      codeName: 'OPERATION NEPTUNE SPEAR',
      title: 'High-Precision Direct Action in Abbottabad',
      year: '2011',
      location: 'Abbottabad, Pakistan',
      theater: 'Joint Special Operations Command (JSOC)',
      defconRecommended: 2,
      overview: 'Covert heliborne raid executed by DEVGRU (SEAL Team Six) utilizing modified stealth MH-60 Black Hawks to neutralize primary strategic target.',
      target: 'Fortified Residential Compound in Abbottabad',
      intelReport: {
        classification: 'TOP SECRET // NOFORN // ORCON',
        summary: 'KH-11 satellite surveillance and stealth RQ-170 Sentinel drones confirmed lifestyle pattern of "The Pacer" without electronic communications.',
        keyFindings: [
          '5.5m perimeter walls topped with barbed wire and complete absence of internet or phone connectivity.',
          'Internal security patrols and daily trash burning to prevent DNA collection.',
          'Exact 3D compound replica built at Camp Activity, NC for assault force rehearsals.'
        ]
      },
      weatherTelemetry: {
        condition: 'Clear Sky with Low Mist',
        visibility: '8,000m (Starlight)',
        windSpeed: '04 knots NW',
        moonPhase: 'New Moon (0% Illumination - Ideal for NVG)',
        temperature: '22°C'
      },
      opord: {
        phase1: 'Stealth takeoff from Jalalabad Air Base via 2x MH-60 Stealth Black Hawks flying low altitude through mountainous terrain.',
        phase2: 'Compound infiltration via fast-rope insertion and tactical breaching of entry doors.',
        phase3: 'Room-by-room clearance, hard drive/document seizure, and extraction via backup MH-47 Chinook.',
        outcome: 'Mission completed in 38 minutes with 100+ terabytes of intelligence seized and zero allied casualties.'
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
      title: 'Naval Surface Battle in the Persian Gulf',
      year: '1988',
      location: 'Persian Gulf (Sassan & Sirri Platforms)',
      theater: 'US Navy Middle East Force (CENTCOM)',
      defconRecommended: 1,
      overview: 'Largest US Navy surface combat action since WWII. Immediate retaliatory strike following the mining of frigate USS Samuel B. Roberts (FFG-58).',
      target: 'Iranian Weapon Platforms Sassan & Frigate Sahand',
      intelReport: {
        classification: 'CONFIDENTIAL // SECRET NAVAL DISPATCH',
        summary: 'M-08 sea minefields identified with manufacturing signatures confirming interference with neutral oil tanker shipping lanes.',
        keyFindings: [
          'Offshore oil platforms converted into forward radar stations and anti-ship missile firing positions.',
          'Armed Boghammar speedboats equipped with rockets and heavy machine guns.',
          'Vosper-class frigates armed with Seakiller anti-ship missiles.'
        ]
      },
      weatherTelemetry: {
        condition: 'Sunny with Calm Sea',
        visibility: '15 km',
        windSpeed: '08 knots SE',
        moonPhase: 'Crescent',
        temperature: '34°C'
      },
      opord: {
        phase1: 'Evacuation warning issued to Sassan platform followed by naval gunfire saturation from US destroyers.',
        phase2: 'US Marine Corps heliborne assault via AH-1 Cobra helicopters to demolish radar and intel equipment.',
        phase3: 'Air-to-surface strikes by A-6E Intruder jets from USS Enterprise sinking frigate Sahand and neutralizing gunboats.',
        outcome: 'Complete destruction of 2 military platforms, 1 frigate sunk and 1 disabled, restoring freedom of navigation.'
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
      title: 'Night Air Campaign & Tomahawk Cruise Missiles',
      year: '1991',
      location: 'Iraq / Kuwait (Baghdad & Basra)',
      theater: 'US Central Command (CENTAF / NAVCENT)',
      defconRecommended: 2,
      overview: 'The most massive and precise stealth air strike campaign in modern history, initiating the liberation of Kuwait by neutralizing the Kari integrated air defense network.',
      target: 'IADS Command Nodes, Telecom Hubs & Scud Silos',
      intelReport: {
        classification: 'TOP SECRET // JOINT CHIEFS OF STAFF',
        summary: 'Kari IADS interconnected 400+ radar stations and 1,000+ SAM launchers. Destruction of primary command nodes was paramount.',
        keyFindings: [
          'F-117A Nighthawk stealth fighters possessed undetected penetration capability over central Baghdad.',
          'BGM-109 Tomahawk cruise missiles launched from naval ships could fly terrain-following routes at 30m altitude.',
          'AH-64 Apache attack helicopters (Task Force Normandy) opened the initial blind radar corridor.'
        ]
      },
      weatherTelemetry: {
        condition: 'Cloudless Night Sky',
        visibility: 'Excellent',
        windSpeed: '12 knots North',
        moonPhase: 'Waning Moon',
        temperature: '14°C'
      },
      opord: {
        phase1: '02:38 AM: Precision strike by AH-64 Apache helicopters against 2 key early warning radar stations.',
        phase2: '03:00 AM: Coordinated salvo of 52 Tomahawk missiles fired by cruisers and submarines in Red Sea and Persian Gulf.',
        phase3: 'Stealth attacks by F-117A jets dropping GBU-27 laser-guided bombs on command bunkers.',
        outcome: 'Strategic blindness of enemy air defense within the first 4 hours of operation, securing total air supremacy.'
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
      title: 'Long-Range Night Air Strike on Tripoli',
      year: '1986',
      location: 'Tripoli & Benghazi, Libya',
      theater: 'US European Command (USEUCOM)',
      defconRecommended: 3,
      overview: 'Surgical long-range strike executed by UK-based F-111F bombers and US Navy A-6E strike aircraft deployed in the Mediterranean.',
      target: 'Bab al-Azizia Barracks and Terrorist Training Facilities',
      intelReport: {
        classification: 'SECRET // EYES ONLY US / UK',
        summary: 'Overflight refusal by European allies forced a 10,000+ km flight around the Iberian Peninsula with multiple aerial refuelings.',
        keyFindings: [
          'Requirement for high-speed low-altitude flight utilizing terrain-following radar (TFR).',
          'SEAD suppression support executed by F/A-18A and EA-6B Prowler jets launching HARM anti-radiation missiles.'
        ]
      },
      weatherTelemetry: {
        condition: 'Night Sea Haze',
        visibility: '6 km',
        windSpeed: '10 knots West',
        moonPhase: 'Waning Quarter',
        temperature: '18°C'
      },
      opord: {
        phase1: '14-hour round-trip flight of 18x F-111F bombers escorted by KC-10 tankers skirting the Atlantic coast.',
        phase2: 'Simultaneous launch of AGM-88 HARM missiles by naval aircraft from USS America and USS Coral Sea.',
        phase3: 'Low-altitude surgical bombing with Paveway II laser-guided munitions followed by rapid egress.',
        outcome: 'Neutralization of key military infrastructure and proof of global reach without relying on local staging bases.'
      },
      unitsInvolved: [
        '48th Tactical Fighter Wing (F-111F Aardvark)',
        'Carrier Air Wing 1 (USS America & USS Coral Sea)',
        'Strategic Air Command Tanker Force (KC-135 & KC-10)',
        'EA-6B Prowler Tactical Jamming Squadron'
      ]
    }
  ],
  PT: [
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
}

// ==========================================
// TRANSLATION MAPS FOR UNIT SPECS & WEAPONS
// ==========================================
export const TRANSLATED_COMPARISON_UNITS: Record<Language, UnitSpec[]> = {
  EN: [
    {
      id: 'virginia-class',
      name: 'Virginia-Class Block V',
      type: 'submarine',
      classType: 'SSN / SSGN',
      country: 'USA',
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800&auto=format&fit=crop',
      metrics: { speed: 85, stealth: 98, depthCeiling: 82, payload: 95, range: 100 },
      realSpecs: {
        speed: '35+ knots (65 km/h submerged)',
        stealthRcs: '5th Gen Modular Anechoic Acoustic Coating',
        depthCeiling: '250m+ (Official Test Depth Classified)',
        payloadCapacity: '40 Tomahawk Missiles + 26 MK 48 Torpedoes',
        rangeKm: 'Unlimited (S9G Nuclear Reactor 33 yrs)',
        armament: 'VPM Modules, MK 48 MOD 7 Torpedoes, MK 67 Mines'
      }
    },
    {
      id: 'ohio-class',
      name: 'Ohio-Class SSBN',
      type: 'submarine',
      classType: 'SSBN Nuclear Deterrent',
      country: 'USA',
      image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=800&auto=format&fit=crop',
      metrics: { speed: 68, stealth: 92, depthCeiling: 80, payload: 100, range: 100 },
      realSpecs: {
        speed: '25 knots (46 km/h submerged)',
        stealthRcs: 'Acoustic Damping via Floating Turbine Mounts',
        depthCeiling: '240m+',
        payloadCapacity: '24 Trident II D5 Ballistic Missiles',
        rangeKm: 'Unlimited (S8G Nuclear Reactor)',
        armament: '24x Trident II D5 (up to 8 MIRV warheads per missile)'
      }
    },
    {
      id: 'seawolf-class',
      name: 'Seawolf-Class SSN',
      type: 'submarine',
      classType: 'SSN Hunter-Killer',
      country: 'USA',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop',
      metrics: { speed: 96, stealth: 99, depthCeiling: 98, payload: 90, range: 100 },
      realSpecs: {
        speed: '35 knots silent speed / 40 knots max',
        stealthRcs: 'Pump-Jet Propulsion System',
        depthCeiling: '500m+ (High-strength HY-100 Steel Hull)',
        payloadCapacity: '50 Weapons (8x 660mm Torpedo Tubes)',
        rangeKm: 'Unlimited (S6W Nuclear Reactor)',
        armament: 'MK 48 Torpedoes, Tomahawk Block V, Harpoon Missiles'
      }
    },
    {
      id: 'astute-class',
      name: 'Astute-Class SSN',
      type: 'submarine',
      classType: 'SSN Fleet Submarine',
      country: 'UK',
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800&auto=format&fit=crop',
      metrics: { speed: 80, stealth: 94, depthCeiling: 85, payload: 82, range: 100 },
      realSpecs: {
        speed: '30 knots submerged',
        stealthRcs: '39,000 Acoustic Anechoic Tiles',
        depthCeiling: '300m+',
        payloadCapacity: '38 Weapons (Tomahawk IV & Spearfish)',
        rangeKm: 'Unlimited (Rolls-Royce PWR2 Reactor)',
        armament: 'Spearfish Torpedoes, Tomahawk Block IV Missiles'
      }
    },
    {
      id: 'borei-class',
      name: 'Borei-Class (Project 955A)',
      type: 'submarine',
      classType: 'SSBN Nuclear Deterrent',
      country: 'RUS',
      image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=800&auto=format&fit=crop',
      metrics: { speed: 75, stealth: 88, depthCeiling: 90, payload: 96, range: 100 },
      realSpecs: {
        speed: '29 knots submerged',
        stealthRcs: 'Pump-jet Propulsion with Reduced Acoustic Profile',
        depthCeiling: '400m',
        payloadCapacity: '16 RSM-56 Bulava Missiles',
        rangeKm: 'Unlimited (OK-650V Reactor)',
        armament: '16x Bulava SLBM Missiles + RPK-2 Viyuga Torpedoes'
      }
    },
    {
      id: 'f35c-lightning',
      name: 'F-35C Lightning II',
      type: 'aircraft',
      classType: '5th Gen Carrier Stealth Fighter',
      country: 'USA',
      image: 'https://images.unsplash.com/photo-1519074069444-1ba4edd16be1?q=80&w=800&auto=format&fit=crop',
      metrics: { speed: 72, stealth: 96, depthCeiling: 78, payload: 85, range: 80 },
      realSpecs: {
        speed: 'Mach 1.6 (1,960 km/h)',
        stealthRcs: 'RCS < 0.001 m² (Golf ball size equivalent)',
        depthCeiling: '50,000 ft (15,240m)',
        payloadCapacity: '8,160 kg (Internal + Beast Mode Hardpoints)',
        rangeKm: '2,200 km (Combat radius with internal fuel)',
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
      metrics: { speed: 78, stealth: 45, depthCeiling: 80, payload: 92, range: 75 },
      realSpecs: {
        speed: 'Mach 1.6 - 1.8 (1,915 km/h)',
        stealthRcs: 'Reduced RCS (~1.0 m²) with Conformal Fuel Tanks',
        depthCeiling: '50,000 ft (15,240m)',
        payloadCapacity: '8,050 kg across 11 weapon hardpoints',
        rangeKm: '2,346 km with external tanks',
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
      metrics: { speed: 60, stealth: 99, depthCeiling: 82, payload: 100, range: 98 },
      realSpecs: {
        speed: 'Mach 0.95 (1,010 km/h)',
        stealthRcs: 'Near-Zero RCS (< 0.0001 m² Flying Wing)',
        depthCeiling: '50,000 ft (15,240m)',
        payloadCapacity: '18,144 kg in 2 internal bomb bays',
        rangeKm: '11,100 km unrefueled / Unlimited with AAR',
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
      metrics: { speed: 65, stealth: 25, depthCeiling: 72, payload: 80, range: 90 },
      realSpecs: {
        speed: '907 km/h (Mach 0.79)',
        stealthRcs: 'Non-stealth (Boeing 737-800ER airframe)',
        depthCeiling: '41,000 ft (12,496m)',
        payloadCapacity: '129 Sonobuoys + 5,900 kg internal/external arms',
        rangeKm: '7,500 km unrefueled',
        armament: 'MK 54 Torpedoes, AGM-84 Harpoon Missiles, Depth Charges'
      }
    }
  ],
  PT: [
    {
      id: 'virginia-class',
      name: 'Virginia-Class Block V',
      type: 'submarine',
      classType: 'SSN / SSGN',
      country: 'USA',
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800&auto=format&fit=crop',
      metrics: { speed: 85, stealth: 98, depthCeiling: 82, payload: 95, range: 100 },
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
      metrics: { speed: 68, stealth: 92, depthCeiling: 80, payload: 100, range: 100 },
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
      metrics: { speed: 96, stealth: 99, depthCeiling: 98, payload: 90, range: 100 },
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
      metrics: { speed: 80, stealth: 94, depthCeiling: 85, payload: 82, range: 100 },
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
      metrics: { speed: 75, stealth: 88, depthCeiling: 90, payload: 96, range: 100 },
      realSpecs: {
        speed: '29 nós submerso',
        stealthRcs: 'Propulsão Pump-jet com hidro-acústica reduzida',
        depthCeiling: '400m',
        payloadCapacity: '16 Mísseis RSM-56 Bulava',
        rangeKm: 'Ilimitado (Reator OK-650V)',
        armament: '16x Mísseis Bulava SLBM + Torpedos RPK-2 Viyuga'
      }
    },
    {
      id: 'f35c-lightning',
      name: 'F-35C Lightning II',
      type: 'aircraft',
      classType: '5th Gen Carrier Stealth Fighter',
      country: 'USA',
      image: 'https://images.unsplash.com/photo-1519074069444-1ba4edd16be1?q=80&w=800&auto=format&fit=crop',
      metrics: { speed: 72, stealth: 96, depthCeiling: 78, payload: 85, range: 80 },
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
      metrics: { speed: 78, stealth: 45, depthCeiling: 80, payload: 92, range: 75 },
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
      metrics: { speed: 60, stealth: 99, depthCeiling: 82, payload: 100, range: 98 },
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
      metrics: { speed: 65, stealth: 25, depthCeiling: 72, payload: 80, range: 90 },
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
}

export const TRANSLATED_WEAPON_SYSTEMS: Record<Language, WeaponSystem[]> = {
  EN: [
    {
      id: 'tomahawk-v',
      name: 'BGM-109 Tomahawk Block V',
      category: 'Cruise Missile',
      rangeKm: 1600,
      speedMach: 'Mach 0.74 (890 km/h)',
      warhead: '454 kg WDU-36/B Fragmentation / Penetration',
      guidance: 'GPS / INS / TERCOM / DSMAC + Real-time Optical/RF Seeker',
      platform: 'SSN/SSGN Submarines (VLS & Tubes) & Arleigh Burke Destroyers',
      description: 'Land-attack and anti-ship cruise missile (MST variant) capable of in-flight target retargeting via satellite datalink.'
    },
    {
      id: 'trident-d5',
      name: 'Trident II D5 (UGM-133A)',
      category: 'SLBM',
      rangeKm: 12000,
      speedMach: 'Mach 24 (29,000 km/h at reentry)',
      warhead: 'Up to 8 MIRV W88 (475 kt each) or W76-1 Warheads',
      guidance: 'Astro-Guided Inertial Navigation (CEP Accuracy < 90m)',
      platform: 'Ohio-Class SSBN (US) & Vanguard-Class SSBN (UK)',
      description: 'The pillar of sea-based strategic nuclear deterrence launched from submerged submarines across intercontinental ranges.'
    },
    {
      id: 'harpoon-block2',
      name: 'AGM-84 / RGM-84 Harpoon Block II',
      category: 'Anti-Ship Missile',
      rangeKm: 240,
      speedMach: 'Mach 0.85 (1,040 km/h)',
      warhead: '221 kg High Explosive Penetration Blast',
      guidance: 'GPS / INS + Active Radar Sea-Skimming Terminal (Low Altitude Flight)',
      platform: 'F/A-18 Fighters, P-8A Poseidon, Surface Ships & Submarines',
      description: 'Standard NATO anti-ship missile designed to neutralize enemy surface vessels with sea-skimming flight profile.'
    },
    {
      id: 'mk48-mod7',
      name: 'MK 48 MOD 7 ADCAP Heavyweight Torpedo',
      category: 'Heavyweight Torpedo',
      rangeKm: 50,
      speedMach: '55+ knots (102 km/h under water)',
      warhead: '292 kg PBXN-103 (Keel-breaking shockwave destruction)',
      guidance: 'Fiber-optic Wire Guided + Autonomous Acoustic Active/Passive Sonar',
      platform: 'US Navy Fast Attack Submarines (Virginia, Seawolf, Los Angeles)',
      description: 'High-speed heavyweight torpedo engineered to detonate beneath ship keels or hunt deep-submerged enemy submarines.'
    },
    {
      id: 'aim120d-amraam',
      name: 'AIM-120D AMRAAM',
      category: 'Air-to-Air Missile',
      rangeKm: 160,
      speedMach: 'Mach 4.0 (4,900 km/h)',
      warhead: '20 kg High-Explosive Blast Fragmentation',
      guidance: 'GPS / INS + Millimeter Active Radar Terminal with Datalink',
      platform: 'F-35C, F/A-18E/F, F-22 Raptor Fighters',
      description: 'Beyond visual range (BVR) air-to-air missile featuring high maneuverability and electronic counter-countermeasure resistance.'
    },
    {
      id: 'sm6-standard',
      name: 'RIM-174 Standard ERAM (SM-6)',
      category: 'Surface-to-Air Missile',
      rangeKm: 370,
      speedMach: 'Mach 3.5 (4,300 km/h)',
      warhead: '64 kg Proximity Detonation Blast Fragmentation',
      guidance: 'AEGIS Guided Radar + Active AMRAAM Terminal Seeker',
      platform: 'Ticonderoga Cruisers & Arleigh Burke Destroyers with AEGIS System',
      description: 'Multi-mission missile capable of terminal ballistic missile defense, anti-aircraft engagement, and over-the-horizon surface strike.'
    }
  ],
  PT: [
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
      description: 'O pilar da tríade de dissuasão nuclear estratégica lançada por submarinos sob o oceano com alcance intercontinental.'
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
}
