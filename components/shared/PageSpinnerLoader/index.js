import SpinnerLoader from '../SpinnerLoader'

import styles from './styles.module.css'

export default function PageSpinnerLoader ({ isVisible }) {
  return (
    <div className={styles.pageSpinnerLoader}>
      <SpinnerLoader />
    </div>
  )
}
