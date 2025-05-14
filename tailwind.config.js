// tailwind.config.js
export default {
  theme: {
    extend: {
      fontFamily: {
        content: ['"Merriweather"', "sans-serif"],
        logo: ['"Playfair Display"', "sans-serif"],
      },
      fontSize: {
        "D/H1": ["72px", { lineHeight: "0.9" }],
        "D/H2": ["45px", { lineHeight: "0.9" }],
        "D/H3": ["28px", { lineHeight: "0.9" }],
        "D/B1": ["20px", { lineHeight: "0.9" }],
        "D/B2": ["16px", { lineHeight: "1.2" }],
        "D/NAV": ["16px", { lineHeight: "1" }],
        "D/DIS2": ["120px", { lineHeight: "0.8" }],
        "D/DIS1": ["300px", { lineHeight: "0.8" }],
        "D/DIS0": ["280px", { lineHeight: "0.8" }],
        // mobile
        "M/H1": ["32px", { lineHeight: "0.9" }],
        "M/DIS2": ["64px", { lineHeight: "0.8" }],
        "M/DIS1": ["150px", { lineHeight: "0.8" }],
        "M/DIS0": ["64px", { lineHeight: "0.8" }],
      },
      screens: {
        md: "360px",
        lg: "1440px",
      },
      colors: {
        red: "#E01111",
        green: "#288E3E",
        brown: "#672B11",
        yellow: "#DBBB76",
        cream: "#F3EEE5",
        black: "#000000",
        light: "#EAEAEA",
        white: "#FFFFFF",
        soft: "rgba(255, 255, 255, 0.3)",
      },
    },
  },
};
