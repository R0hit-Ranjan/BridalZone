/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bridal: {
          primary: '#9F3A4B',      // Soft bridal rose
          hover: '#872C3C',
          gold: '#C5933C',         // Warm champagne gold
          lightgold: '#FDF7EB',    // Pale gold cream
          pearl: '#FAF7F2',        // Clean light ivory
          card: '#FFFFFF',
          softblush: '#FFF5F4',    // Very light gentle blush
          accent: '#0D7A5F',       // Soft emerald
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

