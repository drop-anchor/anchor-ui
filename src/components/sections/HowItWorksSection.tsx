'use client'

import { Anchor, Heart, Highlighter } from 'lucide-react'

import { Section } from '@/components/shared/Section'
import { StepCard } from '@/components/shared/StepCard'

export function HowItWorksSection() {
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
            body="You are reading something you do not want to forget."
            icon={<Highlighter size={16} />}
          />
          <StepCard
            number="02"
            title="Drop Anchor"
            body="Drop an anchor to save the thought that made it matter."
            icon={<Anchor size={16} />}
          />
          <StepCard
            number="03"
            title="Close the tab"
            body="Close the tab knowing you can return to the idea later."
            icon={<Heart size={16} />}
          />
        </div>
      </div>
    </Section>
  );
}
