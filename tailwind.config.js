/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          normal: '#5C3CA7',
          light: '#9B8ACA'
        },
        secondary: '#E3E3E3',
        accent: '#FFD700',
        white: '#FFFFFF',
        charcoal: '#333333',
        background: '#E0FFFF',
        footerbg: '#E5DEBD'
      },
      fontFamily: {
        sans: ['Quicksand', 'sans-serif'],
        serif: ['Crimson Text', 'serif']
      },
    },
  },
  plugins: [],
};