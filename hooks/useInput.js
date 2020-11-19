import { useState } from 'react'

export default function useInput (initialValue) {
  const [input, setInput] = useState(initialValue)

  function handleChange (e) {
    setInput(e.target.value)
  }

  return [input, handleChange]
}
