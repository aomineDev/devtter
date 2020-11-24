import { useState } from 'react'

export default function useInput (initialValue) {
  const [input, setInput] = useState(initialValue)

  function handleChange (e) {
    const { value } = e.target

    setInput(value.trim())
  }

  return [input, handleChange]
}
