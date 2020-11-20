import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import useUser from 'hooks/useUser'
import useInput from 'hooks/useInput'
import { createDeveet } from 'services/deveets'

import Head from 'next/head'

import HeaderLayout from 'layouts/HeaderLayout'

import PageLoader from 'components/shared/PageLoader'
import IconButton from 'components/shared/IconButton'
import Button from 'components/shared/Button'
import Avatar from 'components/shared/Avatar'

import styles from './styles.module.css'

export default function DeveetForm () {
  const [isLoading, setIsLoading] = useState(false)
  const [isDisabled, setIsDisabled] = useState(true)
  const [isInvalidLength, setIsInvalidLength] = useState(true)
  const [isTextAreaDisabled, setIsTextAreaDisabled] = useState(false)

  const [input, handleChange] = useInput('')
  const user = useUser()
  const router = useRouter()

  const lengthTrackerClassName = isInvalidLength ? styles.invalid : ''
  const lengthLimit = 300

  useEffect(() => {
    if (input && input.length <= lengthLimit) handleToggleDisabled(false)
    else handleToggleDisabled(true)
  }, [input])

  function handleCreateDeveet () {
    setIsLoading(true)
    setIsTextAreaDisabled(true)

    const deveet = {
      avatar: user.avatar,
      displayName: user.displayName,
      userId: user.id,
      content: input,
      likesCount: 0,
      sharedCount: 0,
      commentsCount: 0
    }

    createDeveet({ deveet })
      .then(docRef => router.push('/home'))
      .catch(error => {
        console.error('Error adding document: ', error)
        setIsLoading(false)
        setIsTextAreaDisabled(false)
      })
  }

  function handleKeyPress (e) {
    if (e.key === 'Enter') handleCreateDeveet()
  }

  function handleToggleDisabled (value) {
    setIsDisabled(value)
    setIsInvalidLength(value)
  }

  function handleIconClick () {
    router.back()
  }

  if (!user) return <PageLoader />

  return (
    <>
      <Head>
        <title>Publica un Deveet 🦇</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <HeaderLayout>
        <IconButton iconName='arrow-left' onClick={handleIconClick} />
        <Button
          handleClick={handleCreateDeveet}
          customeStyles={styles.btn}
          isDisabled={isDisabled}
          isLoading={isLoading}
        >
          Devittear
        </Button>
      </HeaderLayout>
      <form className={styles.form}>
        <div className={styles.avatar}>
          <Avatar src={user.avatar} />
        </div>
        <div className={styles.textareaWrapper}>
          <textarea
            placeholder="¿Qué esta pasando?"
            className={styles.textarea}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            disabled={isTextAreaDisabled}
          />
          <div className={styles.lengthTrackerWrapper}>
            <p className={`${styles.lengthTracker} ${lengthTrackerClassName}`}>
              {input.length}/{lengthLimit}
            </p>
          </div>
        </div>
      </form>
    </>
  )
}
