import { motion } from 'framer-motion';
import { FaTooth, FaSmile, FaShieldAlt, FaChild, FaStethoscope, FaBolt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: <FaTooth className="text-5xl text-accent-500" />,
      title: 'General Dentistry',
      items: [
        'Comprehensive Dental Exams',
        'Professional Teeth Cleaning',
        'Cavity Fillings',
        'Root Canal Treatment',
        'Tooth Extractions',
        'Gum Disease Treatment',
      ],
    },
    {
      icon: <FaSmile className="text-5xl text-accent-500" />,
      title: 'Cosmetic Dentistry',
      items: [
        'Teeth Whitening',
        'Porcelain Veneers',
        'Dental Bonding',
        'Smile Makeovers',
        'Invisalign Clear Aligners',
        'Gum Contouring',
      ],
    },
    {
      icon: <FaShieldAlt className="text-5xl text-accent-500" />,
      title: 'Restorative Dentistry',
      items: [
        'Dental Crowns',
        'Dental Bridges',
        'Dental Implants',
        'Dentures',
        'Inlays and Onlays',
        'Full Mouth Reconstruction',
      ],
    },
    {
      icon: <FaChild className="text-5xl text-accent-500" />,
      title: 'Pediatric Dentistry',
      items: [
        'Children\'s Dental Exams',
        'Fluoride Treatments',
        'Dental Sealants',
        'Cavity Prevention',
        'Early Orthodontic Assessment',
        'Gentle Care for Kids',
      ],
    },
    {
      icon: <FaStethoscope className="text-5xl text-accent-500" />,
      title: 'Preventive Care',
      items: [
        'Regular Checkups',
        'Oral Cancer Screenings',
        'Digital X-Rays',
        'Periodontal Maintenance',
        'Custom Mouthguards',
        'Patient Education',
      ],
    },
    {
      icon: <FaBolt className="text-5xl text-accent-500" />,
      title: 'Emergency Dentistry',
      items: [
        'Same-Day Appointments',
        'Toothache Relief',
        'Dental Trauma Care',
        'Lost Filling/Crown Repair',
        'Abscess Treatment',
        'Emergency Extractions',
      ],
    },
  ];

  return (
    <div className="pt-16 bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Comprehensive dental care using the latest technology and techniques to keep your smile healthy and beautiful.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <ul className="space-y-2">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2">
                      <span className="text-accent-500 mt-1">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              State-of-the-Art Technology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We invest in the latest dental technology to provide you with the most accurate diagnoses and comfortable treatments.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Digital X-Rays',
              'Intraoral Cameras',
              'Laser Dentistry',
              '3D Imaging',
              'CAD/CAM Technology',
              'Sedation Options',
              'Ultrasonic Cleaners',
              'Digital Impressions',
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-primary-50 p-6 rounded-lg text-center"
              >
                <h4 className="font-semibold text-gray-900">{tech}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-accent-500 to-accent-600 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Schedule Your Appointment Today
          </h2>
          <p className="text-xl text-white mb-10">
            Let us help you achieve the healthy, beautiful smile you deserve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+12125551234"
              className="bg-white text-accent-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg"
            >
              Call (212) 555-1234
            </a>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-accent-600 transition-colors font-semibold text-lg"
            >
              Book Online
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
