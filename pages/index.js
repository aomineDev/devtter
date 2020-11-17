import { useState, useEffect } from 'react'

import Head from 'next/head'
import Image from 'next/image'
import Button from '../components/Button/index'
import Avatar from '../components/Avatar/index'

import { loginWithGitHub, onAuthStateChanged } from '../utils/firebase/client'

import styles from '../styles/Home.module.css'

export default function Home () {
  const [user, setUser] = useState(undefined)

  useEffect(() => {
    onAuthStateChanged(setUser)
  }, [])

  function handleClick () {
    loginWithGitHub()
      .catch(err => console.error(err))
  }

  return (
    <div className={styles.app}>
      <Head>
        <title>Devtter 🦇</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <section className={styles.hero}>
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
              <div className={styles.user}>
                <Avatar url={user.avatar} />
                <strong>{user.displayName}</strong>
              </div>
          }
        </section>
      </main>
    </div>
  )
}
