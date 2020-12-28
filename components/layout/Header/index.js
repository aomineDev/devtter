import { signOut } from 'services/auth'

import Avatar from 'components/Avatar'
import IconButton from 'components/shared/IconButton'

import styles from './styles.module.css'

export default function Header ({ avatar, title }) {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.avatarWrapper}>
          { avatar && <Avatar src={avatar} size='30' /> }
        </div>
        <h2 className={styles.title}>{title}</h2>
      </div>
      <IconButton
        iconName='sign-out'
        theme='primary'
        handleClick={signOut}
      />
    </header>
  )
}
