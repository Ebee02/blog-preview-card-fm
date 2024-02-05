/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-yellow": "#f4d04e",
        "main-grey": "#808080",
      },
    },
  },
  plugins: [],
};
