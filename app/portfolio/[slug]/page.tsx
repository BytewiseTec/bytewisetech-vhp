import { query } from '../../ApolloClient'
import PageBanner from '../../../components/PageBanner'
import { GET_PROJECT, GET_PROJECT_ID, ProjectIdQuery, ProjectQuery } from './query'
import Image from 'next/image'
import { renderDomToReact } from '../../../utils/renderers'
import { GET_PROJECTS, ProjectsQuery } from '../query'
import generateStructuredData from '@/utils/structured-data'

import IconCheck from '../../../public/assets/images/icons/icon_check_3.svg'
import { Metadata } from 'next'

interface PortfolioDetailsPageProps {
  params: Promise<{slug: string;}>
}

export async function generateMetadata(
  { params }: PortfolioDetailsPageProps,
): Promise<Metadata> {
  const { slug } = await params
  const { data: projectsData } = await query<ProjectIdQuery>({
    query: GET_PROJECT_ID,
    variables:{
      slug,
    }
  })

  const { items } = projectsData.projectCollection || {}

  if (!items?.length) {
    return {}
  }

  const { data: projectData } = await query<ProjectQuery>({
    query: GET_PROJECT,
    variables: {
      id: items?.[0]?.sys.id
    },
  })

  const { project } = projectData || {}

  if (!project) {
    return {}
  }

  return {
    title: `${project.name} - Bytewise Technologies`,
    description: project.short,
    keywords: project.requirements,
    openGraph: {
      locale: 'en_US',
      type: 'website',
      title: `${project.name} - Bytewise Technologies`,
      description: project.short,
      url: `https://bytewisetechnologies.com/portfolio/${slug}`,
      siteName: 'Bytewise Technologies',
    },
    alternates: {
      canonical: `https://bytewisetechnologies.com/portfolio/${slug}`,
    }
  }
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

  const jsonLd = generateStructuredData([
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://bytewisetechnologies.com/#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://bytewisetechnologies.com/' },
        { '@type': 'ListItem', position: 2, name: 'Portfolio', item: 'https://bytewisetechnologies.com/portfolio' },
        { '@type': 'ListItem', position: 3, name: project.name },
      ],
    }
  ])

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageBanner
        title={project.name}
        breadcrumb={[
          { name: 'Home', url: '/' },
          { name: 'Portfolio', url: '/portfolio' },
          { name: project.name },
        ]}
      />

      <section className="portfolio_details_section section_space bg-light">
        <div className="container">
          <div className="details_item_image">
            <Image src={project.banner.url} width={project.banner.width} height={project.banner.height} alt={project.banner.title} />
          </div>
          {project.p0 && renderDomToReact(project.p0.json)}
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

          {project.p1 && renderDomToReact(project.p1.json)}

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

          {project.p2 && renderDomToReact(project.p2.json)}

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
