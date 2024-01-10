/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main: {
          100: "#599EFF",
          200: "#4182FF",
          300: "#1B57F5",
        },
        darkgray: {
          100: "#4E5568",
          200: "#1A1C21",
          300: "#0D1117",
        },
      },
    },
  },
  plugins: [],
};
