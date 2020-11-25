import Avatar from 'components/Avatar'

import styles from './styles.module.css'

export default function Header ({ avatar, title }) {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <nav className={styles.navigation}>
          { avatar && <Avatar src={avatar} size='30' /> }
        </nav>
        <h2 className={styles.title}>{title}</h2>
      </div>
    </header>
  )
}
