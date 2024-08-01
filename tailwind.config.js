/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
        "3xl": "1600px",
      },
      maxWidth: {
        base: "122rem",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        jetbrains: ["JetBrains Mono", "monospace"],
      },
      colors: {
        brand: {
          dark: "#242424",
          red: "#FC4B03",
          gray: {
            100: "#EDEDED",
            200: "#DCDCDC",
            300: "#D9D9D9",
            400: "#ACACAC",
            500: "#8E8E8E",
            600: "#ACACAC",
            700: "#EBEBEB",
            800: "#DDDCDC",
          },
        },
      },
      fontSize: {
        88: "88px",
        32: "2rem",
        xxs: ".625rem",
      },
      spacing: {
        104: "6.5rem",
        // 72: "4.5rem",
        272: "17rem",
      },
      lineHeight: {
        18: "1.125rem",
      },
      boxShadow: {
        poppup: "0px 4px 20px 0px #24242414, 0px 0px 3px 0px #0000000A",
      },
    },
  },
  plugins: [],
};
