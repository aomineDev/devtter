import Loader from '../Loader'

import styles from './styles.module.css'

export default function BoxLoader ({ isVisible }) {
  return (
    <div className={styles.BoxLoader}>
       <Loader />
    </div>
  )
}
