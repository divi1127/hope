import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import PageHero from '../components/common/PageHero'
import SectionHeading from '../components/common/SectionHeading'
import FAQAccordion from '../components/common/FAQAccordion'
import CTASection from '../components/sections/CTASection'
import { faqs } from '../data/faq'
import { useSEO } from '../hooks/useSEO'
import { pageMeta } from '../utils/seo'

const familySections = [
  {
    num: '01',
    title: 'Family Counselling',
    description:
      'Structured sessions that help families understand addiction, recovery and their role within it.',
  },
  {
    num: '02',
    title: 'Communication Support',
    description:
      'Practical help to communicate with honesty and warmth — without blame or guilt.',
  },
  {
    num: '03',
    title: 'Education',
    description:
      'Learning what addiction is, what recovery involves, and how to support it realistically.',
  },
  {
    num: '04',
    title: 'Boundaries',
    description:
      'Support in setting healthy, respectful boundaries that protect both the family and the recovery.',
  },
  {
    num: '05',
    title: 'Recovery Planning',
    description:
      'Working together on a plan that includes the family from early recovery to discharge.',
  },
  {
    num: '06',
    title: 'Aftercare Support',
    description:
      'Continuing guidance for families after the program, because recovery continues at home.',
  },
]

const familyFaq = faqs.filter(
  (faq) =>
    faq.question.toLowerCase().includes('family') ||
    faq.question.toLowerCase().includes('confident'),
)

export default function FamilySupport() {
  useSEO(pageMeta['/family-support'])

  return (
    <>
      <PageHero
        eyebrow="Family Support"
        title="Recovery Affects Families Too"
        subtitle="When one person enters recovery, the whole family begins a journey. We walk it with you."
      />

      <section className="py-16 md:py-24 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="overflow-hidden rounded-[2.5rem] shadow-lg"
          >
            <img
              src="/images/family-support.svg"
              alt="A family participating in a support session"
              loading="lazy"
              className="w-full aspect-[4/3] object-cover"
            />
          </motion.div>
          <div>
            <SectionHeading
              eyebrow="For Families"
              title="You Are Part of the Recovery"
              align="left"
            />
            <div className="-mt-4 space-y-4 text-ink/70 leading-relaxed">
              <p>
                Families carry a lot during addiction — worry, uncertainty,
                exhaustion and often guilt. At Hope we believe families deserve
                support too, not just information.
              </p>
              <p>
                Through counselling, education and honest conversation, we help
                families understand what is happening and how to support
                recovery without burning out themselves.
              </p>
            </div>
          </div>
        </div>

        <SectionHeading
          eyebrow="How We Support Families"
          title="A Pathway for the Whole Family"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {familySections.map((item, index) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: (index % 3) * 0.1 }}
              className="rounded-3xl bg-white border border-ink/5 p-7 shadow-soft hover:border-accent/40 transition-all"
            >
              <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent text-white font-heading font-bold">
                {item.num}
              </span>
              <h3 className="text-lg font-heading mb-2">{item.title}</h3>
              <p className="text-sm text-ink/70 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Family Questions"
            title="Answers for Families"
          />
          <FAQAccordion faqs={familyFaq} />
          <div className="mt-8 text-center text-sm text-ink/60">
            <p className="inline-flex items-start gap-2">
              <Check className="h-4 w-4 mt-0.5 text-accent" aria-hidden="true" />
              If your question is not here, reach out — we are always happy to
              help.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
