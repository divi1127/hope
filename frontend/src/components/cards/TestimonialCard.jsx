import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'

export default function TestimonialCard({ testimonial }) {
  return (
    <motion.figure
      whileHover={{ y: -4 }}
      className="flex flex-col gap-4 rounded-3xl bg-white p-7 shadow-soft border border-ink/5"
    >
      <Quote
        className="h-8 w-8 text-secondary"
        aria-hidden="true"
      />
      <blockquote className="text-sm text-ink/75 leading-relaxed">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <div className="flex items-center gap-1" aria-label={`${testimonial.rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < testimonial.rating
                ? 'fill-accent text-accent'
                : 'text-ink/20'
            }`}
            aria-hidden="true"
          />
        ))}
      </div>
      <figcaption className="border-t border-ink/10 pt-4">
        <span className="block font-semibold text-sm">{testimonial.name}</span>
        <span className="block text-xs text-ink/60">{testimonial.role}</span>
      </figcaption>
    </motion.figure>
  )
}