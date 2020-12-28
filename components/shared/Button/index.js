import Icon from '../Icon'
import Spinner from '../Spinner'

import styles from './styles.module.css'

export default function Button ({ children, iconName, bgColor, textColor, isDisabled, isLoading, handleClick }) {
  let btnClassName = `${styles.btn} `

  if (iconName) btnClassName += `${styles.btnWithIcon} `

  if (isDisabled) btnClassName += `${styles.isDisabled} `

  if (isLoading) btnClassName += styles.isLoading

  const finalBgColor = bgColor ? `bg-color-${bgColor}` : 'bg-color-primary'
  const finalTextColor = textColor ? `text-color-${textColor}` : 'text-color-light'

  btnClassName += ` ${styles[finalBgColor]} ${styles[finalTextColor]}`

  function BtnWithIcon () {
    if (!iconName) return false

    return (
      <div className={styles.wrapper}>
        <Icon
          iconName={iconName}
          width='20'
          height='20'
        />
      </div>
    )
  }

  return (
    <button
      className={btnClassName}
      disabled={isDisabled}
      onClick={handleClick}
    >
      {
        isLoading
          ? <Spinner bgColor={bgColor} />
          : <>
              <BtnWithIcon />
              {children}
            </>
      }
    </button>
  )
}
