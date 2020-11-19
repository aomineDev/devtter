import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import useUser from 'hooks/useUser'
import useInput from 'hooks/useInput'

import HeaderLayout from 'layouts/HeaderLayout'

import Button from 'components/shared/Button'
import Avatar from 'components/shared/Avatar'
import IconButton from 'components/shared/IconButton'
import PageLoader from 'components/shared/PageLoader'

import styles from './styles.module.css'

export default function DeveetForm () {
  const user = useUser()
  const [input, handleChange] = useInput('')
  const router = useRouter()
  const [inputLength, setInputLength] = useState(0)

  function handleClick () {
    window.alert(input)
  }

  useEffect(() => {
    setInputLength(input.length)
  }, [input])

  if (!user) return <PageLoader />

  return (
    <>
      <HeaderLayout>
        <IconButton
          iconName='arrow-left'
          onClick={() => router.back()}
        />
        <Button
          onClick={handleClick}
          styleCustome={styles.btn}
        >
          Devittear
        </Button>
      </HeaderLayout>
      <form className={styles.form}>
        <div className={styles.avatar}>
          <Avatar
            src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/b7/b712b7cb4bead24d73e74f466dc5fbb2d0809a22_full.jpg"
          />
        </div>
        <div className={styles.textareaWrapper}>
          <textarea
            placeholder="¿Qué esta pasando?"
            className={styles.textarea}
            onChange={handleChange}
          />
          <div className={styles.length}>
            <p>{inputLength}/300</p>
          </div>
        </div>
      </form>
    </>
  )
}
