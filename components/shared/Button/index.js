import Icon from '../Icon'
import Spinner from '../Spinner'

import styles from './styles.module.css'

export default function Button ({ children, customeStyles, iconName, isDisabled, isLoading, handleCLick }) {
  let className = `${customeStyles} ${styles.btn} ${iconName ? styles.btnWithIcon : ''}`

  if (isDisabled) className = `${className} ${styles.isDisabled}`

  if (isLoading) className = `${className} ${styles.isLoading}`

  if (iconName) {
    return (
      <button
        className={className}
        disabled={isDisabled}
        onClick={handleCLick}
      >
        {
          isLoading
            ? <Spinner customeStyles={customeStyles} />
            : <>
                <div className={styles.wrapper}>
                  <Icon iconName={iconName} size='20' />
                </div>
                {children}
              </>
        }
      </button>
    )
  }

  return (
    <button
      className={className}
      disabled={isDisabled}
      onClick={handleCLick}
    >
      {
        isLoading
          ? <Spinner customeStyles={customeStyles} />
          : children
      }
    </button>
  )
}
