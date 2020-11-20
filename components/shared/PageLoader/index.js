import Image from 'next/image'

import styles from './styles.module.css'

export default function PageLoader () {
  return (
    <div className={styles.pageLoader}>
      <Image
        src='/devtter.svg'
        width='120'
        height='120'
        alt='devtter'
      />
    </div>
  )
}
