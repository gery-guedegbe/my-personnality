/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/src/assets/images/grid-background.png')",
        architecte: "url('/src/assets/images/Architecte.svg')",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        custom: ["SplineSansMono", "monospace"],
        redHat: ["Red Hat Display", "sans-serif"],
      },
      colors: {
        principal: "#F428F4",
        lightPrincipal: "#faa9fa",
        boldPrincipal: "#db24db",
        lightOrange: "#fdf3de",
        lightBlack: "#180418",
        lightRed: "#f762c5",
        softRed: "#fdd8d6",
        lightBlue: "#9462f7",
        lightYellow: "#f7d162",
        green: "#6ebb71",
      },
    },
  },
  plugins: [],
};
