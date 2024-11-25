import { Media } from '../../app/content.types'
import { gql } from '@apollo/client'
export interface Technology {
    _id: string;
    name: string;
    stack: string;
    url: string;
    logo: Media
}

export interface TechnologyQuery {
    technologiesCollection: {
        items: Technology[];
    }
}

export interface BannerItem {
    title: string
    description: string
    icon: string
    href: string
    image: string
    list: string
}
export interface fields{
    data:BannerItem[]
    heading:string
}
export interface BannerQuery {
    bannerCollection: {
        items:fields[]
    }
}
export const GET_BANNER = gql`
  query BannerCollection {
    bannerCollection {
      items {
         
          data
          heading
        
      }
    }
  }
`

export const GET_TECHNOLOGY = gql`
 query TechnologiesCollection {
    technologiesCollection {
        items {
            _id
            name
            stack
            url
            logo {
                size
                url
                width
                height
            }
        }
    }
}

`