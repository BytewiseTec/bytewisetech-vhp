
import { query } from '../../ApolloClient'
import Badge from '../../../components/Badge'
import PageBanner from '../../../components/PageBanner'
import { GET_TEAM_MEMBER, GET_TEAMMEMBER_ID, TeamMemberIdQuery, TeamMemberQuery } from './query'
import Image from 'next/image'
import Link from 'next/link'
import { renderHtml } from '../../../utils/renderers'
import FacebookIcon from '/public/assets/images/icons/icon_facebook.svg'
import LinkedInIcon from '/public/assets/images/icons/icon_linkedin.svg'
import GitHubIcon from '/public/assets/images/icons/icon_git.svg'
const getSocialMediaIcon = (url: string) => {
  if (url.includes('https://www.facebook.com/people/Bytewise-Technologies/61566440639702/')) return FacebookIcon
  if (url.includes('https://github.com/BytewiseTec')) return GitHubIcon
  if (url.includes('https://www.linkedin.com/company/bytewise-tech')) return LinkedInIcon
  return null
}

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
              <img src={team.portrait.url} alt="Team Member Image" />
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
                    
                    return (
                      <li key={index}>
                        <Link href={socialLink} target="_blank" rel="noopener noreferrer">
                          <Image
                            src={Icon}
                            alt={`Icon for ${socialLink}`}
                            width={24}
                            height={24}
                          />
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