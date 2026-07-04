/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        poli: {
          primary: "#6A1B2D",
          primaryLight: "#8C2F39",
          primaryDark: "#3B0D18",
          background: "#F8F4EF",
          surface: "#FFFFFF",
          text: "#2E2E2E",
          textMuted: "#666666",
          border: "#DDD8D3",
          success: "#2E7D32",
          warning: "#ED6C02",
          danger: "#C62828",
        },
      },
    },
  },
  plugins: [],
};