import firestore from 'libs/firebase/firestore'

const collection = 'deveets'

export function getDeveets () {
  const response = []

  return firestore
    .getAll(collection, 'createdAt', 'desc')
    .then(querySnapshot => {
      querySnapshot.forEach(doc => {
        const item = doc.data()
        item.id = doc.id

        response.push(item)
      })
      return response
    })
}

export function createDeveet ({ deveet }) {
  return firestore.create(collection, deveet)
}
