/** @type {import('tailwindcss').Config} */
module.exports = { mode: 'jit',

  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/screen/**/*.{js,jsx,ts,tsx}",
    "./src/component/**/*.{js,jsx,ts,tsx}",

  ],
  theme: {
    extend: {

    },
    screens: {
      be: '290px',
      base: '490px',
      sm: '600px',
      md: '728px',
      lg: '984px',
      xl: '1240px',
      '2xl': '1496px',
    },
  },
  plugins: [],
}

