/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw, { styled, css } from 'twin.macro'
import { PSmall } from '../../elements/typography'
import MinusIcon from '../../assets/svgs/icons/MinusIcon'
import PlusIcon from '../../assets/svgs/icons/PlusIcon'

const RootDiv = styled.div(props => [
  tw`bg-window border border-window`,
  props.removeBorderTop && tw`border-t-0`,
  props.removeBorderBottom && tw`border-b-0`,
])

const Header = styled.div(props => [
  tw`h-[44px] w-full flex justify-between items-center px-[16px] transition-all cursor-pointer`,
  props.isOpen ? tw`border-b border-window` : tw`border-b border-transparent`,
])

const Content = styled.div(props => [
  tw`grid px-[15px]`,
  props.isOpen ? tw`grid-rows-[1fr]` : tw`grid-rows-[0fr]`,
  css`
    transition: grid-template-rows 300ms;
  `,
])

const InnerDiv = styled.div(props => [
  tw`overflow-hidden py-[0]`,
  css`
    > * {
      ${tw`py-4`}
    }
  `,
])

const elementIsVisibleInViewport = (el, excludeElementId) => {
  const rect = el.getBoundingClientRect()
  let discountHeight = 0
  if (excludeElementId) {
    const elementHeightDiscount = document.getElementById(excludeElementId)
    if (!elementHeightDiscount && elementHeightDiscount.clientHeight) {
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

const handleToggleHeader = (isOpen, toggleOpen, headerRef, excludeElementId) => {
  const applyScrollIntoView = !isOpen
  toggleOpen(!isOpen)
  if (applyScrollIntoView) {
    setTimeout(() => {
      if (!elementIsVisibleInViewport(headerRef.current, excludeElementId)) {
        headerRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        })
      }
    }, 300)
  }
}

function ExpandableSection({
  title,
  children,
  shouldClose,
  excludeElementId,
  removeBorderTop,
  removeBorderBottom,
}) {
  const headerRef = React.useRef(null)
  const [isOpen, toggleOpen] = React.useState(false)
  if (children && typeof children === 'string') {
    children = <PSmall style={{ lineHeight: '1.5 !important' }}>{children}</PSmall>
  }

  if (shouldClose && isOpen) {
    toggleOpen(false)
  }

  return (
    <RootDiv
      removeBorderBottom={removeBorderBottom}
      removeBorderTop={removeBorderTop}
      ref={headerRef}
    >
      <Header
        isOpen={isOpen}
        onClick={() => handleToggleHeader(isOpen, toggleOpen, headerRef, excludeElementId)}
      >
        <PSmall isMedium>{title}</PSmall>
        {isOpen ? <MinusIcon tw="fill-current" /> : <PlusIcon tw="fill-current" />}
      </Header>
      <Content isOpen={isOpen}>
        <InnerDiv>{children}</InnerDiv>
      </Content>
    </RootDiv>
  )
}

export default ExpandableSection
