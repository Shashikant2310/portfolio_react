/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "body-color": "#59b256",
      },
      keyframes: {
        move: {
          "25%": { transform: "translateY(-50px)" },
          "50%": { transform: "translateY(-100px)" },
          "75%": { transform: "translateY(-150px)" },
          "100%": { transform: "translateY(-200px)" },
        },
      },
      animation: {
        move: "move 10s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [],
};
