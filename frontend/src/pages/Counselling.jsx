import { motion } from 'framer-motion'
import PageHero from '../components/common/PageHero'
import SectionHeading from '../components/common/SectionHeading'
import CTASection from '../components/sections/CTASection'
import { counsellingTypes } from '../data/programs'
import { teamMembers } from '../data/doctors'
import { getIcon } from '../utils/helpers'
import { useSEO } from '../hooks/useSEO'
import { pageMeta } from '../utils/seo'

export default function Counselling() {
  useSEO(pageMeta['/counselling'])

  const counsellors = teamMembers.filter(
    (member) => member.category === 'Counsellors',
  )

  return (
    <>
      <PageHero
        eyebrow="Counselling"
        title="Counselling, Delivered With Care"
        subtitle="Counselling at Hope happens in a confidential, non-judgmental space. Whatever the concern, you can speak freely and be heard."
      />

      <section className="py-16 md:py-24 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Approach"
          title="Counselling That Meets You Where You Are"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {counsellingTypes.map((item, index) => {
            const Icon = getIcon(item.icon)
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: (index % 3) * 0.1 }}
                className="rounded-3xl bg-white border border-ink/5 p-7 shadow-soft hover:border-accent/40 hover:shadow-lg transition-all"
              >
                <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-deep">
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </span>
                <h3 className="text-lg font-heading mb-2">{item.title}</h3>
                <p className="text-sm text-ink/70 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Meet Our Counsellors"
            title="People Who Listen, Properly"
            subtitle="Placeholder profiles — to be replaced with verified counsellor credentials."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {counsellors.map((counsellor, index) => (
              <motion.div
                key={counsellor.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: index * 0.1 }}
                className="rounded-3xl bg-background border border-ink/5 p-6 text-center"
              >
                <span className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-secondary/50 font-heading text-2xl text-deep">
                  {counsellor.name.charAt(0)}
                </span>
                <h3 className="text-lg font-heading">{counsellor.name}</h3>
                <p className="text-xs font-semibold text-accent uppercase tracking-wide mt-1">
                  {counsellor.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
