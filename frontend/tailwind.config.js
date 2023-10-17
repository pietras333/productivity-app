/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
      "1/2": "50%",
      "1/4": "25%",
      "3/4": "75%",
    },
    fontFamily: {
      Manrope: ["Manrope", "sans-serif"],
    },
    extend: {
      animation: {
        "slide-in-l": "slide-in-l forwards 500ms",
        "fade-in": "fade-in forwards 500ms",
      },
      backgroundImage: {
        board: "url('./assets/illustrations/lightMode/board.png')",
        navbar: "url('./assets/illustrations/lightMode/nav.svg')",
        credits: "url('./assets/illustrations/lightMode/credits.svg')",
        aboutUs: "url('./assets/illustrations/lightMode/about-us.svg')",
        pentagon: "url('./assets/illustrations/lightMode/polygon.png')",
        home: "url('./assets/illustrations/lightMode/home.png')",
        space: "url('./assets/illustrations/lightMode/space.png')",
        features: "url('./assets/illustrations/lightMode/features.png')",
        homeMobile: "url('./assets/illustrations/lightMode/homeMobile.svg')",
        homeDark: "url('./assets/illustrations/darkMode/home.png')",
        featuresDark: "url('./assets/illustrations/darkMode/features.png')",
        //
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
        lightsigninbg:
          "url('./assets/illustrations/lightMode/lightsigninbg.svg')",
        lightsigninbgmobile:
          "url('./assets/illustrations/lightMode/lightsigninbgmobile.svg')",
        lightsignmobilemenu:
          "url('./assets/illustrations/lightMode/lightsignmobilemenu.svg')",
        darksigninbg: "url('./assets/illustrations/darkMode/darksigninbg.svg')",
        darksigninbgmobile:
          "url('./assets/illustrations/darkMode/darksigninbgmobile.svg')",
        darksigninmobilemenu:
          "url('./assets/illustrations/darkMode/darksigninmobilemenu.svg')",
        lightboardbg:
          "url('./assets/illustrations/lightMode/lightboardbg.svg')",
        darkboardbg: "url('./assets/illustrations/darkMode/darkboardbg.svg')",
      },
    },
  },
  plugins: [],
};
