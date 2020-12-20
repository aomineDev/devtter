const admin = require('firebase-admin')

const serviceAccount = require('./serviceAccountKey.json')

!admin.apps.length && admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://devtter-6cd8c.firebaseio.com'
})

const firestore = admin.firestore()

export { firestore }
