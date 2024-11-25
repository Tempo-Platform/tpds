'use client'

import { navigationitems } from './navigation'
import Link from 'next/link'
import { MenuAlt2Icon, XIcon } from '@heroicons/react/solid'
import clsx from 'clsx'
import { useState } from 'react'
import { PTiny } from '@tpds/elements/typography'
import ColorModeControl from '@/lib/components/ColorModeControl'
import packageJson from '../../../package.json'
import { usePathname } from 'next/navigation'

function GlobalNav() {
  const [isOpen, setIsOpen] = useState(false)
  const pathName = usePathname()

  const close = () => setIsOpen(false)
  return (
    <div className="fixed top-0 z-10 flex w-full flex-col bg-window border border-window lg:bottom-0 lg:z-auto lg:w-72">
      <div className="flex items-center p-4 lg:h-auto">
        <Link href="/" className="group flex w-full items-center gap-x-2.5" onClick={close}>
          <TempoLogo />
          <h3 className="font-semibold tracking-wide text-gray-400 text-primary">TPDS</h3>
        </Link>
        <Link href="https://github.com/Tempo-Platform/tpds" target="_blank" rel="noreferrer">
          <GithubIcon className="w-[28px] mr-8 lg:mr-2" />
        </Link>
      </div>

      <button
        type="button"
        className="group absolute right-0 top-0 flex h-14 items-center gap-x-2 px-4 lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <XIcon className="block w-6 text-primary" />
        ) : (
          <MenuAlt2Icon className="block w-6 text-primary" />
        )}
      </button>

      <div
        className={clsx('overflow-y-auto lg:static lg:block', {
          'fixed inset-x-0 bottom-0 top-14 mt-px bg-window': isOpen,
          hidden: !isOpen,
        })}
      >
        <div className="p-4">
          <PTiny isMedium className="text-secondary">
            v{packageJson.version}
          </PTiny>
        </div>
        <div className="p-4">
          <ColorModeControl />
        </div>
        <nav className="space-y-6 px-2 py-5">
          {navigationitems.map((section, index) => {
            return (
              <div key={section.name + index}>
                <div className="mb-2 px-3 text-xs font-medium uppercase tracking-wider text-secondary">
                  <div>{section.name}</div>
                </div>

                <div className="space-y-1">
                  {section.items.map((item, indexitem) => {
                    return (
                      <div key={item.slug + indexitem}>
                        <GlobalNavItem item={item} close={close} pathName={pathName} />
                        {item.subItems &&
                          item.subItems.map((subItem, indexsubitem) => (
                            <GlobalNavSubitem
                              key={'subitem' + subItem.slug + indexsubitem}
                              item={subItem}
                              close={close}
                              pathName={pathName}
                            />
                          ))}
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </nav>
      </div>
    </div>
  )
}

export default GlobalNav

function GlobalNavItem({ item, close, pathName }) {
  // const segment = useSelectedLayoutSegment()
  // const isActive = item.slug === segment
  const itemLink = `/${item.slug}`
  const isActive = itemLink === pathName

  return (
    <Link
      onClick={close}
      href={itemLink}
      className={clsx(
        'block rounded-[4px] pl-4 pr-3 py-0.5 text-sm font-medium',
        'hover:bg-grey-light-scale-400/50 dark:hover:bg-grey-dark-scale-400/50',
        'text-primary text-[14px]',
        //'text-black dark:text-white',
        //'hover:text-white dark:hover:text-black',
        // isActive
        //   ? 'text-white dark:text-black'
        //   : 'text-black dark:text-white hover:bg-black dark:hover:bg-white',
      )}
    >
      <p className={clsx('w-full font-medium', '!text-inherit', isActive && '!font-bold')}>
        {item.name}
      </p>
    </Link>
  )
}

function GlobalNavSubitem({ item, close, pathName }) {
  // const segment = useSelectedLayoutSegment()
  // const isActive = item.slug === segment
  const itemLink = `/${item.slug}`
  const isActive = itemLink === pathName

  return (
    <Link
      onClick={close}
      href={itemLink}
      className={clsx(
        'block rounded-[4px] pl-4 pr-3 py-0.5 text-sm font-medium',
        'hover:bg-grey-light-scale-400/50 dark:hover:bg-grey-dark-scale-400/50',
        'text-primary text-[14px]',
      )}
    >
      <p className={clsx('w-full font-medium', '!text-inherit', isActive && '!font-bold')}>
        - {item.name}
      </p>
    </Link>
  )
}

function TempoLogo() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="23" fill="none" viewBox="0 0 15 23">
      <g filter="url(#filter0_i_406_74)">
        <path
          fill="url(#paint0_linear_406_74)"
          fillRule="evenodd"
          d="M7.473 2.33c-1.6 0-3.14.177-4.383.384-.597.099-.984.784-.598 1.468l2.434 4.303a6.402 6.402 0 01-.12 6.5l-2.341 3.8a1.027 1.027 0 00-.115.888c.086.235.268.42.567.486 1.22.271 2.8.512 4.556.512 1.782 0 3.383-.248 4.61-.524a.749.749 0 00.563-.48 1.03 1.03 0 00-.1-.884l-2.297-3.905a6.403 6.403 0 01-.114-6.28l2.387-4.42 1.01.558-1.01-.558c.367-.68-.018-1.356-.61-1.455-1.253-.21-2.814-.394-4.439-.394zM2.717.414C4.044.195 5.712 0 7.473 0c1.787 0 3.48.2 4.816.425 2.318.39 3.299 2.932 2.253 4.87l-2.387 4.42a4.05 4.05 0 00.073 3.972l2.297 3.905c1.063 1.808.312 4.322-1.943 4.829-1.35.303-3.121.579-5.109.579-1.959 0-3.708-.268-5.05-.566-2.289-.509-3.026-3.073-1.912-4.882l2.34-3.798a4.05 4.05 0 00.077-4.112L.494 5.338C-.602 3.4.367.806 2.717.415z"
          clipRule="evenodd"
        ></path>
      </g>
      <defs>
        <filter
          id="filter0_i_406_74"
          width="15.478"
          height="23.478"
          x="0"
          y="0"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dx="0.796" dy="0.637"></feOffset>
          <feGaussianBlur stdDeviation="0.239"></feGaussianBlur>
          <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"></feComposite>
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 0.530365 0 0 0 0 0.433333 0 0 0 0.78 0"></feColorMatrix>
          <feBlend in2="shape" result="effect1_innerShadow_406_74"></feBlend>
        </filter>
        <linearGradient
          id="paint0_linear_406_74"
          x1="7.473"
          x2="7.473"
          y1="2.184"
          y2="20.525"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="red"></stop>
          <stop offset="1" stopColor="#FF7940"></stop>
        </linearGradient>
      </defs>
    </svg>
  )
}

function GithubIcon({ ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="20"
      viewBox="0 0 21 20"
      {...props}
      className={clsx(props.className, 'fill-current text-primary')}
    >
      <path d="M6.986 16.105c0-.082-.085-.165-.212-.165s-.212.083-.212.165c0 .083.085.165.212.124.127 0 .212-.041.212-.124zM5.673 15.9c0 .082.085.206.212.206.085.042.212 0 .254-.082 0-.083-.042-.165-.17-.207-.126-.041-.253 0-.296.083zm1.906-.041c-.127 0-.212.082-.212.206 0 .083.127.124.254.083.127-.042.212-.083.17-.166 0-.082-.128-.165-.212-.123zM10.33 0C4.488 0 0 4.377 0 10.076a10.4 10.4 0 007.155 9.911c.55.083.72-.248.72-.495v-2.56s-2.964.619-3.599-1.24c0 0-.466-1.197-1.143-1.486 0 0-.974-.661.042-.661 0 0 1.059.082 1.652 1.074.931 1.61 2.455 1.156 3.09.867.085-.66.34-1.115.678-1.404-2.371-.248-4.785-.578-4.785-4.543 0-1.156.34-1.693 1.017-2.436-.127-.29-.466-1.363.127-2.808C5.8 4.047 7.875 5.41 7.875 5.41c.847-.248 1.736-.33 2.625-.33.931 0 1.82.082 2.667.33 0 0 2.033-1.404 2.922-1.115.593 1.445.211 2.519.127 2.808.677.743 1.1 1.28 1.1 2.436 0 3.965-2.497 4.295-4.868 4.543.38.33.72.95.72 1.94 0 1.363-.043 3.098-.043 3.428 0 .29.212.62.762.496C18.121 18.583 21 14.66 21 10.076 21 4.377 16.216 0 10.33 0zM4.107 14.247c-.085.041-.042.165 0 .248.085.041.17.082.254.041.042-.041.042-.165-.042-.248-.085-.041-.17-.082-.212-.041zm-.466-.33c-.042.082 0 .123.085.165.084.041.17.041.212-.042 0-.04-.043-.082-.128-.123-.084-.042-.127-.042-.169 0zm1.355 1.486c-.042.042-.042.165.085.248.084.083.211.124.254.041.042-.041.042-.165-.043-.247-.084-.083-.211-.124-.296-.042zm-.466-.62c-.084.042-.084.166 0 .249.085.082.17.123.254.082.043-.041.043-.165 0-.248-.084-.082-.17-.123-.254-.082z"></path>
    </svg>
  )
}
