import React, { useState, useEffect } from 'react'
import { Button } from '../../elements/buttons'
import { H6, P } from '../../elements/typography'
import { Separator } from '../../elements/layout'

// @ts-ignore
const Modal = ({
  showOpen = false, // modal state
  clickElement = null, // JSX - the element to click to open the Modal
  title = 'Modal title', // String
  maxWidth = '500px', // String
  description = '', // String
  content, // JSX
  options = [], // Array
  overlayProps = null, // any React props
  titleProps = null, // any React props
  descriptionProps = null, // any React props
  dialogOnClose,
  className,
}: {
  title?: string
  showOpen?: boolean
  clickElement?: React.ReactNode
  maxWidth?: string
  description?: string
  content?: React.ReactNode
  options?: any[]
  overlayProps?: any
  titleProps?: any
  descriptionProps?: any
  dialogOnClose?: () => void
  className?: string
}) => {
  let [isOpen, setIsOpen] = useState<boolean>(showOpen || false)

  function closeModal() {
    setIsOpen(false)
    dialogOnClose?.()
  }

  useEffect(() => {
    setIsOpen(showOpen)
  }, [showOpen])

  return (
    <div className={className}>
      {(showOpen || isOpen) && (
        <div
          className='fixed inset-0 z-50 overflow-y-auto'
          // onClose={closeModal}
          // open={showOpen || isOpen}
        >
          <div className='w-full min-h-screen text-center flex items-center justify-center'>
            <div className='tpds-modal-background-overlay fixed w-full h-full bg-black opacity-50' {...overlayProps} />
            <div
              style={{ maxWidth: maxWidth }}
              className='mx-2 inline-flex flex-col w-full rounded-lg my-8 overflow-hidden text-left align-middle transition-all transform bg-window dark:border-2 border-window shadow-xl'
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
        <div onClick={() => setIsOpen(!isOpen)} className='inline-flex'>
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
}: {
  title?: string
  description?: string
  content?: React.ReactNode
  options?: any[]
  titleProps?: any
  descriptionProps?: any
  closeModal?: () => void
}) {
  if (!options || !options.length || !options[0]) {
    options = [
      {
        callBack: () => closeModal?.(),
        label: 'Close',
        variant: 'default',
      },
    ]
  }
  const handleOption = (callBack: () => void) => {
    if (callBack) {
      callBack()
    }
    closeModal?.()
  }

  return (
    <>
      <div className='py-sm px-sm'>
        <H6 isBold {...titleProps}>
          {title}
        </H6>
        {description && (
          <P {...descriptionProps} className='text-secondary leading-tight mt-1'>
            {description}
          </P>
        )}
        {content && (
          <>
            <Separator className='my-xs' />
            <div className='text-sm text-grey-light-scale-500'>{content}</div>
          </>
        )}
      </div>

      <div className='px-sm py-6 bg-grey-light-scale-200 dark:bg-grey-dark-scale-700 border-t border-grey-light-scale-400 dark:border-grey-dark-scale-300'>
        <div className='flex gap-4 justify-end'>
          {options.map(option => (
            <Button
              className='min-w-[80px]'
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
