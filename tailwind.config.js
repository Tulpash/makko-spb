/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-no-scrollbar')
  ],
  mode: 'jit'
}
