// libs
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import routes from 'router/index'

// hooks
import useUser from 'hooks/useUser'

// components
import Header from 'components/layout/Header'
import Navbar from 'components/layout/Navbar'

import PageLoader from 'components/shared/PageLoader'

export default function AppLayout ({ children }) {
  const [withHUD, setWithHUD] = useState(false)
  const [title, setTitle] = useState(false)

  const user = useUser(true)
  const router = useRouter()

  useEffect(() => {
    setWithHUD(false)
    routes.forEach(route => {
      if (router.pathname === route.path) {
        setWithHUD(true)
        setTitle(route.title)
      }
    })
  }, [router.pathname])

  if (user === undefined) return <PageLoader />

  if (user === null) return children

  return (
    <>
      { withHUD && <Header title={title} avatar={user.avatar} /> }
        {children}
      { withHUD && <Navbar /> }
    </>
  )
}
