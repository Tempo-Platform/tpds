/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw, { styled, css } from 'twin.macro'
import tokens from '../../tokens/index.json'
const colorPalettes = tokens.colors.color_palettes

const CustomSVG = styled.svg(() => [
  css`
    animation-name: rotate;
    animation-timing-function: linear;
    display: inline-block;
    animation-iteration-count: infinite;
    .spinner-stroke-circle {
      ${tw`stroke-grey-light-scale-400 dark:stroke-grey-dark-scale-300`};
    }
    @keyframes rotate {
      100% {
        transform: rotate(360deg);
      }
    }
  `,
])

const processColor = color => {
  // make it easy to use TPDS color defaults
  switch (color) {
    case 'red':
      return colorPalettes.red[500]
    case 'blue':
      return colorPalettes.blue[500]
    case 'green':
      return colorPalettes.green[500]
    case 'orange':
      return colorPalettes.orange[500]
    case 'purple':
      return colorPalettes.purple[500]
    case 'yellow':
      return colorPalettes.yellow[500]
    case 'magenta':
      return colorPalettes.yellow[500]
    default:
      return color
  }
}

function Spinner({ color, radius, duration, strokeWidth, ...props }) {
  color = processColor(color)
  return (
    <CustomSVG
      {...props}
      viewBox="0 0 42 42"
      style={{
        animationDuration: `${duration ? duration : 900}ms`,
        width: `${radius ? radius : 40}px`,
        height: `${radius ? radius : 40}px`,
      }}
    >
      <g fill="none" transform="translate(3 3)" strokeWidth="3">
        <circle className="spinner-stroke-circle" cx="18" cy="18" r="18" />
        <path
          style={{ color: color }}
          stroke="currentColor"
          d="M36 18c0-9.94-8.06-18-18-18"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </CustomSVG>
  )
}

export default Spinner

export const SpinnerBlock = styled.div({
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
  height: '20%',
})
