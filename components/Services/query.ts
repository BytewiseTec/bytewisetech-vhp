import { Media } from '../../app/content.types'
import { gql } from '@apollo/client'
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
  query ServiceCollection {
    serviceCollection {
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