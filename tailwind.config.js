/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
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
      fontFamily: {
        title: ["var(--font-poppins)", "sans-serif"], // Titres
        body: ["var(--font-inter)", "sans-serif"], // Texte
      },
    },
  },
  plugins: [],
};
