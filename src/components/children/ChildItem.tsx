import { Card, Grid } from '@material-ui/core'
import { textAlign } from '@material-ui/system'
import * as React from 'react'
import { Child } from '../../interfaces'
import './../../styles/Children.css'

export function ChildItem(props: Child) {
  return (
    <Grid>
      <Card className="childrenCard">
        <h1>{props.name}</h1>
        <p>{props.age}</p>
        <p>{props.isNice ? '👍' : '👎'}</p>
      </Card>
    </Grid>
  )
}
