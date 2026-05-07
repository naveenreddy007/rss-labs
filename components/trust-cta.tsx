import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { trustPoints } from "@/lib/site-data"

export function TrustCta() {
  return (
    <section id="trust" className="section-anchor bg-card py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="rounded-lg border border-border bg-secondary p-6 sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-widest text-primary">
                Quality-Focused Support
              </p>
              <h2 className="max-w-3xl text-3xl font-black leading-tight tracking-tight text-foreground sm:text-5xl">
                Realistic trust messaging: no unverified certificate claims, just service scope and documentation discipline.
              </h2>
            </div>

            <div>
              <ul className="mb-6 space-y-3">
                {trustPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm font-semibold leading-relaxed text-foreground/75">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/company-profile"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-border bg-card px-5 text-sm font-bold text-foreground transition-colors hover:border-primary/50 hover:text-primary"
                >
                  Company Profile
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
          </div>
        </div>
      </div>
    </section>
  )
}
