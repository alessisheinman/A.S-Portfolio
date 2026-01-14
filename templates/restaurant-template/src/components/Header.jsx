import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaPhone } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-primary-900 border-b border-accent-500/20 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2">
          {/* Logo */}
          <Link to="/" className="flex items-center -my0">
            <img
              src="/images/logo.png"
              alt="Bella's Ristorante"
              className="h-28 md:h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <Link to="/" className="text-gray-300 hover:text-accent-400 transition-colors font-light text-sm tracking-wider">
              HOME
            </Link>
            <Link to="/menu" className="text-gray-300 hover:text-accent-400 transition-colors font-light text-sm tracking-wider">
              MENU
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-accent-400 transition-colors font-light text-sm tracking-wider">
              ABOUT
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-accent-400 transition-colors font-light text-sm tracking-wider">
              CONTACT
            </Link>
            <a
              href="tel:+12125551234"
              className="flex items-center gap-2 bg-accent-500 text-primary-900 px-6 py-2.5 hover:bg-accent-400 transition-colors font-semibold text-sm tracking-wide"
            >
              <FaPhone className="text-xs" />
              <span>(212) 555-1234</span>
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-accent-400 hover:text-accent-300 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-6 border-t border-accent-500/20">
            <div className="flex flex-col space-y-5 pt-6">
              <Link
                to="/"
                className="text-gray-300 hover:text-accent-400 transition-colors font-light text-sm tracking-wider"
                onClick={() => setIsMenuOpen(false)}
              >
                HOME
              </Link>
              <Link
                to="/menu"
                className="text-gray-300 hover:text-accent-400 transition-colors font-light text-sm tracking-wider"
                onClick={() => setIsMenuOpen(false)}
              >
                MENU
              </Link>
              <Link
                to="/about"
                className="text-gray-300 hover:text-accent-400 transition-colors font-light text-sm tracking-wider"
                onClick={() => setIsMenuOpen(false)}
              >
                ABOUT
              </Link>
              <Link
                to="/contact"
                className="text-gray-300 hover:text-accent-400 transition-colors font-light text-sm tracking-wider"
                onClick={() => setIsMenuOpen(false)}
              >
                CONTACT
              </Link>
              <a
                href="tel:+12125551234"
                className="flex items-center gap-2 bg-accent-500 text-primary-900 px-6 py-2.5 hover:bg-accent-400 transition-colors w-fit font-semibold text-sm"
              >
                <FaPhone className="text-xs" />
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
