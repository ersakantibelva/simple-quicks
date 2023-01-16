/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['"Lato Regular"', 'sans-serif'],
    },
    extend: {
      colors: {
        "gray": {
          1: "#333333",
          2: "#4F4F4F",
          3: "#828282",
          5: "#E0E0E0",
          6: "#F2F2F2"
        },
        "blue": {
          1: "#2F80ED"
        }
      }
    },
  },
  plugins: [],
}
