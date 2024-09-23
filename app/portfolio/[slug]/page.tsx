import { query } from '@/app/ApolloClient'
import Badge from '@/components/Badge'
import PageBanner from '@/components/PageBanner'
import { GET_PROJECT, GET_PROJECT_ID, ProjectIdQuery, ProjectQuery } from './query'
import Image from 'next/image'
import { renderHtml } from '@/utils/renderers'

interface PortfolioDetailsPageProps {
  params: {
    slug: string;
  }
}

export default async function PortfolioDetailsPage({ params }: PortfolioDetailsPageProps) {
  const { data: projectsData } = await query<ProjectIdQuery>({
    query: GET_PROJECT_ID,
    variables: {
      slug: params.slug
    }
  })

  const { items } = projectsData.projectCollection || {}

  const { data: projectData } = await query<ProjectQuery>({
    query: GET_PROJECT,
    variables: {
      id: items?.[0]?.sys.id
    },
  })

  const { project } = projectData || {}

  return (
    <>
      <PageBanner title={project.name}>
        {project.name}
        <Badge>Details 😍</Badge>
      </PageBanner>
      <section className="portfolio_details_section section_space bg-light">
        <div className="container">
          <div className="details_item_image">
            <Image src={project.banner.url} width={project.banner.width} height={project.banner.height} alt={project.banner.title} />
          </div>
          {project.p0 && <div dangerouslySetInnerHTML={{ __html: renderHtml(project.p0.json) }} />}
          <hr />
          <ul className="portfolio_details_info_list icon_list unordered_list justify-content-lg-between mb-5">
            <li>
              <span className="icon_list_text">
                <strong className="text-dark text-uppercase">Services:</strong>&nbsp;
                {project.info.services}
              </span>
            </li>
            <li>
              <span className="icon_list_text">
                <strong className="text-dark text-uppercase">Client:</strong>&nbsp;
                {project.info.client}
              </span>
            </li>
            <li>
              <span className="icon_list_text">
                <strong className="text-dark text-uppercase">Location:</strong>&nbsp;
                {project.address}
              </span>
            </li>
            <li>
              <span className="icon_list_text">
                <strong className="text-dark text-uppercase">Completed Date:</strong>&nbsp;
                {project.info.completedOn}
              </span>
            </li>
          </ul>

          {project.p1 && <div dangerouslySetInnerHTML={{ __html: renderHtml(project.p1.json) }} />}

          <div className="row mb-4">
            <div className="col-lg-5">
              <ul className="icon_list unordered_list_block">
                {project.requirements.slice(0, project.requirements.length / 2).map((requirement, index) => (
                  <li key={index}>
                    <span className="icon_list_icon">
                      <img src="/assets/images/icons/icon_check_3.svg" alt="Check SVG Icon" />
                    </span>
                    <span className="icon_list_text">
                      {requirement}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-5">
              <ul className="icon_list unordered_list_block">
                {project.requirements.slice(project.requirements.length / 2).map((requirement, index) => (
                  <li key={index}>
                    <span className="icon_list_icon">
                      <img src="/assets/images/icons/icon_check_3.svg" alt="Check SVG Icon" />
                    </span>
                    <span className="icon_list_text">
                      {requirement}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {project.p2 && <div dangerouslySetInnerHTML={{ __html: renderHtml(project.p2.json) }} />}

        </div>
      </section>
    </>
  )
}