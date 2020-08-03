const { colors } = require("tailwindcss/defaultTheme")

module.exports = {
  theme: {
    extend: {
      colors: {
        purple: {
          ...colors.purple,
          '1400': '#19122A'
        }
      },
      fontSize: {
        '7xl': '5rem'
      }
    },
  },
  variants: {},
  plugins: [],
}
