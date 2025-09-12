import { gql } from '@apollo/client'

import { Media } from '../../app/content.types'
export interface Service {
  _id: string;
  name: string;
  icon: Media;
  areasjson: string[]; 
  slug:String;
}
export interface ServicesQuery {
  serviceCollection: {
    items: Service[];
  }
}
export const GET_SERVICES = gql`
  query ServiceCollection($limit: Int) {
    serviceCollection(limit: $limit, order: [order_ASC]) {
      items {
        _id
        name
        icon {
          title
          url
          height
          width
        }
        areasjson
        slug
      }
    }
  }
`