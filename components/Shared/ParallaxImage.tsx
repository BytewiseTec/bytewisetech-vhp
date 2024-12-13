'use client'

import Image, { ImageProps } from 'next/image'
import { FC, useEffect, useRef, useState } from 'react'

interface ParallaxImageProps extends ImageProps {}

const ParallaxImage: FC<ParallaxImageProps> = ({ src, alt, ...rest }) => {
  const imageRef = useRef<HTMLImageElement | null>(null)
  const [offsetY, setOffsetY] = useState(0)
  const [multiplier, setMultiplier] = useState(0.3)

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    if (imageRef.current) {
      const { height } = imageRef.current.getBoundingClientRect()
      setMultiplier(height / (window.innerHeight + (Number(rest.height) + height)))
    }
  }, [rest.height])

  return (
    <div className="parallax-container">
      <Image ref={imageRef} src={src} alt={alt} {...rest} style={{ transform: `translateY(-${offsetY * multiplier}px)` }} />
    </div>
  )
}

export default ParallaxImage
