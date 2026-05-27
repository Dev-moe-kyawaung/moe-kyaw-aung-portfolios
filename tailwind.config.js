/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          black: '#0a0a0f',
          dark: '#1a1a2e',
          purple: '#9d4edd',
          pink: '#ff006e',
          blue: '#00f5ff',
          green: '#00ff88',
          yellow: '#ffdd00',
          cyan: '#00d4ff',
        }
      },
      fontFamily: {
        cyber: ['Orbitron', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      boxShadow: {
        'neon-blue': '0 0 10px #00f5ff, 0 0 20px #00f5ff, 0 0 40px #00f5ff',
        'neon-pink': '0 0 10px #ff006e, 0 0 20px #ff006e, 0 0 40px #ff006e',
        'neon-purple': '0 0 10px #9d4edd, 0 0 20px #9d4edd, 0 0 40px #9d4edd',
        'glass': '0 8px 32px 0 rgba(157, 78, 221, 0.37)',
      }
    },
  },
  plugins: [],
}
