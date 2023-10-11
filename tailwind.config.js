/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage : {
        "right-arrow" : "url('src/assets/icon-chevron-right.svg')",
        "hero-bg" : "url('src/assets/home-hero-gradient.svg')",
        "home-bg" : "url('src/assets/homepage-app-shapes-bg@2x.png')"
      },
      transitionProperty: {
        "background" : "background",
        "pr" : "padding-right"
      }
    },
  },
  plugins: [],
}