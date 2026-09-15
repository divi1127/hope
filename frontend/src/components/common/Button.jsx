import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const variants = {
  primary:
    'bg-accent text-white hover:bg-deep transition-colors shadow-soft hover:shadow-lg',
  outline:
    'border-2 border-accent text-accent hover:bg-accent hover:text-white transition-colors',
  ghost:
    'text-ink/80 hover:text-accent transition-colors',
  light:
    'bg-white text-ink hover:bg-primary transition-colors',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

export default function Button({
  to,
  onClick,
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  icon: Icon,
  type = 'button',
  ariaLabel,
}) {
  const classes = `${variants[variant]} ${sizes[size]} inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-deep ${className}`

  const content = (
    <>
      {children}
      {Icon && <Icon className="h-5 w-5" aria-hidden="true" />}
    </>
  )

  if (to) {
    return (
      <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
        <Link to={to} className={classes} aria-label={ariaLabel}>
          {content}
        </Link>
      </motion.div>
    )
  }

  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      type={type}
      onClick={onClick}
      className={classes}
      aria-label={ariaLabel}
    >
      {content}
    </motion.button>
  )
}