module.exports = {
  content: ['./dist/*.html'],
  theme: {
    screens: {
      'xsm': '480px'
    },
    extend: {
      backgroundImage: {
      'header': "url('/img/background.jpg')",
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
        nav: 'nav .5s forwards',
      }
      
    }, 
  },
  plugins: [],
}
