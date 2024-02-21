/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily : {
        roboto: ["Roboto", "sans-sarif"],
        poppins: ["Poppins", "sans-sarif"],
        basierCircle: ["Basier-Circle", "sans-sarif"],
        basierSquare: ["Basier-Square", "Basier Circle", "sans-sarif"],
      },

      dropShadow : {
        'special' : '0 15px 15px rgba(0, 0, 0, 0.55)',
      }
    },
  },
  plugins: [],
}

