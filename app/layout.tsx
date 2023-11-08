import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

const inter = Montserrat({ subsets: ['latin'], weight:['300','400', '500', '600'] })

export const metadata: Metadata = {
  title: 'Sample Template 1',
  description: 'Digital wedding invitation templates are available from Neo Industries. If you are interested, please contact us to discuss your needs and goals.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className} style={{background: '#823E37'}}>
        <div className='pattern'></div>
        {children}
      </body>
    </html>
  )
}
