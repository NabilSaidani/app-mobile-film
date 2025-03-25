/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#2a303d",
        secondary: "#f7f7f7",
        accent: "#ab8bff",
        light: {
          100: "#d6c6ff",
          200: "#A8B5DB",
          300: "#8A9CFF",
        },
        dark: {
          100: "#2a303d",
          200: "#1a1d23",
          300: "#0f0f0f",
        },
      },
      plugins: [],
    }
  }
}