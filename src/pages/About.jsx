import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaCode, FaRocket, FaPalette, FaMobile } from 'react-icons/fa';

const About = () => {
  const services = [
    {
      icon: FaCode,
      title: 'Modern Development',
      description: 'Built with React, Tailwind CSS, and the latest web technologies for optimal performance.',
    },
    {
      icon: FaPalette,
      title: 'Custom Design',
      description: 'Each template is professionally designed to match your industry and brand identity.',
    },
    {
      icon: FaMobile,
      title: 'Fully Responsive',
      description: 'All templates work seamlessly across desktop, tablet, and mobile devices.',
    },
    {
      icon: FaRocket,
      title: 'Fast Delivery',
      description: 'Quick turnaround times to get your business online as soon as possible.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      {/* Back button */}
      <div className="fixed top-8 left-8 z-50">
        <Link to="/">
          <motion.button
            whileHover={{ scale: 1.05, x: -5 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-3 bg-white bg-opacity-10 backdrop-blur-md text-white rounded-lg hover:bg-opacity-20 transition-all"
          >
            <FaArrowLeft />
            <span>Back</span>
          </motion.button>
        </Link>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            About Us
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            We create professional, modern website templates specifically designed for NYC small businesses
          </p>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-8 md:p-12 mb-16 border border-white border-opacity-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Our Mission
          </h2>
          <p className="text-lg text-gray-200 leading-relaxed mb-4">
            We believe every small business deserves a professional online presence. Our templates are crafted with care,
            combining modern design principles with functionality that drives results.
          </p>
          <p className="text-lg text-gray-200 leading-relaxed">
            Each template is built specifically for NYC small businesses, understanding the unique needs of dentists,
            dry cleaners, clothing stores, restaurants, and more.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="bg-white bg-opacity-5 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-10 hover:border-opacity-30 transition-all"
              >
                <service.icon className="text-5xl text-blue-400 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Explore our template showcase and find the perfect design for your business
          </p>
          <Link to="/templates">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-purple-600 px-12 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all"
            >
              View Templates
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
