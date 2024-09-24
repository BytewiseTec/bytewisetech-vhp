import { HttpLink, ApolloLink, ApolloClient, InMemoryCache} from '@apollo/client'
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support'

const noCacheLink = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      'Cache-Control': 'no-store'
    }
  })
  return forward(operation)
})
const { getClient, query, PreloadQuery } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: ApolloLink.from([
      noCacheLink,
      new HttpLink({
        uri: process.env.CONTENTFUL_GRAPHQL_ENDPOINT,
        headers: {
          Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`
        }
      })
    ])
  })
})
 export { getClient, query, PreloadQuery }
// export async function queryWithNoCache<T>(query: DocumentNode, variables?: any) {
//   const client = getClient()
//   if (!client) {
//     throw new Error('Apollo Client not initialized')
//   }
//   return client.query<T>({
//     query,
//     variables,
//     fetchPolicy: 'no-cache'
//   })
// }
// export default getClient()
