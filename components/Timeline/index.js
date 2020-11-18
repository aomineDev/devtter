import styles from './index.module.css'

import Deveet from '../Deveet'

export default function Timeline ({ timeline }) {
  return (
    <section className={styles.timeline}>
      {timeline.map(({ id, username, avatar, message }) => (
        <Deveet
          key={id}
          username={username}
          avatar={avatar}
          message={message}
          id={id}
        />
      ))}
    </section>
  )
}
