import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import useUser from 'hooks/useUser'
import { getDeveets } from 'services/deveets'

import Head from 'next/head'

import Header from 'layouts/Header'
import Container from 'layouts/Container'
import Navbar from 'layouts/Navbar'

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

  function redirectTo () {
    router.push('/compose/deveet')
  }

  if (!user) return <PageLoader />

  return (
    <>
      <Head>
        <title>Devtter - Inicio 🦇</title>
      </Head>

      <Header />
      <Container>
        <Timeline timeline={deveets} isLoading={isDeveetsLoading} />
      </Container>
      <FloatButton
        iconName='feather'
        bgColor='#0099ff'
        handleCLick={redirectTo}
      />
      <Navbar />
    </>
  )
}
