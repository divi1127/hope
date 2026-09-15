import { motion } from 'framer-motion'

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
}) {
  const alignClasses =
    align === 'center'
      ? 'text-center items-center'
      : 'text-left items-start'

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`flex flex-col gap-4 mb-12 ${alignClasses}`}
    >
      {eyebrow && (
        <span
          className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold w-fit ${
            light
              ? 'bg-white/20 text-primary'
              : 'bg-secondary/40 text-deep'
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl leading-tight ${
          light ? 'text-white' : ''
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-base md:text-lg max-w-2xl ${
            light ? 'text-white/80' : 'text-ink/70'
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}