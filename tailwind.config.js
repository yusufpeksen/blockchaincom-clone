/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage : {
        "right-arrow" : "url('src/assets/icon-chevron-right.svg')"
      },
      transitionProperty: {
        "background" : "background",
        "pr" : "padding-right"
      }
    },
  },
  plugins: [],
}