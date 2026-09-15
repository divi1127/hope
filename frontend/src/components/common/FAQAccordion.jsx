import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, Search } from 'lucide-react'

export default function FAQAccordion({ faqs }) {
  const [openId, setOpenId] = useState(null)
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    if (!query.trim()) return faqs
    const q = query.toLowerCase()
    return faqs.filter(
      (faq) =>
        faq.question.toLowerCase().includes(q) ||
        faq.answer.toLowerCase().includes(q),
    )
  }, [faqs, query])

  return (
    <div>
      <div className="relative max-w-md mx-auto mb-10">
        <Search
          className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-ink/40"
          aria-hidden="true"
        />
        <label htmlFor="faq-search" className="sr-only">
          Search questions
        </label>
        <input
          id="faq-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search questions..."
          className="w-full rounded-full border border-ink/15 bg-white py-3.5 pl-12 pr-5 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
        />
      </div>

      <AnimatePresence>
        {!filtered.length && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-ink/60 py-10"
          >
            No questions match your search.
          </motion.p>
        )}
      </AnimatePresence>

      <div className="flex flex-col gap-3.5 max-w-3xl mx-auto">
        {filtered.map((faq) => {
          const isOpen = openId === faq.id
          return (
            <motion.div
              key={faq.id}
              initial={false}
              className={`rounded-2xl border bg-white transition-colors ${
                isOpen ? 'border-accent/50 shadow-soft' : 'border-ink/10'
              }`}
            >
              <button
                type="button"
                onClick={() => setOpenId(isOpen ? null : faq.id)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 p-5 text-left"
              >
                <span className="font-semibold text-base">
                  {faq.question}
                </span>
                <motion.span
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-secondary/40 text-deep"
                >
                  <ChevronDown className="h-4 w-4" aria-hidden="true" />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-sm text-ink/70 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}