/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cbrown: {
          l: "#6f4f28", // Lighter shade
          DEFAULT: "#543310", // Base color
          d: "#3b1f0c", // Darker shade
        },
      },
    },
  },
  plugins: [
    ({ addVariant }) => {
      addVariant("child", "& > *");
      // addVariant("child-hover", "& > *:hover");
    },
  ],
};
