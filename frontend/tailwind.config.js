/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        slidetop: "slidetop 500ms forwards",
        slideleft: "slideleft 1000ms forwards",
        fadein: "fadein 3000ms forwards",
        fadeinbg: "fadeinbg 1500ms forwards",
      },
      backgroundImage: {
        landing: "url('./assets/illustrations/landing.png')",
        beingproductive: "url('./assets/illustrations/beingproductive.png')",
        relax: "url('./assets/illustrations/relax.png')",
        lightpgone: "url('./assets/illustrations/lightMode/lightone.svg')",
        lightpgtwo: "url('./assets/illustrations/lightMode/lighttwo.svg')",
        lightpgthree: "url('./assets/illustrations/lightMode/lightthree.svg')",
        lightcontact:
          "url('./assets/illustrations/lightMode/lightcontact.svg')",
        lightregisterbg:
          "url('./assets/illustrations/lightMode/lightregisterbg.svg')",
        lightregisterbgmobile:
          "url('./assets/illustrations/lightMode/lightregisterbgmobile.svg')",
      },
    },
  },
  plugins: [],
};
