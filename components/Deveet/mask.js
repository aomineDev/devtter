import AvatarMask from '../Avatar/mask'

import styles from './mask.module.css'

export default function DeveetMask () {
  return (
    <div className={styles.deveet}>
      <div className={styles.avatarWrapper}>
        <AvatarMask />
      </div>
      <div className={styles.contentWrapper}>
        <p className={styles.userName}></p>
        <p className={styles.content}></p>
      </div>
    </div>
  )
}
