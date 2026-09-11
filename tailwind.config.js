/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: {
            DEFAULT: '#0052cc',
            50: '#f0f7ff',
            100: '#e0effe',
            200: '#bae0fd',
            300: '#7cc5fb',
            400: '#38a5f6',
            500: '#0052cc',
            600: '#0046b8',
            700: '#003794',
            800: '#032e78',
            900: '#072763',
          },
          dark: {
            950: '#090d16',
            900: '#0e1526',
            800: '#17223b',
            700: '#233254',
          },
          slate: {
            50: '#f8fafc',
            100: '#f1f5f9',
            200: '#e2e8f0',
            300: '#cbd5e1',
          }
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        heading: ['Montserrat', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'brand': '0 10px 25px -5px rgba(0, 82, 204, 0.25), 0 8px 10px -6px rgba(0, 82, 204, 0.2)',
        'card': '0 4px 20px -2px rgba(14, 21, 38, 0.06), 0 2px 6px -2px rgba(14, 21, 38, 0.04)',
      },
    },
  },
  plugins: [],
}

