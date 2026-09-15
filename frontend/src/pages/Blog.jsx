import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import PageHero from '../components/common/PageHero'
import BlogCard from '../components/cards/BlogCard'
import CTASection from '../components/sections/CTASection'
import { blogCategories, blogPosts } from '../data/blogs'
import { useSEO } from '../hooks/useSEO'
import { pageMeta } from '../utils/seo'

export default function Blog() {
  useSEO(pageMeta['/blog'])
  const [category, setCategory] = useState('All')
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    let list = blogPosts
    if (category !== 'All') {
      list = list.filter((post) => post.category === category)
    }
    if (query.trim()) {
      const q = query.toLowerCase()
      list = list.filter(
        (post) =>
          post.title.toLowerCase().includes(q) ||
          post.excerpt.toLowerCase().includes(q),
      )
    }
    return list
  }, [category, query])

  const categories = ['All', ...blogCategories]

  return (
    <>
      <PageHero
        eyebrow="Blog & Resources"
        title="Guides for the Journey"
        subtitle="Honest, practical articles on addiction, recovery and the lives that surround them."
      />

      <section className="py-16 md:py-24 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between gap-6 mb-12 md:items-center">
          <div
            className="flex flex-wrap gap-3"
            role="tablist"
            aria-label="Blog categories"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setCategory(cat)}
                aria-pressed={category === cat}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                  category === cat
                    ? 'bg-accent text-white shadow-soft'
                    : 'bg-white border border-ink/15 text-ink/70 hover:border-accent'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative md:w-72">
            <label htmlFor="blog-search" className="sr-only">
              Search articles
            </label>
            <input
              id="blog-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search articles..."
              className="w-full rounded-full border border-ink/15 bg-white py-3 pl-5 pr-5 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
        </div>

        {filtered.length ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: (index % 3) * 0.1 }}
              >
                <BlogCard post={post} />
              </motion.div>
            ))}
          </div>
        ) : (
          <p className="text-center text-ink/60 py-16">
            No articles match your search.
          </p>
        )}
      </section>

      <CTASection />
    </>
  )
}
