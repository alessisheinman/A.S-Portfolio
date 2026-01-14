import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaTruck, FaUndo, FaShieldAlt, FaGem, FaArrowRight } from 'react-icons/fa';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Home = () => {
  const featuredProducts = products.slice(0, 4);

  const features = [
    {
      icon: <FaTruck className="text-2xl" />,
      title: 'Free Shipping',
      description: 'On orders over $100',
    },
    {
      icon: <FaUndo className="text-2xl" />,
      title: 'Easy Returns',
      description: '30-day return policy',
    },
    {
      icon: <FaShieldAlt className="text-2xl" />,
      title: 'Secure Payment',
      description: '100% secure transactions',
    },
    {
      icon: <FaGem className="text-2xl" />,
      title: 'Premium Quality',
      description: 'Curated collections',
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white overflow-hidden">
        <div className="relative h-[90vh] min-h-[600px] flex items-center justify-center">
          {/* Background Image with Parallax Effect */}
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1600&q=90)',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          </motion.div>

          {/* Decorative Elements */}
          <div className="absolute top-20 left-10 w-32 h-32 border border-white/10 rounded-full animate-pulse" />
          <div className="absolute bottom-20 right-10 w-48 h-48 border border-white/5 rounded-full" />

          <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-accent-400 tracking-[0.3em] text-sm font-medium mb-6"
              >
                SPRING/SUMMER 2025
              </motion.p>

              <h1 className="text-6xl md:text-8xl font-serif font-bold mb-6 leading-[0.9]">
                <span className="block">New</span>
                <span className="block bg-gradient-to-r from-white via-accent-300 to-white bg-clip-text text-transparent">
                  Collection
                </span>
              </h1>

              <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-2xl mx-auto leading-relaxed font-light">
                Discover timeless pieces crafted for the modern wardrobe
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/shop"
                  className="group inline-flex items-center justify-center gap-3 bg-white text-gray-900 px-10 py-4 hover:bg-accent-500 hover:text-white transition-all duration-300 font-semibold text-lg"
                >
                  Shop Now
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center gap-3 bg-transparent border-2 border-white/30 text-white px-10 py-4 hover:bg-white/10 hover:border-white/50 transition-all duration-300 font-semibold text-lg"
                >
                  Our Story
                </Link>
              </div>
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
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center gap-2 text-white/60"
            >
              <span className="text-xs tracking-widest">SCROLL</span>
              <div className="w-px h-12 bg-gradient-to-b from-white/60 to-transparent" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="bg-white py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-gray-50 text-accent-500 rounded-full group-hover:bg-accent-500 group-hover:text-white transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                <p className="text-sm text-gray-500">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-accent-500 tracking-[0.2em] text-sm font-medium mb-4">CURATED FOR YOU</p>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-4">
              Featured Pieces
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              Handpicked styles from our latest collection
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link
              to="/shop"
              className="group inline-flex items-center gap-3 border-2 border-gray-900 text-gray-900 px-10 py-4 hover:bg-gray-900 hover:text-white transition-all duration-300 font-semibold"
            >
              View All Products
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Category Showcase */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-accent-500 tracking-[0.2em] text-sm font-medium mb-4">EXPLORE</p>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-gray-900">
              Shop by Category
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Tops',
                subtitle: 'Blouses & Shirts',
                image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&q=90',
              },
              {
                title: 'Bottoms',
                subtitle: 'Pants & Skirts',
                image: 'https://images.unsplash.com/photo-1475178626620-a4d074967452?w=800&q=90',
              },
              {
                title: 'Outerwear',
                subtitle: 'Jackets & Coats',
                image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&q=90',
              },
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative group cursor-pointer overflow-hidden h-[500px]"
              >
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-0 flex flex-col items-center justify-end pb-12 text-white">
                  <p className="text-sm tracking-widest text-white/70 mb-2">{category.subtitle}</p>
                  <h3 className="text-4xl font-serif font-bold mb-6">{category.title}</h3>
                  <Link
                    to="/shop"
                    className="group/btn inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-3 hover:bg-accent-500 hover:text-white transition-all duration-300 font-semibold"
                  >
                    Shop {category.title}
                    <FaArrowRight className="text-sm group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lifestyle Banner */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1600&q=90)',
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-accent-400 tracking-[0.3em] text-sm font-medium mb-4">INSTAGRAM</p>
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">@luxeboutique</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-xl mx-auto">
              Follow us for style inspiration and exclusive previews
            </p>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border-2 border-white text-white px-8 py-4 hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold"
            >
              Follow Us
            </a>
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-gray-900 text-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-accent-400 tracking-[0.2em] text-sm font-medium mb-4">NEWSLETTER</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Join the Club</h2>
            <p className="text-gray-400 mb-10 text-lg max-w-xl mx-auto">
              Subscribe for exclusive offers, early access to new arrivals, and 10% off your first order.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-accent-500 transition-colors"
              />
              <button
                type="submit"
                className="bg-accent-500 text-white px-8 py-4 hover:bg-accent-400 transition-colors font-semibold whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
