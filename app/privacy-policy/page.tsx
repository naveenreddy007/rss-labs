export const metadata = {
  title: 'Privacy Policy | RSS Environmental & Analytical Labs',
}

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-24 lg:py-32">
      <h1 className="text-3xl sm:text-4xl font-black text-foreground mb-6">Privacy Policy</h1>
      <p className="text-sm text-muted-foreground mb-8">Last updated: May 7, 2026</p>

      <div className="prose prose-sm max-w-none text-foreground/80 space-y-5">
        <section>
          <h2 className="text-lg font-bold text-foreground">1) Information we collect</h2>
          <p>
            We collect details you submit in the contact form, including your name, phone number, email, company name, and service interest.
            This is used only to respond to your inquiry.
          </p>
        </section>
        <section>
          <h2 className="text-lg font-bold text-foreground">2) How we use it</h2>
          <p>
            We use your information to share service guidance, follow up on compliance and testing queries, and improve customer support.
          </p>
        </section>
        <section>
          <h2 className="text-lg font-bold text-foreground">3) Retention and security</h2>
          <p>
            Inquiries are retained according to our operational retention period. We apply security best practices to protect submitted data.
          </p>
        </section>
        <section>
          <h2 className="text-lg font-bold text-foreground">4) Your choices</h2>
          <p>
            You can request correction or deletion of your submitted details by contacting us at info@rsslabs.in.
          </p>
        </section>
      </div>
    </main>
  )
}
