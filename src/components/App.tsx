import { ApolloProvider } from '@apollo/react-hooks'
import { InMemoryCache } from 'apollo-cache-inmemory'
import ApolloClient from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import React from 'react'
import { Children } from '../interfaces'
import './../styles/App.css'
import { ChildrenList } from './children/ChildrenList'

const createApolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({
      uri: 'https://graphql-santa-app.herokuapp.com',
      headers: {},
    }),
    cache: new InMemoryCache(),
  })
}

export function App() {
  const children: Children = [
    { id: 'aaa', name: 'Marion', age: 30, isNice: true },
    { id: 'bbb', name: 'Lukas', age: 31, isNice: true },
    { id: 'ccc', name: 'Sven', age: 29, isNice: true },
  ]
  const client = createApolloClient()
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          <ChildrenList children={children} />
          <img src="https://c.pxhere.com/photos/a8/92/imp_pair_funny_cute_sweet_fun_deco_figure-1054982.jpg!d" />
        </header>
      </div>
    </ApolloProvider>
  )
}
