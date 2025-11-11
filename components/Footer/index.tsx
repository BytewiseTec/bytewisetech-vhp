import Image from 'next/image'
import Link from 'next/link'
import { FaEnvelope, FaLocationDot, FaPhoneVolume } from 'react-icons/fa6'
import { BiSolidQuoteLeft, BiSolidQuoteRight } from 'react-icons/bi'

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
      <div className="decoration_item shape_image_1 ">
        <Image
          src={ShapeSpace2}
          alt="Bytewise Tech Shape"
          width={100}
          height={100}
        />
      </div>
      <div className="container" style={{ paddingLeft: '7%' }}>
        <div className="footer_main_content">
          <div className="row justify-content-lg-between">
            <div className="col-lg-4 col-md-12 mb-4">
  <h5 className="fs-4 fw-bold mb-6 footer_info_title" >
    Bytewise Technologies
  </h5>

  {/* Stylish Quote Box */}
  <div
    className="quote-container position-relative"
    style={{
      background: 'rgba(0, 68, 235, 0.03)',
      borderLeft: '4px solid #0044EB',
      padding: '24px 30px',
      borderRadius: '0 12px 12px 0',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    }}
  >
    {/* Left Quote */}
    <BiSolidQuoteLeft
      className="position-absolute "
      style={{
        left: '-12px',
        top: '10px',
        fontSize: '24px',
        background: '#0044EB',
        borderRadius: '50%',
        padding: '4px',
         color: '#B6B8CA'
      }}
    />

    {/* Text */}
    <p className="text-white fs-5 lh-lg mb-0" style={{ fontWeight: '500' }}>
     The best digital products aren&apos;t just built. They&apos;re forged in partnership.
    </p>

    {/* Right Quote */}
    <BiSolidQuoteRight
      className="position-absolute" 
      style={{
        right: '20px',
        bottom: '10px',
        fontSize: '24px',
        color: '#B6B8CA'
      }}
    />
  </div>
</div>


            <div className="col-lg-2 col-md-6">
              <div className="footer_widget">
                <h3 className="footer_info_title fs-4 ">Company</h3>
                <ul className="icon_list unordered_list_block">
                  <li>
                    <Link href="/about" title="About">
                      <span className="icon_list_text fs-6 fw-normal">About</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" title="Services">
                      <span className="icon_list_text fs-6 fw-normal">Services</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/portfolio" title="Portfolio">
                      <span className="icon_list_text fs-6 fw-normal">Portfolio</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/staff-augmentation" title="Staff Augmentation">
                      <span className="icon_list_text fs-6 fw-normal">Staff Augmentation</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" title="Blog">
                      <span className="icon_list_text fs-6 fw-normal">Blog</span>
                    </Link>
                  </li>
                  {/* <li>
                    <Link href="/contact" title="Contact">
                      <span className="icon_list_text fs-6 fw-normal">Contact</span>
                    </Link>
                  </li> */}
                </ul>
              </div>
            </div>
            {/* <div className="col-lg-4 col-md-6">
                <div className="footer_widget">
                  <h3 className="footer_info_title fs-4">Expertise</h3>
                  <ul className="icon_list unordered_list_block">
                    {serviceLinks.map((item, index) => (
                      <li key={index}>
                        <Link href={`${services.href}/${item.slug}`} title={item.name}>
                          <span className="icon_list_text fs-6 fw-normal">{item.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div> */}
            {/* <div className="col-lg-2 col-md-6">
              <div className="footer_widget">
                <h3 className="footer_info_title fs-4">Industries</h3>
                <ul className="icon_list unordered_list_block">
                  {fieldLinks.map((item, index) => (
                    <li key={index}>
                      <Link href={`${fields.href}/${item.slug}`} title={item.name}>
                        <span className="icon_list_text fs-6 fw-normal">
                          {item.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div> */}
            <div className="col-lg-4 col-md-6">
              <div className="footer_widget">
                <h3 className="footer_info_title fs-4">Contact</h3>
                <ul className="icon_list unordered_list_block">
                  <li>
                    <a href={phone?.href}>
                      <span className="icon">
                        <FaPhoneVolume />
                      </span>
                      <span className="icon-list-text fs-6 fw-normal">{phone?.description}</span>
                    </a>
                  </li>
                  <li>
                    <a href={email?.href}>
                      <span className="icon">
                        <FaEnvelope />
                      </span>
                      <span className="icon-list-text fs-6 fw-normal">{email?.description}</span>
                    </a>
                  </li>
                  <li>
                    <a rel="noopener nofollow" href="#">
                      <span className="icon">
                        <FaLocationDot />
                      </span>
                      <span className="icon-list-text fs-6 fw-normal">{address?.description}</span>
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
        <div className="container footer_bottom_container">
          <p className="copyright_text m-0 fs-6">
            Copyright © 2024 Bytewise Technologies, All rights reserved
          </p>
          <ul className="icon_list unordered_list footer_bottom_links">
            <li>
              <Link href="/terms-of-service" title="Terms of Service">
                <span className="icon_list_text">Terms of Service</span>
              </Link>
            </li>
            <li>
              <Link href="/cookie-policy" title="Cookie Policy">
                <span className="icon_list_text">Cookie Policy</span>
              </Link>
            </li>
            <li>
              <a href="#" className="icon_list_text termly-display-preferences">Consent Preferences</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
