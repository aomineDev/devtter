export default function formatDate (timestamp) {
  const date = new Date(timestamp)

  const formattedDate = date.toLocaleString('default', { dateStyle: 'medium', timeStyle: 'short', hour12: true })

  return formattedDate
}
