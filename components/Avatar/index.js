import styles from './styles.module.css'

export default function Avatar ({ size, src }) {
  const defaultSize = size || '49'

  return (
    <img
      src={src}
      alt='avatar'
      className={styles.img}
      width={defaultSize}
      height={defaultSize}
    />
  )
}
