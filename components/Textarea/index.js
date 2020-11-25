import { useState } from 'react'

import Icon from 'components/shared/Icon'
import ImageCaption from 'components/ImageCaption'

import styles from './styles.module.css'

export default function textarea ({
  input,
  image,
  lengthLimit,
  setImage,
  setFile,
  setIsSubmitDisabled,
  handleSubmit,
  handleChange,
  isTextAreaDisabled,
  isBtnCloseImgDisabled,
  lengthTrackerClassName
}) {
  const [isImageCaptionActive, setIsImageCaptionActive] = useState(false)

  const [dragClassName, setDragClassname] = useState('')

  // handle img
  function handleImage (file) {
    const objectURL = URL.createObjectURL(file)

    setImage(objectURL)
    setFile(file)
    input.length <= lengthLimit && setIsSubmitDisabled(false)
    setIsImageCaptionActive(true)
  }

  function handleCloseImg (e) {
    e.preventDefault()
    setImage(null)
    setFile(null)
    !input && setIsSubmitDisabled(true)
    setIsImageCaptionActive(false)
  }

  function handleFileInput (e) {
    const file = e.target.files[0]

    handleImage(file)
  }

  // handle drag
  function handleDragEnter (e) {
    e.preventDefault()
    setDragClassname(styles.drag)
  }

  function handleDragLeave (e) {
    e.preventDefault()
    setDragClassname('')
  }

  function handleDrop (e) {
    e.preventDefault()
    setDragClassname('')

    const file = e.dataTransfer.files[0]

    handleImage(file)
  }

  function handleKeyPress (e) {
    if ((!input && !image) || (input.length > lengthLimit)) return

    if (e.key === 'Enter') {
      if (!e.shiftKey) handleSubmit()
    }
  }

  return (
    <form className={styles.form}>
          <div className={styles.textareaWrapper}>
            <textarea
              placeholder="¿Qué esta pasando?"
              className={`${styles.textarea} ${dragClassName}`}
              disabled={isTextAreaDisabled}
              onChange={handleChange}
              onKeyPress={handleKeyPress}
              onDragEnter={handleDragEnter}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
            </textarea>
            <div className={styles.dragImg}>
              <Icon
                iconName='file-image'
                width='60'
                height='80'
              />
            </div>
          </div>
          {
            isImageCaptionActive && (
              <ImageCaption
                src={image}
                withBtnCloseImg
                isBtnCloseImgDisabled={isBtnCloseImgDisabled}
                handleCloseImg={handleCloseImg}
              />
            )
          }
          <div className={styles.formDetails}>
            <div className={styles.formBtns}>
              <label htmlFor='file-img' className={styles.fileLabel}>
                <Icon
                  iconName='file-image'
                  width='18'
                  height='24'
                />
              </label>
              <input
                type='file'
                id='file-img'
                className={styles.fileInput}
                onChange={handleFileInput}
              />
            </div>
            <p className={`${styles.lengthTracker} ${styles[lengthTrackerClassName]}`}>
              {input.length}/{lengthLimit}
            </p>
          </div>
        </form>
  )
}
