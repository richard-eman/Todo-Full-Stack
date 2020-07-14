import React from 'react'
import { connect } from 'react-redux'

class AddTaskForm extends React.Component {

  render(){

    return (
      <>
      </>
    )
    // make api
    // make db function
    // make action
    // add action to reducer
    // add reducer to combine reducer
    // can set task in global state by id
  }
}

function mapStateToProps(globalState) {
  return {
    // tasks: globalState.tasks
  }
}

export default connect(mapStateToProps)(AddTaskForm)
