import Link from "next/link"
import { ArrowRight, CheckCircle2, MapPin } from "lucide-react"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { company, seoPages, serviceCatalog } from "@/lib/site-data"

type SeoLandingPageProps = {
  slug: string
}

export function SeoLandingPage({ slug }: SeoLandingPageProps) {
  const page = seoPages.find((item) => item.slug === slug)

  if (!page) {
    return null
  }

  const service = serviceCatalog.find((item) => item.slug === page.serviceSlug)

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="border-b border-border bg-card pt-32 pb-16 lg:pb-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[1fr_360px] lg:items-end lg:px-8">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary">
              <MapPin className="h-4 w-4" />
              Tirupati / Andhra Pradesh
            </p>
            <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight text-foreground sm:text-6xl">
              {page.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg font-semibold leading-relaxed text-foreground/75">
              {page.description}
            </p>
          </div>

          <div className="rounded-lg border border-border bg-secondary p-5">
            <p className="mb-3 text-xs font-black uppercase tracking-widest text-foreground">Office Address</p>
            <p className="text-sm font-semibold leading-relaxed text-foreground/75">
              {company.addressLines.join(", ")}.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <h2 className="text-3xl font-black leading-tight tracking-tight text-foreground">
              What this page covers
            </h2>
            <p className="mt-4 text-sm font-medium leading-relaxed text-foreground/70">
              This is a focused service-location page for clients searching by work type and region.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {page.focus.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-lg border border-border bg-card p-4">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <p className="text-sm font-bold leading-relaxed text-foreground/75">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {service ? (
        <section className="border-y border-border bg-secondary py-16">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[1fr_420px] lg:items-center lg:px-8">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-primary">Related Service</p>
              <h2 className="text-3xl font-black leading-tight tracking-tight text-foreground">{service.title}</h2>
              <p className="mt-4 text-sm font-medium leading-relaxed text-foreground/70">{service.summary}</p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Link
                href={`/services/${service.slug}`}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-border bg-card px-5 text-sm font-bold text-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                View Service
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/#contact"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-primary px-5 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/85"
              >
                Request Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      ) : null}

      <Footer />
    </main>
  )
}
