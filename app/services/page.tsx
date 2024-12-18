import { GET_SERVICES, GET_SERVICES_PAGE, ServicesPageQuery, ServicesQuery } from './query'
import { query } from '../ApolloClient'
import Link from 'next/link'
import { Metadata } from 'next'
import { PiArrowUpRightBold } from 'react-icons/pi'
import generateStructuredData from '@/utils/structured-data'

import IconCheck2 from '../../public/assets/images/icons/icon_check_2.svg'
import IconLeaf from '../../public/assets/images/icons/icon_leaf.svg'
import IconBox from '../../public/assets/images/icons/icon_box.svg'
import IconReceiptAdd from '../../public/assets/images/icons/icon_receipt_add.svg'
import IconMonitor from '../../public/assets/images/icons/icon_monitor.svg'
import IconMicroscope from '../../public/assets/images/icons/icon_microscope.svg'
import Image, { StaticImageData } from 'next/image'
import PageBanner from '../../components/PageBanner'
import { Fragment } from 'react'

const whyUsImages: Record<string, StaticImageData> = {
  'icon_check_2.svg': IconCheck2,
  'icon_leaf.svg': IconLeaf,
  'icon_box.svg': IconBox,
  'icon_receipt_add.svg': IconReceiptAdd,
  'icon_monitor.svg': IconMonitor,
  'icon_microscope.svg': IconMicroscope,
}

export const metadata: Metadata = {
  title: 'Services - Bytewise Technologies',
  description: 'We offer a wide range of services to help you grow your business. Our services are tailored to your needs and designed to help you succeed.',
  keywords: 'services, range, help, grow, business, tailored, needs, succeed',
  authors: { name: 'Bytewise Technologies', url: 'https://bytewisetechnologies.com' },
  openGraph: {
    locale: 'en_US',
    type: 'website',
    title: 'Services - Bytewise Technologies',
    description: 'We offer a wide range of services to help you grow your business. Our services are tailored to your needs and designed to help you succeed.',
    url: 'https://bytewisetechnologies.com/services',
    siteName: 'Bytewise Technologies',
  },
  alternates: {
    canonical: 'https://bytewisetechnologies.com/services',
  }
}

export default async function ServicesPage() {
  const { data: servicesData } = await query<ServicesQuery>({
    query: GET_SERVICES
  })

  const { data: servicesPageData } = await query<ServicesPageQuery>({
    query: GET_SERVICES_PAGE
  })

  const { page: servicesPage } = servicesPageData || {}

  const services = servicesData.serviceCollection.items || {}

  const jsonLd = generateStructuredData([
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://bytewisetechnologies.com/#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', url: '/' },
        { '@type': 'ListItem', position: 2, name: 'Services' },
      ],
    }
  ])

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageBanner
        title={servicesPage.title}
        breadcrumb={[
          { name: 'Home', url: '/' },
          { name: servicesPage.title },
        ]}
      />

      <section className="about_section section_space bg-light">
        <div className="container">
          <div className="row align-items-center justify-content-lg-between">
            <div className="col-lg-5 order-lg-last">
              <div className="team_cartoon_image">
                {servicesPage.highlightImage && (
                  <Image width={servicesPage.highlightImage.width} height={servicesPage.highlightImage.height} src={servicesPage.highlightImage.url} alt="Service Cartoon Image - Bytewise Tech - About Image" />
                )}
              </div>
            </div>
            <div className="col-lg-5">
              <div className="about_content">
                <div className="heading_block">
                  <div className="heading_focus_text">
                    We Are
                    <span className="badge bg-secondary text-white">IT Guidance</span>
                  </div>
                  {servicesPage.sections.map((section) => (
                    <Fragment key={section.title}>
                      <h2 className="heading_text">
                        {section.title}
                      </h2>
                      <p className="heading_description mb-0">
                        {section.description}
                      </p>
                    </Fragment>
                  ))}
                </div>
                <Link className="btn" href="/contact">
                  <span className="btn_label" data-text="Talk to an Expert">Talk to an Expert</span>
                  <span className="btn_icon">
                    <PiArrowUpRightBold size={20} />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service_section section_space">
        <div className="container">
          <div className="heading_block text-center">
            <div className="heading_focus_text">
              Our
              <span className="badge bg-secondary text-white">Specialize</span>
            </div>
            <h2 className="heading_text mb-0">
              Featured Services
            </h2>
          </div>

          <div className="columns_container">
            {services.map((service) => {
              return (
                <div className="columns_item" key={service._id}>
                  <div className="service_block">
                    <div className="service_image">
                      {service.banner && (
                        <Image width={service.banner.width} height={service.banner.height} src={service.banner.url} alt={service.banner.title} />
                      )}
                    </div>
                    <div className="service_content">
                      <h3 className="service_title">
                        <Link href={`/services/${service.slug}`}>
                          {service.name}
                        </Link>
                      </h3>
                      <div className="links_wrapper">
                        <ul className="category_btns_group unordered_list">
                          <li><a href="#!">{service.heading}</a></li>
                          <li><a href="#!">{service.heading2}</a></li>
                        </ul>
                        <Link className="icon_block" href={`/services/${service.slug}`}>
                          <PiArrowUpRightBold size={20} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="service_section section_space bg-light">
        <div className="container">
          <div className="row align-items-center justify-content-lg-between">
            <div className="col-lg-6">
              <div className="image_wrap">
                {servicesPage.whyUsImage && (
                  <Image width={servicesPage.whyUsImage.width} height={servicesPage.whyUsImage.height} src={servicesPage.whyUsImage.url} alt="Bytewise Tech - About Image" />
                )}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="ps-lg-5">
                <div className="heading_block">
                  <div className="heading_focus_text">
                    <span className="badge bg-secondary text-white">Why Us</span>
                    Better
                  </div>
                  <h2 className="heading_text mb-0">
                    Why Our Services are Better Than Others?
                  </h2>
                </div>
                <ul className="service_facilities_group unordered_list">
                  {servicesPage.whyUs.map((item, index) => (
                    <li key={index}>
                      <a className="iconbox_block layout_icon_left" href="#!">
                        <span className="iconbox_icon">
                          {item.icon && item.title && (
                            <Image src={whyUsImages[item.icon]} alt={item.title} />
                          )}
                        </span>
                        <span className="iconbox_content">
                          <strong className="iconbox_title mb-0">{item.description}</strong>
                        </span>
                      </a>
                    </li> 
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
