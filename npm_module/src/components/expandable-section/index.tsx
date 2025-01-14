import React from 'react'
import { PSmall } from '../../elements/typography'
import { MinusIcon } from '../../assets/svgs/icons'
import { PlusIcon } from '../../assets/svgs/icons'
import clsx from 'clsx'

function ExpandableSection({
  title,
  children,
  shouldClose,
  excludeElementId,
  removeBorderTop,
  addBorderBottomIfOpen,
  lightOnly,
}: {
  title: string
  children: React.ReactNode
  shouldClose?: boolean
  excludeElementId?: string
  removeBorderTop?: boolean
  addBorderBottomIfOpen?: boolean
  lightOnly?: boolean
}) {
  const headerRef = React.useRef(null)
  const [isOpen, toggleOpen] = React.useState(false)
  if (children && typeof children === 'string') {
    children = <PSmall style={{ lineHeight: '1.5 !important' }}>{children}</PSmall>
  }

  if (shouldClose && isOpen) {
    toggleOpen(false)
  }

  const rootClassName = lightOnly
    ? clsx(isOpen && addBorderBottomIfOpen ? `border-b border-black/10` : '')
    : clsx(isOpen && addBorderBottomIfOpen ? `border-b border-black/10 dark:border-white/10` : '')

  const headerStyleBase =
    'h-[44px] border-t border-b border-black/10 w-full flex justify-between items-center px-[16px] transition-all cursor-pointer'
  const headerClassName = lightOnly
    ? clsx(headerStyleBase, removeBorderTop && `!border-t-0`)
    : clsx(headerStyleBase, 'dark:border-white/10', removeBorderTop && `!border-t-0`)

  const contentClassName = clsx(`grid px-[15px]`, isOpen ? `grid-rows-[1fr]` : `grid-rows-[0fr]`)

  const innerDivClassName = clsx('tpds-expandable-section-content', `overflow-hidden py-[0]`)

  return (
    <>
      <div className={rootClassName} ref={headerRef}>
        <div
          className={headerClassName}
          onClick={() => handleToggleHeader(isOpen, toggleOpen, headerRef, excludeElementId)}
        >
          <PSmall isMedium>{title}</PSmall>
          {isOpen ? <MinusIcon className='text-primary' /> : <PlusIcon className='text-primary' />}
        </div>
        <div className={contentClassName} style={{ transition: 'grid-template-rows 300ms' }}>
          <div className={innerDivClassName}>{children}</div>
        </div>
      </div>
    </>
  )
}

export default ExpandableSection

const elementIsVisibleInViewport = (el: HTMLElement, excludeElementId: string) => {
  const rect = el.getBoundingClientRect()
  let discountHeight = 0
  if (excludeElementId) {
    const elementHeightDiscount = document.getElementById(excludeElementId)
    if (!elementHeightDiscount || !elementHeightDiscount.clientHeight) {
      console.error(`excludeElementId ${excludeElementId} not found`)
    } else {
      discountHeight = elementHeightDiscount.clientHeight
    }
  }
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= window.innerHeight - discountHeight &&
    rect.right <= window.innerWidth
  )
}

const handleToggleHeader = (
  isOpen: boolean,
  toggleOpen: (isOpen: boolean) => void,
  headerRef: React.RefObject<HTMLElement>,
  excludeElementId?: string,
) => {
  const applyScrollIntoView = !isOpen
  toggleOpen(!isOpen)
  if (applyScrollIntoView && headerRef.current) {
    setTimeout(() => {
      // @ts-ignore
      if (!elementIsVisibleInViewport(headerRef.current, excludeElementId)) {
        // @ts-ignore
        headerRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        })
      }
    }, 300)
  }
}
