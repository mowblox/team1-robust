/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': {'min': '200px', 'max': '767px' }
    },
    extend: {
      colors: {

      }
    },
  },
  plugins: [],
}

