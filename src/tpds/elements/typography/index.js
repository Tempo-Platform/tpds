import clsx from 'clsx'
const baseStyles = 'text-primary m-0 font-normal'

const calculateFinalClass = (defaultClass, props) => {
  const finalClass = clsx(
    baseStyles,
    defaultClass,
    props.className && props.className,
    props.isSmall && '!text-sm',
    props.isUnderline && '!underline',
    props.isUppercase && '!uppercase',
    props.isItalic && '!italic',
    props.isLight && '!font-light',
    props.isMedium && '!font-medium',
    props.isBold && '!font-bold',
    props.isExtraBold && '!font-extrabold',
    props.isHeavy && '!font-black',
    props.isPulsing && '!animate-pulse',
    props.isCentered && '!text-center',
    props.noSelect && '!select-none',
    props.isWhite && '!text-white',
    props.isGreen && '!text-green',
    props.isRed && '!text-red',
    props.isBlue && '!text-blue',
    props.isOrange && '!text-orange',
    props.isYellow && '!text-yellow',
    props.leadingNone && '!leading-none',
    props.isLabel && '!select-none',
    props.isLabel && '!leading-none',
    props.isLabel && '!font-label',
  )
  return finalClass
}

export const PNano = props => {
  const finalClass = calculateFinalClass('text-[11px]', props)
  return (
    <p className={finalClass} style={props.style}>
      {props.children}
    </p>
  )
}

export const PTiny = props => {
  const finalClass = calculateFinalClass('text-xs xl:text-sm', props)
  return (
    <p className={finalClass} style={props.style}>
      {props.children}
    </p>
  )
}

export const PSmall = props => {
  const finalClass = calculateFinalClass('text-sm xl:text-base', props)
  return (
    <p className={finalClass} style={props.style}>
      {props.children}
    </p>
  )
}

export const P = props => {
  const finalClass = calculateFinalClass('text-base xl:text-lg', props)
  return (
    <p className={finalClass} style={props.style}>
      {props.children}
    </p>
  )
}

export const PLarge = props => {
  const finalClass = calculateFinalClass('text-lg xl:text-xl', props)
  return (
    <p className={finalClass} style={props.style}>
      {props.children}
    </p>
  )
}

export const H6 = props => {
  const finalClass = calculateFinalClass(
    'text-base md:text-lg lg:text-xl xl:text-2xl tracking-normal leading-tight',
    props,
  )
  return (
    <p className={finalClass} style={props.style}>
      {props.children}
    </p>
  )
}

export const H5 = props => {
  const finalClass = calculateFinalClass(
    'text-lg md:text-xl lg:text-2xl xl:text-3xl tracking-normal leading-tight',
    props,
  )
  return (
    <p className={finalClass} style={props.style}>
      {props.children}
    </p>
  )
}

export const H4 = props => {
  const finalClass = calculateFinalClass(
    'text-xl md:text-2xl lg:text-3xl xl:text-4xl tracking-normal leading-tight',
    props,
  )
  return (
    <p className={finalClass} style={props.style}>
      {props.children}
    </p>
  )
}

export const H3 = props => {
  const finalClass = calculateFinalClass(
    'text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-tight leading-tight',
    props,
  )
  return (
    <p className={finalClass} style={props.style}>
      {props.children}
    </p>
  )
}

export const H2 = props => {
  const finalClass = calculateFinalClass(
    'text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-tight leading-tight',
    props,
  )
  return (
    <p className={finalClass} style={props.style}>
      {props.children}
    </p>
  )
}

export const H1 = props => {
  const finalClass = calculateFinalClass(
    'text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tight leading-tight',
    props,
  )
  return (
    <p className={finalClass} style={props.style}>
      {props.children}
    </p>
  )
}

// // helpers

export const AccentColor = props => {
  const finalClass = calculateFinalClass('!text-blue', props)
  return (
    <span className={finalClass} style={props.style}>
      {props.children}
    </span>
  )
}

export const Bold = props => {
  const finalClass = calculateFinalClass('!font-bold', props)
  return (
    <span className={finalClass} style={props.style}>
      {props.children}
    </span>
  )
}

export const Medium = props => {
  const finalClass = calculateFinalClass('!font-medium', props)
  return (
    <span className={finalClass} style={props.style}>
      {props.children}
    </span>
  )
}

export const Underline = props => {
  const finalClass = calculateFinalClass('!underline', props)
  return (
    <span className={finalClass} style={props.style}>
      {props.children}
    </span>
  )
}

export const Red = props => {
  const finalClass = calculateFinalClass('!text-red', props)
  return (
    <span className={finalClass} style={props.style}>
      {props.children}
    </span>
  )
}

export const Blue = props => {
  const finalClass = calculateFinalClass('!text-blue', props)
  return (
    <span className={finalClass} style={props.style}>
      {props.children}
    </span>
  )
}

export const Green = props => {
  const finalClass = calculateFinalClass('!text-green', props)
  return (
    <span className={finalClass} style={props.style}>
      {props.children}
    </span>
  )
}

export const Orange = props => {
  const finalClass = calculateFinalClass('!text-orange', props)
  return (
    <span className={finalClass} style={props.style}>
      {props.children}
    </span>
  )
}

export const Code = props => {
  return <span className="font-mono font-bold">{props.children}</span>
}

// // form labels

export const FormLabelNano = props => {
  return (
    <PNano className="font-label text-tertiary font-medium leading-none">{props.children}</PNano>
  )
}

export const FormLabelTiny = props => {
  return (
    <PTiny className="font-label text-tertiary font-medium leading-none">{props.children}</PTiny>
  )
}

export const FormLabelSmall = props => {
  return (
    <PSmall className="font-label text-tertiary font-medium leading-none">{props.children}</PSmall>
  )
}

export const FormLabel = props => {
  return <P className="font-label text-tertiary font-medium leading-none">{props.children}</P>
}
