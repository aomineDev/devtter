import styles from './styles.module.css'

export default function Header ({ children }) {
  return (
    <header className={styles.header}>
      {children}
    </header>
  )
}
