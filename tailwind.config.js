/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        'primary': "#762BEB",
        'black-tx': "#020014",
        'gray-tx': "#65636B",
      },
    },
    fontFamily: {
      'jakarta-sans': ['Plus Jakarta Sans', 'sans-serif'],
    },
  },
  plugins: [
      "prettier-plugin-tailwindcss"
  ],
  
}

