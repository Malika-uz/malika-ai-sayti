import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geist = Geist({ 
  subsets: ["latin"],
  variable: '--font-geist-sans'
})

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: '--font-geist-mono'
})

export const metadata: Metadata = {
  title: 'MALIKA - Avtonom Sun'iy Intellekt Operatsion Tizimi',
  description: 'Experience the future of computing with MALIKA - featuring Ovozli Intellekt, Autonomous AI Agents, Neural Ko‘rish Tizimi, and advanced AI Planning.',
  keywords: ['AI', 'Operating System', 'Ovozli Intellekt', 'Neural Ko‘rish Tizimi', 'AI Agents', 'Desktop Avtomatlashtirish'],
  authors: [{ name: 'MALIKA' }],
  creator: 'MALIKA',
  openGraph: {
    title: 'MALIKA - Avtonom Sun'iy Intellekt Operatsion Tizimi',
    description: 'Experience the future of computing with MALIKA',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#00d4ff',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable} bg-background`}>
      <body className="font-sans antialiased overflow-x-hidden">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
