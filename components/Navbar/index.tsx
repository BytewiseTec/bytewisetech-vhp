'use client'
import Image from 'next/image'
import { GET_CASE_STUDIES, CaseStudiesQuery, GET_TEAM, TeamMemberQuery, FieldsLinksQuery, GET_FIELDS, GET_LINKS, GET_SERVICES, HeaderLinksQuery, ServicesLinksQuery, GET_FOOTER_SOCIALS, FooterSocialsQuery } from './query'
import { useSuspenseQuery } from '@apollo/client'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import Badge from '../Badge'
import { getSocialMediaIcon } from '@/utils/helpers'

export default function Navbar() {
  const pathName = usePathname()
  const router = useRouter()

  const { data: linksCollection } = useSuspenseQuery<HeaderLinksQuery>(GET_LINKS)
  const { data: servicesCollection } = useSuspenseQuery<ServicesLinksQuery>(GET_SERVICES)
  const { data: projectData } = useSuspenseQuery<CaseStudiesQuery>(GET_CASE_STUDIES)
  const { data: fieldsCollection } = useSuspenseQuery<FieldsLinksQuery>(GET_FIELDS)
  const { data: footerSocialsCollection } = useSuspenseQuery<FooterSocialsQuery>(GET_FOOTER_SOCIALS)

  const { home, company, portfolio, services, fields, product, contact, pages } = linksCollection?.links.header || {}
  const { items: serviceLinks } = servicesCollection?.serviceCollection || {}
  const { items: fieldLinks } = fieldsCollection?.fieldCollection || {}
  const { socials } = footerSocialsCollection?.footerCollection.items[0] || {}

  const getRandomIndex = (max: number) => Math.floor(Math.random() * max)

  const project = projectData?.projectCollection?.items[getRandomIndex(projectData?.projectCollection?.items.length)]

  const isRouteActive = (isActive: boolean) => isActive ? 'active' : ''

  return (
    <header className="site_header site_header_2">
      <div className="header_bottom stricky">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3 col-5">
              <div className="site_logo">
                <Link className="site_link" href={home.href}>
                  <Image width={9380} height={2330} src="/assets/images/site_logo/logo-white.svg" alt="Site Logo – Bytewise Technologies – IT Solutions & Technology, Business Consulting, Software Company" />
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
                                            <Image width={200} height={200} src={`/assets/images/icons/${link.icon}`} alt={link.label} />
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
                                      <i className="fa-solid fa-arrow-up-right"></i>
                                    </span>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className={isRouteActive(pathName.startsWith('/portfolio'))}>
                      <Link className="nav-link" href={portfolio.href} role="button">
                        {portfolio.label}
                      </Link>
                    </li>
                    <li className={`dropdown ${isRouteActive(pathName.startsWith('/services'))}`}>
                      <Link className="nav-link" href={services.href} onClick={() => router.push(services.href)} id="services_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        {services.label}
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
                                          <Link shallow={false} href={`${services.href}/${service.slug}`}>
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
                                    const icon = getSocialMediaIcon(socialLink)
                                    return (
                                      <li key={index}>
                                        <Link href={socialLink} target="_blank" rel="noopener noreferrer">
                                          <i className={`fa-brands ${icon}`}></i>
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
                                  <h3>Computer Software</h3>
                                  <h4>{project.name}</h4>
                                </div>
                                <Image width={200} height={200} src={project.banner.url} alt="Case Image" />
                                <Link className="btn" href={project.slug}>
                                  <span className="btn_label" data-text="Read Case">Read Case</span>
                                  <span className="btn_icon">
                                    <i className="fa-solid fa-arrow-up-right"></i>
                                  </span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="dropdown">
                      <a className="nav-link" href="#" id="pages_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        {pages.label}
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
                    <li><a href={contact.href}>Contact</a></li>
                  </ul>
                </div>
              </nav>
            </div>
            <div className="col-lg-3 col-5">
              <ul className="header_btns_group unordered_list justify-content-end">
                <li>
                  <button className="mobile_menu_btn" type="button" data-bs-toggle="collapse" data-bs-target="#main_menu_dropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="far fa-bars"></i>
                  </button>
                </li>
                <li>
                  <a className="btn btn-primary" href={contact.href}>
                    <span className="btn_label" data-text="Get Started">Get Started</span>
                    <span className="btn_icon">
                      <i className="fa-solid fa-arrow-up-right"></i>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}