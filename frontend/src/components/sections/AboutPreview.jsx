import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'
import SectionHeading from '../common/SectionHeading'
import Button from '../common/Button'

const checklist = [
  'Individualised recovery planning',
  'Physical, emotional and mental wellbeing',
  'Rebuilding relationships and trust',
  'Confidence and long-term lifestyle change',
  'Structured aftercare and continued support',
]

export default function AboutPreview() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="overflow-hidden rounded-[2.5rem] shadow-lg">
            <img
              src="/images/about-healing.svg"
              alt="A calm, supportive counselling space"
              loading="lazy"
              className="w-full aspect-[4/3] object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 rounded-3xl bg-accent text-white px-6 py-5 shadow-xl">
            <p className="font-heading text-3xl leading-none">10+</p>
            <p className="text-xs mt-1 text-white/85">Years of Care</p>
          </div>
        </motion.div>

        <div>
          <SectionHeading
            eyebrow="About Hope"
            title="Healing Is More Than Quitting. It Is Rebuilding Life."
            align="left"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-ink/70 leading-relaxed -mt-6 mb-8"
          >
            Addiction recovery is a journey involving physical wellbeing,
            emotional health, relationships, confidence and long-term lifestyle
            changes. We walk beside you through every step — with respect,
            privacy and professional care.
          </motion.p>

          <ul className="flex flex-col gap-3.5 mb-9">
            {checklist.map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 + index * 0.08 }}
                className="flex items-start gap-3"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-deep">
                  <Check className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="text-sm md:text-base text-ink/80">{item}</span>
              </motion.li>
            ))}
          </ul>

          <Button to="/about" variant="outline">
            Learn About Us
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </section>
  )
}