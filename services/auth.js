import firebase from 'libs/firebase'

function mapUser (user) {
  const { displayName, email, photoURL: avatar, uid: id } = user

  return {
    id,
    email,
    avatar,
    displayName
  }
}

export function onAuthStateChanged (onChange) {
  firebase
    .auth()
    .onAuthStateChanged(user => {
      const normalizedUser = user && mapUser(user)

      onChange(normalizedUser)
    })
}

export function loginWithGitHub () {
  const githubProvider = new firebase.auth.GithubAuthProvider()

  return firebase
    .auth()
    .signInWithPopup(githubProvider)
}
