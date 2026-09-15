import { motion } from 'framer-motion'
import PageHero from '../components/common/PageHero'
import Button from '../components/common/Button'
import ProgramCard from '../components/cards/ProgramCard'
import ProgramSelector from '../components/sections/ProgramSelector'
import CTASection from '../components/sections/CTASection'
import { recoveryPrograms } from '../data/programs'
import { useSEO } from '../hooks/useSEO'
import { pageMeta } from '../utils/seo'

const programLinks = {
  'de-addiction': '/recovery',
  alcohol: '/recovery/alcohol',
  drugs: '/recovery/drugs',
  smoking: '/recovery/smoking',
  counselling: '/counselling',
  therapy: '/therapy',
  family: '/family-support',
  rehabilitation: '/rehabilitation',
}

export default function Programs() {
  useSEO(pageMeta['/programs'])

  return (
    <>
      <PageHero
        eyebrow="Our Programs"
        title="Recovery Programs Designed Around You"
        subtitle="Whether you are beginning your journey or supporting someone you love, we offer structured, individualised programs in a private and respectful setting."
      >
        <Button to="/appointment">Book a Consultation</Button>
        <Button to="/recovery" variant="outline">
          Understand Recovery
        </Button>
      </PageHero>

      <ProgramSelector />

      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-heading mb-3">
              All Programs
            </h2>
            <p className="text-ink/70 max-w-2xl">
              Each program combines counselling, therapy, wellness and aftercare
              — personalised to you after a professional assessment.
            </p>
          </div>
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {recoveryPrograms.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: (index % 4) * 0.1 }}
              >
                <ProgramCard program={program} to={programLinks[program.id]} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
