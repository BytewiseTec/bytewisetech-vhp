

import gql from 'graphql-tag'

import { Link } from '../../app/layout.types'

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

export interface HeroMember {
 title:string,
 description:string,
 phone:string
 points:string[]
}

export interface HeroQuery {
  heroCollection: {
    items: HeroMember[];
  }
}


export const GET_HERO = gql`
query HeroCollection {
  heroCollection {
    items {
      title
      description
      phone
      points
    }
  }
}


`