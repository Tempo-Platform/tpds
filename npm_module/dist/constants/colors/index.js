'use strict';

var tokens_index = require('../../tokens/index.js');

var colorTokens = tokens_index.colors;
var colorPalettes = colorTokens.color_palettes;
var colors = {
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
      tertiary: colorTokens.dark.text_tertiary
    },
    bg: {
      body: colorTokens.dark.body_bg,
      window: colorTokens.dark.window_bg
    },
    border: {
      window: colorTokens.dark.window_border
    }
  },
  light: {
    text: {
      primary: colorTokens.light.text_primary,
      secondary: colorTokens.light.text_secondary,
      tertiary: colorTokens.light.text_tertiary
    },
    bg: {
      body: colorTokens.light.body_bg,
      window: colorTokens.light.window_bg
    },
    border: {
      window: colorTokens.light.window_border
    }
  }
};

module.exports = colors;
