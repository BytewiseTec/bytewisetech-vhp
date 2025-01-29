import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa6'

import {
  BYTEWISE_EMAIL_REGEX,
  CLIENT_ENCRYPTION_SALT,
  DEFAULT_COOKIE_EXPIRATION_DAYS,
  INTERNAL_TRAFFIC_COOKIE_NAME,
} from './constants'

export const padWithZeros = (num: number, size: number): string => {
  let s = num + ''
  while (s.length < size) s = '0' + s
  return s
}

export const getSocialMediaIcon = (url: string) => {
  if (url.includes('facebook.com')) return FaFacebookF
  if (url.includes('github.com')) return FaGithub
  if (url.includes('linkedin.com')) return FaLinkedinIn
  if (url.includes('twitter.com')) return FaTwitter
  if (url.includes('instagram.com')) return FaInstagram
  if (url.includes('youtube.com')) return FaYoutube

  return null
}

export const getSocialMediaName = (url: string) => {
  if (url.includes('facebook.com')) return 'facebook'
  if (url.includes('github.com')) return 'github'
  if (url.includes('linkedin.com')) return 'linkedin'
  if (url.includes('twitter.com')) return 'twitter'
  if (url.includes('instagram.com')) return 'instagram'
  if (url.includes('youtube.com')) return 'youtube'

  return null
}

export const triggerInternalTrafficPrompt = async () => {
  if (isSSR()) {
    throw new Error('This function should only be called in the browser')
  }

  const email = window.prompt('Please enter your Bytewise email:')?.toLowerCase() || ''

  // Check that email address is valid
  const regex = BYTEWISE_EMAIL_REGEX
  if (!regex.test(email)) {
    // eslint-disable-next-line no-alert
    window.alert('Incorrect email address, please try again.')
    triggerInternalTrafficPrompt()
    return
  }

  const encryptedEmail = await encryptStringBrowser(email, CLIENT_ENCRYPTION_SALT)
  const cookieValue = {
    email,
    encryptedEmail,
  }

  createCookie(INTERNAL_TRAFFIC_COOKIE_NAME, JSON.stringify(cookieValue))

  // Reload page to initiate datalayer with updated cookie value
  window.location.reload()
}

export const encryptStringBrowser = async (string: string, salt: string) => {
  if (isSSR()) {
    throw new Error('This function should only be called in the browser')
  }

  const encoder = new TextEncoder()
  const data = encoder.encode(`${string}${salt}`)

  const hash = await crypto.subtle.digest('SHA-256', data)

  // Convert hash to hexadecimal string
  const hashHex = Array.from(new Uint8Array(hash)).map((int) => int.toString(16).padStart(2, '0')).join('')

  return hashHex
}

export const createCookie = (
  cookieName: string,
  cookieValue: string,
  daysUntilExpiration = DEFAULT_COOKIE_EXPIRATION_DAYS,
) => {
  const expirationDate = new Date()
  expirationDate.setTime(expirationDate.getTime() + (daysUntilExpiration * 24 * 60 * 60 * 1000))
  const cookieString = `${encodeURIComponent(cookieName)}=${encodeURIComponent(cookieValue)}; expires=${expirationDate.toUTCString()}; path=/; domain=${window.location.hostname}`
  document.cookie = cookieString
}

export const getCookie = (name: string) => {
  if (isSSR()) {
    throw new Error('This function should only be called in the browser')
  }

  const cookieName = `${encodeURIComponent(name)}=`
  const cookies = document.cookie.split(';')

  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i]
    while (cookie.charAt(0) === ' ') cookie = cookie.substring(1)
    if (cookie.indexOf(cookieName) === 0) return cookie.substring(cookieName.length, cookie.length)
  }

  return null
}

export const hasCookie = (name: string) => !!getCookie(name)?.length

export const isSSR = () => typeof window === 'undefined'