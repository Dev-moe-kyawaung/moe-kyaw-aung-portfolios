import { motion } from 'framer-motion';
import { 
  FiGithub, FiTwitter, FiLinkedin, FiMail, FiCode 
} from 'react-icons/fi';

export default function Footer() {
  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/moe-kyaw-aung', label: 'GitHub' },
    { icon: FiTwitter, href: 'https://twitter.com/moekyawaung', label: 'Twitter' },
    { icon: FiLinkedin, href: 'https://linkedin.com/in/moe-kyaw-aung', label: 'LinkedIn' },
    { icon: FiMail, href: 'mailto:moe.kyaw.aung@email.com', label: 'Email' },
  ];

  return (
    <footer className="glass mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-2xl font-cyber font-bold gradient-text mb-4"
            >
              Moe Kyaw Aung
            </motion.h3>
            <p className="text-gray-400 text-sm">
              Senior Android Developer crafting exceptional mobile experiences
            </p>
          </div>

          <div>
            <h4 className="text-cyber-blue font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/portfolio" className="hover:text-cyber-blue transition-colors">Portfolio</a></li>
              <li><a href="/skills" className="hover:text-cyber-blue transition-colors">Skills</a></li>
              <li><a href="/resume" className="hover:text-cyber-blue transition-colors">Resume</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-cyber-blue font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.2 }}
                  className="text-gray-400 hover:text-cyber-blue transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-cyber-purple/20 mt-8 pt-8 text-center text-sm text-gray-500">
          <p>© 2026 Moe Kyaw Aung. Built with 🚀 Next.js & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
