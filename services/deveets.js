import config from 'config'

import firestore from 'libs/firebase/firestore'
import { uploadImage } from 'libs/firebase/storage'

const collection = 'deveets'

export function getDeveets () {
  return firestore
    .getAll(collection, 'createdAt', 'desc')
    .then(({ docs }) => {
      return docs.map(mapDeveets)
    })
}

export async function getDeveet (deveetId) {
  console.log(config)
  console.log('test', process.env.TEST)
  const response = await fetch(`${config.apiUrl}/deveet/${deveetId}`)
  const { data } = await response.json()

  return { response, deveet: data }
}

export function listenDeveets (cb) {
  return firestore
    .getRef(collection, 'createdAt', 'desc')
    .onSnapshot(({ docs }) => {
      const newDeveets = docs.map(mapDeveets)
      cb(null, newDeveets)
    })
}

export function createDeveet (deveet) {
  return firestore.create(collection, deveet)
}

export function uploadDeveetImage (file) {
  return uploadImage(collection, file)
}

function mapDeveets (doc) {
  const data = doc.data()
  data.createdAt = +data.createdAt.toDate()
  data.id = doc.id

  return data
}
