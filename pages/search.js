import AppLayout from 'layouts/AppLayout'

import useUser from 'hooks/useUser'

import Head from 'next/head'

import PageLoader from 'components/shared/PageLoader'
import NoContent from 'components/shared/NoContent'

export default function Search () {
  const user = useUser()

  if (!user) return <PageLoader />

  return (
    <>
      <Head>
        <title>Buscar / Devtter 🦇</title>
      </Head>

      <AppLayout
        withHeader
        withNavbar
        title='Buscar'
        avatar={user.avatar}
      >
        <NoContent>Aú no disponible.</NoContent>
      </AppLayout>
    </>
  )
}
