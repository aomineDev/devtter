import styles from './styles.module.css'

export default function Spinner ({ customeStyles }) {
  const spinnerClassName = `${customeStyles} ${styles.loader}`

  return <div className={spinnerClassName}>Loading....</div>
}
