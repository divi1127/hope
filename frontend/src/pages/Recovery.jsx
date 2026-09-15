import { motion } from 'framer-motion'
import { Lightbulb } from 'lucide-react'
import PageHero from '../components/common/PageHero'
import SectionHeading from '../components/common/SectionHeading'
import CTASection from '../components/sections/CTASection'
import { useSEO } from '../hooks/useSEO'
import { pageMeta } from '../utils/seo'

const understandingPoints = [
  'Addiction is a complex condition, not a failure of willpower',
  'It affects the brain, behaviour, relationships and daily life',
  'It is often connected with stress, mental health and circumstances',
  'People can and do recover, especially with the right support',
]

export default function Recovery() {
  useSEO(pageMeta['/recovery'])

  return (
    <>
      <PageHero
        eyebrow="Recovery"
        title="Understanding Addiction, Honestly and Without Judgement"
        subtitle="Recovery is not about blame — it is about understanding, structure and hope. Here is how we see it, and how the journey works."
      />

      <section className="py-16 md:py-24 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div className="order-2 lg:order-1">
            <SectionHeading
              eyebrow="Understanding Addiction"
              title="What Is Addiction?"
              align="left"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="-mt-4 text-ink/70 leading-relaxed mb-7"
            >
              Addiction describes a situation where a person finds it
              increasingly difficult to stop using a substance or engaging in a
              behaviour, even when it causes harm. It is complex and personal.
              It grows quietly, affects families, and is very rarely a choice —
              which is exactly why recovery must begin with understanding, not
              judgement.
            </motion.p>
            <ul className="flex flex-col gap-3.5">
              {understandingPoints.map((point, index) => (
                <motion.li
                  key={point}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary/60 text-deep">
                    <Lightbulb className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="text-sm md:text-base text-ink/80">
                    {point}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-1 lg:order-2 overflow-hidden rounded-[2.5rem] shadow-lg"
          >
            <img
              src="/images/recovery-journey.svg"
              alt="A quiet walking path symbolising the recovery journey"
              loading="lazy"
              className="w-full aspect-[4/3] object-cover"
            />
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="The Journey"
            title="The Recovery Journey"
            subtitle="Six clear stages guide every recovery path — each one individualised to the person at the centre of it."
          />
          <div className="flex flex-col gap-5 max-w-4xl mx-auto">
            {[
              {
                num: '01',
                title: 'Initial Assessment',
                desc: 'A confidential conversation about your history, health and goals. No judgement, no pressure.',
              },
              {
                num: '02',
                title: 'Stabilization',
                desc: 'A calm, safe start with appropriate medical and emotional support.',
              },
              {
                num: '03',
                title: 'Counselling & Therapy',
                desc: 'Structured sessions to understand and work through underlying concerns.',
              },
              {
                num: '04',
                title: 'Skill Building',
                desc: 'Practical life skills, routine and coping strategies for everyday life.',
              },
              {
                num: '05',
                title: 'Family Support',
                desc: 'Involving family where helpful to rebuild trust and communication.',
              },
              {
                num: '06',
                title: 'Aftercare',
                desc: 'Continuing support and relapse-prevention planning beyond the program.',
              },
            ].map((step, index) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: index % 2 ? 24 : -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: index * 0.06 }}
                className="flex gap-5 items-start rounded-3xl bg-background border border-ink/5 p-6"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent text-white font-heading font-bold">
                  {step.num}
                </span>
                <div>
                  <h3 className="text-lg font-heading mb-1">{step.title}</h3>
                  <p className="text-sm text-ink/70">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="pt-16 md:pt-24">
        <CTASection />
      </div>
    </>
  )
}
