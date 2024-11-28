'use client'

import { INTERNAL_EMAIL_PARAM, INTERNAL_TRAFFIC_COOKIE_NAME } from '@/utils/constants'
import { hasCookie, isSSR, triggerInternalTrafficPrompt } from '@/utils/helpers'
import { GoogleTagManager } from '@next/third-parties/google'
import { useSearchParams } from 'next/navigation'
import { ComponentType, PropsWithChildren, Suspense, useEffect, useState } from 'react'

const withSuspense = <P extends {}>(Component: ComponentType<P>) => {
  const WithSuspense = (props: PropsWithChildren<P>) => (
    <Suspense>
      <Component {...props} />
    </Suspense>
  )

  return WithSuspense
}

const InternalCookieSetter = () => {
  const [dataLayer, setDataLayer] = useState<Record<string, any>>({})
  const searchParams = useSearchParams()
 
  const email = searchParams.get(INTERNAL_EMAIL_PARAM)

  useEffect(() => {
    if (!isSSR() && email && !hasCookie(INTERNAL_TRAFFIC_COOKIE_NAME)) {
      triggerInternalTrafficPrompt()
    }
  }, [email])

  useEffect(() => {
    if (!isSSR() && hasCookie(INTERNAL_TRAFFIC_COOKIE_NAME)) {
      setDataLayer({ traffic_type: 'internal' })
    }
  }, [])

  return (
    <GoogleTagManager
      dataLayer={dataLayer}
      gtmId="GTM-K4SHD7J6"
    />
  )
}

export default withSuspense(InternalCookieSetter)
