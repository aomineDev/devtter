import { firestore } from 'libs/firebase/admin'

export default (req, res) => {
  const { query: { deveetId } } = req

  firestore
    .collection('deveets')
    .doc(deveetId)
    .get()
    .then(doc => {
      if (!doc.exists) return res.status(404).end()

      const data = doc.data()
      data.id = doc.id
      data.createdAt = +data.createdAt.toDate()

      res.status(200).json({
        data,
        message: 'deveet listed'
      })
    })
}
