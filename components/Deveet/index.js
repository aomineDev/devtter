import Avatar from '../Avatar'

import styles from './index.module.css'

export default function Deveet ({ username, avatar, message, id }) {
  return (
    <article className={styles.deveet}>
      <div className={styles.avatar}>
        <Avatar
          src={avatar}
        />
      </div>
      <section>
        <p><strong>{username}</strong></p>
        <p>{message}</p>
      </section>
    </article>
  )
}
