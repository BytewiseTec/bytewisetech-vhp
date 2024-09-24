// import { queryWithNoCache } from '../ApolloClient'

import { AboutQuery, GET_ABOUT, GET_TEAM_COLLECTION, TeamCollectionQuery, GET_FEATURED, FeatureQuery } from './query'
import { query } from '../ApolloClient'
import Image from 'next/image'
import Link from 'next/link'

const getSocialMediaIcon = (url: string) => {
  if (url.includes('https://www.facebook.com/muhammadkh4n')) return 'fa-facebook-f'
  if (url.includes('https://www.github.com/muhammadkh4n')) return 'fa-github'
  if (url.includes('https://www.linkedin.com/in/muhammadkh4n')) return 'fa-linkedin-in'
  return null
}
export default async function AboutPage() {
  const { data, loading, error } = await query<FeatureQuery>({
    query: GET_FEATURED
  })
  if (loading) return <div>Loading...</div>
  if (error) return <div>Error loading feature: {error.message}</div>
  if (!data || !data.partnerCollection.items.length) {
    return <div>No service available</div>
  }
  const { data: about } = await query<AboutQuery>({
    query: GET_ABOUT
  })
  const aboutData = about?.pageCollection.items[0]
  const { data: teamData } = await query<TeamCollectionQuery>({
    query: GET_TEAM_COLLECTION
  })
  return (
    <>
      <section
        className="page_banner_section text-center"
        style={{ backgroundImage: 'url(\'assets/images/shapes/bg_pattern_4.svg\')' }}
      >
        <div className="container">
          <div className="heading_focus_text text-white">
            About
            <span className="badge bg-secondary">More Techco😃</span>
          </div>
          <h1 className="page_title mb-0 text-white">{aboutData.title}</h1>
        </div>
      </section>

      <section className="intro_about_section section_space bg-light">
        <div className="intro_about_content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className='wrap' style={{ position: 'relative' }}>
                  <Image
                    src={aboutData.banner.url}
                     layout="responsive"
                    height={aboutData.banner.height}
                    width={aboutData.banner.width}
                    alt="Techco - About Image"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="heading_block mb-0">
            <div className="row justify-content-lg-between">
              <div className="col-lg-4">
                <div className="heading_focus_text">
                  About
                  <span className="badge bg-secondary text-white">Techco 🙂</span>
                </div>
                <h2 className="heading_text mb-0">
                 {aboutData.headingsections}
                </h2>
              </div>
              <div className="col-lg-6">
                <p className="heading_description mb-0">
                  {aboutData.sections}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="policy_section bg-light">
        <div className="container">
          <div className="row">
            {aboutData?.tiles?.map((item, index) => {
              return (
                <div className="col-lg-4 mb-4" key={index}>
                  <div className="iconbox_block">
                    <div className="iconbox_icon">
                      <img src={item.icon} width={40} height={40} alt="Icon" />
                    </div>
                    <div className="iconbox_content">
                      <h3 className="iconbox_title">{item.title}</h3>
                      <p className="mb-0">{item.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="client_logo_section section_space">
        <div className="container">
          <div className="section_space pt-0">
            <div className="heading_block text-center">
              <div className="heading_focus_text mb-0">
                <span className="badge bg-secondary text-white">Brand We</span>
                Work With
              </div>
            </div>
            <div className="client_logo_carousel">
              <div className="swiper-wrapper">
                {
                  data.partnerCollection.items.map((feature, index) => (
                    <div className="swiper-slide" key={index}>
                      <div className="client_logo_item">
                        <Image src={feature.logo.url} alt={feature.company} width={feature.logo.width} height={feature.logo.height} />
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>

          <div className="row funfact_wrapper">
            <div className="col-lg-8">
              <div className="row">
                {aboutData.highlight.map((item, index) =>
                  <div className="col-md-6" key={index}>
                    <div className="funfact_block">
                      <div className="funfact_icon">
                        <img src={item.icon} alt="Techco SVG" />
                      </div>
                      <div className="funfact_content">
                        <div className="counter_value">
                          <span className="odometer" >{item.title}</span>
                        </div>
                        <h3 className="funfact_title mb-0">{item.description}</h3>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="col-lg-4">
              <div className="our_world_employees">
                <div className="image_wrap">
                  <img src={aboutData.highlightImage.url} alt="Techco - Employees Guoup Image" />
                </div>
                <div className="content_wrap">
                  <h3 className="title_text mb-0">
                    <b className="d-block">12000+</b> employees in 30 countries in Europe
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="team_section section_space xb-hidden">
        <div className="container">
          <div className="heading_block text-center">
            <div className="heading_focus_text">
              <span className="badge bg-secondary text-white">Our Expert</span>
              Team Members 😍
            </div>
            <h2 className="heading_text mb-0">
              Top Skilled Experts
            </h2>
          </div>
          <div className="team_carousel">
            <div className="swiper-wrapper">
              {teamData.teamCollection.items.map((member) => (
                <div key={member._id} className="swiper-slide">
                  <div className="team_block">
                    <div className="team_member_image">

                      <Link
                        className="image_wrap"
                        aria-label={`Details for ${member.fullName}`}
                        href={`team/${member.slug}`}
                      >
                        <img src={member.portrait.url} alt={`Portrait of ${member.fullName}`} />
                        <i className="fa-solid fa-arrow-up-right"></i>
                      </Link>
                    </div>
                    <div className="team_member_info">
                      <h3 className="team_member_name">
                        <Link href={`team/${member.slug}`} >
                          {member.fullName}
                        </Link>
                      </h3>
                      <h4 className="team_member_designation">{member.title}</h4>
                      <ul className="social_icons_block unordered_list justify-content-center">
                        {teamData.teamCollection.items[0].social.map((socialLink, index) => {
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
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="service_section section_space bg-light">
        <div className="container">
          <div className="row align-items-center justify-content-lg-between">
            <div className="col-lg-6">
              <div className="image_wrap">
                <img src="/assets/images/about/about_image_5.webp" alt="Techco - About Image" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="ps-lg-5">
                <div className="heading_block">
                  <div className="heading_focus_text">
                    <span className="badge bg-secondary text-white">Why Us</span>
                    Better
                  </div>
                  <h2 className="heading_text mb-0">
                    Why Our Services are Better Than Others?
                  </h2>
                </div>
                <ul className="service_facilities_group unordered_list">
                  {aboutData.whyUs.map((item, index) =>
                    <li key={index}>
                      <a className="iconbox_block layout_icon_left" href="#">
                        <span className="iconbox_icon">
                          <img src={item.icon} alt="Leaf SVG Icon" />
                        </span>
                        <span className="iconbox_content">
                          <strong className="iconbox_title mb-0">{item.description}</strong>
                        </span>
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}