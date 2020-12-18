export default function getHashedFileName (fileName) {
  const dotIndex = fileName.lastIndexOf('.')
  const name = fileName.substr(0, dotIndex)
  const newName = name.replace(/ /g, '_')
  const ext = fileName.substr(dotIndex)
  const newFileName = `${newName}_${Date.now()}${ext}`

  return newFileName
}
