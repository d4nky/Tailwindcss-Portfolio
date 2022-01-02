module.exports = {
  content: ['./dist/*.html'],
  theme: {
    screens: {
      'xsm': '480px'
    },
    extend: {
      fontFamily: {
        'custom': ['Montserrat', 'mono'],
        backgroundImage: {
        'header': "url('/img/background.jpg')",
      }
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
        typewriter: 'typewriter 12s forwards, blink .5s infinite',
        nav: 'nav .5s forwards',
      }
      
    }, 
  },
  plugins: [],
}
