import Head from 'next/head'

import NoContent from 'components/NoContent'

export default function Messages () {
  return (
    <>
      <Head>
        <title>Mensajes / Devtter 🦇</title>
      </Head>

      <NoContent>Aú no hay mensajes.</NoContent>
    </>
  )
}
