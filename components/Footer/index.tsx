'use client'
import React from 'react'

import { useSuspenseQuery } from '@apollo/client'
import { GET_FEATURED, FooterQuery,FieldsLinksQuery, GET_FIELDS, GET_LINKS, GET_SERVICES, HeaderLinksQuery, ServicesLinksQuery } from './query'
import Image from 'next/image'
import Link from 'next/link'
const getSocialMediaIcon = (url: string) => {
  if (url.includes('https://www.facebook.com/muhammadkh4n')) return  'fa-facebook-f'
  if (url.includes('https://www.github.com/muhammadkh4n')) return 'fa-github'
  if (url.includes('https://www.linkedin.com/in/muhammadkh4n')) return 'fa-linkedin-in'
  return null
}
export default function Footer() {
  const { data: linksCollection } = useSuspenseQuery<HeaderLinksQuery>(GET_LINKS)
  const {  services, fields} = linksCollection?.links.header || {}
  const { data: fieldsCollection } = useSuspenseQuery<FieldsLinksQuery>(GET_FIELDS)

  const { data: servicesCollection } = useSuspenseQuery<ServicesLinksQuery>(GET_SERVICES)
  const { items: serviceLinks } = servicesCollection?.serviceCollection || {}
  const { data:Collection } =useSuspenseQuery<FooterQuery>( GET_FEATURED)
  const { items: fieldLinks } = fieldsCollection?.fieldCollection || {}
  const   footer  = Collection?.footerCollection.items[0] || {}
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
          alt="Techco Shape"
          width={100}
          height={100}
        />
      </div>
      <div className="container">
        <div className="service_pill_carousel swiper">
          <div className="swiper-wrapper">
            {footer.heading.map((item, index) => (
              <div key={index} className="swiper-slide">
                <a className="service_pill_block" href="service_details.html">
                  <i className="fa-solid fa-check"></i>
                  <span>{item}</span>
                </a>
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
            <div className="col-lg-2 col-md-6">
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
              <div className="footer_widget pe-lg-3">
                <h2 className="footer_info_title">Newsletter</h2>
                <p>Sign up to Techco weekly newsletter to get the latest updates</p>
                <form className="footer_newslatter_2" action="#">
                  <label htmlFor="footer_mail_input">
                    <Image
                      src="/assets/images/icons/icon_mail_2.svg"
                      alt="Mail SVG Icon"
                      width={18}
                      height={16}
                    />
                  </label>
                  <input
                    id="footer_mail_input"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                  />
                  <button type="submit">Send</button>
                </form>
                <ul className="social_icons_block unordered_list">
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
            Copyright © 2024 Infinitude Tech, All rights reserved
          </p>
          <ul className="icon_list unordered_list">
            <li>
              <a href="#">
                <span className="icon_list_icon">
                  <i className="fa-solid fa-circle"></i>
                </span>
                <span className="icon_list_text">Terms of Use</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon_list_icon">
                  <i className="fa-solid fa-circle"></i>
                </span>
                <span className="icon_list_text">Privacy Policy</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
