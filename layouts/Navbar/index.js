import NavLink from 'components/NavLink'

import styles from './styles.module.css'

export default function Navbar () {
  return (
    <nav className={styles.navbar}>
      <NavLink iconName="home" href='/home' />
      <NavLink iconName="search" href='/' />
      <NavLink iconName="bell" href='/' />
      <NavLink iconName="envelope" href='/' />
    </nav>
  )
}
