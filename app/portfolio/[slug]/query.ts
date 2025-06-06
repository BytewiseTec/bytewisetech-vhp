import { Document } from '@contentful/rich-text-types'
import gql from 'graphql-tag'

import { Config, EntryId, Media } from '../../content.types'

export interface ProjectIdQuery {
  projectCollection: {
    items: EntryId[];
  }
}

export const GET_PROJECT_ID = gql`
  query ProjectCollection($slug: String!) {
    projectCollection(where: { slug: $slug }) {
      items {
        sys {
          id
        }
      }
    }
  }
`

export interface Project {
  _id: string
  slug: string
  name: string
  field: string
  short: string
  industry: string
  address: string
  technologies: string[]
  config: Config
  thumbnail: Media
  banner: Media
  title: string
  info: Record<string, string>
  requirements: string[]
  highlightImagesCollection: {
    items: Media[]
  }
  p0: {
    json: Document
  }
  p1: {
    json: Document
  }
  p2: {
    json: Document
  }
}

export interface ProjectQuery {
  project: Project;
}

export const GET_PROJECT = gql`
  query Project($id: String!) {
    project(id: $id) {
      _id
      slug
      name
      field
      short
      industry
      address
      technologies
      config
      thumbnail {
        url
        width
        height
        title
        description
      }
      banner {
        url
        width
        height
        title
        description
      }
      title
      info
      requirements
      p0 {
        json
      }
      p1 {
        json
      }
      p2 {
        json
      }
    }
  }
`
