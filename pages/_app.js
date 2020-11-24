import ContainerLayout from 'layouts/ContainerLayout'

import Head from 'next/head'

import 'styles/theme.css'
import 'styles/globals.css'

export default function Devtter ({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <ContainerLayout>
        <Component {...pageProps} />
      </ContainerLayout>
    </>
  )
}
