module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      /* How to Add custom Colors
       * Give your color a name, make it something that makes sense.
       * If you aren't going to use the colors below, delete them.
       *
       * Default is the normal base color.
       * Light / Dark are variants within the same palette
       * Classes are named text-CLASSNAME
       *
       * https://tailwindcss.com/docs/customizing-colors#custom-colors
       * */
      blue: {
        light: "#6495ED", // text-blue-light
        DEFAULT: "#0047AB", // text-blue
        dark: "#00008B", // text-blue-dark
        100: "#ff0000", // text-blue-100
      },
      gray: {
        darkest: "#1f2d3d",
        dark: "#3c4858",
        DEFAULT: "#c0ccda",
        middle: "#ccd4da",
        light: "#e0e6ed",
        lightest: "#f9fafc",
      },
      white: {
        DEFAULT: "#f9f9f9",
        true: "#ffffff",
      },
      black: {
        DEFAULT: "#333333",
        true: "#000000",
      },
    },
  },
  plugins: [],
};
