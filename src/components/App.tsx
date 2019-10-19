import { ApolloProvider } from '@apollo/react-hooks'
import { InMemoryCache } from 'apollo-cache-inmemory'
import ApolloClient from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import React from 'react'
import './../styles/App.css'
import { ChildrenList } from './children/ChildrenList'

const createApolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({
      uri: 'https://graphql-santa-app.herokuapp.com/v1/graphql',
      headers: {},
    }),
    cache: new InMemoryCache(),
  })
}

export function App() {
  const client = createApolloClient()
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          <ChildrenList />
          <img src="https://c.pxhere.com/photos/a8/92/imp_pair_funny_cute_sweet_fun_deco_figure-1054982.jpg!d" />
        </header>
      </div>
    </ApolloProvider>
  )
}
