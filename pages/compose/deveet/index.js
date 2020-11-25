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

import InnerHeader from 'components/layout/InnerHeader'

import PageLoader from 'components/shared/PageLoader'
import Button from 'components/shared/Button'

import Avatar from 'components/Avatar'
import Textarea from 'components/Textarea'

// styles
import styles from './styles.module.css'

export default function ComposeDeveet () {
  // hooks
  const [isBtnCloseImgDisabled, setIsBtnCloseImgDisabled] = useState(false)
  const [isTextAreaDisabled, setIsTextAreaDisabled] = useState(false)
  const [isBtnDisabled, setIsBtnDisabled] = useState(true)
  const [isBtnLoading, setIsBtnLoading] = useState(false)

  const [lengthTrackerClassName, setLengthTrackerClassName] = useState('')

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

    if (image && input.length <= lengthLimit) setIsBtnDisabled(false)
  }, [input])

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

  function handleAwaitCreate (value) {
    setIsBtnLoading(value)
    setIsTextAreaDisabled(value)
  }

  // handle invalid length
  function handleInvalidLength (value) {
    setIsBtnDisabled(value)
    setLengthTrackerClassName(value ? 'invalid' : '')

    if (input.length === 0) setLengthTrackerClassName('inactive')
  }

  // await user
  if (!user) return <PageLoader />

  return (
    <>
      <Head>
        <title>Publica un Deveet / Devtter 🦇</title>
      </Head>

      <InnerHeader>
        <Button
          handleClick={handleCreateDeveet}
          customeStyles={styles.btn}
          isDisabled={isBtnDisabled}
          isLoading={isBtnLoading}
        >
          Deveetear
        </Button>
      </InnerHeader>

      <section className={styles.wrapper}>
        <div className={styles.avatar}>
          <Avatar src={user.avatar} />
        </div>
        <Textarea
          input={input}
          image={image}
          lengthLimit={lengthLimit}
          setImage={setImage}
          setFile={setFile}
          setIsSubmitDisabled={setIsBtnDisabled}
          handleSubmit={handleCreateDeveet}
          handleChange={handleChange}
          isTextAreaDisabled={isTextAreaDisabled}
          isBtnCloseImgDisabled={isBtnCloseImgDisabled}
          lengthTrackerClassName={lengthTrackerClassName}
        />
      </section>
    </>
  )
}
