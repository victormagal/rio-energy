module.exports = {
  purge: ['.src/**/*.{js,jsx,ts,tsx}', '{./public/index.html}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    textColor: theme => theme('colors'),
    textColor: {
      'primary': '#3490dc',
      'secondary': '#ffed4a',
      'danger': '#e3342f',
      'green-light': '#C3F37B',
      'dark': '#12121D',
      'white': '#FFFFFF',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
