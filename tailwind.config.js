/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*{html,js}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },


    extend: {
      screens: {
        'h-menu': '600px',

        'cel-g': {
          min: '481px',
          max: '767px',
        },

        'tablet-g': {
          min: "768px",
          max: "1024px",
        },
        'laptop': {
          min: "1025px",
          max: "1280px",
        },
        'desktop': "1281px",


      },

      keyframes: {
        menu: {
          '0%': {
            opacity: 0, height: 0
          },
          '50%': { opacity: 1, height: '50px' },

          '100%': { opacity: 1, height: '100px' },
        },
      },
      Animation: {
        menu: 'menu 0.3s ease-in'

      },
    }
  },
  plugins: [],
};
