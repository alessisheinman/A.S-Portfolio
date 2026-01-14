/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Monkey Bar inspired - dark, sophisticated
        primary: {
          50: '#f5f5f5',
          100: '#e0e0e0',
          200: '#c2c2c2',
          300: '#a3a3a3',
          400: '#858585',
          500: '#666666',
          600: '#4d4d4d',
          700: '#4a4237',  // Warm dark brown for menu text
          800: '#1a1a1a',
          900: '#0a0a0a',
        },
        accent: {
          400: '#d4af37',  // Gold
          500: '#c9a02f',
          600: '#b88f28',
        },
        leather: {
          500: '#3d2817',
          600: '#2d1f12',
        },
      },
    },
  },
  plugins: [],
}
