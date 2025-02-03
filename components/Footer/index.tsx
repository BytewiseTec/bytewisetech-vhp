import Image from 'next/image'
import Link from 'next/link'
import { FaCircle, FaEnvelope, FaLocationDot, FaPhoneVolume } from 'react-icons/fa6'

import { getSocialMediaIcon, getSocialMediaName } from '@/utils/helpers'
import { ContactQuery, GET_CONTACT } from '@/app/contact/query'
import { query } from '@/app/ApolloClient'

import ShapeSpace2 from '../../public/assets/images/shapes/shape_space_2.svg'

import { GET_FEATURED, FooterQuery, FieldsLinksQuery, GET_FIELDS, GET_LINKS, GET_SERVICES, HeaderLinksQuery, ServicesLinksQuery } from './query'

export default async function Footer() {
  const { data: linksCollection } = await query<HeaderLinksQuery>({ query: GET_LINKS })
  const { services, fields } = linksCollection?.links.header || {}

  const { data: fieldsCollection } = await query<FieldsLinksQuery>({ query: GET_FIELDS })
  const { items: fieldLinks } = fieldsCollection?.fieldCollection || {}

  const { data: contactData } = await query<ContactQuery>({ query: GET_CONTACT })
  const contact = contactData?.page || {}
  const phone = contact?.tiles.find(tile => tile.id === 'phone')
  const email = contact?.tiles.find(tile => tile.id === 'email')
  const address = contact?.tiles.find(tile => tile.id === 'address')

  const { data: servicesCollection } = await query<ServicesLinksQuery>({ query: GET_SERVICES })
  const { items: serviceLinks } = servicesCollection?.serviceCollection || {}

  const { data: Collection } = await query<FooterQuery>({ query: GET_FEATURED })
  const footer = Collection?.footerCollection.items[0] || {}

  return (
    <footer
      className="site_footer footer_layout_2 section_decoration"
      style={{
        backgroundImage: 'url("/assets/images/shapes/bg_pattern_3.svg")'
      }}
    >
      <div className="decoration_item shape_image_1">
        <Image
          src={ShapeSpace2}
          alt="Bytewise Tech Shape"
          width={100}
          height={100}
        />
      </div>
      <div className="container">
        <div className="footer_main_content">
          <div className="row justify-content-lg-between">
            <div className="col-lg-2 col-md-6">
              <div className="footer_widget">
                <h3 className="footer_info_title">Company</h3>
                <ul className="icon_list unordered_list_block">
                  {footer.company.map((item, index) => (
                    <li key={index}>
                      <Link href={item.href} title={item.title}>
                        <span className="icon_list_text">{item.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="footer_widget">
                <h3 className="footer_info_title">Expertise</h3>
                <ul className="icon_list unordered_list_block">
                  {serviceLinks.map((item, index) => (
                    <li key={index}>
                      <Link href={`${services.href}/${item.slug}`} title={item.name}>
                        <span className="icon_list_text">{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <div className="footer_widget">
                <h3 className="footer_info_title">Industries</h3>
                <ul className="icon_list unordered_list_block">
                  {fieldLinks.map((item, index) => (
                    <li key={index}>
                      <Link href={`${fields.href}/${item.slug}`} title={item.name}>
                        <span className="icon_list_text">
                          {item.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="footer_widget">
                <h3 className="footer_info_title">Contact</h3>
                <ul className="icon_list unordered_list_block">
                  <li>
                    <a href={phone?.href}>
                      <span className="icon">
                        <FaPhoneVolume />
                      </span>
                      <span className="icon-list-text">{phone?.description}</span>
                    </a>
                  </li>
                  <li>
                    <a href={email?.href}>
                      <span className="icon">
                        <FaEnvelope />
                      </span>
                      <span className="icon-list-text">{email?.description}</span>
                    </a>
                  </li>
                  <li>
                    <a rel="noopener nofollow" href="#!">
                      <span className="icon">
                        <FaLocationDot />
                      </span>
                      <span className="icon-list-text">{address?.description}</span>
                    </a>
                  </li>
                </ul>
                <ul className="social_icons_block unordered_list mt-5">
                  {footer.socials?.map((socialLink, index) => {
                    const Icon = getSocialMediaIcon(socialLink)
                    const name = getSocialMediaName(socialLink)

                    if (!Icon || !name) {
                      return null
                    }

                    return (
                      <li key={index}>
                        <Link href={socialLink} target="_blank" rel="noopener noreferrer" aria-label={name} title={name}>
                          <Icon className={name} />
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="footer_bottom"
        style={{
          backgroundImage: 'url(\'/assets/images/shapes/shape_space_6.svg\')'
        }}
      >
        <div className="container d-md-flex align-items-md-center justify-content-md-between">
          <p className="copyright_text m-0">
            Copyright © 2024 Bytewise Technologies, All rights reserved
          </p>
          <ul className="icon_list unordered_list">
            <li>
              <Link href="/terms-of-service" title="Terms of Service">
                <span className="icon_list_icon">
                  <FaCircle color="#0044EB" size={6} />
                </span>
                <span className="icon_list_text">Terms of Service</span>
              </Link>
            </li>
            <li>
              <Link href="/cookie-policy" title="Cookie Policy">
                <span className="icon_list_icon">
                  <FaCircle color="#0044EB" size={6} />
                </span>
                <span className="icon_list_text">Cookie Policy</span>
              </Link>
            </li>
            <li>
              <span className="icon_list_icon">
                <FaCircle color="#0044EB" size={6} />
              </span>
              <a href="#" className="icon_list_text termly-display-preferences">Consent Preferences</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
