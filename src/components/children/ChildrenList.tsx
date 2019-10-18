import * as React from 'react'
import { Children } from '../../interfaces'
import { ChildItem } from './ChildItem'

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
