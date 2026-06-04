/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kanit: ["Kanit", "sans-serif"],
      },
      colors: {
        primary: "#0C0C0C",
        accent: "#B600A8",
        "text-primary": "#D7E2EA",
        "text-muted": "#8899A6",
      },
    },
  },
  plugins: [],
};
