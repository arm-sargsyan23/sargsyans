import type { Metadata, Viewport } from 'next'
import { Noto_Sans } from 'next/font/google'

import { COLORS } from '@/constants/colors.constants'
import { SITE_URL } from '@/constants/constants'

import { Providers } from '@/providers/Providers'

import './globals.scss'

const notoSans = Noto_Sans({ subsets: ['latin'] })

export const fetchCache = 'default-cache'

export const metadata: Metadata = {
  icons: {
    icon: 'images/logo.svg',
    shortcut: 'images/logo.svg',
    apple: 'images/256.png',
    other: {
      rel: 'touch-icons',
      url: 'images/256.png',
      sizes: '256x256',
      type: 'image/png'
    }
  },
  title: {
    absolute: "Sargsyan's",
    template: `%s | Sargsyan's`
  },
  description: 'Best app for video watching',
  openGraph: {
    type: 'website',
    siteName: 'localhost',
    emails: [`armenjan2310@gmail.com`],
    images: [
      {
        url: '/images/og.png',
        width: 1920,
        height: 1080,
        alt: `Sargsyan's`
      }
    ]
  },
  metadataBase: new URL(SITE_URL),
  applicationName: `Sargsyan's`,
  authors: {
    name: `Sargsyan Armen`
  },
  manifest: '/manifest.json',
  publisher: `Sargsyan Armen`,
  formatDetection: {
    telephone: false
  }
}

export const viewport: Viewport = {
  themeColor: COLORS.bg
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={notoSans.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
