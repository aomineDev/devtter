import Icon from '../Icon'

import styles from './styles.module.css'

export default function Button ({ children, styleCustome, iconName, ...props }) {
  const className = `${styleCustome} ${styles.btn}`

  if (iconName) {
    return (
      <button
        className={`${className} ${styles.btnWithIcon}`}
        {...props}
      >
        <div
          className={styles.wrapper}
        >
          <Icon
            iconName={iconName}
            size='20'
          />
        </div>
        {children}
      </button>
    )
  }

  return (
    <button
      className={className}
      {...props}
    >
      {children}
    </button>
  )
}
