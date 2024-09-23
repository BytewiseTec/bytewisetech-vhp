import { Link } from '@/app/layout.types'
import gql from 'graphql-tag'

export interface HeaderLinks {
  home: Link;
  company: Link;
  services: Link;
  portfolio: Link;
  fields: Link;
  product: Link;
  pages: Link;
  contact: Link;
}

export interface NavLink {
  _id: string;
  name: string;
  slug: string;
}

export interface HeaderLinksQuery {
  links: {
    header: HeaderLinks;
  }
}

export const GET_LINKS = gql`
  query Links {
    links(id: "5wSNq34HGEvBudALxOO3ZD") {
      header
    }
  }
`

export interface ServicesLinksQuery {
  serviceCollection: {
    items: NavLink[];
  }
}

export const GET_SERVICES = gql`
  query ServiceCollection {
    serviceCollection {
      items {
        _id
        name
        slug
      }
    }
  }
`

export interface FieldsLinksQuery {
  fieldCollection: {
    items: NavLink[];
  }
}

export const GET_FIELDS = gql`
  query FieldCollection {
    fieldCollection {
      items {
        _id
        name
        slug
      }
    }
  }
`
