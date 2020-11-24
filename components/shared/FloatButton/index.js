import Icon from '../Icon'

import styles from './styles.module.css'

export default function FloatButton ({ bgColor, iconName, iconWidth, iconHeight, handleCLick }) {
  const finalBgColor = bgColor || 'transparent'
  const className = `${styles.floatBtn} ${styles[finalBgColor]}`

  return (
    <button
      className={className}
      onClick={handleCLick}
    >
      <Icon
        iconName={iconName}
        width={iconWidth}
        height={iconHeight}
      />
    </button>
  )
}
