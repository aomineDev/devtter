import Avatar from 'components/shared/Avatar'

import styles from './styles.module.css'

export default function Header () {
  return (
    <header className={styles.header}>
      <div className={styles.avatar}>
        <Avatar
          src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/b7/b712b7cb4bead24d73e74f466dc5fbb2d0809a22_full.jpg"
          size='30'
        />
      </div>
      <h2 className={styles.title}>Inicio</h2>
    </header>
  )
}
