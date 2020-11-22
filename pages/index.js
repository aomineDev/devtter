import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import { loginWithGitHub } from 'services/auth'
import useUser from 'hooks/useUser'

import Head from 'next/head'
import Image from 'next/image'

import SpinnerLoader from 'components/shared/SpinnerLoader'
import Button from 'components/shared/Button'

import styles from 'styles/login.module.css'

export default function Login () {
  const [isLoading, setIsLoading] = useState(false)

  const user = useUser()
  const router = useRouter()

  useEffect(() => {
    user && router.replace('/home')
  }, [user])

  function handleLogin () {
    setIsLoading(true)

    loginWithGitHub()
      .catch(err => console.error(err))
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
              customeStyles={styles.btn}
              iconName='github'
              handleCLick={handleLogin}
              isLoading={isLoading}
            >
              Login with GitHub
            </Button>
            : <SpinnerLoader />
        }
      </section>
    </>
  )
}
