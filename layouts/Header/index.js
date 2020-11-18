import Avatar from 'components/Avatar'

import styles from './index.module.css'

export default function Header () {
  return (
    <header className={styles.header}>
      <div className={styles.avatar}>
      <Avatar
        src="https://avatars1.githubusercontent.com/u/40266562?v=4"
        size='30'
      />
      </div>
      <h2 className={styles.title}>Inicio</h2>
    </header>
  )
}
