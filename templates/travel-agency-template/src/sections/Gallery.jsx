import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { HiX, HiChevronLeft, HiChevronRight } from 'react-icons/hi';

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      src: 'https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      alt: 'Tropical Beach Paradise',
      location: 'Baa Atoll, Maldives',
    },
    {
      src: 'https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      alt: 'Mountain Sunrise',
      location: 'Cappadocia, Turkey',
    },
    {
      src: 'https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      alt: 'Desert Dunes',
      location: 'Skógafoss, Iceland',
    },
    {
      src: 'https://images.pexels.com/photos/2474689/pexels-photo-2474689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      alt: 'Northern Lights',
      location: 'Kelingking Beach, Bali',
    },
    {
      src: 'https://images.pexels.com/photos/2245436/pexels-photo-2245436.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      alt: 'Safari Adventure',
      location: 'Maasai Mara, Kenya',
    },
    {
      src: 'https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      alt: 'Greek Islands',
      location: 'Oia, Greece',
    },
    {
      src: 'https://images.pexels.com/photos/2070485/pexels-photo-2070485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      alt: 'Cherry Blossoms',
      location: 'Kyoto, Japan',
    },
    {
      src: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      alt: 'Tropical Overwater Villa',
      location: 'Matira Lagoon, French Polynesia',
    },
    {
      src: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      alt: 'Rice Terraces',
      location: 'Mu Cang Chai, Vietnam',
    },
    {
      src: 'https://images.pexels.com/photos/2193300/pexels-photo-2193300.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      alt: 'City at Night',
      location: 'Sydney, Australia',
    },
    {
      src: 'https://images.pexels.com/photos/1850619/pexels-photo-1850619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      alt: 'Eiffel Tower',
      location: 'Paris, France',
    },
    {
      src: 'https://images.pexels.com/photos/2549018/pexels-photo-2549018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      alt: 'Machu Picchu',
      location: 'Los Cabos, Mexico',
    },
    {
      src: 'https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      alt: 'Autumn Forest',
      location: 'Aurora Borealis, Norway',
    },
    {
      src: 'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      alt: 'Mountain Lake',
      location: 'Banff, Canada',
    },
    {
      src: 'https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      alt: 'Tropical Sunset',
      location: 'Utah, United States',
    },
    {
      src: 'https://images.pexels.com/photos/2104882/pexels-photo-2104882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      alt: 'Historic Architecture',
      location: 'Marrakesh, Morocco',
    },
  ];

  const row1 = images.slice(0, 9);
  const row2 = images.slice(9);

  const navigateImage = (direction) => {
    const currentIndex = images.findIndex(img => img.src === selectedImage?.src);
    let newIndex;
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % images.length;
    } else {
      newIndex = (currentIndex - 1 + images.length) % images.length;
    }
    setSelectedImage(images[newIndex]);
  };

  const ImageCard = ({ image }) => {
    const [place, country] = image.location.split(', ');
    return (
      <div
        onClick={() => setSelectedImage(image)}
        className="relative flex-shrink-0 w-80 h-52 rounded-2xl overflow-hidden cursor-pointer group"
      >
        <img
          src={image.src}
          alt={image.alt}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-darker/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-gold-400 text-sm uppercase tracking-wider">{country}</p>
          <p className="text-white font-display text-lg">{place}</p>
        </div>
      </div>
    );
  };

  return (
    <section id="gallery" className="relative z-10 py-32 overflow-hidden bg-luxury-darker">
      <style>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scrollRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left {
          animation: scrollLeft 120s linear infinite;
        }
        .animate-scroll-right {
          animation: scrollRight 120s linear infinite;
        }
        .animate-scroll-left:hover,
        .animate-scroll-right:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Background Decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-gold-400/5 rounded-full blur-[120px]" />
      </div>

      <div ref={ref} className="relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 px-6"
        >
          <p className="section-subtitle">Visual Journey</p>
          <h2 className="section-title">
            <span className="text-white">Captured </span>
            <span className="text-gradient">Moments</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            A glimpse into the extraordinary experiences awaiting you.
            Every image tells a story of adventure and wonder.
          </p>
        </motion.div>

        {/* Auto-scrolling Rows */}
        <div className="space-y-6">
          {/* Row 1 - Scrolls Left */}
          <div className="overflow-hidden">
            <div className="flex gap-6 w-max animate-scroll-left">
              {[...row1, ...row1].map((image, index) => (
                <ImageCard key={`row1-${index}`} image={image} />
              ))}
            </div>
          </div>

          {/* Row 2 - Scrolls Right */}
          <div className="overflow-hidden">
            <div className="flex gap-6 w-max animate-scroll-right">
              {[...row2, ...row2].map((image, index) => (
                <ImageCard key={`row2-${index}`} image={image} />
              ))}
            </div>
          </div>
        </div>

        {/* Image Count */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center text-white/30 text-sm mt-8"
        >
          {images.length} destinations to explore
        </motion.p>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12 px-6"
        >
          <p className="text-white/50 mb-4">Follow our journey</p>
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 text-gold-400 font-semibold text-lg hover:text-gold-300 transition-colors"
          >
            @wanderlust_travels
          </motion.a>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-luxury-darker/95 backdrop-blur-xl p-8"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors"
            >
              <HiX size={32} />
            </button>

            {/* Navigation */}
            <button
              onClick={(e) => { e.stopPropagation(); navigateImage('prev'); }}
              className="absolute left-6 text-white/60 hover:text-gold-400 transition-colors"
            >
              <HiChevronLeft size={48} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); navigateImage('next'); }}
              className="absolute right-6 text-white/60 hover:text-gold-400 transition-colors"
            >
              <HiChevronRight size={48} />
            </button>

            {/* Image */}
            <motion.div
              key={selectedImage.src}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl max-h-[80vh] rounded-2xl overflow-hidden"
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-full object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-luxury-darker to-transparent">
                <p className="text-gold-400 text-sm uppercase tracking-wider">{selectedImage.location.split(', ')[1]}</p>
                <p className="text-white font-display text-2xl">{selectedImage.location.split(', ')[0]}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
