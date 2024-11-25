import React from 'react'
import clsx from 'clsx'
import { Section, Container } from '../../elements/layout'

const HeroBlock = ({
  children,
  containerVariant = 'large',
  className
}: {
  children: React.ReactNode
  containerVariant?: string
  className?: string
}) => {
  const finalClass = clsx('h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px] 2xl:h-[500px]', className)
  return (
    <Section className={finalClass}>
      <Container variant={containerVariant} className='Container flex h-full flex-col justify-center'>
        {children}
      </Container>
    </Section>
  )
}

export default HeroBlock
