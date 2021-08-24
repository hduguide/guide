import Layout from './layout'

const menus = [
  {
    title: '首页',
    href: '/',
  },
  {
    title: '指北',
    href: '/articles',
  },
  {
    title: '关于',
    href: '/about',
  },
  {
    title: 'FAQ',
    href: '/pages/faq',
  },
]

const LayoutHeader = () => {
  return (
    <>
      <header className="flex-1 flex flex-row h-12 bg-white border p-2">
        {menus.map((menu) => (
          <div key={menu.href}>{menu.title}</div>
        ))}
      </header>
    </>
  )
}

export default LayoutHeader
