import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0C1210",
        surface: "#16201D",
        "surface-raised": "#1E2A26",
        chalk: "#F2EFE6",
        muted: "#8FA39C",
        brass: "#D4A24E",
        "brass-dim": "#9C7A38",
        steel: "#6FA8AE",
        win: "#7FB88A",
        alert: "#C9694B",
        hairline: "#2A3733",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      letterSpacing: {
        widest2: "0.2em",
      },
      borderRadius: {
        link: "6px",
      },
      keyframes: {
        "link-in": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "multiplier-tick": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "link-in": "link-in 0.5s ease-out forwards",
        "multiplier-tick": "multiplier-tick 0.3s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
