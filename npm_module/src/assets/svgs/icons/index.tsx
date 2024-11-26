import React from 'react'
import clsx from 'clsx'

type IconProps = {
  className?: string
  style?: React.CSSProperties
  onClick?: () => void
}

export function Calendar({ className, style, onClick, ...props }: IconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='16'
      height='16'
      fill='none'
      viewBox='0 0 16 16'
      className={clsx('relative top-[-1px]', className)}
      style={style}
      onClick={onClick}
      {...props}
    >
      <path
        fill='currentColor'
        d='M11.556 0a.889.889 0 01.882.785l.006.104v.889h1.778a1.778 1.778 0 011.774 1.644l.004.134v10.666a1.778 1.778 0 01-1.644 1.774l-.134.004H1.778a1.778 1.778 0 01-1.774-1.644L0 14.222V3.556a1.778 1.778 0 011.644-1.774l.134-.004h1.778v-.89A.889.889 0 015.327.786l.006.104v.889h5.334v-.89A.889.889 0 0111.556 0zm2.666 8H1.778v6.222h12.444V8zm0-4.444H1.778v2.666h12.444V3.556z'
      ></path>
    </svg>
  )
}

export function CheckIcon({ className, style, onClick, ...props }: IconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='11'
      height='9'
      viewBox='0 0 11 9'
      fill='none'
      className={clsx('relative top-[-1px]', className)}
      style={style}
      onClick={onClick}
      {...props}
    >
      <path
        fill='currentColor'
        d='M9.563.088c.117-.117.304-.117.398 0l.68.656c.093.117.093.305 0 .399l-7.032 7.03a.27.27 0 01-.398 0L.07 5.058c-.094-.118-.094-.305 0-.399l.679-.68c.094-.093.281-.093.398 0l2.25 2.274L9.563.088z'
      ></path>
    </svg>
  )
}

export function Home({ className, style, onClick, ...props }: IconProps) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='14'
      height='13'
      viewBox='0 0 14 13'
      className={clsx('home-icon', className)}
      fill='currentColor'
      style={style}
      onClick={onClick}
    >
      <path d='M13.492 5.938l-1.265-1.079V1.625a.385.385 0 00-.375-.375h-1.477a.385.385 0 00-.375.375v1.266L7.492.687A.806.806 0 007 .5a.781.781 0 00-.516.188l-6 5.25A.752.752 0 001 7.25h.75V11c0 .844.656 1.5 1.5 1.5h7.477c.843 0 1.5-.656 1.5-1.5V7.25H13c.398 0 .75-.328.75-.75 0-.21-.094-.398-.258-.563zM8.5 7.508A.5.5 0 017.984 8H5.992a.48.48 0 01-.492-.492V5.516A.5.5 0 015.992 5h1.992a.52.52 0 01.516.516v1.992z'></path>
    </svg>
  )
}

export function InfoCircle({ className, style, onClick, ...props }: IconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='12'
      height='13'
      fill='currentColor'
      className={clsx('relative top-[-1px]', className)}
      style={style}
      onClick={onClick}
      {...props}
    >
      <path d='M6 .875A5.626 5.626 0 00.375 6.5 5.611 5.611 0 006 12.125 5.626 5.626 0 0011.625 6.5C11.625 3.406 9.094.875 6 .875zM6 11a4.501 4.501 0 01-4.5-4.5C1.5 4.04 3.516 2 6 2c2.46 0 4.5 2.04 4.5 4.5C10.5 8.984 8.46 11 6 11zm.938-2.625h-.375V6.312A.57.57 0 006 5.75h-.75a.555.555 0 00-.563.563c0 .328.235.562.563.562h.188v1.5h-.375a.555.555 0 00-.563.563c0 .328.234.562.563.562h1.875a.555.555 0 00.562-.563.57.57 0 00-.563-.562zM6 5c.398 0 .75-.328.75-.75A.771.771 0 006 3.5a.755.755 0 00-.75.75c0 .422.328.75.75.75z'></path>
    </svg>
  )
}

export function MinusIcon({ className, style, onClick, ...props }: IconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='44'
      height='44'
      viewBox='0 0 44 44'
      fill='currentColor'
      className={clsx('relative top-[-1px]', className)}
      style={style}
      onClick={onClick}
      {...props}
    >
      <path fill='currentColor' d='M0 0H44V44H0z' opacity='0.0001' />
      <path fill='currentColor' d='M14 21H30V23H14z' />
    </svg>
  )
}

export function PlusIcon({ className, style, onClick, ...props }: IconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='44'
      height='44'
      viewBox='0 0 44 44'
      fill='none'
      className={clsx('relative top-[-1px]', className)}
      style={style}
      onClick={onClick}
      {...props}
    >
      <path d='M0 0H44V44H0z' opacity='0.0001' />
      <path fill='currentColor' d='M14 21H30V23H14z' />
      <path fill='currentColor' d='M23 14H39V16H23z' transform='rotate(90 23 14)' />
    </svg>
  )
}
