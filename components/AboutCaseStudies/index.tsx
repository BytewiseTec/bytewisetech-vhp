import Link from 'next/link'
import Image from 'next/image'
import { PiArrowUpRightBold } from 'react-icons/pi'

import { query } from '@/app/ApolloClient'

import { GET_LINKS, HeaderLinksQuery } from '../Navbar/query'
import CustomerSatisfaction from '../../public/assets/images/about/customer-satisfaction.avif'
import Person1Avatar from '../../public/assets/images/about/person1-avatar.webp'
import Person2Avatar from '../../public/assets/images/about/person2-avatar.png'
import Person3Avatar from '../../public/assets/images/about/person3-avatar.png'
import ShapeSpace2 from '../../public/assets/images/shapes/shape_space_2.svg'
import ShapeLine from '../../public/assets/images/shapes/shape_line.webp'
import IconGlobal from '../../public/assets/images/icons/icon_global.svg'

import { GET_CASE_STUDIES, CaseStudiesQuery } from './query'

export default async function AboutCaseStudies() {
  const { data, error } = await query<CaseStudiesQuery>({ query: GET_CASE_STUDIES })
  const { data: linksCollection } = await query<HeaderLinksQuery>({ query: GET_LINKS })
  const { portfolio } = linksCollection?.links.header || {}

  if (error) return <div>Error loading case studies</div>

  return (
    <section
      className="about_and_case_section section_space section_decoration bg-dark"
    >
      <div className="container">
        <div className="row align-items-center justify-content-lg-between">
          <div className="col-lg-7 order-lg-last">
            <div className="about_image_2">
              <div className="image_wrap">
                <Image width={200} height={200} src={CustomerSatisfaction} alt="Bytewise - About Image" />
              </div>
              <div className="about_funfact_info" style={{ backgroundImage: 'url("/assets/images/shapes/shape_bg_1.webp")' }}>
                <div className="customer_count">
                  <ul className="unordered_list">
                    <li>
                      <Image width={50} height={50} src={Person1Avatar} alt="Customer Avatar" />
                    </li>
                    <li>
                      <Image width={50} height={50} src={Person2Avatar} alt="Customer Avatar" />
                    </li>
                    <li>
                      <Image width={50} height={50} src={Person3Avatar} alt="Customer Avatar" />
                    </li>
                    <li>
                      <span>50+</span>
                    </li>
                  </ul>
                  <p className="mb-0">
                    Happy Clients
                  </p>
                </div>
                <div className="about_funfact_counter">
                  <div className="funfact_item">
                    <div className="counter_value">
                      <span>1</span>
                      <span>00+</span>
                    </div>
                    <h3 className="funfact_title mb-4">Projects Done</h3>
                  </div>
                  <div className="funfact_item">
                    <div className="counter_value">
                      <span>100</span>
                      <span>%</span>
                    </div>
                    <h3 className="funfact_title mb-0">Results Guaranteed</h3>
                  </div>
                </div>
                <Link className="btn btn-primary  ms-5 " href="/about" title="Learn More">
                  <span className="btn_label " data-text="Learn More" >Learn More</span>
                  <span className="btn_icon">
                    <PiArrowUpRightBold size={20} />
                  </span>
                </Link>
                <div className="icon_globe">
                  <Image src={IconGlobal} alt="Icon Globe" />
                </div>
              </div>
              <div className="space_line">
                <Image src={ShapeLine} alt="Shape Line" />
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="about_content">
              <div className="heading_block mb-0 text-white">
                <div
                  className="heading_focus_text has_underline d-inline-flex"
                  style={{ backgroundImage: 'url(\'/assets/images/shapes/shape_title_under_line.svg\')' }}
                >
                  About Us
                </div>
                <h2 className="heading_text">
                  Bytewise Technologies <mark>Mission & Goal</mark>
                </h2>
                <p className="heading_description mb-0">
                  From our experience, true transformation and value creation begins with understanding the problem.  We don&apos;t just chase the newest tech trends.  Our focus is on empowering you to be better.  Technology is a tool to help achieve this, not the solution itself.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-170">
          <div className="heading_block text-center text-white">
            <div
              className="heading_focus_text has_underline d-inline-flex"
              style={{ backgroundImage: 'url(\'/assets/images/shapes/shape_title_under_line.svg\')' }}
            >
              Case Studies
            </div>
            <h2 className="heading_text mb-0">
              Our latest <mark>Case</mark> Studies
            </h2>
          </div>

          <div className="case_studies_wrapper">
            {data.projectCollection.items.length > 0 ? (
              data.projectCollection.items.map((caseStudy) => (
                <div className="case_study_block" key={caseStudy._id}>
                  <div
                    className="case_study_image"
                    style={{
                      backgroundColor: caseStudy.config.thumbnailBgColor || '#f5f5f5',
                      padding: '20px 20px'
                    }}
                  >
                    <Image
                      src={caseStudy.thumbnail.url}
                      alt={caseStudy.name}
                      width={caseStudy.thumbnail.width || 200}
                      height={caseStudy.thumbnail.height || 200}
                    />
                  </div>
                  <div className="case_study_content">
                    <ul className="category_list unordered_list text-uppercase">
                      <li>
                        {caseStudy.field}
                      </li>
                    </ul>
                    <h3 className="case_title">
                      <Link href={`${portfolio.href}/${caseStudy.slug}`} title={caseStudy.name}>
                        {caseStudy.name}
                      </Link>
                    </h3>
                    <p>{caseStudy.short}</p>
                    <ul className="icon_list unordered_list">
                      <li>
                        <span className="icon_list_text">
                          <strong className="text-dark">Industry:</strong> {caseStudy.industry}
                        </span>
                      </li>
                      <li>
                        <span className="icon_list_text">
                          <strong className="text-dark">Country:</strong> {caseStudy.address}
                        </span>
                      </li>
                    </ul>
                    <ul className="case_technologies unordered_list" data-text="Core Technologies:">
                      {caseStudy.technologies.map((tech, index) => (
                        <li key={index}>
                          <Image title={tech.title} width={64} height={64} src={tech.icon || ''} alt={tech.title || ''} />
                        </li>
                      ))}
                    </ul>
                    <Link className="btn btn-primary" href={`${portfolio.href}/${caseStudy.slug}`} title={caseStudy.name}>
                      <span className="btn_label" data-text="Read Case">Read Case</span>
                      <span className="btn_icon">
                        <PiArrowUpRightBold size={20} />
                      </span>
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <div>No case studies available</div>
            )}
          </div>

          <div className="btns_group pb-0">
            <Link className="btn btn-primary" href={`${portfolio.href}`} title="View More Cases Study">
              <span className="btn_label" data-text="View More Cases Study">View More Cases Study</span>
              <span className="btn_icon">
                <PiArrowUpRightBold size={20} />
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="decoration_item shape_image_1">
        <Image src={ShapeSpace2} alt="Bytewise Tech Shape" />
      </div>
    </section>
  )
}