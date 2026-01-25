'use client'

import { motion, useReducedMotion } from 'framer-motion'

import { Separator } from '@/components/ui/separator'

const easeOut = [0.21, 0.47, 0.32, 0.98] as const

export function BridgeLineSection() {
  const reduce = useReducedMotion()

  return (
    <motion.section
      className="mx-auto max-w-6xl mt-10 px-6 pb-10 sm:pb-14"
      initial={{ opacity: 0, y: reduce ? 0 : 10, filter: reduce ? 'blur(0px)' : 'blur(8px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ duration: 0.55, ease: easeOut }}
    >
      <div className="relative overflow-hidden rounded-2xl px-5 pt-8 pb-8 sm:px-7 sm:pt-10 sm:pb-10">
        {/* subtle internal glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-16 left-1/2 h-40 w-72 -translate-x-1/2 rounded-full blur-3xl"
        />

        <div className="relative flex items-center justify-center gap-4">
          <Separator className="hidden sm:flex flex-1" />
          <h2 className="text-center leading-relaxed text-muted-foreground sm:whitespace-nowrap">
            Open tabs are unfinished thoughts waiting for later
          </h2>
          <Separator className="hidden sm:flex flex-1" />
        </div>
      </div>
    </motion.section>
  );
}
