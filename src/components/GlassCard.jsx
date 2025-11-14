import { motion } from 'framer-motion'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const glassBase =
  'backdrop-blur-xl bg-white/20 border border-white/30 shadow-[0_8px_32px_rgba(31,38,135,0.15)] rounded-2xl'

export default function GlassCard({ className = '', children, hover = true, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay }}
      whileHover={hover ? { y: -6, scale: 1.01 } : undefined}
      className={classNames(glassBase, 'p-6', className)}
    >
      {children}
    </motion.div>
  )
}
