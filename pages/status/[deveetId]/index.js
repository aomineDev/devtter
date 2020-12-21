import formatDate from 'utils/formatDate'

import Head from 'next/head'

import InnerHeader from 'components/layout/InnerHeader'
import Container from 'components/layout/Container'

import Avatar from 'components/Avatar'
import ImageCaption from 'components/ImageCaption'

import styles from './styles.module.css'

export default function DeveetStatus (props) {
  const { data: deveet } = props

  const date = formatDate(deveet.createdAt)

  return (
    <>
      <Head>
        <title>Deveet / Devtter 🦇</title>
      </Head>

      <InnerHeader title='Deveet' />

      <Container withHeader>
        <article className={styles.deveet}>
          <div className={styles.user}>
            <Avatar src={deveet.avatar} />
            <div className={styles.nameWrapper}>
              <p className={styles.displayName}>{deveet.displayName}</p>
              <p className={styles.userName}>@username</p>
            </div>
          </div>
          <div className={styles.content}>
            <p>{deveet.content}</p>
          </div>
          <ImageCaption src={deveet.imageUrl} fluid />
            <time className={styles.timeAgo} title={date}>{date}</time>
        </article>
      </Container>
    </>
  )
}

export async function getServerSideProps (context) {
  const { params, res } = context
  const { deveetId } = params

  const response = await fetch(`http://localhost:3000/api/deveet/${deveetId}`)
  const props = await response.json()

  if (response.ok) return { props }

  if (res) {
    res.writeHead(301, { location: '/notFound' }).end()
  }
}
