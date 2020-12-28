import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import { onAuthStateChanged } from 'services/auth'

export default function useUser (guard) {
  const [user, setUser] = useState(undefined)
  const router = useRouter()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(setUser)

    return () => unsubscribe()
  }, [])

  useEffect(() => {
    if (!guard) return

    if (user === undefined) return

    if (user === null && router.pathname !== '/') return router.replace('/')

    if (user && router.pathname === '/') return router.replace('/home')
  }, [user])

  return user
}
