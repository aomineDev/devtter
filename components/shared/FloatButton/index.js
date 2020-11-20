import Icon from '../Icon'

import styles from './styles.module.css'

export default function FloatButton ({ iconName, bgColor, handleCLick }) {
  return (
    <button
      className={styles.floatBtn}
      style={{ backgroundColor: bgColor || 'black' }}
      onClick={handleCLick}
    >
      <Icon iconName={iconName} />
    </button>
  )
}
