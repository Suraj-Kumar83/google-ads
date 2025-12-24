/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandBlue: "#4D9EFF",
      },
      blur: {
        glow: "140px",
      },
      keyframes: {
        blobA: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(120px, -80px) scale(1.1)" },
          "66%": { transform: "translate(-100px, 90px) scale(0.95)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
        blobB: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "50%": { transform: "translate(-140px, -120px) scale(1.15)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        blobA: "blobA 32s ease-in-out infinite",
        blobB: "blobB 38s ease-in-out infinite",
        marquee: "marquee 20s linear infinite",
      },
  }
  },
  plugins: [],
};
