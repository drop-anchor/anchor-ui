import Link from 'next/link'

import { AIAsMemorySection } from '@/components/sections/AIAsMemorySection'
import { BridgeLineSection } from '@/components/sections/BridgeLineSection'
import { FinalCTASection } from '@/components/sections/FinalCTASection'
import { HeroSection } from '@/components/sections/HeroSection'
import { HowItWorksSection } from '@/components/sections/HowItWorksSection'
import { ProblemReliefSection } from '@/components/sections/ProblemReliefSection'
import { ResearchQuoteSection } from '@/components/sections/ResearchQuoteSection'

const CHROME_WEB_STORE_URL = 'https://chromewebstore.google.com/detail/anchor/igdnlkcbffbmflojplbjjfkjofejkapj'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://dropanchor.ai'

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Anchor',
  applicationCategory: 'BrowserExtension',
  operatingSystem: 'Chrome',
  description: 'Anchor saves the context you\'re afraid of losing. A free Chrome extension that lets you close tabs without losing important thoughts, quotes, or details.',
  url: baseUrl,
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    ratingCount: '1',
  },
  featureList: [
    'Save context from web pages',
    'Close tabs without losing information',
    'Free Chrome extension',
    'No dashboards required',
  ],
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {/* calm background wash */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-[-320px] h-[720px] w-[900px] max-w-[100vw] -translate-x-1/2 rounded-full bg-background/50 blur-3xl" />
        <div className="absolute right-[-220px] top-[120px] h-[520px] w-[520px] max-w-[100vw] rounded-full bg-background/40 blur-3xl" />
        <div className="absolute bottom-[-300px] left-[-260px] h-[640px] w-[640px] max-w-[100vw] rounded-full bg-background/30 blur-3xl" />
      </div>

      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <Link href="/" className="inline-flex items-baseline gap-2">
          <span className="text-sm font-medium tracking-tight">Anchor</span>
        </Link>

        <nav className="flex items-center gap-2">
          <a
            href={CHROME_WEB_STORE_URL}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            target="_blank"
            rel="noreferrer"
          >
            Install
          </a>
        </nav>
      </header>

      <HeroSection chromeWebStoreUrl={CHROME_WEB_STORE_URL} />
      <BridgeLineSection />
      <ProblemReliefSection />
      <HowItWorksSection />
      <AIAsMemorySection chromeWebStoreUrl={CHROME_WEB_STORE_URL} />
      <ResearchQuoteSection />
      <FinalCTASection chromeWebStoreUrl={CHROME_WEB_STORE_URL} />

      <footer className="mx-auto max-w-6xl px-6 pb-10 pt-6">
        <div className="flex flex-col gap-2 border-t pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-2">
            <p>© 2026 Anchor</p>
            <Link href="/privacy" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link>
          </div>
          <p className="text-right">Save the thought. Close the tab.</p>
        </div>
      </footer>
    </main>
  )
}
