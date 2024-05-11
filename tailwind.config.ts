import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderRadius: { circle: "50%", pill: "100vw" },
      colors: {
        olive: "#5F6F52",
        graphite: "#303030",
        "coffee-supreme": "#A9B388",
        snow: "#F3F3F3",
        "sugar-cream": "#FEFAE0",
        nougat: "#B99470",
      },
    },
  },
  plugins: [],
};
export default config;
