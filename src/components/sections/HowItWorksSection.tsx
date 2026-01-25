'use client'

import { Anchor, Heart, Highlighter } from 'lucide-react'

import { Section } from '@/components/shared/Section'
import { StepCard } from '@/components/shared/StepCard'
import { Button } from '@/components/ui/button'

export function HowItWorksSection({ chromeWebStoreUrl }: { chromeWebStoreUrl: string }) {
  return (
    <Section className="mx-auto max-w-6xl px-6 py-14 my-10 sm:py-18">
      <div className="flex flex-col gap-10">
        <div className="max-w-2xl">
          <p className="text-sm text-muted-foreground">How it works</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            Three small steps.
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <StepCard
            number="01"
            title="Highlight"
            body="Mark the exact line you don&apos;t want to lose."
            icon={<Highlighter size={16} />}
          />
          <StepCard
            number="02"
            title="Drop Anchor"
            body="Save the context instantly."
            icon={<Anchor size={16} />}
          />
          <StepCard
            number="03"
            title="Close the tab"
            body="Let your browser breathe again."
            icon={<Heart size={16} />}
          />
        </div>

        <div className="pt-2 flex items-center gap-3">
          <Button asChild size="lg" variant="secondary" className="cursor-pointer text-primary-foreground bg-emerald-400 hover:bg-emerald-500">
            <a href={chromeWebStoreUrl} target="_blank" rel="noreferrer">
              Install for Chrome
            </a>
          </Button>
          <p className="text-xs text-muted-foreground">
            You can always come back later — without keeping the tab open.
          </p>
        </div>

        <div className="mt-6 max-w-2xl">
          <p className="text-sm text-muted-foreground">Optional</p>
          <p className="mt-2 text-base leading-relaxed text-muted-foreground">
            Want to revisit later without digging?
          </p>
          <p className="mt-2 text-base leading-relaxed text-muted-foreground">
            You can ask Anchor about what you saved — just enough to get back to the moment.
          </p>
        </div>
      </div>
    </Section>
  );
}
