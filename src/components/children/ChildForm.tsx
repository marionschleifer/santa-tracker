import React, { Component } from 'react'

export class ChildForm extends Component {
  constructor(props: any) {
    super(props)
    this.state = {
      name: '',
      age: 0,
      isNice: true,
    }
  }

  render() {
    return (
      <div>
        <h1>Add child</h1>
        <form>
          <div>
            <label>Name:</label>
            <br />
            <input type="text" name="name" />
          </div>
          <br />
          <div>
            <label>Age:</label>
            <br />
            <input type="text" name="age" />
          </div>
          <br />
          <div>
            <label>Is nice:</label>
            <br />
            <input type="radio" name="isNice" value="true" /> Yes
            <br />
            <input type="radio" name="isNice" value="no" /> No
            <br />
            <br />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

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
