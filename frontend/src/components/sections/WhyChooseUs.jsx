import { motion } from 'framer-motion'
import SectionHeading from '../common/SectionHeading'
import { whyChooseUs } from '../../data/programs'
import { getIcon } from '../../utils/helpers'

export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Hope"
          title="Why Choose Hope"
          subtitle="A recovery centre built on compassion, structure and genuine care."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseUs.map((item, index) => {
            const Icon = getIcon(item.icon)
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.55,
                  delay: (index % 3) * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -6 }}
                className="rounded-3xl bg-background p-7 border border-ink/5 hover:border-accent/40 hover:shadow-lg transition-all"
              >
                <span className="flex h-14 w-14 mb-5 items-center justify-center rounded-2xl bg-primary text-deep">
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </span>
                <h3 className="text-xl font-heading mb-2">{item.title}</h3>
                <p className="text-sm text-ink/70 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}