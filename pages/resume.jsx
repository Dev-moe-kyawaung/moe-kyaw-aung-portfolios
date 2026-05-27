import { motion } from 'framer-motion';
import Layout from '../components/layout/Layout';
import Head from 'next/head';
import Link from 'next/link';
import { FiDownload, FiFileText, FiCalendar, FiBriefcase, FiGraduationCap } from 'react-icons/fi';

export default function Resume() {
  const experience = [
    {
      title: 'Senior Android Developer',
      company: 'TechCorp International',
      period: '2024 - Present',
      responsibilities: [
        'Lead Android team of 8 developers',
        'Architect scalable mobile solutions',
        'Mentor junior developers',
        'Implement CI/CD pipelines for Android apps',
      ],
    },
    {
      title: 'Android Developer',
      company: 'InnovateTech Startup',
      period: '2021 - 2024',
      responsibilities: [
        'Built 15+ production apps with 4.8+ average rating',
        'Migrated legacy Java codebase to Kotlin',
        'Implemented Jetpack Compose in 5 major apps',
      ],
    },
    {
      title: 'Junior Android Developer',
      company: 'Digital Solutions Ltd',
      period: '2019 - 2021',
      responsibilities: [
        'Developed Android applications from scratch',
        'Collaborated with designers and backend teams',
        'Wrote unit and integration tests',
      ],
    },
  ];

  const education = [
    {
      degree: 'B.Sc Computer Science',
      institution: 'University of Yangon',
      period: '2014 - 2018',
      details: 'Specialized in Mobile Computing and Software Engineering, GPA: 3.8/4.0',
    },
  ];

  const certifications = [
    { name: 'Google Associate Android Developer', year: '2018' },
    { name: 'Google Certified Kotlin Developer', year: '2020' },
    { name: 'AWS Certified Developer - Associate', year: '2022' },
  ];

  return (
    <Layout>
      <Head>
        <title>Resume - Moe Kyaw Aung</title>
      </Head>

      <section className="min-h-screen py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl font-cyber font-bold gradient-text mb-6">Resume</h1>
            <p className="text-xl text-gray-300 mb-8">
              8+ years of experience in Android development
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/resume.pdf"
                download
                className="px-8 py-4 glass text-cyber-blue font-semibold hover:shadow-neon-blue transition-all duration-300 flex items-center justify-center gap-2"
              >
                <FiDownload /> Download PDF
              </Link>
              <button
                onClick={() => window.print()}
                className="px-8 py-4 bg-gradient-cyber font-semibold hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <FiFileText /> Print Resume
              </button>
            </div>
          </motion.div>

          {/* Personal Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass p-8 mb-8"
          >
            <h2 className="text-2xl font-cyber font-bold text-cyber-blue mb-6">Contact Information</h2>
            <div className="grid md:grid-cols-2 gap-4 text-gray-300">
              <div><strong className="text-cyber-purple">Email:</strong> moe.kyaw.aung@email.com</div>
              <div><strong className="text-cyber-purple">Phone:</strong> +95 9 XXX XXX XXX</div>
              <div><strong className="text-cyber-purple">Location:</strong> Yangon, Myanmar</div>
              <div><strong className="text-cyber-purple">GitHub:</strong> github.com/moe-kyaw-aung</div>
              <div><strong className="text-cyber-purple">LinkedIn:</strong> linkedin.com/in/moe-kyaw-aung</div>
              <div><strong className="text-cyber-purple">Portfolio:</strong> moekyawaung.dev</div>
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass p-8 mb-8"
          >
            <h2 className="text-2xl font-cyber font-bold text-cyber-blue mb-6 flex items-center gap-3">
              <FiBriefcase /> Work Experience
            </h2>
            <div className="space-y-8">
              {experience.map((job, index) => (
                <div key={index} className="border-l-2 border-cyber-purple pl-6">
                  <span className="inline-block px-3 py-1 glass text-cyber-blue text-sm mb-2">
                    <FiCalendar className="inline mr-2" /> {job.period}
                  </span>
                  <h3 className="text-xl font-semibold text-cyber-green mb-1">{job.title}</h3>
                  <p className="text-cyber-purple font-medium mb-3">{job.company}</p>
                  <ul className="space-y-2 text-gray-400">
                    {job.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-cyber-blue mt-1">•</span>
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="glass p-8 mb-8"
          >
            <h2 className="text-2xl font-cyber font-bold text-cyber-blue mb-6 flex items-center gap-3">
              <FiGraduationCap /> Education
            </h2>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="border-l-2 border-cyber-pink pl-6">
                  <span className="inline-block px-3 py-1 glass text-cyber-blue text-sm mb-2">
                    <FiCalendar className="inline mr-2" /> {edu.period}
                  </span>
                  <h3 className="text-xl font-semibold text-cyber-green mb-1">{edu.degree}</h3>
                  <p className="text-cyber-purple font-medium mb-2">{edu.institution}</p>
                  <p className="text-gray-400">{edu.details}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="glass p-8"
          >
            <h2 className="text-2xl font-cyber font-bold text-cyber-blue mb-6">Certifications</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="glass-light p-4 text-center">
                  <h3 className="font-semibold text-cyber-green mb-2">{cert.name}</h3>
                  <span className="text-sm text-gray-400">{cert.year}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Key Skills Summary */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="glass p-8 mt-8"
          >
            <h2 className="text-2xl font-cyber font-bold text-cyber-blue mb-6">Key Skills</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-cyber-purple font-semibold mb-3">Languages & Frameworks</h3>
                <p className="text-gray-400">
                  Kotlin (Expert), Java (Proficient), Android SDK, Jetpack Compose, Coroutines, Flow, Room, Retrofit, Dagger Hilt
                </p>
              </div>
              <div>
                <h3 className="text-cyber-purple font-semibold mb-3">Architecture & Patterns</h3>
                <p className="text-gray-400">
                  MVVM, MVI, Clean Architecture, Repository Pattern, Dependency Injection, Unit Testing, TDD
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
