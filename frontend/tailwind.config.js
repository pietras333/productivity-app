/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation:{
        slidetop: "slidetop 500ms forwards",
        slideleft: "slideleft 1000ms forwards",
        fadein: "fadein 3000ms forwards"
      },
      backgroundImage: {
        landing: "url('./assets/illustrations/landing.png')",
        beingproductive: "url('./assets/illustrations/beingproductive.png')",
        relax: "url('./assets/illustrations/relax.png')",
        pgone: "url('./assets/illustrations/one.svg')",
        pgtwo: "url('./assets/illustrations/two.svg')",
        pgthree: "url('./assets/illustrations/three.svg')",
        contact: "url('./assets/illustrations/contact.svg')",
        
      },
    },
  },
  plugins: [],
};
