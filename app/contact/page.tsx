import { ContactQuery, GET_CONTACT } from './query'
import { Metadata } from 'next'
import { query } from '../ApolloClient'
import ContactForm from '@/components/ContactForm'

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
    canonical: 'https://www.bytewisetechnologies.com/contact',
  }
}

export default async function ContactPage() {
  const { data } = await query<ContactQuery>({
    query: GET_CONTACT
  })

  const contact = data?.page || {}

  return (
    <>
      <section
        className="page_banner_section text-center"
      >
        <div className="container">
          <div className="heading_focus_text text-white">
            <span className="badge bg-secondary">Contact</span>
            Us 😍
          </div>
          <h1 className="page_title mb-0 text-white">Contact Us</h1>
        </div>
      </section>

      <section className="contact_section section_space bg-light">
        <div className="container">
          <div className="contact_info_box row">
            {contact.tiles.map((contactItem, index) => (
              <div className="col-lg-3 col-md-6 col-sm-6" key={index}>
              <div className="iconbox_block text-center">
                <div className="iconbox_icon">
                  <img src={contactItem.icon} alt={`${contactItem.title} SVG Icon`} />
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
