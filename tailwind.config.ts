import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: "var(--primary)",
        midGrey: "var(--mid-grey-color)",
        darkGrey: "var(--dark-grey-color)",
        bg1: "var(--bg-1)",
        neutralLightest: "var(--neutral-lightest)",
      },
    },
    fontFamily: {
      poppins: ["var(--font-poppins)"],
      roboto: ["var(--font-roboto)"],
      pyidaungsu: ["var(--font-pyidaungsu)"],
    },
  },
  plugins: [],
};
export default config;
