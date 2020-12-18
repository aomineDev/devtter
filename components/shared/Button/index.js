import Icon from '../Icon'
import Spinner from '../Spinner'

import styles from './styles.module.css'

export default function Button ({ children, customeStyles, iconName, isDisabled, isLoading, handleClick }) {
  let btnClassName = `${customeStyles} ${styles.btn} `

  if (iconName) btnClassName += `${styles.btnWithIcon} `

  if (isDisabled) btnClassName += `${styles.isDisabled} `

  if (isLoading) btnClassName += styles.isLoading

  function BtnWithIcon () {
    return (
      <>
        {iconName && (
          <div className={styles.wrapper}>
            <Icon
              iconName={iconName}
              width='20'
              height='20'
            />
          </div>
        )}
      </>
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
          ? <Spinner customeStyles={customeStyles} />
          : <>
              <BtnWithIcon />
              {children}
            </>
      }
    </button>
  )
}
