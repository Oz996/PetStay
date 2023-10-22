import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans"],
      },
      colors: {
        primary: "#23c28d",
        primary_light: "#ECFDF5",
        primary_hover: "#6ee7b7",
        secondary: "#C22358",
        danger: "#e11d48",
        paragraph: "#706E6E",
        element_border: "#E7E7E7",
      },
    },
  },

  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
};
export default config;
