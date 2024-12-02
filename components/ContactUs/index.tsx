import { query } from '@/app/ApolloClient'
import { ContactQuery, GET_CONTACT } from '@/app/contact/query'
import InstantContactForm from '../InstantContactForm'
import shapeLine5 from '../../public/assets/images/shapes/shape_line_5.svg'
import shapeLine6 from '../../public/assets/images/shapes/shape_line_6.svg'
import Image from 'next/image'

export default async function ContactUs() {
  const { data } = await query<ContactQuery>({ query: GET_CONTACT })
  const contact = data?.page || {}

  const phone = contact?.tiles.find(tile => tile.id === 'phone')
  const email = contact?.tiles.find(tile => tile.id === 'email')
  const address = contact?.tiles.find(tile => tile.id === 'address')

  return (
    <section className="contact_section pb-80 bg-light section_decoration">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="contact_method_box">
              <div className="heading_block">
                <div
                  className="heading_focus_text has_underline d-inline-flex mb-3"
                  style={{ backgroundImage: 'url(\'assets/images/shapes/shape_title_under_line.svg\')' }}
                >
                  You Are Here
                </div>
                <h2 className="heading_text mb-0">
                  Let&apos;s Start
                </h2>
                <p className="heading_description mb-0">Initiating Your Journey to Success and Growth.</p>
              </div>
              <ul className="contact_method_list unordered_list_block">
                <li>
                  <a href={phone?.href}>
                    <span className="icon">
                      <i className="fa-solid fa-phone-volume"></i>
                    </span>
                    <span className="text">{phone?.description}</span>
                  </a>
                </li>
                <li>
                  <a href={email?.href}>
                    <span className="icon">
                      <i className="fa-solid fa-envelope"></i>
                    </span>
                    <span className="text">{email?.description}</span>
                  </a>
                </li>
                <li>
                  <a rel="noopener nofollow" href="#!">
                    <span className="icon">
                      <i className="fa-solid fa-location-dot"></i>
                    </span>
                    <span className="text">{address?.description}</span>
                  </a>
                </li>
              </ul>
              <ul className="support_step unordered_list_block">
                <li>
                  <span className="serial_number">01</span>
                  <span className="text">Share your requirements</span>
                </li>
                <li>
                  <span className="serial_number">02</span>
                  <span className="text">Discuss them with our experts</span>
                </li>
                <li>
                  <span className="serial_number">03</span>
                  <span className="text">Get a free quote</span>
                </li>
                <li>
                  <span className="serial_number">04</span>
                  <span className="text">Start the project</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-8">
            <InstantContactForm />
          </div>
        </div>
      </div>
      <div className="decoration_item shape_image_1">
        <Image src={shapeLine5} alt="Bytewise Tech Shape" />
      </div>
      <div className="decoration_item shape_image_2">
        <Image src={shapeLine6} alt="Bytewise Tech Shape" />
      </div>
    </section>
  )
}