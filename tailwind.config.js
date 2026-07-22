/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        teal: {
          950: "#2e8c7c",
          900: "#2e8c7c",
          800: "#2e8c7c",
          700: "#2e8c7c",
          600: "#2e8c7c",
          500: "#2e8c7c",
          400: "#2e8c7c",
        },
        ink: "#16231f",
        cream: "#f6f5f1",
      },
      fontFamily: {
        display: ["'Fraunces'", "serif"],
        body: ["'Jost'", "sans-serif"],
      },
    },
  },
  plugins: [],
}

