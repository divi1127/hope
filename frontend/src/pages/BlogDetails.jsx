import { motion } from 'framer-motion'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Clock } from 'lucide-react'
import PageHero from '../components/common/PageHero'
import Button from '../components/common/Button'
import CTASection from '../components/sections/CTASection'
import { blogPosts } from '../data/blogs'
import { useSEO } from '../hooks/useSEO'
import { pageMeta } from '../utils/seo'

export default function BlogDetails() {
  const { slug } = useParams()
  const post = blogPosts.find((p) => p.slug === slug)

  useSEO({
    title: post
      ? `${post.title} | Hope De-Addiction Centre`
      : pageMeta['/blog'].title,
    description: post?.excerpt || pageMeta['/blog'].description,
  })

  if (!post) {
    return (
      <>
        <PageHero
          eyebrow="Blog"
          title="Article Not Found"
          subtitle="The article you are looking for has moved or no longer exists."
        >
          <Button to="/blog">Back to Blog</Button>
        </PageHero>
      </>
    )
  }

  return (
    <>
      <PageHero
        eyebrow={post.category}
        title={post.title}
        subtitle={post.excerpt}
      />

      <article className="py-10 md:py-16 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 text-sm text-ink/60 mb-8">
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-4 w-4" aria-hidden="true" />
            {post.readTime}
          </span>
          <span aria-hidden="true">&middot;</span>
          <span>{post.date}</span>
        </div>

        <div className="overflow-hidden rounded-[2rem] shadow-lg mb-10">
          <img
            src="/images/blog-placeholder.svg"
            alt=""
            className="w-full aspect-[16/9] object-cover"
          />
        </div>

        <div className="flex flex-col gap-6">
          {post.content.map((block, index) => {
            if (block.type === 'heading') {
              return (
                <motion.h2
                  key={index}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl md:text-3xl font-heading mt-6 -mb-2"
                >
                  {block.text}
                </motion.h2>
              )
            }
            return (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="text-ink/80 leading-relaxed text-base md:text-lg"
              >
                {block.text}
              </motion.p>
            )
          })}
        </div>

        <div className="mt-12 pt-8 border-t border-ink/10">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to All Articles
          </Link>
        </div>
      </article>

      <CTASection />
    </>
  )
}