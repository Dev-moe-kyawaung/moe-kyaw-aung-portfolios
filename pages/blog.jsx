import { motion } from 'framer-motion';
import Layout from '../components/layout/Layout';
import Head from 'next/head';
import Link from 'next/link';
import { FiArrowRight, FiCalendar, FiClock } from 'react-icons/fi';

const blogPosts = [
  {
    id: 1,
    title: 'Mastering Jetpack Compose: Advanced Patterns',
    excerpt: 'Learn advanced Jetpack Compose patterns for building scalable, maintainable UIs',
    date: 'May 20, 2026',
    readTime: '12 min read',
    category: 'Jetpack Compose',
    slug: 'mastering-jetpack-compose-advanced-patterns',
  },
  {
    id: 2,
    title: 'Kotlin Coroutines Deep Dive',
    excerpt: 'Understanding coroutines, flows, and structured concurrency in Android',
    date: 'May 10, 2026',
    readTime: '15 min read',
    category: 'Kotlin',
    slug: 'kotlin-coroutines-deep-dive',
  },
  {
    id: 3,
    title: 'Clean Architecture in Android',
    excerpt: 'Implementing clean architecture principles for maintainable Android apps',
    date: 'April 28, 2026',
    readTime: '10 min read',
    category: 'Architecture',
    slug: 'clean-architecture-android',
  },
];

export default function Blog() {
  return (
    <Layout>
      <Head>
        <title>Blog - Moe Kyaw Aung</title>
      </Head>

      <section className="min-h-screen py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-cyber font-bold gradient-text mb-6">Blog</h1>
            <p className="text-xl text-gray-300">Insights on Android development and best practices</p>
          </motion.div>

          <div className="space-y-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass p-8 hover:shadow-neon-blue transition-all cursor-pointer"
              >
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                  <span className="flex items-center gap-2">
                    <FiCalendar /> {post.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <FiClock /> {post.readTime}
                  </span>
                  <span className="px-3 py-1 glass text-cyber-blue">{post.category}</span>
                </div>

                <h2 className="text-3xl font-cyber font-bold mb-4">{post.title}</h2>
                <p className="text-gray-400 mb-6">{post.excerpt}</p>

                <Link href={`/blog/${post.slug}`}>
                  <span className="inline-flex items-center gap-2 text-cyber-blue hover:gap-3 transition-all">
                    Read More <FiArrowRight />
                  </span>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
