import { FaFacebook, FaInstagram, FaTwitter, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-accent-500/20 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* About Section */}
          <div>
            <img
              src="/images/logo.png"
              alt="Bella's Ristorante"
              className="h-20 w-auto mb-4"
            />
            <p className="text-sm font-light leading-relaxed">
              Manhattan's premier destination for authentic Italian cuisine and masterfully crafted cocktails since 1998.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 tracking-wider text-sm">NAVIGATION</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-sm font-light hover:text-accent-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-sm font-light hover:text-accent-400 transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm font-light hover:text-accent-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm font-light hover:text-accent-400 transition-colors">
                  Reservations
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4 tracking-wider text-sm">CONTACT</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-accent-400 mt-1" />
                <span className="text-sm font-light">123 Italian Way<br />New York, NY 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-accent-400" />
                <a href="tel:+12125551234" className="text-sm font-light hover:text-accent-400 transition-colors">
                  (212) 555-1234
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-accent-400" />
                <a href="mailto:reservations@bellasristorante.com" className="text-sm font-light hover:text-accent-400 transition-colors">
                  reservations@bellasristorante.com
                </a>
              </li>
            </ul>
          </div>

          {/* Hours & Social */}
          <div>
            <h4 className="text-white font-semibold mb-4 tracking-wider text-sm">HOURS</h4>
            <div className="text-sm font-light mb-6 space-y-2">
              <p>Dinner: 5:00 PM - 11:00 PM</p>
              <p>Bar: 5:00 PM - 1:00 AM</p>
              <p className="text-accent-400 text-xs tracking-wider mt-3">OPEN DAILY</p>
            </div>
            <div className="flex gap-5">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent-400 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook size={22} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent-400 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram size={22} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent-400 transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter size={22} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-accent-500/20 mt-12 pt-8 text-center text-xs font-light">
          <p>&copy; {new Date().getFullYear()} Bella's Ristorante. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
