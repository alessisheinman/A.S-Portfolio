import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaTooth, FaTshirt, FaShoppingBag, FaUtensils, FaPlane, FaArrowLeft, FaExternalLinkAlt } from 'react-icons/fa';

// Helper to switch between dev (localhost) and production (static) URLs
const getTemplateUrl = (prodPath, devPort) => {
  const isDev = import.meta.env.DEV;
  return isDev ? `http://localhost:${devPort}/` : `/A.S-Portfolio${prodPath}`;
};

const Templates = () => {
  const templates = [
    {
      name: 'SmileRight Dental',
      icon: FaTooth,
      color: 'from-blue-500 to-cyan-600',
      url: getTemplateUrl('/templates/dentist/', 5178),
      features: [
        'Appointment booking focused landing page',
        'Professional dental practice design',
        'Services showcase with detailed descriptions',
        'Contact form and practice information',
        'Responsive design optimized for all devices',
      ],
    },
    {
      name: 'FreshPress Cleaners',
      icon: FaTshirt,
      color: 'from-green-500 to-emerald-600',
      url: getTemplateUrl('/templates/dry-cleaners/', 5183),
      features: [
        'Single-page scrolling design',
        'Dry cleaning and tailoring services combined',
        'Detailed pricing for all services',
        'Business hours and contact information',
        'Theme-appropriate background imagery',
      ],
    },
    {
      name: 'Luxe Boutique',
      icon: FaShoppingBag,
      color: 'from-pink-500 to-rose-600',
      url: getTemplateUrl('/templates/clothing-store/', 5175),
      features: [
        'Full inventory display system with 12 products',
        'Shopping cart with size selection (XXS-XXL)',
        'Cart displays running total',
        'Product filtering and sorting',
        'Modern e-commerce layout',
      ],
    },
    {
      name: 'Savory Restaurant',
      icon: FaUtensils,
      color: 'from-amber-500 to-orange-600',
      url: getTemplateUrl('/templates/restaurant/', 5176),
      features: [
        'Elegant restaurant landing page',
        'Full menu showcase with categories',
        'Reservation-focused design',
        'Location and hours display',
        'Beautiful food imagery integration',
      ],
    },
    {
      name: 'Wanderlust Travel',
      icon: FaPlane,
      color: 'from-purple-500 to-indigo-600',
      url: getTemplateUrl('/templates/travel-agency/', 5177),
      features: [
        'Immersive hero with video background',
        'Destination showcase galleries',
        'Parallax scrolling effects',
        'Customer testimonials section',
        'Contact and booking forms',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Template Showcase
          </h1>
          <p className="text-xl md:text-2xl text-gray-300">
            Professional, modern designs for NYC small businesses
          </p>
        </motion.div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {templates.map((template, index) => (
            <motion.div
              key={template.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white bg-opacity-5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white border-opacity-10 hover:border-opacity-30 transition-all"
            >
              {/* Icon Header */}
              <div className={`bg-gradient-to-r ${template.color} p-8 text-center`}>
                <template.icon className="text-6xl text-white mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-white">{template.name}</h2>
              </div>

              {/* Features */}
              <div className="p-8">
                <ul className="space-y-3 mb-8">
                  {template.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-300">
                      <span className="text-green-400 mt-1"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* View Demo Button */}
                <a
                  href={template.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full bg-gradient-to-r ${template.color} text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 shadow-lg`}
                  >
                    <span>View Live Demo</span>
                    <FaExternalLinkAlt />
                  </motion.button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Templates;
