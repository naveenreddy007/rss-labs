"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu, X, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"

const navigation = [
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", handleScroll, { passive: true })
    setMounted(true)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isDark = resolvedTheme === "dark"
  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark")
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <Link href="#home" className="flex items-center gap-3 group">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-primary/20 rounded-lg border border-primary/40 group-hover:bg-primary/30 transition-colors" />
            <Image
              src="/logo.png"
              alt="RSS Labs Logo"
              width={36}
              height={36}
              className="relative z-10 w-8 h-8 object-cover rounded-md"
            />
          </div>
          <div className="flex flex-col leading-none gap-0.5">
            <span className="text-sm font-bold text-foreground tracking-wide">RSS LABS</span>
            <span className="text-[10px] text-muted-foreground tracking-widest uppercase">Environmental &amp; Analytical</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 tracking-wide"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to bright mode" : "Switch to dark mode"}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
          >
            {mounted ? (isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />) : null}
          </button>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary/85 transition-all duration-200 shadow-[0_0_20px_var(--glow)] hover:shadow-[0_0_30px_var(--glow)]"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <div className="flex items-center justify-end px-6 pt-3 pb-2">
            <button
              onClick={toggleTheme}
              aria-label={isDark ? "Switch to bright mode" : "Switch to dark mode"}
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
            >
              {mounted ? (isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />) : null}
            </button>
          </div>
          <div className="flex flex-col gap-1 px-6 py-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-3 text-sm text-muted-foreground hover:text-primary border-b border-border/50 last:border-0 transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-3 px-4 py-3 rounded-lg bg-primary text-primary-foreground text-sm font-semibold text-center"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
