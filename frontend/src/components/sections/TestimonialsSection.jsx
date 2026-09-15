import { motion } from 'framer-motion'
import SectionHeading from '../common/SectionHeading'
import TestimonialCard from '../cards/TestimonialCard'
import { testimonials } from '../../data/testimonials'

export default function TestimonialsSection({ showAll = false }) {
  const items = showAll ? testimonials : testimonials.slice(0, 3)

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Stories of Hope"
          title="Real Journeys, Real Change"
          subtitle="Testimonials shown here are placeholder examples that will be replaced with approved feedback from residents and families."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: (index % 3) * 0.1 }}
            >
              <TestimonialCard testimonial={item} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}