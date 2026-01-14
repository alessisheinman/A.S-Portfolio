import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaShoppingBag } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getCartCount, toggleCart } = useCart();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCartClick = () => {
    toggleCart();
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white border-b border-gray-200 fixed w-full top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="text-2xl font-serif font-bold text-gray-900">
              LUXE <span className="text-accent-500">BOUTIQUE</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
              Home
            </Link>
            <Link to="/shop" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
              Shop
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
              About
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
              Contact
            </Link>
            <button
              onClick={handleCartClick}
              className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors relative"
              aria-label="Shopping bag"
            >
              <FaShoppingBag size={20} />
              {getCartCount() > 0 && (
                <span className="bg-accent-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
                  {getCartCount()}
                </span>
              )}
            </button>
          </nav>

          {/* Mobile menu button and cart */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={handleCartClick}
              className="flex items-center gap-2 text-gray-900 hover:text-gray-700 transition-colors relative"
              aria-label="Shopping bag"
            >
              <FaShoppingBag size={20} />
              {getCartCount() > 0 && (
                <span className="bg-accent-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
                  {getCartCount()}
                </span>
              )}
            </button>
            <button
              onClick={toggleMenu}
              className="text-gray-900 hover:text-gray-700 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-6 border-t border-gray-200">
            <div className="flex flex-col space-y-4 pt-6">
              <Link
                to="/"
                className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/shop"
                className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Shop
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
