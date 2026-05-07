import { ArrowRight } from "lucide-react"
import { processSteps } from "@/lib/site-data"

export function Process() {
  return (
    <section id="process" className="section-anchor bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 border-l-4 border-primary pl-3 text-xs font-bold uppercase tracking-widest text-primary">
            Process
          </p>
          <h2 className="text-3xl font-black leading-tight tracking-tight text-foreground sm:text-5xl">
            A clear path from enquiry to long-term plant or testing support.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-5">
          {processSteps.map((step, index) => (
            <div key={step} className="relative rounded-lg border border-border bg-card p-5">
              <p className="mb-5 text-xs font-black uppercase tracking-widest text-primary">
                Step {index + 1}
              </p>
              <h3 className="min-h-12 text-base font-black leading-snug text-foreground">{step}</h3>
              {index < processSteps.length - 1 ? (
                <ArrowRight className="absolute -right-4 top-1/2 z-10 hidden h-5 w-5 -translate-y-1/2 text-primary md:block" />
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
