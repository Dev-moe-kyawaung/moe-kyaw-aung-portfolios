import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  FiArrowRight, FiCode, FiSmartphone, FiDownload 
} from 'react-icons/fi';
import Layout from '../components/layout/Layout';
import Head from 'next/head';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <Layout>
      <Head>
        <title>Moe Kyaw Aung - Senior Android Developer</title>
        <meta name="description" content="Senior Android Developer specializing in Kotlin, Jetpack Compose, and modern Android architecture" />
      </Head>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 glass text-cyber-blue text-sm font-medium mb-6">
              🚀 Senior Android Developer
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-cyber font-bold mb-6"
          >
            <span className="gradient-text">Moe Kyaw Aung</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Crafting exceptional <span className="text-cyber-blue">Android experiences</span> with 
            modern architecture, clean code, and cutting-edge technologies
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/portfolio"
              className="group px-8 py-4 glass text-cyber-blue font-semibold hover:shadow-neon-blue transition-all duration-300 flex items-center justify-center gap-2"
            >
              View Portfolio
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              href="/contact"
              className="px-8 py-4 bg-gradient-cyber font-semibold hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Get In Touch
              <FiCode />
            </Link>

            <Link
              href="/resume.pdf"
              className="px-8 py-4 glass text-white font-semibold hover:shadow-neon-purple transition-all duration-300 flex items-center justify-center gap-2"
            >
              Download Resume
              <FiDownload />
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          >
            {[
              { label: 'Years Experience', value: '8+' },
              { label: 'Apps Published', value: '50+' },
              { label: 'Open Source', value: '100+' },
              { label: 'GitHub Stars', value: '5K+' },
            ].map((stat, index) => (
              <div key={index} className="glass p-6">
                <div className="text-3xl font-cyber font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Preview */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-cyber font-bold text-center mb-12 gradient-text"
          >
            Technologies I Master
          </motion.h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Kotlin', 'Jetpack Compose', 'Coroutines', 'Dagger Hilt', 'Room', 'Retrofit', 'MVVM', 'Clean Architecture'].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, shadow: 'neon-blue' }}
                className="glass p-6 text-center cursor-pointer"
              >
                <FiSmartphone className="mx-auto text-4xl text-cyber-blue mb-3" />
                <h3 className="font-semibold">{tech}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
