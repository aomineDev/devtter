import firebase from 'libs/firebase/client'

export function signInWithGitHub () {
  const githubProvider = new firebase.auth.GithubAuthProvider()

  return firebase
    .auth()
    .signInWithPopup(githubProvider)
}

export function signOut () {
  firebase.auth().signOut()
}

export function onAuthStateChanged (onChange) {
  return firebase
    .auth()
    .onAuthStateChanged(user => {
      const normalizedUser = user && mapUser(user)

      onChange(normalizedUser)
    })
}

function mapUser (user) {
  const { displayName, email, photoURL: avatar, uid: id } = user

  return {
    id,
    email,
    avatar,
    displayName
  }
}
