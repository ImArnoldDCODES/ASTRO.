const { plugin } = require("twrnc");
module.exports = {
    theme: {
      extend: {
        colors: {
          primary: "#8C42B2",
          "primary-light": "#EEE2F3",
          "primary-dark": "#2D4273",
          secondary: "#E8AD55",
          tertiary: "#FDF6ED",
          warning: "#FCDC4D",
          error: "#EF2D56",
          success: "#2FBF71",
          dark: "#3A3A3A",
          white: "#fff",
          medium: "#F6F3F6",
          info: "#203182",
          "info-light": "#0099F5",
          light: "#DFDFDF",
          black: "#0c0c0c",
          danger: "#ff5252",
          "danger-light": "#F0457D",
          "light-gray": "#EBEBEB",
          "dark-gray": "#8B8B8B",
          whitesmoke: "#f5f5f5",
        },
      },
    },
    plugins: [
      plugin(({ addUtilities }) => {
        addUtilities({
          "font-stix": {
            fontFamily: "stix",
          },
          "font-clash": {
            fontFamily: "clash",
          },
          "font-satoshi": {
            fontFamily: "satoshi",
          },
        });
      }),
    ],
  };