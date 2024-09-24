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