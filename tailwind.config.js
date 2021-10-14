module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],  
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
         'buffett-pattern': "url('src/assets/buffett.png')",
         'bg_header': "url('src/assets/bg_header.gif')",
        }),
      backgroundColor: theme => ({
       ...theme('colors'),
       'buffett': '#FA8888',
       'secondary': '#ffed4a',
       'danger': '#e3342f',
      }),
      textColor: theme => theme('colors'),
      textColor: {
       'buffett': '#FA8888',
       'secondary': '#ffed4a',
       'danger': '#e3342f',
     }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
