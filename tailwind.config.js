/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        default: "#2380AD",
      },
      fontFamily: {
        itim: ["Itim", "cursive"],
      },
      colors: {
        details: "#2BACC8",
        default: "#2380AD",
      },
    },
  },
  plugins: [],
};
