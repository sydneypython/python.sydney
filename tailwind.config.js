/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Karantina', 'sans-serif'],
        body: ['Roboto', 'sans-serif'],
      },
      
    },
  },
  plugins: [],
};