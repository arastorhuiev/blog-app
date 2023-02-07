/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blog: {
          dark: '#2B2B2B',
        },
      },
    },
  },
  plugins: [],
};