import type { Config } from "tailwindcss";
import fluid, { extract, screens, fontSize } from 'fluid-tailwind'
export default {
  content: {
    files: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    extract
  },
  theme: {
    screens,
    fontSize,
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        dark: "var(--dark)",
        green: "var(--green)",
        grey: "var(--grey)",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),

    fluid,

  ],
} satisfies Config;
