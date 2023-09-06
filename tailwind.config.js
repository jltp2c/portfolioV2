/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      bg: "#111111",
      navbg: "#2d3436",
      redColor: "#d63031",
      blue: "#1fb6ff",
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#FF700A",
      green: "#13ce66",
      yellow: "#ffc82c",
      graydark: "#273444",
      gray: "#8492a6",
      graylight: "#d3dce6",
      lightorange: "#EB722D",
    },
  },
  plugins: [],
};
