const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    // app content
    `src/**/*.{js,ts,jsx,tsx}`,
    // include packages if not transpiling
    // "../../packages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-avenir)'],
      },
      colors: {
        accent: '#e31d1c',
        foreground: '#ffffff',
        background: '#000000',
        gradientFadeout: '#ff0080',
        test: '#F3F3F3',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
