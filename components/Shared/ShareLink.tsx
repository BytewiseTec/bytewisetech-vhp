'use client'

import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'

interface ShareLinkProps {
  to: 'facebook' | 'twitter' | 'linkedin' | 'x';
}

export const ShareLink: React.FC<ShareLinkProps> = ({ to }) => {
  if (to === 'facebook') {
    return (
      <a className="rounded-circle facebook" href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`} target="_blank" rel="noreferrer" title="Share on Facebook">
        <FaFacebookF color='#3b5998' />
      </a>
    )
  }
  
  if (to === 'twitter') {
    return (
      <a className="rounded-circle twitter" href={`https://twitter.com/intent/tweet?url=${window.location.href}`} target="_blank" rel="noreferrer" title="Share on X">
        <FaXTwitter color='black' />
      </a>
    )
  }

  if (to === 'linkedin') {
    return (
      <a className="rounded-circle linkedin" href={`https://www.linkedin.com/shareArticle?url=${window.location.href}`} target="_blank" rel="noreferrer" title="Share on LinkedIn">
        <FaLinkedinIn color='#0077b5' />
      </a>
    )
  }

  return null
}