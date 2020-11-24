// libs
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

// services
import { createDeveet, uploadDeveetImage } from 'services/deveets'

// hooks
import useUser from 'hooks/useUser'
import useInput from 'hooks/useInput'

// components
import Head from 'next/head'

import AppLayout from 'layouts/AppLayout'

import PageLoader from 'components/shared/PageLoader'
import ImageCaption from 'components/ImageCaption'
import Button from 'components/shared/Button'
import Avatar from 'components/Avatar'
import Icon from 'components/shared/Icon'

// styles
import styles from './styles.module.css'

export default function ComposeDeveet () {
  // hooks
  const [isBtnCloseImgDisabled, setIsBtnCloseImgDisabled] = useState(false)
  const [isImageCaptionActive, setIsImageCaptionActive] = useState(false)
  const [isTextAreaDisabled, setIsTextAreaDisabled] = useState(false)
  const [isDisabled, setIsDisabled] = useState(true)
  const [isLoading, setIsLoading] = useState(false)

  const [lengthTrackerClassName, setLengthTrackerClassName] = useState('')
  const [dragClassName, setDragClassname] = useState('')

  const [image, setImage] = useState(null)
  const [file, setFile] = useState(null)

  // custom hooks
  const [input, handleChange] = useInput('')
  const user = useUser()
  const router = useRouter()

  // constans
  const lengthLimit = 300

  // effects
  useEffect(() => {
    if (input && input.length <= lengthLimit) handleInvalidLength(false)
    else handleInvalidLength(true)

    if (image && input.length <= lengthLimit) setIsDisabled(false)
  }, [input])

  // handle img
  function handleImage (file) {
    const objectURL = URL.createObjectURL(file)

    setImage(objectURL)
    setFile(file)
    input.length <= lengthLimit && setIsDisabled(false)
    setIsImageCaptionActive(true)
  }

  function handleCloseImg (e) {
    e.preventDefault()
    setImage(null)
    setFile(null)
    !input && setIsDisabled(true)
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

  // handle upload image
  async function handleUploadImage () {
    if (!file) return null

    setIsBtnCloseImgDisabled(true)

    const snapshot = await uploadDeveetImage(file)

    const downloadURL = snapshot.ref.getDownloadURL()

    return downloadURL
  }

  // handle deveet
  async function handleCreateDeveet () {
    try {
      handleAwaitCreate(true)

      const imageUrl = await handleUploadImage()

      const deveet = {
        avatar: user.avatar,
        displayName: user.displayName,
        userId: user.id,
        content: input,
        imageUrl,
        likesCount: 0,
        sharedCount: 0,
        commentsCount: 0
      }

      await createDeveet(deveet)
      router.push('/home')
    } catch (error) {
      console.error('Error adding document: ', error)
      handleAwaitCreate(false)
      setIsBtnCloseImgDisabled(false)
    }
  }

  function handleEnterPress (e) {
    if ((!input && !image) || (input.length > lengthLimit)) return

    if (e.key === 'Enter') {
      if (!e.shiftKey) handleCreateDeveet()
    }
  }

  function handleAwaitCreate (value) {
    setIsLoading(value)
    setIsTextAreaDisabled(value)
  }

  // handle invalid length
  function handleInvalidLength (value) {
    setIsDisabled(value)
    setLengthTrackerClassName(value ? styles.invalid : '')

    if (input.length === 0) setLengthTrackerClassName(styles.inactive)
  }

  // await user
  if (!user) return <PageLoader />

  return (
    <>
      <Head>
        <title>Publica un Deveet / Devtter 🦇</title>
      </Head>

      <AppLayout
        withHeader
        isNavigable
        headerChildren={
          <Button
            handleClick={handleCreateDeveet}
            customeStyles={styles.btn}
            isDisabled={isDisabled}
            isLoading={isLoading}
          >
            Deveetear
          </Button>
        }
      >
        <section className={styles.wrapper}>
          <div className={styles.avatar}>
            <Avatar src={user.avatar} />
          </div>
          <form className={styles.form}>
            <div className={styles.textareaWrapper}>
              <textarea
                placeholder="¿Qué esta pasando?"
                className={`${styles.textarea} ${dragClassName}`}
                disabled={isTextAreaDisabled}
                onChange={handleChange}
                onKeyPress={handleEnterPress}
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
              <p className={`${styles.lengthTracker} ${lengthTrackerClassName}`}>
                {input.length}/{lengthLimit}
              </p>
            </div>
          </form>
        </section>
      </AppLayout>
    </>
  )
}
