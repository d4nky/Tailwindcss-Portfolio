module.exports = {
  content: ['./dist/*.html'],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
      'header': "url('img/background.jpg')",
    },
      fontFamily: {
        'custom': ['Montserrat', 'mono'],
      },
      keyframes: {
        typewriter: {
          'from': {width: '0'},
          'to' : {width: '100%'},
      },
      blink: {
        'from': {borderColor: 'transparent'},
        'to': {borderColor: 'white'},
      },
      nav: {
        '0%': {opacity: '0',
        marginTop: '-200px'
      },
        '100%': {opacity: '1',
        marginTop: '0px'
      },
      }
    },
    animation: {
        typewriter: 'typewriter 6s steps(120, end) forwards, blink .5s infinite',
        nav: 'nav 1s forwards',
      }
      
    }, 
  },
  plugins: [],
}
