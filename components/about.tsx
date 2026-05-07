import Image from "next/image"
import { Award, Users, Target, Shield, CheckCircle, Building2, Eye } from "lucide-react"

const certs = ["NABL Accredited", "ISO 17025", "ISO 9001", "FSSAI Approved", "CPCB Registered"]

const highlights = [
  {
    icon: Building2,
    title: "Company Vision",
    description:
      "RSS Environmental & Analytical Labs aims to become a leading organization recognized for excellence in environmental testing, wastewater treatment solutions, and laboratory equipment supply.",
  },
  {
    icon: Eye,
    title: "Company Mission",
    description:
      "To deliver high-quality, timely, and cost-effective services through continuous technology upgrades while creating lasting value for all stakeholders.",
  },
  {
    icon: Award,
    title: "Core Expertise",
    description:
      "Laboratory testing services, wastewater and sewage treatment plant sales/services, laboratory furniture and equipment supply, and pollution-monitoring systems.",
  },
  {
    icon: Shield,
    title: "Comprehensive Quality",
    description:
      "Advanced technology, stringent quality checks, and strong customer support to help industries remain compliant and safe.",
  },
]

const parameters = [
  { label: "Physical Parameters", value: 85, unit: "tests/month" },
  { label: "Chemical Parameters", value: 92, unit: "tests/month" },
  { label: "Biological Parameters", value: 78, unit: "tests/month" },
  { label: "Emission Monitoring", value: 96, unit: "uptime %" },
]

export function About() {
  return (
    <section id="about" className="section-anchor relative py-24 lg:py-36 overflow-hidden bg-card">
      <div className="absolute inset-0 grid-pattern opacity-15" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/images/molecular-bg.jpg"
          alt=""
          fill
          className="object-cover opacity-5"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-xs font-bold tracking-widest uppercase text-primary mb-4 border-l-4 border-primary pl-3">
          Who We Are
        </p>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 lg:gap-14">
          <div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground tracking-tight leading-tight text-balance mb-6">
              RSS Environmental &amp; Analytical Labs
            </h2>
            <p className="text-foreground/75 leading-relaxed mb-4 text-base font-medium">
              RSS Environmental &amp; Analytical Labs is a leading company providing laboratory testing services, wastewater treatment sales and services,
              laboratory equipment and furniture supply, and pollution-related online monitoring equipment.
            </p>
            <p className="text-foreground/75 leading-relaxed mb-10 text-base font-medium">
              Address: 10-15-66, K K Layout, Revenue ward No 10, Tirupati, AP-517501.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highlights.map((feature) => (
                <div
                  key={feature.title}
                  className="group flex flex-col gap-3 p-5 rounded-xl border border-border bg-card hover:border-primary/40 hover:bg-secondary transition-all duration-300"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <feature.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-black text-foreground mb-1">{feature.title}</h3>
                    <p className="text-xs text-foreground/65 leading-relaxed font-medium">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="relative rounded-2xl overflow-hidden border border-border h-64">
              <Image
                src="/images/about-lab.jpg"
                alt="Scientists working in RSS Environmental Labs"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                {certs.map((cert) => (
                  <span
                    key={cert}
                    className="inline-flex items-center gap-1 text-[10px] font-bold tracking-wide bg-background/80 backdrop-blur-sm border border-primary/30 text-primary rounded-full px-2.5 py-1"
                  >
                    <CheckCircle className="h-2.5 w-2.5" />
                    {cert}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <p className="text-xs font-black tracking-widest uppercase text-foreground mb-5">
                Operational Performance Snapshot
              </p>
              <div className="flex flex-col gap-4">
                {parameters.map((param) => (
                  <div key={param.label}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-semibold text-foreground/75">{param.label}</span>
                      <span className="text-xs font-black text-primary">{param.value}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                        style={{ width: `${param.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {[
                { v: "15+", l: "Years" },
                { v: "500+", l: "Clients" },
                { v: "50K+", l: "Tests" },
              ].map((s) => (
                <div key={s.l} className="rounded-xl border border-border bg-card p-4 flex flex-col items-center justify-center text-center hover:border-primary/40 transition-colors">
                  <span className="text-3xl font-black text-primary">{s.v}</span>
                  <span className="text-[11px] font-bold text-foreground/65 mt-1 tracking-wider uppercase">{s.l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
