'use client'

import Image from 'next/image'

import IconBookmark from '../../public/assets/images/icons/icon_bookmark.svg'

export const AddToBookmarks = () => {
  return (
    <a
      href="#!"
    >
      <Image src={IconBookmark} alt="Bookmark Chat" />Bookmark
    </a>
  )
}

