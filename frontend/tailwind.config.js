/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        textColor: "rgba(208,212,241,0.6)",
        borderColor: "rgba(208,212,241,0.16)",
      },
    },
  },
  plugins: [],
};
