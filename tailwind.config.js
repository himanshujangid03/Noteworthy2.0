import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      oswald: ["Oswald", "sans-serif"],
      playfair: ["Playfair Display", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
    },
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#583eee",
          secondary: "#f6f5f9",
          accent: "#ffffff",
          neutral: "black",
          "base-100": "#e9e9e9",
          "base-200": "#d2d2d2",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [daisyui],
};
