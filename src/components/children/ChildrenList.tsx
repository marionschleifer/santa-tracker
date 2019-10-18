import { useMutation, useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import * as React from 'react'
import { Children } from '../../interfaces'
import { ChildItem } from './ChildItem'

// const GET_CHILDREN = gql`
//   query getChildren {
//     children {
//       id
//       name
//       age
//       isNice
//     }
//   }
// `

interface P {
  children: Children
}

export function ChildrenList(props: P) {
  return (
    <>
      {props.children.map(child => (
        <ChildItem key={child.id} {...child} />
      ))}
    </>
  )
}
