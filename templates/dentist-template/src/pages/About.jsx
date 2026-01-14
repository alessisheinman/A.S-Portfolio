import { motion } from 'framer-motion';
import { FaAward, FaHeart, FaUsers, FaShieldAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const About = () => {
  const values = [
    {
      icon: <FaHeart className="text-4xl text-accent-500" />,
      title: 'Patient-Centered Care',
      description: 'Your comfort and well-being are at the heart of everything we do.',
    },
    {
      icon: <FaAward className="text-4xl text-accent-500" />,
      title: 'Excellence',
      description: 'We maintain the highest standards of dental care and professionalism.',
    },
    {
      icon: <FaUsers className="text-4xl text-accent-500" />,
      title: 'Family Friendly',
      description: 'We provide comprehensive care for patients of all ages.',
    },
    {
      icon: <FaShieldAlt className="text-4xl text-accent-500" />,
      title: 'Trust & Integrity',
      description: 'Honest recommendations and transparent treatment planning.',
    },
  ];

  const team = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Lead Dentist, DDS',
      credentials: 'Columbia University School of Dental Medicine',
      experience: '15+ years of experience in general and cosmetic dentistry',
    },
    {
      name: 'Dr. Michael Chen',
      role: 'Associate Dentist, DMD',
      credentials: 'NYU College of Dentistry',
      experience: 'Specializes in restorative and implant dentistry',
    },
    {
      name: 'Dr. Emily Rodriguez',
      role: 'Pediatric Dentist, DDS',
      credentials: 'Harvard School of Dental Medicine',
      experience: 'Board-certified in pediatric dentistry',
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About SmileRight Dental</h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Your trusted partner for exceptional dental care in Manhattan since 2008.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-4">
                SmileRight Dental was founded in 2008 with a simple mission: to provide exceptional dental care in a comfortable, welcoming environment. What started as a small practice has grown into one of Manhattan's most trusted dental offices.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Our team of experienced dentists and hygienists are committed to staying at the forefront of dental technology and techniques. We believe in preventive care and patient education, empowering you to make informed decisions about your oral health.
              </p>
              <p className="text-lg text-gray-700">
                Whether you need a routine cleaning or a complete smile makeover, we're here to help you achieve optimal oral health and the confidence that comes with a beautiful smile.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl p-12 flex items-center justify-center h-96"
            >
              <div className="text-center">
                <div className="text-6xl font-bold text-primary-700 mb-2">15+</div>
                <div className="text-2xl text-primary-800">Years of Excellence</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our practice and define our commitment to you.
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
                className="bg-white p-8 rounded-xl shadow-lg text-center"
              >
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced, compassionate professionals dedicated to your dental health.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-primary-50 to-primary-100 p-8 rounded-xl"
              >
                <div className="w-32 h-32 bg-gradient-to-br from-primary-200 to-primary-300 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-4xl text-primary-700 font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 text-center mb-2">
                  {member.name}
                </h3>
                <p className="text-accent-600 font-semibold text-center mb-4">{member.role}</p>
                <p className="text-sm text-gray-700 mb-2">{member.credentials}</p>
                <p className="text-sm text-gray-600">{member.experience}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-accent-500 to-accent-600 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Join Our Dental Family
          </h2>
          <p className="text-xl text-white mb-10">
            Experience the SmileRight difference. Schedule your appointment today.
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

export default About;
