import Icon from '../Icon'

import styles from './styles.module.css'

export default function IconButton ({ iconName, btnSize, iconWidth, iconHeight, isIconInvert, bgColor, theme, isDisabled, handleClick }) {
  let btnClassName = `${styles.btn} `

  if (isDisabled) btnClassName += `${styles.disabled} `

  if (isIconInvert) btnClassName += styles.invert

  const finalBgColor = `bg-color-${bgColor}` || 'bg-color-transparent'
  const finalTheme = `theme-${theme}` || 'theme-transparent'

  btnClassName += ` ${styles[finalTheme]} ${styles[finalBgColor]}`

  const defaultSize = btnSize || '37'
  const finalSize = `${defaultSize}px`

  return (
    <button
      className={btnClassName}
      onClick={handleClick}
      style={{ width: finalSize, height: finalSize }}
      disabled={isDisabled}
    >
      <Icon
        iconName={iconName}
        width={iconWidth}
        height={iconHeight}
      />
    </button>
  )
}
