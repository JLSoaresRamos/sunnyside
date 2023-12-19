/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'md': '769px',
        'sm': '320px',
        'lg' :  '1440px'
      },
      colors: {
        primary: {
          softRed: 'hsl(7, 99%, 70%)',
          yellow: 'hsl(51, 100%, 49%)',
          darkDesaturatedCyan: 'hsl(167, 40%, 24%)',
          darkBlue: 'hsl(198, 62%, 26%)',
          darkModerateCyan: 'hsl(168, 34%, 41%)',
        },
        neutral: {
          veryDarkDesaturatedBlue: 'hsl(212, 27%, 19%)',
          veryDarkGrayishBlue: 'hsl(213, 9%, 39%)',
          darkGrayishBlue: 'hsl(232, 10%, 55%)',
          grayishBlue: 'hsl(210, 4%, 67%)',
          white: 'hsl(0, 0%, 100%)',
        },
      },
      backgroundImage: {
        'hero-pattern-desktop': "url('/images/desktop/image-header.jpg')",
        'cherry': "url('/images/desktop/image-graphic-design.jpg')",
        'cherryMobile': "url('/images/mobile/image-graphic-design.jpg')",
        'orange': "url('/images/desktop/image-photography.jpg')",
        'orangeMobile': "url('/images/mobile/image-photography.jpg')"
      },
      fontFamily: {
        body: ['Barlow', 'sans-serif'],
        heading: ['Fraunces', 'sans-serif'],
      },
      fontSize: {
        body: '18px',
      },
      fontWeight: {
        body: 600,
        heading: [700, 900],
      },
    },
  },
  variants: {},
  plugins: [],
};
