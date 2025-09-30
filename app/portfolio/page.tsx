import Link from 'next/link'
import { Metadata } from 'next'
import { FaBuilding, FaTags } from 'react-icons/fa'
import Script from 'next/script'

import generateStructuredData from '@/utils/structured-data'
import Carousel from '@/components/Shared/Carousel'

import PageBanner from '../../components/PageBanner'
import { query } from '../ApolloClient'

import { GET_PROJECTS, ProjectsQuery } from './query'

export const metadata: Metadata = {
  title: 'Our Work',
  description: 'See our software development portfolio. View case studies on our healthcare app development, enterprise web applications, and more. See the proof in our work.',
  keywords: 'Software Development Portfolio, healthcare app development, enterprise web application development',
  authors: { name: 'Bytewise Technologies', url: 'https://bytewisetechnologies.com' },
  openGraph: {
    locale: 'en_US',
    type: 'website',
    title: 'Our Work',
    description: 'See our software development portfolio. View case studies on our healthcare app development, enterprise web applications, and more. See the proof in our work.',
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
      <Script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        id="structured-data"
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
                    <Link className="portfolio_image_wrap bg-light" href={`/portfolio/${project.slug}`} aria-label={project.name} title='View project'>
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
                      <Link href={`/portfolio/${project.slug}`} title={project.name}>
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