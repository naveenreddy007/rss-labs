import type { Metadata } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-mono' })

export const metadata: Metadata = {
  title: 'RSS Environmental & Analytical Labs | Tirupati',
  description: 'Environmental testing and treatment solutions - Water testing, Food testing, ETP/STP/RO plant services, Laboratory infrastructure, and OCEMS monitoring systems.',
  applicationName: 'RSS Environmental & Analytical Labs',
  generator: 'Next.js',
  openGraph: {
    title: 'RSS Environmental & Analytical Labs | Tirupati',
    description: 'Environmental testing, wastewater treatment, laboratory infrastructure, and OCEMS monitoring systems.',
    siteName: 'RSS Environmental & Analytical Labs',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: '/logo.png',
        width: 1024,
        height: 1024,
        alt: 'RSS Environmental & Analytical Labs logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RSS Environmental & Analytical Labs | Tirupati',
    description: 'Environmental testing, wastewater treatment, laboratory infrastructure, and OCEMS monitoring systems.',
    images: ['/logo.png'],
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${geistMono.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-background text-foreground">
        <ThemeProvider>
          {children}
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </ThemeProvider>
      </body>
    </html>
  )
}
