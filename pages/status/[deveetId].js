import { useRouter } from 'next/router'

import Head from 'next/head'

export default function DeveetStatus () {
  const router = useRouter()
  const { deveetId } = router.query

  return (
    <>
      <Head>
        <title>Deveet / Devtter 🦇</title>
      </Head>

      <p>Parameter {deveetId}</p>
    </>
  )
}

DeveetStatus.getInitialProps = context => {
  console.log('getInitialProps')

  return {}
}
