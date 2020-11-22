import Image from 'next/image'

export default function Navbar ({ iconName, size }) {
  return (
    <Image
      src={`/icons/${iconName}.svg`}
      width={size || 22}
      height={size || 22}
      alt={iconName}
    />
  )
}
