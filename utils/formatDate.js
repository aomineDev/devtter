export default function formatDate (timestamp) {
  const date = new Date(timestamp)
  const options = {
    dateStyle: 'medium',
    timeStyle: 'short',
    hour12: true
  }

  const formattedDate = date.toLocaleString('default', options)

  return formattedDate
}
