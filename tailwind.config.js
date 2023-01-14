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
          3: "828282",
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
