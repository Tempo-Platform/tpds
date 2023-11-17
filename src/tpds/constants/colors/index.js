const colorTokens = require('../../tokens/index.json').colors
const colorPalettes = colorTokens.color_palettes

module.exports = {
  white: colorTokens.white,
  black: colorTokens.black,

  green: colorPalettes.green['500'],
  blue: colorPalettes.blue['500'],
  orange: colorPalettes.orange['500'],
  red: colorPalettes.red['500'],
  yellow: colorPalettes.yellow['500'],
  purple: colorPalettes.purple['500'],
  magenta: colorPalettes.magenta['500'],

  grey_light: colorPalettes['grey_light'],
  grey_dark: colorPalettes['grey_dark'],

  green_scale: colorPalettes.green,
  blue_scale: colorPalettes.blue,
  orange_scale: colorPalettes.orange,
  red_scale: colorPalettes.red,
  yellow_scale: colorPalettes.yellow,
  purple_scale: colorPalettes.purple,
  magenta_scale: colorPalettes.magenta,

  dark: {
    text: {
      primary: colorTokens.dark.text_primary,
      secondary: colorTokens.dark.text_secondary,
      tertiary: colorTokens.dark.text_tertiary,
    },
    bg: {
      body: colorTokens.dark.bg_body,
      window: colorTokens.dark.bg_window,
    },
    border: {
      body: colorTokens.dark.border_body,
      window: colorTokens.dark.border_window,
    },
  },
  light: {
    text: {
      primary: colorTokens.light.text_primary,
      secondary: colorTokens.light.text_secondary,
      tertiary: colorTokens.light.text_tertiary,
    },
    bg: {
      body: colorTokens.light.bg_body,
      window: colorTokens.light.bg_window,
    },
    border: {
      body: colorTokens.light.border_body,
      window: colorTokens.light.border_window,
    },
  },
}
