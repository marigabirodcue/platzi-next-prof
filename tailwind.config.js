let colors = require('tailwindcss/colors');

delete colors['lightBlue'];
delete colors['warmGray'];
delete colors['trueGray'];
delete colors['coolGray'];
delete colors['blueGray'];
colors = { ...colors, ...{ transparent: 'transparent' } }

module.exports = {
  darkMode: 'class',
  content: ["./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
  "./public/index.html",
  "./src/**/*.{html,js,jsx}",],
  theme: {
    colors,
    listStyleType: {
      none: 'none',
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
  backgroundSize: {
    'auto': 'auto',
    'cover': 'cover',
    'contain': 'contain',
    '50%': '50%',
    '16': '4rem',
  },
};