import gql from 'graphql-tag'
import { ListItem } from '../content.types'

export interface ContactData {
  _id: string;
  title:string;
  tiles: ListItem[];
}

export interface ContactQuery {
  page: ContactData;
}

export const GET_CONTACT = gql`
  query Page {
    page(id: "5xc3gYMEl3uys3C0zGY0v6") {
      _id
      title
      tiles
    }
  }
`