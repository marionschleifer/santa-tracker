import { useMutation } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import React, { Component } from 'react'
import {
  AddChildMutation,
  AddChildMutationVariables,
  GetChildrenQuery,
  useAddChildMutation,
} from '../../generated/graphql'
import { GET_CHILDREN } from './ChildrenList'

const ADD_CHILD = gql`
  mutation addChild($name: String!, $age: Int!, $isNice: Boolean!) {
    insert_children(objects: [{ name: $name, age: $age, isNice: $isNice }]) {
      returning {
        id
        name
        age
        isNice
      }
    }
  }
`

export function ChildForm() {
  const [childName, setChildName] = React.useState('')
  const [childAge, setChildAge] = React.useState(0)
  const [childIsNice, setChildIsNice] = React.useState(true)
  const [addChild] = useAddChildMutation()
  // const [addChild] = useMutation<AddChildMutation, AddChildMutationVariables>(ADD_CHILD)
  return (
    <form
      className="formInput"
      onSubmit={e => {
        e.preventDefault()
        // add child
        addChild({
          variables: { name: childName, age: childAge, isNice: childIsNice },
          update(cache, { data }) {
            // do not update cache for public feed
            if (!data) return null

            const getExistingChildren = cache.readQuery<GetChildrenQuery>({ query: GET_CHILDREN })
            // Add the new todo to the cache
            const existingChildren = getExistingChildren ? getExistingChildren.children : []
            const insertChildren = data.insert_children
            if (!insertChildren) throw Error()
            const newChild = insertChildren.returning[0]
            cache.writeQuery<GetChildrenQuery>({
              query: GET_CHILDREN,
              data: { children: [newChild, ...existingChildren] },
            })
          },
        })
        setChildName('')
        setChildAge(0)
        setChildIsNice(true)
      }}
    >
      <h1>New child</h1>
      Name:
      <br />
      <input
        className="input"
        placeholder="Child's name"
        value={childName}
        onChange={e => setChildName(e.target.value)}
      />
      <br />
      Age:
      <br />
      <input
        type="number"
        className="input"
        placeholder="Child's age"
        value={childAge}
        onChange={e => setChildAge(Number(e.target.value))}
      />
      <br />
      Is nice:
      <br />
      <input type="radio" name="isNice" value="true" /> Yes
      <br />
      <input type="radio" name="isNice" value="false" /> No
      <br />
      <i className="inputMarker fa fa-angle-right" />
      <input type="submit" value="Submit" />
    </form>
  )
}

export default ChildForm

// export class ChildForm extends Component {
//   constructor(props: any) {
//     super(props)
//     this.state = {
//       name: '',
//       age: 0,
//       isNice: true,
//     }
//   }

//   render() {
//     return (
//       <div>
//         <h1>Add child</h1>
//         <form>
//           <div>
//             <label>Name:</label>
//             <br />
//             <input type="text" name="name" />
//           </div>
//           <br />
//           <div>
//             <label>Age:</label>
//             <br />
//             <input type="text" name="age" />
//           </div>
//           <br />
//           <div>
//             <label>Is nice:</label>
//             <br />
//             <input type="radio" name="isNice" value="true" /> Yes
//             <br />
//             <input type="radio" name="isNice" value="no" /> No
//             <br />
//             <br />
//           </div>
//           <button type="submit">Submit</button>
//         </form>
//       </div>
//     )
//   }
// }

//   <Container>
//     <h1>Add child</h1>
//     <FormControl>
//       <InputLabel htmlFor="name">Name</InputLabel>
//       <Input id="name" />
//     </FormControl>
//     <br />
//     <FormControl>
//       <InputLabel htmlFor="age">Age</InputLabel>
//       <Input id="age" />
//     </FormControl>
//     <br />
//     <FormControl>
//       <InputLabel htmlFor="isNice">Is nice</InputLabel>
//       <RadioGroup>
//         <Radio name="isNice" value="true" inputProps={{ 'aria-label': 'Yes' }} />
//         <Radio name="isNice" value="false" inputProps={{ 'aria-label': 'No' }} />
//       </RadioGroup>
//     </FormControl>
//   </Container>
