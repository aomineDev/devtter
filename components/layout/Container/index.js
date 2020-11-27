import styles from './styles.module.css'

export default function Container ({ children, fullHeight, withScroll }) {
  let sectionClassName = `${styles.container} `

  if (fullHeight) sectionClassName += styles.fullHeight

  if (withScroll) sectionClassName += styles.withScroll

  return (
    <section className={sectionClassName}>
      {children}
    </section>
  )
}
