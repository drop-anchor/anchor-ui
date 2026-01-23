'use client'

import { motion } from 'framer-motion'

export function StepCard({
  number,
  title,
  body,
}: {
  number: string;
  title: string;
  body: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="rounded-2xl border bg-background/60 p-5 shadow-sm backdrop-blur"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs text-muted-foreground">{number}</p>
          <h3 className="mt-2 text-base font-semibold tracking-tight">{title}</h3>
        </div>
        <div className="h-9 w-9 rounded-xl border bg-muted/40" />
      </div>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
    </motion.div>
  );
}
