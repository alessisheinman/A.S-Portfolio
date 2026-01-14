import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { HiChevronDown } from 'react-icons/hi';
import { FaPlay } from 'react-icons/fa';

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  const textVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  };

  return (
    <section ref={ref} className="relative min-h-[200vh]">
      {/* Sticky Hero Content */}
      <motion.div
        style={{ y, opacity, scale }}
        className="sticky top-0 h-screen flex flex-col items-center justify-center px-6 overflow-hidden"
      >
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gold-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold-400/5 rounded-full blur-[120px]" />

        {/* Main Content */}
        <div className="relative z-10 text-center max-w-6xl">
          {/* Pre-title */}
          <motion.p
            custom={0}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="section-subtitle"
          >
            Welcome to Wanderlust
          </motion.p>

          {/* Main Title */}
          <motion.h1
            custom={1}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="font-display text-6xl md:text-8xl lg:text-9xl font-bold mb-12 leading-none"
          >
            <span className="text-white">Discover</span>
            <br />
            <span className="text-gradient">Paradise</span>
          </motion.h1>

          {/* CTA Buttons */}
          <motion.div
            custom={2}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <motion.a
              href="#destinations"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-luxury"
            >
              Explore Destinations
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-outline flex items-center gap-3"
            >
              <span className="w-10 h-10 rounded-full bg-gold-500/20 flex items-center justify-center">
                <FaPlay className="text-gold-400 text-sm ml-1" />
              </span>
              Watch Story
            </motion.button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-white/40"
          >
            <span className="text-xs uppercase tracking-widest mb-2">Scroll to Explore</span>
            <HiChevronDown size={24} className="text-gold-400" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
