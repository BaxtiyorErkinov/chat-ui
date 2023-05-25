/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-gray": '#EEEEEE',
        "main-dark": "#011D32",
        "main-green": '#00CD69',
        "light-green": '#E6FAF0',
        "light-gray": "#F8F8F8",
        "light-blue": "#5FA2DD",
        "dark-gray": '#011D32'
      },
    },

  },
  plugins: [],
}