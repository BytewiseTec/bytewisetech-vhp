'use client'
import { useSuspenseQuery } from '@apollo/client'
import { GET_CASE_STUDIES, CaseStudiesQuery } from './query'
import { GET_LINKS, HeaderLinksQuery } from '../Navbar/query'
import Link from 'next/link'
import Image from 'next/image'


export default function AboutCaseStudies() {

  const { data, error } = useSuspenseQuery<CaseStudiesQuery>(GET_CASE_STUDIES)
  const { data: linksCollection } = useSuspenseQuery<HeaderLinksQuery>(GET_LINKS)
  const { portfolio } = linksCollection?.links.header || {}

  if (error) return <div>Error loading case studies</div>

  return (
    <section
      className="about_and_case_section section_space section_decoration bg-dark"
      style={{
        backgroundImage: 'url(\'assets/images/backgrounds/bg_image_2.webp\')'
      }}>
      <div className="container">
        <div className="row align-items-center justify-content-lg-between">
          <div className="col-lg-7 order-lg-last">
            <div className="about_image_2">
              {/* <div className="image_wrap">
                <img src="/assets/images/about/about_image_6.webp" alt="Bytewise Tech - About Image" />
              </div> */}
              <div className="about_funfact_info">
                {/* <div className="customer_count">
                  <ul className="unordered_list">
                    {aboutData.aboutimage.map((item,index)=>
                    <li key={index}>
                    <img src={item} alt="Customer Avatar" />
                  </li>
                    )}
                    <li>
                      <span>6k+</span>
                    </li>
                  </ul>
                  <p className="mb-0">
                    Happy Customer
                  </p>
                </div> */}
                {/* <div className="about_funfact_counter">
                  {aboutData.aboutdata.map((item, index) =>
                    <div key={index} className="funfact_item">
                      <div className="counter_value">
                        <span className="odometer" >{item.icon}</span>
                      </div>
                      <h3 className="funfact_title mb-0">{item.title}</h3>
                    </div>
                  )}
                </div> */}
                <a className="btn btn-primary" href={'/about'}>
                  <span className="btn_label" data-text="Learn More">Learn More</span>
                  <span className="btn_icon">
                    <i className="fa-solid fa-arrow-up-right"></i>
                  </span>
                </a>
                <div className="icon_globe">
                  <img src="/assets/images/icons/icon_global.svg" alt="Icon Globe" />
                </div>
              </div>
              {/* <div className="space_line">
                <img src="/assets/images/shapes/shape_line.webp" alt="Shape Line" />
              </div> */}
            </div>
          </div>
          <div className="col-lg-5">
            <div className="about_content">
              <div className="heading_block mb-0 text-white">
                <div
                  className="heading_focus_text has_underline d-inline-flex"
                  style={{ backgroundImage: 'url(\'assets/images/shapes/shape_title_under_line.svg\')' }}
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
                      backgroundColor: '#49515B',
                      padding: '20px 20px'
                    }}
                  >
                    <Image
                      src={caseStudy.thumbnail.url || '/assets/images/default_case_study_image.svg'}
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
                      <Link href={`${portfolio.href}/${caseStudy.slug}`}>
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
                    <Link className="btn btn-primary" href={`${portfolio.href}/${caseStudy.slug}`}>
                      <span className="btn_label" data-text="Read Case">Read Case</span>
                      <span className="btn_icon">
                        <i className="fa-solid fa-arrow-up-right"></i>
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
            <Link className="btn btn-primary" href={`${portfolio.href}`}>
              <span className="btn_label" data-text="View More Cases Study">View More Cases Study</span>
              <span className="btn_icon">
                <i className="fa-solid fa-arrow-up-right"></i>
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="decoration_item shape_image_1">
        <img src="/assets/images/shapes/shape_space_2.svg" alt="Bytewise Tech Shape" />
      </div>
    </section>
  )
}