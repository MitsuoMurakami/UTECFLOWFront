/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{jsx,tsx}", "./index.html"],
    darkMode: "selector",
    theme: {
      extend: {
        colors: {
          "cach-l1": "ece9e9",
          "cach-l2": "#40556e",
        },
      },
    },
    plugins: ["prettier-plugin-tailwindcss"],
  };
  