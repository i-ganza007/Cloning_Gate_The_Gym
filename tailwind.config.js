/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        kgb: "rgba(228, 0, 43, 1)", // ✅ Correct way
      },
    },
  },
  plugins: [],
};
