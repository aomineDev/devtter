import styles from './styles.module.css'

export default function Spinner ({ bgColor }) {
  let spinnerClassName = `${styles.loader} `

  if (bgColor === 'light') spinnerClassName += styles.darkSpinner

  return <div className={spinnerClassName}>Loading....</div>
}
