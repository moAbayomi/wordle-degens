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
    },
    plugins: [],
  },
};
