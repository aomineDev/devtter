import firebase from './client'

import getHashedFileName from 'utils/getHashedFileName'

const storage = firebase.storage()

export function uploadImage (ref, file) {
  const fileName = getHashedFileName(file.name)
  const storageRef = storage.ref(ref)
  const refChild = storageRef.child(fileName)

  return refChild.put(file)
}
