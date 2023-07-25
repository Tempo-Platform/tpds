import { navigationitems } from './navigation'
import Link from 'next/link'
//import { useSelectedLayoutSegment } from 'next/navigation'
import { MenuAlt2Icon, XIcon } from '@heroicons/react/solid'
import clsx from 'clsx'
import { useState } from 'react'
import { P, PSmall } from '@/tpds/elements/typography'

function GlobalNav() {
  const [isOpen, setIsOpen] = useState(false)
  const close = () => setIsOpen(false)
  const keysarray = []
  return (
    <div className="fixed top-0 z-10 flex w-full flex-col border-b border-window bg-window lg:bottom-0 lg:z-auto lg:w-72 lg:border-b-0 lg:border-r lg:border-gray-800">
      <div className="flex h-14 items-center py-4 px-4 lg:h-auto">
        <Link href="/" className="group flex w-full items-center gap-x-2.5" onClick={close}>
          <h3 className="font-semibold tracking-wide text-gray-400 text-primary">TPDS</h3>
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
        <nav className="space-y-6 px-2 py-5">
          {navigationitems.map((section, index) => {
            return (
              <div key={section.name + index}>
                <div className="mb-2 px-3 text-xs font-medium uppercase tracking-wider text-tertiary">
                  <div>{section.name}</div>
                </div>

                <div className="space-y-1">
                  {section.items.map((item, indexitem) => {
                    return (
                      <div key={item.slug + indexitem}>
                        <GlobalNavItem item={item} close={close} />
                        {item.subItems &&
                          item.subItems.map((subItem, indexsubitem) => (
                            <GlobalNavSubitem
                              key={'subitem' + subItem.slug + indexsubitem}
                              item={subItem}
                              close={close}
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

function GlobalNavItem({ item, close }) {
  // const segment = useSelectedLayoutSegment()
  // const isActive = item.slug === segment
  const isActive = false

  return (
    <Link
      onClick={close}
      href={`/${item.slug}`}
      className={clsx('block rounded-md px-3 text-sm font-medium hover:text-grey-light-scale-300', {
        'text-grey-light-scale-400 hover:bg-grey-light-scale-800': !isActive,
        'text-white': isActive,
      })}
    >
      <PSmall>{item.name}</PSmall>
    </Link>
  )
}

function GlobalNavSubitem({ item, close }) {
  // const segment = useSelectedLayoutSegment()
  // const isActive = item.slug === segment
  const isActive = false

  return (
    <Link
      onClick={close}
      href={`/${item.slug}`}
      className={clsx(
        'block rounded-md pl-4 pr-3 text-sm font-medium hover:text-grey-light-scale-300',
        {
          'text-grey-light-scale-400 hover:bg-grey-light-scale-800': !isActive,
          'text-white': isActive,
        },
      )}
    >
      <PSmall>- {item.name}</PSmall>
    </Link>
  )
}
