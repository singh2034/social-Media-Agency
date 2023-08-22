/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ffafcc",
        secondary: "#bde0fe",
        strong: "#f88"
      },
    },
  },
  plugins: [],
};