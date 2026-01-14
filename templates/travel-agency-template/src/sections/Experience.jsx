import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { HiSparkles, HiGlobe, HiHeart, HiShieldCheck, HiClock, HiUserGroup } from 'react-icons/hi';

const Experience = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 10]);

  const features = [
    {
      icon: HiSparkles,
      title: 'Luxury Accommodations',
      description: 'Hand-selected 5-star hotels, private villas, and exclusive resorts that redefine comfort.',
    },
    {
      icon: HiGlobe,
      title: 'Bespoke Itineraries',
      description: 'Every journey meticulously crafted to your preferences, ensuring unique and personal experiences.',
    },
    {
      icon: HiHeart,
      title: 'Concierge Service',
      description: '24/7 dedicated support from our expert travel consultants throughout your journey.',
    },
    {
      icon: HiShieldCheck,
      title: 'Travel Protection',
      description: 'Comprehensive coverage and peace of mind with our premium travel insurance packages.',
    },
    {
      icon: HiClock,
      title: 'Seamless Experience',
      description: 'From private transfers to skip-the-line access, we handle every detail flawlessly.',
    },
    {
      icon: HiUserGroup,
      title: 'Local Expertise',
      description: 'Connect with hand-picked local guides who bring destinations to life with insider knowledge.',
    },
  ];

  return (
    <section id="experience" ref={containerRef} className="relative z-10 py-32 overflow-hidden">
      {/* Parallax Background Elements */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-20 -left-20 w-80 h-80 bg-gradient-to-br from-gold-500/10 to-transparent rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-20 -right-20 w-96 h-96 bg-gradient-to-tl from-gold-400/10 to-transparent rounded-full blur-3xl"
      />

      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(212,175,55,0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(212,175,55,0.3) 1px, transparent 1px)`,
          backgroundSize: '100px 100px',
        }} />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-6 relative">
        {/* Section Header */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="section-subtitle">Why Choose Us</p>
            <h2 className="section-title">
              <span className="text-white">The Art of </span>
              <span className="text-gradient">Luxury Travel</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed">
              We don't just plan trips; we craft transformative experiences. Our commitment
              to excellence ensures every moment of your journey exceeds expectations.
            </p>
          </motion.div>

          {/* Floating Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ rotate }}
            className="relative"
          >
            <div className="glass rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-gold-500/20 to-transparent rounded-bl-full" />
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center">
                    <span className="font-display text-3xl text-luxury-darker font-bold">15</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-lg">Years of Excellence</p>
                    <p className="text-white/50 text-sm">Crafting Dream Journeys</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <p className="text-3xl font-display font-bold text-gold-400">150+</p>
                    <p className="text-white/50 text-sm">Destinations</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <p className="text-3xl font-display font-bold text-gold-400">25K+</p>
                    <p className="text-white/50 text-sm">Happy Travelers</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group"
            >
              <div className="glass rounded-2xl p-8 h-full hover:border-gold-500/30 transition-all duration-500 relative overflow-hidden">
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold-500/0 to-gold-500/0 group-hover:from-gold-500/5 group-hover:to-transparent transition-all duration-500" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold-500/20 to-gold-600/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <feature.icon className="text-gold-400 text-2xl" />
                  </div>

                  {/* Content */}
                  <h3 className="font-display text-xl font-semibold text-white mb-3 group-hover:text-gold-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-white/50 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
