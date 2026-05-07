import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronDown } from "lucide-react"

const stats = [
  { value: "6", label: "Service Lines" },
  { value: "24/7", label: "OCEMS Support Scope" },
  { value: "AP", label: "Tirupati Base" },
  { value: "AMC", label: "Plant Lifecycle Support" },
]

export function Hero() {
  return (
    <section id="home" className="relative section-anchor min-h-screen flex flex-col justify-end overflow-hidden">
      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Environmental treatment facility aerial view"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/65 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/40 to-transparent" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-40" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-28 lg:px-8 pt-36">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold tracking-widest uppercase mb-6">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          Environmental Testing and Compliance Support - Tirupati, AP
        </div>

        {/* Headline */}
        <h1 className="max-w-4xl text-5xl sm:text-6xl lg:text-8xl font-black text-foreground leading-[1.02] tracking-tight text-balance">
          Science That{" "}
          <span className="text-primary text-glow">Protects</span>{" "}
          Your Environment
        </h1>

        <p className="mt-6 max-w-xl text-base sm:text-xl text-foreground/80 leading-relaxed font-semibold">
          Environmental testing, treatment plant solutions, lab infrastructure, and continuous monitoring systems built for practical compliance work.
        </p>

        {/* Actions */}
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/85 transition-all duration-200 shadow-[0_0_30px_var(--glow)] hover:shadow-[0_0_40px_var(--glow)]"
          >
            Explore Services
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-muted-foreground font-semibold text-sm hover:border-primary/50 hover:text-primary transition-all duration-200"
          >
            Talk to an Expert
          </Link>
        </div>

        {/* Stats strip */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-px bg-border rounded-xl overflow-hidden border border-border max-w-3xl">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-card flex flex-col items-center justify-center py-6 px-4 hover:bg-secondary transition-colors"
            >
              <span className="text-3xl sm:text-4xl font-black text-primary">{stat.value}</span>
              <span className="mt-1 text-xs font-bold text-foreground/70 text-center tracking-wide uppercase">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator animate-bounce absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground">
        <span className="text-[10px] tracking-widest uppercase">Scroll</span>
        <ChevronDown className="h-4 w-4" />
      </div>
    </section>
  )
}
