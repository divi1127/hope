import { motion } from 'framer-motion'
import { ArrowRight, Clock } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function BlogCard({ post }) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-soft border border-ink/5"
    >
      <div className="overflow-hidden">
        <img
          src="/images/blog-placeholder.svg"
          alt=""
          loading="lazy"
          className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col gap-3 p-6 flex-1">
        <div className="flex items-center gap-3">
          <span className="rounded-full bg-secondary/40 px-3 py-1 text-xs font-semibold text-deep">
            {post.category}
          </span>
          <span className="text-xs text-ink/50">{post.date}</span>
        </div>
        <h3 className="text-xl font-heading leading-snug">
          <Link to={`/blog/${post.slug}`} className="hover:text-accent transition-colors">
            {post.title}
          </Link>
        </h3>
        <div className="flex items-center gap-1.5 text-xs text-ink/50">
          <Clock className="h-3.5 w-3.5" aria-hidden="true" />
          {post.readTime}
        </div>
        <p className="text-sm text-ink/70 leading-relaxed flex-1">
          {post.excerpt}
        </p>
        <Link
          to={`/blog/${post.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent group-hover:gap-3 transition-all"
        >
          Read More
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </motion.article>
  )
}