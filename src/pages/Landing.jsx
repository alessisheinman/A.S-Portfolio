import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import {
  FaTooth, FaTshirt, FaShoppingBag, FaUtensils, FaExternalLinkAlt,
  FaCode, FaRocket, FaPalette, FaMobile, FaEnvelope,
  FaMapMarkerAlt, FaArrowRight, FaStar, FaCheck,
  FaLinkedinIn, FaGithub, FaBars, FaTimes,
  FaPlane
} from 'react-icons/fa';
import { HiSparkles, HiLightningBolt, HiCube, HiGlobe } from 'react-icons/hi';
import { useState, useEffect, useRef } from 'react';

// ============================================================================
// NAVIGATION COMPONENT
// ============================================================================
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#templates' },
  ];

  return (
    <>
      <motion.nav
        role="navigation"
        aria-label="Main navigation"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'py-4 bg-void-950/80 backdrop-blur-2xl border-b border-white/5'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#home"
            className="relative group"
            whileHover={{ scale: 1.02 }}
          >
            <span className="font-display font-black text-2xl bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
              A
            </span>
            <span className="font-display font-black text-2xl text-purple-400">.</span>
            <span className="font-display font-black text-2xl bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
              S
            </span>
            <div className="absolute -inset-2 bg-purple-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative px-5 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <motion.a
            href="#templates"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-sm font-semibold text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300"
          >
            View Work
            <FaArrowRight className="text-xs" />
          </motion.a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-label="Mobile navigation menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-void-950/98 backdrop-blur-2xl pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-display font-bold text-white py-3 border-b border-white/10"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="#templates"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl text-lg font-semibold text-white"
              >
                View Work
                <FaArrowRight />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// ============================================================================
// ANIMATED BACKGROUND COMPONENT
// ============================================================================
const AnimatedBackground = ({ mousePosition }) => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Main gradient following mouse */}
      <div
        className="absolute inset-0 transition-all duration-1000 ease-out"
        style={{
          background: `
            radial-gradient(circle 800px at ${mousePosition.x}% ${mousePosition.y}%, rgba(139, 92, 246, 0.12) 0%, transparent 50%),
            radial-gradient(circle 600px at ${100 - mousePosition.x}% ${100 - mousePosition.y}%, rgba(59, 130, 246, 0.08) 0%, transparent 50%),
            linear-gradient(to bottom, #030014, #0a0118, #030014)
          `
        }}
      />

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Floating orbs */}
      <motion.div
        className="absolute top-[10%] left-[10%] w-[600px] h-[600px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, transparent 70%)' }}
        animate={{ x: [0, 100, 0], y: [0, 50, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(59, 130, 246, 0.12) 0%, transparent 70%)' }}
        animate={{ x: [0, -80, 0], y: [0, -60, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[50%] left-[50%] w-[400px] h-[400px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(236, 72, 153, 0.08) 0%, transparent 70%)' }}
        animate={{ x: [0, 60, -60, 0], y: [0, -40, 40, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Noise overlay */}
      <div className="noise-overlay" />
    </div>
  );
};

// ============================================================================
// HERO SECTION
// ============================================================================
const HeroSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} id="home" aria-label="Welcome" className="relative min-h-screen flex items-center justify-center px-6 pt-20">
      <motion.div style={{ y, opacity }} className="relative z-10 text-center max-w-6xl mx-auto">
        {/* Floating badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-3 px-5 py-2.5 mb-8 bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-full"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-sm font-medium text-gray-300">Available for new projects</span>
          <HiSparkles className="text-purple-400" />
        </motion.div>

        {/* Main headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-6"
        >
          <h1 className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tight">
            <span className="block bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              A.S
            </span>
            <span className="block mt-2 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-text-gradient bg-[length:200%_auto]">
              Software Development
            </span>
          </h1>
        </motion.div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Developing premium applications and websites throughout New York City
          <span className="text-white font-medium"> Welcome!</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#templates"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 via-purple-500 to-blue-600 rounded-xl font-semibold text-white overflow-hidden shadow-2xl shadow-purple-500/30"
          >
            <span className="relative z-10 flex items-center gap-2">
              View Our Work
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.a>

          <motion.a
            href="#about"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-4 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-xl font-semibold text-white hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300"
          >
            Learn More
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-gray-500"
          >
            <span className="text-xs uppercase tracking-widest font-medium">Scroll</span>
            <div className="w-5 h-8 border-2 border-gray-600 rounded-full flex justify-center pt-2">
              <motion.div
                animate={{ y: [0, 8, 0], opacity: [1, 0, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-1 bg-purple-400 rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 border border-purple-500/20 rounded-full animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-10 w-32 h-32 border border-blue-500/20 rounded-full animate-pulse-slow animation-delay-500" />
      <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-purple-400 rounded-full animate-float" />
      <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-blue-400 rounded-full animate-float animation-delay-300" />
    </section>
  );
};

// ============================================================================
// STATS SECTION
// ============================================================================
const StatsSection = () => {
  const stats = [
    { number: "1", label: "Software Developer", icon: HiCube },
    { number: "100%", label: "Product Satisfaction", icon: FaStar },
    { number: "24h", label: "Response Time", icon: HiLightningBolt },
    { number: "10+", label: "Years Experience", icon: HiGlobe },
  ];

  return (
    <section aria-label="Key statistics" className="relative z-10 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="glass-card p-8 md:p-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 mb-4 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl border border-purple-500/30 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="text-xl text-purple-400" />
                </div>
                <div className="font-display font-black text-4xl md:text-5xl bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// ============================================================================
// ABOUT SECTION
// ============================================================================
const AboutSection = () => {
  return (
    <section id="about" aria-labelledby="about-heading" className="relative z-10 py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold uppercase tracking-wider text-purple-400 bg-purple-500/10 border border-purple-500/20 rounded-full">
              About
            </span>
            <h2 id="about-heading" className="font-display font-black text-4xl md:text-6xl mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Building the
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Future
              </span>
            </h2>
            <p className="text-lg text-gray-400 mb-6 leading-relaxed">
              I'm <span className="text-white">Adam Alessi-Sheinman</span> — a software engineer with a background in AI development and a passion for building digital products that make an impact. My focus now is on helping businesses establish a powerful online presence through modern, conversion-driven web applications.
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Every project I take on is an opportunity to combine technical precision with creative problem-solving. I'm committed to delivering solutions that not only meet today's standards but are built to scale and evolve with your business.
            </p>
            <div className="flex flex-wrap gap-4">
              {['React', 'Tailwind', 'AI Integration', 'Scalable Solutions'].map((tech) => (
                <span key={tech} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300 font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right content - Mission card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-3xl blur-2xl" />
            <div className="relative glass-card p-8 md:p-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl">
                  <HiSparkles className="text-2xl text-white" />
                </div>
                <h3 className="font-display font-bold text-2xl text-white">What I Deliver</h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                I partner with businesses to create digital experiences that drive real results. From concept to launch, I handle every detail so you can focus on what matters — growing your business.
              </p>
              <div className="space-y-3">
                {[
                  'Clean, modern designs that convert',
                  'Performance-optimized architecture',
                  'Ongoing support & scalability',
                  'Clear communication throughout'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-full flex items-center justify-center">
                      <FaCheck className="text-[10px] text-white" />
                    </div>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// SERVICES SECTION
// ============================================================================
const ServicesSection = () => {
  const services = [
    {
      icon: FaCode,
      title: 'Modern Development',
      description: 'Built with React, Tailwind CSS, and cutting-edge technologies for blazing-fast performance, and stunning user interface.',
      gradient: 'from-purple-500 to-indigo-500',
    },
    {
      icon: FaPalette,
      title: 'Custom Design',
      description: 'Every service is uniquely crafted to match your industry, brand, and vision perfectly.',
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      icon: FaMobile,
      title: 'Fully Responsive',
      description: 'Flawless experiences across all devices — desktop, tablet, and mobile.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: FaRocket,
      title: 'Fast Delivery',
      description: 'Quick turnaround times without compromising on quality. Your business online, fast.',
      gradient: 'from-emerald-500 to-teal-500',
    },
  ];

  return (
    <section id="services" aria-labelledby="services-heading" className="relative z-10 py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold uppercase tracking-wider text-purple-400 bg-purple-500/10 border border-purple-500/20 rounded-full">
            What We Do
          </span>
          <h2 id="services-heading" className="font-display font-black text-4xl md:text-6xl lg:text-7xl mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Services That
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Deliver Results
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Here to confidently showcase your business to the world.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Hover glow */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />

              <div className="relative glass-card-hover p-8 md:p-10 h-full">
                <div className={`inline-flex items-center justify-center w-14 h-14 mb-6 bg-gradient-to-br ${service.gradient} rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="text-2xl text-white" />
                </div>
                <h3 className="font-display font-bold text-2xl text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// TEMPLATES SECTION
// ============================================================================

// Helper to switch between dev (localhost) and production (static) URLs
const getTemplateUrl = (prodPath, devPort) => {
  const isDev = import.meta.env.DEV;
  return isDev ? `http://localhost:${devPort}/` : `/A.S-Portfolio${prodPath}`;
};

const TemplatesSection = () => {
  const templates = [
    {
      name: 'Wanderlust Travel',
      category: "Travel",
      icon: FaPlane,
      gradient: 'from-amber-500 via-yellow-500 to-orange-500',
      url: getTemplateUrl('/templates/travel-agency/', 5177),
      features: [
        'Stunning video backgrounds',
        'Destination showcase gallery',
        'Auto-scrolling photo gallery',
        'Luxury gold & dark theme',
        'Contact form ready',
      ],
    },
    {
      name: "Bella's Ristorante",
      category: "Restaurant",
      icon: FaUtensils,
      gradient: 'from-red-500 via-orange-500 to-amber-500',
      url: getTemplateUrl('/templates/restaurant/', 5176),
      features: [
        'Elegant Italian restaurant design',
        'Interactive menu with pricing',
        'Reservation system ready',
        'Stunning photo gallery',
        'Mobile-optimized layout',
      ],
    },
    {
      name: 'SmileRight Dental',
      category: "Healthcare",
      icon: FaTooth,
      gradient: 'from-blue-500 via-cyan-500 to-teal-500',
      url: getTemplateUrl('/templates/dentist/', 5178),
      features: [
        'Professional medical design',
        'Appointment booking focus',
        'Services showcase',
        'Trust-building elements',
        'HIPAA-friendly structure',
      ],
    },
    {
      name: 'FreshPress Cleaners',
      category: "Service",
      icon: FaTshirt,
      gradient: 'from-emerald-500 via-green-500 to-lime-500',
      url: getTemplateUrl('/templates/dry-cleaners/', 5183),
      features: [
        'Clean, professional layout',
        'Service pricing display',
        'Location & hours info',
        'Before/after galleries',
        'Quick quote forms',
      ],
    },
    {
      name: 'Luxe Boutique',
      category: "E-Commerce",
      icon: FaShoppingBag,
      gradient: 'from-pink-500 via-rose-500 to-red-500',
      url: getTemplateUrl('/templates/clothing-store/', 5175),
      features: [
        'Full shopping cart system',
        'Product filtering & sorting',
        'Size selection (XXS-XXL)',
        '12+ product inventory',
        'Checkout flow ready',
      ],
    },
  ];

  return (
    <section id="templates" aria-labelledby="templates-heading" className="relative z-10 py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold uppercase tracking-wider text-purple-400 bg-purple-500/10 border border-purple-500/20 rounded-full">
            Our Work
          </span>
          <h2 id="templates-heading" className="font-display font-black text-4xl md:text-6xl lg:text-7xl mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Template
            </span>
            {' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Showcase
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Production-ready templates designed for real businesses
          </p>
        </motion.div>

        {/* Templates row */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {templates.map((template, index) => (
            <motion.div
              key={template.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -3 }}
              className="group relative"
            >
              {/* Animated border glow */}
              <div className={`absolute -inset-[1px] bg-gradient-to-r ${template.gradient} rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500`} />

              <div className="relative bg-void-950 rounded-2xl overflow-hidden border border-white/5 group-hover:border-transparent transition-all duration-500 h-full flex flex-col">
                {/* Header with gradient */}
                <div className={`relative bg-gradient-to-br ${template.gradient} p-4 text-center overflow-hidden`}>
                  {/* Background pattern */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0" style={{
                      backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                      backgroundSize: '16px 16px'
                    }} />
                  </div>

                  <template.icon className="relative text-2xl text-white drop-shadow-2xl mx-auto" />
                  <h3 className="relative text-sm font-display font-bold text-white mt-2 truncate">
                    {template.name}
                  </h3>
                </div>

                {/* Content */}
                <div className="p-3 bg-gradient-to-b from-void-900/50 to-void-950 flex-grow flex flex-col">
                  <ul className="space-y-1.5 mb-3 flex-grow">
                    {template.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-300">
                        <span className={`flex-shrink-0 w-3 h-3 bg-gradient-to-br ${template.gradient} rounded-full flex items-center justify-center mt-0.5`}>
                          <FaCheck className="text-[6px] text-white" />
                        </span>
                        <span className="text-[10px] leading-tight">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a href={template.url} target="_blank" rel="noopener noreferrer">
                    <button className={`w-full py-2 rounded-lg bg-gradient-to-r ${template.gradient} text-white text-xs font-semibold flex items-center justify-center gap-1.5 hover:opacity-90 transition-opacity`}>
                      <span>View Demo</span>
                      <FaExternalLinkAlt className="text-[8px]" />
                    </button>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// CONTACT SECTION
// ============================================================================
const ContactSection = () => {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="relative z-10 py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="relative">
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 rounded-3xl blur-3xl" />

          <div className="relative glass-card p-8 md:p-16 text-center overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold uppercase tracking-wider text-purple-400 bg-purple-500/10 border border-purple-500/20 rounded-full">
                Let's Work Together
              </span>

              <h2 id="contact-heading" className="font-display font-black text-4xl md:text-6xl lg:text-7xl mb-6">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Ready to
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                  Transform Your Business?
                </span>
              </h2>

              <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
                Let's discuss how we can create a stunning website that drives real results for your business.
              </p>

              <div className="flex items-center justify-center mb-12">
                <motion.a
                  href="mailto:alessisheinman@gmail.com"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 via-purple-500 to-blue-600 rounded-xl font-semibold text-white shadow-2xl shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300"
                >
                  <FaEnvelope />
                  <span>alessisheinman@gmail.com</span>
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </div>

              <div className="flex items-center justify-center gap-2 text-gray-500">
                <FaMapMarkerAlt className="text-purple-400" />
                <span>Based in New York City</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// FOOTER
// ============================================================================
const Footer = () => {
  const socialLinks = [
    { icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/adam-alessi-sheinman-938bb9222/', label: 'LinkedIn' },
    { icon: FaGithub, href: 'https://github.com/alessisheinman', label: 'GitHub' },
  ];

  return (
    <footer id="footer" role="contentinfo" aria-label="Site footer" className="relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#home" className="inline-block mb-4">
              <span className="font-display font-black text-3xl bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
                A
              </span>
              <span className="font-display font-black text-3xl text-purple-400">.</span>
              <span className="font-display font-black text-3xl bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
                S
              </span>
            </a>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              Premium web development for NYC small businesses. We create digital experiences that convert visitors into customers.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/50 rounded-lg text-gray-400 hover:text-purple-400 transition-all duration-300"
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Work'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-gray-400 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} A.S All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            Crafted with <span className="text-purple-400">♥</span> in NYC
          </p>
        </div>
      </div>
    </footer>
  );
};

// ============================================================================
// MAIN LANDING COMPONENT
// ============================================================================
const Landing = () => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-void-950 overflow-hidden">
      {/* Skip to main content link for keyboard users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-purple-600 focus:text-white focus:rounded-lg"
      >
        Skip to main content
      </a>

      {/* Animated background */}
      <AnimatedBackground mousePosition={mousePosition} />

      {/* Navigation */}
      <Navigation />

      {/* Main content */}
      <main id="main-content" role="main">
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <ServicesSection />
        <TemplatesSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Landing;
