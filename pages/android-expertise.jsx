import { motion } from 'framer-motion';
import Layout from '../components/layout/Layout';
import Head from 'next/head';
import { FiSmartphone, FiCode, FiDatabase, FiCloud, FiLock, FiZap } from 'react-icons/fi';

const expertiseAreas = [
  {
    icon: FiSmartphone,
    title: 'Native Android Development',
    description: 'Expert in Kotlin and Java for building high-performance native Android applications',
    technologies: ['Kotlin', 'Java', 'Android SDK', 'Jetpack Libraries'],
    color: 'cyan',
  },
  {
    icon: FiCode,
    title: 'Modern UI/UX',
    description: 'Creating beautiful, responsive interfaces with Jetpack Compose and Material Design 3',
    technologies: ['Jetpack Compose', 'Material Design 3', 'Custom Animations'],
    color: 'pink',
  },
  {
    icon: FiDatabase,
    title: 'Architecture & Patterns',
    description: 'Implementing MVVM, MVI, and Clean Architecture for scalable applications',
    technologies: ['MVVM', 'MVI', 'Clean Architecture', 'Repository Pattern'],
    color: 'purple',
  },
  {
    icon: FiCloud,
    title: 'Backend Integration',
    description: 'Seamless API integration with RESTful services and GraphQL',
    technologies: ['Retrofit', 'GraphQL', 'WebSocket', 'Firebase'],
    color: 'green',
  },
  {
    icon: FiLock,
    title: 'Security',
    description: 'Implementing industry-standard security practices and data protection',
    technologies: ['Encryption', 'OAuth 2.0', 'Biometric Auth', 'Secure Storage'],
    color: 'blue',
  },
  {
    icon: FiZap,
    title: 'Performance Optimization',
    description: 'Optimizing app performance, reducing battery consumption, and improving load times',
    technologies: ['Profiling', 'Memory Management', 'Coroutines', 'Flow'],
    color: 'yellow',
  },
];

const colorClasses = {
  cyan: 'text-cyber-cyan border-cyber-cyan',
  pink: 'text-cyber-pink border-cyber-pink',
  purple: 'text-cyber-purple border-cyber-purple',
  green: 'text-cyber-green border-cyber-green',
  blue: 'text-cyber-blue border-cyber-blue',
  yellow: 'text-cyber-yellow border-cyber-yellow',
};

export default function AndroidExpertise() {
  return (
    <Layout>
      <Head>
        <title>Android Expertise - Moe Kyaw Aung</title>
      </Head>

      <section className="min-h-screen py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 glass text-cyber-blue text-sm mb-4">
              Android Senior Developer
            </span>
            <h1 className="text-5xl font-cyber font-bold gradient-text mb-6">Android Expertise</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive Android development skills honed over 8+ years of professional experience
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertiseAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className={`glass p-8 border-2 border-transparent hover:${colorClasses[area.color].split(' ')[1]} transition-all duration-300`}
              >
                <area.icon className={`text-5xl mb-6 ${colorClasses[area.color].split(' ')[0]}`} />
                <h3 className="text-2xl font-cyber font-bold mb-4">{area.title}</h3>
                <p className="text-gray-400 mb-6">{area.description}</p>
                <div className="flex flex-wrap gap-2">
                  {area.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 glass text-xs text-cyber-blue">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certification Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-20 glass p-12"
          >
            <h2 className="text-3xl font-cyber font-bold gradient-text mb-8 text-center">Certifications</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Google Associate Android Developer',
                'Google Certified Kotlin Developer',
                'AWS Certified Developer',
              ].map((cert, index) => (
                <div key={index} className="flex items-center gap-4 p-4 glass-light">
                  <div className="w-12 h-12 glass flex items-center justify-center text-cyber-green font-cyber font-bold">
                    ✓
                  </div>
                  <span className="font-semibold">{cert}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
