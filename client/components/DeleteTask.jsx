import React from 'react'
import { connect } from 'react-redux'

function DeleteTask(props) {

  return (
    <>
    </>
  )
}

function mapStateToProps(globalState) {
  return {
    // tasks: globalState.tasks
  }
}

export default connect(mapStateToProps)(DeleteTask)
