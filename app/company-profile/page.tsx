import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { company, processSteps, serviceCatalog, trustPoints } from "@/lib/site-data"

export const metadata: Metadata = {
  title: "Company Profile | RSS Environmental & Analytical Labs",
  description:
    "RSS Environmental & Analytical Labs company profile covering environmental testing, treatment plant support, lab infrastructure, supply, and OCEMS services.",
}

export default function CompanyProfilePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="border-b border-border bg-card pt-32 pb-16 lg:pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-primary">Company Profile</p>
          <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight text-foreground sm:text-6xl">
            RSS Environmental &amp; Analytical Labs
          </h1>
          <p className="mt-6 max-w-3xl text-lg font-semibold leading-relaxed text-foreground/75">
            Laboratory testing services, wastewater treatment sales and services, laboratory equipment and furniture supply, and pollution-related online monitoring equipment.
          </p>
          <p className="mt-5 text-sm font-bold leading-relaxed text-foreground/70">
            {company.addressLines.join(", ")}.
          </p>
        </div>
      </section>

      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-5 px-6 lg:grid-cols-2 lg:px-8">
          <article className="rounded-lg border border-border bg-card p-6">
            <h2 className="mb-3 text-xl font-black text-foreground">Vision</h2>
            <p className="text-sm font-medium leading-relaxed text-foreground/75">{company.vision}</p>
          </article>
          <article className="rounded-lg border border-border bg-card p-6">
            <h2 className="mb-3 text-xl font-black text-foreground">Mission</h2>
            <p className="text-sm font-medium leading-relaxed text-foreground/75">{company.mission}</p>
          </article>
        </div>
      </section>

      <section className="bg-secondary py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-2xl text-3xl font-black leading-tight tracking-tight text-foreground sm:text-5xl">
              Service portfolio
            </h2>
            <Link
              href="/#contact"
              className="inline-flex h-11 w-fit items-center justify-center gap-2 rounded-lg bg-primary px-5 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/85"
            >
              Request Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {serviceCatalog.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/50"
              >
                <p className="mb-2 text-base font-black text-foreground">{service.title}</p>
                <p className="text-sm font-medium leading-relaxed text-foreground/70">{service.summary}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-primary">
                  View service <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-card py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="mb-6 text-3xl font-black tracking-tight text-foreground">How work moves</h2>
            <div className="space-y-3">
              {processSteps.map((step, index) => (
                <div key={step} className="rounded-lg border border-border bg-secondary/50 p-4">
                  <p className="text-xs font-black uppercase tracking-widest text-primary">Step {index + 1}</p>
                  <p className="mt-2 text-sm font-bold text-foreground">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-6 text-3xl font-black tracking-tight text-foreground">Trust language</h2>
            <ul className="space-y-4 rounded-lg border border-border bg-secondary/50 p-6">
              {trustPoints.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm font-semibold leading-relaxed text-foreground/75">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
