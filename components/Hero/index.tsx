import { GET_HERO, HeroQuery, GET_LINKS, HeaderLinksQuery } from './query'
import Image from 'next/image'
import { ContactQuery, GET_CONTACT } from '@/app/contact/query'
import Link from 'next/link'
import { query } from '@/app/ApolloClient'

export default async function Hero() {
  const { data: linksCollection } = await query<HeaderLinksQuery>({ query: GET_LINKS })
  const { data: heroData } = await query<HeroQuery>({ query: GET_HERO })
  const { data: contactData } = await query<ContactQuery>({ query: GET_CONTACT })

  const contact = contactData?.page || {}

  const phone = contact?.tiles.find(tile => tile.id === 'phone')

  const {  contact: contactLink } = linksCollection?.links.header || {}
  const Herodata = heroData?.heroCollection.items[0]

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
                  <Link className="btn" href={contactLink.href}>
                    <span className="btn_label" data-text="Contact Us Today!">Contact Us Today!</span>
                    <span className="btn_icon">
                      <i className="fa-solid fa-arrow-up-right"></i>
                    </span>
                  </Link>
                </li>
                <li>
                  <a className="hotline_block" href={phone?.href}>
                    <span className="hotline_icon">
                      <i className="fa-solid fa-phone-volume"></i>
                    </span>
                    <span className="hotline_content">
                      <small>CONTACT US DAILY</small>
                      <strong className="text-white">{phone?.description}</strong>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="engine_image">
              <div className="image_wrap_1">
                <Image src="/assets/images/hero/circle_engine_1.webp" width={612} height={612} alt="Engine Image" />
              </div>
              <div className="image_wrap_2">
                <Image src="/assets/images/hero/circle_engine_2.webp" width={1792} height={1792} alt="Engine Image" />
              </div>
              <div className="image_wrap_3">
                <Image src="/assets/images/hero/circle_engine_3.webp" width={2273} height={2273} alt="Engine Image" />
              </div>
              <div className="image_wrap_4">
                <Image src="/assets/images/hero/circle_engine_4.png" width={716} height={676} alt="Engine Image" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="shape_image_1">
        <Image src="/assets/images/hero/shape_image_1.webp" width={4526} height={288} alt="Engine Image" />
      </div>
      <div className="shape_image_2">
        <Image src="/assets/images/hero/shape_image_2.webp" width={4744} height={488} alt="Engine Image" />
      </div>
      <div className="shape_image_3">
        <Image src="/assets/images/hero/shape_image_3.webp" width={1366} height={756} alt="Engine Image" />
      </div>
      <div className="shape_image_4">
        <Image src="/assets/images/hero/shape_image_4.webp" width={1386} height={755} alt="Engine Image" />
      </div>
    </section>
  )
}

