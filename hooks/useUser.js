import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import { onAuthStateChanged } from 'services/auth'

export default function useUser (guard) {
  const [user, setUser] = useState(undefined)
  const router = useRouter()

  useEffect(() => {
    let isMounted = true
    if (isMounted) onAuthStateChanged(setUser)

    return () => { isMounted = false }
  }, [])

  useEffect(() => {
    if (!guard) return

    if (user === undefined) return

    if (user === null && router.pathname !== '/') return router.replace('/')

    if (user && router.pathname === '/') return router.replace('/home')
  }, [user])

  return user
}
