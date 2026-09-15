import { useState } from 'react'
import { motion } from 'framer-motion'
import PageHero from '../components/common/PageHero'
import Modal from '../components/common/Modal'
import CTASection from '../components/sections/CTASection'
import { facilityCategories } from '../data/programs'
import { galleryImages } from '../data/facilities'
import { getIcon } from '../utils/helpers'
import { useSEO } from '../hooks/useSEO'
import { pageMeta } from '../utils/seo'

function imageFor(id) {
  if (id === 'comfortable-rooms') return galleryImages[0]
  if (id === 'counselling-rooms') return galleryImages[2]
  if (id === 'dining-area') return galleryImages[5]
  if (id === 'meditation-space') return galleryImages[1]
  if (id === 'fitness-area') return galleryImages[9]
  if (id === 'outdoor-space') return galleryImages[7]
  if (id === 'recreation-area') return galleryImages[10]
  return galleryImages[3]
}

export default function Facilities() {
  useSEO(pageMeta['/facilities'])
  const [lightboxItem, setLightboxItem] = useState(null)

  return (
    <>
      <PageHero
        eyebrow="Our Facilities"
        title="A Calm, Safe Place to Heal"
        subtitle="Thoughtfully designed spaces that support rest, reflection, wellness and recovery."
      />

      <section className="py-16 md:py-24 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilityCategories.map((facility, index) => {
            const Icon = getIcon(facility.icon)
            const image = imageFor(facility.id)
            return (
              <motion.div
                key={facility.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: (index % 4) * 0.1 }}
                whileHover={{ y: -4 }}
                className="group cursor-pointer overflow-hidden rounded-3xl bg-white border border-ink/5 shadow-soft"
                onClick={() => setLightboxItem(image)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    setLightboxItem(image)
                  }
                }}
                role="button"
                tabIndex={0}
                aria-label={`Open ${facility.title} image`}
              >
                <div className="overflow-hidden">
                  <img
                    src={image.src}
                    alt={facility.title}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-heading text-lg flex items-center gap-2">
                    <Icon className="h-5 w-5 text-deep" aria-hidden="true" />
                    {facility.title}
                  </h3>
                  <p className="text-sm text-ink/65 mt-1.5">
                    {facility.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>

      <CTASection />

      <Modal
        open={!!lightboxItem}
        onClose={() => setLightboxItem(null)}
        label="Facility photo"
      >
        {lightboxItem && (
          <img
            src={lightboxItem.src}
            alt={lightboxItem.alt}
            className="w-full aspect-[4/3] object-cover rounded-2xl"
          />
        )}
      </Modal>
    </>
  )
}
