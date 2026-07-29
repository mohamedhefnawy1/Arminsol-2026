import { motion, useReducedMotion } from 'framer-motion'

// Scroll-triggered reveal — mimics the Framer "appear / fade-up" effect.
// The CSS prefers-reduced-motion rule can't reach framer-motion's JS animations,
// so honour the setting here: render the content plainly, already visible.
export default function Reveal({ children, delay = 0, y = 28, as = 'div', className }) {
  const reduce = useReducedMotion()
  const MotionTag = motion[as] || motion.div

  if (reduce) return <MotionTag className={className}>{children}</MotionTag>

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  )
}
