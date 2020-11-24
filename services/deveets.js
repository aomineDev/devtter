import firestore from 'libs/firebase/firestore'
import { uploadImage } from 'libs/firebase/storage'

const collection = 'deveets'

export function getDeveets () {
  const response = []

  return firestore
    .getAll(collection, 'createdAt', 'desc')
    .then(querySnapshot => {
      querySnapshot.forEach(doc => {
        const item = doc.data()
        const { createdAt } = item
        item.createdAt = +createdAt.toDate()
        item.id = doc.id

        response.push(item)
      })

      return response
    })
}

export function createDeveet (deveet) {
  return firestore.create(collection, deveet)
}

export function uploadDeveetImage (file) {
  return uploadImage(collection, file)
}
