import Link from 'next/link'

import { HowItWorksSection } from '@/components/sections/HowItWorksSection'
import { FinalCTASection } from '@/components/sections/FinalCTASection'
import { HeroSection } from '@/components/sections/HeroSection'
import { ProblemReliefSection } from '@/components/sections/ProblemReliefSection'
import { BridgeLineSection } from '@/components/sections/BridgeLineSection'
import { ResearchQuoteSection } from '@/components/sections/ResearchQuoteSection'

// TODO: replace with your extension URL
const CHROME_WEB_STORE_URL = 'https://chromewebstore.google.com/'

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* calm background wash */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-[-320px] h-[720px] w-[900px] max-w-[100vw] -translate-x-1/2 rounded-full bg-muted/50 blur-3xl" />
        <div className="absolute right-[-220px] top-[120px] h-[520px] w-[520px] max-w-[100vw] rounded-full bg-muted/40 blur-3xl" />
        <div className="absolute bottom-[-300px] left-[-260px] h-[640px] w-[640px] max-w-[100vw] rounded-full bg-muted/30 blur-3xl" />
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
      <HowItWorksSection chromeWebStoreUrl={CHROME_WEB_STORE_URL} />
      <ResearchQuoteSection />
      <FinalCTASection chromeWebStoreUrl={CHROME_WEB_STORE_URL} />

      <footer className="mx-auto max-w-6xl px-6 pb-10 pt-6">
        <div className="flex flex-col gap-2 border-t pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Anchor</p>
          <p>Save the thought. Close the tab.</p>
        </div>
      </footer>
    </main>
  )
}
