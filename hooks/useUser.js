import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import { onAuthStateChanged } from 'utils/firebase/client'

export default function useUser () {
  const [user, setUser] = useState(undefined)
  const router = useRouter()

  useEffect(() => {
    onAuthStateChanged(setUser)
  }, [])

  useEffect(() => {
    user === null && router.push('/')
  }, [user])

  return user
}
