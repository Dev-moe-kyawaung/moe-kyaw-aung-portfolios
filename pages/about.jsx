import { motion } from 'framer-motion';
import Layout from '../components/layout/Layout';
import Head from 'next/head';
import { FiMapPin, FiMail, FiBriefcase, FiGraduationCap } from 'react-icons/fi';

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About - Moe Kyaw Aung</title>
      </Head>

      <section className="min-h-screen py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-cyber font-bold gradient-text mb-6">About Me</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Passionate Android developer with 8+ years of experience building scalable mobile applications
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="glass p-8">
                <h2 className="text-3xl font-cyber font-bold mb-6 text-cyber-blue">My Story</h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    I'm <strong className="text-cyber-blue">Moe Kyaw Aung</strong>, a Senior Android Developer 
                    with a passion for creating elegant, user-centric mobile applications. Over the past 8 years, 
                    I've had the privilege of working with startups and Fortune 500 companies to deliver 
                    high-quality Android solutions.
                  </p>
                  <p>
                    My expertise lies in <strong className="text-cyber-green">modern Android development</strong>, 
                    including Jetpack Compose, Kotlin Coroutines, and clean architecture principles. I'm 
                    deeply committed to writing maintainable code and staying ahead of industry trends.
                  </p>
                  <p>
                    Beyond coding, I'm an active open-source contributor and mentor, helping the next generation 
                    of Android developers grow their skills.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              {[
                { icon: FiMapPin, label: 'Location', value: 'Yangon, Myanmar' },
                { icon: FiMail, label: 'Email', value: 'moe.kyaw.aung@email.com' },
                { icon: FiBriefcase, label: 'Experience', value: '8+ Years' },
                { icon: FiGraduationCap, label: 'Education', value: 'B.Sc Computer Science' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="glass p-6 flex items-center gap-4"
                >
                  <item.icon className="text-3xl text-cyber-purple" />
                  <div>
                    <div className="text-sm text-gray-400">{item.label}</div>
                    <div className="text-lg font-semibold">{item.value}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-20 grid md:grid-cols-3 gap-8"
          >
            {[
              { title: 'Quality First', desc: 'Writing clean, maintainable code that stands the test of time' },
              { title: 'User-Centric', desc: 'Building experiences that delight and empower users' },
              { title: 'Continuous Learning', desc: 'Always exploring new technologies and best practices' },
            ].map((value, index) => (
              <div key={index} className="glass p-8 text-center">
                <h3 className="text-xl font-cyber font-bold text-cyber-green mb-3">{value.title}</h3>
                <p className="text-gray-400">{value.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
