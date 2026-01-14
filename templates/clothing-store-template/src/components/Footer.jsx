import { FaFacebook, FaInstagram, FaTwitter, FaPinterest, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="text-2xl font-serif font-bold text-white mb-4">
              LUXE <span className="text-accent-400">BOUTIQUE</span>
            </div>
            <p className="text-sm leading-relaxed">
              Curated fashion for the modern wardrobe. Quality pieces that transcend trends.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Shop</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/shop" className="text-sm hover:text-accent-400 transition-colors">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-sm hover:text-accent-400 transition-colors">
                  Tops
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-sm hover:text-accent-400 transition-colors">
                  Bottoms
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-sm hover:text-accent-400 transition-colors">
                  Outerwear
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-white font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-sm hover:text-accent-400 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-accent-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-accent-400 transition-colors">
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-accent-400 transition-colors">
                  Size Guide
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-accent-400 mt-1" />
                <span className="text-sm">789 Fashion Ave<br />New York, NY 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-accent-400" />
                <a href="tel:+12125551234" className="text-sm hover:text-accent-400 transition-colors">
                  (212) 555-1234
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-accent-400" />
                <a href="mailto:hello@luxeboutique.com" className="text-sm hover:text-accent-400 transition-colors">
                  hello@luxeboutique.com
                </a>
              </li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-accent-400 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-accent-400 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-accent-400 transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-accent-400 transition-colors"
                aria-label="Pinterest"
              >
                <FaPinterest size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Luxe Boutique. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
