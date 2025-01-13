import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation:{
        "loop-scroll":'loop-scroll 20s linear infinite',
        "loop-scroll-reverse":'loop-scroll-reverse 20s linear infinite',
      },
      keyframes:{
        "loop-scroll":{
          from:{transform:"translateX(0)"},
          to:{transform:"translateX(-100%)"},
        },
        "loop-scroll-reverse":{
          from:{transform:"translateX(-100%)"},
          to:{transform:"translateX(0)"},
        }
      },
      colors: {
        background: "var(--background)",
        grey:"#AEA9B1",
        
        blu:{
          100:"#60A6E7",
          200:"#B3D0F2",
          600:"#0c2645",
          900:"#030516",
        },
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
