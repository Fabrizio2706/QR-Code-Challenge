/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'outfit': ['outfit', 'sans-serif']},
      },
      colors: {
        'light-gray':'#d6e2f0',
        'gray-blue': '#7b879d',
        'dark-blue': '#1f3251', 
      }
    },
  plugins: [],
}

