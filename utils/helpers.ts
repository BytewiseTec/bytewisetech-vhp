export const padWithZeros = (num: number, size: number): string => {
  let s = num + ''
  while (s.length < size) s = '0' + s
  return s
}

export const getSocialMediaIcon = (url: string) => {
  if (url.includes('facebook.com')) return 'fa-facebook-f'
  if (url.includes('github.com')) return 'fa-github'
  if (url.includes('linkedin.com')) return 'fa-linkedin-in'
  if (url.includes('twitter.com')) return 'fa-twitter'
  if (url.includes('instagram.com')) return 'fa-instagram'
  if (url.includes('youtube.com')) return 'fa-youtube'

  return null
}
