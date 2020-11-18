import { useState, useEffect } from 'react'

import { loginWithGitHub, onAuthStateChanged } from 'utils/firebase/client'

import Head from 'next/head'
import Image from 'next/image'
import Button from 'components/Button'
import Avatar from 'components/Avatar'

import styles from 'styles/login.module.css'

export default function Login () {
  const [user, setUser] = useState(undefined)

  useEffect(() => {
    onAuthStateChanged(setUser)
  }, [])

  function handleClick () {
    loginWithGitHub()
      .catch(err => console.error(err))
  }

  return (
    <>
      <Head>
        <title>Devtter 🦇</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <section className={styles.login}>
        <Image
          src='/devtter.svg'
          alt='logo'
          width='120'
          height='120'
        />
        <h1 className={styles.title}>
          Devtter
        </h1>
        <h2 className={styles.subtitle}>
          Talk about development<br />with developers 🐱‍💻
        </h2>
        {
          user === undefined &&
            <p>loading...</p>
        }
        {
          user === null &&
            <Button
              styleCustome={styles.btn}
              iconName='github'
              onClick={handleClick}
            >
              Login with GitHub
            </Button>
        }
        {
          (user !== undefined && user !== null) &&
            <div className={styles.userBox}>
              <Avatar src={user.avatar} />
              <p className={styles.username}><strong>{user.displayName}</strong></p>
            </div>
        }
      </section>
    </>
  )
}
