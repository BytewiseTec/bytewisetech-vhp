import { Media } from '../../app/content.types'
import { gql } from '@apollo/client'
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