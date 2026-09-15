import { motion } from 'framer-motion'
import { Phone } from 'lucide-react'

export default function TeamCard({ member }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="group rounded-3xl bg-white p-6 shadow-soft border border-ink/5 text-center"
    >
      <span className="mx-auto block h-24 w-24 rounded-full bg-secondary/50 flex items-center justify-center font-heading text-3xl text-deep mb-4 group-hover:bg-primary transition-colors">
        {member.name.charAt(0)}
      </span>
      <h3 className="text-lg font-heading">{member.name}</h3>
      <p className="text-xs font-semibold text-accent uppercase tracking-wide mt-1">
        {member.role}
      </p>
      <p className="text-sm text-ink/70 mt-3 leading-relaxed">
        {member.bio}
      </p>
      <p className="mt-4 inline-flex items-center gap-1.5 text-sm text-deep opacity-0 group-hover:opacity-100 transition-opacity">
        <Phone className="h-4 w-4" aria-hidden="true" />
        Contact via centre
      </p>
    </motion.div>
  )
}