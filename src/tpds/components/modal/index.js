import React, { useState, useEffect } from 'react'
import { Button } from '../../elements/buttons'
import { H6, P } from '../../elements/typography'
import { Separator } from '../../elements/layout'

function isEmpty(obj) {
  for (const prop in obj) {
    if (Object.hasOwn(obj, prop)) {
      return false
    }
  }

  return true
}

// @ts-ignore
const Modal = ({
  showOpen = false, // modal state
  clickElement = null, // JSX - the element to click to open the Modal
  title = 'Modal title', // String
  maxWidth = '500px', // String
  description = '', // String
  content = <></>, // JSX
  options = [], // Array
  overlayProps = null, // any React props
  titleProps = null, // any React props
  descriptionProps = null, // any React props
  dialogOnClose,
}) => {
  let [isOpen, setIsOpen] = useState(showOpen)

  function closeModal() {
    setIsOpen(false)
    dialogOnClose?.()
  }

  useEffect(() => {
    setIsOpen(showOpen)
  }, [showOpen])

  return (
    <div>
      {(showOpen || isOpen) && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto"
          onClose={closeModal}
          open={showOpen || isOpen}
        >
          <div className="w-full min-h-screen text-center flex items-center justify-center">
            <div
              className="tpds-modal-background-overlay fixed w-full h-full bg-black opacity-50"
              {...overlayProps}
            />
            <div
              style={{ maxWidth: maxWidth }}
              className="mx-2 inline-flex flex-col w-full rounded-lg my-8 overflow-hidden text-left align-middle transition-all transform bg-window border-window shadow-xl"
            >
              <Content
                title={title}
                description={description}
                content={content}
                options={options}
                titleProps={titleProps}
                descriptionProps={descriptionProps}
                closeModal={() => {
                  setIsOpen(false)
                  dialogOnClose?.()
                }}
              />
            </div>
          </div>
        </div>
      )}
      {clickElement && (
        /* eslint-disable-next-line */
        <div onClick={() => setIsOpen(!isOpen)} className="inline-flex">
          {clickElement}
        </div>
      )}
    </div>
  )
}

function Content({
  title,
  description,
  content,
  options,
  titleProps,
  descriptionProps,
  closeModal,
}) {
  if (!options || !options.length || !options[0]) {
    options = [
      {
        callBack: () => closeModal(),
        label: 'Close',
        variant: 'secondary',
      },
    ]
  }
  const handleOption = callBack => {
    if (callBack) {
      callBack()
    }
    closeModal()
  }

  return (
    <>
      <div className="py-sm px-sm">
        <H6 isBold {...titleProps}>
          {title}
        </H6>
        {description && (
          <P {...descriptionProps} className="text-tertiary leading-tight mt-1">
            {description}
          </P>
        )}
        {!isEmpty(content.props) && <Separator className="my-xs" />}
        {!isEmpty(content.props) && (
          <div className="text-sm text-grey-light-scale-500">{content}</div>
        )}
      </div>

      <div className="px-sm py-6 bg-grey-light-scale-200 dark:bg-grey-dark-scale-500 border-t border-grey-light-scale-400 dark:border-grey-dark-scale-300">
        <div className="flex gap-4 justify-end">
          {options.map(option => (
            <Button
              className="min-w-[80px]"
              key={option.label}
              onClick={() => handleOption(option.callBack)}
              variant={option.variant || 'default'}
            >
              {option.label || 'Close'}
            </Button>
          ))}
        </div>
      </div>
    </>
  )
}

export default Modal
