import { useEffect } from 'react';
import { loadSlim } from '@tsparticles/slim';
import { Particles } from '@tsparticles/react';

let particlesLoaded = false;

export default function ParticleBackground() {
  useEffect(() => {
    if (particlesLoaded) return;
    
    loadSlim(async (engine) => {
      await engine.load();
      particlesLoaded = true;
    });
  }, []);

  const options = {
    background: {
      color: {
        value: 'transparent',
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: 'grab',
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 140,
          line_linked: {
            opacity: 0.5,
          },
        },
      },
    },
    particles: {
      color: {
        value: ['#9d4edd', '#ff006e', '#00f5ff'],
      },
      links: {
        color: '#9d4edd',
        distance: 150,
        enable: true,
        opacity: 0.3,
        width: 1,
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: 'none',
        enable: true,
        outModes: {
          default: 'bounce',
        },
        random: false,
        speed: 1.5,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
    detectRetina: true,
  };

  return (
    <Particles
      id="tsparticles"
      options={options}
      className="fixed top-0 left-0 w-full h-full -z-10"
    />
  );
}
