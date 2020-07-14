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
    // tasks: globalState.tasks
  }
}

export default connect(mapStateToProps)(AddTaskForm)
