import useTimeago from 'hooks/useTimeago'

import Avatar from '../shared/Avatar'

import styles from './styles.module.css'

export default function Deveet ({ id, userId, avatar, displayName, content, commentsCount, likesCount, sharedCount, createdAt }) {
  const timeago = useTimeago(createdAt)

  return (
    <article className={styles.deveet}>
      <div className={styles.avatar}>
        <Avatar src={avatar} />
      </div>
      <section>
        <p className={styles.userName}>
          <strong>{displayName}</strong>
          <span> . </span>
          <time className={styles.timeAgo}>{timeago}</time>
        </p>
        <p>
          {content}
        </p>
      </section>
    </article>
  )
}
