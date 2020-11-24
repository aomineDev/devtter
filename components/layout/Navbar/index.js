import NavLink from 'components/NavLink'

import styles from './styles.module.css'

export default function Navbar () {
  return (
    <nav className={styles.navbar}>
      <NavLink
        href='/home'
        iconName='home'
        iconHeight='19'
      />
      <NavLink
        href='/search'
        iconName='search'
      />
      <NavLink
        href='/notifications'
        iconName='bell'
        iconHeight='25'
      />
      <NavLink
        href='/messages'
        iconName='envelope'
      />
    </nav>
  )
}
