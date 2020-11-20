import useUser from 'hooks/useUser'

import Avatar from 'components/shared/Avatar'

import styles from './styles.module.css'

export default function Header () {
  const user = useUser()

  return (
    <header className={styles.header}>
      <div className={styles.avatar}>
        {user && <Avatar src={user.avatar} size='30' />}
      </div>
      <h2 className={styles.title}>Inicio</h2>
    </header>
  )
}
