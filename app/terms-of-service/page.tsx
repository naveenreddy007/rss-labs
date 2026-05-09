export const metadata = {
  title: 'Terms of Service | RSS Environmental & Analytical Labs',
}

export default function TermsOfServicePage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-24 lg:py-32">
      <h1 className="text-3xl sm:text-4xl font-black text-foreground mb-6">Terms of Service</h1>
      <p className="text-sm text-muted-foreground mb-8">Last updated: May 7, 2026</p>

      <div className="prose prose-sm max-w-none text-foreground/80 space-y-5">
        <section>
          <h2 className="text-lg font-bold text-foreground">1) Services</h2>
          <p>
            RSS Environmental &amp; Analytical Labs provides information, consultation, testing, and engineering service support as described on this website.
          </p>
        </section>
        <section>
          <h2 className="text-lg font-bold text-foreground">2) Accuracy</h2>
          <p>
            All service descriptions are periodically reviewed. We make reasonable efforts to keep content accurate, but content may change with market and regulatory updates.
          </p>
        </section>
        <section>
          <h2 className="text-lg font-bold text-foreground">3) Limitation of liability</h2>
          <p>
            We do not accept liability for indirect or consequential losses arising from reliance on site content. Formal project scope and liability terms are defined in signed engagement documents.
          </p>
        </section>
        <section>
          <h2 className="text-lg font-bold text-foreground">4) Contact</h2>
          <p>Email: info@rssenvirolabs.com</p>
        </section>
      </div>
    </main>
  )
}
