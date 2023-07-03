/** @type {import('tailwindcss').Config} */
const tpdstailwindconfig = require('./src/tpds/system/tailwind.config.js')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/tpds/**/*.{js,ts,jsx,tsx,mdx}',
    './src/ui/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  future: tpdstailwindconfig.future,
  darkMode: 'class',
  theme: tpdstailwindconfig.theme,
  plugins: tpdstailwindconfig.plugins,
}
