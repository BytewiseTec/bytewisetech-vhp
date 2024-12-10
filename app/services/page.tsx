import { GET_SERVICES, ServicesQuery } from './query'
import { query } from '../ApolloClient'
import Link from 'next/link'
import { Metadata } from 'next'
import { PiArrowUpRightBold } from 'react-icons/pi'


import ServiceImage from '../../public/assets/images/services/service_image_8.webp'
import AboutImage from '../../public/assets/images/about/about_image_5.webp'
import IconCheck2 from '../../public/assets/images/icons/icon_check_2.svg'
import IconLeaf from '../../public/assets/images/icons/icon_leaf.svg'
import IconBox from '../../public/assets/images/icons/icon_box.svg'
import IconReceiptAdd from '../../public/assets/images/icons/icon_receipt_add.svg'
import IconMonitor from '../../public/assets/images/icons/icon_monitor.svg'
import IconMicroscope from '../../public/assets/images/icons/icon_microscope.svg'
import Image from 'next/image'
import PageBanner from '../../components/PageBanner'

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
  const { data, loading, error } = await query<ServicesQuery>({
    query:GET_SERVICES
  })

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error loading services: {error.message}</div>
  if (!data || !data.serviceCollection.items.length) {
    return <div>No service available</div>
  }
  return (
    <>
      <PageBanner title="Services" />

      <nav aria-label="breadcrumb" className="bg-light">
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link href="/">Home</Link></li>
            <li className="breadcrumb-item active" aria-current="page">Services</li>
          </ol>
        </div>
      </nav>

      <section className="about_section section_space bg-light">
        <div className="container">
          <div className="row align-items-center justify-content-lg-between">
            <div className="col-lg-5 order-lg-last">
              <div className="team_cartoon_image">
                <Image src={ServiceImage} alt="Service Cartoon Image - Bytewise Tech - About Image" />
              </div>
            </div>
            <div className="col-lg-5">
              <div className="about_content">
                <div className="heading_block">
                  <div className="heading_focus_text">
                    We Are
                    <span className="badge bg-secondary text-white">IT Guidance</span>
                  </div>
                  <h2 className="heading_text">
                    Tailored IT Solutions for Your Success
                  </h2>
                  <p className="heading_description mb-0">
                    we understand that every business is unique, with its own set of challenges, goals, and aspirations. That&apos;s why we offer tailored IT solutions designed.
                  </p>
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
            {data.serviceCollection.items.map((service) => {
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
                <Image src={AboutImage} alt="Bytewise Tech - About Image" />
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
                  <li>
                    <a className="iconbox_block layout_icon_left" href="#!">
                      <span className="iconbox_icon">
                        <Image src={IconCheck2} alt="Check SVG Icon" />
                      </span>
                      <span className="iconbox_content">
                        <strong className="iconbox_title mb-0">Quality Comes First</strong>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a className="iconbox_block layout_icon_left" href="#">
                      <span className="iconbox_icon">
                        <Image src={IconLeaf} alt="Leaf SVG Icon" />
                      </span>
                      <span className="iconbox_content">
                        <strong className="iconbox_title mb-0">Flexible Cooperation</strong>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a className="iconbox_block layout_icon_left" href="#">
                      <span className="iconbox_icon">
                        <Image src={IconBox} alt="Box SVG Icon" />
                      </span>
                      <span className="iconbox_content">
                        <strong className="iconbox_title mb-0">On-time Delivery</strong>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a className="iconbox_block layout_icon_left" href="#">
                      <span className="iconbox_icon">
                        <Image src={IconReceiptAdd} alt="Receipt Add SVG Icon" />
                      </span>
                      <span className="iconbox_content">
                        <strong className="iconbox_title mb-0">Transparent Costs</strong>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a className="iconbox_block layout_icon_left" href="#">
                      <span className="iconbox_icon">
                        <Image src={IconMonitor} alt="Monitor SVG Icon" />
                      </span>
                      <span className="iconbox_content">
                        <strong className="iconbox_title mb-0">Qualified Developers</strong>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a className="iconbox_block layout_icon_left" href="#">
                      <span className="iconbox_icon">
                        <Image src={IconMicroscope} alt="Microscope SVG Icon" />
                      </span>
                      <span className="iconbox_content">
                        <strong className="iconbox_title mb-0">Quick Scale-up</strong>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
