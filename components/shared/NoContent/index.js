import Image from 'next/image'

import styles from './styles.module.css'

export default function NoContent ({ children }) {
  return (
   <div className={styles.noContent}>
     <Image
      src='/images/no-content.svg'
      width='200'
      height='200'
      alt='no content'
     />
     <h3 className={styles.title}>No Content</h3>
     <p className={styles.text}>
      {children}
     </p>
   </div>
  )
}
