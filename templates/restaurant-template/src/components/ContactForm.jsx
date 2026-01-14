import { useForm } from 'react-hook-form';

const ContactForm = ({ title = "Send Us a Message", submitButtonText = "Send Message" }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log('Form submitted:', data);
    // In a real application, this would send data to a backend or email service
    alert('Thank you for your message! We will get back to you soon.');
    reset();
  };

  return (
    <div className="bg-black border border-accent-500/20 p-10">
      <h3 className="text-3xl font-serif font-bold text-white mb-8 tracking-wide">{title}</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-white mb-2 tracking-wider">
            FULL NAME *
          </label>
          <input
            type="text"
            id="name"
            {...register('name', { required: 'Name is required' })}
            className="w-full px-4 py-3 bg-primary-800 border border-accent-500/20 text-gray-300 focus:border-accent-400 focus:outline-none transition-all font-light"
          />
          {errors.name && (
            <p className="mt-2 text-sm text-accent-400">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-white mb-2 tracking-wider">
            EMAIL ADDRESS *
          </label>
          <input
            type="email"
            id="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            })}
            className="w-full px-4 py-3 bg-primary-800 border border-accent-500/20 text-gray-300 focus:border-accent-400 focus:outline-none transition-all font-light"
          />
          {errors.email && (
            <p className="mt-2 text-sm text-accent-400">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-white mb-2 tracking-wider">
            PHONE NUMBER
          </label>
          <input
            type="tel"
            id="phone"
            {...register('phone')}
            className="w-full px-4 py-3 bg-primary-800 border border-accent-500/20 text-gray-300 focus:border-accent-400 focus:outline-none transition-all font-light"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-white mb-2 tracking-wider">
            MESSAGE *
          </label>
          <textarea
            id="message"
            rows="5"
            {...register('message', { required: 'Message is required' })}
            className="w-full px-4 py-3 bg-primary-800 border border-accent-500/20 text-gray-300 focus:border-accent-400 focus:outline-none transition-all resize-none font-light"
          ></textarea>
          {errors.message && (
            <p className="mt-2 text-sm text-accent-400">{errors.message.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-accent-500 text-black py-4 px-6 font-semibold hover:bg-accent-400 transition-colors focus:outline-none tracking-wide"
        >
          {submitButtonText}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
