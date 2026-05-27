import { useState } from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/layout/Layout';
import Head from 'next/head';
import emailjs from 'emailjs-com';
import { FiMail, FiMapPin, FiPhone, FiSend } from 'react-icons/fi';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        formData,
        'YOUR_USER_ID'
      );
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus(''), 3000);
    }
  };

  const contactInfo = [
    { icon: FiMail, label: 'Email', value: 'moe.kyaw.aung@email.com' },
    { icon: FiPhone, label: 'Phone', value: '+95 9 XXX XXX XXX' },
    { icon: FiMapPin, label: 'Location', value: 'Yangon, Myanmar' },
  ];

  return (
    <Layout>
      <Head>
        <title>Contact - Moe Kyaw Aung</title>
      </Head>

      <section className="min-h-screen py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-cyber font-bold gradient-text mb-6">Get In Touch</h1>
            <p className="text-xl text-gray-300">Let's build something amazing together</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              {contactInfo.map((item, index) => (
                <div key={index} className="glass p-6 flex items-center gap-4">
                  <item.icon className="text-3xl text-cyber-blue" />
                  <div>
                    <div className="text-sm text-gray-400">{item.label}</div>
                    <div className="text-lg font-semibold">{item.value}</div>
                  </div>
                </div>
              ))}

              <div className="glass p-8">
                <h3 className="text-xl font-cyber font-bold mb-4">Let's Connect</h3>
                <p className="text-gray-400 mb-4">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
                <p className="text-cyber-green">Response time: Within 24 hours</p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <form onSubmit={handleSubmit} className="glass p-8 space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 glass-light bg-transparent border border-gray-700 rounded-lg focus:border-cyber-blue focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 glass-light bg-transparent border border-gray-700 rounded-lg focus:border-cyber-blue focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 glass-light bg-transparent border border-gray-700 rounded-lg focus:border-cyber-blue focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 glass-light bg-transparent border border-gray-700 rounded-lg focus:border-cyber-blue focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full px-8 py-4 bg-gradient-cyber font-semibold hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <FiSend />
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>

                {status === 'success' && (
                  <p className="text-cyber-green text-center">Message sent successfully!</p>
                )}
                {status === 'error' && (
                  <p className="text-red-500 text-center">Something went wrong. Please try again.</p>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
