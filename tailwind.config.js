/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: '#3B2E9E',
          deep: '#2A1F73',
          gold: '#E8B84B',
          black: '#0A0A0A'
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        script: ['"Great Vibes"', 'cursive'],
        sans: ['Inter', 'sans-serif']
      }
    }
  },
  plugins: []
};