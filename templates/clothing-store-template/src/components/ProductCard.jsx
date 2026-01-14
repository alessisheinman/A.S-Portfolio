import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaShoppingBag, FaCheck } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState('');
  const [showSizeSelector, setShowSizeSelector] = useState(false);
  const [added, setAdded] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    if (!product.inStock) return;

    if (!selectedSize && product.sizes.length > 0) {
      setShowSizeSelector(true);
      return;
    }

    const sizeToAdd = selectedSize || product.sizes[0];
    addToCart(product, sizeToAdd);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
    setShowSizeSelector(false);
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
    addToCart(product, size);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
    setShowSizeSelector(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group"
    >
      <div className="relative overflow-hidden bg-gray-100 rounded-lg mb-4 aspect-[3/4]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {!product.inStock && (
          <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 text-sm font-semibold rounded">
            Sold Out
          </div>
        )}

        {/* Size Selector Overlay */}
        {showSizeSelector && product.inStock && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center p-4"
          >
            <p className="text-white text-sm mb-4 font-semibold">Select Size</p>
            <div className="grid grid-cols-4 gap-2 mb-4">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => handleSizeSelect(size)}
                  className="bg-white text-gray-900 px-3 py-2 rounded hover:bg-accent-500 hover:text-white transition-colors text-sm font-semibold"
                >
                  {size}
                </button>
              ))}
            </div>
            <button
              onClick={() => setShowSizeSelector(false)}
              className="text-white text-sm underline hover:text-gray-300"
            >
              Cancel
            </button>
          </motion.div>
        )}

        {/* Add to Bag Button */}
        {product.inStock && (
          <button
            onClick={handleAddToCart}
            className={`absolute bottom-4 right-4 p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 ${
              added
                ? 'bg-green-500 text-white'
                : 'bg-white text-gray-900 hover:bg-accent-500 hover:text-white'
            }`}
            aria-label="Add to bag"
          >
            {added ? <FaCheck size={18} /> : <FaShoppingBag size={18} />}
          </button>
        )}
      </div>
      <div>
        <p className="text-sm text-gray-500 mb-1">{product.category}</p>
        <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
        <div className="flex items-center justify-between">
          <p className="text-accent-600 font-semibold">${product.price}</p>
          {selectedSize && (
            <p className="text-xs text-gray-500">Selected: {selectedSize}</p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
