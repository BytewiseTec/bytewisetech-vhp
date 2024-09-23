import gql from 'graphql-tag'
import { Project } from './[slug]/query'

export interface ProjectsQuery {
  projectCollection: {
    items: Pick<Project, '_id' | 'slug' | 'name' | 'title' | 'thumbnail' | 'field' | 'industry'>[];
  }
}

export const GET_PROJECTS = gql`
  query ProjectCollection {
    projectCollection {
      items {
        _id
        slug
        name
        thumbnail {
          url
          width
          height
          title
        }
        field
        industry
      }
    }
  }
`
