import { motion } from 'framer-motion'
import { ArrowRight, Users } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function FamilySupportPreview() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative order-2 lg:order-1"
          >
            <div className="overflow-hidden rounded-[2.5rem] shadow-lg">
              <img
                src="/images/family-visit.svg"
                alt="A family support session in progress"
                loading="lazy"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
            <div className="absolute -top-6 -left-4 rounded-3xl bg-primary px-6 py-5 shadow-xl">
              <span className="flex items-center gap-2 font-heading text-lg text-ink">
                <Users className="h-6 w-6 text-deep" aria-hidden="true" />
                Family Support
              </span>
            </div>
          </motion.div>

          <div className="order-1 lg:order-2">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/40 text-deep text-sm font-semibold"
            >
              Families Grow Too
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-heading leading-tight mb-5"
            >
              Recovery Affects Families Too
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-ink/70 leading-relaxed mb-8"
            >
              Families are never left out of the journey at Hope. Through
              family counselling, education and communication support, we help
              the people who care most understand recovery and play a healthy,
              supportive role in it.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link
                to="/family-support"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 font-semibold text-white hover:bg-deep hover:gap-3 transition-all shadow-soft"
              >
                Family Support at Hope
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}