import { useRouter } from 'next/router'

import useTimeago from 'hooks/useTimeago'
import formatDate from 'utils/formatDate'

import Link from 'next/link'

import ImageCaption from '../ImageCaption'
import Avatar from '../Avatar'

import styles from './styles.module.css'

export default function Deveet ({ id, userId, avatar, displayName, content, imageUrl, commentsCount, likesCount, sharedCount, createdAt }) {
  const router = useRouter()

  const timeago = useTimeago(createdAt)
  const date = formatDate(createdAt)

  function handleArticleClick () {
    router.push(`/status/${id}`)
  }

  return (
    <article className={styles.deveet} onClick={handleArticleClick}>
      <div className={styles.avatar}>
        <Avatar src={avatar} />
      </div>
      <section className={styles.wrapper}>
        <div className={styles.user}>
          <p className={styles.displayName}>{displayName}</p>
          <p className={styles.userName}>@username</p>
          <Link href={`/status/${id}`}>
            <a>
              <time className={styles.timeAgo} title={date}> • {timeago}</time>
            </a>
          </Link>
        </div>
        <p className={styles.content}>
          {content}
        </p>
        <ImageCaption src={imageUrl} />
      </section>
    </article>
  )
}
