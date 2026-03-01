import type { Metadata } from 'next'
import { Lora, Raleway } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
});

const _raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
});

export const metadata: Metadata = {
  title: 'Diva Encanto em Fios - Crochê Artesanal',
  description: 'Peças artesanais de crochê feitas à mão com carinho e criatividade. Tapetes, bolsas, panos, chaveirinhos de crochê e toucas.',
  icons: {
    icon: '/favicon.jpg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${_lora.variable} ${_raleway.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
