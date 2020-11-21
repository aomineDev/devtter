import Avatar from '../shared/Avatar'

import styles from './styles.module.css'

export default function Deveet ({ displayName, avatar, content, id }) {
  return (
    <article className={styles.deveet}>
      <div className={styles.avatar}>
        <Avatar src={avatar} />
      </div>
      <section>
        <p className={styles.userName}>
          <strong>{displayName}</strong>
        </p>
        <p>
          {content}
        </p>
      </section>
    </article>
  )
}
