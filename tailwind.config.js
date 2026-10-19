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
          night: '#1F1656',
          gold: '#E8B84B',
          black: '#0A0A0A'
        }
      },
      fontFamily: {
        // These point at the fonts loaded with next/font in app/layout.jsx
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        script: ['var(--font-script)', 'cursive'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};
