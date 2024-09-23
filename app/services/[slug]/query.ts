import { EntryId, ListItem } from '@/app/content.types'
import { Document } from '@contentful/rich-text-types'
import gql from 'graphql-tag'

export interface ServiceIdQuery {
  serviceCollection: {
    items: EntryId[];
  }
}

export const GET_SERVICE_ID = gql`
  query ServiceCollection($slug: String!) {
    serviceCollection(where: { slug: $slug }) {
      items {
        sys {
          id
        }
      }
    }
  }
`

export interface Service {
  _id: string
  slug: string
  name: string
  outcomes: ListItem[]
  processes: ListItem[]
  p0: {
    json: Document
  }
  p1: {
    json: Document
  }
}

export interface ServiceQuery {
  service: Service;
}

export const GET_SERVICE = gql`
  query Service($id: String!) {
    service(id: $id) {
      _id
      slug
      name
      outcomes
      processes
      p0 {
        json
      }
      p1 {
        json
      }
    }
  }
`
