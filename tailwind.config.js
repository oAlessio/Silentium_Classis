/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navy': {
          950: '#050a12',
          900: '#0a1120',
          800: '#0f1c2e',
          700: '#162a42',
          600: '#1e3a56',
        },
        'accent': {
          cyan: '#5eafc5',
          orange: '#d4845a',
          gold: '#c9a960',
        },
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}