/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Montserrat"],
    },
    extend: {
      colors: {
        dark: {
          1000: "hsla(201, 22%, 13%, 1)",
          900: "hsla(200, 48%, 10%, 1)",
          700: "hsla(199, 100%, 5%, 1)",
          600: "hsla(200, 100%, 5%, 1)",
          500: "hsla(198, 100%, 4%, 1)",
          400: "hsla(199, 100%, 3%, 1)",
          300: "hsla(210, 100%, 1%, 1)",
          200: "hsla(198, 100%, 2%, 1)",
          100: "hsla(192, 100%, 1%, 1)",
        },
        light: {
          700: "hsla(201, 10%, 34%, 1)",
          600: "hsla(204, 2%, 47%, 1)",
          500: "hsla(240, 6%, 51%, 1)",
          400: "hsla(240, 7%, 78%, 1)",
          300: "hsla(240, 9%, 89%, 1)",
          200: "hsla(39, 100%, 97%, 1)",
          100: "hsla(0, 0%, 100%, 1)",
        },
        naturalWhite: "hsla(0, 0%, 100%, 1)",
        tints: {
          cake: {
            200: "hsl(208,100%,50%)",
            150: "hsl(210,100%,28%)",
            100: "hsla(199, 57%, 21%, 1)",
          },
          tomato: {
            400: "hsla(355, 38%, 49%, 1)",
            300: "hsla(355, 67%, 40%, 1)",
            200: "hsla(354, 100%, 29%, 1)",
            100: "hsla(353, 95%, 24%, 1)",
          },
          carrot: {
            100: "hsla(32, 96%, 64%, 1)",
          },
          mint: {
            100: "hsla(147, 96%, 42%, 1)",
          },
        },
      },
      fontFamily: {
        sans: ["Montserrat"],
      },
    },
  },
  plugins: [],
};
