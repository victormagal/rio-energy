module.exports = {
  purge: ['.src/**/*.{js,jsx,ts,tsx}', '{./public/index.html}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    textColor: theme => theme('colors'),
    textColor: {
      // 'primary': '#3490dc',
      // 'secondary': '#ffed4a',
      // 'danger': '#e3342f', degular source sans pro
      'green-light': '#C3F37B',
      'blue-sky-night': '#191B87',
      'dark': '#12121D',
      'gray': '#4A4A57',
      'gray-light': '#ECF1F4',
      'gray-mid': '#88889C',
      'clear': '#FAFCFE',
      'white': '#FFFFFF',
      'iris-10': '#EFEFFD',
      'green-power': '#00D35C',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),

  ],
}
