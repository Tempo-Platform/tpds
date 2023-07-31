import React from 'react'
import { PSmall, PTiny } from '../../elements/typography'
import CheckIcon from '../../assets/svgs/icons/Check'
import clsx from 'clsx'

const insertLines = array => {
  const newArray = []
  array.forEach((item, index) => {
    newArray.push(item)
    if (index % 1 === 0) {
      newArray.push(
        <div
          className="w-[10%] h-[2px] bg-grey-light-scale-300 dark:bg-grey-dark-scale-300"
          key={`{tpds-steps-line-${index}}`}
        />,
      )
    }
  })
  return newArray
}

function calculateStepCircleState(index, currentStepIndex) {
  if (index === currentStepIndex) {
    return 'bg-black border-black dark:bg-white dark:border-white'
  }
  if (index < currentStepIndex) {
    return 'bg-blue border-blue dark:bg-blue dark:border-blue'
  }
  return 'bg-window border-grey-light-scale-500 dark:bg-window dark:border-grey-light-scale-800'
}

function calculateLabelState(index, currentStepIndex) {
  if (index === currentStepIndex) {
    return 'leading-none text-white dark:text-black'
  }
  if (index < currentStepIndex) {
    return 'leading-none text-white dark:text-black'
  }
  return 'leading-none text-primary dark:text-primary'
}

function StepsComponent({ steps, currentStepIndex = 0, ...props }) {
  const classPLabel = clsx(
    `!text-[13px] relative top-[-1px]`,
    `tracking-tight leading-none relative top-[-1px] whitespace-nowrap!`,
  )
  const items = steps.map((step, index) => (
    <div className="flex gap-x-2 items-center" key={step.title}>
      <div
        className={clsx(
          calculateStepCircleState(index, currentStepIndex),
          'rounded-[50%] !w-[24px] !h-[24px] flex justify-center items-center border-2',
        )}
      >
        {currentStepIndex > index ? (
          <CheckIcon className="text-white" />
        ) : (
          <PTiny isMedium className={calculateLabelState(index, currentStepIndex)}>
            {index + 1}
          </PTiny>
        )}
      </div>
      <PSmall isMedium className={clsx(classPLabel)}>
        {step.title}
      </PSmall>
    </div>
  ))
  const itemsWithLines = insertLines(items)
  itemsWithLines.pop()
  return (
    <div className="w-full flex justify-between items-center gap-x-[4px]" {...props}>
      {itemsWithLines}
    </div>
  )
}

export default StepsComponent
