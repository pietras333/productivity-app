/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
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
        lightmobilemenu:
          "url('./assets/illustrations/lightMode/lightmobilemenu.svg')",
        darkpgone: "url('./assets/illustrations/darkMode/darkone.svg')",
        darkpgtwo: "url('./assets/illustrations/darkMode/darktwo.svg')",
        darkpgthree: "url('./assets/illustrations/darkMode/darkthree.svg')",
        darkcontact: "url('./assets/illustrations/darkMode/darkcontact.svg')",
        darkregisterbg:
          "url('./assets/illustrations/darkMode/darkregisterbg.svg')",
        darkregisterbgmobile:
          "url('./assets/illustrations/darkMode/darkregisterbgmobile.svg')",
        darkmobilemenu:
          "url('./assets/illustrations/darkMode/darkmobilemenu.svg')",
      },
    },
  },
  plugins: [],
};
