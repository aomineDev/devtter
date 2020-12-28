import Image from 'next/image'

export default function Icon ({ iconName, width, height }) {
  const defaultSize = '22'

  return (
    <Image
      src={`/icons/${iconName}.svg`}
      width={width || defaultSize}
      height={height || defaultSize}
      alt={iconName}
    />
  )
}
