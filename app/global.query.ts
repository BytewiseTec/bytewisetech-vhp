import { Document } from '@contentful/rich-text-types'
import gql from 'graphql-tag'

export interface RouteLinksQuery {
  links: {
    routes: Record<'about' | 'team' | 'home', string>;
  }
}

export const GET_ROUTES = gql`
  query Links($id: String!) {
    links(id: $id) {
      routes
    }
  }
`

export interface GetBlogPostByIdQuery {
  blog: {
    title: string;
    body: {
      json: Document;
    };
  }
}

export const GET_BLOG_POST_BY_ID = gql`
  query Blog($id: String!) {
    blog(id: $id) {
      title
      body {
        json
      }
    }
  }
`
