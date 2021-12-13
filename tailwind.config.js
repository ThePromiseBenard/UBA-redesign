module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        'nunito': 'Nunito Sans',

        'libre': 'Libre Caslon Text'
      },

      colors: {
        'lightred': '#FFF9F9',
        'uba': '#E20F00',
        'grade': {
          100: "#FFFFFF",
          200: "#859FFF",
          300: "#FF8D85"
        },
        'footer':'#000031'
      },

      height: {
        'xl': '712px',
        '97': '30rem',
      },
      width: {
        '7/10': '87%',
        
      },

      backgroundPosition:{
        'top-4': 'center top 0rem'

      },

      backgroundImage: {
        'card-1': "url('/images/United-Bank-For-Africa-Careers.jpg')",
        'card-2': "background-image: linear-gradient(rgba(0,0,0,0.1),rgba(0, 0, 0, 0.1)),url('/images/pexels-christina-morillo-1181725.jpg')",
        'card-3': "url('/images/uba-serria-leone-wins-innovative-bank.jpg')",
        'card-4': "url('/images/pexels-picha-stock-3894378.jpg')",
        'card-5': "url('/images/uba-board-kennedy-uzoka.jpg')",
        'card-6': "url('/images/UBA-Background.jpg')",
       }
    },
    lineHeight: {
      'leading-head': '3.75rem',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
