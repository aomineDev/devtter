import DeveetMask from '../Deveet/mask'
import NoContent from '../NoContent'
import Deveet from '../Deveet'

export default function Timeline ({ timeline, isLoading }) {
  if (isLoading) return <> {[1, 2, 3].map(e => <DeveetMask key={e} />)} </>

  if (!timeline.length) return <NoContent>Aún no hay deveets.</NoContent>

  return (
    <>
      {timeline.map(({ id, userId, avatar, displayName, content, imageUrl, commentsCount, likesCount, sharedCount, createdAt }) => (
        <Deveet
          key={id}
          id={id}
          userId={userId}
          avatar={avatar}
          displayName={displayName}
          content={content}
          imageUrl={imageUrl}
          commentsCount={commentsCount}
          likesCount={likesCount}
          sharedCount={sharedCount}
          createdAt={createdAt}
        />
      ))}
    </>
  )
}
