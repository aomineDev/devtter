import { useState, useEffect } from 'react'

const dateUnits = [
  { unit: 'day', value: 86400 },
  { unit: 'hour', value: 3600 },
  { unit: 'minute', value: 60 },
  { unit: 'second', value: 1 }
]

function getDateDiffs (timestamp) {
  const now = Date.now()
  const elapsed = (now - timestamp) / 1000

  for (const { unit, value } of dateUnits) {
    if (elapsed > value || unit === 'second') {
      const time = Math.floor(elapsed / value) * -1

      return { time, unit }
    }
  }
}

export default function useTimeago (timestamp) {
  const initTime = getDateDiffs(timestamp)
  const [timeago, setTimeago] = useState(initTime)

  useEffect(() => {
    if (timeago.unit !== 'second') return

    const interval = setInterval(() => {
      const newTimeago = getDateDiffs(timestamp)
      setTimeago(newTimeago)

      if (newTimeago.unit !== 'second') clearInterval(interval)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const language = navigator.language || navigator.userLanguage

  const rtf = new Intl.RelativeTimeFormat(language, { style: 'short' })

  const { time, unit } = timeago

  return rtf.format(time, unit)
}
