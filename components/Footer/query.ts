import { gql } from '@apollo/client'

import { Link } from '../../app/layout.types'
export interface Icon{
    href: string,
     title: string 
}
export interface Footer {
    _id: string;
    heading: string[];
    company: Icon[];
    socials: string [];
}
export interface FooterQuery {
    footerCollection: {
        items: Footer[];
    }
}
export interface HeaderLinks {
    services: Link;
    portfolio: Link;
    fields: Link;
    contact: Link;
  }
export interface HeaderLinksQuery {
    links: {
      header: HeaderLinks;
    }
  }

  export interface NavLink {
    _id: string;
    name: string;
    slug: string;
  }
  export interface ServicesLinksQuery {
    serviceCollection: {
      items: NavLink[];
    }
  }
  
  export const GET_SERVICES = gql`
  query ServiceCollection {
    serviceCollection(order: [order_ASC]) {
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
export const GET_LINKS = gql`
  query Links {
    links(id: "5wSNq34HGEvBudALxOO3ZD") {
      header
    }
  }
`
export const GET_FEATURED = gql`
 query FooterCollection {
    footerCollection {
        items {
            _id
            heading
            socials
            company
        }
    }
}
`