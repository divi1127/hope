import { motion } from 'framer-motion'
import { Expand } from 'lucide-react'

export default function FacilityCard({
  item,
  onClick,
  className = '',
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className={`group relative overflow-hidden rounded-3xl bg-white cursor-pointer shadow-soft border border-ink/5 ${className}`}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onClick?.()
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`View ${item.alt || item.title || 'facility image'}`}
    >
      <div className="overflow-hidden">
        <img
          src={item.src}
          alt={item.alt || item.title || 'Facility image'}
          loading="lazy"
          className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 flex items-end p-4 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="flex items-center justify-between w-full text-white">
          <div>
            <h3 className="font-heading text-lg leading-snug">
              {item.title}
            </h3>
            {item.category && (
              <p className="text-xs text-white/80">{item.category}</p>
            )}
          </div>
          <Expand className="h-5 w-5" aria-hidden="true" />
        </div>
      </div>
    </motion.div>
  )
}