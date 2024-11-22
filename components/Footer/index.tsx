'use client'
import React from 'react'

import { useSuspenseQuery } from '@apollo/client'
import { GET_FEATURED, FooterQuery, FieldsLinksQuery, GET_FIELDS, GET_LINKS, GET_SERVICES, HeaderLinksQuery, ServicesLinksQuery } from './query'
import Image from 'next/image'
import Link from 'next/link'
import { getSocialMediaIcon } from '@/utils/helpers'
import { ContactQuery, GET_CONTACT } from '@/app/contact/query'

export default function Footer() {
  const { data: linksCollection } = useSuspenseQuery<HeaderLinksQuery>(GET_LINKS)
  const { services, fields } = linksCollection?.links.header || {}
  const { data: fieldsCollection } = useSuspenseQuery<FieldsLinksQuery>(GET_FIELDS)
  const { data: contactData } = useSuspenseQuery<ContactQuery>(GET_CONTACT)

  const { data: servicesCollection } = useSuspenseQuery<ServicesLinksQuery>(GET_SERVICES)
  const { items: serviceLinks } = servicesCollection?.serviceCollection || {}
  const { data: Collection } = useSuspenseQuery<FooterQuery>(GET_FEATURED)
  const { items: fieldLinks } = fieldsCollection?.fieldCollection || {}
  const footer = Collection?.footerCollection.items[0] || {}
  const contact = contactData?.page || {}

  const phone = contact?.tiles.find(tile => tile.id === 'phone')
  const email = contact?.tiles.find(tile => tile.id === 'email')
  const address = contact?.tiles.find(tile => tile.id === 'address')

  return (
    <footer
      className="site_footer footer_layout_2 section_decoration"
      style={{
        backgroundImage: 'url("/assets/images/shapes/bg_pattern_3.svg")'
      }}
    >
      <div className="decoration_item shape_image_1">
        <Image
          src="/assets/images/shapes/shape_space_2.svg"
          alt="Bytewise Tech Shape"
          width={100}
          height={100}
        />
      </div>
      <div className="container">
        <div className="service_pill_carousel swiper">
          <div className="swiper-wrapper">
            {footer.heading.map((item, index) => (
              <div key={index} className="swiper-slide">
                <span className="service_pill_block">
                  <i className="fa-solid fa-check"></i>
                  <span>{item}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="footer_main_content">
          <div className="row justify-content-lg-between">
            <div className="col-lg-2 col-md-6">
              <div className="footer_widget">
                <h3 className="footer_info_title">Company</h3>
                <ul className="icon_list unordered_list_block">
                  {footer.company.map((item, index) => (
                    <li key={index}>
                      <a href={item.href}>
                        <span className="icon_list_text">{item.title}</span>
                      </a>
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
                      <Link href={`${services.href}/${item.slug}`}>
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
                      <Link href={`${fields.href}/${item.slug}`}>
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
                        <i className="fa-solid fa-phone-volume"></i>
                      </span>
                      <span className="icon-list-text">{phone?.description}</span>
                    </a>
                  </li>
                  <li>
                    <a href={email?.href}>
                      <span className="icon">
                        <i className="fa-solid fa-envelope"></i>
                      </span>
                      <span className="icon-list-text">{email?.description}</span>
                    </a>
                  </li>
                  <li>
                    <a href="#!" onClick={(e) => e.preventDefault()}>
                      <span className="icon">
                        <i className="fa-solid fa-location-dot"></i>
                      </span>
                      <span className="icon-list-text">{address?.description}</span>
                    </a>
                  </li>
                </ul>
                <ul className="social_icons_block unordered_list mt-5">
                  {footer.socials?.map((socialLink, index) => {
                    const Icon = getSocialMediaIcon(socialLink)
                    return (
                      <li key={index}>
                        <Link href={socialLink} target="_blank" rel="noopener noreferrer">
                          <i className={`fa-brands ${Icon}`}></i>
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
          backgroundImage: 'url(\'assets/images/shapes/shape_space_6.svg\')'
        }}
      >
        <div className="container d-md-flex align-items-md-center justify-content-md-between">
          <p className="copyright_text m-0">
            Copyright © 2024 Bytewise Technologies, All rights reserved
          </p>
          <ul className="icon_list unordered_list">
            <li>
              <Link href="/terms-of-service">
                <span className="icon_list_icon">
                  <i className="fa-solid fa-circle"></i>
                </span>
                <span className="icon_list_text">Terms of Service</span>
              </Link>
            </li>
            <li>
              <Link href="/cookie-policy">
                <span className="icon_list_icon">
                  <i className="fa-solid fa-circle"></i>
                </span>
                <span className="icon_list_text">Cookie Policy</span>
              </Link>
            </li>
            <li>
              <span className="icon_list_icon">
                <i className="fa-solid fa-circle"></i>
              </span>
              <a href="#" className="icon_list_text termly-display-preferences">Consent Preferences</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
