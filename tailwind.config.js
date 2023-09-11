/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#31B553",
          light: "#2DCC82",
          dark: "#33CC2D",
        },
        secondary: {
          DEFAULT: "#DAB96A",
          light: "#E6D965",
          dark: "#E6A065",
        },
        accent: {
          DEFAULT: "#31B553",
          secondary: "#1A8357",
          tertiary: "#98c6cd",
        },
        text1: "#808080",
        text2: "#242a2b",

        grey: "#e8f0f1",
      },
      boxShadow: {
        custom1: "0px 2px 40px 0px rgba(8, 70, 78, 0.08)",
        custom2: "0px 0px 30px 0px rgba(8, 73, 81, 0.08)",
      },
    },
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1280px",
    },
    fontFamily: {
      inter: ["Inter"],
      arab: ["Lobster Two"],
      play: ["Playfair Display"],
    },
  },

  plugins: [],
};
