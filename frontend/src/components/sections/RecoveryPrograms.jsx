import { motion } from 'framer-motion'
import SectionHeading from '../common/SectionHeading'
import ProgramCard from '../cards/ProgramCard'
import { recoveryPrograms } from '../../data/programs'

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

export default function RecoveryPrograms() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Programs"
          title="Recovery Programs Designed Around You"
          subtitle="Every program is individualised following professional assessment. No journey looks exactly like another."
        />
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {recoveryPrograms.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.55,
                delay: (index % 4) * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <ProgramCard program={program} to={programLinks[program.id]} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}