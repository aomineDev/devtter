import Icon from '../Icon'
import Spinner from '../Spinner'

import styles from './styles.module.css'

export default function Button ({ children, customeStyles, iconName, isDisabled, isLoading, handleClick }) {
  const iconClassName = iconName ? styles.btnWithIcon : ''
  const disabledClassName = isDisabled ? styles.isDisabled : ''
  const loadingClassName = isLoading ? styles.isLoading : ''

  const btnClassName = `${customeStyles} ${styles.btn} ${iconClassName} ${disabledClassName} ${loadingClassName}`

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
