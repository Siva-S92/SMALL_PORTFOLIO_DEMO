/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    borderColor: {'primary1': 'rgb(85, 81, 227)'},
    fontFamily: {'hero-font': 'Sriracha'},
  },
  plugins: [],
}