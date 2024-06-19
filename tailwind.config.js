/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'berkshire': ['"Berkshire Swash"', 'serif', 'sans-serif'],
      },
      fontSize: {
        'sm': '14px',
        'base': '16px',
        'lg': '18px',
        'xl': '20px',
        '2xl': '24px',
        '3xl': '30px',
        '4xl': '36px',
        '5xl': '48px',
        '6xl': '64px',
      },
      colors: {
        'custom-blue': {
          light: '#85d7ff',
          DEFAULT: '#1fb6ff',
          dark: '#009eeb',
        },
        'dark-bg': '#1f2937',
        'light-text': '#f3f4f6',
        'dark-text': '#1f2937',
      },
    },
  },
  plugins: [],
}