import GlobalNav from './global-nav'

export default function RootLayout({ children }) {
  return (
    <>
      <GlobalNav />
      <div className="lg:pl-72 bg-window">
        <div className="w-full">{children}</div>
      </div>
    </>
  )
}
