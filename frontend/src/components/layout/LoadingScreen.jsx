import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 900)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
        >
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              rotate: [0, 360],
            }}
            transition={{
              scale: { duration: 1.5, repeat: Infinity, ease: 'easeInOut' },
              rotate: { duration: 2.5, repeat: Infinity, ease: 'linear' },
            }}
            className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border-4 border-secondary border-t-accent"
          />
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="font-heading text-4xl font-bold tracking-widest"
          >
            HOPE
          </motion.span>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-2 text-sm text-ink/60 tracking-wide"
          >
            Recovery begins with hope.
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}