/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        landingpage: "url('./assets/illustrations/background.jpg')",
      },
    },
  },
  plugins: [],
};
