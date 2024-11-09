import plugin from 'tailwindcss/plugin'
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  corePlugins: {
    container: false
  },
  theme: {
    extend: {
      colors: {
        primary: '#ee4d2d'
      }
    }
  },
  plugins: [
    require('tailwind-scrollbar'),
    plugin(function ({ addUtilities, theme }) {
      addUtilities({
        '.container': {
          maxWidth: theme('columns.7xl'),
          margin: '0 auto',
          paddingLeft: theme('spacing.4'),
          paddingRight: theme('spacing.4')
        }
      })
    })
  ]
}
