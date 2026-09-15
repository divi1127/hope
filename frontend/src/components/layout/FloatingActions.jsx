import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CalendarCheck, MessageCircle, Phone, Plus, Siren } from 'lucide-react'
import { Link } from 'react-router-dom'

const actions = [
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    href: '#',
    icon: MessageCircle,
    color: 'bg-[#25D366]',
  },
  {
    id: 'call',
    label: 'Call',
    href: 'tel:+910000000000',
    icon: Phone,
    color: 'bg-accent',
  },
  {
    id: 'appointment',
    label: 'Appointment',
    to: '/appointment',
    icon: CalendarCheck,
    color: 'bg-deep',
  },
  {
    id: 'emergency',
    label: 'Emergency',
    to: '/emergency-help',
    icon: Siren,
    color: 'bg-ink',
  },
]

export default function FloatingActions() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = ''
  }, [])

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <>
            {actions.map((action, index) => (
              <motion.div
                key={action.id}
                initial={{ opacity: 0, y: 16, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 16, scale: 0.8 }}
                transition={{ delay: (actions.length - index) * 0.05 }}
              >
                {action.to ? (
                  <Link
                    to={action.to}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-2 pl-4 pr-5 py-2.5 rounded-full bg-background shadow-lg border border-ink/10 hover:border-accent transition-colors text-sm font-semibold"
                  >
                    <span
                      className={`flex h-9 w-9 items-center justify-center rounded-full ${action.color} text-white`}
                    >
                      <action.icon className="h-4.5 w-4.5" aria-hidden="true" />
                    </span>
                    {action.label}
                  </Link>
                ) : (
                  <a
                    href={action.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-2 pl-4 pr-5 py-2.5 rounded-full bg-background shadow-lg border border-ink/10 hover:border-accent transition-colors text-sm font-semibold"
                  >
                    <span
                      className={`flex h-9 w-9 items-center justify-center rounded-full ${action.color} text-white`}
                    >
                      <action.icon className="h-4.5 w-4.5" aria-hidden="true" />
                    </span>
                    {action.label}
                  </a>
                )}
              </motion.div>
            ))}
          </>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={() => setOpen((v) => !v)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white shadow-lg shadow-accent/30"
        aria-label={open ? 'Close quick actions' : 'Open quick actions'}
        aria-expanded={open}
      >
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <Plus className="h-6 w-6" />
        </motion.span>
      </motion.button>
    </div>
  )
}