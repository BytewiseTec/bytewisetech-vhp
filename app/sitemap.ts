import { MetadataRoute } from 'next'
import { query } from './ApolloClient'
import { FieldsLinksQuery, GET_FIELDS, GET_LINKS, HeaderLinksQuery, ServicesLinksQuery } from '../components/Navbar/query'
import { GET_SERVICES } from './services/query'
import { GET_TEAM_COLLECTION, TeamCollectionQuery } from './team/query'
import { GET_PROJECTS, ProjectsQuery } from './portfolio/query'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://bytewisetechnologies.com'
  const { data: linksCollection } = await query<HeaderLinksQuery>({
    query: GET_LINKS
  })
  const { data: servicesCollection } = await query<ServicesLinksQuery>({
    query: GET_SERVICES
  })
  const { data: teamMemberData } = await query<TeamCollectionQuery>({
    query: GET_TEAM_COLLECTION
  })
  const { data: projectData } = await query<ProjectsQuery>({
    query: GET_PROJECTS
  })
  const { data: fieldsCollection } = await query<FieldsLinksQuery>({
    query: GET_FIELDS
  })
  const { portfolio, services } = linksCollection?.links.header || {}

  const links: MetadataRoute.Sitemap = [
    {
      url: appUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...servicesCollection?.serviceCollection.items.map((service) => ({
      url: `${appUrl}/services/${service.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    })) || [],
    // ...teamMemberData?.teamCollection.items.map((team) => ({
    //   url: `${appUrl}/team/${team.slug}`,
    //   lastModified: new Date(),
    //   changeFrequency: 'monthly',
    //   priority: 0.5,
    // })) || [],
    ...projectData?.projectCollection.items.map((project) => ({
      url: `${appUrl}/portfolio/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    })) || [],
    ...fieldsCollection?.fieldCollection.items.map((field) => ({
      url: `${appUrl}/fields/${field.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    })) || [],
    {
      url: `${appUrl}${portfolio.href}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${appUrl}${services.href}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${appUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${appUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ] as MetadataRoute.Sitemap

  return links
}
