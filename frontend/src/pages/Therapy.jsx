import { motion } from 'framer-motion'
import PageHero from '../components/common/PageHero'
import SectionHeading from '../components/common/SectionHeading'
import CTASection from '../components/sections/CTASection'
import { therapyTypes } from '../data/programs'
import { getIcon } from '../utils/helpers'
import { useSEO } from '../hooks/useSEO'
import { pageMeta } from '../utils/seo'

export default function Therapy() {
  useSEO(pageMeta['/therapy'])

  return (
    <>
      <PageHero
        eyebrow="Therapy"
        title="Therapy That Supports Real Change"
        subtitle="Therapy at Hope uses structured, evidence-informed approaches built around your goals — without exaggerated promises."
      />

      <section className="py-16 md:py-24 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Approach"
          title="How We Work"
          subtitle="Therapy is individualised and honest. We do not promise guaranteed outcomes — we commit to professional, compassionate support."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {therapyTypes.map((item, index) => {
            const Icon = getIcon(item.icon)
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: (index % 3) * 0.1 }}
                className="group rounded-3xl bg-white border border-ink/5 p-8 shadow-soft hover:border-accent/40 hover:shadow-lg transition-all"
              >
                <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-deep group-hover:bg-accent group-hover:text-white transition-colors">
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
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center text-sm text-ink/60 max-w-2xl mx-auto"
        >
          Outcomes vary from person to person. Our commitment is to structured,
          honest and professional care — not guarantees.
        </motion.p>
      </section>

      <CTASection />
    </>
  )
}
