import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { HiArrowRight, HiLocationMarker, HiStar } from 'react-icons/hi';

const Destinations = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const destinations = [
    {
      name: 'Maldives',
      country: 'Indian Ocean',
      image: 'https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 4.9,
      price: 'From $2,500',
      description: 'Crystal clear waters and overwater villas',
      featured: true,
    },
    {
      name: 'Santorini',
      country: 'Greece',
      image: 'https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 4.8,
      price: 'From $1,800',
      description: 'Iconic sunsets and whitewashed architecture',
    },
    {
      name: 'Bali',
      country: 'Indonesia',
      image: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 4.7,
      price: 'From $1,200',
      description: 'Spiritual retreats and lush rice terraces',
    },
    {
      name: 'Swiss Alps',
      country: 'Switzerland',
      image: 'https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 4.9,
      price: 'From $3,200',
      description: 'Majestic peaks and luxury chalets',
    },
    {
      name: 'Dubai',
      country: 'UAE',
      image: 'https://images.pexels.com/photos/1470502/pexels-photo-1470502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 4.8,
      price: 'From $2,100',
      description: 'Ultra-modern luxury and desert adventures',
    },
    {
      name: 'Kyoto',
      country: 'Japan',
      image: 'https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 4.9,
      price: 'From $2,800',
      description: 'Ancient temples and cherry blossoms',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="destinations" ref={ref} className="relative z-10 py-32 bg-gradient-to-b from-luxury-darker via-luxury-dark to-luxury-darker">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
      <div className="absolute -top-40 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="section-subtitle">Extraordinary Places</p>
          <h2 className="section-title">
            <span className="text-white">Curated </span>
            <span className="text-gradient">Destinations</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Handpicked paradises that promise unforgettable experiences. Each destination
            selected for its unique beauty and exclusive offerings.
          </p>
        </motion.div>

        {/* Destinations Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.name}
              variants={cardVariants}
              className={`card-luxury group ${destination.featured ? 'md:col-span-2 md:row-span-2' : ''}`}
            >
              {/* Image */}
              <div className={`relative overflow-hidden ${destination.featured ? 'h-[500px]' : 'h-80'}`}>
                <motion.img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.7 }}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-darker via-luxury-darker/50 to-transparent" />

                {/* Rating Badge */}
                <div className="absolute top-4 right-4 glass px-3 py-1.5 rounded-full flex items-center gap-1">
                  <HiStar className="text-gold-400" />
                  <span className="text-white text-sm font-medium">{destination.rating}</span>
                </div>

                {/* Featured Badge */}
                {destination.featured && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-gold-600 to-gold-400 px-4 py-1.5 rounded-full">
                    <span className="text-luxury-darker text-xs font-bold uppercase tracking-wider">Featured</span>
                  </div>
                )}

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-2 text-gold-400 mb-2">
                    <HiLocationMarker />
                    <span className="text-sm uppercase tracking-wider">{destination.country}</span>
                  </div>
                  <h3 className={`font-display font-bold text-white mb-2 ${destination.featured ? 'text-4xl' : 'text-2xl'}`}>
                    {destination.name}
                  </h3>
                  <p className="text-white/60 text-sm mb-4">{destination.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gold-400 font-semibold">{destination.price}</span>
                    <motion.button
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-2 text-white/70 hover:text-gold-400 transition-colors group"
                    >
                      <span className="text-sm uppercase tracking-wider">Explore</span>
                      <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-outline"
          >
            View All Destinations
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Destinations;
