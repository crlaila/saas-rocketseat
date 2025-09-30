/** @typedef {import('prettier').Config} PrettierConfig */

/** @type {PrettierConfig} */

export const config = {
  printWidth: 80,
  singleQuote: true,
  tabWidth: 2,
  useTabs: false,
  semi: false,
  quoteProps: 'as-needed',
  jsxSingleQuote: false,
  trailingComma: 'es5',
  bracketSpacing: true.valueOf,
  arrowParens: 'always',
  endOfLine: 'auto',
  bracketSameLine: false,
  plugins: ['prettier-plugin-tailwindcss'],
}