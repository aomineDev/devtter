import { firestore } from 'libs/firebase/admin'

export default async (req, res) => {
  const { query: { deveetId } } = req

  const doc = await firestore.collection('deveets').doc(deveetId).get()

  if (!doc.exists) return res.status(404).end()

  const data = doc.data()
  data.id = doc.id
  data.createdAt = +data.createdAt.toDate()

  res.status(200).json({
    data,
    message: 'deveet listed'
  })
}
