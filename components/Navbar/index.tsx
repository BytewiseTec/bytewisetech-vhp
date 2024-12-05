import Image, { StaticImageData } from 'next/image'
import { FieldsLinksQuery, GET_FIELDS, GET_LINKS, GET_SERVICES, HeaderLinksQuery, ServicesLinksQuery, GET_FOOTER_SOCIALS, FooterSocialsQuery } from './query'
import Link from 'next/link'
import Badge from '../Badge'
import { getSocialMediaIcon, getSocialMediaName } from '@/utils/helpers'
import { GET_PROJECT, ProjectQuery } from '@/app/portfolio/[slug]/query'
import ActiveListItem from './ActiveListItem'
import { query } from '@/app/ApolloClient'
import { INVESTIFY_PROJECT_ID } from '@/utils/constants'
import LogoWhite from '../../public/assets/images/site_logo/logo-white.svg'
import Favicon from '../../public/assets/images/site_logo/favicon.svg'
import WifiIcon from '../../public/assets/images/icons/icon_wifi.svg'
import ChartIcon from '../../public/assets/images/icons/icon_chart.svg'
import UserIcon from '../../public/assets/images/icons/icon_user_2.svg'
import PenIcon from '../../public/assets/images/icons/icon_pen.svg'
import { PiArrowUpRightBold } from 'react-icons/pi'
import { FaAngleDown, FaBars, FaChevronDown } from 'react-icons/fa6'
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
    <header className="site_header site_header_2">
      <div className="header_bottom stricky">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3 col-5">
              <div className="site_logo">
                <Link className="site_link" href={home.href}>
                  <Image width={2251} height={559} src={LogoWhite} alt="Site Logo – Bytewise Technologies – IT Solutions & Technology, Business Consulting, Software Company" />
                  <Image width={600} height={559} src={Favicon} alt="Site Logo – Bytewise Technologies – IT Solutions & Technology, Business Consulting, Software Company" />
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-2">
              <nav className="main_menu navbar navbar-expand-lg">
                <div className="main_menu_inner collapse navbar-collapse justify-content-lg-center" id="main_menu_dropdown">
                  <ul className="main_menu_list unordered_list justify-content-center">
                    <li className="dropdown">
                      <a className="nav-link" href="#" id="company_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        {company.label}
                        <FaAngleDown />
                      </a>
                      <div className="dropdown-menu mega_menu_wrapper" aria-labelledby="company_submenu">
                        <div className="container">
                          <div className="row">
                            <div className="col-lg-9">
                              <div className="megamenu_pages_wrapper mb-5">
                                <div className="row">
                                  {company?.children?.map((link, index) => (
                                    <div className="col-lg-3 col-md-6" key={index}>
                                      <Link className="iconbox_block_2" href={link.href}>
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
                                  <Link className="btn btn-primary" href={contact.href}>
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
                    <ActiveListItem path={portfolio.href}>
                      <Link className="nav-link" href={portfolio.href} role="button">
                        {portfolio.label}
                      </Link>
                    </ActiveListItem>
                    <ActiveListItem clickable className="dropdown" path={services.href}>
                      <Link className="nav-link" href={services.href} id="services_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        {services.label}
                        <FaAngleDown />
                      </Link>
                      <div className="dropdown-menu mega_menu_wrapper p-0" aria-labelledby="services_submenu">
                        <div className="container">
                          <div className="row justify-content-lg-between">
                            <div className="col-lg-8">
                              <div className="row">
                                <div className="col-lg-6">
                                  <div className="megamenu_widget">
                                    <h3 className="megamenu_info_title">{services.label}</h3>
                                    <ul className="icon_list unordered_list_block">
                                      {serviceLinks.map((service) => (
                                        <li key={service._id}>
                                          <Link href={`${services.href}/${service.slug}`}>
                                            <span className="icon_list_text">
                                              {service.name}
                                            </span>
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>
                                <div className="col-lg-3">
                                  <div className="megamenu_widget">
                                    <h3 className="megamenu_info_title">{fields.label}</h3>
                                    <ul className="icon_list unordered_list_block">
                                      {fieldLinks.map((field) => (
                                        <li key={field._id}>
                                          <Link href={`${fields.href}/${field.slug}`}>
                                            <span className="icon_list_text">
                                              {field.name}
                                            </span>
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>
                                <div className="col-lg-3">
                                  <div className="megamenu_widget">
                                    <h3 className="megamenu_info_title">{product.label}</h3>
                                    <ul className="icon_list unordered_list_block">
                                      {product.children?.map((prod, idx) => (
                                        <li key={idx}>
                                          <Link href={prod.href}>
                                            <span className="icon_list_text">
                                              {prod.label}
                                            </span>
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="social_area">
                                <ul className="social_icons_block unordered_list" data-text="Follow Us:">
                                  {socials?.map((socialLink, index) => {
                                    const Icon = getSocialMediaIcon(socialLink)
                                    const name = getSocialMediaName(socialLink)

                                    return (
                                      <li key={index}>
                                        <Link href={socialLink} target="_blank" rel="noopener noreferrer">
                                          {Icon && name && <Icon className={name} />}
                                        </Link>
                                      </li>
                                    )
                                  })}
                                </ul>
                                <p className="career_link m-0">Looking for new career? <Link href={contact.href}>We’re Hiring</Link></p>
                              </div>
                            </div>
                            <div className="col-lg-3">
                              <div className="megamenu_case bg-primary">
                                <div>
                                  <h3>{project?.industry}</h3>
                                  <h4>{project?.name}</h4>
                                </div>
                                <Image width={project?.thumbnail.width} height={project?.thumbnail.height} src={project?.thumbnail?.url} alt="Case Image" />
                                <Link className="btn" href={`/portfolio/${project?.slug}`}>
                                  <span className="btn_label" data-text="Read Case">Read Case</span>
                                  <span className="btn_icon">
                                    <PiArrowUpRightBold size={20} />
                                  </span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </ActiveListItem>
                    <li className="dropdown">
                      <a className="nav-link" href="#" id="pages_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        {pages.label}
                        <FaAngleDown />
                      </a>
                      <ul className="dropdown-menu" aria-labelledby="pages_submenu">
                        {pages.children?.map((page, idx) => (
                          <li key={idx}>
                            <Link href={page.href}>
                              {page.label}
                              {page.badge && <Badge type="danger-subtle">{page.badge}</Badge>}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                    <li><Link href={contact.href}>Contact</Link></li>
                  </ul>
                </div>
              </nav>
            </div>
            <div className="col-lg-3 col-5">
              <ul className="header_btns_group unordered_list justify-content-end">
                <li>
                  <MobileMenuButton />
                </li>
                <li>
                  <Link className="btn btn-primary" href={contact.href}>
                    <span className="btn_label" data-text="Get Started">Get Started</span>
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