import { equipmentCatalogue } from "@/lib/site-data"

export function EquipmentCatalogue() {
  return (
    <section id="equipment" className="section-anchor bg-card py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 border-l-4 border-primary pl-3 text-xs font-bold uppercase tracking-widest text-primary">
            Equipment Catalogue
          </p>
          <h2 className="text-3xl font-black leading-tight tracking-tight text-foreground sm:text-5xl">
            Treatment plant supplies grouped the way maintenance teams actually search.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
          {equipmentCatalogue.map((group) => (
            <article key={group.title} className="rounded-lg border border-border bg-secondary/50 p-5">
              <h3 className="mb-4 text-base font-black text-foreground">{group.title}</h3>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm font-medium leading-relaxed text-foreground/75">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
