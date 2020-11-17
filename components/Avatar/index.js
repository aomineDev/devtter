import styles from './Avatar.module.css'

export default function Avatar ({ url }) {
  return (
    <img
        // src={url}
      src='https://cnnespanol.cnn.com/wp-content/uploads/2019/12/s_64a163f16ecbb099e52f2f8271f73cbbfcfc9034be4d646f7375e4db1ca6f3d7_1573501883482_ap_19001106049831-1.jpg'
      alt='avatar'
      className={styles.img}
    />
  )
}
