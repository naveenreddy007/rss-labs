import { testingMatrix } from "@/lib/site-data"

export function TestingMatrix() {
  return (
    <section id="testing-matrix" className="section-anchor bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-4 border-l-4 border-primary pl-3 text-xs font-bold uppercase tracking-widest text-primary">
              Testing Parameters
            </p>
            <h2 className="text-3xl font-black leading-tight tracking-tight text-foreground sm:text-5xl">
              Water and food testing scope, organized for quick comparison.
            </h2>
          </div>
          <p className="max-w-sm text-sm font-medium leading-relaxed text-foreground/70 md:text-right">
            The matrix keeps the website practical for procurement teams, QA teams, and facility managers.
          </p>
        </div>

        <div className="overflow-hidden rounded-lg border border-border bg-card">
          <div className="grid grid-cols-1 border-b border-border bg-muted text-xs font-black uppercase tracking-widest text-foreground md:grid-cols-[180px_1fr_1fr]">
            <div className="p-4">Category</div>
            <div className="border-t border-border p-4 md:border-l md:border-t-0">Water / Wastewater</div>
            <div className="border-t border-border p-4 md:border-l md:border-t-0">Cooked Food</div>
          </div>

          {testingMatrix.map((row) => (
            <div key={row.category} className="grid grid-cols-1 border-b border-border last:border-b-0 md:grid-cols-[180px_1fr_1fr]">
              <div className="bg-secondary/60 p-4 text-sm font-black text-foreground">{row.category}</div>
              <div className="border-t border-border p-4 text-sm leading-relaxed text-foreground/75 md:border-l md:border-t-0">
                {row.water}
              </div>
              <div className="border-t border-border p-4 text-sm leading-relaxed text-foreground/75 md:border-l md:border-t-0">
                {row.food}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
