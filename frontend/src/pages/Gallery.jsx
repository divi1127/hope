import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import PageHero from '../components/common/PageHero'
import CTASection from '../components/sections/CTASection'
import { galleryFilters, galleryImages } from '../data/facilities'
import { useSEO } from '../hooks/useSEO'
import { pageMeta } from '../utils/seo'

export default function Gallery() {
  useSEO(pageMeta['/gallery'])
  const [filter, setFilter] = useState('All')
  const [lightbox, setLightbox] = useState(null)

  const filtered =
    filter === 'All'
      ? galleryImages
      : galleryImages.filter((img) => img.category === filter)

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="A Look Inside Hope"
        subtitle="Facilities, wellness, activities and the calm environment that supports every recovery journey."
      />

      <section className="py-16 md:py-24 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className="flex flex-wrap justify-center gap-3 mb-12"
          role="tablist"
          aria-label="Gallery filters"
        >
          {galleryFilters.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              aria-pressed={filter === cat}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                filter === cat
                  ? 'bg-accent text-white shadow-soft'
                  : 'bg-white border border-ink/15 text-ink/70 hover:border-accent'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((img, index) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                className="mb-5 break-inside-avoid cursor-pointer overflow-hidden rounded-3xl group"
                onClick={() => setLightbox(img)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    setLightbox(img)
                  }
                }}
                role="button"
                tabIndex={0}
                aria-label={`View ${img.alt}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                    index % 3 === 0 ? 'aspect-[4/5]' : 'aspect-[4/3]'
                  }`}
                />
                <div className="absolute inset-0 flex items-end p-4 bg-gradient-to-t from-ink/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-white text-sm font-semibold">
                    {img.alt}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      <CTASection />

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-ink/85 backdrop-blur-sm p-4"
            onClick={() => setLightbox(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Full size image"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setLightbox(null)}
                aria-label="Close image"
                className="absolute -top-12 right-0 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
              <img
                src={lightbox.src}
                alt={lightbox.alt}
                className="w-full max-h-[80vh] object-contain rounded-2xl"
              />
              <p className="mt-4 text-center text-white/80 text-sm">
                {lightbox.alt}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
