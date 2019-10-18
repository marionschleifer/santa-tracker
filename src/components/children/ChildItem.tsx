import * as React from 'react'
import { Child } from '../../interfaces'

export function ChildItem(props: Child) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.age}</p>
      <p>{props.isNice ? '👍' : '👎'}</p>
    </div>
  )
}
