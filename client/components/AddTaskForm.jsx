import React from 'react'
import { connect } from 'react-redux'

class AddTaskForm extends React.Component {

  render(){

    return (
      <>
      </>
    )
  }
}

function mapStateToProps(globalState) {
  return {
    animals: globalState.animals
  }
}

export default connect(mapStateToProps)(AddTaskForm)
