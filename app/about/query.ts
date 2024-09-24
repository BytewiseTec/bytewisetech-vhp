import { Media } from '@/app/content.types'
import { gql } from '@apollo/client'
import { ListItem } from '@/app/content.types'
export interface Featured {
    _id: string;
    company: string;
    logo: Media
}
export interface FeatureQuery {
    partnerCollection: {
        items: Featured[];
    }
}

export interface TeamMember {
  _id: string;
  fullName: string;
  title: string;
  experience: string;
  email: string;
  phone: string;
  social: string[];
  skills: string[];
  bio: string;
  education: string;
  portrait: Media;
  slug: string; 
}

export interface AboutData {
  _id: string;
  title:string;
  tiles:ListItem[];
  headingsections:string
  sections:string;
  banner:Media
  highlightImage:Media
  whyUs:ListItem[]
  highlight:ListItem[]
}
export interface TeamCollectionQuery {
  teamCollection: {
    items: TeamMember[];
  };
}
export const GET_TEAM_COLLECTION = gql`
  query TeamCollection {
    teamCollection {
      items {
        _id
        fullName
        title
        experience
        email
        phone
        social
        skills
        bio
        education
        slug
        portrait {
          title
          url
          height
          width
        }
      }
    }
  }
`
export const GET_FEATURED = gql`
  query PartnerCollection {
    partnerCollection {
        items {
            _id
            company
            logo {
                url
                width
                height
            }
        }
    }
}
`
export interface AboutQuery {
  pageCollection: {
    items: AboutData[];
  };
}

export const GET_ABOUT = gql`
query PageCollection {
    pageCollection {
        items {
            _id
            title
            headingsections
            sections
            tiles
            highlight
            whyUs
            banner {
                size
                url
                width
                height
            }
            highlightImage {
                size
                url
                width
                height
            }
        }
    }
}

`