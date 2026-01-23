'use client'

import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

function easeOut() {
  return [0.21, 0.47, 0.32, 0.98] as const
}

/**
 * BrowserDemo
 * Calm 3-beat loop:
 * 1) highlight appears
 * 2) "Anchor saved" toast appears
 * 3) tab/page gently “lets go” (soft fade/scale)
 *
 * Also includes a subtle parallax drift on the background glow based on scroll.
 */
export function BrowserDemo() {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  // tiny parallax motion for the ambient blob behind the window
  const blobY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [10, -10])
  const blobX = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [-8, 8])

  return (
    <div ref={ref} className="relative">
      {/* ambient glow */}
      <motion.div
        style={{ x: blobX, y: blobY }}
        aria-hidden
        className="pointer-events-none absolute -inset-8 -z-10 rounded-[36px] bg-muted/45 blur-3xl overflow-hidden"
      />

      {/* "window" */}
      <motion.div
        className="relative overflow-hidden rounded-[28px] border bg-background/70 shadow-sm backdrop-blur"
        initial={{ opacity: 0, y: reduce ? 0 : 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: easeOut() }}
      >
        {/* top chrome */}
        <div className="flex items-center gap-2 border-b px-4 py-3">
          <div className="flex items-center gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: '#FF5F57' }} />
            <div className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: '#FFBD2E' }} />
            <div className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: '#28CA42' }} />
          </div>

          <div className="ml-3 h-7 flex-1 rounded-lg border bg-background/80 px-3 flex items-center text-xs text-muted-foreground">
            https://dropanchor.ai
          </div>
          <div className="h-7 w-10 rounded-lg border bg-background/80" />
        </div>

        {/* content area with looping sequence */}
        <motion.div
          className="relative p-7 sm:p-8"
          // loop: 0s → 4.8s + delay, then repeat
          animate={
            reduce
              ? undefined
              : {
                  opacity: [1, 1, 1, 0.94, 1],
                  scale: [1, 1, 1, 0.985, 1],
                }
          }
          transition={
            reduce
              ? undefined
              : {
                  duration: 6.2,
                  times: [0, 0.4, 0.62, 0.78, 1],
                  repeat: Infinity,
                  repeatDelay: 1.4,
                  ease: 'easeInOut',
                }
          }
        >
          <div className="space-y-4 text-sm leading-relaxed text-foreground/90">
            <p className="text-muted-foreground">Reading</p>
            <p>
              We keep tabs open because we&apos;re afraid we&apos;ll lose something important —
              a thought, a quote, a detail we&apos;ll need later.
            </p>

            <p>
              Anchor makes it safe to{' '}
              <HighlightLoop reduce={reduce ?? false}>close the tab</HighlightLoop>
              without losing the context.
            </p>

            <p className="text-muted-foreground">
              Small. Quiet. Always there when you need it.
            </p>
          </div>

          <SavedToast reduce={reduce ?? false} />
        </motion.div>
      </motion.div>
    </div>
  );
}

function HighlightLoop({ children, reduce }: { children: React.ReactNode; reduce: boolean }) {
  // A “marker swipe” highlight that loops in sync with the demo.
  return (
    <motion.span
      className="rounded-sm px-1 inline-block"
      style={{
        backgroundImage: 'linear-gradient(to bottom, rgba(148,163,184,0.55), rgba(148,163,184,0.55))',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '0% 100%',
        backgroundPosition: 'left center',
      }}
      animate={
        reduce
          ? { backgroundSize: '100% 100%' }
          : { backgroundSize: ['0% 100%', '100% 100%', '100% 100%', '0% 100%'] }
      }
      transition={
        reduce
          ? { duration: 0.1 }
          : { duration: 6.2, times: [0, 0.22, 0.7, 1], repeat: Infinity, repeatDelay: 1.4, ease: easeOut() }
      }
    >
      {children}
    </motion.span>
  )
}

function SavedToast({ reduce }: { reduce: boolean }) {
  return (
    <motion.div
      className="absolute bottom-5 right-5 rounded-xl border bg-background/85 px-3 py-2 text-xs text-foreground shadow-sm backdrop-blur"
      initial={{ opacity: 0, y: 6, filter: "blur(6px)" }}
      animate={
        reduce
          ? { opacity: 1, y: 0, filter: "blur(0px)" }
          : {
              opacity: [0, 0, 1, 1, 0],
              y: [6, 6, 0, 0, 6],
              filter: ["blur(6px)", "blur(6px)", "blur(0px)", "blur(0px)", "blur(6px)"],
            }
      }
      transition={
        reduce
          ? { duration: 0.3 }
          : {
              duration: 6.2,
              times: [0, 0.28, 0.36, 0.72, 1],
              repeat: Infinity,
              repeatDelay: 1.4,
              ease: easeOut(),
            }
      }
    >
      <div className="flex items-center gap-2">
        <span className="inline-block h-2 w-2 rounded-full bg-emerald-300/60" />
        <span>Anchor saved</span>
      </div>
      <div className="mt-0.5 text-muted-foreground">You can close this tab now.</div>
    </motion.div>
  );
}
