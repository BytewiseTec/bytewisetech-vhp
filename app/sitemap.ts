import { MetadataRoute } from 'next'

import { FieldsLinksQuery, GET_FIELDS, GET_LINKS, HeaderLinksQuery, ServicesLinksQuery } from '../components/Navbar/query'

import { query } from './ApolloClient'
import { GET_SERVICES } from './services/query'
import { GET_PROJECTS, ProjectsQuery } from './portfolio/query'
import { GET_BLOG_POST_CATEGORIES, GetBlogPostCategoriesQuery } from './blog/[slug]/query'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://bytewisetechnologies.com'
  const { data: linksCollection } = await query<HeaderLinksQuery>({
    query: GET_LINKS
  })
  const { data: servicesCollection } = await query<ServicesLinksQuery>({
    query: GET_SERVICES
  })
  const { data: blogCollection } = await query<GetBlogPostCategoriesQuery>({
    query: GET_BLOG_POST_CATEGORIES
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
    ...blogCollection?.blogCollection.items.map((blog) => ({
      url: `${appUrl}/blog/${blog.slug}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.5,
    })) || [],
    ...servicesCollection?.serviceCollection.items.map((service) => ({
      url: `${appUrl}/services/${service.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    })) || [],
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
      url: `${appUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
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
