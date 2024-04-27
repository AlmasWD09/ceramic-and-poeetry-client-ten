/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Lexend': ['Lexend', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        // 'primary': '#191980',
        'primary': 'green',
        'secondery': 'red',
      },
    },
  },
  plugins: [require("daisyui")],

  // theme generate
  daisyui: {
    themes: ["light", "luxury",],
  },
}

