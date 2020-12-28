import Head from 'next/head'

import NoContent from 'components/NoContent'

export default function Notifications () {
  return (
    <>
      <Head>
        <title>Notificaciones / Devtter 🦇</title>
      </Head>

      <NoContent>Aú no hay notificaciones.</NoContent>
    </>
  )
}
