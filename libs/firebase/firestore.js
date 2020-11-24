import firebase from './client'

const db = firebase.firestore()

function getAll (collection, orderBy, order) {
  if (orderBy && !order) return db.collection(collection).orderBy(orderBy).limit(10).get()

  if (orderBy && order) return db.collection(collection).orderBy(orderBy, order).limit(10).get()

  return db.collection(collection).limit(10).get()
}

function create (collection, data) {
  const payload = {
    ...data,
    createdAt: new Date()
  }

  return db.collection(collection).add(payload)
}

export default {
  getAll,
  create
}
