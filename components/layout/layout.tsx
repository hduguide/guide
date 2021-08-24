import Header from './header'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <div className="flex flex-col items-center">
        <Header />
        <main>{children}</main>
      </div>
    </>
  )
}

export default Layout
