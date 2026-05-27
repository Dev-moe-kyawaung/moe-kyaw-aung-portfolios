import { motion } from 'framer-motion';
import Layout from '../components/layout/Layout';
import Head from 'next/head';

const skillCategories = [
  {
    name: 'Languages',
    skills: [
      { name: 'Kotlin', level: 95 },
      { name: 'Java', level: 88 },
      { name: 'SQL', level: 85 },
      { name: 'XML', level: 90 },
    ],
  },
  {
    name: 'Android Framework',
    skills: [
      { name: 'Jetpack Compose', level: 92 },
      { name: 'Android SDK', level: 95 },
      { name: 'Coroutines', level: 93 },
      { name: 'Flow', level: 88 },
    ],
  },
  {
    name: 'Architecture',
    skills: [
      { name: 'MVVM', level: 95 },
      { name: 'Clean Architecture', level: 90 },
      { name: 'MVI', level: 85 },
      { name: 'Repository Pattern', level: 92 },
    ],
  },
  {
    name: 'Libraries & Tools',
    skills: [
      { name: 'Retrofit', level: 93 },
      { name: 'Dagger Hilt', level: 90 },
      { name: 'Room', level: 92 },
      { name: 'Firebase', level: 88 },
    ],
  },
];

const SkillBar = ({ name, level, delay }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ delay }}
    className="mb-4"
  >
    <div className="flex justify-between mb-2">
      <span className="font-semibold">{name}</span>
      <span className="text-cyber-blue">{level}%</span>
    </div>
    <div className="h-3 glass rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        transition={{ duration: 1, delay: delay + 0.3 }}
        className="h-full bg-gradient-neon rounded-full"
      />
    </div>
  </motion.div>
);

export default function Skills() {
  return (
    <Layout>
      <Head>
        <title>Skills Matrix - Moe Kyaw Aung</title>
      </Head>

      <section className="min-h-screen py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-cyber font-bold gradient-text mb-6">Skills Matrix</h1>
            <p className="text-xl text-gray-300">Comprehensive technical expertise in Android development</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.1 }}
                className="glass p-8"
              >
                <h2 className="text-2xl font-cyber font-bold text-cyber-purple mb-6">
                  {category.name}
                </h2>
                {category.skills.map((skill, index) => (
                  <SkillBar
                    key={skill.name}
                    {...skill}
                    delay={(categoryIndex * 0.1) + (index * 0.05)}
                  />
                ))}
              </motion.div>
            ))}
          </div>

          {/* Tools & Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-16 glass p-12"
          >
            <h2 className="text-3xl font-cyber font-bold gradient-text mb-8 text-center">Tools & Technologies</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                'Android Studio', 'Git', 'Gradle', 'Firebase', 'Postman', 
                'Jira', 'Figma', 'AWS', 'Docker', 'CI/CD', 'Ktor', 'Apollo'
              ].map((tool, index) => (
                <motion.div
                  key={tool}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.1 }}
                  className="glass p-4 text-center cursor-pointer hover:shadow-neon-blue transition-all"
                >
                  <span className="text-sm font-medium">{tool}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
