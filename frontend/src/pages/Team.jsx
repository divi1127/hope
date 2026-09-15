import { useState } from 'react'
import { motion } from 'framer-motion'
import PageHero from '../components/common/PageHero'
import CTASection from '../components/sections/CTASection'
import TeamCard from '../components/cards/TeamCard'
import { teamCategories, teamMembers } from '../data/doctors'
import { useSEO } from '../hooks/useSEO'
import { pageMeta } from '../utils/seo'

export default function Team() {
  useSEO(pageMeta['/team'])
  const [category, setCategory] = useState('All')

  const filtered =
    category === 'All'
      ? teamMembers
      : teamMembers.filter((member) => member.category === category)

  return (
    <>
      <PageHero
        eyebrow="Our Team"
        title="The People Behind Hope"
        subtitle="Counsellors, therapists, medical professionals and support staff working together around each recovery journey. Profiles shown are placeholders for the frontend."
      />

      <section className="py-16 md:py-24 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className="flex flex-wrap justify-center gap-3 mb-12"
          role="tablist"
          aria-label="Team categories"
        >
          {teamCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setCategory(cat)}
              aria-pressed={category === cat}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                category === cat
                  ? 'bg-accent text-white shadow-soft'
                  : 'bg-white border border-ink/15 text-ink/70 hover:border-accent'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: (index % 4) * 0.1 }}
            >
              <TeamCard member={member} />
            </motion.div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  )
}
