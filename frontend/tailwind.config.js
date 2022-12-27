/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        landing: "url('./assets/illustrations/landing.png')",
        beingproductive: "url('./assets/illustrations/beingproductive.png')",
        relax: "url('./assets/illustrations/relax.png')",
      },
    },
  },
  plugins: [],
};
