module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],  
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
         'buffett-pattern': "url('src/assets/buffett.png')",
         'class-pattern': "url('src/assets/bg_class.gif')",
         'bg_header': "url('src/assets/bg_header.gif')",
         'bg_header1': "url('src/assets/bg_header1.gif')",
         'agenda-pattern' : "url('src/assets/bg_header.gif')",
         'class2-pattern' : "url('src/assets/class.png')",
         'qa-pattern' : "url('src/assets/bg_qa.gif')",
        }),
      backgroundColor: theme => ({
       ...theme('colors'),
       'buffett': '#FA8888',
       'secondary': '#ffed4a',
       'danger': '#e3342f',
       'advantage': '#F6F6F6',
       'orange': '#EE7E00',
       'pink-light': '#FE8A8A',
      }),
      textColor: theme => theme('colors'),
      textColor: {
       'buffett': '#FA8888',
       'secondary': '#ffed4a',
       'danger': '#e3342f',
       'pink-light': '#FE8A8A',
     },
     width: {
       '600': '38.75rem'
     },
     borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '2': '2px',
       '3': '3px',
        '4': '4px',
       '6': '6px',
       '12': '12px',
       '14': '14px',
      },
      divideColor: theme => ({
       ...theme('borderColors'),
       'primary': '#3490dc',
       'secondary': '#ffed4a',
       'danger': '#e3342f',
       'blue_white' : '#86B3E0'
      }),
      height: {
       sm: '8px',
       md: '16px',
       lg: '24px',
       863: '863px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
