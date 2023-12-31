/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily : {
        roboto: ["Roboto", "sans-sarif"],
        poppins: ["Poppins", "sans-sarif"],
      }
    },
  },
  plugins: [],
}

