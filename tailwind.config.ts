import { light } from "@mui/material/styles/createPalette";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      "purple": '#A43AFF',
      "orange": 'ff6D3b',
      
      "light-green": '#CEEBC7',
      "green": '#75bfbc',
      "dark-green": '#1B4332',

      "light-blue": '#B2E5FF',
      "blue": '#48CAE4',
      "dark-blue": '#023E8A',

      "light-violet":'#EFCCFF',
      
      "light-pink": "#FFD6E4",
      "pink": '#FF99AC',
      "dark-pink": '#AD1457',

      "light-gray": '#e5e7eb',

      "black-gray": '#524D54',

      'white': '#ffffff',
    }
  },
  plugins: [],
};
export default config;
