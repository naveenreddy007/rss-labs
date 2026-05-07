"use client"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    details: ["RSS Environmental & Analytical Labs", "Tirupati, Andhra Pradesh — 517501"],
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+91 877 225 1234", "+91 98765 43210"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@rsslabs.in", "support@rsslabs.in"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Mon – Sat: 9:00 AM – 6:00 PM", "Sunday: Closed"],
  },
]

const services = [
  "Water & Wastewater Testing",
  "Food Testing",
  "ETP / STP / RO Plant Services",
  "Laboratory Infrastructure",
  "OCEMS Systems",
  "Other",
]

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  })
  const [submitting, setSubmitting] = useState(false)
  const [statusType, setStatusType] = useState<"idle" | "success" | "error">("idle")
  const [statusMessage, setStatusMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setStatusType("idle")
    setStatusMessage("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const payload = await response.json().catch(() => null)
      if (!response.ok || !payload?.ok) {
        throw new Error(payload?.error || "Unable to send inquiry right now. Please call us directly.")
      }

      setStatusType("success")
      setStatusMessage("Inquiry sent successfully. Our team will contact you within 24 hours.")
      setFormData({ name: "", email: "", phone: "", company: "", service: "", message: "" })
    } catch (err) {
      setStatusType("error")
      setStatusMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section-anchor relative py-24 lg:py-36 overflow-hidden bg-secondary">
      <div className="absolute inset-0 grid-pattern opacity-15" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="mb-14">
          <p className="text-xs font-bold tracking-widest uppercase text-primary mb-4 border-l-4 border-primary pl-3">Get In Touch</p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground tracking-tight leading-tight text-balance max-w-lg">
              Start Your Environmental Compliance Journey
            </h2>
            <p className="text-foreground/70 text-base leading-relaxed max-w-xs sm:text-right font-medium">
              Reach out for a free consultation. We respond within 24 hours.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-6">

          {/* Form — takes 3 cols */}
          <div className="lg:col-span-3 rounded-2xl border border-border bg-card p-8">
            <div
              aria-live="polite"
              role="status"
              className={`mb-6 min-h-9 rounded-lg border px-4 py-2 text-sm font-semibold ${
                statusType === "idle"
                  ? "border-transparent bg-transparent text-transparent"
                  : statusType === "success"
                    ? "border-primary/40 bg-primary/10 text-primary"
                    : "border-destructive/40 bg-destructive/10 text-destructive"
              }`}
            >
              {statusMessage}
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Full Name *</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    autoComplete="name"
                    className="h-11 w-full rounded-lg border border-border bg-secondary px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-all"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Email *</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    autoComplete="email"
                    className="h-11 w-full rounded-lg border border-border bg-secondary px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-all"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="phone" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Phone *</label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    autoComplete="tel"
                    className="h-11 w-full rounded-lg border border-border bg-secondary px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-all"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="company" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Company</label>
                  <input
                    id="company"
                    type="text"
                    placeholder="Your company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    autoComplete="organization"
                    className="h-11 w-full rounded-lg border border-border bg-secondary px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-all"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="service" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Service Required *</label>
                <select
                  id="service"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  required
                  className="h-11 w-full rounded-lg border border-border bg-secondary px-4 text-sm text-foreground focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-all appearance-none"
                >
                  <option value="">Select a service...</option>
                  {services.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Message</label>
                <textarea
                  id="message"
                  placeholder="Describe your requirements..."
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full rounded-lg border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="group inline-flex items-center justify-center gap-2 h-12 px-8 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/85 transition-all duration-200 shadow-[0_0_25px_var(--glow)] hover:shadow-[0_0_35px_var(--glow)] self-start disabled:cursor-not-allowed disabled:opacity-75"
              >
                {submitting ? "Sending..." : "Send Inquiry"}
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </form>
          </div>

          {/* Contact info — takes 2 cols */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {contactInfo.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 hover:border-primary/40 transition-colors"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary">
                  <item.icon className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-black text-primary uppercase tracking-widest mb-1">{item.title}</p>
                  {item.details.map((d, i) => (
                    <p key={i} className="text-sm text-foreground leading-relaxed">{d}</p>
                  ))}
                </div>
              </div>
            ))}

            {/* Accreditation badge */}
            <div className="rounded-xl border border-primary/20 bg-primary/10 p-5">
              <p className="text-xs font-bold text-primary uppercase tracking-widest mb-3">Accreditations</p>
              <div className="flex flex-wrap gap-2">
                {["NABL", "ISO 17025", "ISO 9001", "FSSAI", "CPCB"].map((cert) => (
                  <span key={cert} className="text-[11px] font-semibold text-primary bg-primary/10 border border-primary/25 rounded-full px-3 py-1">
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
