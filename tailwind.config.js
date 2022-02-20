const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
   
    fontFamily: {
      sans: ['proxima-nova', 'sans-serif'],
    },
    extend: {
colors:{
  twitterBlue:"#1d9bf0",
  
}
    },
  },
  plugins: [],
}
