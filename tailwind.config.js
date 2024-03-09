/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        bgColor: "rgb(208, 234, 252)",
      },
      fontSize: {
        small: [
          "40px",
          {
            lineHeight: "48px",
            fontWeight: 500,
          },
        ],
      },
      colors: {
        primary: "#0071E4",
        secondary: "#6FD91C",
      },
      fontFamily: {
        sans: ["Noto Sans Display", "sans-serif"],
      },
      container: {
        center: true,
        padding: "120px",
        screens: {
          lg: "1240px",
        },
      },
    },
  },
  plugins: [],
};
