'use client'

import Link from 'next/link'
import Image from 'next/image'
import { PiArrowUpRightBold } from 'react-icons/pi'

interface Service {
  _id: string
  name: string
  slug: string |String
  heading?: string
  heading2?: string
  banner?: {
    url: string
    width: number
    height: number
    title: string
  }
}

export default function FeaturedServices({ services }: { services: Service[] }) {
  return (
    <section className="service_section main-div ">
      <div className="container">
        <div className="heading_block text-center">
          <h2 className="heading_text mb-0">Featured Services</h2>
        </div>
        <div className="columns_container">
          {services.map((service) => (
            <div className="columns_item" key={service._id}>
              <div className="service_block">
                <div className="service_image">
                  {service.banner && (
                    <Image
                      width={service.banner.width}
                      height={service.banner.height}
                      src={service.banner.url}
                      alt={service.banner.title}
                    />
                  )}
                </div>
                <div className="service_content ">
                  <h3 className="service_title">
                    <Link href={`/services/${service.slug}`} title={service.name}>
                      {service.name}
                    </Link>
                  </h3>
                  <div className="links_wrapper">
                    <ul className="category_btns_group unordered_list">
                      <li>
                        <a>{service.heading || 'Growth'}</a>
                      </li>
                      <li>
                        <a>{service.heading2 || 'Marketing'}</a>
                      </li>
                    </ul>
                    <Link
                      className="icon_block"
                      href={`/services/${service.slug}`}
                      title={service.name}
                    >
                      <PiArrowUpRightBold size={20} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
