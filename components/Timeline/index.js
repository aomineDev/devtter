import Deveet from '../Deveet'
import DeveetMask from '../Deveet/mask'

export default function Timeline ({ timeline, isLoading }) {
  if (isLoading) {
    return (
      <>
        {[1, 2, 3].map(e => <DeveetMask key={e} />)}
      </>
    )
  }

  return (
    <>
      {timeline.map(({ id, displayName, avatar, content }) => (
        <Deveet
          key={id}
          displayName={displayName}
          avatar={avatar}
          content={content}
          id={id}
        />
      ))}
    </>
  )
}
