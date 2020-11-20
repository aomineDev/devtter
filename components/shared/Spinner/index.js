import styles from './styles.module.css'

export default function Spinner ({ customeStyles }) {
  const className = `${customeStyles} ${styles.loader}`

  return <div className={className}>Loading....</div>
}
