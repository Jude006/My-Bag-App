module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './node_modules/flowbite/**/*.js', // Add Flowbite's JS
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        dosis: ['Dosis', 'Montserrat'],
        mont: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'primary': '#70C745', 
        'secondary': '#F2F4F5', 
       
      },
    },
  },
  plugins: [
    require('flowbite/plugin'), // Add Flowbite as a plugin
    require('@tailwindcss/typography'),
  ],
}
