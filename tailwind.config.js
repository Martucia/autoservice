/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ['"DM Sans"', "sans"],
        heading: ['"Roboto"', "sans"],
      },
      colors: {
        bl: "#1E5DBC",
        dkbl: "#0c49a6",
        tx: "#2B4448",
        gr: "#2B4448",
        gray: "#BDBDBD",
        darkGray: "#777777",
        lightGray: "#EDEDED",
      },
      fontWeight: {
        bold: 700,
      },
    },
    screens: {
      ph: "520px",
      sm: "640px",
      md: "768px",
      "2md": "842px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
