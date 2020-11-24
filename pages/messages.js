import AppLayout from 'layouts/AppLayout'

import useUser from 'hooks/useUser'

import Head from 'next/head'

import PageLoader from 'components/shared/PageLoader'
import NoContent from 'components/shared/NoContent'

export default function Messages () {
  const user = useUser()

  if (!user) return <PageLoader />

  return (
    <>
      <Head>
        <title>Mensajes / Devtter 🦇</title>
      </Head>

      <AppLayout
        withHeader
        withNavbar
        title='Mensajes'
        avatar={user.avatar}
      >
        <NoContent>Aú no hay mensajes.</NoContent>
      </AppLayout>
    </>
  )
}
