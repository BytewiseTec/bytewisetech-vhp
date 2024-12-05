
import { query } from '../../ApolloClient'
import Badge from '../../../components/Badge'
import PageBanner from '../../../components/PageBanner'
import { GET_TEAM_MEMBER, GET_TEAMMEMBER_ID, TeamMemberIdQuery, TeamMemberQuery } from './query'
import Image from 'next/image'
import Link from 'next/link'
import { renderHtml } from '../../../utils/renderers'
import { GET_TEAM_COLLECTION, TeamCollectionQuery } from '../query'
import { getSocialMediaIcon, getSocialMediaName } from '../../../utils/helpers'

interface TeamMemberProbsPage {
  params: Promise<{ slug: string }>
}
export default async function TeamMemberDetailsPage({ params }: TeamMemberProbsPage) {
  const { slug } = await params
  const { data: TeamsData } = await query<TeamMemberIdQuery>({
    query: GET_TEAMMEMBER_ID,
    variables: {
      slug,
    }
  })
  const { items } = TeamsData.teamCollection || {}

  if (!items?.length) {
    return null
  }

  const { data: teamData } = await query<TeamMemberQuery>({
    query: GET_TEAM_MEMBER,
    variables: {
      id: items?.[0]?.sys.id
    },
  })
  const { team } = teamData || {}
  return (
    <>
      <PageBanner title={team.fullName}>
        Details 😍
        <Badge>Team</Badge>
      </PageBanner>

      <section className="team_details_section section_space bg-light">
        <div className="container">
          <div className="team_member_details_card">
            <div className="team_member_image">
              <Image width={team.portrait.width} height={team.portrait.height} src={team.portrait.url} alt="Team Member Image" />
            </div>
            <div className="team_member_content">
              <h2 className="team_member_name">{team.fullName}</h2>
              <ul className="icon_list unordered_list_block">
                <li>
                  <span className="icon_list_text">
                    <strong>Responsibility:</strong>
                    {team.title}
                  </span>
                </li>
                <li>
                  <span className="icon_list_text">
                    <strong>Experience:</strong>
                    {team.experience}
                  </span>
                </li>
                <li>
                  <span className="icon_list_text">
                    <strong>Email:</strong>
                    {team.email}
                  </span>
                </li>
                <li>
                  <span className="icon_list_text">
                    <strong>Phone:</strong>
                    {team.phone}
                  </span>
                </li>
              </ul>
              <div className="social_wrapper">
                <h3 className="social_title">Social Media</h3>
                <ul className="social_icons_block unordered_list">
                {team.social?.map((socialLink, index) => {
                 
                    const Icon = getSocialMediaIcon(socialLink)
                    const name = getSocialMediaName(socialLink)

                    if (!Icon || !name) {
                      return null
                    }
                    
                    return (
                      <li key={index}>
                        <Link href={socialLink} target="_blank" rel="noopener noreferrer">
                          <Icon size={24} className={name} />
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </div>

          <h3 className="details_item_info_title">Professional Skills</h3>
          <p> {team.bio} </p>
          <div className="row mb-5">
            {team.skillLevel?.map((skill, index) => (
              <div className="col-lg-3 col-md-6 col-sm-6" key={index}>
                <div className="funfact_block text-center">
                  <div className="counter_value">
                    <span>
                      {skill.description}
                    </span>
                  </div>
                  <h3 className="funfact_title mb-0">{skill.label}</h3>
                  <div className={`bottom_line ${skill.color}`}></div>
                </div>
              </div>
            ))}
          </div>

          <h3 className="details_item_info_title">Educational Experience</h3>
          <p>
          {team.p0 && (
            <div>
              {team.p0 && <div dangerouslySetInnerHTML={{ __html: renderHtml(team.p0.json) }} />}
            </div>
          )}
          </p>
         
          <ul className="icon_list unordered_list_block">
            {team.qualifications?.map((qualification, index) => (
              <li key={index}>
                <span className="icon_list_icon">
                  <i className="fa-solid fa-circle fa-fw"></i>
                </span>
                <span className="icon_list_text">{qualification}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}

export async function generateStaticParams() {
  const { data } = await query<TeamCollectionQuery>({
    query: GET_TEAM_COLLECTION,
  })

  const { items } = data.teamCollection || {}

  return items.map(({ slug }) => ({ slug }))
}
