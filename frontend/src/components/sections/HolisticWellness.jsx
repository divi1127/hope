import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionHeading from '../common/SectionHeading'
import { rehabilitationAreas } from '../../data/programs'
import { getIcon } from '../../utils/helpers'

export default function HolisticWellness() {
  return (
    <section className="py-20 md:py-28 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          aria-hidden="true"
          className="organic-shape top-1/3 right-[-8rem] h-72 w-72 bg-primary/30"
        />
        <SectionHeading
          eyebrow="Holistic Wellness"
          title="Recovery of the Whole Person"
          subtitle="Sustainable recovery touches the mind, the body and the way we live."
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {rehabilitationAreas.map((item, index) => {
            const AreaIcon = getIcon(item.icon)
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.5,
                  delay: (index % 4) * 0.1,
                }}
                className="group flex flex-col items-center gap-3 rounded-3xl bg-white border border-ink/5 p-7 text-center hover:border-accent/40 hover:shadow-lg transition-all"
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/50 text-deep group-hover:bg-accent group-hover:text-white transition-colors">
                  <AreaIcon className="h-8 w-8" aria-hidden="true" />
                </span>
                <h3 className="font-heading text-lg">{item.title}</h3>
                <p className="text-xs text-ink/60 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            )
          })}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/rehabilitation"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 font-semibold text-white hover:bg-deep hover:gap-3 transition-all shadow-soft"
          >
            Learn About Rehabilitation
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}