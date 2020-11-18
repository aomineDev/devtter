import AppLayout from 'layouts/App'

import 'styles/theme.css'
import 'styles/globals.css'

export default function Devtter ({ Component, pageProps }) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  )
}
