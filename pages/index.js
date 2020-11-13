import Head from 'next/head'
import Link from 'next/link'

import styles from '../styles/Home.module.css'

export default function Home () {
  return (
    <div>
      <Head>
        <title>Devtter 🦇</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          devtter
        </h1>
        <nav>
          <Link href="/timeline"><a>Timeline</a></Link>
        </nav>
      </main>
    </div>
  )
}
