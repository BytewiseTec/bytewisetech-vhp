import Image from 'next/image'
import { query } from '../ApolloClient'
import { GET_PROJECTS, ProjectsQuery } from './query'

export default async function PortfolioPage() {
  const { data: projectsData } = await query<ProjectsQuery>({
    query: GET_PROJECTS,
  })

  const { items: projects } = projectsData.projectCollection || {}

  return (
    <>
      <section
        className="page_banner_section text-center"
        style={{ backgroundImage: 'url(\'assets/images/shapes/bg_pattern_4.svg\')' }}
      >
        <div className="container">
          <div className="heading_focus_text text-white">
            Our
            <span className="badge bg-secondary">Portfolio 😍</span>
          </div>
          <h1 className="page_title mb-0 text-white">Our Portfolio</h1>
        </div>
      </section>

      <section className="portfolio_section section_space bg-light">
        <div className="container">
          <div className="filter_elements_wrapper row">
            {projects?.map((project) => (
              <div className="col-lg-6 technology" key={project._id}>
                <div className="portfolio_block portfolio_layout_2">
                  <div className="portfolio_image">
                    <a className="portfolio_image_wrap bg-light" href={`/portfolio/${project.slug}`}>
                      <Image
                        src={project.thumbnail.url}
                        width={project.thumbnail.width}
                        height={project.thumbnail.height}
                        alt={project.thumbnail.title} />
                    </a>
                  </div>
                  <div className="portfolio_content">
                    <h3 className="portfolio_title">
                      <a href={`/portfolio/${project.slug}`}>
                        {project.title}
                      </a>
                    </h3>
                    <ul className="category_list unordered_list">
                      <li><i className="fa-solid fa-tags"></i> {project.industry}</li>
                      <li><i className="fa-solid fa-building"></i> {project.field}</li>
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