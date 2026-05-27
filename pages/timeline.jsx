import { motion } from 'framer-motion';
import Layout from '../components/layout/Layout';
import Head from 'next/head';
import { FiBriefcase, FiGraduationCap, FiAward } from 'react-icons/fi';

const timeline = [
  {
    year: '2024 - Present',
    title: 'Senior Android Developer',
    company: 'TechCorp International',
    description: 'Leading Android team of 8 developers, architecting scalable mobile solutions',
    icon: FiBriefcase,
    type: 'work',
  },
  {
    year: '2021 - 2024',
    title: 'Android Developer',
    company: 'InnovateTech Startup',
    description: 'Built 15+ production apps, achieved 4.8+ average rating on Play Store',
    icon: FiBriefcase,
    type: 'work',
  },
  {
    year: '2019 - 2021',
    title: 'Junior Android Developer',
    company: 'Digital Solutions Ltd',
    description: 'Developed Android applications, learned modern Android architecture',
    icon: FiBriefcase,
    type: 'work',
  },
  {
    year: '2018',
    title: 'Google Associate Android Developer',
    company: 'Google',
    description: 'Certified Android developer with expertise in Kotlin and Android SDK',
    icon: FiAward,
    type: 'certification',
  },
  {
    year: '2014 - 2018',
    title: 'B.Sc Computer Science',
    company: 'University of Yangon',
    description: 'Specialized in Mobile Computing and Software Engineering',
    icon: FiGraduationCap,
    type: 'education',
  },
];

export default function Timeline() {
  return (
    <Layout>
      <Head>
        <title>Timeline - Moe Kyaw Aung</title>
      </Head>

      <section className="min-h-screen py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-cyber font-bold gradient-text mb-6">Career Timeline</h1>
            <p className="text-xl text-gray-300">My journey in software development</p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyber-purple via-cyber-pink to-cyber-blue"></div>

            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'order-2 pl-8'}`}>
                  <div className="glass p-6">
                    <span className="inline-block px-3 py-1 glass text-cyber-blue text-sm mb-2">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-cyber font-bold mb-2">{item.title}</h3>
                    <p className="text-cyber-purple font-semibold mb-2">{item.company}</p>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 glass flex items-center justify-center border-2 border-cyber-blue shadow-neon-blue">
                  <item.icon className="text-cyber-blue" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
