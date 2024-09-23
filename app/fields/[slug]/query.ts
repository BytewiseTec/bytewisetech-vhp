import { EntryId, ListItem } from '@/app/content.types'
import { Document } from '@contentful/rich-text-types'
import gql from 'graphql-tag'

export interface FieldIdQuery {
  fieldCollection: {
    items: EntryId[];
  }
}

export const GET_FIELD_ID = gql`
  query FieldCollection($slug: String!) {
    fieldCollection(where: { slug: $slug }) {
      items {
        sys {
          id
        }
      }
    }
  }
`

export interface Field {
  _id: string
  name: string
  benefits: string[]
  processes: ListItem[]
  whyUs: ListItem
  slug: string
  p0: {
    json: Document
  }
  p1: {
    json: Document
  }
}

export interface FieldQuery {
  field: Field;
}

export const GET_FIELD = gql`
  query Field($id: String!) {
    field(id: $id) {
      _id
      name
      benefits
      processes
      whyUs
      slug
      p0 {
          json
      }
      p1 {
          json
      }
    }
  }
`
