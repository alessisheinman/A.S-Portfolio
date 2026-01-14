import { motion } from 'framer-motion';
import { FaHeart, FaLeaf, FaUsers, FaStar } from 'react-icons/fa';

const About = () => {
  const values = [
    {
      icon: <FaHeart className="text-4xl text-accent-500" />,
      title: 'Passion for Fashion',
      description: 'We curate pieces that we love and believe will elevate your wardrobe.',
    },
    {
      icon: <FaLeaf className="text-4xl text-accent-500" />,
      title: 'Sustainability',
      description: 'Committed to ethical sourcing and environmentally conscious practices.',
    },
    {
      icon: <FaUsers className="text-4xl text-accent-500" />,
      title: 'Community',
      description: 'Building lasting relationships with our customers and partners.',
    },
    {
      icon: <FaStar className="text-4xl text-accent-500" />,
      title: 'Quality First',
      description: 'Every piece is carefully selected for craftsmanship and longevity.',
    },
  ];

  return (
    <div className="pt-16 bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-20">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200)',
          }}
        ></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Our Story</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Timeless style meets modern sophistication
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">About Luxe Boutique</h2>
              <p className="text-lg text-gray-700 mb-4">
                Founded in 2015, Luxe Boutique began with a simple vision: to create a curated shopping experience for those who appreciate quality, craftsmanship, and timeless style.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                We believe that fashion is more than just clothing—it's a form of self-expression, a confidence booster, and an art form. That's why every piece in our collection is carefully selected for its quality, versatility, and ability to stand the test of time.
              </p>
              <p className="text-lg text-gray-700">
                Located in the heart of Manhattan's fashion district, our boutique has become a destination for style-conscious individuals seeking pieces that transcend trends and seasons.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800"
                alt="Boutique Interior"
                className="w-full h-[500px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
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
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">Meet the Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate individuals behind Luxe Boutique
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sophia Martinez',
                role: 'Founder & Creative Director',
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
              },
              {
                name: 'James Chen',
                role: 'Buyer & Merchandiser',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
              },
              {
                name: 'Emma Williams',
                role: 'Style Consultant',
                image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="mb-6 overflow-hidden rounded-lg">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-accent-600 font-medium">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Us Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
              Visit Our Boutique
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Experience our curated collection in person at our Manhattan location.
              Our stylists are here to help you find the perfect pieces for your wardrobe.
            </p>
            <div className="text-lg text-gray-700 mb-8">
              <p className="font-semibold mb-2">789 Fashion Avenue</p>
              <p className="mb-2">New York, NY 10001</p>
              <p>Monday - Saturday: 10:00 AM - 8:00 PM</p>
              <p>Sunday: 12:00 PM - 6:00 PM</p>
            </div>
            <a
              href="/contact"
              className="inline-block bg-gray-900 text-white px-10 py-3 rounded-lg hover:bg-accent-500 transition-colors font-semibold"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
