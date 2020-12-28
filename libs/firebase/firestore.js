import firebase from './client'

const db = firebase.firestore()

export function getRef ({ collection, orderBy, order, limit }) {
  if (orderBy && !order && limit) return db.collection(collection).limit(limit).orderBy(orderBy)
  if (orderBy && !order && !limit) return db.collection(collection).orderBy(orderBy)

  if (orderBy && order && limit) return db.collection(collection).limit(limit).orderBy(orderBy, order)
  if (orderBy && order && !limit) return db.collection(collection).orderBy(orderBy, order)

  if (limit) return db.collection(collection).limit(limit)

  return db.collection(collection)
}

export function getAll (options) {
  return getRef(options).get()
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
