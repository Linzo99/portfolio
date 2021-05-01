module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
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
        project: '336px',
      }
    },
  },
  variants: {
    extend: {
      scale:['group-hover']
    },
  },
  plugins: [],
}
