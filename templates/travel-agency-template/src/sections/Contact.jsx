import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { HiMail, HiPhone, HiLocationMarker, HiPaperAirplane, HiUser, HiChatAlt2 } from 'react-icons/hi';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: HiLocationMarker,
      title: 'Visit Us',
      line1: '123 Luxury Avenue',
      line2: 'Beverly Hills, CA 90210',
    },
    {
      icon: HiPhone,
      title: 'Call Us',
      line1: '+1 (800) WANDERLUST',
      line2: 'Mon-Fri: 9AM - 8PM',
    },
    {
      icon: HiMail,
      title: 'Email Us',
      line1: 'hello@wanderlust.com',
      line2: 'We reply within 24 hours',
    },
  ];

  const inputClasses = `
    w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white
    placeholder:text-white/30 focus:outline-none focus:border-gold-500/50
    focus:ring-2 focus:ring-gold-500/20 transition-all duration-300
  `;

  return (
    <section id="contact" ref={ref} className="relative z-10 py-32 bg-gradient-to-b from-luxury-darker to-luxury-dark">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-gold-500/5 rounded-full blur-[150px]" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-gold-400/5 rounded-full blur-[180px]" />
      </div>

      {/* Decorative Grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(212,175,55,0.3) 1px, transparent 0)`,
          backgroundSize: '50px 50px',
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="section-subtitle">Get in Touch</p>
          <h2 className="section-title">
            <span className="text-white">Begin Your </span>
            <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Ready to explore the world in style? Let's create your perfect
            luxury travel experience together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ x: 10, transition: { duration: 0.2 } }}
                className="glass rounded-2xl p-6 group hover:border-gold-500/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-500/20 to-gold-600/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="text-gold-400 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-1">{info.title}</h3>
                    <p className="text-white/60">{info.line1}</p>
                    <p className="text-white/40 text-sm">{info.line2}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Map Preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="glass rounded-2xl p-2 aspect-video overflow-hidden"
            >
              <div className="w-full h-full bg-luxury-light rounded-xl flex items-center justify-center relative overflow-hidden">
                {/* Stylized Map Background */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4af37' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  }} />
                </div>
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center animate-pulse-slow">
                    <HiLocationMarker className="text-luxury-darker text-2xl" />
                  </div>
                  <p className="text-white/50 text-sm">Interactive map coming soon</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3"
          >
            <div className="glass rounded-3xl p-8 md:p-12 relative overflow-hidden">
              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-gold-500/10 to-transparent rounded-bl-full" />

              <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                {/* Name & Email Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <div className="relative">
                    <label className="block text-white/70 text-sm font-medium mb-2">
                      Full Name
                    </label>
                    <div className="relative">
                      <HiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className={`${inputClasses} pl-12`}
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div className="relative">
                    <label className="block text-white/70 text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <HiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className={`${inputClasses} pl-12`}
                      />
                    </div>
                  </div>
                </div>

                {/* Phone Field */}
                <div className="relative">
                  <label className="block text-white/70 text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <HiPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className={`${inputClasses} pl-12`}
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div className="relative">
                  <label className="block text-white/70 text-sm font-medium mb-2">
                    Your Message
                  </label>
                  <div className="relative">
                    <HiChatAlt2 className="absolute left-4 top-4 text-white/30" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your dream destination and travel preferences..."
                      rows={5}
                      required
                      className={`${inputClasses} pl-12 resize-none`}
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className={`
                    w-full py-5 rounded-xl font-semibold uppercase tracking-widest text-sm
                    flex items-center justify-center gap-3 transition-all duration-500
                    ${isSubmitting
                      ? 'bg-gold-500/50 text-luxury-darker/70 cursor-wait'
                      : isSubmitted
                        ? 'bg-green-500 text-white'
                        : 'btn-luxury'
                    }
                  `}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </>
                  ) : isSubmitted ? (
                    <>
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <HiPaperAirplane className="text-lg" />
                      Send Message
                    </>
                  )}
                </motion.button>

                {/* Privacy Note */}
                <p className="text-center text-white/30 text-xs">
                  By submitting this form, you agree to our{' '}
                  <a href="#" className="text-gold-400/70 hover:text-gold-400 transition-colors">
                    Privacy Policy
                  </a>{' '}
                  and{' '}
                  <a href="#" className="text-gold-400/70 hover:text-gold-400 transition-colors">
                    Terms of Service
                  </a>
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
