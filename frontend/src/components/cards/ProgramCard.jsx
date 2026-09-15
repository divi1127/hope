import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ProgramCard({ program, to }) {
  const Icon = program.icon

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 250, damping: 20 }}
      className="group relative rounded-3xl bg-white p-7 shadow-soft lg:shadow-sm-soft border border-ink/5 hover:border-accent/40 hover:shadow-lg transition-shadow"
    >
      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/50 text-deepmb-5 group-hover:bg-accent group-hover:text-white transition-colors">
        <Icon className="h-7 w-7" aria-hidden="true" />
      </span>
      <div className="h-1" />
      <h3 className="text-xl font-heading mb-2.5">{program.title}</h3>
      <p className="text-sm text-ink/70 leading-relaxed mb-5">
        {program.description}
      </p>
      {to && (
        <Link
          to={to}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent group-hover:gap-3 transition-all"
        >
          Learn More
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      )}
    </motion.div>
  )
}