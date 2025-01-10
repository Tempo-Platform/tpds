import fs from 'fs'
import tokens from '../src/tokens/index.js'
const colors = tokens.colors
const colorsDarkTheme = colors.dark
const colorPalettes = colors.color_palettes
const colorsLightTheme = colors.light

const styleString = `.light {
  color-scheme: light;
  --bg-body: ${colorsLightTheme.body_bg};
  --bg-window: ${colorsLightTheme.window_bg};
  --border-window: ${colorsLightTheme.window_border};

  --text-primary: ${colorsLightTheme.text_primary};
  --text-secondary: ${colorsLightTheme.text_secondary};
  --text-tertiary: ${colorsLightTheme.text_tertiary};
  --text-negative: ${colorsLightTheme.body_bg};

  --bg-button: ${colorsLightTheme.buttons.default.bg.enabled};
  --bg-button-hover: ${colorsLightTheme.buttons.default.bg.hover};
  --bg-button-active: ${colorsLightTheme.buttons.default.bg.active};

  --bg-button-secondary: ${colorsLightTheme.buttons.secondary.bg.enabled};
  --bg-button-secondary-hover: ${colorsLightTheme.buttons.secondary.bg.hover};
  --bg-button-secondary-active: ${colorsLightTheme.buttons.secondary.bg.active};

  --bg-success-hover: ${colorsLightTheme.buttons.success.bg.hover};
  --bg-success-active: ${colorsLightTheme.buttons.success.bg.active};
  --bg-info-hover: ${colorsLightTheme.buttons.info.bg.hover};
  --bg-info-active: ${colorsLightTheme.buttons.info.bg.active};
  --bg-warning-hover: ${colorsLightTheme.buttons.warning.bg.hover};
  --bg-warning-active: ${colorsLightTheme.buttons.warning.bg.active};
  --bg-danger-hover: ${colorsLightTheme.buttons.danger.bg.hover};
  --bg-danger-active: ${colorsLightTheme.buttons.danger.bg.active};

  --text-button: ${colorsLightTheme.buttons.default.text.enabled};
  --text-button-hover: ${colorsLightTheme.buttons.default.text.hover};
  --text-button-active: ${colorsLightTheme.buttons.default.text.active};
  --text-button-secondary: ${colorsLightTheme.buttons.secondary.text.enabled};
  --text-button-secondary-hover: ${colorsLightTheme.buttons.secondary.text.hover};
  --text-button-secondary-active: ${colorsLightTheme.buttons.secondary.text.active};
  --text-button-success: ${colorsLightTheme.buttons.success.text.enabled};
  --text-button-success-hover: ${colorsLightTheme.buttons.success.text.hover};
  --text-button-success-active: ${colorsLightTheme.buttons.success.text.active};
  --text-button-info: ${colorsLightTheme.buttons.info.text.enabled};
  --text-button-info-hover: ${colorsLightTheme.buttons.info.text.hover};
  --text-button-info-active: ${colorsLightTheme.buttons.info.text.active};
  --text-button-warning: ${colorsLightTheme.buttons.warning.text.enabled};
  --text-button-warning-hover: ${colorsLightTheme.buttons.warning.text.hover};
  --text-button-warning-active: ${colorsLightTheme.buttons.warning.text.active};
  --text-button-danger: ${colorsLightTheme.buttons.danger.text.enabled};
  --text-button-danger-hover: ${colorsLightTheme.buttons.danger.text.hover};
  --text-button-danger-active: ${colorsLightTheme.buttons.danger.text.active};

  --border-button: ${colorsLightTheme.buttons.default.border.enabled};
  --border-button-hover: ${colorsLightTheme.buttons.default.border.hover};
  --border-button-active: ${colorsLightTheme.buttons.default.border.active};
  --border-button-secondary: ${colorsLightTheme.buttons.secondary.border.enabled};
  --border-button-secondary-hover: ${colorsLightTheme.buttons.secondary.border.hover};
  --border-button-secondary-active: ${colorsLightTheme.buttons.secondary.border.active};
  --border-button-success: ${colorsLightTheme.buttons.success.border.enabled};
  --border-button-success-hover: ${colorsLightTheme.buttons.success.border.hover};
  --border-button-success-active: ${colorsLightTheme.buttons.success.border.active};
  --border-button-info: ${colorsLightTheme.buttons.info.border.enabled};
  --border-button-info-hover: ${colorsLightTheme.buttons.info.border.hover};
  --border-button-info-active: ${colorsLightTheme.buttons.info.border.active};
  --border-button-warning: ${colorsLightTheme.buttons.warning.border.enabled};
  --border-button-warning-hover: ${colorsLightTheme.buttons.warning.border.hover};
  --border-button-warning-active: ${colorsLightTheme.buttons.warning.border.active};
  --border-button-danger: ${colorsLightTheme.buttons.danger.border.enabled};
  --border-button-danger-hover: ${colorsLightTheme.buttons.danger.border.hover};
  --border-button-danger-active: ${colorsLightTheme.buttons.danger.border.active};

  --bg-input: ${colorsLightTheme.input.bg.enabled};
  --bg-input-focus: ${colorsLightTheme.input.bg.enabled};
  --bg-input-hover: ${colorsLightTheme.input.bg.hover};

  --text-input: ${colorsLightTheme.input.text.enabled};
  --text-input-focus: ${colorsLightTheme.input.text.focus};
  --text-input-hover: ${colorsLightTheme.input.text.hover};
  --text-input-prefix: ${colorsLightTheme.input.text.prefix};
  --text-input-field_label: ${colorsLightTheme.input.text.field_label};

  --border-input: ${colorsLightTheme.input.border.default};
  --border-input-focus: ${colorsLightTheme.input.border.focus};

  --bg-checkbox-selected-enabled: ${colorsLightTheme.checkbox.selected.bg.enabled};
  --bg-checkbox-selected-hover: ${colorsLightTheme.checkbox.selected.bg.hover};
  --bg-checkbox-selected-active: ${colorsLightTheme.checkbox.selected.bg.active};
  --bg-checkbox-unselected-enabled: ${colorsLightTheme.checkbox.unselected.bg.enabled};
  --bg-checkbox-unselected-hover: ${colorsLightTheme.checkbox.unselected.bg.hover};
  --bg-checkbox-unselected-active: ${colorsLightTheme.checkbox.unselected.bg.active};

  --text-checkbox-selected-enabled: ${colorsLightTheme.checkbox.selected.text.enabled};
  --text-checkbox-selected-hover: ${colorsLightTheme.checkbox.selected.text.hover};
  --text-checkbox-selected-active: ${colorsLightTheme.checkbox.selected.text.active};
  --text-checkbox-unselected-enabled: ${colorsLightTheme.checkbox.unselected.text.enabled};
  --text-checkbox-unselected-hover: ${colorsLightTheme.checkbox.unselected.text.hover};
  --text-checkbox-unselected-active: ${colorsLightTheme.checkbox.unselected.text.active};

  --border-checkbox-selected-enabled: ${colorsLightTheme.checkbox.selected.border.enabled};
  --border-checkbox-selected-hover: ${colorsLightTheme.checkbox.selected.border.hover};
  --border-checkbox-selected-active: ${colorsLightTheme.checkbox.selected.border.active};
  --border-checkbox-unselected-enabled: ${colorsLightTheme.checkbox.unselected.border.enabled};
  --border-checkbox-unselected-hover: ${colorsLightTheme.checkbox.unselected.border.hover};
  --border-checkbox-unselected-active: ${colorsLightTheme.checkbox.unselected.border.active};
}
.dark {
  color-scheme: dark;
  --bg-body: ${colorsDarkTheme.body_bg};
  --bg-window: ${colorsDarkTheme.window_bg};
  --border-window: ${colorsDarkTheme.window_border};

  --text-primary: ${colorsDarkTheme.text_primary};
  --text-secondary: ${colorsDarkTheme.text_secondary};
  --text-tertiary: ${colorsDarkTheme.text_tertiary};
  --text-negative: ${colorsDarkTheme.body_bg};

  --bg-button: ${colorsDarkTheme.buttons.default.bg.enabled};
  --bg-button-hover: ${colorsDarkTheme.buttons.default.bg.hover};
  --bg-button-active: ${colorsDarkTheme.buttons.default.bg.active};

  --bg-button-secondary: ${colorsDarkTheme.buttons.secondary.bg.enabled};
  --bg-button-secondary-hover: ${colorsDarkTheme.buttons.secondary.bg.hover};
  --bg-button-secondary-active: ${colorsDarkTheme.buttons.secondary.bg.active};

  --bg-success-hover: ${colorsDarkTheme.buttons.success.bg.hover};
  --bg-success-active: ${colorsDarkTheme.buttons.success.bg.active};
  --bg-info-hover: ${colorsDarkTheme.buttons.info.bg.hover};
  --bg-info-active: ${colorsDarkTheme.buttons.info.bg.active};
  --bg-warning-hover: ${colorsDarkTheme.buttons.warning.bg.hover};
  --bg-warning-active: ${colorsDarkTheme.buttons.warning.bg.active};
  --bg-danger-hover: ${colorsDarkTheme.buttons.danger.bg.hover};
  --bg-danger-active: ${colorsDarkTheme.buttons.danger.bg.active};

  --text-button: ${colorsDarkTheme.buttons.default.text.enabled};
  --text-button-hover: ${colorsDarkTheme.buttons.default.text.hover};
  --text-button-active: ${colorsDarkTheme.buttons.default.text.active};
  --text-button-secondary: ${colorsDarkTheme.buttons.secondary.text.enabled};
  --text-button-secondary-hover: ${colorsDarkTheme.buttons.secondary.text.hover};
  --text-button-secondary-active: ${colorsDarkTheme.buttons.secondary.text.active};
  --text-button-success: ${colorsDarkTheme.buttons.success.text.enabled};
  --text-button-success-hover: ${colorsDarkTheme.buttons.success.text.hover};
  --text-button-success-active: ${colorsDarkTheme.buttons.success.text.active};
  --text-button-info: ${colorsDarkTheme.buttons.info.text.enabled};
  --text-button-info-hover: ${colorsDarkTheme.buttons.info.text.hover};
  --text-button-info-active: ${colorsDarkTheme.buttons.info.text.active};
  --text-button-warning: ${colorsDarkTheme.buttons.warning.text.enabled};
  --text-button-warning-hover: ${colorsDarkTheme.buttons.warning.text.hover};
  --text-button-warning-active: ${colorsDarkTheme.buttons.warning.text.active};
  --text-button-danger: ${colorsDarkTheme.buttons.danger.text.enabled};
  --text-button-danger-hover: ${colorsDarkTheme.buttons.danger.text.hover};
  --text-button-danger-active: ${colorsDarkTheme.buttons.danger.text.active};

  --border-button: ${colorsDarkTheme.buttons.default.border.enabled};
  --border-button-hover: ${colorsDarkTheme.buttons.default.border.hover};
  --border-button-active: ${colorsDarkTheme.buttons.default.border.active};
  --border-button-secondary: ${colorsDarkTheme.buttons.secondary.border.enabled};
  --border-button-secondary-hover: ${colorsDarkTheme.buttons.secondary.border.hover};
  --border-button-secondary-active: ${colorsDarkTheme.buttons.secondary.border.active};
  --border-button-success: ${colorsDarkTheme.buttons.success.border.enabled};
  --border-button-success-hover: ${colorsDarkTheme.buttons.success.border.hover};
  --border-button-success-active: ${colorsDarkTheme.buttons.success.border.active};
  --border-button-info: ${colorsDarkTheme.buttons.info.border.enabled};
  --border-button-info-hover: ${colorsDarkTheme.buttons.info.border.hover};
  --border-button-info-active: ${colorsDarkTheme.buttons.info.border.active};
  --border-button-warning: ${colorsDarkTheme.buttons.warning.border.enabled};
  --border-button-warning-hover: ${colorsDarkTheme.buttons.warning.border.hover};
  --border-button-warning-active: ${colorsDarkTheme.buttons.warning.border.active};
  --border-button-danger: ${colorsDarkTheme.buttons.danger.border.enabled};
  --border-button-danger-hover: ${colorsDarkTheme.buttons.danger.border.hover};
  --border-button-danger-active: ${colorsDarkTheme.buttons.danger.border.active};

  --bg-input: ${colorsDarkTheme.input.bg.enabled};
  --bg-input-focus: ${colorsDarkTheme.input.bg.enabled};
  --bg-input-hover: ${colorsDarkTheme.input.bg.hover};

  --text-input: ${colorsDarkTheme.input.text.enabled};
  --text-input-focus: ${colorsDarkTheme.input.text.focus};
  --text-input-hover: ${colorsDarkTheme.input.text.hover};
  --text-input-prefix: ${colorsDarkTheme.input.text.prefix};
  --text-input-field_label: ${colorsDarkTheme.input.text.field_label};

  --border-input: ${colorsDarkTheme.input.border.default};
  --border-input-focus: ${colorsDarkTheme.input.border.focus};

  --bg-checkbox-selected-enabled: ${colorsDarkTheme.checkbox.selected.bg.enabled};
  --bg-checkbox-selected-hover: ${colorsDarkTheme.checkbox.selected.bg.hover};
  --bg-checkbox-selected-active: ${colorsDarkTheme.checkbox.selected.bg.active};
  --bg-checkbox-unselected-enabled: ${colorsDarkTheme.checkbox.unselected.bg.enabled};
  --bg-checkbox-unselected-hover: ${colorsDarkTheme.checkbox.unselected.bg.hover};
  --bg-checkbox-unselected-active: ${colorsDarkTheme.checkbox.unselected.bg.active};

  --text-checkbox-selected-enabled: ${colorsDarkTheme.checkbox.selected.text.enabled};
  --text-checkbox-selected-hover: ${colorsDarkTheme.checkbox.selected.text.hover};
  --text-checkbox-selected-active: ${colorsDarkTheme.checkbox.selected.text.active};
  --text-checkbox-unselected-enabled: ${colorsDarkTheme.checkbox.unselected.text.enabled};
  --text-checkbox-unselected-hover: ${colorsDarkTheme.checkbox.unselected.text.hover};
  --text-checkbox-unselected-active: ${colorsDarkTheme.checkbox.unselected.text.active};

  --border-checkbox-selected-enabled: ${colorsDarkTheme.checkbox.selected.border.enabled};
  --border-checkbox-selected-hover: ${colorsDarkTheme.checkbox.selected.border.hover};
  --border-checkbox-selected-active: ${colorsDarkTheme.checkbox.selected.border.active};
  --border-checkbox-unselected-enabled: ${colorsDarkTheme.checkbox.unselected.border.enabled};
  --border-checkbox-unselected-hover: ${colorsDarkTheme.checkbox.unselected.border.hover};
  --border-checkbox-unselected-active: ${colorsDarkTheme.checkbox.unselected.border.active};
}
body {
  -webkit-tap-highlight-color: ${colorPalettes.yellow['500']};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  --green: ${colorPalettes.green['500']};
  --red: ${colorPalettes.red['500']};
  --blue: ${colorPalettes.blue['500']};
  --yellow: ${colorPalettes.yellow['500']};
  --purple: ${colorPalettes.purple['500']};
  --magenta: ${colorPalettes.magenta['500']};
  --orange: ${colorPalettes.orange['500']};

  --success: ${colorPalettes.green['500']};
  --danger: ${colorPalettes.red['500']};
  --info: ${colorPalettes.blue['500']};
  --warning: ${colorPalettes.orange['500']};

  --green-50: ${colorPalettes.green['50']};
  --green-100: ${colorPalettes.green['100']};
  --green-200: ${colorPalettes.green['200']};
  --green-300: ${colorPalettes.green['300']};
  --green-400: ${colorPalettes.green['400']};
  --green-500: ${colorPalettes.green['500']};
  --green-600: ${colorPalettes.green['600']};
  --green-700: ${colorPalettes.green['700']};
  --green-800: ${colorPalettes.green['800']};
  --green-900: ${colorPalettes.green['900']};

  --red-50: ${colorPalettes.red['50']};
  --red-100: ${colorPalettes.red['100']};
  --red-200: ${colorPalettes.red['200']};
  --red-300: ${colorPalettes.red['300']};
  --red-400: ${colorPalettes.red['400']};
  --red-500: ${colorPalettes.red['500']};
  --red-600: ${colorPalettes.red['600']};
  --red-700: ${colorPalettes.red['700']};
  --red-800: ${colorPalettes.red['800']};
  --red-900: ${colorPalettes.red['900']};

  --blue-50: ${colorPalettes.blue['50']};
  --blue-100: ${colorPalettes.blue['100']};
  --blue-200: ${colorPalettes.blue['200']};
  --blue-300: ${colorPalettes.blue['300']};
  --blue-400: ${colorPalettes.blue['400']};
  --blue-500: ${colorPalettes.blue['500']};
  --blue-600: ${colorPalettes.blue['600']};
  --blue-700: ${colorPalettes.blue['700']};
  --blue-800: ${colorPalettes.blue['800']};
  --blue-900: ${colorPalettes.blue['900']};

  --yellow-50: ${colorPalettes.yellow['50']};
  --yellow-100: ${colorPalettes.yellow['100']};
  --yellow-200: ${colorPalettes.yellow['200']};
  --yellow-300: ${colorPalettes.yellow['300']};
  --yellow-400: ${colorPalettes.yellow['400']};
  --yellow-500: ${colorPalettes.yellow['500']};
  --yellow-600: ${colorPalettes.yellow['600']};
  --yellow-700: ${colorPalettes.yellow['700']};
  --yellow-800: ${colorPalettes.yellow['800']};
  --yellow-900: ${colorPalettes.yellow['900']};

  --purple-50: ${colorPalettes.purple['50']};
  --purple-100: ${colorPalettes.purple['100']};
  --purple-200: ${colorPalettes.purple['200']};
  --purple-300: ${colorPalettes.purple['300']};
  --purple-400: ${colorPalettes.purple['400']};
  --purple-500: ${colorPalettes.purple['500']};
  --purple-600: ${colorPalettes.purple['600']};
  --purple-700: ${colorPalettes.purple['700']};
  --purple-800: ${colorPalettes.purple['800']};
  --purple-900: ${colorPalettes.purple['900']};

  --magenta-50: ${colorPalettes.magenta['50']};
  --magenta-100: ${colorPalettes.magenta['100']};
  --magenta-200: ${colorPalettes.magenta['200']};
  --magenta-300: ${colorPalettes.magenta['300']};
  --magenta-400: ${colorPalettes.magenta['400']};
  --magenta-500: ${colorPalettes.magenta['500']};
  --magenta-600: ${colorPalettes.magenta['600']};
  --magenta-700: ${colorPalettes.magenta['700']};
  --magenta-800: ${colorPalettes.magenta['800']};
  --magenta-900: ${colorPalettes.magenta['900']};

  --orange-50: ${colorPalettes.orange['50']};
  --orange-100: ${colorPalettes.orange['100']};
  --orange-200: ${colorPalettes.orange['200']};
  --orange-300: ${colorPalettes.orange['300']};
  --orange-400: ${colorPalettes.orange['400']};
  --orange-500: ${colorPalettes.orange['500']};
  --orange-600: ${colorPalettes.orange['600']};
  --orange-700: ${colorPalettes.orange['700']};
  --orange-800: ${colorPalettes.orange['800']};
  --orange-900: ${colorPalettes.orange['900']};

  --grey-light-50: ${colorPalettes.grey_light['50']};
  --grey-light-100: ${colorPalettes.grey_light['100']};
  --grey-light-200: ${colorPalettes.grey_light['200']};
  --grey-light-300: ${colorPalettes.grey_light['300']};
  --grey-light-400: ${colorPalettes.grey_light['400']};
  --grey-light-500: ${colorPalettes.grey_light['500']};
  --grey-light-600: ${colorPalettes.grey_light['600']};
  --grey-light-700: ${colorPalettes.grey_light['700']};
  --grey-light-800: ${colorPalettes.grey_light['800']};
  --grey-light-900: ${colorPalettes.grey_light['900']};

  --grey-dark-50: ${colorPalettes.grey_dark['50']};
  --grey-dark-100: ${colorPalettes.grey_dark['100']};
  --grey-dark-200: ${colorPalettes.grey_dark['200']};
  --grey-dark-300: ${colorPalettes.grey_dark['300']};
  --grey-dark-400: ${colorPalettes.grey_dark['400']};
  --grey-dark-500: ${colorPalettes.grey_dark['500']};
  --grey-dark-600: ${colorPalettes.grey_dark['600']};
  --grey-dark-700: ${colorPalettes.grey_dark['700']};
  --grey-dark-800: ${colorPalettes.grey_dark['800']};
  --grey-dark-900: ${colorPalettes.grey_dark['900']};
}
p a {
  text-decoration: underline;
}
`

fs.writeFileSync('./src/css/colors.css', styleString)
console.log('TPDS ::: Built colors CSS file')
