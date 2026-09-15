import { motion } from 'framer-motion'

export default function PageHero({ title, subtitle, eyebrow, children }) {
  return (
    <section className="relative overflow-hidden bg-background pt-32 pb-16 md:pt-40 md:pb-20">
      <div
        aria-hidden="true"
        className="organic-shape top-[-6rem] right-[-4rem] h-80 w-80 bg-primary/50"
      />
      <div
        aria-hidden="true"
        className="organic-shape bottom-[-8rem] left-[-6rem] h-96 w-96 bg-secondary/40"
      />
      <div
        aria-hidden="true"
        className="organic-shape top-24 left-1/3 h-24 w-24 bg-accent/20"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {eyebrow && (
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/40 text-deep text-sm font-semibold mb-6"
            >
              {eyebrow}
            </motion.span>
          )}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl leading-tight"
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-5 text-lg md:text-xl text-ink/70 max-w-2xl"
            >
              {subtitle}
            </motion.p>
          )}
          {children && (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              {children}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}