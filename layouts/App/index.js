import styles from './styles.module.css'

export default function AppLayout ({ children }) {
  return (
    <div className={styles.app}>
      <main className={styles.main}>
        {children}
      </main>
    </div>
  )
}
