module.exports = {
  content: ['./dist/*.html'],
  theme: {
    screens: {
      'xsm': '480px'
    },
    extend: {
      fontFamily: {
        'custom': ['Montserrat', 'mono'],
      },
      keyframes: {
        typewriter: {
          'from': {width: '0'},
          'to' : {width: '100%'},
      }
    },
    animation: {
        typewriter: 'typewriter 2.5s steps(200, end) forwards',
      }
    }, 
  },
  plugins: [],
}
