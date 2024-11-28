'use client'
import { useState } from 'react'
import { GET_BANNER, BannerQuery, Technology, TechnologyQuery, GET_TECHNOLOGY } from './query'
import { useSuspenseQuery } from '@apollo/client'
import Image from 'next/image'
function groupByStack(items: Technology[]): { [key: string]: Technology[] } {
  return items.reduce((acc, item) => {
    if (!acc[item.stack]) {
      acc[item.stack] = []
    }
    acc[item.stack].push(item)
    return acc
  }, {} as { [key: string]: Technology[] })
}

export default function TechnologyReview() {
  const { data } = useSuspenseQuery<BannerQuery>(GET_BANNER)
  const bannerData = data?.bannerCollection?.items[0].data || []
  const [activeTab, setActiveTab] = useState<string>('')
  const { data: TechnologyData, error } = useSuspenseQuery<TechnologyQuery>(GET_TECHNOLOGY)
  if (error) {
    console.error('Error fetching technology data:', error)
    return <div>Error loading technology data.</div>
  }

  const groupedTechnologies = groupByStack(TechnologyData.technologiesCollection.items)
  if (activeTab === '' && Object.keys(groupedTechnologies).length > 0) {
    setActiveTab(Object.keys(groupedTechnologies)[0])
  }

  return (
    <section className="process_technology_review_section bg-light section_decoration">
      <div className="container">
        <div className="row align-items-center justify-content-lg-between">
          <div className="col-lg-6">
            <div className="heading_block">
              <div
                className="heading_focus_text has_underline d-inline-flex"
                style={{ backgroundImage: 'url(\'assets/images/shapes/shape_title_under_line.svg\')' }}
              >
                Working Process
              </div>
              <h2 className="heading_text mb-0">
                Our <mark>Approach</mark>
              </h2>
            </div>
            <div className="accordion" id="service_process_faq">
              <div className="accordion-item">
                <div className="accordion-button" role="button" data-bs-toggle="collapse" data-bs-target="#collapse_one" aria-expanded="true" aria-controls="collapse_one">
                  01. Discovery Phase
                </div>
                <div id="collapse_one" className="accordion-collapse collapse show" data-bs-parent="#service_process_faq">
                  <div className="accordion-body">
                    <p className="m-0">
                      Data - driven diagnostic and predictive app for improving  outcomes Data driven diagnostic and predictive app for improving.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <div className="accordion-button collapsed" role="button" data-bs-toggle="collapse" data-bs-target="#collapse_two" aria-expanded="false" aria-controls="collapse_two">
                  02. Design and Development
                </div>
                <div id="collapse_two" className="accordion-collapse collapse" data-bs-parent="#service_process_faq">
                  <div className="accordion-body">
                    <p className="m-0">
                      Data - driven diagnostic and predictive app for improving  outcomes Data driven diagnostic and predictive app for improving.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <div className="accordion-button collapsed" role="button" data-bs-toggle="collapse" data-bs-target="#collapse_three" aria-expanded="false" aria-controls="collapse_three">
                  03. Maintenance
                </div>
                <div id="collapse_three" className="accordion-collapse collapse" data-bs-parent="#service_process_faq">
                  <div className="accordion-body">
                    <p className="m-0">
                      Data - driven diagnostic and predictive app for improving  outcomes Data driven diagnostic and predictive app for improving.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <div className="accordion-button collapsed" role="button" data-bs-toggle="collapse" data-bs-target="#collapse_four" aria-expanded="false" aria-controls="collapse_four">
                  04. Deployment
                </div>
                <div id="collapse_four" className="accordion-collapse collapse" data-bs-parent="#service_process_faq">
                  <div className="accordion-body">
                    <p className="m-0">
                      Data - driven diagnostic and predictive app for improving  outcomes Data driven diagnostic and predictive app for improving.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <div className="accordion-button collapsed" role="button" data-bs-toggle="collapse" data-bs-target="#collapse_five" aria-expanded="false" aria-controls="collapse_five">
                  05. Testing and QA
                </div>
                <div id="collapse_five" className="accordion-collapse collapse" data-bs-parent="#service_process_faq">
                  <div className="accordion-body">
                    <p className="m-0">
                      Data - driven diagnostic and predictive app for improving  outcomes Data driven diagnostic and predictive app for improving.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <ul className="content_layer_group unordered_list_block text-center">
              <li role="button" data-bs-toggle="collapse" data-bs-target="#collapse_one" aria-expanded="true" aria-controls="collapse_one"><span>Discovery Phase</span></li>
              <li data-bs-toggle="collapse" data-bs-target="#collapse_two" aria-expanded="false" aria-controls="collapse_two"><span>Design and Development</span></li>
              <li data-bs-toggle="collapse" data-bs-target="#collapse_three" aria-expanded="false" aria-controls="collapse_three"><span>Maintenance</span></li>
              <li data-bs-toggle="collapse" data-bs-target="#collapse_four" aria-expanded="false" aria-controls="collapse_four"><span>Deployment</span></li>
              <li role="button" data-bs-toggle="collapse" data-bs-target="#collapse_five" aria-expanded="false" aria-controls="collapse_five"><span>Testing and QA</span></li>
            </ul>
          </div>
        </div>
        <div className="section_space">
          <div className="heading_block text-center">
            <div
              className="heading_focus_text has_underline d-inline-flex"
              style={{ backgroundImage: 'url(\'assets/images/shapes/shape_title_under_line.svg\')' }}
            > Our Technologies
            </div>
            <h2 className="heading_text mb-0">
              We Use <mark>Technologies</mark>
            </h2>
          </div>

          <div className="tab_block_wrapper">
            <ul className="nav justify-content-center" role="tablist">
              {Object.keys(groupedTechnologies).map((stack, index) => (
                <li key={index} className="nav-item" role="presentation">
                  <button
                    className={`nav-link ${stack === activeTab ? 'active' : ''}`}
                    data-bs-toggle="tab"
                    data-bs-target={`#tab_${stack}`}
                    type="button"
                    role="tab"
                    aria-selected={stack === activeTab ? 'true' : 'false'}
                    onClick={() => setActiveTab(stack)}
                  >
                    {stack}
                  </button>
                </li>
              ))}
            </ul>
            <div className="tab-content">
              {Object.keys(groupedTechnologies).map((stack, index) => (
                <div
                  key={index}
                  className={`tab-pane fade ${stack === activeTab ? 'show active' : ''}`}
                  id={`tab_${stack}`}
                  role="tabpanel"
                >
                  <div className="web_development_technologies row justify-content-center">
                    {stack === activeTab && groupedTechnologies[stack].map((item) => (
                      <div key={item._id} className="col-lg-2 col-md-3 col-sm-4 col-6 justify-content-center d-flex">
                        <a href={item.url} target="_blank" rel="nofollow noopener">
                          <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                            <div className="iconbox_icon">
                              <Image
                                src={item.logo.url}
                                alt={item.name}
                                width={item.logo.width}
                                height={item.logo.height}
                                title={item.name}
                              />
                            </div>
                            <div className="iconbox_content">
                              <h3 className="iconbox_title mb-0">{item.name}</h3>
                            </div>
                          </div>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* <div className="row">
          <div className="col-lg-4">
            <div className="deals_winner_customers">
              <h3 className="title_text">
                <mark>3,900+</mark> customers win deals with Infitude
              </h3>
              <div className="row">
                <div className="col-6">
                  <div className="review_short_info">
                    <div className="icon">
                      <img src="/assets/images/icons/icon_c.svg" alt="C SVG Icon" />
                    </div>
                    <ul className="rating_block unordered_list">
                      <li><i className="fa-solid fa-star fa-fw"></i></li>
                      <li><i className="fa-solid fa-star fa-fw"></i></li>
                      <li><i className="fa-solid fa-star fa-fw"></i></li>
                      <li><i className="fa-solid fa-star fa-fw"></i></li>
                      <li><i className="fa-solid fa-star fa-fw"></i></li>
                    </ul>
                    <div className="review_counter">From <b>200+</b> reviews</div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="review_short_info">
                    <div className="icon">
                      <img src="/assets/images/icons/icon_g2.svg" alt="C SVG Icon" />
                    </div>
                    <ul className="rating_block unordered_list">
                      <li><i className="fa-solid fa-star fa-fw"></i></li>
                      <li><i className="fa-solid fa-star fa-fw"></i></li>
                      <li><i className="fa-solid fa-star fa-fw"></i></li>
                      <li><i className="fa-solid fa-star fa-fw"></i></li>
                      <li><i className="fa-solid fa-star fa-fw"></i></li>
                    </ul>
                    <div className="review_counter">From <b>300+</b> reviews</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="review_onecol_wrapper">
              <div className="review_onecol_carousel swiper">
                <div className="swiper-wrapper">
                  {bannerData.map((items, index) => (
                    <div key={index} className="swiper-slide">
                      <div className="review_block_2">
                        <h3 className="review_title">“Amazing Software services”</h3>
                        <p className="review_commtent">{items.description}</p>
                        <div className="d-md-flex justify-content-md-between">
                          <div className="review_admin">
                            <div className="review_admin_image">
                              <img src={items.icon} alt="Maverick Phoenix " />
                            </div>
                            <div className="review_admin_info">
                              <h4 className="review_admin_name">{items.title}</h4>
                              <span className="review_admin_designation">{items.href}</span>
                              <div className="review_admin_country">
                                <span className="country_flag">
                                  <img src={items.image} alt="Country Flag" />
                                </span>
                                <span className="country_text">{items.list}</span>
                              </div>
                            </div>
                          </div>
                          <div className="review_admin_logo">
                            <img src="/assets/images/clients/client_logo_8.webp" alt="Review Admin Logo" />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                </div>
                <div className="carousel_arrows_nav">
                  <button type="button" className="r1cc-swiper-button-prev">
                    <i className="fa-solid fa-arrow-left"></i>
                  </button>
                  <button type="button" className="r1cc-swiper-button-next">
                    <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>

      {/* <div className="decoration_item shape_image_1">
        <img src="/assets/images/shapes/shape_line_2.svg" alt="Bytewise Tech Shape" />
      </div>
      <div className="decoration_item shape_image_2">
        <img src="/assets/images/shapes/shape_line_3.svg" alt="Bytewise Tech Shape" />
      </div>
      <div className="decoration_item shape_image_3">
        <img src="/assets/images/shapes/shape_line_4.svg" alt="Bytewise Tech Shape" />
      </div>
      <div className="decoration_item shape_image_4">
        <img src="/assets/images/shapes/shape_space_3.svg" alt="Bytewise Tech Shape" />
      </div> */}
    </section>
  )
}