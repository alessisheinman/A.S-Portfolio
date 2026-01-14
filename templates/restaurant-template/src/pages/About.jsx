import { motion } from 'framer-motion';
import { FaAward, FaHeart, FaUsers, FaUtensils, FaClock, FaGlassMartini } from 'react-icons/fa';

const About = () => {
  const values = [
    {
      icon: <FaUtensils className="text-4xl text-accent-400" />,
      title: 'Quality',
      description: 'Only the finest USDA Prime beef, aged a minimum of 28 days in our custom facility.',
    },
    {
      icon: <FaGlassMartini className="text-4xl text-accent-400" />,
      title: 'Craft',
      description: 'Masterfully crafted cocktails using premium spirits and house-made ingredients.',
    },
    {
      icon: <FaHeart className="text-4xl text-accent-400" />,
      title: 'Passion',
      description: 'Every dish and drink is prepared with dedication to culinary excellence.',
    },
    {
      icon: <FaAward className="text-4xl text-accent-400" />,
      title: 'Excellence',
      description: 'Recognized as one of Manhattan\'s premier dining destinations since 1998.',
    },
  ];

  return (
    <div className="pt-16 bg-primary-900">
      {/* Hero Section */}
      <section className="bg-black py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-px bg-accent-400"></div>
              <span className="text-accent-400 font-light tracking-[0.3em] text-sm">EST. 1998</span>
              <div className="w-12 h-px bg-accent-400"></div>
            </div>
            <h1 className="text-6xl md:text-7xl font-serif font-bold text-white mb-6 tracking-wide">About Us</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
              A Manhattan institution dedicated to the art of exceptional dining and timeless hospitality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-primary-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="px-8 md:px-16 py-16 md:py-24"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-px bg-accent-400"></div>
                <span className="text-accent-400 font-light tracking-[0.2em] text-xs">THE STORY</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-8 leading-tight">
                A Legacy of<br />Excellence
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed text-lg font-light">
                In 1998, Bella's Ristorante opened its doors with a singular vision: to create Manhattan's premier destination for discerning diners seeking authentic Italian cuisine and expertly crafted cocktails. What began as a dream has evolved into a celebrated institution.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed text-lg font-light">
                Our kitchen honors the traditions of Italy while using only the finest imported ingredients. Each dish is prepared with the care and attention to detail that has become our signature, celebrating regional Italian flavors with contemporary refinement.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg font-light">
                Complementing our cuisine is a bar program that stands as a destination unto itself. Our master mixologists craft both timeless classics and innovative creations, earning recognition among Manhattan's elite cocktail lounges.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="h-full overflow-hidden"
            >
              <img
                src={`${import.meta.env.BASE_URL}images/tables.jpg`}
                alt="Prime Cut dining room"
                className="w-full h-full object-cover min-h-[500px]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-24 h-px bg-accent-400/30"></div>
              <h2 className="text-5xl font-serif font-bold text-white tracking-wide">Our Philosophy</h2>
              <div className="w-24 h-px bg-accent-400/30"></div>
            </div>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
              Four pillars that guide every aspect of the Prime Cut experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-primary-800 p-8 text-center border border-accent-500/20 hover:border-accent-500/40 transition-all"
              >
                <div className="flex justify-center mb-6">{value.icon}</div>
                <h3 className="text-xl font-serif font-bold text-white mb-4 tracking-wide">{value.title}</h3>
                <p className="text-gray-400 font-light text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Chef Section */}
      <section className="bg-primary-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="h-full overflow-hidden"
            >
              <img
                src={`${import.meta.env.BASE_URL}images/chef.jpg`}
                alt="Executive Chef at work"
                className="w-full h-full object-cover min-h-[500px]"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="px-8 md:px-16 py-16 md:py-24"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-px bg-accent-400"></div>
                <span className="text-accent-400 font-light tracking-[0.2em] text-xs">CULINARY MASTERY</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-8 leading-tight">
                Crafted with<br />Precision
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed text-lg font-light">
                Our culinary team brings decades of experience to every plate. Led by our executive chef, each dish represents a commitment to excellence that has defined Bella's Ristorante since 1998.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg font-light">
                From hand-selecting the finest Italian ingredients to the final preparation in our kitchen, every step is executed with meticulous attention to detail.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="bg-leather-600">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="h-full overflow-hidden"
            >
              <img
                src={`${import.meta.env.BASE_URL}images/meal.jpg`}
                alt="Bella's Ristorante cuisine"
                className="w-full h-full object-cover min-h-[500px]"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="px-8 md:px-16 py-16 md:py-24"
            >
              <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-8 leading-tight">
                The Bella's<br />Experience
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed text-lg font-light">
                From the moment you arrive, every detail is orchestrated to create an unforgettable evening. Our refined dining room provides an atmosphere of understated elegance, while our service team delivers attentive hospitality.
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed text-lg font-light">
                Whether joining us for a business dinner, special celebration, or evening at the bar, we invite you to experience the distinction that has made Bella's Ristorante a Manhattan landmark.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-1 h-12 bg-accent-400"></div>
                  <div>
                    <p className="text-white font-semibold text-sm tracking-wider mb-1">DINNER SERVICE</p>
                    <p className="text-gray-400 font-light text-sm">5:00 PM - 11:00 PM Daily</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-1 h-12 bg-accent-400"></div>
                  <div>
                    <p className="text-white font-semibold text-sm tracking-wider mb-1">BAR HOURS</p>
                    <p className="text-gray-400 font-light text-sm">5:00 PM - 1:00 AM Daily</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black border-t border-accent-500/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-8">Join Us</h2>
          <p className="text-xl mb-12 leading-relaxed text-gray-300 font-light">
            Experience the legacy for yourself. Reserve your table today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+12125551234"
              className="bg-accent-500 text-black px-12 py-4 font-semibold hover:bg-accent-400 transition-colors tracking-wide"
            >
              CALL (212) 555-1234
            </a>
            <a
              href="/contact"
              className="bg-transparent border-2 border-accent-500 text-accent-400 px-12 py-4 font-semibold hover:bg-accent-500 hover:text-black transition-colors tracking-wide"
            >
              RESERVE ONLINE
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
