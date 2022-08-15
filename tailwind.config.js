/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0b0c10",
        secondary: "#1f2833",
        third: "#c5c6c7",
        textPrimary: "#66fcf1",
        textSecondary: "#45a29e",
        textThird: "#c5c6c7",
      },
      fontFamily: {
        rubik: ["Rubik"],
        pacifico: ["Pacifico"],
      },
    },
  },
  plugins: [],
};
