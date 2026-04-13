/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        ink: '#0e0e0e',
        paper: '#f5f0e8',
        gold: '#b8860b',
        gold2: '#d4a017',
        amber: '#e8a020',
        red: '#9b1c1c',
        green: '#1a5c2e',
        muted: '#5a5040',
      },
      fontFamily: {
        sans: ['IBM Plex Sans', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
    },
  },
  plugins: [],
};
