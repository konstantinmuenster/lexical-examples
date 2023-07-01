import typographyPlugin from "@tailwindcss/typography";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    "outline-none",
    "prose",
    { pattern: /px-/ },
    { pattern: /py-/ },
    { pattern: /p-/ },
    { pattern: /m-/ },
    { pattern: /border-/ },
  ],
  theme: {
    fontFamily: {
      sans: [
        "ui-sans-serif",
        "-apple-system",
        "BlinkMacSystemFont",
        "Helvetica",
        "Apple Color Emoji",
        "Arial",
        "sans-serif",
      ],
    },
    extend: {},
  },
  plugins: [typographyPlugin],
};
