/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: "#1190cb",
        accent: "#7dcbfe"
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
};