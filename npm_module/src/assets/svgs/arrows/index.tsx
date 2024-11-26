import clsx from 'clsx'
import React from 'react'

type IconProps = {
  className?: string
  style?: React.CSSProperties
  onClick?: () => void
}

export function ArrowLeftIcon({ className, style, onClick, ...props }: IconProps) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='10'
      height='19'
      fill='none'
      viewBox='0 0 10 19'
      className={clsx('relative top-[-1px]', className)}
      style={style}
      onClick={onClick}
    >
      <path
        fill='currentColor'
        d='M9.023 18.016l.782-.743c.156-.195.156-.507 0-.664L2.735 9.5l7.07-7.07c.156-.157.156-.47 0-.664l-.782-.743a.45.45 0 00-.664 0L.156 9.187a.529.529 0 000 .665l8.203 8.164a.45.45 0 00.664 0z'
      />
    </svg>
  )
}

export function ArrowRightIcon({ className, style, onClick, ...props }: IconProps) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='10'
      height='19'
      fill='none'
      viewBox='0 0 10 19'
      className={clsx('relative top-[-1px]', className)}
      style={style}
      onClick={onClick}
    >
      <path
        fill='currentColor'
        d='M.898 18.016l-.78-.743c-.157-.195-.157-.507 0-.664L7.187 9.5.117 2.43c-.157-.157-.157-.47 0-.664l.78-.743a.45.45 0 01.664 0l8.204 8.164a.529.529 0 010 .665l-8.204 8.164a.45.45 0 01-.664 0z'
      />
    </svg>
  )
}

export function ArrowDownIcon({ className, style, onClick, ...props }: IconProps) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='18'
      height='11'
      fill='none'
      viewBox='0 0 18 11'
      className={clsx('relative top-[-1px]', className)}
      style={style}
      onClick={onClick}
    >
      <path
        fill='currentColor'
        d='M.445 1.6l.742-.782c.196-.156.508-.156.665 0l7.109 7.07 7.07-7.07c.157-.156.469-.156.664 0l.742.782a.45.45 0 010 .664l-8.164 8.203a.53.53 0 01-.664 0L.445 2.264a.45.45 0 010-.664z'
      />
    </svg>
  )
}

export function ArrowUpIcon({ className, style, onClick, ...props }: IconProps) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='18'
      height='10'
      fill='none'
      viewBox='0 0 18 10'
      className={clsx('relative top-[-1px]', className)}
      style={style}
      onClick={onClick}
    >
      <path
        fill='currentColor'
        d='M17.438 8.984l-.743.782c-.195.156-.508.156-.664 0l-7.11-7.07-7.07 7.07c-.156.156-.468.156-.663 0l-.743-.782a.45.45 0 010-.664L8.61.117a.529.529 0 01.664 0l8.165 8.203a.45.45 0 010 .664z'
      />
    </svg>
  )
}

export function TriangleDown({ className, style, onClick, ...props }: IconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='currentColor'
      width='10'
      height='6'
      viewBox='0 0 10 6'
      className={clsx('chevron-down', className)}
      style={style}
      onClick={onClick}
    >
      <path d='M8.937 1.61c.235-.211.235-.563.024-.797C8.75.578 8.398.578 8.164.789l-3.187 3-3.165-3c-.234-.21-.585-.21-.796.024-.211.234-.211.586.023.796l3.563 3.375c.117.094.257.141.375.141.14 0 .28-.047.398-.14l3.562-3.376z'></path>
    </svg>
  )
}
