import { motion } from 'framer-motion'
import PageHero from '../components/common/PageHero'
import Button from '../components/common/Button'
import TestimonialCard from '../components/cards/TestimonialCard'
import CTASection from '../components/sections/CTASection'
import { testimonials } from '../data/testimonials'
import { useSEO } from '../hooks/useSEO'
import { pageMeta } from '../utils/seo'

export default function Testimonials() {
  useSEO(pageMeta['/testimonials'])

  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        title="Stories From the Journey"
        subtitle="These are placeholder testimonials that will be replaced with approved feedback from residents and families."
      >
        <Button to="/appointment" variant="outline">
          Begin Your Journey
        </Button>
      </PageHero>

      <section className="py-16 md:py-24 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
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
      </section>

      <CTASection />
    </>
  )
}
