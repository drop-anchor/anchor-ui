import { Geist, Geist_Mono } from 'next/font/google'

import type { Metadata } from 'next'

import '@/styles/global.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://dropanchor.ai'),
  title: {
    default: 'Anchor - Save the thought. Close the tab.',
    template: '%s | Anchor',
  },
  description: 'Anchor saves the context you\'re afraid of losing. A free Chrome extension that lets you close tabs without losing important thoughts, quotes, or details.',
  keywords: [
    'browser extension',
    'tab management',
    'productivity',
    'chrome extension',
    'save context',
    'bookmark',
    'note taking',
    'memory',
    'browser tabs',
    'organize tabs',
  ],
  authors: [{ name: 'Anchor' }],
  creator: 'Anchor',
  publisher: 'Anchor',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Anchor',
    title: 'Anchor - Save the thought. Close the tab.',
    description: 'Anchor saves the context you\'re afraid of losing. A free Chrome extension that lets you close tabs without losing important thoughts, quotes, or details.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Anchor - Save the thought. Close the tab.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anchor - Save the thought. Close the tab.',
    description: 'Anchor saves the context you\'re afraid of losing. A free Chrome extension that lets you close tabs without losing important thoughts, quotes, or details.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/icon/16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icon/32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon/48.png', sizes: '48x48', type: 'image/png' },
      { url: '/icon/96.png', sizes: '96x96', type: 'image/png' },
      { url: '/icon/128.png', sizes: '128x128', type: 'image/png' },
    ],
    apple: [
      { url: '/icon/128.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
  alternates: {
    canonical: '/',
  },
}

export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
