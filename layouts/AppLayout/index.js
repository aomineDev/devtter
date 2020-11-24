import Header from 'components/layout/Header'
import Navbar from 'components/layout/Navbar'

export default function AppLayout ({ children, withHeader, withNavbar, title, avatar, isNavigable, headerChildren }) {
  return (
    <>
      {
        withHeader && (
          <Header
            title={title}
            avatar={avatar}
            isNavigable={isNavigable}
          >
            {headerChildren}
          </Header>
        )
      }
      {children}
      { withNavbar && <Navbar /> }
    </>
  )
}
