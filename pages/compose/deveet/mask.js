import Container from 'components/layout/Container'

import AvatarMask from 'components/Avatar/mask'

import styles from './mask.module.css'

export default function ComposeDeveetMask () {
  return (
    <Container>
      <div className={styles.wrapper}>
        <div className={styles.avatarWrapper}>
          <AvatarMask />
        </div>
        <div className={styles.textarea} />
      </div>
    </Container>
  )
}
