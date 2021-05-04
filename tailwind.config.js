module.exports = {
  mode:'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        primary:{
          DEFAULT: '#0B0E11',
          light: '#151A21',
        }, 
        secondary:{
          DEFAULT: '#F50A42',
        }
      },
      height:{
        section: '540px',
      },
      width:{
        project: '320px',
        tinny: '280px',
      },
      lineClamp:{
        10: '10'
      }
    },
  },
  variants: {
    extend: {
      scale:['group-hover']
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('tailwind-scrollbar-hide')
  ],
}
