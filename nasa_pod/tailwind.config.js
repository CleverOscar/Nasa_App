module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    extend: {
      fontFamily: {
        'chakara': ['Chakra Petch', 'sans - serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'code': ['Source Code Pro', 'monospace'],
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin'),
  ],
}