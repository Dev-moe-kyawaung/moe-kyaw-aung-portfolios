import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from '../components/layout/Layout';
import Head from 'next/head';
import { FiGithub, FiExternalLink, FiCode } from 'react-icons/fi';

const projects = [
  {
    id: 1,
    name: 'TaskMaster Pro',
    description: 'A productivity app with offline-first architecture and real-time sync',
    technologies: ['Kotlin', 'Jetpack Compose', 'Room', 'Coroutines'],
    category: 'productivity',
    github: 'https://github.com/moe-kyaw-aung/taskmaster',
    demo: 'https://play.google.com/store/apps/details?id=com.taskmaster',
    image: '/images/taskmaster.png',
  },
  {
    id: 2,
    name: 'FinanceTracker',
    description: 'Personal finance management with ML-powered spending insights',
    technologies: ['Kotlin', 'ML Kit', 'Firebase', 'MVVM'],
    category: 'finance',
    github: 'https://github.com/moe-kyaw-aung/finance-tracker',
    demo: 'https://play.google.com/store/apps/details?id=com.finance',
    image: '/images/finance.png',
  },
  {
    id: 3,
    name: 'HealthFit',
    description: 'Fitness tracking app with Wear OS integration',
    technologies: ['Kotlin', 'Wear OS', 'Health Connect', 'Room'],
    category: 'health',
    github: 'https://github.com/moe-kyaw-aung/healthfit',
    demo: 'https://play.google.com/store/apps/details?id=com.healthfit',
    image: '/images/healthfit.png',
  },
  {
    id: 4,
    name: 'ChatFlow',
    description: 'Real-time messaging app with end-to-end encryption',
    technologies: ['Kotlin', 'Firebase', 'WebSocket', 'Signal Protocol'],
    category: 'social',
    github: 'https://github.com/moe-kyaw-aung/chatflow',
    demo: 'https://play.google.com/store/apps/details?id=com.chatflow',
    image: '/images/chatflow.png',
  },
  {
    id: 5,
    name: 'NewsHub',
    description: 'AI-powered news aggregator with personalized recommendations',
    technologies: ['Kotlin', 'GraphQL', 'Room', 'Coroutines'],
    category: 'productivity',
    github: 'https://github.com/moe-kyaw-aung/newshub',
    demo: 'https://play.google.com/store/apps/details?id=com.newshub',
    image: '/images/newshub.png',
  },
  {
    id: 6,
    name: 'ShopEasy',
    description: 'E-commerce platform with AR product preview',
    technologies: ['Kotlin', 'ARCore', 'Retrofit', 'Dagger Hilt'],
    category: 'ecommerce',
    github: 'https://github.com/moe-kyaw-aung/shopeasy',
    demo: 'https://play.google.com/store/apps/details?id=com.shopeasy',
    image: '/images/shopeasy.png',
  },
];

const categories = ['all', 'productivity', 'finance', 'health', 'social', 'ecommerce'];

export default function Portfolio() {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <Layout>
      <Head>
        <title>Portfolio - Moe Kyaw Aung</title>
      </Head>

      <section className="min-h-screen py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-cyber font-bold gradient-text mb-6">Project Portfolio</h1>
            <p className="text-xl text-gray-300">Showcasing my best Android applications</p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-3 glass capitalize transition-all duration-300 ${
                  filter === category 
                    ? 'shadow-neon-blue text-cyber-blue' 
                    : 'text-gray-400 hover:text-cyber-blue'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <AnimatePresence>
            <motion.div
              layout
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="glass p-6"
                >
                  <div className="h-48 bg-gradient-cyber rounded-lg mb-4 flex items-center justify-center">
                    <FiCode className="text-6xl text-white opacity-50" />
                  </div>
                  
                  <h3 className="text-2xl font-cyber font-bold mb-2">{project.name}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 glass text-xs text-cyber-green">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 glass hover:shadow-neon-purple transition-all"
                    >
                      <FiGithub /> Code
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-cyber hover:opacity-90 transition-all"
                    >
                      <FiExternalLink /> Demo
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </Layout>
  );
}
