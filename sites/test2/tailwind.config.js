/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  darkMode: 'class',
  borderRadius: {
    'none': '0',
    '5px': '5px',
    'md': '0.375rem',
    'lg': '0.5rem',
    'full': '9999px',
    'large': '12px',
  },
  theme: {
    extend: {
      spacing: {
        '20px': '20px',
      },
      maxWidth: {
        '176px': '176px',
        '15px': '15px',
        '55px': '55px'
      },
      height: {
        '15px': '15px',
      },
      colors: {
        'gray': 'rgba(231, 229, 228, 1)',
        'light-gray': 'rgba(250, 250, 249, 1)',
        'light-gray-2': 'rgba(214, 211, 209, 1)',
        'light-gray-3': 'rgba(245, 245, 244, 1)',
        'black': 'rgba(41, 37, 36, 1)',
        'black-2': 'rgba(0, 0, 0, 1)',
        'dark-bg': 'rgba(41, 37, 36, 1)',
        'dark-bg-2': 'rgba(68, 64, 60, 1)',
        'dark-bg-3': 'rgba(28, 25, 23, 1)',
        'green': 'rgba(22, 163, 74, 1)',
        'green-hover': 'rgb(21 207 90);',
        'red': 'rgba(239, 68, 68, 1)',
        'red-hover': 'rgb(225 21 21);',
        'text-color': 'rgba(87, 83, 78, 1)',
        'active': 'rgba(13, 148, 136, 1)',
        'active-hover': 'rgb(15 191 175);',
        'activeOpacity': 'rgba(13, 148, 136, 0.2)',
        'controls': 'rgba(168, 162, 158, 1)',
        'footer': 'rgba(120, 113, 108, 1)'
      },
    },
    fontFamily: {
      'Segoe': ['"Segoe UI"','ui-sans-serif', 'system-ui']
    },
    fontSize: {
      s: ['15px', '22.5px'],
      sm: ['15px', '19px'],
      reactBtn: ['16px', '16px'],
      mx: ['18px', '24px'],
      m: ['24px', '31px'],
    },
    backgroundImage: {
      'seasons': "url('./img/season.webp')"
    }
  },
  
  plugins: [],
}

