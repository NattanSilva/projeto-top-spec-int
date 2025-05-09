import { Navbar } from '@/components/Navbar'
import type { Metadata } from 'next'
import { Kumbh_Sans } from 'next/font/google'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sneakers Store',
  description: 'Sneakers Store',
  icons: {
    icon: '/favicon.png',
  },
}

const kumbhSans = Kumbh_Sans({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-kumbh-sans',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className='bg-light-grayish-blue'>
      <body className={`${kumbhSans.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
