import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { serviceCatalog } from "@/lib/site-data"

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return serviceCatalog.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const service = serviceCatalog.find((item) => item.slug === slug)

  if (!service) {
    return {
      title: "Service Not Found | RSS Environmental & Analytical Labs",
    }
  }

  return {
    title: `${service.title} | RSS Environmental & Analytical Labs`,
    description: service.summary,
    openGraph: {
      title: `${service.title} | RSS Environmental & Analytical Labs`,
      description: service.summary,
      images: [
        {
          url: service.image,
          width: 1024,
          height: 1024,
          alt: service.title,
        },
      ],
    },
  }
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params
  const service = serviceCatalog.find((item) => item.slug === slug)

  if (!service) {
    notFound()
  }

  const relatedServices = serviceCatalog.filter((item) => item.slug !== service.slug).slice(0, 3)

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <article className="pt-24">
        <section className="relative overflow-hidden border-b border-border bg-card">
          <div className="absolute inset-0">
            <Image src={service.image} alt="" fill className="object-cover opacity-20" priority />
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background" />
          </div>

          <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
            <Link
              href="/#services"
              className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-primary transition-colors hover:text-primary/80"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to services
            </Link>

            <div className="grid gap-8 lg:grid-cols-[1fr_360px] lg:items-end">
              <div>
                <p className="mb-4 text-xs font-bold uppercase tracking-widest text-primary">{service.tag}</p>
                <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight text-foreground sm:text-6xl">
                  {service.title}
                </h1>
                <p className="mt-6 max-w-3xl text-lg font-semibold leading-relaxed text-foreground/75">
                  {service.description}
                </p>
              </div>

              <div className="rounded-lg border border-border bg-card p-5">
                <p className="mb-4 text-xs font-black uppercase tracking-widest text-foreground">Core Scope</p>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm font-semibold leading-relaxed text-foreground/75">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-background py-16 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-5 px-6 lg:grid-cols-2 lg:px-8">
            {service.sections.map((section) => (
              <div key={section.title} className="rounded-lg border border-border bg-card p-6">
                <h2 className="mb-5 text-xl font-black text-foreground">{section.title}</h2>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm font-medium leading-relaxed text-foreground/75">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="border-y border-border bg-secondary py-16">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[1fr_420px] lg:items-center lg:px-8">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-primary">Next Step</p>
              <h2 className="text-3xl font-black leading-tight tracking-tight text-foreground">
                Share the site, sample, plant, or supply requirement and RSS Labs can route it to the right service team.
              </h2>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Link
                href="/#contact"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-primary px-5 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/85"
              >
                Request Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/company-profile"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-border bg-card px-5 text-sm font-bold text-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                Company Profile
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-card py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <p className="mb-6 text-xs font-bold uppercase tracking-widest text-primary">Related Services</p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {relatedServices.map((item) => (
                <Link
                  key={item.slug}
                  href={`/services/${item.slug}`}
                  className="group rounded-lg border border-border bg-secondary/50 p-5 transition-colors hover:border-primary/50"
                >
                  <p className="mb-2 text-sm font-black text-foreground">{item.title}</p>
                  <p className="text-sm font-medium leading-relaxed text-foreground/70">{item.summary}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-primary">
                    View details <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </article>

      <Footer />
    </main>
  )
}
