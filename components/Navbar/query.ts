import { Link } from '../../app/layout.types'
import gql from 'graphql-tag'
import { TeamMember } from '../../app/about/query'
import { Media } from '../../app/content.types'
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
export interface CaseStudy {
  name: string;
  slug: string;
  banner: Media;
}
export interface NavLink {
  _id: string;
  name: string;
  slug: string;
}

export interface HeaderLinksQuery {
  links: {
    header: HeaderLinks;
  };
}

export interface TeamMemberQuery {
  teamCollection: {
    items: TeamMember[];
  };
}
export const GET_TEAM = gql`
  query TeamCollection {
    teamCollection {
      items {
        fullName
        title
        portrait {
          url
          width
          height
        }
        bio
        slug
        social
      }
    }
  }
`
export interface CaseStudiesQuery {
  projectCollection: {
    items: CaseStudy[];
  };
}
export const GET_CASE_STUDIES = gql`
  query ProjectCollection {
    projectCollection(order: [order_ASC]) {
      items {
        name
        slug
        banner {
          url
        }
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

export interface ServicesLinksQuery {
  serviceCollection: {
    items: NavLink[];
  };
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
  };
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

export interface FooterSocialsQuery {
  footerCollection: {
    items: {
      socials: string[];
    }[];
  };
}

export const GET_FOOTER_SOCIALS = gql`
  query FooterSocialsCollection {
    footerCollection {
      items {
        socials
      }
    }
  }
`
