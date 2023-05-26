/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React, { useState } from 'react'
import tw, { styled, css, theme } from 'twin.macro'
import { LabelNano } from '../../elements/typography'

function Tag({ label = '', variant = 'default', ...props }) {
  return (
    <TagElement variant={variant} {...props}>
      <LabelNano tw="font-medium">{label}</LabelNano>
    </TagElement>
  )
}

export default Tag

const defaultStyle = [
  tw`text-grey-light-scale-600 border-grey-light-scale-600`,
  css`p { ${tw`text-current`};`,
]
const infoStyle = [tw`border-blue`, css`p { ${tw`text-blue`};`]
const successStyle = [tw`border-green`, css`p { ${tw`text-green`};`]
const dangerStyle = [tw`border-red`, css`p { ${tw`text-red`};`]
const warningStyle = [tw`border-orange`, css`p { ${tw`text-orange`};`]

const defaultStyleWithHover = [
  tw`text-grey-light-scale-600 border-grey-light-scale-600`,
  css`p { ${tw`text-current`};`,
]
const infoStyleWithHover = [
  tw`cursor-pointer border-blue text-blue`,
  tw`hover:(bg-blue text-white dark:text-black)`,
  css`p { ${tw`text-current`};`,
]
const successStyleWithHover = [
  tw`cursor-pointer border-green text-green`,
  tw`hover:(bg-green text-white dark:text-black)`,
  css`p { ${tw`text-current`};`,
]
const dangerStyleWithHover = [
  tw`cursor-pointer border-red text-red`,
  tw`hover:(bg-red text-white dark:text-black)`,
  css`p { ${tw`text-current`};`,
]
const warningStyleWithHover = [
  tw`cursor-pointer border-orange text-orange`,
  tw`hover:(bg-orange text-white dark:text-black)`,
  css`p { ${tw`text-current`};`,
]

const tagVariants = {
  default: defaultStyle,
  info: infoStyle,
  success: successStyle,
  danger: dangerStyle,
  warning: warningStyle,
}

const tagVariantsWithHover = {
  default: defaultStyleWithHover,
  info: infoStyleWithHover,
  success: successStyleWithHover,
  danger: dangerStyleWithHover,
  warning: warningStyleWithHover,
}
const TagElement = styled.div(({ isUppercase, addHoverEffect }) => [
  tw`inline-flex rounded p-1 select-none flex justify-center border`,
  ({ variant = 'default' }) =>
    addHoverEffect ? tagVariantsWithHover[variant] : tagVariants[variant],
  isUppercase && tw`uppercase`,
])
