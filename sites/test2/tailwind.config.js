/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
          'customBlack': '#312D2D',
          'customGray': '#F7F7F7',
          'customGrayHover': '#E2E2E2',
          'customDarkGray': '#2B2B2B',
          'customDarkGray2': '#D9D9D9',
          'customGrayBorder': 'rgba(230, 230, 230, 0.5);',
          'darkModeMainColor': '#2D2E37',
          "darkModeMainColorHover": "#292A33",
          'darkModeMainColor2':'#42434B',
          'darkModeIcon': '#9D9DA2',
          'darkModeBg': '#22232C',
          'customLightGray': '#E6E6E6',
          'customLightGrayHover': '#B3B3B3',
          'customLightGrayHover2': 'rgba(230, 230, 230, 0.3);',
          'customLightGrayHover3': 'rgba(230, 230, 230, 0.1);',
          'customGreen': '#77E067',
          'dislikeColor': '#FF7D7D',
          'customLightGray2': '#A4A4A4',
          'customBlackOpacity': 'rgba(0, 0, 0, 0.2)',
          'customPurple': "#6D73EA",
          'customInputBg': '#383941',
          'customInputBorder': 'rgba(43, 43, 43, 0.2)',
          'customInputBorderDark': 'rgba(87, 88, 94)',
          'customFormBorder': '#F2F2F2'
      }, 
      backgroundImage: {
        'greenGradient': 'linear-gradient(90deg, rgba(119,224,103,1) 0%, rgba(67,194,48,1) 100%);',
        'greenGradientHover': 'linear-gradient(149deg, rgba(119,224,103,1) 0%, rgba(67,194,48,1) 100%);',
        'ratingCircle': 'url("../img/svg/circle.svg")',
        'ratingCircleDark': 'url("../img/svg/circle-dark.svg")',
        'play': 'url("../img/svg/play-ser.svg")',
        'likeFill': 'url(#paint2_linear_159_389)'
      }
    },
    boxShadow: {
      'custom-shadow': '0px 2px 20px 4px rgba(0, 0, 0, 0.03)',
    },
    fontFamily: {
      'Gilroy': ['Gilroy','ui-sans-serif', 'system-ui']
    },
    fontSize: {
      sm: ['16px', '20px'],
    },
    screens: {
      'sm': '640px',
      'lg': '1020px',
      'xl': "1280px"
    },
  },
  
  plugins: [],
}

