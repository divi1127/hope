import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, Phone, Plus, X } from 'lucide-react'
import Button from '../common/Button'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Programs', to: '/programs' },
  { label: 'Recovery', to: '/recovery' },
  { label: 'Facilities', to: '/facilities' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Resources', to: '/blog' },
]

const mobileNavItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Programs', to: '/programs' },
  { label: "Men's Program", to: '/programs/men' },
  { label: "Women's Program", to: '/programs/women' },
  { label: 'Recovery', to: '/recovery' },
  { label: 'Alcohol Recovery', to: '/recovery/alcohol' },
  { label: 'Drug Recovery', to: '/recovery/drugs' },
  { label: 'Counselling', to: '/counselling' },
  { label: 'Therapy', to: '/therapy' },
  { label: 'Family Support', to: '/family-support' },
  { label: 'Rehabilitation', to: '/rehabilitation' },
  { label: 'Facilities', to: '/facilities' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Our Team', to: '/team' },
  { label: 'Testimonials', to: '/testimonials' },
  { label: 'Blog', to: '/blog' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileSubmenu, setMobileSubmenu] = useState(null)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setMobileSubmenu(null)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const isActive = (to) => location.pathname === to

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-background/85 backdrop-blur-lg shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 h-16 md:h-20">
            <Link
              to="/"
              className="flex items-center gap-2.5 group"
              aria-label="Hope De-Addiction Centre home"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-white font-heading text-lg font-bold shadow-soft group-hover:scale-105 transition-transform">
                H
              </span>
              <span className="leading-tight">
                <span className="block font-heading text-xl md:text-2xl font-bold tracking-tight text-ink">
                  HOPE
                </span>
                <span className="block text-[10px] md:text-[11px] text-ink/60 tracking-wide uppercase">
                  De-Addiction &amp; Rehabilitation Centre
                </span>
              </span>
            </Link>

            <nav
              className="hidden lg:flex items-center gap-6 xl:gap-8"
              aria-label="Primary navigation"
            >
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `relative text-sm font-medium transition-colors py-1 ${
                      isActive
                        ? 'text-accent'
                        : 'text-ink/70 hover:text-ink'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item.label}
                      {isActive && (
                        <motion.span
                          layoutId="nav-underline"
                          className="absolute left-0 right-0 -bottom-0.5 h-0.5 bg-accent rounded-full"
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <Link
                to="/emergency-help"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-deep hover:text-accent transition-colors"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Emergency
              </Link>
              <Button to="/appointment" size="sm">
                Book Consultation
              </Button>
            </div>

            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              className="lg:hidden p-2 rounded-full hover:bg-secondary/40 transition-colors"
              aria-expanded={mobileOpen}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-30 lg:hidden bg-background pt-20"
          >
            <div className="h-full overflow-y-auto pb-16 px-4">
              <nav aria-label="Mobile navigation" className="flex flex-col">
                {mobileNavItems.map((item, index) => (
                  <motion.div
                    key={item.to}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.03, duration: 0.3 }}
                  >
                    <Link
                      to={item.to}
                      className={`flex items-center justify-between py-3.5 border-b border-ink/10 text-base ${
                        isActive(item.to)
                          ? 'text-accent font-semibold'
                          : 'text-ink/80'
                      }`}
                    >
                      {item.label}
                      {item.to === '/programs' && (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault()
                            setMobileSubmenu(
                              mobileSubmenu === 'programs' ? null : 'programs',
                            )
                          }}
                          className="p-1 rounded-full hover:bg-secondary/50 transition-colors"
                          aria-label="Submenu"
                        >
                          <Plus
                            className={`h-4 w-4 transition-transform ${
                              mobileSubmenu === 'programs' ? 'rotate-45' : ''
                            }`}
                          />
                        </button>
                      )}
                    </Link>
                    {item.to === '/programs' &&
                      mobileSubmenu === 'programs' && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden pl-4"
                        >
                          <Link
                            to="/programs/men"
                            className="block py-3 text-ink/70 text-sm"
                          >
                            Men&rsquo;s Program
                          </Link>
                          <Link
                            to="/programs/women"
                            className="block py-3 text-ink/70 text-sm"
                          >
                            Women&rsquo;s Program
                          </Link>
                        </motion.div>
                      )}
                  </motion.div>
                ))}
              </nav>

              <div className="mt-6 flex flex-col gap-3">
                <Button to="/appointment" className="w-full">
                  Book Consultation
                </Button>
                <Button to="/emergency-help" variant="outline" className="w-full">
                  Emergency Help
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}