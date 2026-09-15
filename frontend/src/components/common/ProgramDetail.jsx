import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import PageHero from './PageHero'
import Button from './Button'
import SectionHeading from './SectionHeading'
import CTASection from '../sections/CTASection'
import { getIcon } from '../../utils/helpers'
import { useSEO } from '../../hooks/useSEO'

export default function ProgramDetail({
  seoMeta = {},
  heroEyebrow = '',
  heroTitle = '',
  heroSubtitle = '',
  overview = { title: '', text: '', image: '', points: [] },
  sections = [],
  ctaButtonText = '',
  ctaButtonTo = '/appointment',
}) {
  useSEO(seoMeta)

  return (
    <>
      <PageHero
        eyebrow={heroEyebrow}
        title={heroTitle}
        subtitle={heroSubtitle}
      >
        <Button to={ctaButtonTo}>{ctaButtonText}</Button>
      </PageHero>

      <section className="py-16 md:py-24 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <SectionHeading
              eyebrow="Program Overview"
              title={overview.title}
              align="left"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-ink/70 leading-relaxed -mt-4 mb-7"
            >
              {overview.text}
            </motion.p>
            <ul className="flex flex-col gap-3">
              {overview.points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-deep">
                    <Check className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="text-sm md:text-base text-ink/80">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="overflow-hidden rounded-[2.5rem] shadow-lg"
          >
            <img
              src={overview.image}
              alt={overview.alt || 'Program environment'}
              loading="lazy"
              className="w-full aspect-[4/3] object-cover"
            />
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What It Includes"
            title="Built Around Your Recovery"
            subtitle="Respectful, structured support across every part of the journey."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((item, index) => {
              const Icon = getIcon(item.icon)
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.55, delay: (index % 3) * 0.1 }}
                  className="rounded-3xl bg-background border border-ink/5 p-7 hover:border-accent/40 hover:shadow-lg transition-all"
                >
                  <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/50 text-deep">
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
        </div>
      </section>

      <CTASection />
    </>
  )
}