import type { Config } from 'tailwindcss'

const {nextui} = require("@nextui-org/react");

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  fontFamily: {
    poppins: ["Poppins", "sans-serif"],
    roboto: ["Roboto", "sans-serif"],
  },
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        primary: { DEFAULT: "#f53d57", 500: "#f40c2c", 800: "#cf001d" },
        secondary: { DEFAULT: "#1f2937", 500: "#10151d", 800: "#0b0e13" },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config
