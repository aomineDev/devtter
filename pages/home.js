// libs
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

// services
import { getDeveets } from 'services/deveets'

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
    if (!user) return

    getDeveets()
      .then(setDeveets)
      .then(() => setIsDeveetsLoading(false))
      .catch(error => console.error('Error adding document: ', error))
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
