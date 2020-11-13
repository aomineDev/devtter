import Head from 'next/head'
import Link from 'next/link'

export default function Timeline ({ userName }) {
  return (
    <div>
      <Head>
        <title>Devtter - Timeline</title>
      </Head>

      <h1>This is the Timeline of {userName}</h1>
      <Link href="/"><a>Go Home</a></Link>
    </div>
  )
}

Timeline.getInitialProps = () => {
  return {
    userName: '@aomine'
  }
}
