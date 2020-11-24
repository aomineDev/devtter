import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import { getDeveets } from 'services/deveets'
import useUser from 'hooks/useUser'

import Head from 'next/head'

import AppLayout from 'layouts/AppLayout'

import Container from 'components/layout/Container'

import PageLoader from 'components/shared/PageLoader'
import FloatButton from 'components/shared/FloatButton'

import Timeline from 'components/Timeline'

export default function Home () {
  const [deveets, setDeveets] = useState([])
  const [isDeveetsLoading, setIsDeveetsLoading] = useState(true)

  const router = useRouter()
  const user = useUser()

  useEffect(() => {
    getDeveets()
      .then(setDeveets)
      .then(() => setIsDeveetsLoading(false))
      .catch(error => {
        console.error('Error adding document: ', error)
      })
  }, [])

  function handleNavigation () {
    router.push('/compose/deveet')
  }

  if (!user) return <PageLoader />

  return (
    <>
      <Head>
        <title>Inicio / Devtter 🦇</title>
      </Head>

      <AppLayout
        withHeader
        withNavbar
        title='Inicio'
        avatar={user.avatar}
      >
        <Container>
          <Timeline timeline={deveets} isLoading={isDeveetsLoading} />
        </Container>
        <FloatButton
          bgColor='primary'
          iconName='feather'
          handleCLick={handleNavigation}
        />
      </AppLayout>
    </>
  )
}
