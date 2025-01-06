import type { Metadata } from 'next'
import { Noto_Sans } from 'next/font/google'

import { SITE_URL } from '@/constants/constants'

import { Providers } from '@/providers/Providers'

import './globals.scss'

const notoSans = Noto_Sans({ subsets: ['latin'] })

// export const fetchCache = 'default-cache'

export const metadata: Metadata = {
  title: {
    absolute: "Sargsyan's",
    template: `%s | Sargsyan's`
  },
  description: 'Best app for video watching',
  metadataBase: new URL(SITE_URL)
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
