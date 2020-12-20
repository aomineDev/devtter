export default function formatDate (timestamp) {
  const date = new Date(timestamp)
  const formattedDate = date.toLocaleDateString('es')

  return formattedDate
}
