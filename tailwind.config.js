/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        primary: 'blue',
      },

      screens: {
        '3xl': '1700px',
      },
    },

    screens: {
      sm: '576px',

      md: '768px',

      lg: '1024px',

      xl: '1200px',

      '2xl': '1400px',
    },

    container: {
      center: true,
      padding: {
        DEFAULT: '0.75rem',
        sm: '3.5rem',
        md: '3rem',
        lg: '3rem',
        xl: '5rem',
        '2xl': '5rem',
        '3xl': '8.75rem',
      },
    },
  },
  plugins: [],
};
