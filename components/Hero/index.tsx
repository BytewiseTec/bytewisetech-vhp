'use client'
import { useSuspenseQuery } from '@apollo/client'
import {GET_HERO,HeroQuery,GET_LINKS, HeaderLinksQuery } from './query'

export default function Hero() {
  const { data: linksCollection } = useSuspenseQuery<HeaderLinksQuery>(GET_LINKS)
  const { data: heroData } = useSuspenseQuery<HeroQuery>(GET_HERO)
  const {  contact } = linksCollection?.links.header || {}
  const Herodata=heroData?.heroCollection.items[0]
  return (
    <section className="software_company_hero_section xb-hidden">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="content_wrap">
              <div
                className="heading_focus_text has_underline text-white d-inline-flex"
                style={{
                  backgroundImage: 'url(\'assets/images/shapes/shape_title_under_line.svg\')'
                }}
              >
                {Herodata.title}
              </div>
              <h1 className="text-white">
              Solutions tailored to your <mark>business</mark> needs, not just tech.
              </h1>
              <p>
              {Herodata.description}
              </p>
              <ul className="step_list text-white unordered_list_block">
                {Herodata.points.map((items,index)=>
                 <li key={index}>{items}</li>
                )}
              </ul>
              <ul className="btns_group unordered_list p-0 justify-content-start">
                <li>
                  <a className="btn" href={contact.href}>
                    <span className="btn_label" data-text="Contact Us Today!">Contact Us Today!</span>
                    <span className="btn_icon">
                      <i className="fa-solid fa-arrow-up-right"></i>
                    </span>
                  </a>
                </li>
                <li>
                  <a className="hotline_block" href={Herodata.phone}>
                    <span className="hotline_icon">
                      <i className="fa-solid fa-phone-volume"></i>
                    </span>
                    <span className="hotline_content">
                      <small>CONTACT US DAILY</small>
                      <strong className="text-white">{Herodata.phone}</strong>
                    </span>
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="engine_image">
              <div className="image_wrap_1">
                <img src="/assets/images/hero/circle_engine_1.webp" alt="Engine Image" />
              </div>
              <div className="image_wrap_2">
                <img src="/assets/images/hero/circle_engine_2.webp" alt="Engine Image" />
              </div>
              <div className="image_wrap_3">
                <img src="/assets/images/hero/circle_engine_3.webp" alt="Engine Image" />
              </div>
              <div className="image_wrap_4">
                <img src="/assets/images/hero/circle_engine_4.png" alt="Engine Image" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="shape_image_1">
        <img src="/assets/images/hero/shape_image_1.webp" alt="Engine Image" />
      </div>
      <div className="shape_image_2">
        <img src="/assets/images/hero/shape_image_2.webp" alt="Engine Image" />
      </div>
      <div className="shape_image_3">
        <img src="/assets/images/hero/shape_image_3.webp" alt="Engine Image" />
      </div>
      <div className="shape_image_4">
        <img src="/assets/images/hero/shape_image_4.webp" alt="Engine Image" />
      </div>
    </section>
  )
}

