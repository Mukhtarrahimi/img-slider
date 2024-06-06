/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'poppins': ['poppins', 'sans-serif'],
        'Dancing': ['Dancing Script', 'sans-serif'],
      }
    },
  },
  plugins: [],
}