import Icon from '../Icon'

import styles from './styles.module.css'

export default function IconButton ({ iconName, ...props }) {
  return (
    <button className={styles.btn} {...props}>
      <Icon iconName={iconName} />
    </button>
  )
}
