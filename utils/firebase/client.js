import firebase from 'firebase/app'
import 'firebase/auth'

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

firebase.apps.length === 0 && firebase.initializeApp(firebaseConfig)

function mapUserFormFirebaseAuthToUser (user) {
  const { displayName, email, photoURL: avatar } = user

  return {
    email,
    avatar,
    displayName
  }
}

export function onAuthStateChanged (onChange) {
  // firebase.auth().signOut()
  firebase
    .auth()
    .onAuthStateChanged(user => {
      if (!user) {
        onChange(null)

        return
      }

      const normalizedUser = mapUserFormFirebaseAuthToUser(user)

      onChange(normalizedUser)
    })
}

export function loginWithGitHub () {
  const githubProvider = new firebase.auth.GithubAuthProvider()

  return firebase
    .auth()
    .signInWithPopup(githubProvider)
}
