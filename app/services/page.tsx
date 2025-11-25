import Link from 'next/link'
import { Metadata } from 'next'
import { PiArrowUpRightBold } from 'react-icons/pi'
import Image, { StaticImageData } from 'next/image'
import { Fragment } from 'react'
import Script from 'next/script'

import generateStructuredData from '@/utils/structured-data'
import FieldsSlider from '@/components/FieldsSlider'
import FeaturedServices from '@/components/FeaturedServices'

import { query } from '../ApolloClient'
import IconCheck2 from '../../public/assets/images/icons/icon_check_2.svg'
import IconLeaf from '../../public/assets/images/icons/icon_leaf.svg'
import IconBox from '../../public/assets/images/icons/icon_box.svg'
import IconReceiptAdd from '../../public/assets/images/icons/icon_receipt_add.svg'
import IconMonitor from '../../public/assets/images/icons/icon_monitor.svg'
import IconMicroscope from '../../public/assets/images/icons/icon_microscope.svg'
import PageBanner from '../../components/PageBanner'
import { GET_FIELDS, FieldsLinksQuery } from '../../components/Navbar/query'

import { GET_SERVICES, GET_SERVICES_PAGE, ServicesPageQuery, ServicesQuery } from './query'
const whyUsImages: Record<string, StaticImageData> = {
  'icon_check_2.svg': IconCheck2,
  'icon_leaf.svg': IconLeaf,
  'icon_box.svg': IconBox,
  'icon_receipt_add.svg': IconReceiptAdd,
  'icon_monitor.svg': IconMonitor,
  'icon_microscope.svg': IconMicroscope,
}

const cardData = [
  {
    title: 'Built with Insight, Not Just Code',
    description:
      'We speak the language of your business. Our solutions are informed by deep sector knowledge, ensuring they resonate with your customers and streamline your unique operational realities.',
  },
  {
    title: 'Future-Leading Technology',
    description:
      'We build with a modern tech stack designed for longevity and performance. This forward-thinking approach gives you a competitive edge.',
  },
  {
    title: 'Security-Focused Development',
    description:
      'Your data and your customers trust are paramount. We engineer resilience and proactive vigilance into your products DNA, creating a foundation of unshakable security.',
  },
  {
    title: 'Grow Without Limits',
    description:
      'Our scalable solutions are engineered to expand effortlessly with your business, so your growth never becomes a technical bottleneck.',
  },
  {
    title: 'Collaborative Process',
    description:
      'We work shoulder-to-shoulder with you, ensuring alignment at every step and a final product that perfectly captures your ambition.',
  },
  {
    title: 'Your Success, Our Ongoing Mission',
    description:
      'Our partnership extends far beyond launch. We provide relentless support and optimization to ensure your digital asset remains a high-performance engine for your business.',
  },
]


export const metadata: Metadata = {
  title: 'Services',
  description: 'Here are our custom software development services, from AI agents & web apps to UI/UX design. Find your end-to-end web and app development solution today.',
  keywords: 'agile methodology in web development, custom software development services,web and app development services,services in web development,ui ux design services, ai app development services,',
  authors: { name: 'Bytewise Technologies', url: 'https://bytewisetechnologies.com' },
  openGraph: {
    locale: 'en_US',
    type: 'website',
    title: 'Services',
    description: 'Here are our custom software development services, from AI agents & web apps to UI/UX design. Find your end-to-end web and app development solution today.',
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

  const { data: fieldsCollection } = await query<FieldsLinksQuery>({ query: GET_FIELDS })
  const fields = fieldsCollection?.fieldCollection?.items || []

  const { page: servicesPage } = servicesPageData || {}

  const services = servicesData.serviceCollection.items || []

  const jsonLd = generateStructuredData([
    {
      '@type': 'BreadcrumbList',
      // '@id': 'https://bytewisetechnologies.com/#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://bytewisetechnologies.com/' },
        { '@type': 'ListItem', position: 2, name: 'Services' },
      ],
    }
  ])
  return (
    <>
      <Script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        id="structured-data"
      />

      <PageBanner
        title={servicesPage.title}
      breadcrumb={[
        { name: 'Home', url: '/' },
        { name: servicesPage.title },
      ]}
      />
      <section className="hero-section position-relative custom-gradient text-white d-flex align-items-center" style={{ minHeight: '55vh' }}>
        <div className="container text-center  position-relative" style={{ zIndex: 3 }}>
          <h1 className="display-4 text-dark fw-bold pt-5">
            Engineering Your Digital Future, Together
          </h1>
          <p className="lead mb-4 ms-5 fs-4 me-5 text-dark" >
           We transform your complex business challenges into seamless digital experiences and undeniable competitive advantages. Let&apos;s build the software that propels you ahead.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <Link href="/contact" className="btn btn-primary btn-lg mb-5 d-flex align-items-center">
              <span className="btn_label">Get a Consultation</span>
              <span className="btn_icon ">
                <PiArrowUpRightBold size={20} />
              </span>
            </Link>

          </div>
        </div>
      </section>

      <FeaturedServices services={services} />

      <section className='about_section py-5 my-3 '>
        <div className='container'>
          <div className="row flex-column">
            <div className="col-12">
              <div className='about_content text-center'>
                <div className="heading_block">
                  {servicesPage.sections.map((section) => (
                    <Fragment key={section.title}>
                      <h1 className="heading_text ">{section.title}</h1>
                      <div className='px-5'>
                        <p className='text-dark des-padding fs-4 '>{section.description}</p>
                      </div>
                    </Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mb-5 ">
        <div className="row card-padding">
          {cardData.map((card, index) => (
            <div className="col-12 col-sm-6 col-lg-4 card-item" key={index}>
              <div className="p-4 shadow-lg rounded-4 text-light h-100 d-flex flex-column" style={{ backgroundColor: '#020842' }}>
                <h2 className="fw-bold mb-3 text-light">{card.title}</h2>
                <p className="text-light flex-grow-1">{card.description}</p>
                {/* <a href="/about" className="text-white">
                  Learn More <PiArrowUpRightBold size={20} />
                </a> */}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="fields_section section_space bg-light py-5">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <h2 className="display-5 fw-bold mb-3">Our Fields of Expertise</h2>
                <p className="lead  text-dark fs-4">
                  Explore our specialized domains where we excel in delivering exceptional solutions and services
                </p>
            </div>
          </div>
          <div className='px-5'>
            <FieldsSlider fields={fields} />
          </div>
        </div>
      </section>

      <section className="service_section section_space bg-light">
        <div className="container">
          <div className="row align-items-center justify-content-lg-between">
            <div className="col-lg-6">
              <div className="image_wrap">
                {servicesPage.whyUsImage && (
                  <Image className='rounded' width={servicesPage.whyUsImage.width} height={servicesPage.whyUsImage.height} src={servicesPage.whyUsImage.url} alt="Bytewise Tech - About Image" />
                )}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="ps-lg-5">
                <div className="heading_block">
                  {/* <div className="heading_focus_text">
                    <span className="badge bg-secondary text-white">Why Us</span>
                    Better
                  </div> */}
                  <h2 className="heading_text mb-0">
                    A Business-First Approach to Software That Maximizes Your ROI
                   
                  </h2>
                </div>
                <ul className="service_facilities_group unordered_list">
                  {servicesPage.whyUs.map((item, index) => (
                    <li key={index}>
                      <a className="iconbox_block layout_icon_left">
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
              {/* <div className="text-center mt-5">
            <Link className="btn btn-primary btn-lg" href="/contact">
              <span className="btn_label">Discuss Your Project</span>
              <span className="btn_icon ms-2">
                <PiArrowUpRightBold size={20} />
              </span>
            </Link>
          </div> */}
            </div>
          </div>
        </div>
      </section>


    </>
  )
}
