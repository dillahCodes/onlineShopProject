/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  important: true,
  theme: {
    extend: {
      fontFamily: {
        "space-grotesk": ["Space Grotesk", "sans-serif"],
      },
      dropShadow: {
        white: ["0 0 3px rgba(255, 255, 255, .2)", "1px 1px 7px rgba(255, 255, 255, .5)"],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
          overflow: "-moz-scrollbars-none", // hide scrollbar in firefox
        },

        ".input-no-arrow": {
          // Hide the default increment/decrement buttons in input fields
          "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
            "-webkit-appearance": "none",
            margin: 0,
          },
          // Hides the increment/decrement buttons in Firefox
          "&[type='number']": {
            "-moz-appearance": "textfield",
          },
        },

        ".rotate-x-90": {
          transform: "rotateX(90deg)",
        },
        ".rotate-x-0": {
          transform: "rotateX(0deg)",
        },
        ".-rotate-x-90": {
          transform: "rotateX(-90deg)",
        },

        ".scrollbar-custom::-webkit-scrollbar": {
          width: "5px",
        },
        ".scrollbar-custom::-webkit-scrollbar-track": {
          background: "#f1f1f1",
        },
        ".scrollbar-custom::-webkit-scrollbar-thumb": {
          background: "#8D96AA",
          borderRadius: "5px",
        },
        ".scrollbar-custom::-webkit-scrollbar-thumb:hover": {
          background: "#555",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
