import { useRouter } from 'next/router'

import Avatar from 'components/Avatar'
import IconButton from 'components/shared/IconButton'

import styles from './styles.module.css'

export default function Header ({ children, avatar, title, isNavigable }) {
  const router = useRouter()

  function handleNavigation () {
    router.back()
  }

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <nav className={styles.navigation}>
          {
            isNavigable
              ? <IconButton
                  iconName='arrow-left'
                  iconWidth='21'
                  iconHeight='24'
                  theme='primary'
                  handleClick={handleNavigation}
                />
              : avatar && <Avatar src={avatar} size='30' />
          }
        </nav>
        <h2 className={styles.title}>{title}</h2>
      </div>
      {children}
    </header>
  )
}
