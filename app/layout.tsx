import type { Metadata } from 'next'
import { Jost, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: 'ENTRÃ by DER â La ticketera que Argentina merecÃ­a',
  description: 'La plataforma de venta de tickets con las comisiones mÃ¡s bajas del mercado argentino. Control de accesos, analytics en tiempo real y API abierta. Powered by Somos DER.',
  keywords: ['tickets', 'eventos', 'argentina', 'ticketera', 'entradas', 'control de accesos', 'QR', 'mercado pago'],
  authors: [{ name: 'Somos DER', url: 'https://somosder.ar' }],
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
    <html lang="es" className="dark">
      <body className={`${jost.variable} ${inter.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
