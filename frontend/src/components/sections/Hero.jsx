import { motion } from 'framer-motion'
import { HeartHandshake, ArrowRight } from 'lucide-react'
import Button from '../common/Button'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 md:pt-32 pb-12 md:pb-16 min-h-[70vh] md:min-h-[75vh] flex items-center">
      <div
        aria-hidden="true"
        className="organic-shape -top-24 right-[-8rem] h-72 w-72 md:h-[26rem] md:w-[26rem] bg-primary/30 animate-float"
      />
      <div
        aria-hidden="true"
        className="organic-shape top-1/3 left-[-10rem] h-64 w-64 md:h-[22rem] md:w-[22rem] bg-secondary/25"
      />
      <div
        aria-hidden="true"
        className="organic-shape bottom-[-4rem] right-[25%] h-40 w-40 md:h-48 md:w-48 bg-accent/10 animate-float [animation-delay:2s]"
      />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.span
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="inline-flex items-center gap-2 rounded-full bg-secondary/40 px-4 py-1.5 text-sm font-semibold text-deep"
        >
          <HeartHandshake className="h-4 w-4" aria-hidden="true" />
          Professional Recovery &amp; Rehabilitation
        </motion.span>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight"
        >
          A New Beginning Starts With <span className="text-gradient">Hope.</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="mt-4 text-base md:text-lg text-ink/70 max-w-2xl mx-auto"
        >
          Compassionate, confidential and structured recovery programs
          designed to help individuals rebuild their lives with confidence.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
          className="mt-6 flex flex-wrap justify-center gap-4"
        >
          <Button to="/programs" size="md">
            Explore Programs
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </Button>
          <Button to="/counselling" variant="outline" size="md">
            Talk to a Counsellor
          </Button>
        </motion.div>
      </div>
    </section>
  )
}