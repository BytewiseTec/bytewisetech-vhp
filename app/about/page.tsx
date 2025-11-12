import { Metadata } from 'next'
import Image, { StaticImageData } from 'next/image'
import Script from 'next/script'

import CertificateSwiper from '@/components/CertificateSlider/CertificateSwiper'
import PageBanner from '@/components/PageBanner'
import generateStructuredData from '@/utils/structured-data'
import AboutFunFacts from '@/components/AboutFunFacts'
import CardSwiper from '@/components/EffectiveCard/CardSwiper'
import WorkSpace from '@/components/WorkSpace/WorkSpace'

import TeamSwiper from '../../components/TeamSwiper/TeamSwiper'
import { query } from '../ApolloClient'
import IconCheck2 from '../../public/assets/images/icons/icon_check_2.svg'
import IconLeaf from '../../public/assets/images/icons/icon_leaf.svg'
import IconBox from '../../public/assets/images/icons/icon_box.svg'
import IconReceiptAdd from '../../public/assets/images/icons/icon_receipt_add.svg'
import IconMonitor from '../../public/assets/images/icons/icon_monitor.svg'
import IconMicroscope from '../../public/assets/images/icons/icon_microscope.svg'
// import BetterServices from '../../public/assets/images/about/better-services.jpg'
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
      <section className="intro_about_section p-4 p-md-5 bg-light">
        <div className="container">
          <div className="heading_block text-center">
            <h1 className="display-5 mb-3">{about.headingsections}</h1>
            <p className="fs-5">{about.sections}</p>
          </div>
        </div>
      </section>

      <section className="policy_section bg-light">
        <div className="container">
          <div className="row">
            {about?.tiles?.map((item, index) => (
              <div className="col-12 col-md-6 col-lg-4 mb-4" key={index}>
                <div className="iconbox_block text-center text-md-start">
                  <div className="iconbox_icon mb-3">
                    {item.icon && item.title && (
                      <Image src={tileIcons[item.icon]} alt={item.title} width={50} height={50} />
                    )}
                  </div>
                  <div className="iconbox_content">
                    <h3 className="iconbox_title">{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <AboutFunFacts />
        </div>
      </section>



      <section className="mb-5 py-lg-5">
        <div className="container">
          <WorkSpace />
        </div>
      </section>

      <section className="me-5 ms-5 py-lg-5 ">
        <div className="text-center mb-5">
          <h1 className="text-dark mb-3">
            Our Valued Clients
          </h1>
        </div>
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
              <div className="pe-lg-4">
                <h2 className="h1 fw-bold text-dark mb-4">
                  People Who Trust Bytewise
                </h2>
                <p className="fs-5 lh-lg  mb-4" style={{ textAlign: 'justify' }}>
                  We&apos;re lucky to team up with amazing people and brands who share our passion for innovation.
                  Their trust inspires us to deliver our best, every project, every time.
                </p>
                <div className="d-flex flex-wrap gap-3">
                  <span className="badge bg-light text-primary fs-6 px-3 py-2">
                    ✓ 99% Satisfaction
                  </span>
                  <span className="badge bg-light text-primary fs-6 px-3 py-2">
                    ✓ 50+ Countries
                  </span>
                  <span className="badge bg-light text-primary fs-6 px-3 py-2">
                    ✓ 24/7 Support
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 col-sm-12  ">
              <div className="d-flex justify-content-center align-items-center ">
                <CardSwiper />
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="team_section py-lg-5 mt-5">
        <h1 className="text-center text-dark mb-4">Our Leadership Team</h1>
        <div className="container">
          <TeamSwiper />
        </div>
      </section>




      {/* <section className="service_section section_space bg-light">
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
      </section> */}

      <section className="team_section pb-5">
        <h1 className='text-center text-dark p-5'>Awards & Certifications</h1>
        <div className="container">
          <CertificateSwiper />
        </div>
      </section>

    </>

  )
}