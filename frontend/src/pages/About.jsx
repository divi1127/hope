import { motion } from 'framer-motion'
import { Check, HeartHandshake } from 'lucide-react'
import PageHero from '../components/common/PageHero'
import SectionHeading from '../components/common/SectionHeading'
import Button from '../components/common/Button'
import AnimatedSection from '../components/animations/AnimatedSection'
import CTASection from '../components/sections/CTASection'
import { useSEO } from '../hooks/useSEO'
import { pageMeta } from '../utils/seo'

const values = [
  {
    title: 'Compassion',
    description:
      'Every conversation begins from a place of kindness, never judgement.',
  },
  {
    title: 'Confidentiality',
    description:
      'Your privacy is protected. Your story stays with us, always.',
  },
  {
    title: 'Professionalism',
    description:
      'Care is delivered by trained, experienced professionals following structured practice.',
  },
  {
    title: 'Respect',
    description:
      'Every person is met as an individual with dignity and without labels.',
  },
  {
    title: 'Honesty',
    description:
      'We speak truthfully about what recovery involves — and what it does not.',
  },
  {
    title: 'Hope',
    description:
      'Recovery begins with hope, and we hold that hope with you from day one.',
  },
]

const highlights = [
  'Individualised, professional assessment',
  'Men\u2019s and women\u2019s recovery programs',
  'Counselling, therapy and medical support',
  'Family involvement and education',
  'Structured aftercare and continuing care',
  'A calm, safe and private environment',
]

export default function About() {
  useSEO(pageMeta['/about'])

  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A Place Built on Compassion, Structure and Hope"
        subtitle="Hope De-Addiction & Rehabilitation Centre exists for one reason — to help people rebuild their lives. We do that with professional care, genuine warmth and complete confidentiality."
      >
        <Button to="/appointment">Book a Consultation</Button>
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
              src="/images/about-healing.svg"
              alt="A calm counselling space at the centre"
              loading="lazy"
              className="w-full aspect-[4/3] object-cover"
            />
          </motion.div>
          <div>
            <SectionHeading
              eyebrow="Our Story"
              title="Why Hope Exists"
              align="left"
            />
            <div className="-mt-4 space-y-5 text-ink/70 leading-relaxed">
              <p>
                Every recovery journey is different. Some begin with a single,
                difficult phone call. Others begin after years of trying alone.
                At Hope, we believe the first step is not a sign of weakness —
                it is an act of courage.
              </p>
              <p>
                We combine professional care with a deeply human environment:
                structured programs, trained counsellors, therapy, wellness and
                family support — all delivered in a private, calm setting that
                feels nothing like a hospital.
              </p>
            </div>
            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-deep">
                    <Check className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                  <span className="text-sm text-ink/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What We Stand For"
            title="Our Values"
            subtitle="Six principles guide everything we do, from the first phone call to long-term aftercare."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: (index % 3) * 0.1 }}
                className="rounded-3xl bg-background border border-ink/5 p-7"
              >
                <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-deep">
                  <HeartHandshake className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="text-xl font-heading mb-2">{value.title}</h3>
                <p className="text-sm text-ink/70 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatedSection className="pt-16 md:pt-24">
        <CTASection />
      </AnimatedSection>
    </>
  )
}
