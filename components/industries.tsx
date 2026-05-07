import { Building2, Factory, FlaskConical, Hospital, Hotel, Landmark, School, Utensils } from "lucide-react"
import { industriesServed } from "@/lib/site-data"

const icons = [Factory, Hotel, Hospital, School, Utensils, Building2, FlaskConical, Landmark]

export function Industries() {
  return (
    <section id="industries" className="section-anchor bg-card py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 border-l-4 border-primary pl-3 text-xs font-bold uppercase tracking-widest text-primary">
            Industries Served
          </p>
          <h2 className="text-3xl font-black leading-tight tracking-tight text-foreground sm:text-5xl">
            Built for clients who need test results, plant uptime, and compliance paperwork to line up.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {industriesServed.map((industry, index) => {
            const Icon = icons[index] ?? Building2

            return (
              <div
                key={industry}
                className="flex items-center gap-3 rounded-lg border border-border bg-secondary/50 p-4 transition-colors hover:border-primary/40 hover:bg-secondary"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="text-sm font-bold leading-snug text-foreground">{industry}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
