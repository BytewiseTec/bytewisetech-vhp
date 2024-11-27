'use client'

import { INTERNAL_EMAIL_PARAM, INTERNAL_TRAFFIC_COOKIE_NAME } from '@/utils/constants'
import { hasCookie, triggerInternalTrafficPrompt } from '@/utils/helpers'
import { GoogleTagManager } from '@next/third-parties/google'
import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

const InternalCookieSetter = () => {
  const searchParams = useSearchParams()
 
  const email = searchParams.get(INTERNAL_EMAIL_PARAM)

  useEffect(() => {
    if (email && !hasCookie(INTERNAL_TRAFFIC_COOKIE_NAME)) {
      triggerInternalTrafficPrompt()
    }
  }, [email])

  return (
    <GoogleTagManager
      dataLayer={{
        ...(hasCookie(INTERNAL_TRAFFIC_COOKIE_NAME) && { traffic_type: 'internal' }),
      }}
      gtmId="GTM-K4SHD7J6"
    />
  )
}

export default InternalCookieSetter
