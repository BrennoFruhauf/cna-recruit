import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#FFD3D3",
          default: "#ED1941",
        },
        secondary: "#212359",
        croma: {
          "0": "#FFFFFF",
          "50": "#FEFEFE",
          "100": "#E4E4E4",
          "200": "#B6B6B6",
          "300": "#575757",
          "400": "#1B1B1B",
        },
      },
    },
  },
  plugins: [],
}
export default config
