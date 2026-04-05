import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gold:          "#C9A84C",
        "gold-dark":   "#a8872e",
        cream:         "#FAF7F2",
        "cream-dark":  "#F0EBE1",
        "brand-black": "#1a1a1a",
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        body:    ["DM Sans", "sans-serif"],
      },
      fontSize: {
        "display-lg": ["3.5rem",   { lineHeight: "1.1", fontWeight: "700" }],
        "display-md": ["3rem",     { lineHeight: "1.15", fontWeight: "700" }],
        "headline-lg": ["2rem",    { lineHeight: "1.2", fontWeight: "700" }],
        "headline-md": ["1.5rem",  { lineHeight: "1.3", fontWeight: "600" }],
      },
      borderRadius: {
        card: "12px",
        pill: "9999px",
        map:  "16px",
      },
    },
  },
  plugins: [],
};
export default config;
