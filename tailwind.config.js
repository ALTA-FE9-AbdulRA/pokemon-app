/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: { fontFamily : {
    "gemunu-libre" : ["Gemunu Libre, sans-serif"]
  },
    extend: {
      colors : {
        "bg-custom1" : "#FFFFFF",
        "bg-custom2" : "#1C6758",
      },
    },
  },
  plugins: [],
}
