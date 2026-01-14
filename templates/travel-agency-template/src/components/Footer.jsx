import { motion } from 'framer-motion';
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube, FaPinterestP } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaInstagram, href: '#', label: 'Instagram' },
    { icon: FaFacebookF, href: '#', label: 'Facebook' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaYoutube, href: '#', label: 'YouTube' },
    { icon: FaPinterestP, href: '#', label: 'Pinterest' },
  ];

  const footerLinks = [
    {
      title: 'Destinations',
      links: ['Maldives', 'Santorini', 'Bali', 'Swiss Alps', 'Dubai'],
    },
    {
      title: 'Experiences',
      links: ['Luxury Cruises', 'Private Jets', 'Safari Adventures', 'Wellness Retreats', 'Culinary Tours'],
    },
    {
      title: 'Company',
      links: ['About Us', 'Our Team', 'Careers', 'Press', 'Blog'],
    },
    {
      title: 'Support',
      links: ['Contact Us', 'FAQs', 'Privacy Policy', 'Terms of Service', 'Travel Insurance'],
    },
  ];

  return (
    <footer className="relative z-20 bg-luxury-darker border-t border-white/5">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center">
                <span className="font-display text-xl text-luxury-darker font-bold">W</span>
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-gradient">Wanderlust</h3>
                <p className="text-[10px] uppercase tracking-[0.3em] text-gold-400/70">Luxury Travel</p>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-8">
              Crafting extraordinary journeys for discerning travelers. Experience the world's most
              breathtaking destinations with unparalleled luxury and personalized service.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/60 hover:text-gold-400 hover:border-gold-500/30 transition-all duration-300"
                >
                  <social.icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {footerLinks.map((column, index) => (
            <div key={column.title}>
              <h4 className="text-gold-400 font-semibold uppercase tracking-wider text-sm mb-6">
                {column.title}
              </h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/50 hover:text-gold-400 transition-colors duration-300 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-white/40 text-sm">
            &copy; {currentYear} Wanderlust Travels. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-white/40 hover:text-gold-400 text-sm transition-colors">
              Privacy
            </a>
            <a href="#" className="text-white/40 hover:text-gold-400 text-sm transition-colors">
              Terms
            </a>
            <a href="#" className="text-white/40 hover:text-gold-400 text-sm transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
