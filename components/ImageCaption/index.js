import IconButton from '../shared/IconButton'

import styles from './styles.module.css'

export default function ImageCaption ({ src, fluid, withBtnCloseImg, isBtnCloseImgDisabled, handleCloseImg }) {
  if (!src) return false

  let captionClassName = `${styles.caption} `

  if (fluid) captionClassName += styles.fluid

  return (
    <div className={captionClassName}>
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
