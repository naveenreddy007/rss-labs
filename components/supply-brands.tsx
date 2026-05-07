import { PackageCheck } from "lucide-react"
import { supplyBrands } from "@/lib/site-data"

export function SupplyBrands() {
  return (
    <section id="supplies" className="section-anchor bg-card py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="mb-4 border-l-4 border-primary pl-3 text-xs font-bold uppercase tracking-widest text-primary">
              Products We Supply
            </p>
            <h2 className="text-3xl font-black leading-tight tracking-tight text-foreground sm:text-5xl">
              Instruments, filtration products, RO consumables, and support supplies.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {supplyBrands.map((brand) => (
              <div key={brand} className="flex items-center gap-3 rounded-lg border border-border bg-secondary/50 p-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <PackageCheck className="h-4 w-4" />
                </div>
                <p className="text-sm font-bold text-foreground">{brand}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
