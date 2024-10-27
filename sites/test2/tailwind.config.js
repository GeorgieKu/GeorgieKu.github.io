/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        'input-bg': 'rgba(249, 249, 249, 1)',
        'placeholder': 'rgba(127, 138, 155, 1)',
        'black-text': 'rgba(26, 37, 55, 1)',
        'black-text-2': 'rgba(27, 35, 50, 1)',
        'light-gray': 'rgba(149, 155, 166, 1)',
        'light-gray-2': 'rgba(159, 159, 159, 1)',
        'light-gray-3': 'rgba(231, 231, 231, 1)',
        'light-gray-4': 'rgba(243, 243, 243, 1)',
        'light-gray-3-hover': 'rgba(245, 245, 245, 1)',
        'light-gray-border-hover': 'rgba(217, 217, 217, 1)',
        'dark-gray': 'rgba(107, 108, 120, 1)',
        'blue': 'rgba(23, 83, 168, 1)',
        'custom-purple': 'rgba(251, 238, 255, 1)',
        'custom-blue': 'rgba(229, 244, 251, 1)',
        'custom-yellow': 'rgba(252, 246, 215, 1)',
        'custom-red': 'rgba(255, 230, 230, 1)',
        'custom-purple-2': 'rgba(241, 235, 255, 1)',
        'custom-green': 'rgba(235, 255, 237, 1)',
        'custom-orange': 'rgba(255, 237, 224, 1)',
        'custom-purple-blur': 'rgba(216, 88, 255, 1)',
        'custom-blue-blur': 'rgba(40, 178, 242, 1)',
        'custom-yellow-blur': 'rgba(223, 186, 0, 1)',
        'custom-red-blur': 'rgba(254, 44, 44, 1)',
        'custom-purple-blur-2': 'rgba(131, 77, 255, 1)',
        'custom-green-blur': 'rgba(38, 220, 56, 1)',
        'custom-orange-blur': 'rgba(248, 106, 3, 1)',
        'custom-purple-hover': 'rgba(180, 109, 202, 1)',
        'custom-blue-hover': 'rgba(74, 154, 191, 1)',
        'custom-yellow-hover': 'rgba(245, 206, 0, 1)',
        'custom-red-hover': 'rgba(203, 76, 76, 1)',
        'custom-purple-hover-2': 'rgba(127, 94, 205, 1)',
        'custom-green-hover': 'rgba(98, 198, 108, 1)',
        'custom-orange-hover': 'rgba(229, 127, 53, 1)',
      },
    },
    screens: {
      'xs': '360px',
      's': '575px',
      'md': '769px',
      'lg': '1024px',
      'xl': "1280px"
    },
    fontFamily: {
      'sans': ['Inter','ui-sans-serif', 'system-ui']
    },
    maxWidth: {
      'calc-full-minus-343': 'calc(100% - 343px)',
    },


  },
  
  plugins: [],
}

