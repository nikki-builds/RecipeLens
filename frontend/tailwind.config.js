module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#8eb44e',      //(main button)
        secondary: '#f5ecdc',    // cream (card bg)
        dark: '#362822',         // dark brown (text)
        light: '#b9cd90',        // light green (border)
        background: '#fdfcf8',   // white
        accent: '#d9af52',       // golden (by choice)
      },
      animation: {
        slideInRight: 'slideInRight 0.7s ease-out',
        slideInUp: 'slideInUp 0.7s ease-out',
      },
      keyframes: {
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}