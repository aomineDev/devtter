import { useRouter } from 'next/router'

import IconButton from 'components/shared/IconButton'

import styles from './styles.module.css'

export default function InnerHeader ({ children, title }) {
  const router = useRouter()

  function handleNavigation () {
    router.back()
  }

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <nav className={styles.navigation}>
          <IconButton
            iconName='arrow-left'
            iconWidth='21'
            iconHeight='24'
            theme='primary'
            handleClick={handleNavigation}
          />
        </nav>
        <h2 className={styles.title}>{title}</h2>
      </div>
      {children}
    </header>
  )
}
