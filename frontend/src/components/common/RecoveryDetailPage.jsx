import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import PageHero from './PageHero'
import Button from './Button'
import SectionHeading from './SectionHeading'
import CTASection from '../sections/CTASection'
import { useSEO } from '../../hooks/useSEO'

export default function RecoveryDetailPage({
  seoMeta = {},
  heroEyebrow = '',
  heroTitle = '',
  heroSubtitle = '',
  introImage = '/images/about-healing.svg',
  introAlt = 'Recovery support at Hope',
  sections = [],
  ctaButtonText = 'Talk to Our Team',
}) {
  useSEO(seoMeta)

  return (
    <>
      <PageHero
        eyebrow={heroEyebrow}
        title={heroTitle}
        subtitle={heroSubtitle}
      >
        <Button to="/appointment">{ctaButtonText}</Button>
      </PageHero>

      <section className="py-16 md:py-24 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="overflow-hidden rounded-[2.5rem] shadow-lg"
          >
            <img
              src={introImage}
              alt={introAlt}
              loading="lazy"
              className="w-full aspect-[4/3] object-cover"
            />
          </motion.div>
          <div>
            <h2 className="text-3xl md:text-4xl font-heading mb-4">
              A Compassionate, Individualised Approach
            </h2>
            <p className="text-ink/70 leading-relaxed">
              Every person who reaches out for support is treated with respect
              and without judgement. Care is always individualised following a
              professional assessment. The goal is not simply to stop using a
              substance, but to build the skills, routine and confidence for a
              sustainable new life.
            </p>
            <p className="mt-4 text-ink/70 leading-relaxed">
              Treatment plans are individualised following professional
              assessment.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What Recovery Includes"
            title="Structured Care, Step by Step"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: (index % 3) * 0.1 }}
                className="rounded-3xl bg-background border border-ink/5 p-7 hover:border-accent/40 hover:shadow-lg transition-all"
              >
                <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-deep">
                  <Check className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="text-lg font-heading mb-2">{item.title}</h3>
                <p className="text-sm text-ink/70 leading-relaxed">
                  {item.description}
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