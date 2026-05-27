import Navbar from './Navbar';
import Footer from './Footer';
import ParticleBackground from '../sections/ParticleBackground';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-cyber-black">
      <ParticleBackground />
      <Navbar />
      <main className="pt-24">
        {children}
      </main>
      <Footer />
    </div>
  );
}
