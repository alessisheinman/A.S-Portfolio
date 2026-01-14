import { motion } from 'framer-motion';
import { FaTshirt, FaCut, FaPhone, FaMapMarkerAlt, FaClock, FaLeaf, FaStar, FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';

function App() {
  const dryCleaningPrices = [
    { item: 'Shirt', price: '$10.50' },
    { item: 'Pants', price: '$24.00' },
    { item: 'Suit (2-piece)', price: '$48.00' },
    { item: 'Dress', price: '$36.00' },
    { item: 'Jacket', price: '$36.00' },
    { item: 'Coat', price: '$54.00' },
    { item: 'Sweater', price: '$24.00' },
    { item: 'Tie', price: '$15.00' },
    { item: 'Skirt', price: '$24.00' },
    { item: 'Blouse', price: '$22.50' },
  ];

  const tailoringPrices = [
    { job: 'Hem Pants', price: '$36.00' },
    { job: 'Hem Dress', price: '$45.00' },
    { job: 'Take In/Let Out Sides', price: '$60.00' },
    { job: 'Shorten Sleeves', price: '$45.00' },
    { job: 'Zipper Replacement', price: '$54.00' },
    { job: 'Button Replacement', price: '$9.00' },
    { job: 'Patch Repair', price: '$30.00' },
    { job: 'Waist Adjustment', price: '$54.00' },
  ];

  const features = [
    {
      icon: <FaTshirt className="text-3xl" />,
      title: 'Expert Cleaning',
      description: 'Professional care for all fabric types with eco-friendly solutions',
    },
    {
      icon: <FaCut className="text-3xl" />,
      title: 'Master Tailoring',
      description: 'Precision alterations by skilled craftspeople with 30+ years experience',
    },
    {
      icon: <FaClock className="text-3xl" />,
      title: 'Same-Day Service',
      description: 'Drop off before 9 AM, pick up by 5 PM — no extra charge',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-primary-900 fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3"
            >
              <div className="w-12 h-12 border-2 border-accent-400 rounded-full flex items-center justify-center">
                <HiSparkles className="text-accent-400 text-2xl" />
              </div>
              <h1 className="text-2xl font-bold tracking-tight">
                <span className="text-white">FRESH</span>
                <span className="text-accent-400">PRESS</span>
              </h1>
            </motion.div>
            <motion.a
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              href="tel:+12125551234"
              className="flex items-center gap-2 bg-accent-500 text-primary-900 px-6 py-3 rounded-none hover:bg-accent-400 transition-all duration-300 font-bold"
            >
              <FaPhone className="text-sm" />
              <span className="hidden sm:inline">(212) 555-1234</span>
            </motion.a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-primary-900 text-white pt-20 overflow-hidden min-h-screen flex items-center">
        {/* Diagonal Split Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-primary-950" />
          <div
            className="absolute top-0 right-0 w-1/2 h-full bg-cover bg-center hidden lg:block"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=1200&q=90')`,
              clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0 100%)'
            }}
          >
            <div className="absolute inset-0 bg-primary-900/40" />
          </div>
        </div>

        {/* Accent Line */}
        <div className="absolute left-0 top-1/4 w-1 h-32 bg-accent-400" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-3 mb-8">
                <span className="w-12 h-[1px] bg-accent-400" />
                <span className="text-accent-400 text-sm font-semibold tracking-widest uppercase">Est. 1995</span>
              </div>

              <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-none tracking-tight">
                PREMIUM
                <span className="block text-accent-400">DRY CLEANING</span>
              </h2>

              <p className="text-xl mb-10 text-primary-300 leading-relaxed max-w-lg">
                Manhattan's most trusted cleaners. Expert garment care, master tailoring, and same-day service.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-16">
                <a
                  href="#pricing"
                  className="group inline-flex items-center justify-center gap-3 bg-accent-500 text-primary-900 px-8 py-4 hover:bg-accent-400 transition-all duration-300 font-bold text-lg"
                >
                  View Pricing
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="tel:+12125551234"
                  className="inline-flex items-center justify-center gap-3 text-white px-8 py-4 hover:text-accent-400 transition-all duration-300 font-semibold text-lg border border-primary-600 hover:border-accent-400"
                >
                  <FaPhone />
                  Call Now
                </a>
              </div>

              {/* Stats Row */}
              <div className="flex gap-12 pt-8 border-t border-primary-700">
                {[
                  { number: '30+', label: 'Years' },
                  { number: '50K+', label: 'Customers' },
                  { number: '4.9', label: 'Rating' },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  >
                    <div className="text-3xl md:text-4xl font-bold text-accent-400">{stat.number}</div>
                    <div className="text-sm text-primary-400 uppercase tracking-wider">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6"
          >
            <div>
              <span className="inline-flex items-center gap-2 text-accent-600 text-sm font-semibold tracking-widest uppercase mb-4">
                <span className="w-8 h-[2px] bg-accent-500" />
                Why Choose Us
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-primary-900 leading-tight">
                Premium Care for<br />Your Garments
              </h2>
            </div>
            <p className="text-primary-500 max-w-md text-lg">
              Three decades of excellence in garment care and tailoring services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-primary-100">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative p-10 border-b md:border-b-0 md:border-r border-primary-100 last:border-r-0 last:border-b-0 hover:bg-primary-50 transition-all duration-500"
              >
                <div className="text-accent-500 mb-6">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-xl text-primary-900 mb-3">{feature.title}</h3>
                <p className="text-primary-500 leading-relaxed">{feature.description}</p>
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-accent-500 group-hover:w-full transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-primary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center justify-center gap-2 text-accent-400 text-sm font-semibold tracking-widest uppercase mb-4">
              <span className="w-8 h-[1px] bg-accent-400" />
              Transparent Pricing
              <span className="w-8 h-[1px] bg-accent-400" />
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Services
            </h2>
            <p className="text-xl text-primary-300 max-w-2xl mx-auto">
              Competitive pricing with no hidden fees. Quality service guaranteed.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Dry Cleaning Prices */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white overflow-hidden"
            >
              <div className="bg-primary-800 text-white px-8 py-6">
                <div className="flex items-center gap-4">
                  <FaTshirt className="text-accent-400 text-2xl" />
                  <div>
                    <h3 className="text-xl font-bold">Dry Cleaning</h3>
                    <p className="text-primary-300 text-sm">Professional garment care</p>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div className="space-y-4">
                  {dryCleaningPrices.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="flex justify-between items-center pb-4 border-b border-primary-100 last:border-0 last:pb-0"
                    >
                      <span className="text-primary-700 font-medium">{item.item}</span>
                      <span className="text-accent-600 font-bold text-lg">{item.price}</span>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-8 p-4 bg-accent-50 border-l-4 border-accent-500">
                  <p className="text-primary-900 font-semibold">Same-Day Service</p>
                  <p className="text-sm text-primary-600">Drop off before 9 AM, pick up by 5 PM</p>
                </div>
              </div>
            </motion.div>

            {/* Tailoring Prices */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white overflow-hidden"
            >
              <div className="bg-accent-500 text-primary-900 px-8 py-6">
                <div className="flex items-center gap-4">
                  <FaCut className="text-primary-900 text-2xl" />
                  <div>
                    <h3 className="text-xl font-bold">Tailoring & Alterations</h3>
                    <p className="text-primary-800 text-sm">Expert craftsmanship</p>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div className="space-y-4">
                  {tailoringPrices.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="flex justify-between items-center pb-4 border-b border-primary-100 last:border-0 last:pb-0"
                    >
                      <span className="text-primary-700 font-medium">{item.job}</span>
                      <span className="text-accent-600 font-bold text-lg">{item.price}</span>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-8 p-4 bg-primary-50 border-l-4 border-primary-700">
                  <p className="text-primary-900 font-semibold">Custom Tailoring Available</p>
                  <p className="text-sm text-primary-600">Complex alterations priced individually</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6"
          >
            <div>
              <span className="inline-flex items-center gap-2 text-accent-600 text-sm font-semibold tracking-widest uppercase mb-4">
                <span className="w-8 h-[2px] bg-accent-500" />
                Testimonials
              </span>
              <h2 className="text-4xl font-bold text-primary-900">What Our Customers Say</h2>
            </div>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-accent-500 text-xl" />
              ))}
              <span className="ml-2 text-primary-600 font-semibold">4.9 on Google</span>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'David K.', role: 'Finance Executive', text: 'Best dry cleaner in Manhattan! My suits always come back perfect. The same-day service is a lifesaver.' },
              { name: 'Emily R.', role: 'Bride', text: 'The tailoring work is exceptional. They altered my wedding dress beautifully. Highly recommend!' },
              { name: 'James L.', role: 'Loyal Customer', text: 'Been coming here for 10 years. Consistent quality, fair prices, and the staff remembers your name.' },
            ].map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 shadow-lg relative"
              >
                <div className="absolute top-6 right-6 text-6xl text-primary-100 font-serif">"</div>
                <p className="text-primary-600 mb-8 leading-relaxed relative z-10">{review.text}</p>
                <div className="flex items-center gap-4 border-t border-primary-100 pt-6">
                  <div className="w-12 h-12 bg-primary-900 text-white flex items-center justify-center font-bold text-lg">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-primary-900">{review.name}</p>
                    <p className="text-sm text-primary-500">{review.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-accent-500">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row items-center justify-between gap-10"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-4 leading-tight">
                Ready to Experience<br />the Difference?
              </h2>
              <p className="text-xl text-primary-800 max-w-lg">
                Visit us today or call to schedule a pickup. First-time customers get 20% off!
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+12125551234"
                className="inline-flex items-center justify-center gap-3 bg-primary-900 text-white px-8 py-4 hover:bg-primary-800 transition-all duration-300 font-bold text-lg"
              >
                <FaPhone />
                Call Now
              </a>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-transparent text-primary-900 px-8 py-4 hover:bg-primary-900 hover:text-white transition-all duration-300 font-bold text-lg border-2 border-primary-900"
              >
                <FaMapMarkerAlt />
                Get Directions
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
                  <HiSparkles className="text-white text-xl" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  Fresh<span className="text-accent-400">Press</span>
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-gray-400">
                Manhattan's premier dry cleaning and tailoring service. Quality care for your garments since 1995.
              </p>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Contact</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary-500/20 rounded-lg flex items-center justify-center">
                    <FaMapMarkerAlt className="text-accent-400 text-sm" />
                  </div>
                  <span className="text-sm">456 Clean Street, New York, NY 10001</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary-500/20 rounded-lg flex items-center justify-center">
                    <FaPhone className="text-accent-400 text-sm" />
                  </div>
                  <a href="tel:+12125551234" className="text-sm hover:text-accent-400 transition-colors">
                    (212) 555-1234
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Business Hours</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Monday - Friday</span>
                  <span className="text-white">7:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Saturday</span>
                  <span className="text-white">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Sunday</span>
                  <span className="text-white">9:00 AM - 4:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} FreshPress Cleaners. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
