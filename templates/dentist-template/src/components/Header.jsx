import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaPhone } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white fixed w-full top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <div className="text-xl font-bold text-gray-900">
              SmileRight
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-primary-600 transition-colors font-medium">
              Home
            </Link>
            <Link to="/services" className="text-gray-600 hover:text-primary-600 transition-colors font-medium">
              Services
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-primary-600 transition-colors font-medium">
              About
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-primary-600 transition-colors font-medium">
              Contact
            </Link>
            <a
              href="tel:+12125551234"
              className="flex items-center gap-2 bg-primary-600 text-white px-6 py-2.5 rounded-full hover:bg-primary-700 transition-colors font-medium"
            >
              <FaPhone className="text-sm" />
              <span>(212) 555-1234</span>
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-700 hover:text-primary-600 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-6 border-t border-gray-100">
            <div className="flex flex-col space-y-4 pt-6">
              <Link
                to="/"
                className="text-gray-600 hover:text-primary-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/services"
                className="text-gray-600 hover:text-primary-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/about"
                className="text-gray-600 hover:text-primary-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-gray-600 hover:text-primary-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <a
                href="tel:+12125551234"
                className="flex items-center gap-2 bg-primary-600 text-white px-6 py-2.5 rounded-full hover:bg-primary-700 transition-colors w-fit font-medium"
              >
                <FaPhone className="text-sm" />
                <span>(212) 555-1234</span>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
