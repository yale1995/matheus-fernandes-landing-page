/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      xl: 24,
      "heading": 48,
      "heading-2": 28,
    },
    extend: {
      fontFamily: {
        sans: "Montserrat, sans-serif",
      },
      colors: {
        background: '#0F0F0F',
        "background-2": '#2D2C2C',
        primary: '#A39D01',
        highlight: '#FAF32F'
      },
      screens: {
        mobile: { max: "767px" },
    },

    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ]
}
