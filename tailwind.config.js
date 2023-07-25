/** @type {import('tailwindcss').Config} */
const tpdstailwindconfig = require('./src/tpds/system/tailwind.config.js')

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  future: tpdstailwindconfig.future,
  darkMode: 'class',
  theme: tpdstailwindconfig.theme,
  plugins: tpdstailwindconfig.plugins,
}
