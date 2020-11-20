import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import { onAuthStateChanged } from 'services/auth'

export default function useUser () {
  const [user, setUser] = useState(undefined)
  const router = useRouter()

  useEffect(() => {
    onAuthStateChanged(setUser)
  }, [])

  useEffect(() => {
    user === null && router.replace('/')
  }, [user])

  return user
}
