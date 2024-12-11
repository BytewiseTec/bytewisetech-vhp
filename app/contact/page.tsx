import { ContactQuery, GET_CONTACT } from './query'
import { Metadata } from 'next'
import { query } from '../ApolloClient'
import ContactForm from '../../components/ContactForm'
import PageBanner from '../../components/PageBanner'
import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'

import IconCalling2 from '../../public/assets/images/icons/icon_calling_2.svg'
import IconMail3 from '../../public/assets/images/icons/icon_mail_3.svg'
import IconMapMark2 from '../../public/assets/images/icons/icon_map_mark_2.svg'
import IconCalendar2 from '../../public/assets/images/icons/icon_calendar_2.svg'

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

  return (
    <>
      <PageBanner title="Contact us" />

      <nav aria-label="breadcrumb" className="bg-light">
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link href="/">Home</Link></li>
            <li className="breadcrumb-item active" aria-current="page">Contact us</li>
          </ol>
        </div>
      </nav>

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
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
