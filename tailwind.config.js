module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
   
    fontFamily: {
      mono:['"Share Tech Mono"', 'monospace'],
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
