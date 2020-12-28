// libs
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

// services
import { listenDeveets } from 'services/deveets'

// hooks
import useUser from 'hooks/useUser'

// components
import Head from 'next/head'

import Container from 'components/layout/Container'

import FloatButton from 'components/shared/FloatButton'

import Timeline from 'components/Timeline'

export default function Home () {
  const [deveets, setDeveets] = useState([])
  const [isDeveetsLoading, setIsDeveetsLoading] = useState(true)

  const user = useUser()
  const router = useRouter()

  useEffect(() => {
    let unsubscribe = null

    if (!user) return

    unsubscribe = listenDeveets((err, newDeveets) => {
      if (err) return console.error('Error adding document: ', err)

      setDeveets(newDeveets)
      setIsDeveetsLoading(false)
    })

    return () => unsubscribe && unsubscribe()
  }, [user])

  function handleNavigation () {
    router.push('/compose/deveet')
  }

  return (
    <>
      <Head>
        <title>Inicio / Devtter 🦇</title>
      </Head>

      <Container withHUD>
        <Timeline timeline={deveets} isLoading={isDeveetsLoading} />
      </Container>
      <FloatButton
        bgColor='primary'
        iconName='feather'
        handleCLick={handleNavigation}
      />
    </>
  )
}
