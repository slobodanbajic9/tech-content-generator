import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";
import { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [forms, typography],
};

export default config;
