/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      padding: {
        "30": "120px",
      },

      colors: {
        "darkenGreen": "#03514E",
        "blackGreen": "#2E3535",
        "lineGreen": "#4D5353",
        "brightGreen": "#046763",
        "fontGreen": "#393B3B",
        "slaten": "#CFCFCF",
      },

      fontFamily: {
        "heading": "Lora",
        "body": "Roboto",
      },
    },
  },
  plugins: [],
}

