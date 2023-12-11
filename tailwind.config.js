/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        yellow: {
          def: "#b59f3b",
        },
        green: {
          def: "#538d4e",
        },
        gray: {
          def: "#3a3a3c",
        },
        lightGray: {
          def: "#818384",
        },
        black: {
          def: "#121213",
        },
      },

      keyframes: {
        flip: {
          "0%": {
            transform: "rotateX(0deg)",
          },

          "50%": { transform: "rotateX(90deg)" },

          "100%": { transform: "rotateX(0.deg)" },
        },
      },

      animation: {
        flip: "flip 500ms linear",
      },
    },
    plugins: [],
  },
};
