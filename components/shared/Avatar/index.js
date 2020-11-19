import styles from './styles.module.css'

export default function Avatar ({ size, ...props }) {
  return (
    <img
      alt='avatar'
      className={styles.img}
      width={size || '49'}
      height={size || '49'}
      {...props}
    />
  )
}
