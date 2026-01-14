import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Destinations from './sections/Destinations';
import Experience from './sections/Experience';
import Testimonials from './sections/Testimonials';
import Gallery from './sections/Gallery';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import Particles from './components/Particles';
import VideoBackground from './components/VideoBackground';
import ScrollProgress from './components/ScrollProgress';

function App() {
  const containerRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div ref={containerRef} className="relative">
      {/* Fixed Video Background */}
      <VideoBackground />

      {/* Noise Overlay */}
      <div className="noise-overlay" />

      {/* Floating Particles */}
      <Particles />

      {/* Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 1.5 }}
      >
        <Hero />
        <Destinations />
        <Experience />
        <Gallery />
        <Testimonials />
        <Contact />
      </motion.main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
