'use client'

import { motion, useReducedMotion } from 'framer-motion'

import { Button } from '@/components/ui/button'
import { BrowserDemo } from '@/components/sections/BrowserDemo'

export function HeroSection({ chromeWebStoreUrl }: { chromeWebStoreUrl: string }) {
  const reduce = useReducedMotion();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: reduce ? undefined : { staggerChildren: 0.08, delayChildren: 0.05 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: reduce ? 0 : 14, filter: reduce ? 'blur(0px)' : 'blur(10px)' },
    show: { opacity: 1, y: 0, filter: 'blur(0px)' },
  };

  return (
    <section className="mx-auto max-w-6xl px-6 pb-14 pt-10 sm:pb-20 sm:pt-14">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.h1
            variants={item}
            className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl"
          >
            Save the thought.
            <br />
            Close the tab.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl"
          >
            Anchor saves the context you&apos;re afraid of losing.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button asChild size="lg" className="cursor-pointer text-primary-foreground bg-emerald-400 hover:bg-emerald-500">
              <a href={chromeWebStoreUrl} target="_blank" rel="noreferrer">
                Install for Chrome
              </a>
            </Button>

            <div className="text-xs text-muted-foreground">
              Free Chrome extension
              <span className="mx-2 text-muted-foreground/50">•</span>
              No dashboards
            </div>
          </motion.div>
        </motion.div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, scale: reduce ? 1 : 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative"
        >
          {/* subtle frame glow */}
          <div className="pointer-events-none absolute inset-0 -z-10 rounded-[28px] bg-muted/40 blur-2xl" />
          <BrowserDemo />
        </motion.div>
      </div>
    </section>
  );
}
