/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'blue': '#4979ff',
        'textgray' : '#777',
        'titlesdark':'#333',
        'bordercolor':'#eaeaea',
        'borderb':'#ddd',
        'forbg':'#f2f2f2'

      },

  },
  plugins: [],
}