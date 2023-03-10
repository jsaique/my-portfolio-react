/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      bodyFont: ["Poppins", "sans-serif"],
      titleFont: ["Montserrat", "sans-serif"],
    },
    colors: {
      bodyColor: "#212428",
      lightText: "#c4cfde",
      gray100: "#F3F4F6",
      gray200: "#E5E7EB",
      gray300: "#D1D5DB",
      gray400: "#9CA3AF",
      gray500: "#6b7280",
      gray600: "#4B5563",
      gray900: "#111827",
      blue600: "#2563eb",
      pink500: "#ec4899",
      red500: "#ef4444",
      yellow500: "#eab308",
      orange500: "#f97316",
      green500: "#22c55e",
      darkColor: "#000",
      lightColor: "#fff",
      trans: "transparent",
      boxBg: "linear-gradient(145deg, #1e2034, #23272b)",
      designColor: "#ff014f",
    },
    boxShadow: {
      shadowOne: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e ",
    },
  },
  plugins: [],
};
