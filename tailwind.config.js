/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [`./src/pages/**/*.{js,jsx,ts,tsx}`, `./src/components/**/*.{js,jsx,ts,tsx}`],
  theme: {
    darkMode: 'media',
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif']
      },
      colors: {
        background: '#bbbbbb',
        text: '#1a202c',
        primary: '#aaaaaa',

        dark: {
          background: '#1A1C1F',
          text: '#ffffff',
          primary: '#1F2033'
        }
      },
      fontWeight: {
        light: 300,
        thin: 100
      }
    }
  },
  plugins: []
}
