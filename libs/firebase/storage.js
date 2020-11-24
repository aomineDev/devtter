import firebase from './client'

const storage = firebase.storage()

export function uploadImage (ref, file) {
  const storageRef = storage.ref(ref)
  const refChild = storageRef.child(file.name)

  return refChild.put(file)
}
