'use client'

import { motion, useReducedMotion } from 'framer-motion'

export function Section({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : 16, filter: reduce ? 'blur(0px)' : 'blur(8px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.section>
  );
}
