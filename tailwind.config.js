module.exports = {
  purge: ['.src/**/*.{js,jsx,ts,tsx}', '{./public/index.html}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': '640px',
      'md': '885px',
      'lg': '1024px',
      'xl': '1280px',
    },
    // container: {
    //   center: true,
    // },

    extend: {},
    colors: {
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
    // fill: theme => theme('colors'),

    fontFamily: {
      sans: ['Source Sans Pro'],
      // serif: ['Degular', 'serif'],
    },

  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio')
  ],
  spacing: {
  },
  borderRadius: {
    'none': '0',
    'sm': '.125rem',
    DEFAULT: '.25rem',
    'lg': '.5rem',
    'full': '9999px',
  },


}
