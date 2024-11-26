import { GET_SERVICES, ServicesQuery } from './query'
import Link from 'next/link'
import { GET_LINKS, HeaderLinksQuery } from '../Navbar/query'
import Image from 'next/image'
import { query } from '@/app/ApolloClient'

export default async function Services() {
  const { data: servicesData, error } = await query<ServicesQuery>({ query: GET_SERVICES, variables: { limit: 6 } })
  const { data: linksCollection } = await query<HeaderLinksQuery>({ query: GET_LINKS })
  const { services: servicesLink } = linksCollection?.links.header || {}

  
  if (error) return <div>Error loading services</div>

  if (!servicesData || !servicesData.serviceCollection.items.length) {
    return <div>No services available</div>
  }

  const services = servicesData.serviceCollection.items

  return (
    <section className="service_section pt-175 pb-80 bg-light section_decoration xb-hidden">
      <div className="container">
        <div className="heading_block text-center">
          <div
            className="heading_focus_text has_underline d-inline-flex"
            style={{
              backgroundImage: 'url(\'/assets/images/shapes/shape_title_under_line.svg\')'
            }}
          >
            Our Services
          </div>
          <h2 className="heading_text mb-0">
            How We Can <mark>Help</mark> You
          </h2>
        </div>

        <div className="row">
          {services.map((service) => (
            <div className="col-lg-4" key={service._id}>
              <div className="service_block_2">
                <div className="service_icon">
                <Image width={62} height={62} src={service.icon?.url ||'/assets/images/default_icon.svg'} alt="Tech Service icon"/>
                </div>
                <h3 className="service_title">
                  <Link href={`${servicesLink.href}/${service?.slug}`}>
                    {service.name}
                  </Link>
                </h3>
                <ul className="icon_list unordered_list_block">
                  {service.areasjson?.map((detail, index) => (
                    <li key={index}>
                      <span className="icon_list_icon">
                        <i className="fa-regular fa-circle-dot"></i>
                      </span>
                      <span className="icon_list_text">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="decoration_item shape_image_1">
        <img src="/assets/images/shapes/shape_line_5.svg" alt="Bytewise Tech Shape" />
      </div>
      <div className="decoration_item shape_image_2">
        <img src="/assets/images/shapes/shape_line_6.svg" alt="Bytewise Tech Shape" />
      </div>
      <div className="decoration_item shape_image_3">
        <img src="/assets/images/shapes/shape_space_1.svg" alt="Bytewise Tech Shape" />
      </div>
      <div className="decoration_item shape_image_4">
        <Image src="/assets/images/shapes/shape_angle_1.webp" width={1061} height={1456} alt="Bytewise Tech Shape Angle" />
      </div>
      <div className="decoration_item shape_image_5">
        <Image src="/assets/images/shapes/shape_angle_2.webp" width={1062} height={1080} alt="Bytewise Tech Shape Angle" />
      </div>
    </section>
  )
}