import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import Link from 'next/link';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Android Expertise', path: '/android-expertise' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Skills', path: '/skills' },
  { name: 'Timeline', path: '/timeline' },
  { name: 'Open Source', path: '/opensource' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
  { name: 'Resume', path: '/resume' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'glass py-4' : 'bg-cyber-black/80 py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-cyber font-bold gradient-text"
            >
              MKA
            </motion.span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  href={item.path}
                  className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-cyber-blue transition-colors relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyber-blue group-hover:w-full transition-all duration-300"></span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-300 hover:text-cyber-blue"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden glass mt-4 mx-4 mb-4"
        >
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              onClick={() => setIsOpen(false)}
              className="block px-6 py-3 text-gray-300 hover:text-cyber-blue hover:bg-cyber-purple/10 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
