import Image from 'next/image'

import styles from './Button.module.css'

export default function Button ({ children, styleCustome, iconName, ...props }) {
  if (iconName) {
    return (
      <button
        className={`${styleCustome} ${styles.btn} ${styles.btnWithIcon}`}
        {...props}
      >
        <span
          className={styles.imgWrapper}
        >
          <Image
            src={`/icons/${iconName}.svg`}
            alt='logo'
            width='20'
            height='20'
          />
        </span>
        {children}
      </button>
    )
  }

  return (
    <button
      className={`${styleCustome}${styles.btn}`}
      {...props}
    >
      {children}
    </button>
  )
}
