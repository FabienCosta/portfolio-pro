/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // active le dark mode basé sur une classe
  theme: {
    extend: {
      colors: {
        blue: {
          500: "#2563EB",
          600: "#1D4ED8",
          700: "#1E40AF",
        },
        gray: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          700: "#374151",
          900: "#111827",
        },
      },
    },
  },
  plugins: [],
};
