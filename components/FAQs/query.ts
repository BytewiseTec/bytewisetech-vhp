import { gql } from '@apollo/client'
import { ListItem } from '../../app/content.types'

export interface FAQ {
  _id: string
  question: string
  answer: string
  attributes: ListItem[]
}

export interface FAQsQuery {
  faqsCollection: {
    items: FAQ[]
  };
}
export const GET_FAQS = gql`
  query FaqsCollection {
    faqsCollection(order: [order_ASC]) {
      items {
        _id
        question
        answer
        attributes
      }
    }
  }
`
