import { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { HiStar, HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: 'Alexandra Chen',
      title: 'CEO, TechVentures',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: 'Wanderlust transformed our honeymoon into an unforgettable journey. From the private villa in Bali to the surprise sunset dinner, every detail was perfection. They didn\'t just plan a trip; they created memories that will last a lifetime.',
      rating: 5,
      destination: 'Bali, Indonesia',
    },
    {
      name: 'Marcus Thompson',
      title: 'Film Director',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: 'I\'ve traveled the world, but Wanderlust showed me places I never knew existed. Their local connections opened doors that money alone can\'t buy. The Swiss Alps trip was beyond anything I could have imagined.',
      rating: 5,
      destination: 'Swiss Alps',
    },
    {
      name: 'Isabella Romano',
      title: 'Fashion Designer',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: 'The attention to detail is extraordinary. They remembered I mentioned loving cherry blossoms, and surprised us with a private garden viewing in Kyoto. This level of personalization is rare and precious.',
      rating: 5,
      destination: 'Kyoto, Japan',
    },
    {
      name: 'David & Sarah Mitchell',
      title: 'Entrepreneurs',
      image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: 'Our family trip to the Maldives was seamless. With three kids, we were worried about logistics, but Wanderlust handled everything. The overwater villa, the kids\' activities, the private excursions - absolutely flawless.',
      rating: 5,
      destination: 'Maldives',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const navigate = (direction) => {
    if (direction === 'next') {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    } else {
      setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }
  };

  return (
    <section id="testimonials" ref={ref} className="relative z-10 py-32 bg-gradient-to-b from-luxury-darker via-luxury-dark/50 to-luxury-darker">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gold-400/5 rounded-full blur-[120px]" />
      </div>

      {/* Decorative Quote */}
      <div className="absolute top-20 left-10 text-gold-500/5">
        <FaQuoteLeft size={200} />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="section-subtitle">Testimonials</p>
          <h2 className="section-title">
            <span className="text-white">Words from </span>
            <span className="text-gradient">Travelers</span>
          </h2>
        </motion.div>

        {/* Testimonial Card */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="glass rounded-3xl p-10 md:p-16 relative overflow-hidden"
            >
              {/* Gold accent */}
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-gold-400 to-gold-600" />

              <div className="flex flex-col md:flex-row gap-10 items-center">
                {/* Image */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-gold-500/30">
                      <img
                        src={testimonials[activeIndex].image}
                        alt={testimonials[activeIndex].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Decorative ring */}
                    <div className="absolute -inset-2 rounded-full border border-gold-500/20 animate-pulse-slow" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  {/* Rating */}
                  <div className="flex justify-center md:justify-start gap-1 mb-6">
                    {Array.from({ length: testimonials[activeIndex].rating }).map((_, i) => (
                      <HiStar key={i} className="text-gold-400 text-xl" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-white/80 text-xl md:text-2xl leading-relaxed mb-8 font-light italic">
                    "{testimonials[activeIndex].text}"
                  </p>

                  {/* Author */}
                  <div>
                    <p className="font-display text-2xl text-white font-semibold">
                      {testimonials[activeIndex].name}
                    </p>
                    <p className="text-white/50">{testimonials[activeIndex].title}</p>
                    <p className="text-gold-400 text-sm mt-2">
                      Traveled to {testimonials[activeIndex].destination}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-10">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => navigate('prev')}
              className="w-12 h-12 rounded-full glass flex items-center justify-center text-white/60 hover:text-gold-400 hover:border-gold-500/30 transition-all"
            >
              <HiChevronLeft size={24} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => navigate('next')}
              className="w-12 h-12 rounded-full glass flex items-center justify-center text-white/60 hover:text-gold-400 hover:border-gold-500/30 transition-all"
            >
              <HiChevronRight size={24} />
            </motion.button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? 'w-8 bg-gradient-to-r from-gold-400 to-gold-600'
                    : 'bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
