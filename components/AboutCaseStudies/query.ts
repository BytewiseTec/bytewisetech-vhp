import { gql } from '@apollo/client'
import { Media } from '@/app/content.types'
import { ListItem } from '@/app/content.types'
export interface CaseStudy {
  _id: string;
  name: string;
  slug: string;
  field: string;
  short: string;
  industry: string;
  address: string;
  technologies: string[];
  thumbnail: Media;
  banner: Media;
  abouttext:string
  aboutdata:ListItem[]
  aboutimage:string[]
  socials:string[]
}
export interface CaseStudiesQuery {
  projectCollection: {
    items: CaseStudy[];
  };
}
export const GET_CASE_STUDIES = gql`
  query ProjectCollection {
    projectCollection {
      items {
        _id
        name
        slug
        field
        aboutimage
        short
        aboutdata
        abouttext
        industry
        address
        technologies
        thumbnail {
          url
        }
        banner {
          url
        
        }
      }
    }
  }
`
