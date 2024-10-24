import React from 'react'
import { GET_TEAM_COLLECTION, TeamCollectionQuery } from './query'
import Link from 'next/link'
import { GET_ROUTES, RouteLinksQuery } from '../global.query'
import { query } from '../ApolloClient'
const getSocialMediaIcon = (url: string) => {
  if (url.includes('https://www.facebook.com/people/Bytewise-Technologies/61566440639702/')) return  'fa-facebook-f'
  if (url.includes('https://github.com/BytewiseTec')) return 'fa-github'
  if (url.includes('https://www.linkedin.com/company/bytewise-tech')) return 'fa-linkedin-in'
  return null
}
export default async function TeamPage() {
  const { data, error } = await query<TeamCollectionQuery>({
    query: GET_TEAM_COLLECTION
  })

  const { data: routesData } = await query<RouteLinksQuery>({
    query: GET_ROUTES,
    variables:{
      id: '5wSNq34HGEvBudALxOO3ZD'
    }
  })
  const teamsPageRoute = routesData.links?.routes?.team

  if (error) return <div>Error loading team members</div>
  if (!data || !data.teamCollection.items.length) {
    return <div>No team members available</div>
  }

  return (
    <>
      <section
        className="page_banner_section text-center"
      >
        <div className="container">
          <div className="heading_focus_text text-white">
            <span className="badge bg-secondary">Team 😍</span>
          </div>
        </div>
      </section>

      <section className="about_section section_space bg-light">
        <div className="container">
          <div className="row align-items-center justify-content-lg-between">
            <div className="col-lg-6 order-lg-last">
              <div className="team_cartoon_image">
                <img src="/assets/images/team/team.png" alt="Team Cartoon Image - Bytewise Tech - About Image" />
              </div>
            </div>
            <div className="col-lg-5">
              <div className="about_content">
                <div className="heading_block">
                  <div className="heading_focus_text">
                    Our Dedicated
                    <span className="badge bg-secondary text-white">Team 🙂</span>
                  </div>
                  <h2 className="heading_text">
                    Get to Know Our Bytewise Team
                  </h2>
                  <p className="heading_description mb-0">
                  Bytewise Technologies is inviting you to meet their exceptional team of IT professionals who are revolutionizing the industry with their innovative ideas and groundbreaking work.
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

      {/* <section className="team_section section_space">
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

          <div className="row">
            {data.teamCollection.items.map((member) => (
              <div key={member._id} className="col-lg-4 col-md-6 col-sm-6">
                <div className="team_block">
                  <div className="team_member_image">
                    
                  <Link
                      className="image_wrap"
                      aria-label={`Details for ${member.fullName}`}
                      href={`${teamsPageRoute}/${member.slug}`} 
                    >
                      <img src={member.portrait.url} alt={`Portrait of ${member.fullName}`} />
                      <i className="fa-solid fa-arrow-up-right"></i>
                    </Link>
                  </div>
                  <div className="team_member_info">
                    <h3 className="team_member_name">
                      <Link   href={`${teamsPageRoute}/${member.slug}`} >
                        {member.fullName}
                      </Link>
                    </h3>
                    <h4 className="team_member_designation">{member.title}</h4>
                    <ul className="social_icons_block unordered_list justify-content-center"> 
                  {data.teamCollection.items[0].social.map((socialLink, index) => {
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
      </section>

      <section className="team_map_section section_space pb-0 bg-light">
        <div className="container">
          <div className="heading_block text-center">
            <div className="heading_focus_text">
              <span className="badge bg-secondary text-white">Bytewise Tech </span>
              Company 😍
            </div>
            <h2 className="heading_text mb-0">
              Our Global Team is Growing
            </h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="team_map_image text-center">
                <img src="/assets/images/team/team_map.webp" alt="Bytewise Tech - Team Map Image" />
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  )
}
