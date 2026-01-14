import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import ContactForm from '../components/ContactForm';

const Contact = () => {
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
              <span className="text-accent-400 font-light tracking-[0.3em] text-sm">RESERVATIONS</span>
              <div className="w-12 h-px bg-accent-400"></div>
            </div>
            <h1 className="text-6xl md:text-7xl font-serif font-bold text-white mb-6 tracking-wide">Contact Us</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
              We look forward to welcoming you to Bella's Ristorante. Reserve your table or reach out with any inquiries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 bg-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-px bg-accent-400"></div>
                <span className="text-accent-400 font-light tracking-[0.2em] text-xs">VISIT US</span>
              </div>
              <h2 className="text-5xl font-serif font-bold text-white mb-10 leading-tight">Get In Touch</h2>

              <div className="space-y-8">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <FaMapMarkerAlt className="text-accent-400 text-2xl mt-1" />
                  <div>
                    <h3 className="font-semibold text-white mb-2 tracking-wider text-sm">ADDRESS</h3>
                    <p className="text-gray-300 font-light leading-relaxed">
                      123 Italian Way<br />
                      New York, NY 10001<br />
                      United States
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <FaPhone className="text-accent-400 text-2xl mt-1" />
                  <div>
                    <h3 className="font-semibold text-white mb-2 tracking-wider text-sm">PHONE</h3>
                    <a
                      href="tel:+12125551234"
                      className="text-gray-300 font-light hover:text-accent-400 transition-colors"
                    >
                      (212) 555-1234
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <FaEnvelope className="text-accent-400 text-2xl mt-1" />
                  <div>
                    <h3 className="font-semibold text-white mb-2 tracking-wider text-sm">EMAIL</h3>
                    <a
                      href="mailto:reservations@bellasristorante.com"
                      className="text-gray-300 font-light hover:text-accent-400 transition-colors"
                    >
                      reservations@bellasristorante.com
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <FaClock className="text-accent-400 text-2xl mt-1" />
                  <div>
                    <h3 className="font-semibold text-white mb-2 tracking-wider text-sm">HOURS</h3>
                    <div className="text-gray-300 font-light space-y-1">
                      <p>Dinner: 5:00 PM - 11:00 PM</p>
                      <p>Bar: 5:00 PM - 1:00 AM</p>
                      <p className="text-accent-400 text-xs tracking-wider mt-2">OPEN DAILY</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="mt-10 p-8 bg-black border border-accent-500/20">
                <h3 className="font-serif font-bold text-white mb-4 text-xl">Private Events</h3>
                <p className="text-gray-300 font-light mb-6 leading-relaxed">
                  For private dining rooms and parties of 8 or more, please contact our events team directly. We offer customized menus and dedicated service for your special occasions.
                </p>
                <a
                  href="tel:+12125551234"
                  className="inline-block bg-accent-500 text-black px-8 py-3 font-semibold hover:bg-accent-400 transition-colors tracking-wide"
                >
                  CALL TO RESERVE
                </a>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <ContactForm
                title="Send Us a Message"
                submitButtonText="Send Message"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-24 h-px bg-accent-400/30"></div>
              <h2 className="text-5xl font-serif font-bold text-white tracking-wide">Find Us</h2>
              <div className="w-24 h-px bg-accent-400/30"></div>
            </div>
            <p className="text-gray-400 font-light text-lg">Located in the heart of Manhattan</p>
          </motion.div>

          {/* Map Placeholder */}
          <div className="bg-primary-800 border border-accent-500/20 h-96 flex items-center justify-center">
            <div className="text-center">
              <FaMapMarkerAlt className="text-accent-400/30 text-6xl mx-auto mb-4" />
              <p className="text-gray-400 font-semibold tracking-wider">GOOGLE MAPS INTEGRATION</p>
              <p className="text-gray-500 text-sm mt-2 font-light">
                Replace this with actual Google Maps embed
              </p>
            </div>
          </div>

          {/* Directions */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-primary-800 p-8 border border-accent-500/20">
              <h3 className="font-serif font-bold text-white mb-4 text-xl">Parking</h3>
              <p className="text-gray-300 font-light leading-relaxed">
                Valet parking available nightly. Public parking garage located at 456 Parking Street, just 2 blocks away. Street parking also available.
              </p>
            </div>
            <div className="bg-primary-800 p-8 border border-accent-500/20">
              <h3 className="font-serif font-bold text-white mb-4 text-xl">Public Transit</h3>
              <p className="text-gray-300 font-light leading-relaxed">
                Conveniently accessible via subway lines 1, 2, 3 at 14th Street station. Bus routes M14 and M20 stop nearby.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
