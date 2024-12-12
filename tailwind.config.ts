// @ts-nocheck
import type { Config } from 'tailwindcss'
import * as tokens from './npm_module/src/tokens/index.js'

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', './npm_module/src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'selector',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Lora', 'serif'],
        mono: ['Inconsolata', 'mono'],
      },
      screens: {
        sm: tokens.breakpoints.sm,
        md: tokens.breakpoints.md,
        lg: tokens.breakpoints.lg,
        xl: tokens.breakpoints.xl,
        '2xl': tokens.breakpoints['2xl'],
      },
      spacing: tokens.spacing,
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: tokens.colors.black,
        white: tokens.colors.white,
        green: tokens.colors.color_palettes.green['500'],
        red: tokens.colors.color_palettes.red['500'],
        blue: tokens.colors.color_palettes.blue['500'],
        yellow: tokens.colors.color_palettes.yellow['500'],
        purple: tokens.colors.color_palettes.purple['500'],
        magenta: tokens.colors.color_palettes.magenta['500'],
        orange: tokens.colors.color_palettes.orange['500'],
        success: tokens.colors.color_palettes.green['500'],
        danger: tokens.colors.color_palettes.red['500'],
        info: tokens.colors.color_palettes.blue['500'],
        warning: tokens.colors.color_palettes.orange['500'],
        'green-scale': tokens.colors.color_palettes.green,
        'red-scale': tokens.colors.color_palettes.red,
        'blue-scale': tokens.colors.color_palettes.blue,
        'yellow-scale': tokens.colors.color_palettes.yellow,
        'purple-scale': tokens.colors.color_palettes.purple,
        'magenta-scale': tokens.colors.color_palettes.magenta,
        'orange-scale': tokens.colors.color_palettes.orange,
        'grey-light-scale': tokens.colors.color_palettes.grey_light,
        'grey-dark-scale': tokens.colors.color_palettes.grey_dark,
      },
    },
  },
  plugins: [require('@tailwindcss/container-queries')],
} satisfies Config
