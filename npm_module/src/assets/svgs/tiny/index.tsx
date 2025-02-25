import React from 'react'
import clsx from 'clsx'

type IconProps = {
  className?: string
  style?: React.CSSProperties
  onClick?: (e: React.MouseEvent) => void
  active?: boolean
}

export function Copy({ className, style, onClick, ...props }: IconProps) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='14'
      height='15'
      viewBox='0 0 14 15'
      fill='currentColor'
      className={clsx('relative top-[-1px]', className)}
      style={style}
      onClick={onClick}
    >
      <path
        fill='currentColor'
        d='M12.25.75H6.125c-.984 0-1.75.793-1.75 1.75v6.125c0 .984.766 1.75 1.75 1.75h6.125c.957 0 1.75-.766 1.75-1.75V2.5c0-.957-.793-1.75-1.75-1.75zm.438 7.875a.45.45 0 01-.438.438H6.125a.432.432 0 01-.438-.438V2.5a.45.45 0 01.438-.438h6.125a.47.47 0 01.438.438v6.125zM8.311 13a.45.45 0 01-.437.438H1.75A.432.432 0 011.312 13V6.875a.45.45 0 01.438-.438H3.5V5.125H1.75c-.984 0-1.75.793-1.75 1.75V13c0 .984.766 1.75 1.75 1.75h6.125c.957 0 1.75-.766 1.75-1.75v-1.75H8.312V13z'
      ></path>
    </svg>
  )
}

export function Cross({ className, style, onClick, ...props }: IconProps) {
  return (
    <svg
      {...props}
      viewBox='0 0 16 16'
      xmlns='http://www.w3.org/2000/svg'
      width='16'
      height='16'
      fill='currentColor'
      className={clsx('relative top-[-1px]', className)}
      style={style}
      onClick={onClick}
    >
      <path fill='currentColor' d='M0 0H16V16H0z' opacity='0.01'></path>
      <path
        fill='currentColor'
        d='M9.258 7.981l4.658 4.658c.112.112.112.3 0 .45l-.827.826c-.15.113-.338.113-.45 0l-.79-.788-3.83-3.869-4.658 4.658c-.112.112-.3.112-.45 0l-.826-.827c-.113-.15-.113-.338 0-.45L6.742 7.98l-4.657-4.62c-.113-.112-.113-.3 0-.45l.826-.826c.15-.113.338-.113.45 0L8.02 6.742l4.62-4.657c.112-.113.3-.113.45 0l.826.826c.113.15.113.338 0 .45l-.788.79-3.869 3.83z'
      ></path>
    </svg>
  )
}

export function DummyIcon({ className, style, onClick, ...props }: IconProps) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='16'
      height='16'
      fill='currentColor'
      viewBox='0 0 16 16'
      className={clsx('relative top-[-1px]', className)}
      style={style}
      onClick={onClick}
    >
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M8 16A8 8 0 108 0a8 8 0 000 16zM4.059 9.935V6.4h1.006v3.534H4.06zM4 5.487c0-.142.05-.258.15-.35A.595.595 0 014.561 5a.59.59 0 01.41.137.449.449 0 01.152.35.448.448 0 01-.156.352.584.584 0 01-.406.137.598.598 0 01-.41-.137A.453.453 0 014 5.487zm3.456 3.752a.684.684 0 00.45-.144.491.491 0 00.181-.382h.94c-.002.24-.071.46-.208.66a1.365 1.365 0 01-.562.464 1.85 1.85 0 01-.784.163c-.537 0-.96-.16-1.27-.48-.31-.322-.465-.766-.465-1.333v-.062c0-.544.154-.978.462-1.303.307-.324.73-.486 1.266-.486.47 0 .845.126 1.128.379.284.25.429.584.433 1.002h-.94a.617.617 0 00-.18-.444.62.62 0 00-.458-.173c-.234 0-.41.08-.531.242-.118.159-.177.418-.177.777v.098c0 .363.059.625.177.784.118.159.297.238.538.238zm2.203-2.041a1.993 1.993 0 00-.215.937v.043c0 .561.16 1.006.482 1.332.324.327.756.49 1.298.49.54 0 .972-.163 1.294-.49.321-.329.482-.764.482-1.306l-.007-.242c-.037-.5-.216-.897-.538-1.189-.319-.291-.732-.437-1.238-.437-.357 0-.67.075-.94.225-.269.15-.475.363-.618.637zm.989 1.777c-.134-.179-.202-.436-.202-.771 0-.377.068-.654.202-.833a.667.667 0 01.569-.271c.247 0 .44.09.576.271.136.18.204.435.204.764 0 .386-.068.666-.204.843a.682.682 0 01-.57.261c-.25 0-.441-.088-.575-.264z'
        clipRule='evenodd'
      ></path>
    </svg>
  )
}

export function Play({ className, style, onClick, ...props }: IconProps) {
  return (
    <svg
      {...props}
      viewBox='0 0 11 13'
      xmlns='http://www.w3.org/2000/svg'
      width='11'
      height='13'
      fill='none'
      className={clsx('relative top-[-1px]', className)}
      style={style}
      onClick={onClick}
    >
      <path
        fill='currentColor'
        d='M9.938 5.028L1.688.153C1.007-.245 0 .153 0 1.114v9.75c0 .89.938 1.43 1.688.985l8.25-4.875a1.14 1.14 0 000-1.946z'
      ></path>
    </svg>
  )
}

export function PowerSwitch({ active, className, style, onClick, ...props }: IconProps) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='14'
      height='14'
      viewBox='0 0 14 14'
      fill='currentColor'
      className={clsx('relative top-[-1px]', className)}
      style={style}
      onClick={onClick}
    >
      <path
        fill={active ? '00C2CE' : '#C9CDCF'}
        d='M10.391 1.285c-.164-.11-.383-.055-.465.11l-.328.574c-.082.136-.027.328.11.437A5.434 5.434 0 0112.25 7a5.467 5.467 0 01-5.468 5.469A5.45 5.45 0 011.312 7c0-1.914.985-3.637 2.517-4.594.136-.11.191-.3.109-.437l-.328-.574c-.082-.165-.301-.22-.465-.11C1.258 2.488-.027 4.594 0 7.027c0 3.72 3.063 6.782 6.782 6.754A6.78 6.78 0 0013.562 7c0-2.406-1.284-4.512-3.17-5.715zM7.438 7.547V.328A.353.353 0 007.11 0h-.656a.332.332 0 00-.329.328v7.219c0 .191.137.328.329.328h.656a.332.332 0 00.328-.328z'
      ></path>
    </svg>
  )
}

export function Reboot({ className, style, onClick, ...props }: IconProps) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='12'
      height='12'
      fill='none'
      viewBox='0 0 12 12'
      className={clsx('relative top-[-1px]', className)}
      style={style}
      onClick={onClick}
    >
      <path
        fill='currentColor'
        d='M12 6c0 3.321-2.612 6-5.793 6a5.682 5.682 0 01-3.491-1.179.878.878 0 01-.156-1.205.837.837 0 011.164-.188 4.003 4.003 0 002.483.857c2.276 0 4.138-1.902 4.138-4.286 0-2.357-1.862-4.26-4.138-4.26-.983 0-1.888.349-2.638.965l1.19 1.206c.44.455.103 1.259-.518 1.259H.491C.207 5.169 0 4.928 0 4.633V.748c0-.67.75-.99 1.19-.535l1.215 1.285A5.653 5.653 0 016.207.025C9.387.025 12 2.704 12 6z'
      ></path>
    </svg>
  )
}

export function Stop({ className, style, onClick, ...props }: IconProps) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='11'
      height='11'
      viewBox='0 0 11 11'
      className={clsx('relative top-[-1px]', className)}
      style={style}
      onClick={onClick}
    >
      <path d='M9.375 0h-8.25C.492 0 0 .516 0 1.125v8.25A1.11 1.11 0 001.125 10.5h8.25c.61 0 1.125-.492 1.125-1.125v-8.25A1.14 1.14 0 009.375 0z'></path>
    </svg>
  )
}
