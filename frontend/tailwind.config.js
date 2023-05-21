/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      Oswald: ["Raleway", "sans-serif"],
    },
    extend: {
      animation: {
        slidetop: "slidetop 500ms forwards",
        slideleft: "slideleft 1000ms forwards",
        slideright: "slideright 1000ms forwards",
        fadein: "fadein 3000ms forwards",
        fadeinloader: "fadein 500ms forwards",
        fadeoutloader: "fadeout 500ms forwards",
        fadeinbg: "fadeinbg 1500ms forwards",
        scrollLeft: "scrollLeft 11500ms infinite linear",
      },
      backgroundImage: {
        navbar: "url('./assets/illustrations/lightMode/nav.svg')",
        credits: "url('./assets/illustrations/lightMode/credits.svg')",
        aboutUs: "url('./assets/illustrations/lightMode/about-us.svg')",
        pentagon: "url('./assets/illustrations/lightMode/polygon.png')",
        home: "url('./assets/illustrations/lightMode/home.png')",
        space: "url('./assets/illustrations/lightMode/space.png')",
        features: "url('./assets/illustrations/lightMode/features.png')",
        homeMobile: "url('./assets/illustrations/lightMode/homeMobile.svg')",
        homeMobileDark:
          "url('./assets/illustrations/darkMode/homeMobileDark.svg')",
        homeDark: "url('./assets/illustrations/darkMode/homeDark.svg')",
        featuresDark: "url('./assets/illustrations/darkMode/featuresDark.svg')",
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
