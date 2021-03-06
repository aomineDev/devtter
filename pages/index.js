import { useState } from 'react'

import useUser from 'hooks/useUser'
import { signInWithGitHub } from 'services/auth'

import Head from 'next/head'
import Image from 'next/image'

import Button from 'components/shared/Button'
import Loader from 'components/shared/Loader'

import styles from 'assets/css/modules/login.module.css'

export default function Login () {
  const [isLoading, setIsLoading] = useState(false)
  const user = useUser()

  function handleLogin () {
    setIsLoading(true)

    signInWithGitHub()
      .catch(error => {
        console.error(error)
        setIsLoading(false)
      })
  }

  return (
    <>
      <Head>
        <title>Devtter 🦇</title>
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
          user === null
            ? <Button
              iconName='github'
              bgColor='dark'
              handleClick={handleLogin}
              isLoading={isLoading}
            >
              Login with GitHub
            </Button>
            : <Loader />
        }
      </section>
    </>
  )
}
