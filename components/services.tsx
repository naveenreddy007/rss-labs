import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const services = [
  {
    id: "water",
    image: "/images/water-testing.jpg",
    tag: "Testing",
    title: "Water & Wastewater Testing",
    description: "Comprehensive analysis of physical, chemical, and microbiological parameters for drinking water, industrial effluents, and wastewater streams.",
    features: ["pH, DO, BOD, COD Analysis", "Heavy Metal Profiling", "Microbiological Testing", "Compliance Reporting"],
    span: "lg:col-span-2",
  },
  {
    id: "food",
    image: "/images/food-testing.jpg",
    tag: "Testing",
    title: "Food Testing",
    description: "Complete food safety analysis — contamination, nutritional values, pathogens, and shelf-life studies.",
    features: ["Nutritional Analysis", "Pathogen Detection", "Pesticide Residue", "Shelf-Life Studies"],
    span: "",
  },
  {
    id: "etp",
    image: "/images/etp-plant.jpg",
    tag: "Treatment",
    title: "ETP / STP / RO Plant Services",
    description: "Design, installation, and annual maintenance of Effluent Treatment Plants, Sewage Treatment Plants, and Reverse Osmosis systems.",
    features: ["Plant Design & Installation", "Equipment Supply", "AMC Contracts", "Troubleshooting"],
    span: "",
  },
  {
    id: "lab",
    image: "/images/lab-infra.jpg",
    tag: "Infrastructure",
    title: "Laboratory Infrastructure",
    description: "Custom laboratory furniture, fume hoods, and sourcing of high-precision analytical instruments.",
    features: ["Lab Furniture Design", "Fume Hoods & Cabinets", "Instrument Sourcing", "Consumables Supply"],
    span: "",
  },
  {
    id: "ocems",
    image: "/images/ocems.jpg",
    tag: "Monitoring",
    title: "OCEMS Systems",
    description: "Online Continuous Emission & Effluent Monitoring for real-time compliance tracking integrated with CPCB portals.",
    features: ["Real-time Monitoring", "Auto Data Logging", "Compliance Alerts", "CPCB Integration"],
    span: "lg:col-span-2",
  },
]

const tagColors: Record<string, string> = {
  Testing: "bg-primary/15 text-primary border-primary/30",
  Treatment: "bg-accent/15 text-accent border-accent/30",
  Infrastructure: "bg-muted text-muted-foreground border-border",
  Monitoring: "bg-primary/15 text-primary border-primary/30",
}

export function Services() {
  return (
    <section id="services" className="section-anchor relative py-24 lg:py-36 overflow-hidden bg-secondary">
      {/* Section bg */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section header */}
        <div className="mb-16">
          <p className="text-xs font-bold tracking-widest uppercase text-primary mb-4 border-l-4 border-primary pl-3">What We Do</p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground tracking-tight leading-tight text-balance max-w-lg">
              End-to-End Environmental Services
            </h2>
            <p className="text-foreground/70 text-base leading-relaxed max-w-xs sm:text-right font-medium">
              From lab testing to plant installation and real-time monitoring — all under one roof.
            </p>
          </div>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service) => (
            <div
              key={service.id}
              className={`group relative rounded-2xl overflow-hidden border border-border bg-card hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_40px_var(--glow)] ${service.span}`}
              id={service.id}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-card" />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500" />
                {/* Tag */}
                <div className={`absolute top-4 left-4 inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase border ${tagColors[service.tag]}`}>
                  {service.tag}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-black text-foreground text-balance leading-snug mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed mb-5 font-medium">
                  {service.description}
                </p>

                {/* Features as inline pills */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {service.features.map((f) => (
                    <span
                      key={f}
                      className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-foreground/80 bg-muted rounded-full px-2.5 py-1 border border-border"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                      {f}
                    </span>
                  ))}
                </div>

                <Link
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:gap-2.5 transition-all duration-200"
                >
                  Enquire now <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
