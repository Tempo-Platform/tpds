//import React from 'react'
import clsx from 'clsx'
import { Section, Container } from '../../elements/layout'

const HeroBlock = ({ children, containerVariant = 'large', ...props }) => {
  const finalClass = clsx(
    'h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px] 2xl:h-[500px]',
    props.className,
  )
  return (
    <Section {...props} className={finalClass}>
      <Container
        variant={containerVariant}
        className="Container flex h-full flex-col justify-center"
      >
        {children}
      </Container>
    </Section>
  )
}

export default HeroBlock
