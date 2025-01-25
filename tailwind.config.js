// tailwind.config.js
module.exports = {
    theme: {
      extend: {
        backdropBlur: {
          '380': '380px',
        },
      },
    },
    variants: {
      extend: {
        backdropFilter: ['responsive', 'hover', 'focus'],
      },
    },
    plugins: [],
  }
  