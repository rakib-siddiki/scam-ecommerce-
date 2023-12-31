/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      }
    },
    colors: {
      white: "#fff",
      black: "#000",
      primary: {
        50: "#f3f6ff",
        100: "#e9edfe",
        200: "#d7dffd",
        300: "#b7c3fb",
        400: "#8d9bf8",
        500: "#5f6bf3",
        600: "#3e41e9",
        700: "#2d2cd5",
        800: "#2524b3",
        900: "#151875",
      },
      secondary: {
        50: "#f4f5f9",
        100: "#ebeef4",
        200: "#dadfeb",
        300: "#c3cade",
        400: "#abb1ce",
        500: "#8a8fb9",
        600: "#7e80ad",
        700: "#6b6c97",
        800: "#58597b",
        900: "#4b4c64",
      },
      accent: {
        50: "#fef1f7",
        100: "#fee5f1",
        200: "#ffcbe6",
        300: "#ffa0cf",
        400: "#ff66ad",
        500: "#fb2e86",
        600: "#ec1667",
        700: "#cd094d",
        800: "#a90b41",
        900: "#8d0e39",
      },
      shade: {
        50: "#eeeffb",
        100: "#e6e7f9",
        200: "#d1d2f4",
        300: "#b6b7eb",
        400: "#9e98e1",
        500: "#8a7ed6",
        600: "#7a64c7",
        700: "#6954ae",
        800: "#55468d",
        900: "#483e71",
      },
      gray: {
        50: "#f6f6f6",
        100: "#e7e7e7",
        200: "#d1d1d1",
        300: "#b0b0b0",
        400: "#888888",
        500: "#6d6d6d",
        600: "#5d5d5d",
        700: "#4f4f4f",
        800: "#454545",
        900: "#3d3d3d",
      },
      line: {
        100: "#05E6B7",
        200: "#F701A8",
        300: "#FFEAC1",
      },
    },
    extend: {
      fontFamily: {
        primary: ["josefin", "sans-serif"],
        secondary: ["lato", "sans-serif"],
      },
      fontSize: {
        "5xl": "42px",
      },
      boxShadow: {
        custom:' 0px 0px 25px 0px rgba(0, 0, 0, 0.10)'
      }
    },
  },
  plugins: [],
};
