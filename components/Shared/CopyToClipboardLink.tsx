'use client'

import Image from 'next/image'
import { toast, Toaster } from 'sonner'

import IconLink from '../../public/assets/images/icons/icon_link.svg'

export const CopyToClipboardLink = () => {
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      toast.success('Link Copied Successfully.')
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  return (
    <a
      href="#!"
      onClick={(e) => {
        e.preventDefault()
        copyToClipboard()
      }}
    >
      <Image src={IconLink} alt="Icon Link" /> Copy Link
      <Toaster />
    </a>
  )
}
