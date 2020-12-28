import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyDQcplTLgyESmj7_7hRYYGAbn4ItQxksBY',
  authDomain: 'devtter-6cd8c.firebaseapp.com',
  databaseURL: 'https://devtter-6cd8c.firebaseio.com',
  projectId: 'devtter-6cd8c',
  storageBucket: 'devtter-6cd8c.appspot.com',
  messagingSenderId: '78285343595',
  appId: '1:78285343595:web:df57922b0307cd4aa1da2e',
  measurementId: 'G-51W2K0RBV9'
}

!firebase.apps.length && firebase.initializeApp(firebaseConfig)

export default firebase
