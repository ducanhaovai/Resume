// eslint-disable-next-line @typescript-eslint/no-var-requires
import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
export const content = ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"];
export const corePlugins = {
  container: false,
};
export const theme = {
  extend: {
    colors: {
      orange: "#ee4d2d",
    },
    animation: {
      // Thêm dòng này
      fadeIn: "fadeIn 1s linear",
    },
    keyframes: {
      // Và thêm dòng này
      fadeIn: {
        "0%": { opacity: "0" },
        "100%": { opacity: "1" },
      },
    },
  },
};
export const plugins = [
  plugin(function ({ addComponents, theme }) {
    addComponents({
      ".container": {
        maxWidth: theme("columns.7xl"),
        marginLeft: "auto",
        marginRight: "auto",
        paddingLeft: theme("spacing.4"),
        paddingRight: theme("spacing.4"),
      },
      ".flex-center": {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
    });
  }),
];
