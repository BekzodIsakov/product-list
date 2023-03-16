/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
      gridTemplateColumns: {
        "auto-fit": "repeat(auto-fit, minmax(180px, 1fr))",
      },
    },
  },
  plugins: [],
};
