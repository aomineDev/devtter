import styles from './styles.module.css'

export default function Container ({ children, withHeader, withHUD }) {
  let containerClassName = `${styles.container} `

  if (withHeader) containerClassName += `${styles.withHeader} `

  if (withHUD) containerClassName += styles.withHUD

  return (
    <section className={containerClassName}>
      {children}
    </section>
  )
}
