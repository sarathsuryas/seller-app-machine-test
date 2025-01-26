/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}",
  ],
  fontFamily: {
    roboto: ['Roboto', 'sans-serif'],
  },
  theme: {
    extend: {colors: {
      customBlue: '#1F214A', // Add your custom color
    }},
  },
  plugins: [],
}