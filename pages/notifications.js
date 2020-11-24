import AppLayout from 'layouts/AppLayout'

import useUser from 'hooks/useUser'

import Head from 'next/head'

import PageLoader from 'components/shared/PageLoader'
import NoContent from 'components/shared/NoContent'

export default function Notifications () {
  const user = useUser()

  if (!user) return <PageLoader />

  return (
    <>
      <Head>
        <title>Notificaciones / Devtter 🦇</title>
      </Head>

      <AppLayout
        withHeader
        withNavbar
        title='Notificaciones'
        avatar={user.avatar}
      >
        <NoContent>Aú no hay notificaciones.</NoContent>
      </AppLayout>
    </>
  )
}
