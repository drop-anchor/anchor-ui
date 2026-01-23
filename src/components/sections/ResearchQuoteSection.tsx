'use client'

import { motion, useReducedMotion } from 'framer-motion'

const easeOut = [0.21, 0.47, 0.32, 0.98] as const

type ResearchQuoteProps = {
  quote?: string
  sourceLabel?: string
  sourceUrl?: string
}

export function ResearchQuoteSection({
  quote = 'Research on browser behavior suggests people often keep many tabs open as a way to remember things — but this can lead to cognitive overload and distraction rather than clarity.',
  sourceLabel = 'Carnegie Mellon University — “Overcoming Tab Overload”',
  sourceUrl = 'https://www.cmu.edu/news/stories/archives/2021/may/overcoming-tab-overload.html',
}: ResearchQuoteProps) {
  const reduce = useReducedMotion()

  return (
    <motion.section
      className="mx-auto max-w-3xl px-6 py-16 my-10 sm:py-20"
      initial={{ opacity: 0, y: reduce ? 0 : 14, filter: reduce ? 'blur(0px)' : 'blur(8px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.65, ease: easeOut }}
    >
      <div className="relative text-center">
          <p className="text-xs tracking-wide text-muted-foreground">A small note</p>

          <blockquote className="mt-3 text-lg leading-relaxed text-foreground/90 sm:text-xl">
            “{quote}”
          </blockquote>

          <div className="mt-4 text-xs text-muted-foreground">
            <a
              href={sourceUrl}
              target="_blank"
              rel="noreferrer"
              className="underline decoration-muted-foreground/30 underline-offset-4 hover:decoration-muted-foreground/60"
            >
              {sourceLabel}
            </a>
          </div>
      </div>
    </motion.section>
  )
}
