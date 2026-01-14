import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserMd, FaAward, FaClock, FaCheckCircle, FaStar, FaPhone, FaCalendarAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    preferredDate: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you! We will contact you soon to confirm your appointment.');
  };

  const features = [
    {
      icon: <FaUserMd className="text-3xl" />,
      title: 'Expert Team',
      description: 'Board-certified dentists with 20+ years experience',
    },
    {
      icon: <FaAward className="text-3xl" />,
      title: 'Modern Technology',
      description: 'State-of-the-art digital imaging & equipment',
    },
    {
      icon: <FaClock className="text-3xl" />,
      title: 'Flexible Hours',
      description: 'Evening & weekend appointments available',
    },
  ];

  const stats = [
    { number: '15K+', label: 'Happy Patients' },
    { number: '20+', label: 'Years Experience' },
    { number: '99%', label: 'Satisfaction Rate' },
    { number: '5★', label: 'Google Rating' },
  ];

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Hero Section - Clean Split Design */}
      <section className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 min-h-[85vh]">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col justify-center px-6 sm:px-12 lg:px-16 py-16 lg:py-24"
            >
              <div className="inline-flex items-center gap-2 text-primary-600 mb-6">
                <span className="w-8 h-[2px] bg-primary-500" />
                <span className="text-sm font-semibold tracking-wide uppercase">Accepting New Patients</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Your Smile,
                <span className="block text-primary-600">Our Priority</span>
              </h1>

              <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-md">
                Experience exceptional dental care in a comfortable, modern environment.
                We're dedicated to helping you achieve the healthy, beautiful smile you deserve.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a
                  href="#appointment"
                  className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-full hover:bg-primary-700 transition-all duration-300 font-semibold text-lg"
                >
                  <FaCalendarAlt />
                  Book Appointment
                </a>
                <a
                  href="tel:+12125551234"
                  className="inline-flex items-center justify-center gap-2 text-gray-700 px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 font-semibold text-lg border-2 border-gray-200"
                >
                  <FaPhone className="text-primary-600" />
                  (212) 555-1234
                </a>
              </div>

              {/* Stats Row */}
              <div className="flex gap-8 pt-8 border-t border-gray-100">
                {stats.slice(0, 3).map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  >
                    <div className="text-3xl font-bold text-primary-600 mb-1">{stat.number}</div>
                    <div className="text-gray-500 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right - Image Area */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-100 via-primary-50 to-accent-50" />
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80')`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-white/80" />

              {/* Floating Card */}
              <div className="absolute bottom-12 left-0 -translate-x-1/4 bg-white p-6 rounded-2xl shadow-2xl max-w-xs">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-accent-100 rounded-full flex items-center justify-center">
                    <FaStar className="text-accent-500" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">5.0 Rating</div>
                    <div className="text-sm text-gray-500">500+ Reviews</div>
                  </div>
                </div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-sm" />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Strip */}
      <section className="bg-primary-600 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-primary-500">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center gap-4 py-4 md:py-0 md:px-8 first:md:pl-0 last:md:pr-0"
              >
                <div className="text-white/80">{feature.icon}</div>
                <div>
                  <h3 className="font-semibold text-white">{feature.title}</h3>
                  <p className="text-primary-100 text-sm">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment Form Section */}
      <section id="appointment" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 text-primary-600 mb-4">
              <span className="w-8 h-[2px] bg-primary-500" />
              <span className="text-sm font-semibold tracking-wide uppercase">Book Your Visit</span>
              <span className="w-8 h-[2px] bg-primary-500" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Schedule Your Appointment
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We make dental visits easy and convenient. Fill out the form and our team
              will contact you within 24 hours to confirm your appointment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Steps Side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2 space-y-6"
            >
              {[
                { step: '01', title: 'Fill Out the Form', desc: 'Provide your information and preferred time' },
                { step: '02', title: 'We\'ll Confirm', desc: 'Our team will call you within 24 hours' },
                { step: '03', title: 'Visit Our Office', desc: 'Enjoy professional, compassionate care' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-5 p-5 bg-white rounded-xl border border-gray-100"
                >
                  <div className="text-4xl font-bold text-primary-200">{item.step}</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}

              {/* Emergency Card */}
              <div className="bg-primary-700 p-6 rounded-xl text-white">
                <h3 className="font-bold text-lg mb-2">Need Immediate Care?</h3>
                <p className="text-primary-200 text-sm mb-4">
                  For dental emergencies, please call us directly.
                </p>
                <a
                  href="tel:+12125551234"
                  className="inline-flex items-center gap-2 text-white font-semibold hover:text-primary-200 transition-colors"
                >
                  <FaPhone />
                  (212) 555-1234
                </a>
              </div>
            </motion.div>

            {/* Form Side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-3"
            >
              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        placeholder="(212) 555-1234"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                        Service Needed
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      >
                        <option value="">Select a service</option>
                        <option value="cleaning">General Cleaning</option>
                        <option value="exam">Dental Exam</option>
                        <option value="cosmetic">Cosmetic Consultation</option>
                        <option value="emergency">Emergency Care</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        id="preferredDate"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Additional Information
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="3"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                      placeholder="Tell us more about your needs..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary-600 text-white px-8 py-4 rounded-lg hover:bg-primary-700 transition-all duration-300 font-semibold text-lg"
                  >
                    Submit Request
                  </button>

                  <p className="text-sm text-gray-500 text-center flex items-center justify-center gap-2">
                    <FaCheckCircle className="text-primary-500" />
                    We'll contact you within 24 hours
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 text-primary-600 mb-4">
              <span className="w-8 h-[2px] bg-primary-500" />
              <span className="text-sm font-semibold tracking-wide uppercase">Patient Reviews</span>
              <span className="w-8 h-[2px] bg-primary-500" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900">What Our Patients Say</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Sarah M.', text: 'Best dental experience ever! The staff is incredibly friendly and professional. I actually look forward to my appointments now.' },
              { name: 'Michael R.', text: 'Dr. Chen and team are amazing. They made my dental anxiety disappear. Highly recommend SmileRight to everyone!' },
              { name: 'Jennifer L.', text: 'Modern facility, gentle care, and beautiful results. My smile has never looked better. Thank you SmileRight!' },
            ].map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative p-8 border-l-4 border-primary-500 bg-gray-50"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-primary-400 text-sm" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed italic">"{review.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold">
                    {review.name.charAt(0)}
                  </div>
                  <p className="font-semibold text-gray-900">{review.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="bg-primary-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Explore Our Practice</h3>
              <p className="text-primary-200">Learn more about what we offer</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/services"
                className="px-8 py-3 bg-white text-primary-700 rounded-full hover:bg-primary-50 transition-colors font-semibold"
              >
                View Services
              </Link>
              <Link
                to="/about"
                className="px-8 py-3 text-white rounded-full hover:bg-primary-600 transition-all font-semibold border border-white/30"
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="px-8 py-3 text-white rounded-full hover:bg-primary-600 transition-all font-semibold border border-white/30"
              >
                Contact Info
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
