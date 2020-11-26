import firebase from './client'

const storage = firebase.storage()

export function uploadImage (ref, file) {
  const filename = file.name
  const dotIndex = filename.lastIndexOf('.')
  const name = filename.substr(0, dotIndex)
  const newName = name.replace(/ /g, '_')
  const ext = filename.substr(dotIndex)
  const newFilename = `${newName}_${Date.now()}${ext}`

  const storageRef = storage.ref(ref)
  const refChild = storageRef.child(newFilename)

  return refChild.put(file)
}
