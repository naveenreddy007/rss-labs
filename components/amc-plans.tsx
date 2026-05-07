import { ClipboardCheck, FileText, LifeBuoy, Wrench } from "lucide-react"
import { amcPlans } from "@/lib/site-data"

const icons = [Wrench, ClipboardCheck, LifeBuoy, FileText]

export function AmcPlans() {
  return (
    <section id="amc" className="section-anchor bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="mb-4 border-l-4 border-primary pl-3 text-xs font-bold uppercase tracking-widest text-primary">
              AMC Plans
            </p>
            <h2 className="text-3xl font-black leading-tight tracking-tight text-foreground sm:text-5xl">
              Maintenance support that keeps treatment plants usable after installation.
            </h2>
          </div>
          <p className="text-sm font-medium leading-relaxed text-foreground/70 lg:max-w-xl">
            AMC is positioned as plant lifecycle support: preventive checks, process support, emergency response, and compliance documentation.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {amcPlans.map((plan, index) => {
            const Icon = icons[index] ?? Wrench

            return (
              <article key={plan.title} className="rounded-lg border border-border bg-card p-5">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mb-2 text-base font-black text-foreground">{plan.title}</h3>
                <p className="text-sm font-medium leading-relaxed text-foreground/70">{plan.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
