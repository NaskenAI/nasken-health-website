import type { Config } from "tailwindcss";

export default {
  content: ["./index.html","./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink:{ 900:"#0A0E17" },
        neon: {
          cyan:"#00E5FF",
          teal:"#00D1B2",
          violet:"#7C3AED",
          magenta:"#FF1CF7",
          blue:"#1F6BFF"
        }
      },
      boxShadow:{
        glow:"0 10px 40px rgba(0,229,255,.25)",
        glow2:"0 10px 40px rgba(124,58,237,.28)"
      },
      borderRadius:{ xl:"1rem" }
    },
  },
  plugins: [],
} satisfies Config;
