/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#F5F3FF",
          100: "#EDE9FE",
          200: "#DDD6FE",
          300: "#C4B5FD",
          400: "#A78BFA",
          500: "#8B5CF6",
          600: "#6D4AFF", // Proton Primary
          700: "#5B3FD6",
          800: "#4C35B5",
          900: "#3B2A8A",
        },

        background: "#F6F5FF",
        surface: "#FFFFFF",
        sidebar: "#F3F2FC",

        text: {
          primary: "#1C1836",
          secondary: "#5E5A78",
          muted: "#8E8AA6",
        },

        border: "#E6E2F5",

        success: "#16A34A",
        warning: "#F59E0B",
        danger: "#DC2626",

        accent: "#8B5CF6",
      },

      boxShadow: {
        card: "0 8px 30px rgba(109,74,255,0.08)",
        soft: "0 2px 12px rgba(31,41,55,0.06)",
      },

      borderRadius: {
        xl: "16px",
        "2xl": "20px",
      },
    },
  },
  plugins: [],
}

