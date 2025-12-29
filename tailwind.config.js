/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./views/**/*.{js,ts,jsx,tsx}",
    "./services/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    {
      pattern: /(bg|text|border|shadow|ring|accent|from|to|selection:bg)-(rose|sky|violet|emerald|amber|indigo|slate|teal|orange|green|cyan|fuchsia)-(50|100|200|300|400|500|600|700|800|900)/,
      variants: ['hover', 'focus', 'active', 'group-hover', 'disabled'],
    }
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Quicksand', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
