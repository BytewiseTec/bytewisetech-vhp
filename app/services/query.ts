import { gql } from '@apollo/client'

import { ListItem, Media } from '../content.types'

export interface ServicesPage {
  _id: string
  title: string
  sections: ListItem[]
  highlightImage: Media
  whyUs: ListItem[]
  whyUsImage: Media
}

export interface ServicesPageQuery {
  page: ServicesPage
}

export const GET_SERVICES_PAGE = gql`
  query Page {
    page(id: "4wLR2o1AvGwTu33kU9hq3S") {
      _id
      title
      sections
      highlightImage {
        title
        url
        height
        width
      }
      whyUs
      whyUsImage {
        title
        url
        height
        width
      }
    }
  }
`

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
    serviceCollection(order: [order_ASC]) {
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