/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './**/*.html',
  ],


  theme: {
    screens: {
      xm: "220px",
      xm1: "270px",
      sm: "320px",
      sm1: "400px",
      md: "588px",
      md1: "620px",
      lg: "776px",
      xl: "1240px",
    },
    extend: {},
  },
  plugins: [],
}
