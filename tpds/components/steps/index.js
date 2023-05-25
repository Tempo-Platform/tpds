/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw, { styled, css } from 'twin.macro'
import { PSmall } from '../../elements/typography'
import CheckIcon from '../../assets/svgs/icons/Check'

const StepsRoot = styled.div(() => [
  tw`w-full flex justify-between items-center gap-x-[4px]`,
  css`
    .default {
      ${tw`bg-window border-grey-light-scale-500 dark:(bg-window border-grey-light-scale-800)`},
      p {
        ${tw`text-primary dark:text-primary`}
      }
    }
    .completed {
      ${tw`bg-blue border-blue dark:(bg-blue border-blue)`},
      p {
        ${tw`text-white dark:text-black`}
      }
      svg * {
        ${tw`fill-white`}
      }
    }
    .active {
      ${tw`bg-black border-black dark:(bg-white border-white)`},
      p {
        ${tw`text-white dark:text-black`}
      }
    }
  `,
])

const StepCircle = styled.div(() => [
  tw`rounded-[50%] w-[24px]! h-[24px]! flex justify-center items-center border-2`,
])

const Line = styled.div(() => [
  tw`w-[10%] h-[2px] bg-grey-light-scale-300 dark:bg-grey-dark-scale-300`,
])

const PLabel = styled(PSmall)(() => [
  tw`text-[13px]! relative top-[-1px]`,
  tw`tracking-tight leading-none relative top-[-1px] whitespace-nowrap!`,
])

const StepRoot = styled.div(() => [tw`flex gap-x-2 items-center`])

const insertLines = array => {
  const newArray = []
  array.forEach((item, index) => {
    newArray.push(item)
    if (index % 1 === 0) {
      newArray.push(<Line className="tpds-steps-line" key={`{tpds-steps-line-${index}}`} />)
    }
  })
  return newArray
}

function calculateStepState(index, currentStepIndex) {
  if (index === currentStepIndex) {
    return 'active'
  }
  if (index < currentStepIndex) {
    return 'completed'
  }
  return 'default'
}

function StepsComponent({ steps, currentStepIndex = 0, ...props }) {
  const items = steps.map((step, index) => (
    <StepRoot className="tpds-step" key={step.title}>
      <StepCircle className={calculateStepState(index, currentStepIndex).toString()}>
        {currentStepIndex > index ? (
          <CheckIcon />
        ) : (
          <PSmall isMedium tw="leading-none">
            {index + 1}
          </PSmall>
        )}
      </StepCircle>
      <PLabel isMedium className="tpds-steps-label">
        {step.title}
      </PLabel>
    </StepRoot>
  ))
  const itemsWithLines = insertLines(items)
  itemsWithLines.pop()
  return <StepsRoot {...props}>{itemsWithLines}</StepsRoot>
}

export default StepsComponent
