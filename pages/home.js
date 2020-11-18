import Header from 'layouts/Header'
import Navbar from 'layouts/Navbar'
import Timeline from '@c/Timeline'

// import styles from './index.module.css'

export default function Home () {
  const timeline = [
    {
      id: '1',
      username: 'aomine',
      avatar: 'https://64.media.tumblr.com/6cb530f2a3d852b4725e9b7e9da549a8/a43dad1d805f3d8a-af/s640x960/2bd3b8175d9d8b885e99f99412a0ab1687c1443c.jpg',
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, nostrum assumenda. Dolores, omnis explicabo quidem asperiores sunt ipsum similique ducimus ad, nobis facilis, saepe non. Cum asperiores dolorem dolores temporibus?'
    },
    {
      id: '2',
      username: 'akashi',
      avatar: 'https://i1.sndcdn.com/artworks-000238209271-3k7wwk-t500x500.jpg',
      message: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure voluptatem earum culpa molestias eveniet, dicta, nemo hic, veniam laudantium incidunt eaque nobis? Nihil excepturi, ullam ut reiciendis nobis officia explicabo?'
    }
  ]

  return (
    <>
      <Header />
      <Timeline timeline={timeline} />
      <Navbar />
    </>
  )
}
