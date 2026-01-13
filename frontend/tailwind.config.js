module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#dd6e42',
        secondary: '#e8dab2',
        dark: '#4f6d7a',
        light: '#c0d6df',
        background: '#eaeaea',
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