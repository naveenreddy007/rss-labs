import Link from "next/link"
import Image from "next/image"
import { company, serviceCatalog } from "@/lib/site-data"

const footerTrustLabels = ["Testing", "Treatment", "Monitoring", "AMC Support"]

const navLinks = {
  services: serviceCatalog.map((service) => ({
    name: service.title,
    href: `/services/${service.slug}`,
  })),
  company: [
    { name: "About Us", href: "/#about" },
    { name: "Industries", href: "/#industries" },
    { name: "Company Profile", href: "/company-profile" },
    { name: "Contact", href: "/#contact" },
  ],
}

export function Footer() {
  return (
    <footer className="section-anchor relative border-t border-border overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-10" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">

        {/* Main footer content */}
        <div className="py-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand col */}
          <div className="sm:col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 group w-fit mb-5">
              <div className="relative flex h-10 w-10 items-center justify-center rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 rounded-lg border border-primary/40" />
                <Image
                  src="/logo.png"
                  alt="RSS Labs Logo"
                  width={32}
                  height={32}
                  className="relative z-10 w-8 h-8 object-cover rounded-md"
                />
              </div>
              <div className="flex flex-col leading-none gap-0.5">
                <span className="text-sm font-bold text-foreground tracking-wide">RSS LABS</span>
                <span className="text-[10px] text-muted-foreground tracking-widest uppercase">Environmental &amp; Analytical</span>
              </div>
            </Link>

            <p className="text-sm text-foreground/70 leading-relaxed max-w-sm mb-6 font-medium">
              Environmental testing, wastewater treatment, laboratory infrastructure, supply, and monitoring support from Tirupati, Andhra Pradesh.
            </p>

            <div className="flex flex-wrap gap-2">
              {footerTrustLabels.map((label) => (
                <span
                  key={label}
                  className="text-[10px] font-bold text-primary border border-primary/20 bg-primary/10 rounded-full px-2.5 py-1 tracking-wide"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* Services col */}
          <div>
            <p className="text-xs font-bold text-foreground uppercase tracking-widest mb-5">Services</p>
            <ul className="flex flex-col gap-3">
              {navLinks.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-foreground/65 hover:text-primary transition-colors duration-200 font-medium"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company col */}
          <div>
            <p className="text-xs font-bold text-foreground uppercase tracking-widest mb-5">Company</p>
            <ul className="flex flex-col gap-3">
              {navLinks.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-foreground/65 hover:text-primary transition-colors duration-200 font-medium"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Contact snippet */}
            <div className="mt-8 flex flex-col gap-1.5">
              <p className="text-xs font-bold text-foreground uppercase tracking-widest mb-2">Contact</p>
              <a href="tel:+918772251234" className="text-sm text-foreground/70 hover:text-primary transition-colors font-medium">{company.phoneNumbers[0]}</a>
              <a href={`mailto:${company.emails[0]}`} className="text-sm text-foreground/70 hover:text-primary transition-colors font-medium">{company.emails[0]}</a>
              <p className="text-sm text-foreground/70 font-medium">{company.addressLines.join(", ")}.</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-foreground/60 font-medium">
            &copy; {new Date().getFullYear()} RSS Environmental &amp; Analytical Labs. All rights reserved.
          </p>
            <div className="flex gap-6">
            <Link href="/privacy-policy" className="text-xs text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="text-xs text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  )
}
