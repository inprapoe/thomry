module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        thomry: {
          black: '#3e3e3e',
          gray: {
            f9: '#f9f9f9',
            eee: '#eeeeee',
            ccc: '#cccccc',
            999: '#999999',
            666: '#666666',
          },
          gold: {
            lighter: '#F6E6B6',
            light: '#F1D789',
            DEFAULT: '#EBC85C',
            dark: '#E5B82E',
            darkest: '#C89D19',
          }
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
