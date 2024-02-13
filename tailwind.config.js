import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
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
          "base-100": "#f4f5f7",
          "base-200": "#EFEFEF",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [daisyui],
};
