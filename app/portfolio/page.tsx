import Image from 'next/image'
import { query } from '../ApolloClient'
import { GET_PROJECTS, ProjectsQuery } from './query'
import Link from 'next/link'
import { Metadata } from 'next'
import { FaBuilding, FaTags } from 'react-icons/fa'
import PageBanner from '../../components/PageBanner'
import generateStructuredData from '@/utils/structured-data'
import Carousel from '@/components/Shared/Carousel'

export const metadata: Metadata = {
  title: 'Portfolio - Bytewise Technologies',
  description: 'Our portfolio showcases the projects we have worked on. We have worked with clients from various industries and fields.',
  keywords: 'portfolio, projects, clients, industries, fields, showcase',
  authors: { name: 'Bytewise Technologies', url: 'https://bytewisetechnologies.com' },
  openGraph: {
    locale: 'en_US',
    type: 'website',
    title: 'Portfolio - Bytewise Technologies',
    description: 'Our portfolio showcases the projects we have worked on. We have worked with clients from various industries and fields.',
    url: 'https://bytewisetechnologies.com/portfolio',
    siteName: 'Bytewise Technologies',
  },
  alternates: {
    canonical: 'https://bytewisetechnologies.com/portfolio',
  }
}

export default async function PortfolioPage() {
  const { data: projectsData } = await query<ProjectsQuery>({ query: GET_PROJECTS })

  const { items: projects } = projectsData.projectCollection || {}

  const jsonLd = generateStructuredData([
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://bytewisetechnologies.com/#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://bytewisetechnologies.com/' },
        { '@type': 'ListItem', position: 2, name: 'Portfolio' },
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
        title="Portfolio"
        breadcrumb={[
          { name: 'Home', url: '/' },
          { name: 'Portfolio' },
        ]}
      />

      <section className="portfolio_section section_space bg-light">
        <div className="container">
          <div className="filter_elements_wrapper row">
            {projects?.map((project, index) => (
              <div className="col-lg-6 technology" key={project._id}>
                <div className="portfolio_block portfolio_layout_2">
                  <div className="portfolio_image">
                    <Link className="portfolio_image_wrap bg-light" href={`/portfolio/${project.slug}`}>
                      <Carousel
                        id={`portfolioCarousel${index}`}
                        slides={
                          project.highlightImagesCollection.items.map((image) => ({
                            image: {
                              src: image.url,
                              width: image.width,
                              height: image.height
                            },
                            alt: image.title
                          }))}
                        />
                    </Link>
                  </div>
                  <div className="portfolio_content">
                    <h3 className="portfolio_title">
                      <Link href={`/portfolio/${project.slug}`}>
                        {project.name}
                      </Link>
                    </h3>
                    <ul className="category_list unordered_list">
                      <li><FaTags color="#0044EB" /> {project.industry}</li>
                      <li><FaBuilding color="#0044EB" /> {project.field}</li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}