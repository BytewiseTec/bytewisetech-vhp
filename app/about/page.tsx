import { AboutQuery, GET_ABOUT } from './query'
import { query } from '../ApolloClient'
import PageBanner from '@/components/PageBanner'
import { Metadata } from 'next'

import BetterServices from '../../public/assets/images/about/better-services.jpg'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About - Bytewise Technologies',
  description: 'We are a team of professionals who are passionate about what we do. We are here to help you grow your business.',
  keywords: 'about, bytewise, technologies, team, professionals, passionate, business, grow',
  authors: { name: 'Bytewise Technologies', url: 'https://bytewisetechnologies.com' },
  openGraph: {
    locale: 'en_US',
    type: 'website',
    title: 'About - Bytewise Technologies',
    description: 'We are a team of professionals who are passionate about what we do. We are here to help you grow your business.',
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

  return (
    <>
      <PageBanner title="About us" />

      <nav aria-label="breadcrumb" className="bg-light">
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link href="/">Home</Link></li>
            <li className="breadcrumb-item active" aria-current="page">About us</li>
          </ol>
        </div>
      </nav>


      <section className="intro_about_section section_space bg-light">
        <div className="container">
          <div className="heading_block mb-0">
            <div className="row justify-content-lg-between">
              <div className="col-lg-4">
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
                      {item.icon && (
                        <Image src={item.icon} width={40} height={40} alt="Icon" />
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
                    Why Our Services are Better Than Others?
                  </h2>
                </div>
                <ul className="service_facilities_group unordered_list">
                  {about.whyUs.map((item, index) =>
                    <li key={index}>
                      <a className="iconbox_block layout_icon_left" href="#">
                        <span className="iconbox_icon">
                          <img src={item.icon} alt="Leaf SVG Icon" />
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