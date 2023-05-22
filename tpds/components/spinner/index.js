import React from 'react'
import tw, { styled, css } from 'twin.macro'

const SVG = styled.svg(() => [
  css`
    @keyframes rotate {
      100% {
        transform: rotate(360deg);
      }
    }
    animation-name: rotate;
    animation-timing-function: linear;
    display: inline-block;
    animation-iteration-count: infinite;
  `,
])

function Spinner({ color, radius, style, duration, strokeWidth, center, ...props }) {
  const styles = style || {}
  if (center) {
    styles.display = 'block'
    styles.textAlign = 'center'
  }
  const Path = getPathElement(color)
  return (
    <span style={styles}>
      <SVG
        {...props}
        viewBox="0 0 42 42"
        style={{
          animationDuration: `${duration ? duration : 900}ms`,
          width: `${radius ? radius : 40}px`,
          height: `${radius ? radius : 40}px`,
        }}
      >
        <g fill="none" transform="translate(3 3)" strokeWidth="3">
          <circle
            tw="stroke-current text-grey-light-scale-400 dark:text-grey-dark-scale-300"
            cx="18"
            cy="18"
            r="18"
          />
          {Path}
        </g>
      </SVG>
    </span>
  )
}

export default Spinner

export const SpinnerBlock = styled.div({
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
  height: '20%',
})

function DefaultPath() {
  return (
    <path
      tw="stroke-current text-black dark:text-white"
      d="M36 18c0-9.94-8.06-18-18-18"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  )
}

function BluePath() {
  return (
    <path
      tw="stroke-current text-blue"
      d="M36 18c0-9.94-8.06-18-18-18"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  )
}

function GreenPath() {
  return (
    <path
      tw="stroke-current text-green"
      d="M36 18c0-9.94-8.06-18-18-18"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  )
}

function RedPath() {
  return (
    <path
      tw="stroke-current text-red"
      d="M36 18c0-9.94-8.06-18-18-18"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  )
}

function OrangePath() {
  return (
    <path
      tw="stroke-current text-orange"
      d="M36 18c0-9.94-8.06-18-18-18"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  )
}

const getPathElement = color => {
  switch (color) {
    case 'green':
      return <GreenPath />
    case 'blue':
      return <BluePath />
    case 'orange':
      return <OrangePath />
    case 'red':
      return <RedPath />
    default:
      return <DefaultPath />
  }
}
