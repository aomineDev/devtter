// libs
import { useState } from 'react'
import { useRouter } from 'next/router'

// services
import { createDeveet, uploadDeveetImage } from 'services/deveets'

// hooks
import useUser from 'hooks/useUser'

// components
import Head from 'next/head'

import InnerHeader from 'components/layout/InnerHeader'
import Container from 'components/layout/Container'

import Button from 'components/shared/Button'

import Textarea from 'components/Textarea'
import Avatar from 'components/Avatar'

import ComposeDeveetMask from './mask'

// styles
import styles from './styles.module.css'

export default function ComposeDeveet () {
  // hooks
  const [isBtnCloseImgDisabled, setIsBtnCloseImgDisabled] = useState(false)
  const [isTextAreaDisabled, setIsTextAreaDisabled] = useState(false)
  const [isBtnDisabled, setIsBtnDisabled] = useState(true)
  const [isBtnLoading, setIsBtnLoading] = useState(false)

  const [content, setContent] = useState('')
  const [file, setFile] = useState(null)

  // custom hooks
  const user = useUser()
  const router = useRouter()

  // handle upload image
  async function handleUploadImage () {
    if (!file) return null

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
        content,
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
    }
  }

  function handleAwaitCreate (value) {
    setIsBtnLoading(value)
    setIsTextAreaDisabled(value)
    setIsBtnCloseImgDisabled(value)
  }

  if (!user) return <ComposeDeveetMask />

  return (
    <>
      <Head>
        <title>Publica un Deveet / Devtter 🦇</title>
      </Head>

      <InnerHeader>
        <Button
          handleClick={handleCreateDeveet}
          isDisabled={isBtnDisabled}
          isLoading={isBtnLoading}
        >
          Deveetear
        </Button>
      </InnerHeader>

      <Container>
        <div className={styles.wrapper}>
          <div className={styles.avatarWrapper}>
            <Avatar src={user.avatar} />
          </div>
          <Textarea
            setFile={setFile}
            setInput={setContent}
            setIsSubmitDisabled={setIsBtnDisabled}
            handleSubmit={handleCreateDeveet}
            isTextAreaDisabled={isTextAreaDisabled}
            isBtnCloseImgDisabled={isBtnCloseImgDisabled}
          />
        </div>
      </Container>
    </>
  )
}
