import { motion } from 'framer-motion';
import Layout from '../components/layout/Layout';
import Head from 'next/head';
import { FiGithub, FiStar, FiFork } from 'react-icons/fi';

const openSourceProjects = [
  {
    name: 'ComposeNavigation',
    description: 'Type-safe navigation library for Jetpack Compose',
    stars: 1200,
    forks: 150,
    language: 'Kotlin',
    url: 'https://github.com/moe-kyaw-aung/compose-navigation',
  },
  {
    name: 'AndroidCleanArch',
    description: 'Ready-to-use Clean Architecture template for Android',
    stars: 890,
    forks: 120,
    language: 'Kotlin',
    url: 'https://github.com/moe-kyaw-aung/android-clean-arch',
  },
  {
    name: 'CoroutineHelper',
    description: 'Simplified coroutine utilities for Android development',
    stars: 650,
    forks: 80,
    language: 'Kotlin',
    url: 'https://github.com/moe-kyaw-aung/coroutine-helper',
  },
  {
    name: 'Material3Components',
    description: 'Extended Material Design 3 components library',
    stars: 2100,
    forks: 230,
    language: 'Kotlin',
    url: 'https://github.com/moe-kyaw-aung/material3-components',
  },
];

export default function OpenSource() {
  return (
    <Layout>
      <Head>
        <title>Open Source - Moe Kyaw Aung</title>
      </Head>

      <section className="min-h-screen py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-cyber font-bold gradient-text mb-6">Open Source</h1>
            <p className="text-xl text-gray-300">Contributing to the Android developer community</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {openSourceProjects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="glass p-8"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-cyber font-bold text-cyber-blue">{project.name}</h3>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 glass hover:shadow-neon-purple transition-all"
                  >
                    <FiGithub size={20} />
                  </a>
                </div>
                
                <p className="text-gray-400 mb-6">{project.description}</p>
                
                <div className="flex items-center gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <FiStar className="text-cyber-yellow" />
                    <span>{project.stars.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiFork className="text-cyber-purple" />
                    <span>{project.forks.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-cyber-blue"></span>
                    <span>{project.language}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contribution Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-16 glass p-12 text-center"
          >
            <h2 className="text-3xl font-cyber font-bold gradient-text mb-8">Contribution Stats</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: 'Total Contributions', value: '2,500+' },
                { label: 'Repositories', value: '45+' },
                { label: 'Total Stars', value: '8K+' },
                { label: 'Open PRs', value: '120+' },
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-4xl font-cyber font-bold gradient-text mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
