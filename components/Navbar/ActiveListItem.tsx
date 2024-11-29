'use client'

import { usePathname } from 'next/navigation'

interface ActiveListItemProps {
  children: React.ReactNode
  path: string
  clickable?: boolean
  className?: string
}

const ActiveListItem: React.FC<ActiveListItemProps> = ({ children, path, clickable, className }) => {
  const pathName = usePathname()

  const isActive = (thisPathName: string) => {
    return pathName === thisPathName
  }

  return (
    <li className={`${isActive(path) ? 'active' : ''} ${className}`}>
      {children}
    </li>
  )
}

export default ActiveListItem
