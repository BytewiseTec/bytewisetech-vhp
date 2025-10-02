import { Metadata } from 'next'
import { GoogleMapsEmbed } from '@next/third-parties/google'
import Image, { StaticImageData } from 'next/image'
import Script from 'next/script'

import generateStructuredData from '@/utils/structured-data'

import { query } from '../ApolloClient'
import ContactForm from '../../components/ContactForm'
import PageBanner from '../../components/PageBanner'
import IconCalling2 from '../../public/assets/images/icons/icon_calling_2.svg'
import IconMail3 from '../../public/assets/images/icons/icon_mail_3.svg'
import IconMapMark2 from '../../public/assets/images/icons/icon_map_mark_2.svg'
import IconCalendar2 from '../../public/assets/images/icons/icon_calendar_2.svg'


import { ContactQuery, GET_CONTACT } from './query'

const tileIcons: Record<string, StaticImageData> = {
  'icon_calling_2.svg': IconCalling2,
  'icon_mail_3.svg': IconMail3,
  'icon_map_mark_2.svg': IconMapMark2,
  'icon_calendar_2.svg': IconCalendar2,
}

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Ready to build? Contact Bytewise Technologies for a free consultation on your AI, web, or mobile app project.',
  keywords: 'hire app developers, dallas app development company, best software companies in vancouve, best software development company in vancouver, web development toronto, best software companies in toronto, web development company in toronto, web development firm toronto, best software engineering companies in toronto',
  authors: { name: 'Bytewise Technologies', url: 'https://bytewisetechnologies.com' },
  openGraph: {
    locale: 'en_US',
    type: 'website',
    title: 'Contact',
    description: 'Ready to build? Contact Bytewise Technologies for a free consultation on your AI, web, or mobile app project.',
    url: 'https://bytewisetechnologies.com/contact',
    siteName: 'Bytewise Technologies',
  },
  alternates: {
    canonical: 'https://bytewisetechnologies.com/contact',
  }
}

export default async function ContactPage() {
  const { data } = await query<ContactQuery>({
    query: GET_CONTACT
  })

  const contact = data?.page || {}

  const jsonLd = generateStructuredData([
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://bytewisetechnologies.com/#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://bytewisetechnologies.com/' },
        { '@type': 'ListItem', position: 2, name: 'Contact us' },
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
        title="Contact us"
        breadcrumb={[
          { name: 'Home', url: '/' },
          { name: 'Contact us' },
        ]}
      />

      <section className="contact_section section_space bg-light">
        <div className="container">
          {/* Contact Info Cards */}
          <div className="contact_info_box row">
            {contact.tiles.map((contactItem, index) => (
              <div className="col-lg-3 col-md-6 col-sm-6" key={index}>
                <div className="iconbox_block text-center">
                  <div className="iconbox_icon">
                    {contactItem.icon && contactItem.title && (
                      <Image src={tileIcons[contactItem.icon]} alt={`${contactItem.title} SVG Icon`} />
                    )}
                  </div>
                  <div className="iconbox_content">
                    <h3 className="iconbox_title">{contactItem.title}</h3>
                    <p className="mb-0">
                      {contactItem.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Main Contact Section */}
          <div className="section_space pb-0">
            {/* Contact Form - Full Width */}
            <div className="row justify-content-center mb-5 ">
              <div className="col-lg-8">
                <ContactForm />
              </div>
            </div>

            {/* Business Hours and Quick Response - Landscape Layout */}
            {/* <div className="row justify-content-center mb-5">
              <div className="col-lg-10">
                <div className="info_cards_landscape row"> */}
            {/* Office Hours */}
            {/* <div className="col-lg-6 mb-4">
                    <div className="info_card">
                      <h4 className="info_title">Business Hours</h4>
                      <div className="info_content">
                        <div className="hours_item">
                          <span className="day">Monday - Friday</span>
                          <span className="time">9:00 AM - 6:00 PM PST</span>
                        </div>
                        <div className="hours_item">
                          <span className="day">Saturday</span>
                          <span className="time">10:00 AM - 4:00 PM PST</span>
                        </div>
                        <div className="hours_item">
                          <span className="day">Sunday</span>
                          <span className="time">Closed</span>
                        </div>
                      </div>
                    </div>
                  </div> */}

            {/* Quick Response */}
            {/* <div className="col-lg-6 mb-4">
                    <div className="info_card">
                      <h4 className="info_title">Quick Response</h4>
                      <div className="info_content">
                        <div className="response_item">
                          <span className="response_type">Email Response</span>
                          <span className="response_time">Within 2 hours</span>
                        </div>
                        <div className="response_item">
                          <span className="response_type">Phone Response</span>
                          <span className="response_time">Within 30 minutes</span>
                        </div>
                        <div className="response_item">
                          <span className="response_type">Project Quote</span>
                          <span className="response_time">Within 24 hours</span>
                        </div>
                      </div>
                    </div>
                  </div> */}
            {/* </div>
              </div>
            </div> */}

            {/* Google Maps - Full Width */}
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="map_container_landscape">
                  <GoogleMapsEmbed
                    apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}
                    height={400}
                    width="100%"
                    mode="place"
                    q="13428 105 Ave #2306, Surrey, BC V3T 0A3, Canada"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
