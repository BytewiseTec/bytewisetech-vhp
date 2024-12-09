import { query } from '../../ApolloClient'
import Badge from '../../../components/Badge'
import PageBanner from '../../../components/PageBanner'
import { GET_PROJECT, GET_PROJECT_ID, ProjectIdQuery, ProjectQuery } from './query'
import Image from 'next/image'
import { renderHtml } from '../../../utils/renderers'
import { GET_PROJECTS, ProjectsQuery } from '../query'

import IconCheck from '../../../public/assets/images/icons/icon_check_3.svg'
import Link from 'next/link'

interface PortfolioDetailsPageProps {
  params: Promise<{slug: string;}>
}

export default async function PortfolioDetailsPage({ params }: PortfolioDetailsPageProps) {
  const { slug } = await params
  const { data: projectsData } = await query<ProjectIdQuery>({
    query: GET_PROJECT_ID,
    variables:{
      slug,
    }
  })

  const { items } = projectsData.projectCollection || {}

  if (!items?.length) {
    return null
  }

  const { data: projectData } = await query<ProjectQuery>({
    query: GET_PROJECT,
    variables: {
      id: items?.[0]?.sys.id
    },
  })

  const { project } = projectData || {}

  return (
    <>
      <PageBanner title={project.name} />

      <nav aria-label="breadcrumb" className="bg-light">
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link href="/">Home</Link></li>
            <li className="breadcrumb-item active">
              <Link href="/portfolio">Portfolio</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">{project.name}</li>
          </ol>
        </div>
      </nav>

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
                      <Image src={IconCheck} alt="Check SVG Icon" />
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
                      <Image src={IconCheck} alt="Check SVG Icon" />
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

export async function generateStaticParams() {
  const { data: projectsData } = await query<ProjectsQuery>({query: GET_PROJECTS})

  const { items: projects } = projectsData.projectCollection || {}

  return projects?.map((project) => ({
    slug: project.slug,
  }))
}
