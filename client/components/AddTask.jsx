import React from 'react'
import Form from './Form'
import BackButton from './BackButton'

class AddTask extends React.Component {
  state = {}
  
  render() {
    return (
      <>
        <h2>AddTask</h2>
        <BackButton/>
        <Form/>
      </>
    )
  }
}

export default AddTask
