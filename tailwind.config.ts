import { type Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
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
      },
    },
  },
  plugins: [],
} satisfies Config;
