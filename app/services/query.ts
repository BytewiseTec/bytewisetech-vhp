import { Media } from '../content.types'
import { gql } from '@apollo/client'
export interface Service {
  _id: string;
  name: string;
  icon: Media;
  slug:String;
  heading:string;
  heading2:string;
  banner:Media
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
        heading
        heading2
        banner {
          title
          url
          height
          width
        }
        slug
      }
    }
  }
`