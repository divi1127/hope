import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function CounsellingPreview() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div
        aria-hidden="true"
        className="organic-shape top-10 left-[-6rem] h-64 w-64 bg-primary/30"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/40 text-deep text-sm font-semibold"
            >
              Counselling
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-heading leading-tight mb-5"
            >
              A Listening Ear Makes All the Difference
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-ink/70 leading-relaxed mb-8"
            >
              Individual counselling, group sessions and family meetings — all
              held in a confidential, judgement-free space. Whatever your
              story, you can share it here without fear.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="/counselling"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 font-semibold text-white hover:bg-deep hover:gap-3 transition-all shadow-soft"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                Explore Counselling
              </Link>
              <Link
                to="/appointment"
                className="inline-flex items-center gap-2 rounded-full border-2 border-accent px-8 py-4 font-semibold text-accent hover:bg-accent hover:text-white transition-colors"
              >
                Book a Session
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="overflow-hidden rounded-[2.5rem] shadow-lg order-last"
          >
            <img
              src="/images/counselling-session.svg"
              alt="A calm counselling session at the centre"
              loading="lazy"
              className="w-full aspect-[4/3] object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}