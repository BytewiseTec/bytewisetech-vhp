import { Metadata } from 'next'
import Image, { StaticImageData } from 'next/image'
import Script from 'next/script'

import PageBanner from '@/components/PageBanner'
import generateStructuredData from '@/utils/structured-data'
import AboutFunFacts from '@/components/AboutFunFacts'

import { query } from '../ApolloClient'
import IconCheck2 from '../../public/assets/images/icons/icon_check_2.svg'
import IconLeaf from '../../public/assets/images/icons/icon_leaf.svg'
import IconBox from '../../public/assets/images/icons/icon_box.svg'
import IconReceiptAdd from '../../public/assets/images/icons/icon_receipt_add.svg'
import IconMonitor from '../../public/assets/images/icons/icon_monitor.svg'
import IconMicroscope from '../../public/assets/images/icons/icon_microscope.svg'
import BetterServices from '../../public/assets/images/about/better-services.jpg'
import IconClock from '../../public/assets/images/icons/icon_clock.svg'
import IconDartBoard2 from '../../public/assets/images/icons/icon_dart_board_2.svg'
import IconTarget from '../../public/assets/images/icons/icon_target.svg'



import { AboutQuery, GET_ABOUT } from './query'

const tileIcons: Record<string, StaticImageData> = {
  'icon_clock.svg': IconClock,
  'icon_dart_board_2.svg': IconDartBoard2,
  'icon_target.svg': IconTarget,
}

const whyUsImages: Record<string, StaticImageData> = {
  'icon_check_2.svg': IconCheck2,
  'icon_leaf.svg': IconLeaf,
  'icon_box.svg': IconBox,
  'icon_receipt_add.svg': IconReceiptAdd,
  'icon_monitor.svg': IconMonitor,
  'icon_microscope.svg': IconMicroscope,
}

export const metadata: Metadata = {
  title: 'Our Story & Mission',
  description: 'Learn about Bytewise Technologies, a leader in custom software development. Discover our mission, our team, and why we are the trusted choice for AI & web solutions.',
  keywords: 'Bytewise Technologies About Us, Custom Software Development Company, hire app developers, dallas app development company, best software companies in vancouve, best software development company in vancouver, web development toronto, best software companies in toronto, web development company in toronto, web development firm toronto, best software engineering companies in toronto',
  authors: { name: 'Bytewise Technologies', url: 'https://bytewisetechnologies.com' },
  openGraph: {
    locale: 'en_US',
    type: 'website',
    title: 'Our Story & Mission',
    description: 'Learn about Bytewise Technologies, a leader in custom software development. Discover our mission, our team, and why we are the trusted choice for AI & web solutions.',
    url: 'https://bytewisetechnologies.com/about',
    siteName: 'Bytewise Technologies',
  },
  alternates: {
    canonical: 'https://bytewisetechnologies.com/about',
  }
}

export default async function AboutPage() {
  const { data: aboutData } = await query<AboutQuery>({
    query: GET_ABOUT
  })

  const { page: about } = aboutData

  const jsonLd = generateStructuredData([
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://bytewisetechnologies.com/#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://bytewisetechnologies.com/' },
        { '@type': 'ListItem', position: 2, name: 'About us' },
      ],
    },
    {
      '@type': 'AboutPage',
      '@id': 'https://bytewisetechnologies.com/#about',
      name: 'About us',
      description: 'We are a team of professionals who are passionate about what we do. We are here to help you grow your business.',
      breadcrumb: 'https://bytewisetechnologies.com/#breadcrumb',
      inLanguage: 'en-US',
      potentialAction: [
        {
          '@type': 'ReadAction',
          target: ['https://bytewisetechnologies.com/about'],
        },
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
        title="About us"
        breadcrumb={[
          { name: 'Home', url: '/' },
          { name: 'About us' },
        ]}
      />

      <section className="intro_about_section section_space bg-light">
        <div className="container">
          <div className="heading_block mb-0 mt-0 ms-5 me-5">
            <div className="row justify-content-lg-between g-1 ">
              <div className="col-lg-6">
                <h2 className="heading_text mb-0">
                  {about.headingsections}
                </h2>
              </div>
              <div className="col-lg-6">
                <p className="heading_description mb-0">
                  {about.sections}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="policy_section bg-light">
        <div className="container">
          <div className="row">
            {about?.tiles?.map((item, index) => {
              return (
                <div className="col-lg-4 mb-4" key={index}>
                  <div className="iconbox_block">
                    <div className="iconbox_icon">
                      {item.icon && item.title && (
                        <Image src={tileIcons[item.icon]} alt={item.title} />
                      )}
                    </div>
                    <div className="iconbox_content">
                      <h3 className="iconbox_title">{item.title}</h3>
                      <p className="mb-0">{item.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <AboutFunFacts />
        </div>
      </section>

      <section className="service_section section_space bg-light">
        <div className="container">
          <div className="row align-items-center justify-content-lg-between">
            <div className="col-lg-6">
              <div className="image_wrap">
                <Image src={BetterServices} alt="Bytewise Tech - About Image" />
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
                    Empowering Your Success, Every Step
                  </h2>
                </div>
                <ul className="service_facilities_group unordered_list">
                  {about.whyUs.map((item, index) =>
                    <li key={index}>
                      <a className="iconbox_block layout_icon_left" href="#">
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
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}