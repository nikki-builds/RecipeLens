/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: { extend: {
    colors: {
      primary: '#dd6e42',      // orange - button, emphasis
      secondary: '#e8dab2',    // beige - supporting bg
      dark: '#4f6d7a',         // dark greenish blue - header, title
      light: '#c0d6df',        // skyblue - cards
      background: '#eaeaea',   // grey - main bg
    },
    animation: {
      fadeIn: 'fadeIn 0.5s east-in-out',
       slideInRight: 'slideInRight 0.7s ease-out',
    },
    keyframes: {
      fadeIn: {
        '0%': { opacity: '0', transform: 'translateX(20px)' },
        '100%': { opacity: '1', transform: 'translateX(0)' },
      },
      slideInRight: {  // 추가
        '0%': { 
          opacity: '0', 
          transform: 'translateX(20px)'  // 왼쪽에서 시작
        },
        '100%': { 
          opacity: '1', 
          transform: 'translateX(0) scale(1)' 
        },
      },
    } 
  },
},
  plugins: [],
}