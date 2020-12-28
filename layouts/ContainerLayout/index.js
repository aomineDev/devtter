import styles from './styles.module.css'

export default function ContainerLayout ({ children }) {
  return (
    <div className={styles.app}>
      <main className={styles.main}>
        {children}
      </main>
    </div>
  )
}
