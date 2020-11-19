import { useEffect } from 'react'
import { useRouter } from 'next/router'

import { loginWithGitHub } from 'utils/firebase/client'
import useUser from 'hooks/useUser'

import Head from 'next/head'
import Image from 'next/image'
import Button from 'components/shared/Button'
import SpinnerLoader from 'components/shared/SpinnerLoader'

import styles from 'styles/login.module.css'

export default function Login () {
  const user = useUser()
  const router = useRouter()

  useEffect(() => {
    user && router.push('/home')
  }, [user])

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
          user === null
            ? <Button
              styleCustome={styles.btn}
              iconName='github'
              onClick={handleClick}
            >
              Login with GitHub
            </Button>
            : <SpinnerLoader />
        }
      </section>
    </>
  )
}
