/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  darkMode: 'class',
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            h1: {
              color: '#383839',
            },
            p: {
              color: '#6F6F71'
            }
          },
        },
      },
      colors: {
          'iconColor': 'rgba(225, 255, 255, 0.4',
          'ageBg': 'rgba(0, 0, 0, 0.4)',
          'listHoverLight': "#f8f8f8",
          'listHoverDark': "#2F3132",
      }, 
      backgroundImage: {
        'greenGradient': 'linear-gradient(90deg, rgba(119,224,103,1) 0%, rgba(67,194,48,1) 100%);',
      },
      gridTemplateColumns: {
        'page2-grid': '1fr 119px',
      }
    },
    boxShadow: {
      'custom-shadow': '0px 4px 32px rgba(0, 0, 0, 0.15)',
    },
    fontFamily: {
      'WixMadeforDisplay': ['WixMadeforDisplay','ui-sans-serif', 'system-ui']
    },
    fontSize: {
      sm: ['16px', '20px'],
    },
    screens: {
      'extra-small': '390px',
      'md': '700px',
      "l": '1020px',
      'lg': '1440px',
    },
  },
  
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

