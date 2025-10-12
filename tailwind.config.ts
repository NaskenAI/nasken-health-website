import type { Config } from "tailwindcss";

export default {
  content: ["./index.html","./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink:{ 900:"#0A0E17", 800:"#0F1824" },
        leaf: {
          50:"#ECFDF5", 100:"#D1FAE5", 200:"#A7F3D0", 300:"#6EE7B7",
          400:"#34D399", 500:"#10B981", 600:"#059669", 700:"#047857",
          800:"#065F46", 900:"#064E3B"
        },
        primary: "#34D399",
      },
      boxShadow:{ soft:"0 8px 28px rgba(16,185,129,.18)" },
      borderRadius:{ xl:"1rem" }
    },
  },
  plugins: [],
} satisfies Config;
