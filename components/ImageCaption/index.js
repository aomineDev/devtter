import IconButton from '../shared/IconButton'

import styles from './styles.module.css'

export default function ImageCaption ({ src, withBtnCloseImg, isBtnCloseImgDisabled, handleCloseImg }) {
  if (!src) return false

  return (
    <div className={styles.imgWrapper}>
      <img
        src={src}
        className={styles.image}
        alt='image'
      />
      <div className={styles.imgClose}>
        {
          withBtnCloseImg && (
            <IconButton
              iconName='times'
              iconWidth='11'
              iconHeight='16'
              btnSize='30'
              bgColor='dark'
              isDisabled={isBtnCloseImgDisabled}
              isIconInvert
              handleClick={handleCloseImg}
            />
          )
        }
      </div>
    </div>
  )
}
