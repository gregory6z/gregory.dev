/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        // => @media (min-height: 800px) { ... }
      },
      fontFamily: {
        sans: "var(--font-sora)",
      },
      colors: {
        "background-dark-900": "#121519",
        "white-blue": "#E4F7FF",
      },

      keyframes: {
        slideIn: {
          "0%": { opacity: 0, transform: "translateY(-100%)" },

          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        scrollRight: {
          "0% ": { transform: "translateX(0%)" },

          "50%": {
            transform: "translateX(-34%)",
          },
        },
        spinCustom: {
          "0%": { transform: "rotate(0deg)", opacity: 0 },
          "1%": { transform: "rotate(0deg)", opacity: 1 },

          "50%": {
            transform: "rotate(80deg)",
          },
          "80%": {
            transform: "rotate(-50deg)",
          },
          "100%": {
            transform: "rotate(0deg)",
          },
        },
      },
      animation: {
        slideIn: "slideIn 500ms cubic-bezier(0.4, 0, 0.6, 1)",
        scrollRightAnimate: "scrollRight 50s linear infinite",
      },
    },
  },
  plugins: [],
}
