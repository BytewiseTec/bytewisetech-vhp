'use client'

import Image, { type StaticImageData } from 'next/image'
import { PiCheckCircleFill } from 'react-icons/pi'

type StaticAssetImage = {
  asset: StaticImageData
  alt: string
}

type PathAssetImage = {
  asset: string
  alt: string
  width: number
  height: number
}

type ScheduleSectionImage = StaticAssetImage | PathAssetImage

const isPathAssetImage = (image: ScheduleSectionImage): image is PathAssetImage =>
  typeof image.asset === 'string'

const resolveImageDimensions = (image: ScheduleSectionImage) => {
  if (isPathAssetImage(image)) {
    const { asset, width, height } = image
    return {
      src: asset,
      width,
      height
    }
  }
  const { asset } = image
  return {
    src: asset,
    width: asset.width,
    height: asset.height
  }
}

type ScheduleSectionProps = {
  eyebrow?: string
  title: string
  description: string
  bullets: string[]
  image?: ScheduleSectionImage
}

export default function ScheduleSection({
  eyebrow,
  title,
  description,
  bullets,
  image
}: ScheduleSectionProps) {
  const resolvedImage = image ? resolveImageDimensions(image) : null

  return (
    <section className="schedule_section section_space">
      <div className="container">
        <div className="row align-items-center schedule_row">
          <div className="col-lg-6">
            <div className="schedule_content">
              {eyebrow && <p className="schedule_eyebrow">{eyebrow}</p>}
              <h2 className="schedule_title">{title}</h2>
              <p className="schedule_description">{description}</p>
              <ul className="schedule_list unordered_list">
                {bullets.map((item, index) => (
                  <li key={index}>
                    <span className="schedule_list_icon">
                      <PiCheckCircleFill size={24} />
                    </span>
                    <span className="schedule_list_text">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {image && resolvedImage && (
            <div className="col-lg-6">
              <div className="schedule_image">
                <Image
                  src={resolvedImage.src}
                  alt={image.alt}
                  width={resolvedImage.width}
                  height={resolvedImage.height}
                  className="w-100 h-auto"
                  priority={false}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

