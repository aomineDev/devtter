import styles from './styles.module.css'

export default function Avatar ({ size, ...props }) {
  const defaultSize = size || '49'

  return (
    <img
      alt='avatar'
      className={styles.img}
      width={defaultSize}
      height={defaultSize}
      {...props}
    />
  )
}
