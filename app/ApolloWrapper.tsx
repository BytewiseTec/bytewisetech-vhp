
'use client'

import { HttpLink, ApolloLink } from '@apollo/client'
import {
  ApolloNextAppProvider,
  ApolloClient,
  InMemoryCache,
} from '@apollo/experimental-nextjs-app-support'
import React from 'react'

const noCacheLink = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      'Cache-Control': 'no-store',
    },
  })
  return forward(operation)
})

function makeClient() {
  const httpLink = new HttpLink({
    uri: process.env.CONTENTFUL_GRAPHQL_ENDPOINT, 
    headers: {
      Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
    },
  })

  return new ApolloClient({
    cache: new InMemoryCache(),
    link: ApolloLink.from([
      noCacheLink,
      httpLink,
    ]),
  })
}

export function ApolloWrapper({ children }: React.PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  )
}
