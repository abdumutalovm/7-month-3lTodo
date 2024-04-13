/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "wrap-bg": "#1D1825",
        "dark-purple": "#0D0714",
      },
      padding: {
        "50px": "50px",
        "65px": "65px",
      },
    },
  },
  plugins: [],
};
