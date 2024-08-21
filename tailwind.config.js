/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Include TypeScript files
    './pages/**/*.{js,jsx,ts,tsx}', // If you have a pages directory
    './components/**/*.{js,jsx,ts,tsx}', // If you have a components directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
