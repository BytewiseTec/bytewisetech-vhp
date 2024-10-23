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

export interface BlogPostQuery {
  blog: {
    name: string;
    body: {
      json: Document;
    };
  }
}

export const GET_BLOG_POST = gql`
  query Blog($id: String!) {
    blog(id: $id) {
      name
      body {
        json
      }
    }
  }
`
