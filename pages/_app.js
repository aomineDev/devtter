import ContainerLayout from 'layouts/ContainerLayout'

import Head from 'next/head'

import AppLayout from 'layouts/AppLayout'

import 'assets/css/styles.css'

export default function Devtter ({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <ContainerLayout>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </ContainerLayout>
    </>
  )
}
