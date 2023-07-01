/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },


    extend: {
      spacing: {
        'time': 'calc(100% - 3rem)',
      },

      screens: {
        'h-menu': '600px',

        'cel-p': {
          min: '320px',
          max: '480px',
        },
        'cel-g': {
          min: '481px',
          max: '767px',
        },

        'tablet-g': {
          min: "768px",
          max: "1024px",
        },
        'desktop': "1280px",


      },
    },
  },
  plugins: [],
};
