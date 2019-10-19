import { useMutation, useQuery } from '@apollo/react-hooks'
import { Container } from '@material-ui/core'
import { Grid } from '@material-ui/core'
import gql from 'graphql-tag'
import * as React from 'react'
import { GetChildrenQuery, GetChildrenQueryVariables } from '../../generated/graphql'
import { Children } from '../../interfaces'
import { ChildItem } from './ChildItem'

const GET_CHILDREN = gql`
  query getChildren {
    children {
      id
      name
      age
      isNice
    }
  }
`

interface P {
  children: Children
}

export function ChildrenList() {
  const { loading, error, data } = useQuery<GetChildrenQuery, GetChildrenQueryVariables>(GET_CHILDREN)
  if (loading || !data) return <p>Loading ...</p>
  return (
    <Container>
      <Grid>
        {data.children.map(child => (
          <ChildItem key={child.id} {...child} />
        ))}
      </Grid>
    </Container>
  )
}
