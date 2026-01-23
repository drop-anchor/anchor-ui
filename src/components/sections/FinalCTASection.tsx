'use client'

import { useReducedMotion } from 'framer-motion'
import { motion } from 'framer-motion'
import { Section } from '@/components/shared/Section'
import { Button } from '@/components/ui/button'

export function FinalCTASection({ chromeWebStoreUrl }: { chromeWebStoreUrl: string }) {
  const reduce = useReducedMotion();

  return (
    <Section className="mx-auto max-w-6xl px-6 py-14 sm:py-18">
      <div className="relative overflow-hidden rounded-3xl border bg-background/60 p-8 shadow-sm backdrop-blur sm:p-12">
        {/* calm internal glow (subtle parallax-ish drift) */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -top-28 left-1/2 h-64 w-80 -translate-x-1/2 rounded-full bg-muted/50 blur-3xl"
          animate={reduce ? undefined : { x: [0, 10, 0], y: [0, -6, 0] }}
          transition={reduce ? undefined : { duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className="relative z-10 max-w-2xl">
          <p className="text-sm text-muted-foreground">A lighter way to browse</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-4xl">
            Stop keeping everything open.
            <br />
            Anchor remembers what matters.
          </h2>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button asChild size="lg" className="cursor-pointer text-primary-foreground bg-emerald-400 hover:bg-emerald-500">
              <a href={chromeWebStoreUrl} target="_blank" rel="noreferrer">
                Install Anchor for Chrome
              </a>
            </Button>
            <p className="text-xs text-muted-foreground">
              Calm by default. No setup.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
