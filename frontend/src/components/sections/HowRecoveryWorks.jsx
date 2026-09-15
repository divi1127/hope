import { motion } from 'framer-motion'
import SectionHeading from '../common/SectionHeading'
import { recoveryJourneySteps } from '../../data/programs'

export default function HowRecoveryWorks() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The Journey"
          title="How Recovery Works"
          subtitle="A clear, staged journey — guided by professionals, shaped around you."
        />
        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-6 hidden md:block h-0.5 bg-secondary"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {recoveryJourneySteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.55,
                  delay: (index % 3) * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative bg-background rounded-3xl border border-ink/5 p-7"
              >
                <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-white font-heading text-lg font-bold shadow-soft">
                  {step.number}
                </span>
                <h3 className="mt-4 text-lg font-heading">{step.title}</h3>
                <p className="mt-2 text-sm text-ink/70 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}