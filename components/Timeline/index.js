import Deveet from '../Deveet'

export default function Timeline ({ timeline }) {
  return (
    <>
      {timeline.map(({ id, username, avatar, message }) => (
        <Deveet
          key={id}
          username={username}
          avatar={avatar}
          message={message}
          id={id}
        />
      ))}
    </>
  )
}
