import useTimeago from 'hooks/useTimeago'

import ImageCaption from '../ImageCaption'
import Avatar from '../Avatar'

import styles from './styles.module.css'

export default function Deveet ({ id, userId, avatar, displayName, content, imageUrl, commentsCount, likesCount, sharedCount, createdAt }) {
  const timeago = useTimeago(createdAt)

  return (
    <article className={styles.deveet}>
      <div className={styles.avatar}>
        <Avatar src={avatar} />
      </div>
      <section className={styles.wrapper}>
        <p className={styles.userName}>
          <strong>{displayName}</strong>
          <time className={styles.timeAgo}> • {timeago}</time>
        </p>
        <p className={styles.content}>
          {content}
        </p>
        <ImageCaption src={imageUrl} />
      </section>
    </article>
  )
}
