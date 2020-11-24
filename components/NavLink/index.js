import { useRouter } from 'next/router'

import Icon from 'components/shared/Icon'
import Link from 'next/link'

import styles from './styles.module.css'

export default function NavLink ({ href, iconName, iconWidth, iconHeight }) {
  const router = useRouter()

  let className = styles.link

  if (router.pathname === href) className = `${className} ${styles.active}`

  return (
    <Link href={href}>
      <a className={className}>
        <Icon
          iconName={iconName}
          width={iconWidth}
          height={iconHeight}
        />
      </a>
    </Link>
  )
}
