module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: require('tailwindcss/colors'),
  },
  plugins: [],
  purge: ["./pages/**/*.js", "./components/**/*.js", "./layout/**/*.js"]
}
