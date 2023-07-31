import React from 'react'
import tokens from '../../../tokens/index.json'
const colorTokens = tokens.colors
const colorPalettes = colorTokens.color_palettes

function WarningIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" fill="none" viewBox="0 0 18 15">
      <path
        fill={colorPalettes.orange['500']}
        d="M.75 14.75h16.5L9 .5.75 14.75zm9-2.25h-1.5V11h1.5v1.5zm0-3h-1.5v-3h1.5v3z"
      ></path>
    </svg>
  )
}

export default WarningIcon
