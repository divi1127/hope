import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionHeading from '../common/SectionHeading'

export default function ProgramSelector() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Your Program"
          title="Choose the Support That Fits Your Needs"
          subtitle="Both programs follow the same values — compassion, structure and privacy — in environments tailored to your comfort."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            {
              to: '/programs/men',
              title: "Men's Program",
              desc: 'A structured, supportive recovery environment tailored to your journey.',
              accent: 'from-secondary/60 to-primary/40',
              short: 'M',
            },
            {
              to: '/programs/women',
              title: "Women's Program",
              desc: 'A private, respectful and supportive environment designed around you.',
              accent: 'from-primary/60 to-secondary/40',
              short: 'W',
            },
          ].map((card, index) => (
            <motion.div
              key={card.to}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group overflow-hidden rounded-[2.5rem] border border-ink/5 bg-white shadow-soft"
            >
              <div
                className={`h-40 bg-gradient-to-br ${card.accent} flex items-center justify-center`}
              >
                <span className="font-heading text-4xl text-ink/80">
                  {card.short}
                </span>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-heading mb-2">{card.title}</h3>
                <p className="text-sm text-ink/70 mb-6">{card.desc}</p>
                <Link
                  to={card.to}
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-deep hover:gap-3 transition-all shadow-soft"
                >
                  Explore the Program
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}