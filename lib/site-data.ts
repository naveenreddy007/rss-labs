export const company = {
  name: "RSS Environmental & Analytical Labs",
  shortName: "RSS Labs",
  addressLines: [
    "10-15-66, K K Layout",
    "Revenue ward No 10",
    "Tirupati, Andhra Pradesh 517501",
  ],
  phoneNumbers: ["+91 877 225 1234", "+91 98765 43210"],
  emails: ["info@rsslabs.in", "support@rsslabs.in"],
  mission:
    "Deliver high-quality, timely, and cost-effective services by continuously upgrading technology and processes.",
  vision:
    "Become a leading organization recognized for excellence in environmental testing, wastewater treatment solutions, and laboratory equipment supply.",
}

export type ServiceSection = {
  title: string
  items: string[]
}

export type Service = {
  id: string
  slug: string
  image: string
  tag: string
  title: string
  summary: string
  description: string
  features: string[]
  sections: ServiceSection[]
}

export const serviceCatalog: Service[] = [
  {
    id: "water",
    slug: "water-wastewater-testing",
    image: "/images/water-testing.jpg",
    tag: "Testing",
    title: "Water & Wastewater Testing",
    summary:
      "Physical, chemical, and microbiological testing for drinking water, wastewater, and treated effluent streams.",
    description:
      "Water quality is evaluated by measuring physical and chemical parameters to understand safety, treatment performance, and compliance readiness.",
    features: [
      "Physical parameter testing",
      "Chemical parameter testing",
      "Microbiology parameters",
      "Compliance-ready reporting",
    ],
    sections: [
      {
        title: "Physical Parameters",
        items: [
          "Temperature",
          "Turbidity",
          "Color",
          "Odor and taste",
          "Total Suspended Solids (TSS)",
          "Total Dissolved Solids (TDS)",
        ],
      },
      {
        title: "Chemical Parameters",
        items: [
          "pH",
          "Dissolved Oxygen (DO)",
          "Biochemical Oxygen Demand (BOD)",
          "Chemical Oxygen Demand (COD)",
          "Hardness",
          "Alkalinity",
          "Chlorides",
          "Nitrates and nitrites",
          "Heavy metals",
          "Microbiology parameters",
        ],
      },
    ],
  },
  {
    id: "food",
    slug: "cooked-food-testing",
    image: "/images/food-testing.jpg",
    tag: "Food Safety",
    title: "Cooked Food Testing",
    summary:
      "Cooked food testing for hygiene, contamination risk, composition checks, and shelf-life support.",
    description:
      "Cooked food testing helps confirm that prepared food is hygienic, safe, and suitable for consumption.",
    features: [
      "Physical quality checks",
      "Chemical composition checks",
      "Microbiological testing",
      "Safety indicator review",
    ],
    sections: [
      {
        title: "Physical Parameters",
        items: ["Appearance", "Color and texture", "Odor and taste", "Consistency", "Foreign matter"],
      },
      {
        title: "Chemical Parameters",
        items: [
          "pH level",
          "Moisture content",
          "Salt and sugar levels",
          "Fat content",
          "Food additives and preservatives",
          "Toxins or adulterants",
        ],
      },
      {
        title: "Microbiological Parameters",
        items: ["Total plate count (TPC)", "Pathogenic bacteria", "Yeasts and molds", "Coliform count"],
      },
      {
        title: "Safety Indicators",
        items: ["Cooking temperature", "Storage conditions", "Shelf life"],
      },
    ],
  },
  {
    id: "etp",
    slug: "etp-stp-ro-plants",
    image: "/images/etp-plant.jpg",
    tag: "Treatment",
    title: "ETP / STP / RO Plants",
    summary:
      "Design, installation, commissioning, spare parts, and AMC support for treatment and purification plants.",
    description:
      "RSS Labs supports effluent treatment, sewage treatment, and reverse osmosis systems from planning through plant lifecycle support.",
    features: [
      "Planning and design",
      "Civil and MEP installation",
      "Commissioning",
      "AMC and breakdown support",
    ],
    sections: [
      {
        title: "Plant Types",
        items: ["ETP (Effluent Treatment Plant)", "STP (Sewage Treatment Plant)", "RO Plants (Reverse Osmosis)"],
      },
      {
        title: "Installation Scope",
        items: [
          "Wastewater quantity and characteristic assessment",
          "Treatment technology selection such as activated sludge, MBBR, or SBR",
          "Civil works for tanks, foundation, and structural setup",
          "Pumps, blowers, diffusers, filters, pipelines, control panels, and sensors",
          "Trial runs, calibration, and treated-water performance checks",
        ],
      },
      {
        title: "ETP / STP Spare Parts",
        items: [
          "Bar screens, grit chambers, oil skimmers",
          "Fine bubble, coarse bubble, disc, and tube diffusers",
          "Pumps, motors, blowers, screw pumps",
          "PVC, UPVC, CPVC, and HDPE pipes and fittings",
          "MGF, ACF, PSF vessels and clarifier supply",
          "Solenoid coils, actuators, valves, gauges, NRVs, and flow meters",
          "MS, SS, and HDPE tanks",
        ],
      },
      {
        title: "RO Components",
        items: [
          "BW and SW membranes",
          "Membrane housing, end caps, circlips, O-rings, and connectors",
          "ORP meters, roto meters, RO chemicals, cartridge filters, and housings",
        ],
      },
    ],
  },
  {
    id: "lab-furniture",
    slug: "laboratory-furniture-making",
    image: "/images/lab-infra.jpg",
    tag: "Infrastructure",
    title: "Laboratory Furniture Making",
    summary:
      "Chemical-resistant, durable, and workflow-ready laboratory furniture for testing and research spaces.",
    description:
      "Laboratory furniture is planned for safety, durability, ventilation, storage, and day-to-day testing efficiency.",
    features: ["Work benches", "Storage cabinets", "Fume hoods", "Sink units and reagent racks"],
    sections: [
      {
        title: "Furniture Types",
        items: ["Work benches", "Storage cabinets", "Fume hoods", "Sink units", "Reagent racks and shelves"],
      },
      {
        title: "Materials",
        items: [
          "Mild steel and stainless steel",
          "Treated wood for dry labs",
          "Epoxy resin or granite tops",
          "PVC and HDPE for chemical-resistant cabinets",
        ],
      },
      {
        title: "Manufacturing Process",
        items: [
          "Planning and layout design",
          "Material selection",
          "Fabrication, welding, and assembly",
          "Powder coating or polishing",
          "Installation with plumbing and electrical fittings",
          "Quality check for safety and performance",
        ],
      },
    ],
  },
  {
    id: "lab-instruments",
    slug: "laboratory-instruments-filter-papers",
    image: "/images/molecular-bg.jpg",
    tag: "Supply",
    title: "Lab Instruments & Filter Papers",
    summary:
      "Supply support for chemical laboratory instruments, filter papers, filtration products, and lab consumables.",
    description:
      "RSS Labs supplies reliable products for testing, research, quality control, and environmental monitoring applications.",
    features: ["Analytical instruments", "Filter papers", "Membrane filters", "After-sales support"],
    sections: [
      {
        title: "Instruments Supplied",
        items: [
          "pH meter",
          "Spectrophotometer",
          "Analytical balance",
          "Hot air oven",
          "Muffle furnace",
          "Centrifuge",
          "Magnetic stirrer",
          "Water bath",
          "Autoclave",
        ],
      },
      {
        title: "Filtration Products",
        items: [
          "Qualitative filter paper",
          "Quantitative filter paper",
          "Glass fiber filter paper",
          "Membrane filters",
          "Ashless filter paper",
        ],
      },
      {
        title: "Common Brands",
        items: ["Whatman", "MS - Micro Separation Filter Papers", "Millipore", "Sartorius"],
      },
    ],
  },
  {
    id: "ocems",
    slug: "ocems-monitoring-systems",
    image: "/images/ocems.jpg",
    tag: "Monitoring",
    title: "OCEMS Systems",
    summary:
      "Online continuous emission and effluent monitoring systems for real-time pollution compliance workflows.",
    description:
      "OCEMS instruments monitor pollution parameters continuously and help industries transmit data to pollution control authorities.",
    features: ["Real-time data", "CPCB/SPCB connectivity", "Calibration and validation", "AMC support"],
    sections: [
      {
        title: "Effluent Monitoring",
        items: ["pH analyzer", "COD analyzer", "BOD analyzer", "TSS analyzer", "DO sensor", "Flow meter"],
      },
      {
        title: "Emission Monitoring",
        items: [
          "SO2, NOx, CO, and CO2 gas analyzers",
          "Particulate Matter (PM) analyzer",
          "Opacity monitor",
          "Oxygen analyzer",
          "Stack flow, temperature, and pressure sensors",
        ],
      },
      {
        title: "System Components",
        items: [
          "Sampling probes and conditioning systems",
          "Data Acquisition System (DAS / DAHS)",
          "PLC / SCADA control panels",
          "GSM / 4G communication modules",
        ],
      },
      {
        title: "Service Scope",
        items: [
          "System design and instrument selection",
          "Supply of compliant instruments",
          "Installation and commissioning",
          "Calibration and validation",
          "Server connectivity",
          "AMC, training, and documentation",
        ],
      },
    ],
  },
]

export const industriesServed = [
  "Industries and factories",
  "Hotels and commercial kitchens",
  "Hospitals and healthcare facilities",
  "Colleges and research laboratories",
  "Food businesses",
  "Apartments and commercial buildings",
  "Environmental consultants",
  "Government and compliance clients",
]

export const testingMatrix = [
  {
    category: "Physical",
    water: "Temperature, turbidity, color, odor, taste, TSS, TDS",
    food: "Appearance, color, texture, odor, taste, consistency, foreign matter",
  },
  {
    category: "Chemical",
    water: "pH, DO, BOD, COD, hardness, alkalinity, chlorides, nitrates, nitrites, heavy metals",
    food: "pH, moisture, salt, sugar, fat, additives, preservatives, toxins, adulterants",
  },
  {
    category: "Microbiological",
    water: "Microbiology parameters for water and wastewater safety checks",
    food: "TPC, pathogenic bacteria, yeasts, molds, coliform count",
  },
  {
    category: "Safety Indicators",
    water: "Discharge suitability, treatment performance, compliance support",
    food: "Cooking temperature, storage conditions, shelf life",
  },
]

export const equipmentCatalogue = [
  {
    title: "Treatment Plant Equipment",
    items: ["Bar screens", "Grit chambers", "Oil skimmers", "Air diffusers", "Pumps", "Motors", "Blowers", "Clarifiers"],
  },
  {
    title: "Piping and Vessels",
    items: ["PVC", "UPVC", "CPVC", "HDPE", "MGF vessels", "ACF vessels", "PSF vessels", "MS / SS / HDPE tanks"],
  },
  {
    title: "Control and Instrumentation",
    items: ["Control panels", "Sensors", "Actuators", "Solenoid valves", "Pressure gauges", "Mechanical flow meters", "EM flow meters"],
  },
  {
    title: "RO Plant Components",
    items: ["BW membranes", "SW membranes", "Membrane housing", "End caps", "Circlips", "O-rings", "Connectors", "RO chemicals"],
  },
]

export const amcPlans = [
  {
    title: "Preventive Maintenance",
    description: "Regular inspection, cleaning, lubrication, and replacement planning for critical plant assets.",
  },
  {
    title: "Operational Support",
    description: "Process monitoring for pH, BOD, COD, dosing, aeration, and operator support.",
  },
  {
    title: "Breakdown Support",
    description: "Rapid repair support for equipment failures, emergency calls, and plant downtime reduction.",
  },
  {
    title: "Compliance Reporting",
    description: "Periodic testing, records, and documentation support for pollution-control requirements.",
  },
]

export const processSteps = [
  "Enquiry",
  "Site Visit / Sample Collection",
  "Testing / Design",
  "Report / Installation",
  "AMC Support",
]

export const supplyBrands = [
  "Whatman",
  "MS - Micro Separation",
  "Millipore",
  "Sartorius",
  "RO membranes",
  "Lab instruments",
  "RO chemicals",
  "Filtration consumables",
]

export const trustPoints = [
  "Quality-focused testing and compliance support",
  "Clear documentation for audits and regulatory records",
  "Technology upgrades across testing, treatment, and monitoring workflows",
  "Practical service support for installation, AMC, calibration, and breakdowns",
]

export const seoPages = [
  {
    slug: "water-testing-lab-tirupati",
    title: "Water Testing Lab in Tirupati",
    description:
      "Water and wastewater testing support in Tirupati for physical, chemical, and microbiological parameters.",
    serviceSlug: "water-wastewater-testing",
    focus: ["Drinking water checks", "Wastewater analysis", "Effluent treatment monitoring", "Parameter-based reporting"],
  },
  {
    slug: "etp-stp-amc-andhra-pradesh",
    title: "ETP STP AMC in Andhra Pradesh",
    description:
      "ETP, STP, and RO plant AMC support across preventive maintenance, operational support, breakdown repair, and compliance records.",
    serviceSlug: "etp-stp-ro-plants",
    focus: ["Preventive maintenance", "Pumps, blowers, and diffusers", "Plant performance support", "Compliance reporting"],
  },
  {
    slug: "ocems-supplier-andhra-pradesh",
    title: "OCEMS Supplier in Andhra Pradesh",
    description:
      "OCEMS instrument supply, installation, calibration, server connectivity, documentation, and AMC support.",
    serviceSlug: "ocems-monitoring-systems",
    focus: ["Effluent monitoring", "Emission monitoring", "CPCB/SPCB connectivity", "Calibration and validation"],
  },
]
