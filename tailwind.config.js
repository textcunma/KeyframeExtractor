/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      height: {
        '45': '11.5rem',
        '100': '24.5rem',
      }
    },
  },
  plugins: [],
}
