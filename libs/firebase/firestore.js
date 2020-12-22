import firebase from './client'

const db = firebase.firestore()

export function getRef (collection, orderBy, order) {
  if (orderBy && !order) return db.collection(collection).limit(10).orderBy(orderBy)

  if (orderBy && order) return db.collection(collection).limit(10).orderBy(orderBy, order)

  return db.collection(collection).limit(10)
}

export function getAll (collection, orderBy, order) {
  return getRef(collection, orderBy, order).get()
}

export function create (collection, data) {
  const payload = {
    ...data,
    createdAt: new Date()
  }

  return db.collection(collection).add(payload)
}

export default {
  getAll,
  create,
  getRef
}
