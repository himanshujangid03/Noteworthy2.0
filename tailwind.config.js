import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      sora: ["Sora", "sans-serif"],
      cabinet: ["Cabinet Grotesk", "sans-serif"],
    },
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#5356FF",
          secondary: "#f6f5f9",
          accent: "#ffffff",
          neutral: "black",
          "base-100": "#e9e9e9",
          "base-200": "#d2d2d2",
          error: "#d52334",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [daisyui],
};
