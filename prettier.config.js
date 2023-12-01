/** @type {import("prettier").Config} */
const config = {
  plugins: [require.resolve('prettier-plugin-tailwindcss')],
  singleQuote: true,
  semi: true,
  tabWidth: 2,
  useTabs: false,
  arrowParens: 'avoid',
  trailingComma: 'none'
};

module.exports = config;
