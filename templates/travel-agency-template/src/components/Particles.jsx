import { useMemo } from 'react';
import { motion } from 'framer-motion';

const Particles = () => {
  const particles = useMemo(() => {
    return Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 15,
      duration: 15 + Math.random() * 10,
      size: 2 + Math.random() * 4,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            bottom: '-10px',
            width: particle.size,
            height: particle.size,
            background: `linear-gradient(135deg, rgba(212,175,55,0.8), rgba(252,211,77,0.4))`,
            boxShadow: '0 0 10px rgba(212,175,55,0.3)',
          }}
          animate={{
            y: [0, -1500],
            x: [0, Math.sin(particle.id) * 100],
            opacity: [0, 1, 1, 0],
            scale: [0, 1, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
};

export default Particles;
