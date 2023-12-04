import type { Metadata } from 'next'
import { Julius_Sans_One } from 'next/font/google'
import './globals.css'

const font = Julius_Sans_One({weight: "400", subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Project: Blossom',
  description: 'Crowdfunding plastic surgery to flower confidence and blossom.',
  openGraph: {
    images: ['url(/banner.png)']
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  )
}
