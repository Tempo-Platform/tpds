import type { Metadata } from 'next'
import GlobalNav from '@/lib/nav/global-nav'
import { serif_book, sans_neutral, monospace } from '@/lib/fonts'
import './tailwind.css'
import '@tpds/css/basestyles.css'
import '@tpds/css/colors.css'
import '@tpds/css/utility-classes.css'
import 'rc-slider/assets/index.css'
import './rc-slider.css'

export const metadata: Metadata = {
  title: 'TPDS',
  description: 'The Tempo Platform Design System',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`bg-body h-screen w-screen ${serif_book.variable} ${sans_neutral.variable} ${monospace.variable} antialiased`}
      >
        <GlobalNav />
        <div className='lg:pl-72 bg-window'>
          <div className='w-full min-h-screen'>{children}</div>
        </div>
      </body>
    </html>
  )
}
