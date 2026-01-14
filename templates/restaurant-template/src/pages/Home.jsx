import { Link } from 'react-router-dom';
import { FaClock, FaMapMarkerAlt, FaPhone, FaAward, FaStar, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Home = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
  };

  return (
    <div className="pt-16 bg-primary-900">
      {/* Hero Section */}
      <section className="relative h-[100vh] min-h-[700px] bg-black flex items-center overflow-hidden">
        {/* Background Image with Ken Burns Effect */}
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 20, ease: "linear" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/tables.jpg)' }}
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />

        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-32 h-32 border border-accent-500/20 rounded-full opacity-50" />
        <div className="absolute bottom-40 right-40 w-48 h-48 border border-accent-500/10 rounded-full" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {/* Established Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-16 h-px bg-gradient-to-r from-accent-400 to-transparent" />
              <span className="text-accent-400 font-light tracking-[0.4em] text-sm">EST. 1998</span>
            </motion.div>

            {/* Logo */}
            <motion.img
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              src="/images/logo.png"
              alt="Bella's Ristorante"
              className="h-48 md:h-64 lg:h-72 w-auto mb-8 drop-shadow-2xl"
            />

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-xl md:text-2xl lg:text-3xl mb-12 max-w-2xl leading-relaxed text-gray-300 font-light"
            >
              Where authentic Italian cuisine meets masterful cocktails in an atmosphere of
              <span className="text-accent-400"> timeless sophistication</span>.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-3 bg-accent-500 text-black px-10 py-4 font-semibold hover:bg-accent-400 transition-all duration-300 text-lg tracking-wide"
              >
                RESERVE A TABLE
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/menu"
                className="inline-flex items-center justify-center gap-3 bg-transparent border-2 border-accent-500 text-accent-400 px-10 py-4 font-semibold hover:bg-accent-500 hover:text-black transition-all duration-300 text-lg tracking-wide"
              >
                VIEW MENU
              </Link>
            </motion.div>
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
            className="flex flex-col items-center gap-3 text-accent-400/60"
          >
            <span className="text-xs tracking-[0.3em] font-light">SCROLL</span>
            <div className="w-px h-16 bg-gradient-to-b from-accent-400/60 to-transparent" />
          </motion.div>
        </motion.div>
      </section>

      {/* Quick Info Bar */}
      <section className="bg-black border-t border-b border-accent-500/20 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: FaClock, label: 'DINNER SERVICE', value: '5:00 PM - 11:00 PM Daily' },
              { icon: FaMapMarkerAlt, label: 'LOCATION', value: '123 Italian Way, NYC' },
              { icon: FaPhone, label: 'RESERVATIONS', value: '(212) 555-1234' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center justify-center gap-5 group"
              >
                <div className="w-14 h-14 border border-accent-500/30 flex items-center justify-center group-hover:bg-accent-500/10 transition-colors duration-300">
                  <item.icon className="text-2xl text-accent-400" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-white text-xs tracking-[0.2em]">{item.label}</p>
                  <p className="text-sm text-gray-400 font-light mt-1">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-primary-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="px-8 md:px-16 lg:px-20 py-20 lg:py-32 flex flex-col justify-center"
            >
              <div className="flex items-center gap-4 mb-8">
                <FaAward className="text-4xl text-accent-400" />
                <span className="text-accent-400 font-light tracking-[0.3em] text-sm">AWARD WINNING</span>
              </div>

              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[0.95]">
                A Manhattan
                <span className="block text-accent-400">Institution</span>
              </h2>

              <p className="text-gray-300 mb-6 leading-relaxed text-lg font-light">
                Since 1998, Bella's Ristorante has been the destination for discerning diners seeking authentic Italian cuisine and expertly crafted cocktails. Our kitchen honors traditional recipes while creating dishes with the finest imported ingredients.
              </p>

              <p className="text-gray-300 mb-10 leading-relaxed text-lg font-light">
                Our master mixologists complement our culinary program with a bar that stands alone among Manhattan's elite cocktail destinations.
              </p>

              <Link
                to="/about"
                className="group inline-flex items-center gap-3 text-accent-400 font-semibold tracking-wider hover:text-accent-300 transition-colors"
              >
                <span className="border-b-2 border-accent-400 pb-1 group-hover:border-accent-300">OUR STORY</span>
                <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="h-full overflow-hidden"
            >
              <img
                src="/images/tables.jpg"
                alt="Bella's Ristorante dining room"
                className="w-full h-full object-cover min-h-[500px] lg:min-h-[600px] hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bar Section */}
      <section className="bg-leather-600">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="h-full overflow-hidden order-2 lg:order-1"
            >
              <img
                src="/images/bar.webp"
                alt="The Bar at Bella's"
                className="w-full h-full object-cover min-h-[500px] lg:min-h-[600px] hover:scale-105 transition-transform duration-700"
              />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="px-8 md:px-16 lg:px-20 py-20 lg:py-32 flex flex-col justify-center order-1 lg:order-2"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-px bg-accent-400" />
                <span className="text-accent-400 font-light tracking-[0.3em] text-sm">THE BAR</span>
              </div>

              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[0.95]">
                The Bar at
                <span className="block text-accent-400">Bella's</span>
              </h2>

              <p className="text-gray-300 mb-6 leading-relaxed text-lg font-light">
                Our bar program stands as a destination unto itself. Master mixologists craft both timeless classics and innovative creations using premium spirits and house-made ingredients.
              </p>

              <p className="text-gray-300 mb-10 leading-relaxed text-lg font-light">
                Join us for cocktail hour, or settle in for an evening at the bar with our full dinner menu available.
              </p>

              <div className="flex items-center gap-4">
                <div className="w-10 h-px bg-accent-400/50" />
                <span className="text-accent-400 font-light text-sm tracking-[0.2em]">
                  BAR HOURS: 5:00 PM - 1:00 AM
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-black py-24 border-t border-accent-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-accent-400 font-light tracking-[0.3em] text-sm">REVIEWS</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">What Our Guests Say</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'The New York Times', text: 'An authentic Italian experience that transports you straight to Rome. The pasta is nothing short of perfection.' },
              { name: 'Zagat', text: 'A Manhattan institution that continues to set the standard for Italian fine dining. The cocktails are world-class.' },
              { name: 'New York Magazine', text: 'Bella\'s combines old-world charm with modern sophistication. A must-visit for any food lover.' },
            ].map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-primary-900/50 border border-accent-500/20 p-8 text-center"
              >
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-accent-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed font-light italic">"{review.text}"</p>
                <p className="text-accent-400 font-semibold tracking-wider text-sm">— {review.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: 'url(/images/chef.jpg)' }}
        >
          <div className="absolute inset-0 bg-black/80" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center items-center gap-4 mb-8">
              <div className="w-16 h-px bg-accent-400" />
              <span className="text-accent-400 font-light tracking-[0.3em] text-sm">JOIN US</span>
              <div className="w-16 h-px bg-accent-400" />
            </div>

            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8">
              Reserve Your
              <span className="block text-accent-400">Table</span>
            </h2>

            <p className="text-xl md:text-2xl mb-12 leading-relaxed text-gray-300 font-light max-w-2xl mx-auto">
              Experience the pinnacle of Italian dining in Manhattan.
            </p>

            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-3 bg-accent-500 text-black px-14 py-5 font-semibold hover:bg-accent-400 transition-all duration-300 text-lg tracking-wide"
            >
              MAKE A RESERVATION
              <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
