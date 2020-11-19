import Icon from '../Icon'

import styles from './styles.module.css'

export default function FloatButton ({ iconName, bgColor, ...props }) {
  return (
    <button
      className={styles.floatBtn}
      style={{ backgroundColor: bgColor || 'black' }}
      {...props}
    >
      <Icon iconName={iconName} />
    </button>
  )
}
