import { useState, useEffect } from 'react'

const dateUnits = [
  { unit: 'd', value: 86400 },
  { unit: 'h', value: 3600 },
  { unit: 'min', value: 60 },
  { unit: 's', value: 1 }
]

function getDateDiffs (timestamp) {
  const now = Date.now()
  const elapsed = (now - timestamp) / 1000

  for (const { unit, value } of dateUnits) {
    if (elapsed > value || unit === 's') {
      // const time = Math.floor(elapsed / value) * -1
      const time = Math.floor(elapsed / value)

      return { time, unit }
    }
  }
}

export default function useTimeago (timestamp) {
  const [timeago, setTimeago] = useState(() => getDateDiffs(timestamp))

  useEffect(() => {
    if (timeago.unit !== 's') return

    const interval = setInterval(() => {
      const newTimeago = getDateDiffs(timestamp)
      setTimeago(newTimeago)

      if (newTimeago.unit !== 's') clearInterval(interval)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  // const language = navigator.language || navigator.userLanguage

  // const rtf = new Intl.RelativeTimeFormat(language, { style: 'short' })
  const { time, unit } = timeago

  // return rtf.format(time, unit)
  return time + unit
}
