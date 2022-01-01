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
        typewriter: 'typewriter 1.5s steps(50, end) forwards',
      }
    }, 
  },
  plugins: [],
}
