import tw, { styled, css } from 'twin.macro'

export const Button = styled.button(
  ({ label, isSmall, isTiny, isLarge, isDisabled, isUppercase, iconColor }) => [
    tw`flex transition duration-100`,
    tw`font-medium! text-[14px] whitespace-nowrap`,
    tw`px-3 gap-x-2 pt-[5px] pb-[5px] border rounded-sm focus:outline-none`,
    css`
      font-family: 'Inter';
      align-items: center;
      justify-content: center;
      user-select: none;
      cursor: pointer;
      .icon-before {
        position: relative;
      }
      .icon-after {
        position: relative;
      }
      .icon-before * {
        fill: ${iconColor ? iconColor : 'auto'};
      }
      .icon-after * {
        fill: ${iconColor ? iconColor : 'auto'};
      }
    `,
    isUppercase && [
      css`
        text-transform: uppercase;
      `,
    ],

    ({ variant = 'default' }) => buttonVariants[variant],

    isSmall && [tw`px-2 pt-[2px] pb-[1.5px] text-[13px]`],
    isTiny && [tw`px-1 pt-0 pb-0 text-[11px]`],
    isLarge && [tw`px-4 py-1.5 text-[16px]`],

    isDisabled && [tw`pointer-events-none opacity-30`],
  ],
)

const defaultStyle = [
  tw`text-grey-dark-scale-200 dark:text-grey-light-scale-300`,
  tw`bg-grey-light-scale-400 border-grey-light-scale-400 dark:(bg-grey-dark-scale-500 border-grey-dark-scale-500)`,
  tw`hover:(bg-grey-light-scale-500 border-grey-light-scale-500 dark:(bg-grey-dark-scale-400 border-grey-dark-scale-400))`,
  tw`active:(bg-grey-light-scale-300 border-grey-light-scale-300 dark:(bg-grey-dark-scale-600 border-grey-dark-scale-600))`,
]

const secondaryStyle = [
  tw`text-grey-dark-scale-200 dark:text-grey-light-scale-300`,
  tw`bg-white border-grey-light-scale-400 dark:(bg-grey-dark-scale-500 border-grey-dark-scale-200)`,
  tw`hover:(bg-white border-grey-light-scale-500 dark:(bg-grey-dark-scale-500 border-grey-dark-scale-100))`,
  tw`active:(bg-white border-grey-light-scale-700 dark:(bg-grey-dark-scale-500 border-grey-light-scale-600))`,
]

const successStyle = [
  tw`text-white dark:text-black`,
  tw`bg-green border-green dark:(bg-green-scale-400 border-green-scale-400)`,
  tw`hover:bg-green-scale-400 hover:border-green-scale-400`,
  tw`active:bg-green-scale-600 active:border-green-scale-600`,
]

const infoStyle = [
  tw`text-white dark:text-black`,
  tw`bg-blue border-blue`,
  tw`hover:bg-blue-scale-400 hover:border-blue-scale-400`,
  tw`active:bg-blue-scale-600 active:border-blue-scale-600`,
]

const warningStyle = [
  tw`text-white dark:text-black`,
  tw`bg-orange border-orange`,
  tw`hover:bg-orange-scale-400 hover:border-orange-scale-400`,
  tw`active:bg-orange-scale-600 active:border-orange-scale-600`,
]

const dangerStyle = [
  tw`text-white dark:text-black`,
  tw`bg-red border-red`,
  tw`hover:bg-red-scale-400 hover:border-red-scale-400`,
  tw`active:bg-red-scale-600 active:border-red-scale-600`,
]

const buttonVariants = {
  default: defaultStyle,
  secondary: secondaryStyle,
  success: successStyle,
  info: infoStyle,
  warning: warningStyle,
  danger: dangerStyle,
}
