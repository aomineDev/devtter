import SpinnerLoader from '../SpinnerLoader'

import styles from './styles.module.css'

export default function PageLoader () {
  return (
    <div className={styles.pageLoader}>
      <SpinnerLoader />
    </div>
  )
}
