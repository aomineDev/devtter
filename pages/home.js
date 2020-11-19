import { useRouter } from 'next/router'

import useUser from 'hooks/useUser'

import Header from 'layouts/Header'
import Container from 'layouts/Container'
import Navbar from 'layouts/Navbar'
import Timeline from 'components/Timeline'
import FloatButton from 'components/shared/FloatButton'
import PageLoader from 'components/shared/PageLoader'

export default function Home () {
  const router = useRouter()
  const user = useUser()

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
    },
    {
      id: '3',
      username: 'midorima',
      avatar: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/44/440467ede7bde7d8f1ee294f329647336096d3ca_full.jpg',
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit a eum quae magni corrupti magnam architecto sed tempore odio recusandae adipisci ipsa quia unde, quos ut sapiente ducimus autem dolorem?'
    },
    {
      id: '4',
      username: 'kuroko',
      avatar: 'https://img.quizur.com/f/img5be80882f1b743.44140736.PNG?lastEdited=1541933193',
      message: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo voluptatem laboriosam repudiandae adipisci quas eligendi sequi dicta nostrum ipsa, et amet perferendis inventore eos? Harum, modi ipsam? Nisi, dolorem voluptatibus.'
    }
  ]

  function handleClick () {
    router.push('/compose/deveet')
  }

  if (!user) return <PageLoader />

  return (
    <>
      <Header />
      <Container>
        <Timeline timeline={timeline} />
      </Container>
      <FloatButton
        iconName='feather'
        bgColor='#0099ff'
        onClick={handleClick}
      />
      <Navbar />
    </>
  )
}
