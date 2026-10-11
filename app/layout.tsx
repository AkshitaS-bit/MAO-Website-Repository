import type { Metadata, Viewport } from 'next'
import { Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SiteNavbar } from '@/components/site-navbar'
import { SiteFooter } from '@/components/site-footer'
import './globals.css'

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Middleton MAO | Mu Alpha Theta Honor Society',
  description: 'Middleton High School\'s Mu Alpha Theta Mathematics Honor Society - Where Math Meets Excellence. Join us for competitions, tutoring, and mathematical exploration.',
  keywords: ['Mu Alpha Theta', 'Math Honor Society', 'Middleton High School', 'Mathematics', 'Competitions'],
}

export const viewport: Viewport = {
  themeColor: '#6B0000',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-white">
      <body className={`${poppins.variable} font-sans antialiased`}>
        <SiteNavbar />
        {children}
        <SiteFooter />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
