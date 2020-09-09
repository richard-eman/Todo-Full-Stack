import React from 'react'
import Form from './Form'
import BackButton from './BackButton'

class EditTask extends React.Component {
  state = {}
  
  render() {
    return (
      <>
        <h2>EditTask</h2>
        <BackButton/>
        <Form/>
      </>
    )
  }
}

export default EditTask
