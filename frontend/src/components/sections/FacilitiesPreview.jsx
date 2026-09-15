import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionHeading from '../common/SectionHeading'

const preview = [
  {
    src: '/images/facility-room.svg',
    title: 'Comfortable Rooms',
    alt: 'Comfortable, calm room at the facility',
  },
  {
    src: '/images/meditation-garden.svg',
    title: 'Meditation Space',
    alt: 'Peaceful meditation space surrounded by greenery',
  },
  {
    src: '/images/yoga-session.svg',
    title: 'Wellness Area',
    alt: 'Group wellness and yoga session',
  },
  {
    src: '/images/dining-area.svg',
    title: 'Dining Area',
    alt: 'Bright shared dining area',
  },
]

export default function FacilitiesPreview() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="Our Facilities"
            title="A Calm, Safe Place to Heal"
            subtitle="Thoughtfully designed spaces that support rest, reflection and recovery."
            align="left"
          />
          <Link
            to="/facilities"
            className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all shrink-0"
          >
            View All Facilities
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {preview.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.55,
                delay: (index % 2) * 0.12,
              }}
              className="group overflow-hidden rounded-3xl border border-ink/5 shadow-soft"
            >
              <div className="overflow-hidden">
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5 bg-white">
                <h3 className="text-lg font-heading">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}