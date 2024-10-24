import { GET_SERVICES, ServicesQuery } from './query'
import { query } from '../ApolloClient'
import Link from 'next/link'


export default async function ServicesPage() {
const { data, loading, error } = await query<ServicesQuery>({
  query:GET_SERVICES
})

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error loading services: {error.message}</div>
  if (!data || !data.serviceCollection.items.length) {
    return <div>No service available</div>
  }
  return (
    <>
      <section
        className="page_banner_section text-center"
      >
        <div className="container">
          <div className="heading_focus_text text-white">
            Our Main
            <span className="badge bg-secondary">Services 😍</span>
          </div>
          <h1 className="page_title mb-0 text-white">Our Services</h1>
        </div>
      </section>

      <section className="about_section section_space bg-light">
        <div className="container">
          <div className="row align-items-center justify-content-lg-between">
            <div className="col-lg-5 order-lg-last">
              <div className="team_cartoon_image">
                <img src="/assets/images/services/service_image_8.webp" alt="Service Cartoon Image - Bytewise Tech - About Image" />
              </div>
            </div>
            <div className="col-lg-5">
              <div className="about_content">
                <div className="heading_block">
                  <div className="heading_focus_text">
                    We Are
                    <span className="badge bg-secondary text-white">IT Guidance 🙂</span>
                  </div>
                  <h2 className="heading_text">
                    Tailored IT Solutions for Your Success
                  </h2>
                  <p className="heading_description mb-0">
                    we understand that every business is unique, with its own set of challenges, goals, and aspirations. That&apos;s why we offer tailored IT solutions designed.
                  </p>
                </div>
                <a className="btn" href="contact.html">
                  <span className="btn_label" data-text="Talk to an Expert">Talk to an Expert</span>
                  <span className="btn_icon">
                    <i className="fa-solid fa-arrow-up-right"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service_section section_space">
        <div className="container">
          <div className="heading_block text-center">
            <div className="heading_focus_text">
              Our
              <span className="badge bg-secondary text-white">Specialize</span>
            </div>
            <h2 className="heading_text mb-0">
              Featured Services
            </h2>
          </div>

          <div className="row">
            {data.serviceCollection.items.map((service, index) => {
              let colClass
              if (index < 2) {
                colClass = 'col-lg-6'
              } else if (index < 5) {
                colClass = 'col-lg-4'
              } else {
                colClass = 'col-lg-6'
              }

              return (
                <div className={colClass} key={service._id}>
                  <div className="service_block">
                    <div className="service_image">
                      {service.banner && (
                        <img src={service.banner.url} alt={service.banner.title} />
                      )}
                    </div>
                    <div className="service_content">
                      <h3 className="service_title">
                        <Link href={`/services/${service.slug}`}>
                          {service.name}
                        </Link>
                      </h3>
                      <div className="links_wrapper">
                        <ul className="category_btns_group unordered_list">
                          <li><a href="#!">{service.heading}</a></li>
                          <li><a href="#!">{service.heading2}</a></li>
                        </ul>
                        <a className="icon_block" href={`/services/${service.slug}`}>
                          <i className="fa-regular fa-arrow-up-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="service_section section_space bg-light">
        <div className="container">
          <div className="row align-items-center justify-content-lg-between">
            <div className="col-lg-6">
              <div className="image_wrap">
                <img src="/assets/images/about/about_image_5.webp" alt="Bytewise Tech - About Image" />
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
                  <li>
                    <a className="iconbox_block layout_icon_left" href="service_details.html">
                      <span className="iconbox_icon">
                        <img src="/assets/images/icons/icon_check_2.svg" alt="Check SVG Icon" />
                      </span>
                      <span className="iconbox_content">
                        <strong className="iconbox_title mb-0">Quality Comes First</strong>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a className="iconbox_block layout_icon_left" href="service_details.html">
                      <span className="iconbox_icon">
                        <img src="/assets/images/icons/icon_leaf.svg" alt="Leaf SVG Icon" />
                      </span>
                      <span className="iconbox_content">
                        <strong className="iconbox_title mb-0">Flexible Cooperation</strong>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a className="iconbox_block layout_icon_left" href="service_details.html">
                      <span className="iconbox_icon">
                        <img src="/assets/images/icons/icon_box.svg" alt="Box SVG Icon" />
                      </span>
                      <span className="iconbox_content">
                        <strong className="iconbox_title mb-0">On-time Delivery</strong>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a className="iconbox_block layout_icon_left" href="service_details.html">
                      <span className="iconbox_icon">
                        <img src="/assets/images/icons/icon_receipt_add.svg" alt="Receipt Add SVG Icon" />
                      </span>
                      <span className="iconbox_content">
                        <strong className="iconbox_title mb-0">Transparent Costs</strong>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a className="iconbox_block layout_icon_left" href="service_details.html">
                      <span className="iconbox_icon">
                        <img src="/assets/images/icons/icon_monitor.svg" alt="Monitor SVG Icon" />
                      </span>
                      <span className="iconbox_content">
                        <strong className="iconbox_title mb-0">Qualified Developers</strong>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a className="iconbox_block layout_icon_left" href="service_details.html">
                      <span className="iconbox_icon">
                        <img src="/assets/images/icons/icon_microscope.svg" alt="Microscope SVG Icon" />
                      </span>
                      <span className="iconbox_content">
                        <strong className="iconbox_title mb-0">Quick Scale-up</strong>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
