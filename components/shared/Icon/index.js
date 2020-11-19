import Image from 'next/image'

export default function Navbar ({ iconName, size }) {
  return (
    <Image
      src={`/icons/${iconName}.svg`}
      width={size || 24}
      height={size || 24}
      alt={iconName}
    />
  )
}
