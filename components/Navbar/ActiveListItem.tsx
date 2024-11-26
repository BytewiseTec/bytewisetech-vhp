'use client'

import { usePathname, useRouter } from 'next/navigation'

interface ActiveListItemProps {
  children: React.ReactNode
  path: string
  clickable?: boolean
  className?: string
}

const ActiveListItem: React.FC<ActiveListItemProps> = ({ children, path, clickable, className }) => {
  const pathName = usePathname()
  const router = useRouter()

  const isActive = (thisPathName: string) => {
    return pathName === thisPathName
  }

  const handleClick = () => {
    if (clickable) {
      router.push(path)
    }
  }

  return (
    <li onClick={handleClick} className={`${isActive(path) ? 'active' : ''} ${className}`}>
      {children}
    </li>
  )
}

export default ActiveListItem
