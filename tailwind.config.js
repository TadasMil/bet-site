/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#e8141c',
        'red-100': '#E76377',
        'coal-50': '#F6F6F6',
        'coal-100': '#D2D2D2',
        'coal-200': '#DDDDDD',
        'coal-300': '#4B4B4B',
        'green-300': '#78B428',
        'yellow-300': '#FFE600',
        'blue-100': '#DEEBFF',
        'blue-200': '#5291F2',
        'blue-300': '#2697F0',
        'blue-400': '#0F75C5',
      },
    },
  },
  plugins: [],
}
