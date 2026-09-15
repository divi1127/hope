import { motion } from 'framer-motion'
import { HeartHandshake } from 'lucide-react'
import Button from '../common/Button'

export default function CTASection() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-[2.5rem] bg-ink text-white px-8 md:px-16 py-14 md:py-20 text-center"
      >
        <div
          aria-hidden="true"
          className="organic-shape top-[-5rem] left-[-4rem] h-72 w-72 bg-accent/20"
        />
        <div
          aria-hidden="true"
          className="organic-shape bottom-[-6rem] right-[-5rem] h-80 w-80 bg-deep/30"
        />
        <div className="relative">
          <span className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent">
            <HeartHandshake className="h-8 w-8" aria-hidden="true" />
          </span>
          <h2 className="text-3xl md:text-5xl font-heading mb-4">
            Your First Step Today.
          </h2>
          <p className="mx-auto max-w-2xl text-white/75 text-base md:text-lg mb-9">
            A confidential conversation costs nothing — and it might be the
            most important step you take. Reach out whenever you are ready.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button to="/appointment" variant="primary" size="lg">
              Book a Consultation
            </Button>
            <Button to="/contact" variant="light" size="lg">
              Talk to Us Confidentially
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  )
}