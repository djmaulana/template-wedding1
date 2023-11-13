import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

const inter = Montserrat({ subsets: ['latin'], weight:['300','400', '500', '600'] })

export const metadata: Metadata = {
  title: 'Habibuloh-Neng-Wedding-Invitation',
  description: 'Wedding invitation from Neng Dewi & Habibuloh wish Sakinah Mawadah & Warohmah',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className} >
        {children}
      </body>
    </html>
  )
}
