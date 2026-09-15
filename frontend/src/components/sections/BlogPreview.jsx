import { motion } from 'framer-motion'
import SectionHeading from '../common/SectionHeading'
import BlogCard from '../cards/BlogCard'
import { blogPosts } from '../../data/blogs'

export default function BlogPreview() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Resources"
          title="Stories, Guides & Support"
          subtitle="Practical articles on recovery, wellness and family support."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.slice(0, 3).map((post, index) => (
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
      </div>
    </section>
  )
}