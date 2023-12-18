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

        shake: {
          "0%": { transform: "translateX(0.75rem)" },
          "20%": { transform: "translateX(-0.75rem)" },
          "50%": { transform: "translateX(0.5rem)" },
          "70%": { transform: "translateX(-0.25rem)" },
          "90%": { transform: "translateX(0.25rem)" },
          "100%": { transform: "translateX(0rem)" },
        },
      },

      animation: {
        flip: "flip 500ms linear",
        shake: "shake 500ms linear",
      },
    },
    plugins: [],
  },
};
