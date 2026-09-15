import { motion } from 'framer-motion'
import PageHero from '../components/common/PageHero'
import SectionHeading from '../components/common/SectionHeading'
import CTASection from '../components/sections/CTASection'
import { rehabilitationAreas } from '../data/programs'
import { getIcon } from '../utils/helpers'
import { useSEO } from '../hooks/useSEO'
import { pageMeta } from '../utils/seo'

export default function Rehabilitation() {
  useSEO(pageMeta['/rehabilitation'])

  return (
    <>
      <PageHero
        eyebrow="Rehabilitation"
        title="Holistic Rehabilitation, Seven Ways"
        subtitle="Rehabilitation is not just about stopping a substance. It is about rebuilding health across the whole of life."
      />

      <section className="py-16 md:py-24 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Approach"
          title="Wellness in the Round"
          subtitle="Each area below is woven into daily life at Hope, helping you build a genuinely sustainable new pattern of living."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rehabilitationAreas.map((item, index) => {
            const Icon = getIcon(item.icon)
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                className="group flex flex-col items-center rounded-3xl bg-white border border-ink/5 p-8 text-center hover:border-accent/40 hover:shadow-lg transition-all"
              >
                <span className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-primary/50 text-deep group-hover:bg-accent group-hover:text-white transition-colors">
                  <Icon className="h-10 w-10" aria-hidden="true" />
                </span>
                <h3 className="text-xl font-heading mb-2">{item.title}</h3>
                <p className="text-sm text-ink/70 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 rounded-[2.5rem] bg-ink text-white px-8 md:px-14 py-12 text-center"
        >
          <h2 className="text-2xl md:text-4xl font-heading mb-4">
            Approved and realistic care. No guarantees. Just genuine support.
          </h2>
          <p className="mx-auto max-w-2xl text-white/70">
            We believe in honest communication about what recovery involves and
            what it does not. Our promise is professional, compassionate and
            structured care.
          </p>
        </motion.div>
      </section>

      <CTASection />
    </>
  )
}
