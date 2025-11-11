import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { PiArrowUpRightBold } from 'react-icons/pi'
import { FaAngleDown } from 'react-icons/fa6'

import { getSocialMediaIcon, getSocialMediaName } from '@/utils/helpers'
import { GET_PROJECT, ProjectQuery } from '@/app/portfolio/[slug]/query'
import { query } from '@/app/ApolloClient'
import { INVESTIFY_PROJECT_ID } from '@/utils/constants'

import LogoWhite from '../../public/assets/images/site_logo/logo-white.svg'
import Badge from '../Badge'
import Favicon from '../../public/assets/images/site_logo/favicon.svg'
import WifiIcon from '../../public/assets/images/icons/icon_wifi.svg'
import ChartIcon from '../../public/assets/images/icons/icon_chart.svg'
import UserIcon from '../../public/assets/images/icons/icon_user_2.svg'
import PenIcon from '../../public/assets/images/icons/icon_pen.svg'

import ActiveListItem from './ActiveListItem'
import { FieldsLinksQuery, GET_FIELDS, GET_LINKS, GET_SERVICES, HeaderLinksQuery, ServicesLinksQuery, GET_FOOTER_SOCIALS, FooterSocialsQuery } from './query'
import MobileMenuButton from './MobileMenuButton'

const companyLinkIcons: Record<string, StaticImageData> = {
  'icon_wifi.svg': WifiIcon,
  'icon_chart.svg': ChartIcon,
  'icon_user_2.svg': UserIcon,
  'icon_pen.svg': PenIcon,
}

export default async function Navbar() {
  const { data: linksCollection } = await query<HeaderLinksQuery>({ query: GET_LINKS })
  const { data: servicesCollection } = await query<ServicesLinksQuery>({ query: GET_SERVICES })
  const { data: projectData } = await query<ProjectQuery>({
    query: GET_PROJECT,
    variables: {
      id: INVESTIFY_PROJECT_ID,
    }
  })
  const { data: fieldsCollection } = await query<FieldsLinksQuery>({ query: GET_FIELDS })
  const { data: footerSocialsCollection } = await query<FooterSocialsQuery>({ query: GET_FOOTER_SOCIALS })

  const { home, company, portfolio, services, fields, product, contact, pages } = linksCollection?.links.header || {}
  const { items: serviceLinks } = servicesCollection?.serviceCollection || {}
  const { items: fieldLinks } = fieldsCollection?.fieldCollection || {}
  const { socials } = footerSocialsCollection?.footerCollection.items[0] || {}
  const { project } = projectData || {}

  return (
    <header className="site_header site_header_2 ">
      <div className="header_bottom stricky">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-2 col-md-4 col-6">
              <div className="site_logo">
                <Link className="site_link" href={home.href} title={home.label}>
                  <Image loading="eager" width={2251} height={559} src={LogoWhite} alt="Bytewise Technologies Logo" />
                  <Image width={600} height={559} src={Favicon} alt="Bytewise Technologies Favicon" />
                </Link>
              </div>
            </div>
            <div className="col-lg-7 col-md-12 col-12 order-lg-0 order-2 mt-3 mt-lg-0">
              <nav className="main_menu navbar navbar-expand-lg">
                <div className="main_menu_inner collapse navbar-collapse justify-content-lg-center" id="main_menu_dropdown">
                  <ul className="main_menu_list unordered_list justify-content-center">
                    <ActiveListItem path={home.href}>
                      <Link className="nav-link" href={home.href} title={home.label}>
                        {home.label}
                      </Link>
                    </ActiveListItem>
                    <li className="dropdown">
                      {/* <a className="nav-link" href="#" id="company_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        {company.label}
                        <FaAngleDown />
                      </a> */}
                      <div className="dropdown-menu mega_menu_wrapper rounded-none" aria-labelledby="company_submenu">
                        <div className="container">
                          <div className="row">
                            <div className="col-lg-9">
                              <div className="megamenu_pages_wrapper mb-5">
                                <div className="row">
                                  {company?.children?.map((link, index) => (
                                    <div className="col-lg-3 col-md-6" key={index}>
                                      <Link className="iconbox_block_2" href={link.href} title={link.label}>
                                        <span className="icon_title_wrap">
                                          <small className="iconbox_icon">
                                            {link.icon && <Image width={200} height={200} src={companyLinkIcons[link.icon]} alt={link.label} />}
                                          </small>
                                          <small className="iconbox_title">{link.label}</small>
                                        </span>
                                        <span className="description mb-0">
                                          {link.description}
                                        </span>
                                      </Link>
                                    </div>
                                  ))}
                                </div>
                              </div>
                              <ul className="btns_group p-0 unordered_list justify-content-start">
                                <li>
                                  <Link className="btn btn-primary" href={contact.href} title="Free Consultation">
                                    <span className="btn_label" data-text="Free Consultation">Free Consultation</span>
                                    <span className="btn_icon">
                                      <PiArrowUpRightBold size={20} />
                                    </span>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    
                      <li>
                        <Link className="nav-link" href="/about" title="About">
                          About
                        </Link>
                      </li>
                      <li>
                        <Link className="nav-link" href={services.href} title={services.label}>
                          {services.label}
                        </Link>
                      </li>
                      <ActiveListItem path={portfolio.href}>
                        <Link className="nav-link" href={portfolio.href} role="button" title={portfolio.label}>
                          {portfolio.label}
                        </Link>
                      </ActiveListItem>
                      <li>
                        <Link className="nav-link" href="/staff-augmentation" title="Staff Augmentation">
                          Staff Augmentation
                        </Link>
                      </li>
                      <li>
                        <Link className="nav-link" href="/blog" title="Blog">
                          Blog
                        </Link>
                      </li>
                      <li>
                        <Link className="nav-link" href={contact.href} title={contact.label}>
                          Contact
                        </Link>
                      </li>
                  </ul>
                </div>
              </nav>
            </div>
            <div className="col-lg-3 col-md-4 col-6 ms-auto order-lg-0 order-1">
              <ul className="header_btns_group unordered_list justify-content-end align-items-center">
                <li>
                  <MobileMenuButton />
                </li>
                <li>
                  <Link className="btn btn-primary" href={contact.href} title="Get Started">
                    <span className="btn_label" data-text="Get Started">Let&apos;s Talk</span>
                    <span className="btn_icon">
                      <PiArrowUpRightBold size={20} />
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}