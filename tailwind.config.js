/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        lg: '1rem',
        xl: '1rem',
        '2xl': '1rem',
      },
    },
    extend: {
     fontFamily: {
      'robo': ['Roboto','sans-serif'],
      'open-sans': ['Open Sans','sans-serif']
     },
     colors: {
      'primary' : '#e80913'
     },
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

