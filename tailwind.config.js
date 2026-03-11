/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: { 
        sans: ['Inter', 'sans-serif'], 
        mono: ['JetBrains Mono', 'monospace'] 
      },
      colors: { 
        glass: 'rgba(255, 255, 255, 0.7)', 
        glassBorder: 'rgba(255, 255, 255, 0.5)' 
      }
    }
  },
  plugins: [],
}
