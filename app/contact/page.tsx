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
  title: 'Contact - Bytewise Technologies',
  description: 'Get in touch with us. We are here to help you grow your business.',
  keywords: 'contact, bytewise, technologies, business, grow, help',
  authors: { name: 'Bytewise Technologies', url: 'https://bytewisetechnologies.com' },
  openGraph: {
    locale: 'en_US',
    type: 'website',
    title: 'Contact - Bytewise Technologies',
    description: 'Get in touch with us. We are here to help you grow your business.',
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

          <div className="section_space pb-0">
            <div className="row justify-content-lg-between">
              <div className="col-lg-7">
                <ContactForm />
              </div>
              <div className="col-lg-5">
                <GoogleMapsEmbed
                  apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}
                  style="height: 100%; width: 100%;"
                  width="100%;"
                  height="100%;"
                  mode="place"
                  q="13428 105 Ave #2306, Surrey, BC V3T 0A3, Canada"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
